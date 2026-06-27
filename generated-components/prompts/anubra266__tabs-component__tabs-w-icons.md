# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/tabs-component/tabs-w-icons
- Registry URL: https://21st.dev/r/anubra266/tabs-component
- Author: anubra266
- Component slug: tabs-component
- Demo slug: tabs-w-icons
- Title: tabs-component
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/tabs-component with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__tabs-component__tabs-w-icons.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__tabs-component__tabs-w-icons.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center"><div data-scope="tabs" data-part="root" id="tabs:«r0»" data-orientation="horizontal" dir="ltr" class="w-full flex flex-col items-center"><div data-scope="tabs" data-part="list" id="tabs:«r0»:list" role="tablist" dir="ltr" aria-orientation="horizontal" data-orientation="horizontal" class="flex gap-8 relative border-b border-gray-200 dark:border-gray-700 mb-8 w-fit"><button data-scope="tabs" data-part="trigger" role="tab" type="button" dir="ltr" data-orientation="horizontal" data-value="overview" aria-selected="true" data-selected="" data-focus="" aria-controls="tabs:«r0»:content-overview" data-ownedby="tabs:«r0»:list" id="tabs:«r0»:trigger-overview" tabindex="0" class="flex items-center gap-2 px-1 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors data-selected:text-gray-900 relative border-b-2 border-transparent data-selected:border-gray-900 dark:text-gray-400 dark:hover:text-gray-200 dark:data-selected:text-gray-100 dark:data-selected:border-gray-100"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text w-4 h-4" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>Documents</button><button data-scope="tabs" data-part="trigger" role="tab" type="button" dir="ltr" data-orientation="horizontal" data-value="projects" aria-selected="false" data-ownedby="tabs:«r0»:list" id="tabs:«r0»:trigger-projects" tabindex="-1" class="flex items-center gap-2 px-1 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors data-selected:text-gray-900 relative border-b-2 border-transparent data-selected:border-gray-900 dark:text-gray-400 dark:hover:text-gray-200 dark:data-selected:text-gray-100 dark:data-selected:border-gray-100"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar w-4 h-4" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>Events<span class="flex items-center justify-center w-5 h-5 text-xs font-medium text-gray-600 bg-gray-200 rounded-full dark:text-gray-300 dark:bg-gray-600">4</span></button><button data-scope="tabs" data-part="trigger" role="tab" type="button" dir="ltr" data-orientation="horizontal" data-value="packages" aria-selected="false" data-ownedby="tabs:«r0»:list" id="tabs:«r0»:trigger-packages" tabindex="-1" class="flex items-center gap-2 px-1 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors data-selected:text-gray-900 relative border-b-2 border-transparent data-selected:border-gray-900 dark:text-gray-400 dark:hover:text-gray-200 dark:data-selected:text-gray-100 dark:data-selected:border-gray-100"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell w-4 h-4" aria-hidden="true"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>Alerts<span class="flex items-center justify-center px-2 py-0.5 text-xs font-medium text-white bg-gray-600 rounded-full dark:bg-gray-400 dark:text-gray-900">Live</span></button></div><div data-scope="tabs" data-part="content" dir="ltr" id="tabs:«r0»:content-overview" tabindex="0" aria-labelledby="tabs:«r0»:trigger-overview" role="tabpanel" data-ownedby="tabs:«r0»:list" data-selected="" data-orientation="horizontal" data-state="open" class="text-center text-gray-600 dark:text-gray-300">Access and organize all your files and folders.</div><div data-scope="tabs" data-part="content" dir="ltr" id="tabs:«r0»:content-projects" tabindex="0" aria-labelledby="tabs:«r0»:trigger-projects" role="tabpanel" data-ownedby="tabs:«r0»:list" data-orientation="horizontal" hidden="" data-state="closed" class="text-center text-gray-600 dark:text-gray-300">View upcoming meetings and scheduled appointments.</div><div data-scope="tabs" data-part="content" dir="ltr" id="tabs:«r0»:content-packages" tabindex="0" aria-labelledby="tabs:«r0»:trigger-packages" role="tabpanel" data-ownedby="tabs:«r0»:list" data-orientation="horizontal" hidden="" data-state="closed" class="text-center text-gray-600 dark:text-gray-300">Monitor real-time notifications and system updates.</div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.