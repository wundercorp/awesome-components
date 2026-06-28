# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/reui/slider/tooltip
- Registry URL: https://21st.dev/r/reui/slider
- Author: reui
- Component slug: slider
- Demo slug: tooltip
- Title: slider
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/reui/slider with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/reui__slider__tooltip.html
- Local screenshot file: generated-21st-prompts/screenshots/reui__slider__tooltip.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full md:w-[400px]"><span dir="ltr" data-orientation="horizontal" aria-disabled="false" data-slot="slider" class="relative flex h-4 w-full touch-none select-none items-center" style="--radix-slider-thumb-transform: translateX(-50%);"><span data-orientation="horizontal" class="relative h-1.5 w-full overflow-hidden rounded-full bg-accent"><span data-orientation="horizontal" class="absolute h-full bg-primary" style="left: 16.6667%; right: 25%;"></span></span><span style="transform: var(--radix-slider-thumb-transform); position: absolute; left: calc(16.6667% + 6.66667px);"><span role="slider" aria-valuemin="0" aria-valuemax="600" aria-orientation="horizontal" data-orientation="horizontal" tabindex="0" data-slot="tooltip-trigger" class="box-content block size-4 shrink-0 cursor-pointer rounded-full border-[2px] border-primary bg-primary-foreground shadow-xs shadow-black/5 outline-hidden focus:outline-hidden" data-state="instant-open" data-radix-collection-item="" aria-label="Minimum" aria-valuenow="100" aria-describedby="radix-«r0»" style=""></span></span><div data-radix-popper-content-wrapper="" style="position: fixed; left: 0px; top: 0px; transform: translate(346px, 430px); min-width: max-content; --radix-popper-transform-origin: 50% 28px; z-index: 50; --radix-popper-available-width: 992px; --radix-popper-available-height: 458px; --radix-popper-anchor-width: 20px; --radix-popper-anchor-height: 20px;"><div data-side="top" data-align="center" data-state="instant-open" data-slot="tooltip-content" class="z-50 overflow-hidden rounded-md px-3 py-1.5 text-xs animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border dark:border-border bg-zinc-950 text-white dark:bg-zinc-300 dark:text-black shadow-md shadow-black/5" style="--radix-tooltip-content-transform-origin: var(--radix-popper-transform-origin); --radix-tooltip-content-available-width: var(--radix-popper-available-width); --radix-tooltip-content-available-height: var(--radix-popper-available-height); --radix-tooltip-trigger-width: var(--radix-popper-anchor-width); --radix-tooltip-trigger-height: var(--radix-popper-anchor-height);">450<span id="radix-«r0»" role="tooltip" style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;">450</span></div></div><span style="transform: var(--radix-slider-thumb-transform); position: absolute; left: calc(75% - 5px);"><span role="slider" aria-valuemin="0" aria-valuemax="600" aria-orientation="horizontal" data-orientation="horizontal" tabindex="0" data-slot="tooltip-trigger" class="box-content block size-4 shrink-0 cursor-pointer rounded-full border-[2px] border-primary bg-primary-foreground shadow-xs shadow-black/5 outline-hidden focus:outline-hidden" data-state="instant-open" data-radix-collection-item="" aria-label="Maximum" aria-valuenow="450" aria-describedby="radix-«r1»" style=""></span></span><div data-radix-popper-content-wrapper="" style="position: fixed; left: 0px; top: 0px; transform: translate(568px, 430px); min-width: max-content; --radix-popper-transform-origin: 50% 28px; z-index: 50; --radix-popper-available-width: 992px; --radix-popper-available-height: 458px; --radix-popper-anchor-width: 20px; --radix-popper-anchor-height: 20px;"><div data-side="top" data-align="center" data-state="instant-open" data-slot="tooltip-content" class="z-50 overflow-hidden rounded-md px-3 py-1.5 text-xs animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border dark:border-border bg-zinc-950 text-white dark:bg-zinc-300 dark:text-black shadow-md shadow-black/5" style="--radix-tooltip-content-transform-origin: var(--radix-popper-transform-origin); --radix-tooltip-content-available-width: var(--radix-popper-available-width); --radix-tooltip-content-available-height: var(--radix-popper-available-height); --radix-tooltip-trigger-width: var(--radix-popper-anchor-width); --radix-tooltip-trigger-height: var(--radix-popper-anchor-height);">450<span id="radix-«r1»" role="tooltip" style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;">450</span></div></div></span></div></div></div></div>
```

## Public registry source files

No public registry source files were available.