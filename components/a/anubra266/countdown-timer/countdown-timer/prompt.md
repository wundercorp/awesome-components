# Build Countdown Timer in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Countdown Timer screenshot](screenshot.png)

## Component

- Author group: `anubra266`
- Component: `countdown-timer`
- Variant: `countdown-timer`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: anubra266
- Component slug: countdown-timer
- Demo slug: countdown-timer
- Title: countdown-timer
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center"><div class="text-center"><h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Flash Sale Ends In</h3><div id="timer:«r0»:root" data-scope="timer" data-part="root" class="flex flex-col items-center"><div role="timer" id="timer:«r0»:area" aria-label="0 days 23:59:57" aria-atomic="true" data-scope="timer" data-part="area" class="flex items-center gap-2 text-3xl font-bold text-red-600 dark:text-red-400"><div class="flex flex-col items-center"><div data-scope="timer" data-part="item" data-type="days" class="min-w-[2ch] text-center" style="--value: 0;">00</div><span class="text-xs font-normal text-gray-500 dark:text-gray-400">days</span></div><div aria-hidden="true" data-scope="timer" data-part="separator" class="text-gray-400">:</div><div class="flex flex-col items-center"><div data-scope="timer" data-part="item" data-type="hours" class="min-w-[2ch] text-center" style="--value: 23;">23</div><span class="text-xs font-normal text-gray-500 dark:text-gray-400">hrs</span></div><div aria-hidden="true" data-scope="timer" data-part="separator" class="text-gray-400">:</div><div class="flex flex-col items-center"><div data-scope="timer" data-part="item" data-type="minutes" class="min-w-[2ch] text-center" style="--value: 59;">59</div><span class="text-xs font-normal text-gray-500 dark:text-gray-400">min</span></div><div aria-hidden="true" data-scope="timer" data-part="separator" class="text-gray-400">:</div><div class="flex flex-col items-center"><div data-scope="timer" data-part="item" data-type="seconds" class="min-w-[2ch] text-center" style="--value: 57;">57</div><span class="text-xs font-normal text-gray-500 dark:text-gray-400">sec</span></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
