# Build Steps in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Steps screenshot](screenshot.png)

## Component

- Author group: `anubra266`
- Component: `steps`
- Variant: `spinner-steps`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: anubra266
- Component slug: steps
- Demo slug: spinner-steps
- Title: steps
- Description: 

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

No reference metadata available.

## Rendered DOM snapshot

This is the rendered demo HTML extracted from the live preview. Use it to verify structure, class names, visible content, and layout.

```html
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"><div data-scope="steps" data-part="root" id="steps:«r0»" dir="ltr" data-orientation="horizontal" class="w-full max-w-2xl space-y-6" style="--percent: 0%;"><div data-scope="steps" data-part="list" dir="ltr" id="steps:«r0»:list" role="tablist" aria-owns="steps:«r0»:trigger:0 steps:«r0»:trigger:1 steps:«r0»:trigger:2 steps:«r0»:trigger:3" aria-orientation="horizontal" data-orientation="horizontal" class="flex justify-between items-center"><div data-scope="steps" data-part="item" dir="ltr" aria-current="step" data-orientation="horizontal" class="relative flex not-last:flex-1 items-center"><button data-scope="steps" data-part="trigger" id="steps:«r0»:trigger:0" role="tab" dir="ltr" tabindex="0" aria-selected="true" aria-controls="steps:«r0»:content:0" data-state="open" data-orientation="horizontal" data-current="" class="flex items-center gap-3 text-left rounded-md group cursor-default" disabled=""><div data-scope="steps" data-part="indicator" dir="ltr" aria-hidden="true" data-current="" class="flex justify-center items-center shrink-0 rounded-full font-semibold w-8 h-8 text-sm border-2 data-complete:bg-blue-600 data-complete:text-white data-complete:border-blue-600 data-current:bg-blue-600 data-current:text-white data-current:border-blue-600 data-incomplete:bg-gray-100 data-incomplete:text-gray-500 data-incomplete:border-gray-200 dark:data-incomplete:bg-gray-700 dark:data-incomplete:text-gray-300 dark:data-incomplete:border-gray-600 relative"><span class="group-data-complete:hidden data-loading:hidden">1</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check w-4 h-4 group-data-complete:block hidden" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></button><div data-scope="steps" data-part="separator" dir="ltr" data-orientation="horizontal" data-current="" class="flex-1 bg-gray-200 dark:bg-gray-700 h-0.5 mx-3 data-complete:bg-blue-600"></div></div><div data-scope="steps" data-part="item" dir="ltr" data-orientation="horizontal" class="relative flex not-last:flex-1 items-center"><button data-scope="steps" data-part="trigger" id="steps:«r0»:trigger:1" role="tab" dir="ltr" tabindex="0" aria-selected="false" aria-controls="steps:«r0»:content:1" data-state="closed" data-orientation="horizontal" data-incomplete="" class="flex items-center gap-3 text-left rounded-md group cursor-default" disabled=""><div data-scope="steps" data-part="indicator" dir="ltr" aria-hidden="true" data-incomplete="" class="flex justify-center items-center shrink-0 rounded-full font-semibold w-8 h-8 text-sm border-2 data-complete:bg-blue-600 data-complete:text-white data-complete:border-blue-600 data-current:bg-blue-600 data-current:text-white data-current:border-blue-600 data-incomplete:bg-gray-100 data-incomplete:text-gray-500 data-incomplete:border-gray-200 dark:data-incomplete:bg-gray-700 dark:data-incomplete:text-gray-300 dark:data-incomplete:border-gray-600 relative"><span class="group-data-complete:hidden data-loading:hidden">2</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check w-4 h-4 group-data-complete:block hidden" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></button><div data-scope="steps" data-part="separator" dir="ltr" data-orientation="horizontal" data-incomplete="" class="flex-1 bg-gray-200 dark:bg-gray-700 h-0.5 mx-3 data-complete:bg-blue-600"></div></div><div data-scope="steps" data-part="item" dir="ltr" data-orientation="horizontal" class="relative flex not-last:flex-1 items-center"><button data-scope="steps" data-part="trigger" id="steps:«r0»:trigger:2" role="tab" dir="ltr" tabindex="0" aria-selected="false" aria-controls="steps:«r0»:content:2" data-state="closed" data-orientation="horizontal" data-incomplete="" class="flex items-center gap-3 text-left rounded-md group cursor-default" disabled=""><div data-scope="steps" data-part="indicator" dir="ltr" aria-hidden="true" data-incomplete="" class="flex justify-center items-center shrink-0 rounded-full font-semibold w-8 h-8 text-sm border-2 data-complete:bg-blue-600 data-complete:text-white data-complete:border-blue-600 data-current:bg-blue-600 data-current:text-white data-current:border-blue-600 data-incomplete:bg-gray-100 data-incomplete:text-gray-500 data-incomplete:border-gray-200 dark:data-incomplete:bg-gray-700 dark:data-incomplete:text-gray-300 dark:data-incomplete:border-gray-600 relative"><span class="group-data-complete:hidden data-loading:hidden">3</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check w-4 h-4 group-data-complete:block hidden" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></button><div data-scope="steps" data-part="separator" dir="ltr" data-orientation="horizontal" data-incomplete="" class="flex-1 bg-gray-200 dark:bg-gray-700 h-0.5 mx-3 data-complete:bg-blue-600"></div></div><div data-scope="steps" data-part="item" dir="ltr" data-orientation="horizontal" class="relative flex not-last:flex-1 items-center"><button data-scope="steps" data-part="trigger" id="steps:«r0»:trigger:3" role="tab" dir="ltr" tabindex="0" aria-selected="false" aria-controls="steps:«r0»:content:3" data-state="closed" data-orientation="horizontal" data-incomplete="" class="flex items-center gap-3 text-left rounded-md group cursor-default" disabled=""><div data-scope="steps" data-part="indicator" dir="ltr" aria-hidden="true" data-incomplete="" class="flex justify-center items-center shrink-0 rounded-full font-semibold w-8 h-8 text-sm border-2 data-complete:bg-blue-600 data-complete:text-white data-complete:border-blue-600 data-current:bg-blue-600 data-current:text-white data-current:border-blue-600 data-incomplete:bg-gray-100 data-incomplete:text-gray-500 data-incomplete:border-gray-200 dark:data-incomplete:bg-gray-700 dark:data-incomplete:text-gray-300 dark:data-incomplete:border-gray-600 relative"><span class="group-data-complete:hidden data-loading:hidden">4</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check w-4 h-4 group-data-complete:block hidden" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></button><div data-scope="steps" data-part="separator" dir="ltr" data-orientation="horizontal" data-incomplete="" hidden="" class="flex-1 bg-gray-200 dark:bg-gray-700 h-0.5 mx-3 data-complete:bg-blue-600"></div></div></div><div class="flex justify-center gap-3 mt-8"><button disabled="" class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700">Prev step</button><button class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700">Next step</button></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
