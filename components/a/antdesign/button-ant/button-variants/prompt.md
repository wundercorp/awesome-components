# Build Button Ant in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Button Ant screenshot](screenshot.png)

## Component

- Author group: `antdesign`
- Component: `button-ant`
- Variant: `button-variants`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: antdesign
- Component slug: button-ant
- Demo slug: button-variants
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="ant-flex css-xepvsj ant-flex-align-stretch ant-flex-gap-small ant-flex-vertical"><div class="ant-flex css-xepvsj ant-flex-wrap-wrap ant-flex-gap-small"><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-default ant-btn-variant-solid ant-btn-sm"><span>Solid</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-default ant-btn-variant-outlined ant-btn-sm"><span>Outlined</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-default ant-btn-variant-dashed ant-btn-sm"><span>Dashed</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-default ant-btn-variant-filled ant-btn-sm"><span>Filled</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-default ant-btn-variant-text ant-btn-sm"><span>Text</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-default ant-btn-variant-link ant-btn-sm"><span>Link</span></button></div><div class="ant-flex css-xepvsj ant-flex-wrap-wrap ant-flex-gap-small"><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-primary ant-btn-variant-solid ant-btn-sm"><span>Solid</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-primary ant-btn-variant-outlined ant-btn-sm"><span>Outlined</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-primary ant-btn-variant-dashed ant-btn-sm"><span>Dashed</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-primary ant-btn-variant-filled ant-btn-sm"><span>Filled</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-primary ant-btn-variant-text ant-btn-sm"><span>Text</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-primary ant-btn-variant-link ant-btn-sm"><span>Link</span></button></div><div class="ant-flex css-xepvsj ant-flex-wrap-wrap ant-flex-gap-small"><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-dangerous ant-btn-variant-solid ant-btn-sm"><span>Solid</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-dangerous ant-btn-variant-outlined ant-btn-sm"><span>Outlined</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-dangerous ant-btn-variant-dashed ant-btn-sm"><span>Dashed</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-dangerous ant-btn-variant-filled ant-btn-sm"><span>Filled</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-dangerous ant-btn-variant-text ant-btn-sm"><span>Text</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-dangerous ant-btn-variant-link ant-btn-sm"><span>Link</span></button></div><div class="ant-flex css-xepvsj ant-flex-wrap-wrap ant-flex-gap-small"><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-pink ant-btn-variant-solid ant-btn-sm"><span>Solid</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-pink ant-btn-variant-outlined ant-btn-sm"><span>Outlined</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-pink ant-btn-variant-dashed ant-btn-sm"><span>Dashed</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-pink ant-btn-variant-filled ant-btn-sm"><span>Filled</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-pink ant-btn-variant-text ant-btn-sm"><span>Text</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-pink ant-btn-variant-link ant-btn-sm"><span>Link</span></button></div><div class="ant-flex css-xepvsj ant-flex-wrap-wrap ant-flex-gap-small"><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-purple ant-btn-variant-solid ant-btn-sm"><span>Solid</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-purple ant-btn-variant-outlined ant-btn-sm"><span>Outlined</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-purple ant-btn-variant-dashed ant-btn-sm"><span>Dashed</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-purple ant-btn-variant-filled ant-btn-sm"><span>Filled</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-purple ant-btn-variant-text ant-btn-sm"><span>Text</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-purple ant-btn-variant-link ant-btn-sm"><span>Link</span></button></div><div class="ant-flex css-xepvsj ant-flex-wrap-wrap ant-flex-gap-small"><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-cyan ant-btn-variant-solid ant-btn-sm"><span>Solid</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-cyan ant-btn-variant-outlined ant-btn-sm"><span>Outlined</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-cyan ant-btn-variant-dashed ant-btn-sm"><span>Dashed</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-cyan ant-btn-variant-filled ant-btn-sm"><span>Filled</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-cyan ant-btn-variant-text ant-btn-sm"><span>Text</span></button><button type="button" class="ant-btn css-xepvsj ant-btn-default ant-btn-color-cyan ant-btn-variant-link ant-btn-sm"><span>Link</span></button></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
