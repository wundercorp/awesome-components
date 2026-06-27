# Build Button Ant in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Button Ant screenshot](screenshot.png)

## Component

- Author group: `antdesign`
- Component: `button-ant`
- Variant: `button-disabled`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: antdesign
- Component slug: button-ant
- Demo slug: button-disabled
- Title: button-ant
- Description: 

## Goal

Recreate this component in a React + TypeScript + Tailwind CSS project. Preserve the visual layout, spacing, colors, border radius, shadows, interaction behavior, animation behavior, responsive behavior, and dark mode behavior shown in the rendered demo.

## Implementation requirements

- Use React and TypeScript.
- Use Tailwind CSS classes whenever possible.
- Keep the component self-contained unless the source files require helper components.
- If the source uses CSS variables, custom CSS, animations, or keyframes, include them.
- If the source uses external packages, list and use the required packages.
- Preserve accessibility attributes, button semantics, links, keyboard behavior, and ARIA attributes when visible in the source.
- Do not replace the component with a simplified placeholder.
- Return complete production-ready code.

## Dependencies

No reference metadata available.

## Rendered DOM snapshot

This is the rendered demo HTML extracted from the live preview. Use it to verify structure, class names, visible content, and layout.

```html
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="ant-flex css-xepvsj ant-flex-align-flex-start ant-flex-gap-small ant-flex-vertical"><div class="ant-flex css-xepvsj ant-flex-gap-small"><button type="button" class="ant-btn css-xepvsj ant-btn-primary ant-btn-color-primary ant-btn-variant-solid"><span>Primary</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-primary ant-btn-color-primary ant-btn-variant-solid" disabled=""><span>Primary(disabled)</span></button></div><div class="ant-flex css-xepvsj ant-flex-gap-small"><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-default ant-btn-variant-outlined"><span>Default</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-default ant-btn-variant-outlined" disabled=""><span>Default(disabled)</span></button></div><div class="ant-flex css-xepvsj ant-flex-gap-small"><button type="button" class="ant-btn css-xepvsj ant-btn-dashed ant-btn-color-default ant-btn-variant-dashed"><span>Dashed</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-dashed ant-btn-color-default ant-btn-variant-dashed" disabled=""><span>Dashed(disabled)</span></button></div><div class="ant-flex css-xepvsj ant-flex-gap-small"><button type="button" class="ant-btn css-xepvsj ant-btn-text ant-btn-color-default ant-btn-variant-text"><span>Text</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-text ant-btn-color-default ant-btn-variant-text" disabled=""><span>Text(disabled)</span></button></div><div class="ant-flex css-xepvsj ant-flex-gap-small"><button type="button" class="ant-btn css-xepvsj ant-btn-link ant-btn-color-link ant-btn-variant-link"><span>Link</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-link ant-btn-color-link ant-btn-variant-link" disabled=""><span>Link(disabled)</span></button></div><div class="ant-flex css-xepvsj ant-flex-gap-small"><a href="https://ant.design/index-cn" class="ant-btn css-xepvsj ant-btn-primary ant-btn-color-primary ant-btn-variant-solid" tabindex="0" aria-disabled="false"><span>Href Primary</span></a><a class="ant-btn css-xepvsj ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-btn-disabled" tabindex="-1" aria-disabled="true"><span>Href Primary(disabled)</span></a></div><div class="ant-flex css-xepvsj ant-flex-gap-small"><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-dangerous ant-btn-color-dangerous ant-btn-variant-outlined"><span>Danger Default</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-dangerous ant-btn-color-dangerous ant-btn-variant-outlined" disabled=""><span>Danger Default(disabled)</span></button></div><div class="ant-flex css-xepvsj ant-flex-gap-small"><button type="button" class="ant-btn css-xepvsj ant-btn-text ant-btn-dangerous ant-btn-color-dangerous ant-btn-variant-text"><span>Danger Text</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-text ant-btn-dangerous ant-btn-color-dangerous ant-btn-variant-text" disabled=""><span>Danger Text(disabled)</span></button></div><div class="ant-flex css-xepvsj ant-flex-gap-small"><button type="button" class="ant-btn css-xepvsj ant-btn-link ant-btn-dangerous ant-btn-color-dangerous ant-btn-variant-link"><span>Danger Link</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-link ant-btn-dangerous ant-btn-color-dangerous ant-btn-variant-link" disabled=""><span>Danger Link(disabled)</span></button></div><div class="site-button-ghost-wrapper ant-flex css-xepvsj ant-flex-gap-small"><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-default ant-btn-variant-outlined ant-btn-background-ghost"><span>Ghost</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-default ant-btn-variant-outlined ant-btn-background-ghost" disabled=""><span>Ghost(disabled)</span></button></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
