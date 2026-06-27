# Build Basic Slider in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Basic Slider screenshot](screenshot.png)

## Component

- Author group: `anubra266`
- Component: `basic-slider`
- Variant: `slider-vertical`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: anubra266
- Component slug: basic-slider
- Demo slug: slider-vertical
- Title: basic-slider
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"><div class="max-w-md w-full flex justify-center"><div data-scope="slider" data-part="root" data-orientation="vertical" id="slider:«r0»" dir="ltr" class="h-64" style="--slider-thumb-offset-0: calc(50% - 0px); --slider-thumb-transform: translateY(50%); --slider-range-start: 0%; --slider-range-end: 50%; --slider-thumb-width: 20px; --slider-thumb-height: 20px;"><div data-scope="slider" data-part="control" dir="ltr" id="slider:«r0»:control" data-orientation="vertical" class="relative flex flex-col items-center h-full w-5" style="touch-action: none; user-select: none; position: relative;"><div data-scope="slider" data-part="track" dir="ltr" id="slider:«r0»:track" data-orientation="vertical" class="relative flex-1 w-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden" style="position: relative;"><div id="slider:«r0»:range" data-scope="slider" data-part="range" dir="ltr" data-orientation="vertical" class="absolute w-full bg-blue-600 dark:bg-blue-500 rounded-full" style="position: absolute; bottom: var(--slider-range-start); top: var(--slider-range-end);"></div></div><div data-scope="slider" data-part="thumb" dir="ltr" data-index="0" id="slider:«r0»:thumb:0" data-orientation="vertical" draggable="false" aria-labelledby="slider:«r0»:label" aria-orientation="vertical" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" role="slider" tabindex="0" class="relative w-5 h-5 bg-white dark:bg-gray-800 border-2 border-blue-600 dark:border-blue-500 rounded-full shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 z-10" style="visibility: visible; position: absolute; transform: var(--slider-thumb-transform); bottom: var(--slider-thumb-offset-0);"><input hidden="" id="slider:«r0»:input:0" type="text" value="50"></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
