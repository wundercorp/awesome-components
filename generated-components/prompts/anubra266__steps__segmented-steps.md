# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/steps/segmented-steps
- Registry URL: https://21st.dev/r/anubra266/steps
- Author: anubra266
- Component slug: steps
- Demo slug: segmented-steps
- Title: steps
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/steps with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__steps__segmented-steps.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__steps__segmented-steps.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"><div data-scope="steps" data-part="root" id="steps:«r0»" dir="ltr" data-orientation="horizontal" class="w-full max-w-2xl flex items-center gap-4" style="--percent: 25%;"><button dir="ltr" data-scope="steps" data-part="prev-trigger" type="button" class="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent dark:disabled:hover:bg-transparent dark:text-gray-300 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left w-4 h-4" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></button><div data-scope="steps" data-part="list" dir="ltr" id="steps:«r0»:list" role="tablist" aria-owns="steps:«r0»:trigger:0 steps:«r0»:trigger:1 steps:«r0»:trigger:2 steps:«r0»:trigger:3" aria-orientation="horizontal" data-orientation="horizontal" class="flex-1 flex justify-between items-start gap-1"><div data-scope="steps" data-part="item" dir="ltr" data-orientation="horizontal" class="relative flex flex-col items-center flex-1"><button data-scope="steps" data-part="trigger" id="steps:«r0»:trigger:0" role="tab" dir="ltr" tabindex="0" aria-selected="false" aria-controls="steps:«r0»:content:0" data-state="closed" data-orientation="horizontal" data-complete="" class="w-full flex flex-col items-start gap-2 text-left rounded-md group cursor-default" disabled=""><div data-scope="steps" data-part="indicator" dir="ltr" aria-hidden="true" data-complete="" class="w-full shrink-0 h-1 rounded-full data-complete:bg-blue-600 data-current:bg-blue-600 data-incomplete:bg-gray-300 dark:data-incomplete:bg-gray-600"></div></button></div><div data-scope="steps" data-part="item" dir="ltr" aria-current="step" data-orientation="horizontal" class="relative flex flex-col items-center flex-1"><button data-scope="steps" data-part="trigger" id="steps:«r0»:trigger:1" role="tab" dir="ltr" tabindex="0" aria-selected="true" aria-controls="steps:«r0»:content:1" data-state="open" data-orientation="horizontal" data-current="" class="w-full flex flex-col items-start gap-2 text-left rounded-md group cursor-default" disabled=""><div data-scope="steps" data-part="indicator" dir="ltr" aria-hidden="true" data-current="" class="w-full shrink-0 h-1 rounded-full data-complete:bg-blue-600 data-current:bg-blue-600 data-incomplete:bg-gray-300 dark:data-incomplete:bg-gray-600"></div></button></div><div data-scope="steps" data-part="item" dir="ltr" data-orientation="horizontal" class="relative flex flex-col items-center flex-1"><button data-scope="steps" data-part="trigger" id="steps:«r0»:trigger:2" role="tab" dir="ltr" tabindex="0" aria-selected="false" aria-controls="steps:«r0»:content:2" data-state="closed" data-orientation="horizontal" data-incomplete="" class="w-full flex flex-col items-start gap-2 text-left rounded-md group cursor-default" disabled=""><div data-scope="steps" data-part="indicator" dir="ltr" aria-hidden="true" data-incomplete="" class="w-full shrink-0 h-1 rounded-full data-complete:bg-blue-600 data-current:bg-blue-600 data-incomplete:bg-gray-300 dark:data-incomplete:bg-gray-600"></div></button></div><div data-scope="steps" data-part="item" dir="ltr" data-orientation="horizontal" class="relative flex flex-col items-center flex-1"><button data-scope="steps" data-part="trigger" id="steps:«r0»:trigger:3" role="tab" dir="ltr" tabindex="0" aria-selected="false" aria-controls="steps:«r0»:content:3" data-state="closed" data-orientation="horizontal" data-incomplete="" class="w-full flex flex-col items-start gap-2 text-left rounded-md group cursor-default" disabled=""><div data-scope="steps" data-part="indicator" dir="ltr" aria-hidden="true" data-incomplete="" class="w-full shrink-0 h-1 rounded-full data-complete:bg-blue-600 data-current:bg-blue-600 data-incomplete:bg-gray-300 dark:data-incomplete:bg-gray-600"></div></button></div></div><button data-scope="steps" data-part="next-trigger" dir="ltr" type="button" class="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent dark:disabled:hover:bg-transparent dark:text-gray-300 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right w-4 h-4" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.