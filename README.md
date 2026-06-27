# Awesome Components

A searchable component prompt directory for BuilderStudio.

Use this repository to find component references, screenshots, rendered HTML snapshots, and ready-to-run prompts for building components in the BuilderStudio Agentic IDE.

## Build with BuilderStudio

Open [BuilderStudio](https://builderstudio.dev), pick a component prompt from this repository, and ask the agent to build it inside your project.

Join the community:

- [Discord](https://discord.gg/QdWeSGCqfe)
- [Reddit](https://reddit.com/r/builderstudio)

## Browse the directory

Start here:

- [Component directory](components/README.md)
- [Component metadata JSON](data/components.json)

This starter export currently contains 70 generated component pages from the uploaded bundle. The importer in `scripts/import-generated-components.mjs` can regenerate the directory from a larger `generated-components` folder after the full 6,000+ component run finishes.

## Repository structure

```text
components/
  <bucket>/
    README.md
    <author>/
      README.md
      <component>/
        <variant>/
          README.md
          prompt.md
          rendered.html
          screenshot.png
data/
  components.json
scripts/
  import-generated-components.mjs
```

## Publish to GitHub

```bash
git init
git add .
git commit -m "Initial awesome components directory"
git branch -M main
git remote add origin git@github.com:wundercorp/awesome-components.git
git push -u origin main
```

You need write access to the `wundercorp` GitHub organization to publish directly there.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting new components.
