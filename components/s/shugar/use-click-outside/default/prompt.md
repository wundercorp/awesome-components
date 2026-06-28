# Build Use Click Outside in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Use Click Outside screenshot](screenshot.png)

## Component

- Author group: `shugar`
- Component: `use-click-outside`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: shugar
- Component slug: use-click-outside
- Demo slug: default
- Title: use-click-outside
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><button>Open Drawer</button><div class="fixed top-0 left-0 w-full h-full bg-overlay z-[99999] duration-300 opacity-0 pointer-events-none"></div><div class="fixed bottom-0 left-0 w-full h-1/4 bg-gray-200 shadow-lg transition-transform duration-300 z-[999999] rounded-t-lg translate-y-full"><div class="h-full flex items-center justify-center">Click outside</div></div></div></div></div>
```

## Reference source files

No reference source files were available.
