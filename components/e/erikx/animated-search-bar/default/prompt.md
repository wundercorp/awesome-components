# Build Animated Search Bar in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Animated Search Bar screenshot](screenshot.png)

## Component

- Author group: `erikx`
- Component: `animated-search-bar`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: erikx
- Component slug: animated-search-bar
- Demo slug: default
- Title: animated-search-bar
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
<div id="root"><div style="display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: rgb(229, 231, 235); padding: 20px; box-sizing: border-box; width: 100%; overflow: hidden;"><div class="wrapper"><svg aria-hidden="true"><defs><filter id="goo-effect"><feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"></feGaussianBlur><feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -15" result="goo"></feColorMatrix><feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite></filter></defs></svg><div class="button-content"><div class="button-content-inner"><div class="search-results" role="listbox" aria-label="Search results"></div><div class="search-btn" role="button" tabindex="0" style="width: 100px; transform: none;"><span class="search-text">Search</span></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
