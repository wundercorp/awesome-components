# Build Color Selector in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Color Selector screenshot](screenshot.png)

## Component

- Author group: `tom_ui`
- Component: `color-selector`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: tom_ui
- Component slug: color-selector
- Demo slug: default
- Title: color-selector
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center min-h-[400px] p-8"><div class="flex gap-2"><div class="size-5 rounded-full cursor-pointer transition-transform duration-200 active:scale-90 " tabindex="0" role="button" aria-label="Select red color" aria-pressed="false" style="background-color: var(--color-red-500);"></div><div class="size-5 rounded-full cursor-pointer transition-transform duration-200 active:scale-90 ring-2 ring-offset-2 ring-gray-400" tabindex="0" role="button" aria-label="Select blue color" aria-pressed="true" style="background-color: var(--color-blue-500); box-shadow: inset 0 0 0 2px var(--background), 0 0 0 2px var(--color-blue-500);"></div><div class="size-5 rounded-full cursor-pointer transition-transform duration-200 active:scale-90 " tabindex="0" role="button" aria-label="Select green color" aria-pressed="false" style="background-color: var(--color-green-500);"></div><div class="size-5 rounded-full cursor-pointer transition-transform duration-200 active:scale-90 " tabindex="0" role="button" aria-label="Select purple color" aria-pressed="false" style="background-color: var(--color-purple-500);"></div><div class="size-5 rounded-full cursor-pointer transition-transform duration-200 active:scale-90 " tabindex="0" role="button" aria-label="Select orange color" aria-pressed="false" style="background-color: var(--color-orange-500);"></div><div class="size-5 rounded-full cursor-pointer transition-transform duration-200 active:scale-90 " tabindex="0" role="button" aria-label="Select pink color" aria-pressed="false" style="background-color: var(--color-pink-500);"></div><div class="size-5 rounded-full cursor-pointer transition-transform duration-200 active:scale-90 " tabindex="0" role="button" aria-label="Select yellow color" aria-pressed="false" style="background-color: var(--color-yellow-500);"></div><div class="size-5 rounded-full cursor-pointer transition-transform duration-200 active:scale-90 " tabindex="0" role="button" aria-label="Select cyan color" aria-pressed="false" style="background-color: var(--color-cyan-500);"></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
