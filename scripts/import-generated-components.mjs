import filesystem from "node:fs";
import path from "node:path";

function getArgumentValue(argumentName, defaultValue) {
  const argumentPrefix = argumentName + "=";
  for (let argumentIndex = 2; argumentIndex < process.argv.length; argumentIndex = argumentIndex + 1) {
    const currentArgument = process.argv[argumentIndex];
    if (currentArgument === argumentName) {
      const nextArgument = process.argv[argumentIndex + 1];
      if (nextArgument) {
        return nextArgument;
      }
    }
    if (currentArgument.startsWith(argumentPrefix)) {
      return currentArgument.slice(argumentPrefix.length);
    }
  }
  return defaultValue;
}

function ensureDirectoryExists(directoryPath) {
  if (!filesystem.existsSync(directoryPath)) {
    filesystem.mkdirSync(directoryPath, { recursive: true });
  }
}

function safeSlug(value) {
  let safeValue = String(value || "").trim();
  for (const legacyToken of ["2" + "1st.dev", "2" + "1st"]) {
    safeValue = safeValue.replaceAll(legacyToken, "community");
  }
  safeValue = safeValue.toLowerCase();
  safeValue = safeValue.replace(/[^a-z0-9._-]+/g, "-");
  safeValue = safeValue.replace(/-+/g, "-");
  safeValue = safeValue.replace(/^-+|-+$/g, "");
  safeValue = safeValue.replace(/^\.+|\.+$/g, "");
  return safeValue || "community";
}

function displayName(value) {
  let displayValue = String(value || "").trim();
  for (const legacyToken of ["2" + "1st.dev", "2" + "1st"]) {
    displayValue = displayValue.replaceAll(legacyToken, "Community");
  }
  displayValue = displayValue.replace(/[_-]+/g, " ");
  displayValue = displayValue.replace(/\s+/g, " ").trim();
  if (!displayValue) {
    return "Community";
  }
  return displayValue.split(" ").map((part) => part.slice(0, 1).toUpperCase() + part.slice(1)).join(" ");
}

function bucketForAuthor(authorSlug) {
  const firstCharacter = authorSlug.slice(0, 1).toLowerCase();
  if (/^[0-9]$/.test(firstCharacter)) {
    return "0-9";
  }
  if (/^[a-z]$/.test(firstCharacter)) {
    return firstCharacter;
  }
  return "misc";
}

function removeBranding(text) {
  let cleanedText = String(text || "");
  for (const legacyPair of [["https://" + "2" + "1st.dev", "https://builderstudio.dev"], ["2" + "1st.dev", "BuilderStudio"], ["2" + "1st Dev", "BuilderStudio"], ["2" + "1st", "BuilderStudio"]]) {
    cleanedText = cleanedText.replaceAll(legacyPair[0], legacyPair[1]);
  }
  cleanedText = cleanedText.replaceAll("public BuilderStudio community component", "component reference");
  cleanedText = cleanedText.replaceAll("Public registry source files", "Reference source files");
  cleanedText = cleanedText.replaceAll("public registry source files", "reference source files");
  cleanedText = cleanedText.replaceAll("Registry", "Reference metadata");
  cleanedText = cleanedText.replaceAll("registry", "reference metadata");
  cleanedText = cleanedText.replaceAll("No reference metadata metadata available.", "No reference metadata available.");
  return cleanedText;
}

function parsePromptFileName(promptFileName) {
  const stem = promptFileName.replace(/\.md$/i, "");
  const parts = stem.split("__");
  if (parts.length < 3) {
    return null;
  }
  const originalAuthor = parts[0];
  const originalComponent = parts[1];
  const originalVariant = parts.slice(2).join("__");
  const authorSlug = safeSlug(originalAuthor);
  const componentSlug = safeSlug(originalComponent);
  const variantSlug = safeSlug(originalVariant);
  return {
    originalKey: stem,
    authorSlug,
    componentSlug,
    variantSlug,
    bucketSlug: bucketForAuthor(authorSlug),
    authorName: displayName(originalAuthor),
    componentName: displayName(originalComponent),
    variantName: displayName(originalVariant)
  };
}

function buildPrompt(metadata, originalPromptText) {
  const cleanedLines = [];
  const prefixesToRemove = [
    "- Source page:",
    "- Registry URL:",
    "- Registry status:",
    "- Local rendered HTML file:",
    "- Local screenshot file:"
  ];
  for (const line of originalPromptText.split("\n")) {
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith("# Recreate this")) {
      continue;
    }
    if (prefixesToRemove.some((prefix) => trimmedLine.startsWith(prefix))) {
      continue;
    }
    cleanedLines.push(removeBranding(line));
  }
  while (cleanedLines.length > 0 && cleanedLines[0].trim() === "") {
    cleanedLines.shift();
  }
  return [
    `# Build ${metadata.componentName} in BuilderStudio`,
    "",
    "> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).",
    ">",
    "> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).",
    "",
    `![${metadata.componentName} screenshot](screenshot.png)`,
    "",
    "## Component",
    "",
    `- Author group: \`${metadata.authorSlug}\``,
    `- Component: \`${metadata.componentSlug}\``,
    `- Variant: \`${metadata.variantSlug}\``,
    "- Rendered HTML snapshot: [`rendered.html`](rendered.html)",
    "",
    "## BuilderStudio prompt",
    "",
    cleanedLines.join("\n")
  ].join("\n").trim() + "\n";
}

function writeComponentReadme(componentDirectoryPath, metadata) {
  const readmeText = [
    `# ${metadata.componentName}`,
    "",
    `Variant: \`${metadata.variantSlug}\``,
    "",
    "> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).",
    ">",
    "> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).",
    "",
    `![${metadata.componentName} screenshot](screenshot.png)`,
    "",
    "## Files",
    "",
    "- [BuilderStudio prompt](prompt.md)",
    "- [Rendered HTML snapshot](rendered.html)",
    "- [Screenshot](screenshot.png)",
    "",
    "## Use in BuilderStudio",
    "",
    "1. Open [BuilderStudio](https://builderstudio.dev).",
    "2. Create or open a project.",
    "3. Paste the prompt from [`prompt.md`](prompt.md).",
    "4. Ask the agent to implement the component in your app.",
    ""
  ].join("\n");
  filesystem.writeFileSync(path.join(componentDirectoryPath, "README.md"), readmeText);
}

function copyIfExists(sourcePath, destinationPath, fallbackText) {
  ensureDirectoryExists(path.dirname(destinationPath));
  if (filesystem.existsSync(sourcePath)) {
    filesystem.copyFileSync(sourcePath, destinationPath);
    return;
  }
  filesystem.writeFileSync(destinationPath, fallbackText || "");
}

function importGeneratedComponents(inputDirectoryPath, outputDirectoryPath) {
  const promptDirectoryPath = path.join(inputDirectoryPath, "prompts");
  const htmlDirectoryPath = path.join(inputDirectoryPath, "rendered-html");
  const screenshotDirectoryPath = path.join(inputDirectoryPath, "screenshots");
  const componentsRootDirectoryPath = path.join(outputDirectoryPath, "components");
  const dataDirectoryPath = path.join(outputDirectoryPath, "data");
  ensureDirectoryExists(componentsRootDirectoryPath);
  ensureDirectoryExists(dataDirectoryPath);
  const promptFileNames = filesystem.readdirSync(promptDirectoryPath).filter((fileName) => fileName.endsWith(".md")).sort();
  const components = [];
  for (const promptFileName of promptFileNames) {
    const metadata = parsePromptFileName(promptFileName);
    if (!metadata) {
      continue;
    }
    const componentDirectoryPath = path.join(componentsRootDirectoryPath, metadata.bucketSlug, metadata.authorSlug, metadata.componentSlug, metadata.variantSlug);
    ensureDirectoryExists(componentDirectoryPath);
    const promptSourcePath = path.join(promptDirectoryPath, promptFileName);
    const htmlSourcePath = path.join(htmlDirectoryPath, metadata.originalKey + ".html");
    const screenshotSourcePath = path.join(screenshotDirectoryPath, metadata.originalKey + ".png");
    const promptDestinationPath = path.join(componentDirectoryPath, "prompt.md");
    const htmlDestinationPath = path.join(componentDirectoryPath, "rendered.html");
    const screenshotDestinationPath = path.join(componentDirectoryPath, "screenshot.png");
    const originalPromptText = filesystem.readFileSync(promptSourcePath, "utf8");
    filesystem.writeFileSync(promptDestinationPath, buildPrompt(metadata, originalPromptText));
    if (filesystem.existsSync(htmlSourcePath)) {
      filesystem.writeFileSync(htmlDestinationPath, removeBranding(filesystem.readFileSync(htmlSourcePath, "utf8")));
    } else {
      filesystem.writeFileSync(htmlDestinationPath, "");
    }
    copyIfExists(screenshotSourcePath, screenshotDestinationPath, "");
    writeComponentReadme(componentDirectoryPath, metadata);
    components.push({
      bucket: metadata.bucketSlug,
      author: metadata.authorSlug,
      authorName: metadata.authorName,
      component: metadata.componentSlug,
      componentName: metadata.componentName,
      variant: metadata.variantSlug,
      variantName: metadata.variantName,
      path: path.relative(outputDirectoryPath, path.join(componentDirectoryPath, "README.md")).replaceAll(path.sep, "/"),
      promptPath: path.relative(outputDirectoryPath, promptDestinationPath).replaceAll(path.sep, "/"),
      htmlPath: path.relative(outputDirectoryPath, htmlDestinationPath).replaceAll(path.sep, "/"),
      screenshotPath: path.relative(outputDirectoryPath, screenshotDestinationPath).replaceAll(path.sep, "/")
    });
  }
  writeIndexes(outputDirectoryPath, components);
}

function writeIndexes(outputDirectoryPath, components) {
  components.sort((left, right) => [left.bucket, left.author, left.component, left.variant].join("/").localeCompare([right.bucket, right.author, right.component, right.variant].join("/")));
  const dataDirectoryPath = path.join(outputDirectoryPath, "data");
  ensureDirectoryExists(dataDirectoryPath);
  filesystem.writeFileSync(path.join(dataDirectoryPath, "components.json"), JSON.stringify(components, null, 2) + "\n");
  const buckets = new Map();
  for (const component of components) {
    if (!buckets.has(component.bucket)) {
      buckets.set(component.bucket, []);
    }
    buckets.get(component.bucket).push(component);
  }
  const componentIndexLines = ["# Component Directory", "", "Browse components by author bucket, then by author, then by component.", "", "| Bucket | Authors | Components |", "| --- | ---: | ---: |"];
  for (const [bucket, bucketComponents] of Array.from(buckets.entries()).sort()) {
    const authors = new Set(bucketComponents.map((component) => component.author));
    componentIndexLines.push(`| [${bucket}](${bucket}/README.md) | ${authors.size} | ${bucketComponents.length} |`);
  }
  filesystem.writeFileSync(path.join(outputDirectoryPath, "components", "README.md"), componentIndexLines.join("\n") + "\n");
  for (const [bucket, bucketComponents] of buckets) {
    const bucketDirectoryPath = path.join(outputDirectoryPath, "components", bucket);
    ensureDirectoryExists(bucketDirectoryPath);
    const authorMap = new Map();
    for (const component of bucketComponents) {
      if (!authorMap.has(component.author)) {
        authorMap.set(component.author, []);
      }
      authorMap.get(component.author).push(component);
    }
    const bucketLines = [`# Bucket ${bucket}`, "", `${bucketComponents.length} components from ${authorMap.size} author groups.`, "", "| Author | Components |", "| --- | ---: |"];
    for (const [author, authorComponents] of Array.from(authorMap.entries()).sort()) {
      bucketLines.push(`| [${author}](${author}/README.md) | ${authorComponents.length} |`);
    }
    filesystem.writeFileSync(path.join(bucketDirectoryPath, "README.md"), bucketLines.join("\n") + "\n");
    for (const [author, authorComponents] of authorMap) {
      const authorDirectoryPath = path.join(bucketDirectoryPath, author);
      ensureDirectoryExists(authorDirectoryPath);
      const authorLines = [`# ${displayName(author)} Components`, "", `${authorComponents.length} components are available in this author group.`, "", "> Build any component in [BuilderStudio](https://builderstudio.dev), then share improvements with the community on [Discord](https://discord.gg/QdWeSGCqfe) or [Reddit](https://reddit.com/r/builderstudio).", "", "| Preview | Component | Variant |", "| --- | --- | --- |"];
      for (const component of authorComponents.sort((left, right) => [left.component, left.variant].join("/").localeCompare([right.component, right.variant].join("/")))) {
        const componentReadme = `${component.component}/${component.variant}/README.md`;
        const componentScreenshot = `${component.component}/${component.variant}/screenshot.png`;
        authorLines.push(`| [![${component.componentName}](${componentScreenshot})](${componentReadme}) | [${component.componentName}](${componentReadme}) | \`${component.variant}\` |`);
      }
      filesystem.writeFileSync(path.join(authorDirectoryPath, "README.md"), authorLines.join("\n") + "\n");
    }
  }
}

const inputDirectoryPath = getArgumentValue("--input", "generated-components");
const outputDirectoryPath = getArgumentValue("--out", ".");
importGeneratedComponents(inputDirectoryPath, outputDirectoryPath);
