# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/steps/default
- Registry URL: https://21st.dev/r/anubra266/steps
- Author: anubra266
- Component slug: steps
- Demo slug: default
- Title: steps
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/steps with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__steps__default.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__steps__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"><div data-scope="steps" data-part="root" id="steps:«r0»" dir="ltr" data-orientation="horizontal" class="w-full max-w-2xl" style="--percent: 25%;"><div data-scope="steps" data-part="list" dir="ltr" id="steps:«r0»:list" role="tablist" aria-owns="steps:«r0»:trigger:0 steps:«r0»:trigger:1 steps:«r0»:trigger:2 steps:«r0»:trigger:3" aria-orientation="horizontal" data-orientation="horizontal" class="flex justify-between items-center"><div data-scope="steps" data-part="item" dir="ltr" data-orientation="horizontal" class="relative flex not-last:flex-1 items-center"><button data-scope="steps" data-part="trigger" id="steps:«r0»:trigger:0" role="tab" dir="ltr" tabindex="0" aria-selected="false" aria-controls="steps:«r0»:content:0" data-state="closed" data-orientation="horizontal" data-complete="" class="flex items-center gap-3 text-left rounded-md"><div data-scope="steps" data-part="indicator" dir="ltr" aria-hidden="true" data-complete="" class="flex justify-center items-center shrink-0 rounded-full font-semibold w-8 h-8 text-sm border-2 data-complete:bg-blue-600 data-complete:text-white data-complete:border-blue-600 data-current:bg-blue-600 data-current:text-white data-current:border-blue-600 data-incomplete:bg-gray-100 data-incomplete:text-gray-500 data-incomplete:border-gray-200 dark:data-incomplete:bg-gray-700 dark:data-incomplete:text-gray-300 dark:data-incomplete:border-gray-600">1</div></button><div data-scope="steps" data-part="separator" dir="ltr" data-orientation="horizontal" data-complete="" class="flex-1 bg-gray-200 dark:bg-gray-700 h-0.5 mx-3 data-complete:bg-blue-600"></div></div><div data-scope="steps" data-part="item" dir="ltr" aria-current="step" data-orientation="horizontal" class="relative flex not-last:flex-1 items-center"><button data-scope="steps" data-part="trigger" id="steps:«r0»:trigger:1" role="tab" dir="ltr" tabindex="0" aria-selected="true" aria-controls="steps:«r0»:content:1" data-state="open" data-orientation="horizontal" data-current="" class="flex items-center gap-3 text-left rounded-md"><div data-scope="steps" data-part="indicator" dir="ltr" aria-hidden="true" data-current="" class="flex justify-center items-center shrink-0 rounded-full font-semibold w-8 h-8 text-sm border-2 data-complete:bg-blue-600 data-complete:text-white data-complete:border-blue-600 data-current:bg-blue-600 data-current:text-white data-current:border-blue-600 data-incomplete:bg-gray-100 data-incomplete:text-gray-500 data-incomplete:border-gray-200 dark:data-incomplete:bg-gray-700 dark:data-incomplete:text-gray-300 dark:data-incomplete:border-gray-600">2</div></button><div data-scope="steps" data-part="separator" dir="ltr" data-orientation="horizontal" data-current="" class="flex-1 bg-gray-200 dark:bg-gray-700 h-0.5 mx-3 data-complete:bg-blue-600"></div></div><div data-scope="steps" data-part="item" dir="ltr" data-orientation="horizontal" class="relative flex not-last:flex-1 items-center"><button data-scope="steps" data-part="trigger" id="steps:«r0»:trigger:2" role="tab" dir="ltr" tabindex="0" aria-selected="false" aria-controls="steps:«r0»:content:2" data-state="closed" data-orientation="horizontal" data-incomplete="" class="flex items-center gap-3 text-left rounded-md"><div data-scope="steps" data-part="indicator" dir="ltr" aria-hidden="true" data-incomplete="" class="flex justify-center items-center shrink-0 rounded-full font-semibold w-8 h-8 text-sm border-2 data-complete:bg-blue-600 data-complete:text-white data-complete:border-blue-600 data-current:bg-blue-600 data-current:text-white data-current:border-blue-600 data-incomplete:bg-gray-100 data-incomplete:text-gray-500 data-incomplete:border-gray-200 dark:data-incomplete:bg-gray-700 dark:data-incomplete:text-gray-300 dark:data-incomplete:border-gray-600">3</div></button><div data-scope="steps" data-part="separator" dir="ltr" data-orientation="horizontal" data-incomplete="" class="flex-1 bg-gray-200 dark:bg-gray-700 h-0.5 mx-3 data-complete:bg-blue-600"></div></div><div data-scope="steps" data-part="item" dir="ltr" data-orientation="horizontal" class="relative flex not-last:flex-1 items-center"><button data-scope="steps" data-part="trigger" id="steps:«r0»:trigger:3" role="tab" dir="ltr" tabindex="0" aria-selected="false" aria-controls="steps:«r0»:content:3" data-state="closed" data-orientation="horizontal" data-incomplete="" class="flex items-center gap-3 text-left rounded-md"><div data-scope="steps" data-part="indicator" dir="ltr" aria-hidden="true" data-incomplete="" class="flex justify-center items-center shrink-0 rounded-full font-semibold w-8 h-8 text-sm border-2 data-complete:bg-blue-600 data-complete:text-white data-complete:border-blue-600 data-current:bg-blue-600 data-current:text-white data-current:border-blue-600 data-incomplete:bg-gray-100 data-incomplete:text-gray-500 data-incomplete:border-gray-200 dark:data-incomplete:bg-gray-700 dark:data-incomplete:text-gray-300 dark:data-incomplete:border-gray-600">4</div></button><div data-scope="steps" data-part="separator" dir="ltr" data-orientation="horizontal" data-incomplete="" hidden="" class="flex-1 bg-gray-200 dark:bg-gray-700 h-0.5 mx-3 data-complete:bg-blue-600"></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.