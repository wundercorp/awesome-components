# Awesome Components

A searchable component prompt directory for BuilderStudio.

Use this repository to find component references, screenshots, rendered HTML snapshots, and ready-to-run prompts for building components in the BuilderStudio Agentic IDE.

This library will contain over 6,000 components.

## Build with BuilderStudio

Open [BuilderStudio](https://builderstudio.dev), pick a component prompt from this repository, and ask the agent to build it inside your project.

Join the community:

- [Discord](https://discord.gg/QdWeSGCqfe)
- [Reddit](https://reddit.com/r/builderstudio)

## Browse the directory

Start here:

- [Component directory](components/README.md)
- [Component metadata JSON](data/components.json)

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

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting new components.
