# Build Steps in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Steps screenshot](screenshot.png)

## Component

- Author group: `anubra266`
- Component: `steps`
- Variant: `steps-progress`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: anubra266
- Component slug: steps
- Demo slug: steps-progress
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"><div data-scope="steps" data-part="root" id="steps:«r0»" dir="ltr" data-orientation="horizontal" class="w-full max-w-2xl space-y-6" style="--percent: 0%;"><div data-scope="steps" data-part="list" dir="ltr" id="steps:«r0»:list" role="tablist" aria-owns="steps:«r0»:trigger:0 steps:«r0»:trigger:1 steps:«r0»:trigger:2 steps:«r0»:trigger:3" aria-orientation="horizontal" data-orientation="horizontal" class="flex justify-between items-start"><div data-scope="steps" data-part="item" dir="ltr" aria-current="step" data-orientation="horizontal" class="relative flex flex-col items-center flex-1"><button data-scope="steps" data-part="trigger" id="steps:«r0»:trigger:0" role="tab" dir="ltr" tabindex="0" aria-selected="true" aria-controls="steps:«r0»:content:0" data-state="open" data-orientation="horizontal" data-current="" class="w-full flex flex-col items-start gap-2 text-left group cursor-default" disabled=""><div data-scope="steps" data-part="indicator" dir="ltr" aria-hidden="true" data-current="" class="w-full shrink-0 h-1 data-complete:bg-blue-600 data-current:bg-blue-600 data-incomplete:bg-gray-300 dark:data-incomplete:bg-gray-600"></div></button></div><div data-scope="steps" data-part="item" dir="ltr" data-orientation="horizontal" class="relative flex flex-col items-center flex-1"><button data-scope="steps" data-part="trigger" id="steps:«r0»:trigger:1" role="tab" dir="ltr" tabindex="0" aria-selected="false" aria-controls="steps:«r0»:content:1" data-state="closed" data-orientation="horizontal" data-incomplete="" class="w-full flex flex-col items-start gap-2 text-left group cursor-default" disabled=""><div data-scope="steps" data-part="indicator" dir="ltr" aria-hidden="true" data-incomplete="" class="w-full shrink-0 h-1 data-complete:bg-blue-600 data-current:bg-blue-600 data-incomplete:bg-gray-300 dark:data-incomplete:bg-gray-600"></div></button></div><div data-scope="steps" data-part="item" dir="ltr" data-orientation="horizontal" class="relative flex flex-col items-center flex-1"><button data-scope="steps" data-part="trigger" id="steps:«r0»:trigger:2" role="tab" dir="ltr" tabindex="0" aria-selected="false" aria-controls="steps:«r0»:content:2" data-state="closed" data-orientation="horizontal" data-incomplete="" class="w-full flex flex-col items-start gap-2 text-left group cursor-default" disabled=""><div data-scope="steps" data-part="indicator" dir="ltr" aria-hidden="true" data-incomplete="" class="w-full shrink-0 h-1 data-complete:bg-blue-600 data-current:bg-blue-600 data-incomplete:bg-gray-300 dark:data-incomplete:bg-gray-600"></div></button></div><div data-scope="steps" data-part="item" dir="ltr" data-orientation="horizontal" class="relative flex flex-col items-center flex-1"><button data-scope="steps" data-part="trigger" id="steps:«r0»:trigger:3" role="tab" dir="ltr" tabindex="0" aria-selected="false" aria-controls="steps:«r0»:content:3" data-state="closed" data-orientation="horizontal" data-incomplete="" class="w-full flex flex-col items-start gap-2 text-left group cursor-default" disabled=""><div data-scope="steps" data-part="indicator" dir="ltr" aria-hidden="true" data-incomplete="" class="w-full shrink-0 h-1 data-complete:bg-blue-600 data-current:bg-blue-600 data-incomplete:bg-gray-300 dark:data-incomplete:bg-gray-600"></div></button></div></div><div class="text-center text-gray-600 dark:text-gray-400 text-sm">Step 1 of 4</div><div class="flex justify-center gap-3"><button dir="ltr" data-scope="steps" data-part="prev-trigger" type="button" disabled="" class="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700">Prev step</button><button data-scope="steps" data-part="next-trigger" dir="ltr" type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700">Next step</button></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
