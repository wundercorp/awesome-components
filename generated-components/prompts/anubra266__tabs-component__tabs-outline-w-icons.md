# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/tabs-component/tabs-outline-w-icons
- Registry URL: https://21st.dev/r/anubra266/tabs-component
- Author: anubra266
- Component slug: tabs-component
- Demo slug: tabs-outline-w-icons
- Title: tabs-component
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/tabs-component with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__tabs-component__tabs-outline-w-icons.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__tabs-component__tabs-outline-w-icons.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center"><div data-scope="tabs" data-part="root" id="tabs:«r0»" data-orientation="horizontal" dir="ltr" class="w-full flex flex-col items-center"><div data-scope="tabs" data-part="list" id="tabs:«r0»:list" role="tablist" dir="ltr" aria-orientation="horizontal" data-orientation="horizontal" class="flex border border-gray-300 rounded-lg mb-8 w-fit dark:border-gray-600"><button data-scope="tabs" data-part="trigger" role="tab" type="button" dir="ltr" data-orientation="horizontal" data-value="tab1" aria-selected="false" data-ownedby="tabs:«r0»:list" id="tabs:«r0»:trigger-tab1" tabindex="-1" class="flex flex-col items-center gap-1 w-20 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors data-selected:text-gray-900 relative border-b-2 border-b-transparent data-selected:border-b-gray-900 dark:text-gray-400 dark:hover:text-gray-200 dark:data-selected:text-gray-100 dark:data-selected:border-b-gray-100 rounded-l-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-inbox w-3 h-3" aria-hidden="true"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>Inbox</button><button data-scope="tabs" data-part="trigger" role="tab" type="button" dir="ltr" data-orientation="horizontal" data-value="tab2" aria-selected="true" data-selected="" data-focus="" aria-controls="tabs:«r0»:content-tab2" data-ownedby="tabs:«r0»:list" id="tabs:«r0»:trigger-tab2" tabindex="0" class="flex flex-col items-center gap-1 w-20 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors data-selected:text-gray-900 relative border-b-2 border-b-transparent data-selected:border-b-gray-900 dark:text-gray-400 dark:hover:text-gray-200 dark:data-selected:text-gray-100 dark:data-selected:border-b-gray-100 border-l border-r border-gray-300 dark:border-gray-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text w-3 h-3" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>Drafts</button><button data-scope="tabs" data-part="trigger" role="tab" type="button" dir="ltr" data-orientation="horizontal" data-value="tab3" aria-selected="false" data-ownedby="tabs:«r0»:list" id="tabs:«r0»:trigger-tab3" tabindex="-1" class="flex flex-col items-center gap-1 w-20 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors data-selected:text-gray-900 relative border-b-2 border-b-transparent data-selected:border-b-gray-900 dark:text-gray-400 dark:hover:text-gray-200 dark:data-selected:text-gray-100 dark:data-selected:border-b-gray-100 rounded-r-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send w-3 h-3" aria-hidden="true"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>Sent</button></div><div data-scope="tabs" data-part="content" dir="ltr" id="tabs:«r0»:content-tab1" tabindex="0" aria-labelledby="tabs:«r0»:trigger-tab1" role="tabpanel" data-ownedby="tabs:«r0»:list" data-orientation="horizontal" hidden="" data-state="closed" class="text-center text-gray-600 dark:text-gray-300">View all received messages and emails.</div><div data-scope="tabs" data-part="content" dir="ltr" id="tabs:«r0»:content-tab2" tabindex="0" aria-labelledby="tabs:«r0»:trigger-tab2" role="tabpanel" data-ownedby="tabs:«r0»:list" data-selected="" data-orientation="horizontal" data-state="open" class="text-center text-gray-600 dark:text-gray-300">Work on unsent drafts and compositions.</div><div data-scope="tabs" data-part="content" dir="ltr" id="tabs:«r0»:content-tab3" tabindex="0" aria-labelledby="tabs:«r0»:trigger-tab3" role="tabpanel" data-ownedby="tabs:«r0»:list" data-orientation="horizontal" hidden="" data-state="closed" class="text-center text-gray-600 dark:text-gray-300">Review sent messages and deliveries.</div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.