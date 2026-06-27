# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/angle-slider/default
- Registry URL: https://21st.dev/r/anubra266/angle-slider
- Author: anubra266
- Component slug: angle-slider
- Demo slug: default
- Title: angle-slider
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/angle-slider with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__angle-slider__default.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__angle-slider__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div data-scope="angle-slider" data-part="root" id="angle-slider:«r0»" class="relative w-[200px] h-[200px] flex items-center justify-center" style="--value: 45; --angle: 45deg;"><div data-scope="angle-slider" data-part="control" role="presentation" id="angle-slider:«r0»:control" class="absolute inset-0" style="touch-action: none; user-select: none;"><svg width="200" height="200" viewBox="0 0 200 200" class="[--gradient-start:#3b82f6] [--gradient-end:#9333ea] dark:[--gradient-start:#60a5fa] dark:[--gradient-end:#a855f7]" style="--size: 200px; --thickness: 20px; --percent: calc((var(--value) / 360) * 100);"><title>Slider Ring</title><circle class="stroke-gray-300 dark:stroke-gray-600 fill-transparent" style="--radius: calc(var(--size) / 2 - var(--thickness) / 2); cx: calc(var(--size) / 2); cy: calc(var(--size) / 2); r: var(--radius); stroke-width: var(--thickness);"></circle><circle class="fill-transparent" style="--radius: calc(var(--size) / 2 - var(--thickness) / 2); cx: calc(var(--size) / 2); cy: calc(var(--size) / 2); r: var(--radius); stroke-width: var(--thickness); --circumference: calc(2 * 3.14159 * var(--radius)); --offset: calc(var(--circumference) * (100 - var(--percent)) / 100); stroke-dashoffset: calc(var(--circumference) * ((100 - var(--percent)) / 100)); stroke-dasharray: var(--circumference); stroke-linecap: round; transform-origin: center center; transform: rotate(-90deg); stroke: url(&quot;#progressGradient&quot;);"></circle><defs><linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="var(--gradient-start)"></stop><stop offset="100%" stop-color="var(--gradient-end)"></stop></linearGradient></defs></svg><div data-scope="angle-slider" data-part="thumb" id="angle-slider:«r0»:thumb" role="slider" aria-valuemax="360" aria-valuemin="0" aria-valuenow="45" tabindex="0" class="absolute top-0 right-0 bottom-0 left-[calc(50%-1.5px)] pointer-events-none h-full w-[3px] flex items-start outline-hidden" style="rotate: var(--angle);"><span class="bg-linear-to-br from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 w-5 h-5 rounded-full shrink-0 scale-125 shadow-lg shadow-blue-500/25 dark:shadow-blue-400/25 border-2 border-white dark:border-gray-800"></span></div></div><div class="flex items-center flex-col gap-0"><div class="text-4xl text-gray-900 dark:text-gray-100 font-semibold">45°</div><label data-scope="angle-slider" data-part="label" for="angle-slider:«r0»:input" class="text-sm text-gray-600 dark:text-gray-400">degrees</label></div><input id="angle-slider:«r0»:input" type="hidden" value="45"></div></div></div></div>
```

## Public registry source files

No public registry source files were available.