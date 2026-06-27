# Build Steps in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Steps screenshot](screenshot.png)

## Component

- Author group: `anubra266`
- Component: `steps`
- Variant: `steps-lines`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: anubra266
- Component slug: steps
- Demo slug: steps-lines
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"><div data-scope="steps" data-part="root" id="steps:«r0»" dir="ltr" data-orientation="horizontal" class="w-full max-w-2xl" style="--percent: 25%;"><div data-scope="steps" data-part="list" dir="ltr" id="steps:«r0»:list" role="tablist" aria-owns="steps:«r0»:trigger:0 steps:«r0»:trigger:1 steps:«r0»:trigger:2 steps:«r0»:trigger:3" aria-orientation="horizontal" data-orientation="horizontal" class="flex justify-between items-start gap-4"><div data-scope="steps" data-part="item" dir="ltr" data-orientation="horizontal" class="relative flex flex-col items-center flex-1"><button data-scope="steps" data-part="trigger" id="steps:«r0»:trigger:0" role="tab" dir="ltr" tabindex="0" aria-selected="false" aria-controls="steps:«r0»:content:0" data-state="closed" data-orientation="horizontal" data-complete="" class="w-full flex flex-col items-start gap-2 text-left rounded-md group"><div data-scope="steps" data-part="indicator" dir="ltr" aria-hidden="true" data-complete="" class="w-full shrink-0 h-1 rounded-full data-complete:bg-blue-600 data-current:bg-blue-600 data-incomplete:bg-gray-300 dark:data-incomplete:bg-gray-600"></div><span class="text-sm font-medium text-gray-700 dark:text-gray-300 group-data-complete:text-blue-600 group-data-current:text-blue-600 text-left">Step One</span></button></div><div data-scope="steps" data-part="item" dir="ltr" aria-current="step" data-orientation="horizontal" class="relative flex flex-col items-center flex-1"><button data-scope="steps" data-part="trigger" id="steps:«r0»:trigger:1" role="tab" dir="ltr" tabindex="0" aria-selected="true" aria-controls="steps:«r0»:content:1" data-state="open" data-orientation="horizontal" data-current="" class="w-full flex flex-col items-start gap-2 text-left rounded-md group"><div data-scope="steps" data-part="indicator" dir="ltr" aria-hidden="true" data-current="" class="w-full shrink-0 h-1 rounded-full data-complete:bg-blue-600 data-current:bg-blue-600 data-incomplete:bg-gray-300 dark:data-incomplete:bg-gray-600"></div><span class="text-sm font-medium text-gray-700 dark:text-gray-300 group-data-complete:text-blue-600 group-data-current:text-blue-600 text-left">Step Two</span></button></div><div data-scope="steps" data-part="item" dir="ltr" data-orientation="horizontal" class="relative flex flex-col items-center flex-1"><button data-scope="steps" data-part="trigger" id="steps:«r0»:trigger:2" role="tab" dir="ltr" tabindex="0" aria-selected="false" aria-controls="steps:«r0»:content:2" data-state="closed" data-orientation="horizontal" data-incomplete="" class="w-full flex flex-col items-start gap-2 text-left rounded-md group"><div data-scope="steps" data-part="indicator" dir="ltr" aria-hidden="true" data-incomplete="" class="w-full shrink-0 h-1 rounded-full data-complete:bg-blue-600 data-current:bg-blue-600 data-incomplete:bg-gray-300 dark:data-incomplete:bg-gray-600"></div><span class="text-sm font-medium text-gray-700 dark:text-gray-300 group-data-complete:text-blue-600 group-data-current:text-blue-600 text-left">Step Three</span></button></div><div data-scope="steps" data-part="item" dir="ltr" data-orientation="horizontal" class="relative flex flex-col items-center flex-1"><button data-scope="steps" data-part="trigger" id="steps:«r0»:trigger:3" role="tab" dir="ltr" tabindex="0" aria-selected="false" aria-controls="steps:«r0»:content:3" data-state="closed" data-orientation="horizontal" data-incomplete="" class="w-full flex flex-col items-start gap-2 text-left rounded-md group"><div data-scope="steps" data-part="indicator" dir="ltr" aria-hidden="true" data-incomplete="" class="w-full shrink-0 h-1 rounded-full data-complete:bg-blue-600 data-current:bg-blue-600 data-incomplete:bg-gray-300 dark:data-incomplete:bg-gray-600"></div><span class="text-sm font-medium text-gray-700 dark:text-gray-300 group-data-complete:text-blue-600 group-data-current:text-blue-600 text-left">Step Four</span></button></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
