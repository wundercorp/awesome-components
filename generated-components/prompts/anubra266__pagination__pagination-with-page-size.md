# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/pagination/pagination-with-page-size
- Registry URL: https://21st.dev/r/anubra266/pagination
- Author: anubra266
- Component slug: pagination
- Demo slug: pagination-with-page-size
- Title: pagination
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/pagination with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__pagination__pagination-with-page-size.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__pagination__pagination-with-page-size.png

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

No registry metadata available.

## Rendered DOM snapshot

This is the rendered demo HTML extracted from the live preview. Use it to verify structure, class names, visible content, and layout.

```html
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><nav id="pagination:«r0»" data-scope="pagination" data-part="root" dir="ltr" aria-label="pagination" class="flex items-center gap-6 w-full justify-between"><div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"><span>Rows per page</span><select class="px-2 py-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-100 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50"><option value="5">5</option><option value="10">10</option><option value="25">25</option><option value="50">50</option></select></div><div class="text-sm text-gray-600 dark:text-gray-400">1-10 of 100</div><div class="flex items-center gap-1"><button disabled="" class="inline-flex items-center justify-center w-8 h-8 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-left w-4 h-4" aria-hidden="true"><path d="m11 17-5-5 5-5"></path><path d="m18 17-5-5 5-5"></path></svg></button><button id="pagination:«r0»:prev" data-scope="pagination" data-part="prev-trigger" dir="ltr" data-disabled="" aria-label="previous page" disabled="" type="button" class="inline-flex items-center justify-center w-8 h-8 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors data-disabled:opacity-50 data-disabled:cursor-not-allowed data-disabled:pointer-events-none"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left w-4 h-4" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></button><button id="pagination:«r0»:next" data-scope="pagination" data-part="next-trigger" dir="ltr" aria-label="next page" type="button" class="inline-flex items-center justify-center w-8 h-8 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors data-disabled:opacity-50 data-disabled:cursor-not-allowed data-disabled:pointer-events-none"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right w-4 h-4" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button><button class="inline-flex items-center justify-center w-8 h-8 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-right w-4 h-4" aria-hidden="true"><path d="m6 17 5-5-5-5"></path><path d="m13 17 5-5-5-5"></path></svg></button></div></nav></div></div></div>
```

## Public registry source files

No public registry source files were available.