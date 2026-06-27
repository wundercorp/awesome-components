#!/usr/bin/env node
import { access, readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { spawn } from "node:child_process";

const repositoryRootDirectory = process.cwd();
const componentMetadataPath = path.join(repositoryRootDirectory, "data", "components.json");
const componentsDirectory = path.join(repositoryRootDirectory, "components");
const maximumTextFileBytesToIndex = 250_000;
const defaultResultLimit = 10;

const componentSearchSynonyms = new Map([
  ["login", ["signin", "sign-in", "sign_in", "auth", "authentication", "account", "user", "email", "password", "clerk"]],
  ["signin", ["login", "sign-in", "sign_in", "auth", "authentication", "account", "password", "email", "clerk"]],
  ["signup", ["register", "registration", "create", "account", "auth", "authentication", "onboarding", "clerk"]],
  ["register", ["signup", "registration", "create", "account", "onboarding"]],
  ["auth", ["authentication", "login", "signin", "signup", "register", "account", "clerk"]],
  ["dashboard", ["admin", "analytics", "overview", "metrics", "chart", "panel"]],
  ["pricing", ["plan", "subscription", "billing", "tier", "checkout", "payment"]],
  ["calendar", ["schedule", "scheduler", "date", "event", "booking"]],
  ["table", ["datatable", "data-table", "grid", "rows", "columns"]],
  ["form", ["input", "field", "validation", "submit"]],
  ["modal", ["dialog", "popup", "sheet", "drawer"]],
  ["chat", ["message", "conversation", "assistant", "ai"]],
  ["search", ["command", "combobox", "autocomplete", "filter"]],
  ["upload", ["file", "dropzone", "attachment", "image"]],
  ["navigation", ["navbar", "sidebar", "menu", "tabs", "breadcrumb"]],
  ["nav", ["navbar", "sidebar", "menu", "tabs", "breadcrumb", "navigation"]],
  ["landing", ["hero", "marketing", "homepage", "cta"]],
  ["hero", ["landing", "marketing", "homepage", "cta"]],
  ["checkout", ["payment", "pricing", "billing", "cart"]],
  ["profile", ["account", "user", "settings", "avatar"]],
]);

const wordsToIgnore = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "be",
  "build",
  "component",
  "components",
  "find",
  "for",
  "from",
  "get",
  "give",
  "help",
  "i",
  "in",
  "is",
  "it",
  "like",
  "looking",
  "me",
  "need",
  "of",
  "please",
  "show",
  "that",
  "the",
  "this",
  "to",
  "want",
  "with",
]);

function normalizeSearchText(value) {
  return String(value ?? "")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .toLowerCase()
    .replace(/[\\/_-]+/g, " ")
    .replace(/[^a-z0-9\s.]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenizeSearchText(value) {
  return normalizeSearchText(value)
    .split(" ")
    .map((token) => token.trim())
    .filter((token) => token.length > 1)
    .filter((token) => !wordsToIgnore.has(token));
}

function uniqueValues(values) {
  const uniqueValueSet = new Set();
  const uniqueValueList = [];

  for (const value of values) {
    const normalizedValue = String(value ?? "").trim();

    if (normalizedValue.length === 0) {
      continue;
    }

    if (uniqueValueSet.has(normalizedValue)) {
      continue;
    }

    uniqueValueSet.add(normalizedValue);
    uniqueValueList.push(normalizedValue);
  }

  return uniqueValueList;
}

function expandQueryTokens(queryText) {
  const originalQueryTokens = tokenizeSearchText(queryText);
  const expandedQueryTokens = [];

  for (const queryToken of originalQueryTokens) {
    expandedQueryTokens.push(queryToken);

    const synonymList = componentSearchSynonyms.get(queryToken);

    if (Array.isArray(synonymList)) {
      expandedQueryTokens.push(...synonymList);
    }
  }

  return uniqueValues(expandedQueryTokens.map((queryToken) => normalizeSearchText(queryToken)).filter(Boolean));
}

function getNestedValue(sourceObject, candidatePropertyPaths) {
  for (const candidatePropertyPath of candidatePropertyPaths) {
    const pathParts = candidatePropertyPath.split(".");
    let currentValue = sourceObject;

    for (const pathPart of pathParts) {
      if (currentValue === null || typeof currentValue !== "object") {
        currentValue = undefined;
        break;
      }

      currentValue = currentValue[pathPart];
    }

    if (currentValue !== undefined && currentValue !== null && String(currentValue).trim().length > 0) {
      return currentValue;
    }
  }

  return "";
}

function flattenPrimitiveValues(sourceValue, primitiveValues = []) {
  if (sourceValue === null || sourceValue === undefined) {
    return primitiveValues;
  }

  if (["string", "number", "boolean"].includes(typeof sourceValue)) {
    primitiveValues.push(String(sourceValue));
    return primitiveValues;
  }

  if (Array.isArray(sourceValue)) {
    for (const arrayItem of sourceValue) {
      flattenPrimitiveValues(arrayItem, primitiveValues);
    }

    return primitiveValues;
  }

  if (typeof sourceValue === "object") {
    for (const [sourceKey, sourceChildValue] of Object.entries(sourceValue)) {
      primitiveValues.push(String(sourceKey));
      flattenPrimitiveValues(sourceChildValue, primitiveValues);
    }
  }

  return primitiveValues;
}

function coerceMetadataToComponentEntries(metadataJson) {
  if (Array.isArray(metadataJson)) {
    return metadataJson;
  }

  if (metadataJson && Array.isArray(metadataJson.components)) {
    return metadataJson.components;
  }

  if (metadataJson && Array.isArray(metadataJson.items)) {
    return metadataJson.items;
  }

  if (metadataJson && typeof metadataJson === "object") {
    return Object.values(metadataJson).filter((metadataValue) => metadataValue && typeof metadataValue === "object");
  }

  return [];
}

function normalizeRelativePath(filePath) {
  return String(filePath ?? "").replaceAll("\\", "/").replace(/^\.\//, "");
}

function getDirectoryPathFromKnownFilePath(filePath) {
  const normalizedFilePath = normalizeRelativePath(filePath);

  if (normalizedFilePath.endsWith("/README.md")) {
    return normalizedFilePath.slice(0, -"/README.md".length);
  }

  if (normalizedFilePath.endsWith("/prompt.md")) {
    return normalizedFilePath.slice(0, -"/prompt.md".length);
  }

  if (normalizedFilePath.endsWith("/rendered.html")) {
    return normalizedFilePath.slice(0, -"/rendered.html".length);
  }

  if (normalizedFilePath.endsWith("/screenshot.png")) {
    return normalizedFilePath.slice(0, -"/screenshot.png".length);
  }

  return normalizedFilePath;
}

function getDisplayName(metadataEntry, metadataIndex) {
  const componentName = String(
    getNestedValue(metadataEntry, [
      "componentName",
      "component_name",
      "title",
      "name",
      "component",
      "slug",
      "id",
    ]) || `Component ${metadataIndex + 1}`
  );

  const variantName = String(
    getNestedValue(metadataEntry, [
      "variantName",
      "variant_name",
      "variant",
    ]) || ""
  );

  if (variantName.length === 0 || normalizeSearchText(variantName) === "default") {
    return componentName;
  }

  return `${componentName} / ${variantName}`;
}

function makeComponentRecordFromMetadataEntry(metadataEntry, metadataIndex) {
  const name = getDisplayName(metadataEntry, metadataIndex);
  const author = String(
    getNestedValue(metadataEntry, [
      "authorName",
      "author_name",
      "author",
      "owner",
      "creator",
      "user",
      "package.author",
    ]) || ""
  );

  const description = String(
    getNestedValue(metadataEntry, [
      "description",
      "summary",
      "prompt",
      "readme",
      "notes",
      "content",
    ]) || ""
  );

  const readmePath = normalizeRelativePath(
    getNestedValue(metadataEntry, [
      "readmePath",
      "readme_path",
      "path",
      "files.readme",
    ]) || ""
  );

  const promptPath = normalizeRelativePath(
    getNestedValue(metadataEntry, [
      "promptPath",
      "prompt_path",
      "files.prompt",
      "promptFile",
      "prompt_file",
    ]) || ""
  );

  const renderedHtmlPath = normalizeRelativePath(
    getNestedValue(metadataEntry, [
      "renderedHtmlPath",
      "rendered_html_path",
      "htmlPath",
      "html_path",
      "files.rendered",
      "files.html",
    ]) || ""
  );

  const screenshotPath = normalizeRelativePath(
    getNestedValue(metadataEntry, [
      "screenshotPath",
      "screenshot_path",
      "screenshot",
      "image",
      "imagePath",
      "image_path",
      "files.screenshot",
    ]) || ""
  );

  const directoryPath = getDirectoryPathFromKnownFilePath(promptPath || readmePath || renderedHtmlPath || screenshotPath);
  const allPrimitiveValues = flattenPrimitiveValues(metadataEntry);
  const combinedSearchText = uniqueValues([
    name,
    author,
    description,
    directoryPath,
    readmePath,
    promptPath,
    renderedHtmlPath,
    screenshotPath,
    ...allPrimitiveValues,
  ]).join("\n");

  return {
    source: "metadata",
    name,
    author,
    description,
    path: directoryPath,
    readmePath,
    promptPath,
    renderedHtmlPath,
    screenshotPath,
    metadata: metadataEntry,
    searchText: combinedSearchText,
  };
}

async function pathExists(fileSystemPath) {
  try {
    await access(fileSystemPath);
    return true;
  } catch {
    return false;
  }
}

async function readJsonFile(jsonFilePath) {
  const jsonText = await readFile(jsonFilePath, "utf8");
  return JSON.parse(jsonText);
}

async function loadComponentRecordsFromMetadata() {
  if (!(await pathExists(componentMetadataPath))) {
    return [];
  }

  const metadataJson = await readJsonFile(componentMetadataPath);
  const metadataEntries = coerceMetadataToComponentEntries(metadataJson);

  return metadataEntries.map((metadataEntry, metadataIndex) => makeComponentRecordFromMetadataEntry(metadataEntry, metadataIndex));
}

async function collectComponentVariantDirectories() {
  const componentVariantDirectories = [];

  async function walkDirectory(currentDirectory) {
    const directoryEntries = await readdir(currentDirectory, { withFileTypes: true });
    const childDirectoryEntries = directoryEntries.filter((directoryEntry) => directoryEntry.isDirectory());
    const fileNames = new Set(directoryEntries.filter((directoryEntry) => directoryEntry.isFile()).map((directoryEntry) => directoryEntry.name));

    if (fileNames.has("prompt.md") || fileNames.has("rendered.html") || fileNames.has("screenshot.png")) {
      componentVariantDirectories.push(currentDirectory);
      return;
    }

    for (const childDirectoryEntry of childDirectoryEntries) {
      await walkDirectory(path.join(currentDirectory, childDirectoryEntry.name));
    }
  }

  if (await pathExists(componentsDirectory)) {
    await walkDirectory(componentsDirectory);
  }

  return componentVariantDirectories;
}

async function readTextFileForIndexing(filePath) {
  if (!(await pathExists(filePath))) {
    return "";
  }

  const fileStatistics = await stat(filePath);

  if (fileStatistics.size > maximumTextFileBytesToIndex) {
    return "";
  }

  return readFile(filePath, "utf8");
}

function getDisplayNameFromComponentPath(componentVariantDirectory) {
  const relativeDirectoryPath = path.relative(componentsDirectory, componentVariantDirectory);
  const directoryParts = relativeDirectoryPath.split(path.sep).filter(Boolean);

  if (directoryParts.length >= 3) {
    const componentName = directoryParts[directoryParts.length - 2];
    const variantName = directoryParts[directoryParts.length - 1];

    if (componentName === variantName || variantName === "default") {
      return componentName;
    }

    return `${componentName} / ${variantName}`;
  }

  return directoryParts[directoryParts.length - 1] || relativeDirectoryPath;
}

function getAuthorFromComponentPath(componentVariantDirectory) {
  const relativeDirectoryPath = path.relative(componentsDirectory, componentVariantDirectory);
  const directoryParts = relativeDirectoryPath.split(path.sep).filter(Boolean);

  if (directoryParts.length >= 2) {
    return directoryParts[1];
  }

  return "";
}

async function makeComponentRecordFromDirectory(componentVariantDirectory) {
  const relativeDirectoryPath = path.relative(repositoryRootDirectory, componentVariantDirectory).replaceAll(path.sep, "/");
  const promptPath = path.join(relativeDirectoryPath, "prompt.md").replaceAll(path.sep, "/");
  const readmePath = path.join(relativeDirectoryPath, "README.md").replaceAll(path.sep, "/");
  const renderedHtmlPath = path.join(relativeDirectoryPath, "rendered.html").replaceAll(path.sep, "/");
  const screenshotPath = path.join(relativeDirectoryPath, "screenshot.png").replaceAll(path.sep, "/");
  const promptText = await readTextFileForIndexing(path.join(repositoryRootDirectory, promptPath));
  const readmeText = await readTextFileForIndexing(path.join(repositoryRootDirectory, readmePath));
  const renderedHtmlText = await readTextFileForIndexing(path.join(repositoryRootDirectory, renderedHtmlPath));

  return {
    source: "filesystem",
    name: getDisplayNameFromComponentPath(componentVariantDirectory),
    author: getAuthorFromComponentPath(componentVariantDirectory),
    description: [readmeText, promptText].filter(Boolean).join("\n\n").slice(0, 1200),
    path: relativeDirectoryPath,
    promptPath,
    readmePath,
    renderedHtmlPath,
    screenshotPath,
    metadata: {},
    searchText: [relativeDirectoryPath, promptPath, readmePath, renderedHtmlPath, screenshotPath, promptText, readmeText, renderedHtmlText].filter(Boolean).join("\n"),
  };
}

async function loadComponentRecordsFromFilesystem() {
  const componentVariantDirectories = await collectComponentVariantDirectories();
  const componentRecords = [];

  for (const componentVariantDirectory of componentVariantDirectories) {
    componentRecords.push(await makeComponentRecordFromDirectory(componentVariantDirectory));
  }

  return componentRecords;
}

function dedupeComponentRecords(componentRecords) {
  const seenRecordKeys = new Set();
  const dedupedComponentRecords = [];

  for (const componentRecord of componentRecords) {
    const recordKey = normalizeSearchText(componentRecord.path || componentRecord.promptPath || componentRecord.name);

    if (seenRecordKeys.has(recordKey)) {
      continue;
    }

    seenRecordKeys.add(recordKey);
    dedupedComponentRecords.push(componentRecord);
  }

  return dedupedComponentRecords;
}

async function loadAllComponentRecords() {
  const metadataComponentRecords = await loadComponentRecordsFromMetadata();
  const filesystemComponentRecords = metadataComponentRecords.length > 0 ? [] : await loadComponentRecordsFromFilesystem();

  return dedupeComponentRecords([...metadataComponentRecords, ...filesystemComponentRecords]);
}

function scoreField(fieldText, queryTokens, exactQueryText, fieldWeight) {
  const normalizedFieldText = normalizeSearchText(fieldText);
  let fieldScore = 0;
  const matchedTokens = [];

  if (normalizedFieldText.length === 0) {
    return { fieldScore, matchedTokens };
  }

  if (exactQueryText.length > 0 && normalizedFieldText.includes(exactQueryText)) {
    fieldScore += 80 * fieldWeight;
    matchedTokens.push(exactQueryText);
  }

  const fieldTokens = normalizedFieldText.split(" ");

  for (const queryToken of queryTokens) {
    if (normalizedFieldText === queryToken) {
      fieldScore += 40 * fieldWeight;
      matchedTokens.push(queryToken);
      continue;
    }

    if (fieldTokens.includes(queryToken)) {
      fieldScore += 18 * fieldWeight;
      matchedTokens.push(queryToken);
      continue;
    }

    if (normalizedFieldText.includes(queryToken)) {
      fieldScore += 8 * fieldWeight;
      matchedTokens.push(queryToken);
    }
  }

  return { fieldScore, matchedTokens };
}

function scoreComponentRecord(componentRecord, queryText, requiredTokens, excludedTokens) {
  const exactQueryText = normalizeSearchText(queryText);
  const expandedQueryTokens = expandQueryTokens(queryText);
  const normalizedSearchText = normalizeSearchText(componentRecord.searchText);

  for (const requiredToken of requiredTokens) {
    if (!normalizedSearchText.includes(requiredToken)) {
      return null;
    }
  }

  for (const excludedToken of excludedTokens) {
    if (normalizedSearchText.includes(excludedToken)) {
      return null;
    }
  }

  const scorePieces = [
    scoreField(componentRecord.name, expandedQueryTokens, exactQueryText, 6),
    scoreField(componentRecord.path, expandedQueryTokens, exactQueryText, 5),
    scoreField(componentRecord.promptPath, expandedQueryTokens, exactQueryText, 4),
    scoreField(componentRecord.author, expandedQueryTokens, exactQueryText, 2),
    scoreField(componentRecord.description, expandedQueryTokens, exactQueryText, 2),
    scoreField(componentRecord.searchText, expandedQueryTokens, exactQueryText, 1),
  ];

  const score = scorePieces.reduce((runningScore, scorePiece) => runningScore + scorePiece.fieldScore, 0);
  const matchedTokens = uniqueValues(scorePieces.flatMap((scorePiece) => scorePiece.matchedTokens));

  if (score <= 0) {
    return null;
  }

  return {
    ...componentRecord,
    score,
    matchedTokens,
  };
}

function searchComponentRecords(componentRecords, queryText, requiredText, excludedText, resultLimit) {
  const requiredTokens = tokenizeSearchText(requiredText);
  const excludedTokens = tokenizeSearchText(excludedText);

  return componentRecords
    .map((componentRecord) => scoreComponentRecord(componentRecord, queryText, requiredTokens, excludedTokens))
    .filter(Boolean)
    .sort((leftComponentRecord, rightComponentRecord) => rightComponentRecord.score - leftComponentRecord.score)
    .slice(0, resultLimit);
}

function formatResultSummary(componentRecord, resultIndex) {
  const resultNumber = String(resultIndex + 1).padStart(2, " ");
  const scoreText = String(Math.round(componentRecord.score)).padStart(4, " ");
  const nameText = componentRecord.name || "Unnamed component";
  const authorText = componentRecord.author ? ` by ${componentRecord.author}` : "";
  const pathText = componentRecord.path || componentRecord.promptPath || "No path found";
  const matchedText = componentRecord.matchedTokens.length > 0 ? componentRecord.matchedTokens.slice(0, 8).join(", ") : "path/name";

  return `${resultNumber}. ${nameText}${authorText}\n    score: ${scoreText}\n    path:  ${pathText}\n    why:   matched ${matchedText}`;
}

function formatDetailedResult(componentRecord) {
  const lines = [];

  lines.push(`Name: ${componentRecord.name || "Unnamed component"}`);

  if (componentRecord.author) {
    lines.push(`Author: ${componentRecord.author}`);
  }

  if (componentRecord.path) {
    lines.push(`Directory: ${componentRecord.path}`);
  }

  if (componentRecord.readmePath) {
    lines.push(`README: ${componentRecord.readmePath}`);
  }

  if (componentRecord.promptPath) {
    lines.push(`Prompt: ${componentRecord.promptPath}`);
  }

  if (componentRecord.renderedHtmlPath) {
    lines.push(`Rendered HTML: ${componentRecord.renderedHtmlPath}`);
  }

  if (componentRecord.screenshotPath) {
    lines.push(`Screenshot: ${componentRecord.screenshotPath}`);
  }

  if (componentRecord.description) {
    const cleanedDescription = componentRecord.description.replace(/\s+/g, " ").trim();

    if (cleanedDescription.length > 0) {
      lines.push(`Summary: ${cleanedDescription.slice(0, 600)}`);
    }
  }

  return lines.join("\n");
}

function openPathInEditor(filePath) {
  const editorCommand = process.env.EDITOR || process.env.VISUAL;

  if (!editorCommand) {
    console.log("No EDITOR or VISUAL environment variable is set.");
    console.log(`Open this path manually: ${filePath}`);
    return;
  }

  const editorProcess = spawn(editorCommand, [filePath], {
    stdio: "inherit",
    shell: true,
  });

  editorProcess.on("error", () => {
    console.log(`Could not open editor. Open this path manually: ${filePath}`);
  });
}

async function printPromptFile(componentRecord) {
  if (!componentRecord.promptPath) {
    console.log("This result does not have a prompt path.");
    return;
  }

  const absolutePromptPath = path.join(repositoryRootDirectory, componentRecord.promptPath);

  if (!(await pathExists(absolutePromptPath))) {
    console.log(`Prompt file is listed but not present locally: ${componentRecord.promptPath}`);
    return;
  }

  const promptText = await readFile(absolutePromptPath, "utf8");
  console.log("\n----- prompt.md -----\n");
  console.log(promptText.trim());
  console.log("\n---------------------");
}

async function askQuestion(readlineInterface, questionText) {
  const answer = await readlineInterface.question(questionText);
  return answer.trim();
}

async function runSearchLoop(readlineInterface, componentRecords, startingQueryText) {
  let currentQueryText = startingQueryText;

  while (true) {
    if (currentQueryText.length === 0) {
      currentQueryText = await askQuestion(readlineInterface, "What are you trying to find? ");
    }

    if (["q", "quit", "exit"].includes(currentQueryText.toLowerCase())) {
      break;
    }

    const requiredText = await askQuestion(readlineInterface, "Must include any words? Press enter to skip. ");
    const excludedText = await askQuestion(readlineInterface, "Exclude any words? Press enter to skip. ");
    const resultLimitAnswer = await askQuestion(readlineInterface, `How many results? Press enter for ${defaultResultLimit}. `);
    const parsedResultLimit = Number.parseInt(resultLimitAnswer, 10);
    const resultLimit = Number.isFinite(parsedResultLimit) && parsedResultLimit > 0 ? parsedResultLimit : defaultResultLimit;
    const searchResults = searchComponentRecords(componentRecords, currentQueryText, requiredText, excludedText, resultLimit);

    if (searchResults.length === 0) {
      console.log("\nNo matching components found. Try fewer words or remove must-have filters.\n");
      currentQueryText = await askQuestion(readlineInterface, "Refine search, or type q to quit: ");
      continue;
    }

    console.log("\nBest matches:\n");

    searchResults.forEach((componentRecord, resultIndex) => {
      console.log(formatResultSummary(componentRecord, resultIndex));
    });

    while (true) {
      console.log("\nChoose a number for details, p <number> to print prompt, o <number> to open prompt, r to refine, or q to quit.");
      const actionAnswer = await askQuestion(readlineInterface, "> ");
      const normalizedActionAnswer = actionAnswer.toLowerCase();

      if (["q", "quit", "exit"].includes(normalizedActionAnswer)) {
        currentQueryText = "q";
        break;
      }

      if (["r", "refine", "search"].includes(normalizedActionAnswer)) {
        currentQueryText = await askQuestion(readlineInterface, "New search: ");
        break;
      }

      if (normalizedActionAnswer.startsWith("o ")) {
        const openResultNumber = Number.parseInt(normalizedActionAnswer.slice(2).trim(), 10);
        const selectedComponentRecord = searchResults[openResultNumber - 1];

        if (!selectedComponentRecord) {
          console.log("That result number does not exist.");
          continue;
        }

        const preferredOpenPath = selectedComponentRecord.promptPath || selectedComponentRecord.readmePath || selectedComponentRecord.path;
        const absoluteOpenPath = path.join(repositoryRootDirectory, preferredOpenPath);
        openPathInEditor(absoluteOpenPath);
        continue;
      }

      if (normalizedActionAnswer.startsWith("p ")) {
        const promptResultNumber = Number.parseInt(normalizedActionAnswer.slice(2).trim(), 10);
        const selectedComponentRecord = searchResults[promptResultNumber - 1];

        if (!selectedComponentRecord) {
          console.log("That result number does not exist.");
          continue;
        }

        await printPromptFile(selectedComponentRecord);
        continue;
      }

      const selectedResultNumber = Number.parseInt(actionAnswer, 10);
      const selectedComponentRecord = searchResults[selectedResultNumber - 1];

      if (!selectedComponentRecord) {
        console.log("That result number does not exist.");
        continue;
      }

      console.log("\n" + formatDetailedResult(selectedComponentRecord));
    }

    if (["q", "quit", "exit"].includes(currentQueryText.toLowerCase())) {
      break;
    }
  }
}

async function runComponentFinderCli() {
  const componentRecords = await loadAllComponentRecords();

  if (componentRecords.length === 0) {
    console.log("No components found. Run this command from the repository root.");
    console.log("Expected data/components.json or components/**/prompt.md.");
    process.exitCode = 1;
    return;
  }

  const readlineInterface = readline.createInterface({ input, output });
  const startingQueryText = process.argv.slice(2).join(" ").trim();

  console.log("\nAwesome Components Finder");
  console.log(`Indexed ${componentRecords.length} component records.`);
  console.log("Example: help me find a login component");
  console.log("Type q anytime you are asked for a search to quit.\n");

  try {
    await runSearchLoop(readlineInterface, componentRecords, startingQueryText);
  } finally {
    readlineInterface.close();
  }
}

runComponentFinderCli().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
