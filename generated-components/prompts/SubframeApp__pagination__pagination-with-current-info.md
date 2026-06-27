# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/SubframeApp/pagination/pagination-with-current-info
- Registry URL: https://21st.dev/r/SubframeApp/pagination
- Author: SubframeApp
- Component slug: pagination
- Demo slug: pagination-with-current-info
- Title: pagination
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/SubframeApp/pagination with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/SubframeApp__pagination__pagination-with-current-info.html
- Local screenshot file: generated-21st-prompts/screenshots/SubframeApp__pagination__pagination-with-current-info.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8"><div class="hidden justify-between text-sm md:flex" aria-label="Pagination"><div>Showing 1-10 of 120</div><div class="flex items-center gap-8"><button type="button" disabled="" class="px-3 py-1.5 rounded-md duration-150 hover:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed">Previous</button><ul class="flex items-center gap-1" role="list"><li><button type="button" aria-current="page" class="px-2.5 py-1.5 rounded-md duration-150 bg-indigo-600 text-white font-medium">1</button></li><li><button type="button" class="px-2.5 py-1.5 rounded-md duration-150 hover:bg-indigo-600 hover:text-white">2</button></li><li><span class="px-2 text-gray-400 select-none">…</span></li><li><button type="button" class="px-2.5 py-1.5 rounded-md duration-150 hover:bg-indigo-600 hover:text-white">12</button></li></ul><button type="button" class="px-3 py-1.5 rounded-md duration-150 hover:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed">Next</button></div></div><div class="flex items-center justify-between text-sm text-gray-600 font-medium md:hidden"><button type="button" disabled="" class="px-3 py-1.5 border rounded-md duration-150 hover:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed">Previous</button><div class="px-3 font-medium">Showing 1-10 of 120</div><button type="button" class="px-3 py-1.5 border rounded-md duration-150 hover:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed">Next</button></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.