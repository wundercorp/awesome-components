# Build Splitter in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Splitter screenshot](screenshot.png)

## Component

- Author group: `anubra266`
- Component: `splitter`
- Variant: `vertical-splitter`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: anubra266
- Component slug: splitter
- Demo slug: vertical-splitter
- Title: splitter
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"><div class="w-full h-64"><div data-scope="splitter" data-part="root" data-orientation="vertical" id="splitter:«r0»" dir="ltr" class="flex flex-col gap-2 h-full" style="display: flex; flex-direction: column; height: 100%; width: 100%; overflow: hidden;"><div data-scope="splitter" data-part="panel" data-orientation="vertical" dir="ltr" data-id="a" data-index="0" id="splitter:«r0»:panel:a" data-ownedby="splitter:«r0»" class="border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-lg text-gray-600 dark:text-gray-400 flex items-center justify-center" style="flex: 50 1 0px; overflow: hidden;">Top Panel</div><button data-scope="splitter" data-part="resize-trigger" dir="ltr" id="splitter:«r0»:splitter:a:b" role="separator" data-id="a:b" data-ownedby="splitter:«r0»" tabindex="0" aria-valuemin="0" aria-valuemax="100" data-orientation="vertical" aria-orientation="vertical" aria-controls="splitter:«r0»:panel:a splitter:«r0»:panel:b" aria-label="Resize" class="rounded-full transition-colors duration-200 outline-none bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 active:bg-gray-400 dark:active:bg-gray-500 min-h-1.5 mx-4" style="touch-action: none; user-select: none; flex: 0 0 auto; cursor: row-resize; min-width: 0px;" aria-valuenow="50"></button><div data-scope="splitter" data-part="panel" data-orientation="vertical" dir="ltr" data-id="b" data-index="1" id="splitter:«r0»:panel:b" data-ownedby="splitter:«r0»" class="border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-lg text-gray-600 dark:text-gray-400 flex items-center justify-center" style="flex: 50 1 0px; overflow: hidden;">Bottom Panel</div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
