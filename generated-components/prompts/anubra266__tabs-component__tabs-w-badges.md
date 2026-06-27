# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/tabs-component/tabs-w-badges
- Registry URL: https://21st.dev/r/anubra266/tabs-component
- Author: anubra266
- Component slug: tabs-component
- Demo slug: tabs-w-badges
- Title: tabs-component
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/tabs-component with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__tabs-component__tabs-w-badges.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__tabs-component__tabs-w-badges.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center"><div data-scope="tabs" data-part="root" id="tabs:«r0»" data-orientation="horizontal" dir="ltr" class="w-full flex flex-col items-center"><div data-scope="tabs" data-part="list" id="tabs:«r0»:list" role="tablist" dir="ltr" aria-orientation="horizontal" data-orientation="horizontal" class="flex gap-2 mb-8"><button data-scope="tabs" data-part="trigger" role="tab" type="button" dir="ltr" data-orientation="horizontal" data-value="overview" aria-selected="false" data-ownedby="tabs:«r0»:list" id="tabs:«r0»:trigger-overview" tabindex="-1" class="flex flex-col items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 rounded-md transition-all data-selected:bg-gray-200 data-selected:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:data-selected:bg-gray-700 dark:data-selected:text-gray-100 dark:hover:bg-gray-700 w-20"><div class="flex items-center justify-center w-6 h-6 rounded-full text-white font-semibold text-xs bg-gray-400 dark:bg-gray-500">8</div>Tasks</button><button data-scope="tabs" data-part="trigger" role="tab" type="button" dir="ltr" data-orientation="horizontal" data-value="projects" aria-selected="false" data-ownedby="tabs:«r0»:list" id="tabs:«r0»:trigger-projects" tabindex="-1" class="flex flex-col items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 rounded-md transition-all data-selected:bg-gray-200 data-selected:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:data-selected:bg-gray-700 dark:data-selected:text-gray-100 dark:hover:bg-gray-700 w-20"><div class="flex items-center justify-center w-6 h-6 rounded-full text-white font-semibold text-xs bg-gray-400 dark:bg-gray-500">5</div>Messages</button><button data-scope="tabs" data-part="trigger" role="tab" type="button" dir="ltr" data-orientation="horizontal" data-value="packages" aria-selected="true" data-selected="" data-focus="" aria-controls="tabs:«r0»:content-packages" data-ownedby="tabs:«r0»:list" id="tabs:«r0»:trigger-packages" tabindex="0" class="flex flex-col items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 rounded-md transition-all data-selected:bg-gray-200 data-selected:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:data-selected:bg-gray-700 dark:data-selected:text-gray-100 dark:hover:bg-gray-700 w-20"><div class="flex items-center justify-center w-6 h-6 rounded-full text-white font-semibold text-xs bg-gray-900 dark:bg-gray-100 dark:text-gray-900">2</div>Alerts</button></div><div data-scope="tabs" data-part="content" dir="ltr" id="tabs:«r0»:content-overview" tabindex="0" aria-labelledby="tabs:«r0»:trigger-overview" role="tabpanel" data-ownedby="tabs:«r0»:list" data-orientation="horizontal" hidden="" data-state="closed" class="text-center text-gray-600 dark:text-gray-300">Manage your daily tasks and assignments.</div><div data-scope="tabs" data-part="content" dir="ltr" id="tabs:«r0»:content-projects" tabindex="0" aria-labelledby="tabs:«r0»:trigger-projects" role="tabpanel" data-ownedby="tabs:«r0»:list" data-orientation="horizontal" hidden="" data-state="closed" class="text-center text-gray-600 dark:text-gray-300">View conversations and notifications.</div><div data-scope="tabs" data-part="content" dir="ltr" id="tabs:«r0»:content-packages" tabindex="0" aria-labelledby="tabs:«r0»:trigger-packages" role="tabpanel" data-ownedby="tabs:«r0»:list" data-selected="" data-orientation="horizontal" data-state="open" class="text-center text-gray-600 dark:text-gray-300">Monitor system alerts and warnings.</div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.