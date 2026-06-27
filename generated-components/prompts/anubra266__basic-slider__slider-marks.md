# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/basic-slider/slider-marks
- Registry URL: https://21st.dev/r/anubra266/basic-slider
- Author: anubra266
- Component slug: basic-slider
- Demo slug: slider-marks
- Title: basic-slider
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/basic-slider with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__basic-slider__slider-marks.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__basic-slider__slider-marks.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"><div class="max-w-md w-full"><div data-scope="slider" data-part="root" data-orientation="horizontal" id="slider:«r0»" dir="ltr" style="--slider-thumb-offset-0: calc(50% - 0px); --slider-thumb-transform: translateX(-50%); --slider-range-start: 0%; --slider-range-end: 50%; --slider-thumb-width: 20px; --slider-thumb-height: 20px;"><span data-scope="slider" data-part="value-text" dir="ltr" data-orientation="horizontal" id="slider:«r0»:value-text" class="text-sm text-gray-600 dark:text-gray-400 mb-4">50</span><div data-scope="slider" data-part="control" dir="ltr" id="slider:«r0»:control" data-orientation="horizontal" class="relative flex items-center h-5" style="touch-action: none; user-select: none; position: relative;"><div data-scope="slider" data-part="track" dir="ltr" id="slider:«r0»:track" data-orientation="horizontal" class="relative flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden" style="position: relative;"><div id="slider:«r0»:range" data-scope="slider" data-part="range" dir="ltr" data-orientation="horizontal" class="absolute h-full bg-blue-600 dark:bg-blue-500 rounded-full" style="position: absolute; left: var(--slider-range-start); right: var(--slider-range-end);"></div></div><div data-scope="slider" data-part="thumb" dir="ltr" data-index="0" id="slider:«r0»:thumb:0" data-orientation="horizontal" draggable="false" aria-labelledby="slider:«r0»:label" aria-orientation="horizontal" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" role="slider" tabindex="0" class="relative w-5 h-5 bg-white dark:bg-gray-800 border-2 border-blue-600 dark:border-blue-500 rounded-full shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 z-10" style="visibility: visible; position: absolute; transform: var(--slider-thumb-transform); inset-inline-start: var(--slider-thumb-offset-0);"><input hidden="" id="slider:«r0»:input:0" type="text" value="50"></div></div><div data-scope="slider" data-part="marker-group" role="presentation" dir="ltr" aria-hidden="true" data-orientation="horizontal" class="mt-[-4px] flex justify-between text-xs text-gray-500 dark:text-gray-400" style="user-select: none; pointer-events: none; position: relative;"><span data-scope="slider" data-part="marker" id="slider:«r0»:marker:0" role="presentation" dir="ltr" data-orientation="horizontal" data-value="0" data-state="under-value" class="relative before:absolute before:-top-2 before:left-1/2 before:transform before:-translate-x-1/2 before:w-1 before:h-1 before:bg-gray-400 dark:before:bg-gray-500 before:rounded-full data-[state=under-value]:before:bg-white dark:data-[state=under-value]:before:bg-gray-300 pt-3" style="visibility: visible; position: absolute; pointer-events: none; inset-inline-start: calc(0% + 10px); translate: var(--translate-x) var(--translate-y); --translate-x: -50%; --translate-y: 0%;">0</span><span data-scope="slider" data-part="marker" id="slider:«r0»:marker:25" role="presentation" dir="ltr" data-orientation="horizontal" data-value="25" data-state="under-value" class="relative before:absolute before:-top-2 before:left-1/2 before:transform before:-translate-x-1/2 before:w-1 before:h-1 before:bg-gray-400 dark:before:bg-gray-500 before:rounded-full data-[state=under-value]:before:bg-white dark:data-[state=under-value]:before:bg-gray-300 pt-3" style="visibility: visible; position: absolute; pointer-events: none; inset-inline-start: calc(25% + 5px); translate: var(--translate-x) var(--translate-y); --translate-x: -50%; --translate-y: 0%;">25</span><span data-scope="slider" data-part="marker" id="slider:«r0»:marker:50" role="presentation" dir="ltr" data-orientation="horizontal" data-value="50" data-state="at-value" class="relative before:absolute before:-top-2 before:left-1/2 before:transform before:-translate-x-1/2 before:w-1 before:h-1 before:bg-gray-400 dark:before:bg-gray-500 before:rounded-full data-[state=under-value]:before:bg-white dark:data-[state=under-value]:before:bg-gray-300 pt-3" style="visibility: visible; position: absolute; pointer-events: none; inset-inline-start: calc(50% + 0px); translate: var(--translate-x) var(--translate-y); --translate-x: -50%; --translate-y: 0%;">50</span><span data-scope="slider" data-part="marker" id="slider:«r0»:marker:75" role="presentation" dir="ltr" data-orientation="horizontal" data-value="75" data-state="over-value" class="relative before:absolute before:-top-2 before:left-1/2 before:transform before:-translate-x-1/2 before:w-1 before:h-1 before:bg-gray-400 dark:before:bg-gray-500 before:rounded-full data-[state=under-value]:before:bg-white dark:data-[state=under-value]:before:bg-gray-300 pt-3" style="visibility: visible; position: absolute; pointer-events: none; inset-inline-start: calc(75% - 5px); translate: var(--translate-x) var(--translate-y); --translate-x: -50%; --translate-y: 0%;">75</span><span data-scope="slider" data-part="marker" id="slider:«r0»:marker:100" role="presentation" dir="ltr" data-orientation="horizontal" data-value="100" data-state="over-value" class="relative before:absolute before:-top-2 before:left-1/2 before:transform before:-translate-x-1/2 before:w-1 before:h-1 before:bg-gray-400 dark:before:bg-gray-500 before:rounded-full data-[state=under-value]:before:bg-white dark:data-[state=under-value]:before:bg-gray-300 pt-3" style="visibility: visible; position: absolute; pointer-events: none; inset-inline-start: calc(100% - 10px); translate: var(--translate-x) var(--translate-y); --translate-x: -50%; --translate-y: 0%;">100</span></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.