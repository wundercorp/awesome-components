# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/listbox/default
- Registry URL: https://21st.dev/r/anubra266/listbox
- Author: anubra266
- Component slug: listbox
- Demo slug: default
- Title: listbox
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/listbox with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__listbox__default.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__listbox__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center min-h-32"><div data-scope="listbox" data-part="root" dir="ltr" id="select:«r0»" data-orientation="vertical" class="[--listbox-bg:#ffffff] dark:[--listbox-bg:#111827] [--listbox-border:#e5e7eb] dark:[--listbox-border:#374151]"><label dir="ltr" id="select:«r0»:label" data-scope="listbox" data-part="label" class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Select your framework</label><div dir="ltr" id="select:«r0»:content" role="listbox" data-scope="listbox" data-part="content" data-orientation="vertical" aria-labelledby="select:«r0»:label" tabindex="0" data-layout="list" class="bg-(--listbox-bg) border border-(--listbox-border) rounded-lg px-1 py-2 w-64 shadow-lg" style="--column-count: 1;"><div id="select:«r0»:option:React" role="option" data-scope="listbox" data-part="item" dir="ltr" data-value="React" aria-selected="false" data-layout="list" data-state="unchecked" data-orientation="vertical" class="flex items-center justify-between px-3 py-2 mx-1 rounded-md cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-800 data-disabled:opacity-50 data-disabled:cursor-not-allowed transition-colors"><div data-scope="listbox" data-part="item-text" data-state="unchecked">React</div><div data-scope="listbox" data-part="item-indicator" aria-hidden="true" data-state="unchecked" hidden=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></div><div id="select:«r0»:option:Vue" role="option" data-scope="listbox" data-part="item" dir="ltr" data-value="Vue" aria-selected="false" data-layout="list" data-state="unchecked" data-orientation="vertical" class="flex items-center justify-between px-3 py-2 mx-1 rounded-md cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-800 data-disabled:opacity-50 data-disabled:cursor-not-allowed transition-colors"><div data-scope="listbox" data-part="item-text" data-state="unchecked">Vue</div><div data-scope="listbox" data-part="item-indicator" aria-hidden="true" data-state="unchecked" hidden=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></div><div id="select:«r0»:option:Angular" role="option" data-scope="listbox" data-part="item" dir="ltr" data-value="Angular" aria-selected="false" data-layout="list" data-state="unchecked" data-orientation="vertical" class="flex items-center justify-between px-3 py-2 mx-1 rounded-md cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-800 data-disabled:opacity-50 data-disabled:cursor-not-allowed transition-colors"><div data-scope="listbox" data-part="item-text" data-state="unchecked">Angular</div><div data-scope="listbox" data-part="item-indicator" aria-hidden="true" data-state="unchecked" hidden=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></div><div id="select:«r0»:option:Svelte" role="option" data-scope="listbox" data-part="item" dir="ltr" data-value="Svelte" aria-selected="false" data-layout="list" data-state="unchecked" data-orientation="vertical" class="flex items-center justify-between px-3 py-2 mx-1 rounded-md cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-800 data-disabled:opacity-50 data-disabled:cursor-not-allowed transition-colors"><div data-scope="listbox" data-part="item-text" data-state="unchecked">Svelte</div><div data-scope="listbox" data-part="item-indicator" aria-hidden="true" data-state="unchecked" hidden=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></div><div id="select:«r0»:option:Solid" role="option" data-scope="listbox" data-part="item" dir="ltr" data-value="Solid" aria-selected="false" data-layout="list" data-state="unchecked" data-orientation="vertical" class="flex items-center justify-between px-3 py-2 mx-1 rounded-md cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-800 data-disabled:opacity-50 data-disabled:cursor-not-allowed transition-colors"><div data-scope="listbox" data-part="item-text" data-state="unchecked">Solid</div><div data-scope="listbox" data-part="item-indicator" aria-hidden="true" data-state="unchecked" hidden=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.