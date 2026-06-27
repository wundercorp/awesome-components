# Build Angle Slider in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Angle Slider screenshot](screenshot.png)

## Component

- Author group: `anubra266`
- Component: `angle-slider`
- Variant: `labeled-marks`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: anubra266
- Component slug: angle-slider
- Demo slug: labeled-marks
- Title: angle-slider
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div data-scope="angle-slider" data-part="root" id="angle-slider:«r0»" class="relative flex items-center justify-center" style="--value: 75; --angle: 75deg;"><div data-scope="angle-slider" data-part="control" role="presentation" id="angle-slider:«r0»:control" class="[--size:200px] [--thumb-color:rgb(59_130_246)] dark:[--thumb-color:rgb(96_165_250)] [--thumb-size:40px] [--thumb-indicator-size:min(var(--thumb-size),calc(var(--size)/2))] w-(--size) h-(--size) rounded-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 flex flex-col items-center justify-center user-select:none relative" style="touch-action: none; user-select: none;"><div data-scope="angle-slider" data-part="thumb" id="angle-slider:«r0»:thumb" role="slider" aria-valuemax="360" aria-valuemin="0" aria-valuenow="75" tabindex="0" class="absolute top-0 right-0 bottom-0 left-[calc(50%-1.5px)] pointer-events-none h-full w-[3px] outline-hidden before:absolute before:right-0 before:top-0 before:h-(--thumb-indicator-size) before:bg-(--thumb-color) before:w-[3px] before:rounded-full" style="rotate: var(--angle);"></div><div data-scope="angle-slider" data-part="marker-group" class="absolute inset-px rounded-(--size) pointer-events-none"><div data-scope="angle-slider" data-part="marker" data-value="0" data-state="under-value" class="w-0.5 absolute top-0 bottom-0 left-[calc(50%-1px)] [--marker-color:rgb(156_163_175)] dark:[--marker-color:rgb(209_213_219)] before:absolute before:top-[calc(var(--thumb-size)/3)] before:left-[0.5px] before:h-[calc(var(--thumb-size)/1.5)] before:bg-(--marker-color) before:w-[2px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full" style="--marker-value: 0; rotate: calc(var(--marker-value) * 1deg);"></div><div data-scope="angle-slider" data-part="marker" data-value="45" data-state="under-value" class="w-0.5 absolute top-0 bottom-0 left-[calc(50%-1px)] [--marker-color:rgb(156_163_175)] dark:[--marker-color:rgb(209_213_219)] before:absolute before:top-[calc(var(--thumb-size)/3)] before:left-[0.5px] before:h-[calc(var(--thumb-size)/1.5)] before:bg-(--marker-color) before:w-[2px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full" style="--marker-value: 45; rotate: calc(var(--marker-value) * 1deg);"></div><div data-scope="angle-slider" data-part="marker" data-value="90" data-state="over-value" class="w-0.5 absolute top-0 bottom-0 left-[calc(50%-1px)] [--marker-color:rgb(156_163_175)] dark:[--marker-color:rgb(209_213_219)] before:absolute before:top-[calc(var(--thumb-size)/3)] before:left-[0.5px] before:h-[calc(var(--thumb-size)/1.5)] before:bg-(--marker-color) before:w-[2px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full" style="--marker-value: 90; rotate: calc(var(--marker-value) * 1deg);"></div><div data-scope="angle-slider" data-part="marker" data-value="135" data-state="over-value" class="w-0.5 absolute top-0 bottom-0 left-[calc(50%-1px)] [--marker-color:rgb(156_163_175)] dark:[--marker-color:rgb(209_213_219)] before:absolute before:top-[calc(var(--thumb-size)/3)] before:left-[0.5px] before:h-[calc(var(--thumb-size)/1.5)] before:bg-(--marker-color) before:w-[2px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full" style="--marker-value: 135; rotate: calc(var(--marker-value) * 1deg);"></div><div data-scope="angle-slider" data-part="marker" data-value="180" data-state="over-value" class="w-0.5 absolute top-0 bottom-0 left-[calc(50%-1px)] [--marker-color:rgb(156_163_175)] dark:[--marker-color:rgb(209_213_219)] before:absolute before:top-[calc(var(--thumb-size)/3)] before:left-[0.5px] before:h-[calc(var(--thumb-size)/1.5)] before:bg-(--marker-color) before:w-[2px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full" style="--marker-value: 180; rotate: calc(var(--marker-value) * 1deg);"></div><div data-scope="angle-slider" data-part="marker" data-value="225" data-state="over-value" class="w-0.5 absolute top-0 bottom-0 left-[calc(50%-1px)] [--marker-color:rgb(156_163_175)] dark:[--marker-color:rgb(209_213_219)] before:absolute before:top-[calc(var(--thumb-size)/3)] before:left-[0.5px] before:h-[calc(var(--thumb-size)/1.5)] before:bg-(--marker-color) before:w-[2px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full" style="--marker-value: 225; rotate: calc(var(--marker-value) * 1deg);"></div><div data-scope="angle-slider" data-part="marker" data-value="270" data-state="over-value" class="w-0.5 absolute top-0 bottom-0 left-[calc(50%-1px)] [--marker-color:rgb(156_163_175)] dark:[--marker-color:rgb(209_213_219)] before:absolute before:top-[calc(var(--thumb-size)/3)] before:left-[0.5px] before:h-[calc(var(--thumb-size)/1.5)] before:bg-(--marker-color) before:w-[2px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full" style="--marker-value: 270; rotate: calc(var(--marker-value) * 1deg);"></div><div data-scope="angle-slider" data-part="marker" data-value="315" data-state="over-value" class="w-0.5 absolute top-0 bottom-0 left-[calc(50%-1px)] [--marker-color:rgb(156_163_175)] dark:[--marker-color:rgb(209_213_219)] before:absolute before:top-[calc(var(--thumb-size)/3)] before:left-[0.5px] before:h-[calc(var(--thumb-size)/1.5)] before:bg-(--marker-color) before:w-[2px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full" style="--marker-value: 315; rotate: calc(var(--marker-value) * 1deg);"></div></div><div class="absolute inset-0 pointer-events-none"><div class="absolute text-sm font-medium text-gray-700 dark:text-gray-300 -translate-x-1/2 -translate-y-1/2" style="left: calc(50% + 6.98049e-15px); top: calc(50% - 114px);">0°</div><div class="absolute text-sm font-medium text-gray-700 dark:text-gray-300 -translate-x-1/2 -translate-y-1/2" style="left: calc(50% + 80.6102px); top: calc(50% - 80.6102px);">45°</div><div class="absolute text-sm font-medium text-gray-700 dark:text-gray-300 -translate-x-1/2 -translate-y-1/2" style="left: calc(50% + 114px); top: calc(50% + 0px);">90°</div><div class="absolute text-sm font-medium text-gray-700 dark:text-gray-300 -translate-x-1/2 -translate-y-1/2" style="left: calc(50% + 80.6102px); top: calc(50% + 80.6102px);">135°</div><div class="absolute text-sm font-medium text-gray-700 dark:text-gray-300 -translate-x-1/2 -translate-y-1/2" style="left: calc(50% + 6.98049e-15px); top: calc(50% + 114px);">180°</div><div class="absolute text-sm font-medium text-gray-700 dark:text-gray-300 -translate-x-1/2 -translate-y-1/2" style="left: calc(50% - 80.6102px); top: calc(50% + 80.6102px);">225°</div><div class="absolute text-sm font-medium text-gray-700 dark:text-gray-300 -translate-x-1/2 -translate-y-1/2" style="left: calc(50% - 114px); top: calc(50% + 1.3961e-14px);">270°</div><div class="absolute text-sm font-medium text-gray-700 dark:text-gray-300 -translate-x-1/2 -translate-y-1/2" style="left: calc(50% - 80.6102px); top: calc(50% - 80.6102px);">315°</div></div><div class="text-4xl text-gray-900 dark:text-white font-bold">75°</div><label data-scope="angle-slider" data-part="label" for="angle-slider:«r0»:input" class="text-sm text-gray-600 dark:text-gray-300 font-medium">degrees</label></div><input id="angle-slider:«r0»:input" type="hidden" value="75"></div></div></div></div>
```

## Reference source files

No reference source files were available.
