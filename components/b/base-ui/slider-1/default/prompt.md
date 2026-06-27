# Build Slider 1 in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Slider 1 screenshot](screenshot.png)

## Component

- Author group: `base-ui`
- Component: `slider-1`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: base-ui
- Component slug: slider-1
- Demo slug: default
- Title: slider-1
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div data-orientation="horizontal" id="base-ui-«r0»" role="group"><div data-orientation="horizontal" class="flex w-56 touch-none items-center py-3 select-none"><div data-orientation="horizontal" class="h-1 w-full rounded bg-gray-200 shadow-[inset_0_0_0_1px] shadow-gray-200 select-none" style="position: relative;"><div data-orientation="horizontal" class="rounded bg-gray-700 select-none" style="position: relative; inset-inline-start: 0px; width: 25%; height: inherit;"></div><div data-index="0" class="size-4 rounded-full bg-white outline outline-1 outline-gray-300 select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800" id="base-ui-«r1»" tabindex="0" style="position: absolute; inset-inline-start: 25%; top: 50%; transform: translate(-50%, -50%);"><input aria-orientation="horizontal" aria-valuemax="100" aria-valuemin="0" data-index="0" id="base-ui-«r1»-input" max="100" min="0" step="1" tabindex="-1" type="range" value="25" aria-valuenow="25" style="clip: rect(0px, 0px, 0px, 0px); overflow: hidden; white-space: nowrap; position: fixed; top: 0px; left: 0px; border: 0px; padding: 0px; width: 100%; height: 100%; margin: -1px;"></div></div></div></div><input type="hidden" value="25" name="" style="clip: rect(0px, 0px, 0px, 0px); overflow: hidden; white-space: nowrap; position: fixed; top: 0px; left: 0px; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px;"></div></div></div>
```

## Reference source files

No reference source files were available.
