# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/shugar/modal/single-button
- Registry URL: https://21st.dev/r/shugar/modal
- Author: shugar
- Component slug: modal
- Demo slug: single-button
- Title: modal
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/shugar/modal with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/shugar__modal__single-button.html
- Local screenshot file: generated-21st-prompts/screenshots/shugar__modal__single-button.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div><button type="submit" tabindex="0" class="flex justify-center items-center gap-0.5 duration-150 px-1.5 h-8 text-sm bg-gray-1000 hover:bg-gray-1000-h text-background-100 fill-background-100 rounded-md focus:shadow-focus-ring focus:outline-0"><span class="relative overflow-hidden whitespace-nowrap overflow-ellipsis font-sans px-1.5">Open Modal</span></button><div class="fixed inset-0 flex items-center justify-center z-[99999] duration-300 bg-transparent pointer-events-none"><div class="bg-background-100 rounded-xl shadow-modal flex flex-col font-sans text-gray-1000 w-[540px] max-h-[min(800px,_80vh)] overflow-y-auto duration-300 opacity-0 scale-95 pointer-events-none"><div class="overflow-y-auto text-sm px-6 pb-6"><header class="mb-6 rounded-t-xl sticky top-0 bg-background-200 border-b border-gray-alpha-400 pt-5 px-6 -mx-6"><h2 class="mb-6 text-2xl font-semibold tracking-[-0.029375rem]">Create Token</h2></header><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div></div><footer class="sticky bottom-0 p-4 flex justify-between shrink-0 bg-background-200 inset-0 border-t border-gray-alpha-400 rounded-b-xl"><button type="submit" tabindex="0" class="flex justify-center items-center gap-0.5 duration-150 px-2.5 h-10 text-sm bg-gray-1000 hover:bg-gray-1000-h text-background-100 fill-background-100 rounded-md w-full focus:shadow-focus-ring focus:outline-0"><span class="relative overflow-hidden whitespace-nowrap overflow-ellipsis font-sans px-1.5">Cancel</span></button></footer></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.