# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/tabs-component/tabs-icon-above
- Registry URL: https://21st.dev/r/anubra266/tabs-component
- Author: anubra266
- Component slug: tabs-component
- Demo slug: tabs-icon-above
- Title: tabs-component
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/tabs-component with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__tabs-component__tabs-icon-above.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__tabs-component__tabs-icon-above.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center"><div data-scope="tabs" data-part="root" id="tabs:«r0»" data-orientation="horizontal" dir="ltr" class="w-full flex flex-col items-center"><div data-scope="tabs" data-part="list" id="tabs:«r0»:list" role="tablist" dir="ltr" aria-orientation="horizontal" data-orientation="horizontal" class="flex gap-8 relative border-b border-gray-200 dark:border-gray-700 mb-8 w-fit"><button data-scope="tabs" data-part="trigger" role="tab" type="button" dir="ltr" data-orientation="horizontal" data-value="overview" aria-selected="true" data-selected="" data-focus="" aria-controls="tabs:«r0»:content-overview" data-ownedby="tabs:«r0»:list" id="tabs:«r0»:trigger-overview" tabindex="0" class="flex flex-col items-center gap-2 px-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors data-selected:text-gray-900 relative border-b-2 border-transparent data-selected:border-gray-900 dark:text-gray-400 dark:hover:text-gray-200 dark:data-selected:text-gray-100 dark:data-selected:border-gray-100"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open w-5 h-5" aria-hidden="true"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>Learning</button><button data-scope="tabs" data-part="trigger" role="tab" type="button" dir="ltr" data-orientation="horizontal" data-value="projects" aria-selected="false" data-ownedby="tabs:«r0»:list" id="tabs:«r0»:trigger-projects" tabindex="-1" class="flex flex-col items-center gap-2 px-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors data-selected:text-gray-900 relative border-b-2 border-transparent data-selected:border-gray-900 dark:text-gray-400 dark:hover:text-gray-200 dark:data-selected:text-gray-100 dark:data-selected:border-gray-100"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users w-5 h-5" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>Community</button><button data-scope="tabs" data-part="trigger" role="tab" type="button" dir="ltr" data-orientation="horizontal" data-value="packages" aria-selected="false" data-ownedby="tabs:«r0»:list" id="tabs:«r0»:trigger-packages" tabindex="-1" class="flex flex-col items-center gap-2 px-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors data-selected:text-gray-900 relative border-b-2 border-transparent data-selected:border-gray-900 dark:text-gray-400 dark:hover:text-gray-200 dark:data-selected:text-gray-100 dark:data-selected:border-gray-100"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up w-5 h-5" aria-hidden="true"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>Progress</button></div><div data-scope="tabs" data-part="content" dir="ltr" id="tabs:«r0»:content-overview" tabindex="0" aria-labelledby="tabs:«r0»:trigger-overview" role="tabpanel" data-ownedby="tabs:«r0»:list" data-selected="" data-orientation="horizontal" data-state="open" class="text-center text-gray-600 dark:text-gray-300">Access courses and educational materials.</div><div data-scope="tabs" data-part="content" dir="ltr" id="tabs:«r0»:content-projects" tabindex="0" aria-labelledby="tabs:«r0»:trigger-projects" role="tabpanel" data-ownedby="tabs:«r0»:list" data-orientation="horizontal" hidden="" data-state="closed" class="text-center text-gray-600 dark:text-gray-300">Connect with peers and join discussions.</div><div data-scope="tabs" data-part="content" dir="ltr" id="tabs:«r0»:content-packages" tabindex="0" aria-labelledby="tabs:«r0»:trigger-packages" role="tabpanel" data-ownedby="tabs:«r0»:list" data-orientation="horizontal" hidden="" data-state="closed" class="text-center text-gray-600 dark:text-gray-300">Track your learning achievements and goals.</div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.