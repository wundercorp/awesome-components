# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/splitter/three-panels-splitter
- Registry URL: https://21st.dev/r/anubra266/splitter
- Author: anubra266
- Component slug: splitter
- Demo slug: three-panels-splitter
- Title: splitter
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/splitter with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__splitter__three-panels-splitter.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__splitter__three-panels-splitter.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"><div class="w-full h-64"><div data-scope="splitter" data-part="root" data-orientation="horizontal" id="splitter:«r0»" dir="ltr" class="flex gap-2 h-full" style="display: flex; flex-direction: row; height: 100%; width: 100%; overflow: hidden;"><div data-scope="splitter" data-part="panel" data-orientation="horizontal" dir="ltr" data-id="a" data-index="0" id="splitter:«r0»:panel:a" data-ownedby="splitter:«r0»" class="border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-lg text-gray-600 dark:text-gray-400 flex items-center justify-center text-sm" style="flex: 20 1 0px; overflow: hidden;">Sidebar</div><button data-scope="splitter" data-part="resize-trigger" dir="ltr" id="splitter:«r0»:splitter:a:b" role="separator" data-id="a:b" data-ownedby="splitter:«r0»" tabindex="0" aria-valuenow="20" aria-valuemin="20" aria-valuemax="40" data-orientation="horizontal" aria-orientation="horizontal" aria-controls="splitter:«r0»:panel:a splitter:«r0»:panel:b" aria-label="Resize" class="rounded-full transition-colors duration-200 outline-none bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 active:bg-gray-400 dark:active:bg-gray-500 min-w-1.5 my-4" style="touch-action: none; user-select: none; flex: 0 0 auto; cursor: col-resize; min-height: 0px;"></button><div data-scope="splitter" data-part="panel" data-orientation="horizontal" dir="ltr" data-id="b" data-index="1" id="splitter:«r0»:panel:b" data-ownedby="splitter:«r0»" class="border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-lg text-gray-600 dark:text-gray-400 flex items-center justify-center" style="flex: 60 1 0px; overflow: hidden;">Main Content</div><button data-scope="splitter" data-part="resize-trigger" dir="ltr" id="splitter:«r0»:splitter:b:c" role="separator" data-id="b:c" data-ownedby="splitter:«r0»" tabindex="0" aria-valuenow="60" aria-valuemin="40" aria-valuemax="60" data-orientation="horizontal" aria-orientation="horizontal" aria-controls="splitter:«r0»:panel:b splitter:«r0»:panel:c" aria-label="Resize" class="rounded-full transition-colors duration-200 outline-none bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 active:bg-gray-400 dark:active:bg-gray-500 min-w-1.5 my-4" style="touch-action: none; user-select: none; flex: 0 0 auto; cursor: col-resize; min-height: 0px;"></button><div data-scope="splitter" data-part="panel" data-orientation="horizontal" dir="ltr" data-id="c" data-index="2" id="splitter:«r0»:panel:c" data-ownedby="splitter:«r0»" class="border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-lg text-gray-600 dark:text-gray-400 flex items-center justify-center text-sm" style="flex: 20 1 0px; overflow: hidden;">Details</div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.