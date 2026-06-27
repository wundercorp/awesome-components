# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/basic-tags-input/default
- Registry URL: https://21st.dev/r/anubra266/basic-tags-input
- Author: anubra266
- Component slug: basic-tags-input
- Demo slug: default
- Title: basic-tags-input
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/basic-tags-input with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__basic-tags-input__default.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__basic-tags-input__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center"><div dir="ltr" data-scope="tags-input" data-part="root" id="tags-input:«r0»" class="w-full max-w-md"><label data-scope="tags-input" data-part="label" id="tags-input:«r0»:label" dir="ltr" for="tags-input:«r0»:input" class="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Frameworks</label><div id="tags-input:«r0»:control" data-scope="tags-input" data-part="control" dir="ltr" class="flex flex-wrap gap-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 min-h-8 focus-within:outline-hidden focus-within:ring-2 focus-within:ring-blue-500/50 dark:focus-within:ring-blue-400/50 focus-within:border-blue-500 dark:focus-within:border-blue-400"><div data-scope="tags-input" data-part="item" dir="ltr" data-value="React" class="flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-800 rounded text-xs dark:bg-gray-700 dark:text-gray-200"><div data-scope="tags-input" data-part="item-preview" id="tags-input:«r0»:tag:React:0" dir="ltr" data-value="React" class="flex items-center gap-1"><span data-scope="tags-input" data-part="item-text" dir="ltr">React</span><button data-scope="tags-input" data-part="item-delete-trigger" dir="ltr" id="tags-input:«r0»:tag:React:0:delete-btn" type="button" aria-label="Delete tag React" tabindex="-1" class="flex items-center justify-center w-3 h-3 hover:bg-gray-200 rounded transition-colors dark:hover:bg-gray-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x w-2 h-2" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button></div><input data-scope="tags-input" data-part="item-input" dir="ltr" aria-label="Editing tag React. Press enter to save or escape to cancel." id="tags-input:«r0»:tag:React:0:input" tabindex="-1" hidden="" class="bg-transparent border-none outline-none text-xs" value=""></div><div data-scope="tags-input" data-part="item" dir="ltr" data-value="Vue" class="flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-800 rounded text-xs dark:bg-gray-700 dark:text-gray-200"><div data-scope="tags-input" data-part="item-preview" id="tags-input:«r0»:tag:Vue:1" dir="ltr" data-value="Vue" class="flex items-center gap-1"><span data-scope="tags-input" data-part="item-text" dir="ltr">Vue</span><button data-scope="tags-input" data-part="item-delete-trigger" dir="ltr" id="tags-input:«r0»:tag:Vue:1:delete-btn" type="button" aria-label="Delete tag Vue" tabindex="-1" class="flex items-center justify-center w-3 h-3 hover:bg-gray-200 rounded transition-colors dark:hover:bg-gray-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x w-2 h-2" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button></div><input data-scope="tags-input" data-part="item-input" dir="ltr" aria-label="Editing tag Vue. Press enter to save or escape to cancel." id="tags-input:«r0»:tag:Vue:1:input" tabindex="-1" hidden="" class="bg-transparent border-none outline-none text-xs" value=""></div><div data-scope="tags-input" data-part="item" dir="ltr" data-value="Svelte" class="flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-800 rounded text-xs dark:bg-gray-700 dark:text-gray-200"><div data-scope="tags-input" data-part="item-preview" id="tags-input:«r0»:tag:Svelte:2" dir="ltr" data-value="Svelte" class="flex items-center gap-1"><span data-scope="tags-input" data-part="item-text" dir="ltr">Svelte</span><button data-scope="tags-input" data-part="item-delete-trigger" dir="ltr" id="tags-input:«r0»:tag:Svelte:2:delete-btn" type="button" aria-label="Delete tag Svelte" tabindex="-1" class="flex items-center justify-center w-3 h-3 hover:bg-gray-200 rounded transition-colors dark:hover:bg-gray-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x w-2 h-2" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button></div><input data-scope="tags-input" data-part="item-input" dir="ltr" aria-label="Editing tag Svelte. Press enter to save or escape to cancel." id="tags-input:«r0»:tag:Svelte:2:input" tabindex="-1" hidden="" class="bg-transparent border-none outline-none text-xs" value=""></div><input data-scope="tags-input" data-part="input" dir="ltr" id="tags-input:«r0»:input" autocomplete="off" autocorrect="off" autocapitalize="none" placeholder="Add Framework" class="flex-1 min-w-[80px] bg-transparent border-none outline-none text-xs text-gray-900 placeholder-gray-500 dark:text-gray-100 dark:placeholder-gray-400" value=""></div><button data-scope="tags-input" data-part="clear-trigger" dir="ltr" id="tags-input:«r0»:clear-btn" type="button" aria-label="Clear all tags" class="mt-1 text-xs text-gray-500 hover:text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-gray-200">Clear all</button><input hidden="" id="tags-input:«r0»:hidden-input" type="text" value="React, Vue, Svelte"></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.