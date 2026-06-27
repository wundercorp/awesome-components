# Build Carousel 1 in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Carousel 1 screenshot](screenshot.png)

## Component

- Author group: `anubra266`
- Component: `carousel-1`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: anubra266
- Component slug: carousel-1
- Demo slug: default
- Title: carousel-1
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div data-scope="carousel" data-part="root" id="carousel:«r0»" role="region" aria-roledescription="carousel" data-orientation="horizontal" dir="ltr" class="max-w-md mx-auto" style="--slides-per-page: 1; --slide-spacing: 0px; --slide-item-size: calc(100% / var(--slides-per-page) - var(--slide-spacing) * (var(--slides-per-page) - 1) / var(--slides-per-page));"><div data-scope="carousel" data-part="control" data-orientation="horizontal" class="flex items-center justify-between mb-4"><button data-scope="carousel" data-part="prev-trigger" id="carousel:«r0»:prev-trigger" type="button" disabled="" dir="ltr" aria-label="Previous slide" data-orientation="horizontal" aria-controls="carousel:«r0»:item-group" class="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors">Previous</button><button data-scope="carousel" data-part="next-trigger" dir="ltr" id="carousel:«r0»:next-trigger" type="button" aria-label="Next slide" data-orientation="horizontal" aria-controls="carousel:«r0»:item-group" class="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors">Next</button></div><div data-scope="carousel" data-part="item-group" id="carousel:«r0»:item-group" data-orientation="horizontal" dir="ltr" aria-live="polite" class="overflow-hidden rounded-lg" style="display: grid; gap: var(--slide-spacing); scroll-snap-type: x mandatory; grid-auto-flow: column; scrollbar-width: none; overscroll-behavior-x: contain; grid-auto-columns: var(--slide-item-size); overflow-x: auto;" tabindex="0"><div data-scope="carousel" data-part="item" id="carousel:«r0»:item:0" dir="ltr" role="group" data-index="0" aria-roledescription="slide" data-orientation="horizontal" aria-label="1 of 5" style="scroll-snap-align: start;" data-inview=""><img alt="Slide 1" class="w-full h-64 object-cover" src="https://picsum.photos/seed/1/500/300"></div><div data-scope="carousel" data-part="item" id="carousel:«r0»:item:1" dir="ltr" role="group" data-index="1" aria-roledescription="slide" data-orientation="horizontal" aria-label="2 of 5" aria-hidden="true" style="scroll-snap-align: start;"><img alt="Slide 2" class="w-full h-64 object-cover" src="https://picsum.photos/seed/2/500/300"></div><div data-scope="carousel" data-part="item" id="carousel:«r0»:item:2" dir="ltr" role="group" data-index="2" aria-roledescription="slide" data-orientation="horizontal" aria-label="3 of 5" aria-hidden="true" style="scroll-snap-align: start;"><img alt="Slide 3" class="w-full h-64 object-cover" src="https://picsum.photos/seed/3/500/300"></div><div data-scope="carousel" data-part="item" id="carousel:«r0»:item:3" dir="ltr" role="group" data-index="3" aria-roledescription="slide" data-orientation="horizontal" aria-label="4 of 5" aria-hidden="true" style="scroll-snap-align: start;"><img alt="Slide 4" class="w-full h-64 object-cover" src="https://picsum.photos/seed/4/500/300"></div><div data-scope="carousel" data-part="item" id="carousel:«r0»:item:4" dir="ltr" role="group" data-index="4" aria-roledescription="slide" data-orientation="horizontal" aria-label="5 of 5" aria-hidden="true" style="scroll-snap-align: start;"><img alt="Slide 5" class="w-full h-64 object-cover" src="https://picsum.photos/seed/5/500/300"></div></div><div data-scope="carousel" data-part="indicator-group" dir="ltr" id="carousel:«r0»:indicator-group" data-orientation="horizontal" class="flex justify-center items-center mt-4 gap-2"><button data-scope="carousel" data-part="indicator" dir="ltr" id="carousel:«r0»:indicator:0" type="button" data-orientation="horizontal" data-index="0" data-current="" aria-label="Go to slide 1" class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 data-current:bg-blue-500 transition-colors cursor-pointer"></button><button data-scope="carousel" data-part="indicator" dir="ltr" id="carousel:«r0»:indicator:1" type="button" data-orientation="horizontal" data-index="1" aria-label="Go to slide 2" class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 data-current:bg-blue-500 transition-colors cursor-pointer"></button><button data-scope="carousel" data-part="indicator" dir="ltr" id="carousel:«r0»:indicator:2" type="button" data-orientation="horizontal" data-index="2" aria-label="Go to slide 3" class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 data-current:bg-blue-500 transition-colors cursor-pointer"></button><button data-scope="carousel" data-part="indicator" dir="ltr" id="carousel:«r0»:indicator:3" type="button" data-orientation="horizontal" data-index="3" aria-label="Go to slide 4" class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 data-current:bg-blue-500 transition-colors cursor-pointer"></button><button data-scope="carousel" data-part="indicator" dir="ltr" id="carousel:«r0»:indicator:4" type="button" data-orientation="horizontal" data-index="4" aria-label="Go to slide 5" class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 data-current:bg-blue-500 transition-colors cursor-pointer"></button></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
