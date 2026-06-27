# Build Color Picker in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Color Picker screenshot](screenshot.png)

## Component

- Author group: `anubra266`
- Component: `color-picker`
- Variant: `color-picker-presets`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: anubra266
- Component slug: color-picker
- Demo slug: color-picker-presets
- Title: color-picker
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-sm"><div data-scope="color-picker" data-part="root" dir="ltr" id="color-picker:«r0»" style="--value: rgba(0, 0, 0, 1);"><div class="space-y-4"><div class="flex items-center gap-3"><div data-scope="color-picker" data-part="control" id="color-picker:«r0»:control" dir="ltr" data-state="closed" class="flex-1"><input data-scope="color-picker" data-part="channel-input" dir="ltr" data-channel="hex" aria-label="hex" spellcheck="false" autocomplete="off" min="0" max="16777215" step="1" class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent" type="text" value="#000000" style="appearance: none;"></div><button data-scope="color-picker" data-part="trigger" id="color-picker:«r0»:trigger" dir="ltr" aria-label="select color. current color is rgba(0, 0, 0, 1)" aria-controls="color-picker:«r0»:content" aria-labelledby="color-picker:«r0»:label" data-state="closed" type="button" class="w-12 h-10 rounded-md border-2 border-gray-300 dark:border-gray-600 overflow-hidden cursor-pointer hover:border-gray-400 dark:hover:border-gray-500 transition-colors" style="position: relative;"><div data-scope="color-picker" data-part="transparency-grid" class="w-full h-full [--size:8px] opacity-50" style="--size: 12px; width: 100%; height: 100%; position: absolute; background-color: rgb(255, 255, 255); background-image: conic-gradient(rgb(238, 238, 238) 0deg, rgb(238, 238, 238) 25%, transparent 0deg, transparent 50%, rgb(238, 238, 238) 0deg, rgb(238, 238, 238) 75%, transparent 0deg); background-size: var(--size) var(--size); inset: 0px; z-index: auto; pointer-events: none;"></div><div data-scope="color-picker" data-part="swatch" dir="ltr" data-state="checked" data-value="#000000" class="w-full h-full" style="--color: rgba(0, 0, 0, 1); position: relative; background: rgb(0, 0, 0);"></div></button></div></div><input tabindex="-1" id="color-picker:«r0»:hidden-input" type="text" value="rgba(0, 0, 0, 1)" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; overflow-wrap: normal;"></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
