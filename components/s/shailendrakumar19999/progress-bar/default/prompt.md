# Build Progress Bar in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Progress Bar screenshot](screenshot.png)

## Component

- Author group: `shailendrakumar19999`
- Component: `progress-bar`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: shailendrakumar19999
- Component slug: progress-bar
- Demo slug: default
- Title: progress-bar
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div dir="ltr" data-scope="progress" data-part="root" id="progress-«r0»" data-max="100" data-value="76" data-state="loading" data-orientation="horizontal" class="w-full max-w-md mx-auto space-y-3 p-4 rounded-2xl shadow-sm 
        bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 undefined" style="--percent: 76;"><div class="flex justify-between items-center"><label dir="ltr" id="progress-«r0»-label" data-scope="progress" data-part="label" data-orientation="horizontal" class="text-base font-semibold text-gray-800 dark:text-gray-200">Upload Progress</label></div><div class="relative w-full"><div dir="ltr" id="progress-«r0»-track" data-scope="progress" data-part="track" role="progressbar" aria-label="76%" data-max="100" aria-valuemin="0" aria-valuemax="100" aria-valuenow="76" data-orientation="horizontal" data-state="loading" class="h-5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"><div dir="ltr" data-scope="progress" data-part="range" data-orientation="horizontal" data-state="loading" class="h-full bg-gradient-to-r from-red-500 to-pink-600 
              transition-all ease-out rounded-full shadow-sm" style="width: 76%; transition-duration: 2000ms;"></div></div><span dir="ltr" aria-live="polite" data-scope="progress" data-part="value-text" class="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">76%</span></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
