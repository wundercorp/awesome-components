# Build Pagination in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Pagination screenshot](screenshot.png)

## Component

- Author group: `anubra266`
- Component: `pagination`
- Variant: `pagination-complete`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: anubra266
- Component slug: pagination
- Demo slug: pagination-complete
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><nav id="pagination:«r0»" data-scope="pagination" data-part="root" dir="ltr" aria-label="pagination" class="flex items-center gap-1"><button disabled="" class="inline-flex items-center justify-center w-8 h-8 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-left w-4 h-4" aria-hidden="true"><path d="m11 17-5-5 5-5"></path><path d="m18 17-5-5 5-5"></path></svg></button><button id="pagination:«r0»:prev" data-scope="pagination" data-part="prev-trigger" dir="ltr" data-disabled="" aria-label="previous page" disabled="" type="button" class="inline-flex items-center justify-center w-8 h-8 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors data-disabled:opacity-50 data-disabled:cursor-not-allowed data-disabled:pointer-events-none"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left w-4 h-4" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></button><button id="pagination:«r0»:item:1" data-scope="pagination" data-part="item" dir="ltr" data-index="1" data-selected="" aria-current="page" aria-label="page 1" type="button" class="inline-flex items-center justify-center w-8 h-8 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors data-selected:bg-blue-500 data-selected:text-white data-selected:hover:bg-blue-600">1</button><button id="pagination:«r0»:item:2" data-scope="pagination" data-part="item" dir="ltr" data-index="2" aria-label="page 2" type="button" class="inline-flex items-center justify-center w-8 h-8 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors data-selected:bg-blue-500 data-selected:text-white data-selected:hover:bg-blue-600">2</button><button id="pagination:«r0»:item:3" data-scope="pagination" data-part="item" dir="ltr" data-index="3" aria-label="page 3" type="button" class="inline-flex items-center justify-center w-8 h-8 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors data-selected:bg-blue-500 data-selected:text-white data-selected:hover:bg-blue-600">3</button><button id="pagination:«r0»:item:4" data-scope="pagination" data-part="item" dir="ltr" data-index="4" aria-label="page 4" type="button" class="inline-flex items-center justify-center w-8 h-8 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors data-selected:bg-blue-500 data-selected:text-white data-selected:hover:bg-blue-600">4</button><button id="pagination:«r0»:item:5" data-scope="pagination" data-part="item" dir="ltr" data-index="5" aria-label="page 5" type="button" class="inline-flex items-center justify-center w-8 h-8 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors data-selected:bg-blue-500 data-selected:text-white data-selected:hover:bg-blue-600">5</button><div id="pagination:«r0»:ellipsis:5" data-scope="pagination" data-part="ellipsis" dir="ltr" class="inline-flex items-center justify-center w-8 h-8 text-gray-500 dark:text-gray-400">…</div><button id="pagination:«r0»:item:50" data-scope="pagination" data-part="item" dir="ltr" data-index="50" aria-label="last page, page 50" type="button" class="inline-flex items-center justify-center w-8 h-8 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors data-selected:bg-blue-500 data-selected:text-white data-selected:hover:bg-blue-600">50</button><button id="pagination:«r0»:next" data-scope="pagination" data-part="next-trigger" dir="ltr" aria-label="next page" type="button" class="inline-flex items-center justify-center w-8 h-8 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors data-disabled:opacity-50 data-disabled:cursor-not-allowed data-disabled:pointer-events-none"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right w-4 h-4" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button><button class="inline-flex items-center justify-center w-8 h-8 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-right w-4 h-4" aria-hidden="true"><path d="m6 17 5-5-5-5"></path><path d="m13 17 5-5-5-5"></path></svg></button></nav></div></div></div>
```

## Reference source files

No reference source files were available.
