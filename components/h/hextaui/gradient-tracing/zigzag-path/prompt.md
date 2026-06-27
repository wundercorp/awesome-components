# Build Gradient Tracing in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Gradient Tracing screenshot](screenshot.png)

## Component

- Author group: `hextaui`
- Component: `gradient-tracing`
- Variant: `zigzag-path`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: hextaui
- Component slug: gradient-tracing
- Demo slug: zigzag-path
- Title: gradient-tracing
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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="relative" style="width: 300px; height: 100px;"><svg width="300" height="100" viewBox="0 0 300 100" fill="none"><path d="M0,50 L75,25 L150,75 L225,25 L300,50" stroke="black" stroke-opacity="0.2" stroke-width="2"></path><path d="M0,50 L75,25 L150,75 L225,25 L300,50" stroke="url(#pulse-7rci5av1r)" stroke-linecap="round" stroke-width="2"></path><defs><linearGradient id="pulse-7rci5av1r" gradientUnits="userSpaceOnUse" x1="162.90000000000003" x2="81.45000000000002"><stop stop-color="#2EB9DF" stop-opacity="0"></stop><stop stop-color="#2EB9DF"></stop><stop offset="1" stop-color="#9E00FF" stop-opacity="0"></stop></linearGradient></defs></svg></div></div></div></div>
```

## Reference source files

No reference source files were available.
