# Contributing

Thanks for helping improve Awesome Components.

This repository is a component prompt directory for BuilderStudio. Contributions should make it easier for people to build useful, polished, accessible components in the BuilderStudio Agentic IDE.

## What you can contribute

You can contribute:

- New component prompts
- Better screenshots
- Improved rendered HTML examples
- Accessibility fixes
- Dependency notes
- Better categorization
- Documentation improvements

## Contribution rules

Only contribute material you have the right to share. Do not submit private code, paid components you are not allowed to redistribute, copied proprietary source, secrets, tokens, API keys, customer data, or unreleased product screenshots.

Do not submit content that falsely claims ownership or removes required license notices. If your component is based on another open-source project, include the license and attribution required by that project.

Do not include external service branding inside component prompts unless the component genuinely needs that service to work.

## Component format

Each component should live at:

```text
components/<bucket>/<author>/<component>/<variant>/
```

Required files:

```text
README.md
prompt.md
screenshot.png
rendered.html
```

Recommended prompt sections:

```text
# Build <Component Name> in BuilderStudio

## Component

## BuilderStudio prompt

## Dependencies

## Rendered DOM snapshot

## Reference source files
```

Every component page should include this call to action:

```markdown
> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).
```

## Screenshot guidelines

Screenshots should be clear, cropped to the component, and named `screenshot.png`. Prefer a neutral background and a width between 1200 and 1600 pixels when possible.

Avoid screenshots that contain private data, analytics, customer names, tokens, browser extensions, or unrelated UI chrome.

## Prompt quality checklist

Before opening a pull request, check that the prompt:

- Describes the component goal clearly
- Includes React and TypeScript expectations when relevant
- Mentions Tailwind CSS if the component uses utility classes
- Preserves accessibility behavior
- Lists required dependencies
- Includes important animations, states, variants, and responsive behavior
- Does not include private URLs, API keys, session IDs, or internal references
- Does not include unrelated branding

## Pull request checklist

Your pull request should include:

- A short description of what changed
- Screenshots for visual components
- Notes about dependencies
- License or attribution notes when relevant
- Confirmation that you have rights to contribute the component material

## Local validation

Run this before opening a pull request:

```bash
node scripts/validate-directory.mjs
```

The validator checks that every component page has a prompt, screenshot, rendered HTML file, and index entry.
