# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/carousel-1/cards-carousel
- Registry URL: https://21st.dev/r/anubra266/carousel-1
- Author: anubra266
- Component slug: carousel-1
- Demo slug: cards-carousel
- Title: carousel-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/carousel-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__carousel-1__cards-carousel.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__carousel-1__cards-carousel.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div data-scope="carousel" data-part="root" id="carousel:«r0»" role="region" aria-roledescription="carousel" data-orientation="horizontal" dir="ltr" class="max-w-lg mx-auto" style="--slides-per-page: 1; --slide-spacing: 0px; --slide-item-size: calc(100% / var(--slides-per-page) - var(--slide-spacing) * (var(--slides-per-page) - 1) / var(--slides-per-page));"><div data-scope="carousel" data-part="control" data-orientation="horizontal" class="flex items-center justify-between mb-6"><h2 class="text-xl font-bold text-gray-900 dark:text-white">Featured Destinations</h2><div class="flex gap-2"><button data-scope="carousel" data-part="prev-trigger" id="carousel:«r0»:prev-trigger" type="button" disabled="" dir="ltr" aria-label="Previous slide" data-orientation="horizontal" aria-controls="carousel:«r0»:item-group" class="p-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full shadow-md border transition-colors">←</button><button data-scope="carousel" data-part="next-trigger" dir="ltr" id="carousel:«r0»:next-trigger" type="button" aria-label="Next slide" data-orientation="horizontal" aria-controls="carousel:«r0»:item-group" class="p-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full shadow-md border transition-colors">→</button></div></div><div data-scope="carousel" data-part="item-group" id="carousel:«r0»:item-group" data-orientation="horizontal" dir="ltr" aria-live="polite" class="overflow-hidden" style="display: grid; gap: var(--slide-spacing); scroll-snap-type: x mandatory; grid-auto-flow: column; scrollbar-width: none; overscroll-behavior-x: contain; grid-auto-columns: var(--slide-item-size); overflow-x: auto;" tabindex="0"><div data-scope="carousel" data-part="item" id="carousel:«r0»:item:0" dir="ltr" role="group" data-index="0" aria-roledescription="slide" data-orientation="horizontal" aria-label="1 of 4" style="scroll-snap-align: start;" data-inview=""><div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"><img alt="Mountain Adventure" class="w-full h-48 object-cover" src="https://picsum.photos/seed/30/400/250"><div class="p-6"><h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Mountain Adventure</h3><p class="text-gray-600 dark:text-gray-300 text-sm">Explore breathtaking mountain landscapes</p></div></div></div><div data-scope="carousel" data-part="item" id="carousel:«r0»:item:1" dir="ltr" role="group" data-index="1" aria-roledescription="slide" data-orientation="horizontal" aria-label="2 of 4" aria-hidden="true" style="scroll-snap-align: start;"><div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"><img alt="Ocean Views" class="w-full h-48 object-cover" src="https://picsum.photos/seed/31/400/250"><div class="p-6"><h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Ocean Views</h3><p class="text-gray-600 dark:text-gray-300 text-sm">Discover pristine coastal destinations</p></div></div></div><div data-scope="carousel" data-part="item" id="carousel:«r0»:item:2" dir="ltr" role="group" data-index="2" aria-roledescription="slide" data-orientation="horizontal" aria-label="3 of 4" aria-hidden="true" style="scroll-snap-align: start;"><div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"><img alt="Forest Escape" class="w-full h-48 object-cover" src="https://picsum.photos/seed/32/400/250"><div class="p-6"><h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Forest Escape</h3><p class="text-gray-600 dark:text-gray-300 text-sm">Immerse yourself in nature's tranquility</p></div></div></div><div data-scope="carousel" data-part="item" id="carousel:«r0»:item:3" dir="ltr" role="group" data-index="3" aria-roledescription="slide" data-orientation="horizontal" aria-label="4 of 4" aria-hidden="true" style="scroll-snap-align: start;"><div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"><img alt="Urban Explorer" class="w-full h-48 object-cover" src="https://picsum.photos/seed/33/400/250"><div class="p-6"><h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Urban Explorer</h3><p class="text-gray-600 dark:text-gray-300 text-sm">Experience vibrant city culture</p></div></div></div></div><div data-scope="carousel" data-part="indicator-group" dir="ltr" id="carousel:«r0»:indicator-group" data-orientation="horizontal" class="flex justify-center items-center mt-6 gap-2"><button data-scope="carousel" data-part="indicator" dir="ltr" id="carousel:«r0»:indicator:0" type="button" data-orientation="horizontal" data-index="0" data-current="" aria-label="Go to slide 1" class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 data-current:bg-blue-500 dark:data-current:bg-blue-400 data-current:w-6 transition-all cursor-pointer"></button><button data-scope="carousel" data-part="indicator" dir="ltr" id="carousel:«r0»:indicator:1" type="button" data-orientation="horizontal" data-index="1" aria-label="Go to slide 2" class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 data-current:bg-blue-500 dark:data-current:bg-blue-400 data-current:w-6 transition-all cursor-pointer"></button><button data-scope="carousel" data-part="indicator" dir="ltr" id="carousel:«r0»:indicator:2" type="button" data-orientation="horizontal" data-index="2" aria-label="Go to slide 3" class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 data-current:bg-blue-500 dark:data-current:bg-blue-400 data-current:w-6 transition-all cursor-pointer"></button><button data-scope="carousel" data-part="indicator" dir="ltr" id="carousel:«r0»:indicator:3" type="button" data-orientation="horizontal" data-index="3" aria-label="Go to slide 4" class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 data-current:bg-blue-500 dark:data-current:bg-blue-400 data-current:w-6 transition-all cursor-pointer"></button></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.