import filesystem from "node:fs";
import path from "node:path";

const repositoryRoot = process.cwd();
const dataPath = path.join(repositoryRoot, "data", "components.json");

if (!filesystem.existsSync(dataPath)) {
  console.error("Missing data/components.json");
  process.exit(1);
}

const components = JSON.parse(filesystem.readFileSync(dataPath, "utf8"));
let failureCount = 0;

for (const component of components) {
  const requiredPaths = [component.path, component.promptPath, component.htmlPath, component.screenshotPath];
  for (const requiredPath of requiredPaths) {
    const absolutePath = path.join(repositoryRoot, requiredPath);
    if (!filesystem.existsSync(absolutePath)) {
      console.error("Missing", requiredPath);
      failureCount = failureCount + 1;
    }
  }
}

if (failureCount > 0) {
  console.error(`Validation failed with ${failureCount} missing files.`);
  process.exit(1);
}

console.log(`Validation passed for ${components.length} components.`);
