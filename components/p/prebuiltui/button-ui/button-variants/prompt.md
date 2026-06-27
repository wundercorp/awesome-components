# Build Button Ui in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Button Ui screenshot](screenshot.png)

## Component

- Author group: `prebuiltui`
- Component: `button-ui`
- Variant: `button-variants`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: prebuiltui
- Component slug: button-ui
- Demo slug: button-variants
- Title: button-ui
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-wrap items-center justify-center gap-5 md:gap-12"><button type="button" class="px-6 py-2 active:scale-95 transition bg-blue-500 rounded text-white text-sm font-medium">Solid</button><button type="button" class="px-6 py-2 active:scale-95 transition bg-gray-500/15 border border-gray-500/20 rounded text-blue-500 text-sm font-medium">Faded</button><button type="button" class="px-6 py-2 active:scale-95 transition bg-gray-500/15 border border-blue-500 rounded text-blue-500 text-sm font-medium">Bordered</button><button type="button" class="px-6 py-2 active:scale-95 transition text-blue-500 text-sm font-medium">Light</button><button type="button" class="px-6 py-2 active:scale-95 transition bg-blue-500/20 rounded text-blue-500 text-sm font-medium">Flat</button><button type="button" class="px-6 py-2 active:scale-95 transition bg-blue-500 rounded text-white shadow-lg shadow-blue-500/30 text-sm font-medium">Shadow</button></div></div></div></div>
```

## Reference source files

No reference source files were available.
