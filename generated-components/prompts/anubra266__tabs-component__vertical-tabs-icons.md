# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/tabs-component/vertical-tabs-icons
- Registry URL: https://21st.dev/r/anubra266/tabs-component
- Author: anubra266
- Component slug: tabs-component
- Demo slug: vertical-tabs-icons
- Title: tabs-component
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/tabs-component with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__tabs-component__vertical-tabs-icons.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__tabs-component__vertical-tabs-icons.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-start justify-center"><div data-scope="tabs" data-part="root" id="tabs:«r0»" data-orientation="horizontal" dir="ltr" class="flex gap-4 w-full"><div data-scope="tabs" data-part="list" id="tabs:«r0»:list" role="tablist" dir="ltr" aria-orientation="horizontal" data-orientation="horizontal" class="flex flex-col gap-1 p-1 bg-gray-100 rounded-lg dark:bg-gray-700 w-fit"><button data-scope="tabs" data-part="trigger" role="tab" type="button" dir="ltr" data-orientation="horizontal" data-value="tab1" aria-selected="false" data-ownedby="tabs:«r0»:list" id="tabs:«r0»:trigger-tab1" tabindex="-1" class="relative p-3 text-gray-600 rounded-md transition-all data-selected:bg-white data-selected:text-gray-900 data-selected:shadow-sm dark:text-gray-300 dark:data-selected:bg-gray-800 dark:data-selected:text-gray-100"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house w-5 h-5" aria-hidden="true"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg></button><button data-scope="tabs" data-part="trigger" role="tab" type="button" dir="ltr" data-orientation="horizontal" data-value="tab2" aria-selected="true" data-selected="" data-focus="" aria-controls="tabs:«r0»:content-tab2" data-ownedby="tabs:«r0»:list" id="tabs:«r0»:trigger-tab2" tabindex="0" class="relative p-3 text-gray-600 rounded-md transition-all data-selected:bg-white data-selected:text-gray-900 data-selected:shadow-sm dark:text-gray-300 dark:data-selected:bg-gray-800 dark:data-selected:text-gray-100"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-open w-5 h-5" aria-hidden="true"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"></path></svg><span class="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gray-600 text-xs font-medium text-white dark:bg-gray-400 dark:text-gray-900">3</span></button><button data-scope="tabs" data-part="trigger" role="tab" type="button" dir="ltr" data-orientation="horizontal" data-value="tab3" aria-selected="false" data-ownedby="tabs:«r0»:list" id="tabs:«r0»:trigger-tab3" tabindex="-1" class="relative p-3 text-gray-600 rounded-md transition-all data-selected:bg-white data-selected:text-gray-900 data-selected:shadow-sm dark:text-gray-300 dark:data-selected:bg-gray-800 dark:data-selected:text-gray-100"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package w-5 h-5" aria-hidden="true"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg></button></div><div class="flex-1 border border-gray-200 rounded-lg p-4 dark:border-gray-700"><div data-scope="tabs" data-part="content" dir="ltr" id="tabs:«r0»:content-tab1" tabindex="0" aria-labelledby="tabs:«r0»:trigger-tab1" role="tabpanel" data-ownedby="tabs:«r0»:list" data-orientation="horizontal" hidden="" data-state="closed" class="text-gray-600 dark:text-gray-300">Main dashboard with system overview.</div><div data-scope="tabs" data-part="content" dir="ltr" id="tabs:«r0»:content-tab2" tabindex="0" aria-labelledby="tabs:«r0»:trigger-tab2" role="tabpanel" data-ownedby="tabs:«r0»:list" data-selected="" data-orientation="horizontal" data-state="open" class="text-gray-600 dark:text-gray-300">Browse and manage project files.</div><div data-scope="tabs" data-part="content" dir="ltr" id="tabs:«r0»:content-tab3" tabindex="0" aria-labelledby="tabs:«r0»:trigger-tab3" role="tabpanel" data-ownedby="tabs:«r0»:list" data-orientation="horizontal" hidden="" data-state="closed" class="text-gray-600 dark:text-gray-300">View package dependencies and libraries.</div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.