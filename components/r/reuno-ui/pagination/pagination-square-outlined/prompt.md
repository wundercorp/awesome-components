# Build Pagination in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Pagination screenshot](screenshot.png)

## Component

- Author group: `reuno-ui`
- Component: `pagination`
- Variant: `pagination-square-outlined`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: reuno-ui
- Component slug: pagination
- Demo slug: pagination-square-outlined
- Title: pagination
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center gap-2 text-gray-500"><button type="button" aria-label="prev" class="mr-4 flex items-center gap-2"><svg class="mt-1.5" width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1 2 6.667 8 12" stroke="#111820" stroke-opacity=".5" stroke-width="2" stroke-linecap="round"></path></svg><span>prev</span></button><div class="flex gap-2 text-sm md:text-base"><button type="button" class="flex items-center justify-center w-9 md:w-12 h-9 md:h-12 aspect-square rounded-md hover:bg-slate-100/80 transition-all">1</button><button type="button" class="flex items-center justify-center w-9 md:w-12 h-9 md:h-12 aspect-square rounded-md hover:bg-slate-100/80 transition-all">2</button><button type="button" class="flex items-center justify-center w-9 md:w-12 h-9 md:h-12 aspect-square rounded-md border border-indigo-500 text-indigo-500 transition-all">3</button><button type="button" class="flex items-center justify-center w-9 md:w-12 h-9 md:h-12 aspect-square rounded-md hover:bg-slate-100/80 transition-all">4</button><button type="button" class="flex items-center justify-center w-9 md:w-12 h-9 md:h-12 aspect-square rounded-md hover:bg-slate-100/80 transition-all">5</button></div><button type="button" aria-label="next" class="ml-4 flex items-center gap-2"><span>next</span><svg class="mt-1.5" width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg" transform="scale(-1 1)"><path d="M8 1 2 6.667 8 12" stroke="#111820" stroke-opacity=".5" stroke-width="2" stroke-linecap="round"></path></svg></button></div></div></div></div>
```

## Reference source files

No reference source files were available.
