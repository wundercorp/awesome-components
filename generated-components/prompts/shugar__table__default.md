# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/shugar/table/default
- Registry URL: https://21st.dev/r/shugar/table
- Author: shugar
- Component slug: table
- Demo slug: default
- Title: table
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/shugar/table with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/shugar__table__default.html
- Local screenshot file: generated-21st-prompts/screenshots/shugar__table__default.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="absolute z-10 top-4 right-14 flex flex-col items-end gap-1"><button type="button" role="combobox" aria-controls="radix-«r0»" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" class="flex w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 gap-2 h-8"><span style="pointer-events: none;">Basic Table</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></div><div class="flex w-full justify-center relative"><div class="w-full flex flex-col justify-center"><div class="font-bold text-xl dark:text-white">Basic table</div><div class="w-full mt-[8px]"><div class="w-full overflow-auto min-w-[248px] p-6 rounded-lg relative border border-gray-alpha-400 bg-background-100"><table class="w-full border-collapse text-sm font-sans text-gray-900"><thead class="border-b border-gray-alpha-400"><tr class="[&amp;_td:first-child]:rounded-l-[4px] [&amp;_td:last-child]:rounded-r-[4px] transition-colors"><th class="h-10 px-2 align-middle font-medium text-left last:text-right">Col 1</th><th class="h-10 px-2 align-middle font-medium text-left last:text-right">Col 2</th><th class="h-10 px-2 align-middle font-medium text-left last:text-right">Col 3</th></tr></thead><tbody class="table-row h-3"></tbody><tbody class=""><tr class="[&amp;_td:first-child]:rounded-l-[4px] [&amp;_td:last-child]:rounded-r-[4px] transition-colors"><td class="px-2 py-2.5 align-middle last:text-right ">Value 1.1</td><td class="px-2 py-2.5 align-middle last:text-right ">Value 1.2</td><td class="px-2 py-2.5 align-middle last:text-right ">Value 1.3</td></tr><tr class="[&amp;_td:first-child]:rounded-l-[4px] [&amp;_td:last-child]:rounded-r-[4px] transition-colors"><td class="px-2 py-2.5 align-middle last:text-right ">Value 2.1</td><td class="px-2 py-2.5 align-middle last:text-right ">Value 2.2</td><td class="px-2 py-2.5 align-middle last:text-right ">Value 2.3</td></tr><tr class="[&amp;_td:first-child]:rounded-l-[4px] [&amp;_td:last-child]:rounded-r-[4px] transition-colors"><td class="px-2 py-2.5 align-middle last:text-right ">Value 3.1</td><td class="px-2 py-2.5 align-middle last:text-right ">Value 3.2</td><td class="px-2 py-2.5 align-middle last:text-right ">Value 3.3</td></tr></tbody></table></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.