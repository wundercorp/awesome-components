# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/carousel-1/thumbnails-carousel
- Registry URL: https://21st.dev/r/anubra266/carousel-1
- Author: anubra266
- Component slug: carousel-1
- Demo slug: thumbnails-carousel
- Title: carousel-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/carousel-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__carousel-1__thumbnails-carousel.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__carousel-1__thumbnails-carousel.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div data-scope="carousel" data-part="root" id="carousel:«r0»" role="region" aria-roledescription="carousel" data-orientation="horizontal" dir="ltr" class="max-w-2xl mx-auto" style="--slides-per-page: 1; --slide-spacing: 0px; --slide-item-size: calc(100% / var(--slides-per-page) - var(--slide-spacing) * (var(--slides-per-page) - 1) / var(--slides-per-page));"><div data-scope="carousel" data-part="item-group" id="carousel:«r0»:item-group" data-orientation="horizontal" dir="ltr" aria-live="polite" class="overflow-hidden rounded-lg shadow-lg mb-4" style="display: grid; gap: var(--slide-spacing); scroll-snap-type: x mandatory; grid-auto-flow: column; scrollbar-width: none; overscroll-behavior-x: contain; grid-auto-columns: var(--slide-item-size); overflow-x: auto;" tabindex="0"><div data-scope="carousel" data-part="item" id="carousel:«r0»:item:0" dir="ltr" role="group" data-index="0" aria-roledescription="slide" data-orientation="horizontal" aria-label="1 of 6" style="scroll-snap-align: start;" data-inview=""><img alt="Slide 1" class="w-full h-80 object-cover" src="https://picsum.photos/seed/40/600/400"></div><div data-scope="carousel" data-part="item" id="carousel:«r0»:item:1" dir="ltr" role="group" data-index="1" aria-roledescription="slide" data-orientation="horizontal" aria-label="2 of 6" aria-hidden="true" style="scroll-snap-align: start;"><img alt="Slide 2" class="w-full h-80 object-cover" src="https://picsum.photos/seed/41/600/400"></div><div data-scope="carousel" data-part="item" id="carousel:«r0»:item:2" dir="ltr" role="group" data-index="2" aria-roledescription="slide" data-orientation="horizontal" aria-label="3 of 6" aria-hidden="true" style="scroll-snap-align: start;"><img alt="Slide 3" class="w-full h-80 object-cover" src="https://picsum.photos/seed/42/600/400"></div><div data-scope="carousel" data-part="item" id="carousel:«r0»:item:3" dir="ltr" role="group" data-index="3" aria-roledescription="slide" data-orientation="horizontal" aria-label="4 of 6" aria-hidden="true" style="scroll-snap-align: start;"><img alt="Slide 4" class="w-full h-80 object-cover" src="https://picsum.photos/seed/43/600/400"></div><div data-scope="carousel" data-part="item" id="carousel:«r0»:item:4" dir="ltr" role="group" data-index="4" aria-roledescription="slide" data-orientation="horizontal" aria-label="5 of 6" aria-hidden="true" style="scroll-snap-align: start;"><img alt="Slide 5" class="w-full h-80 object-cover" src="https://picsum.photos/seed/44/600/400"></div><div data-scope="carousel" data-part="item" id="carousel:«r0»:item:5" dir="ltr" role="group" data-index="5" aria-roledescription="slide" data-orientation="horizontal" aria-label="6 of 6" aria-hidden="true" style="scroll-snap-align: start;"><img alt="Slide 6" class="w-full h-80 object-cover" src="https://picsum.photos/seed/45/600/400"></div></div><div class="flex items-center gap-4"><button data-scope="carousel" data-part="prev-trigger" id="carousel:«r0»:prev-trigger" type="button" disabled="" dir="ltr" aria-label="Previous slide" data-orientation="horizontal" aria-controls="carousel:«r0»:item-group" class="p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors shrink-0">←</button><div class="flex gap-2 overflow-x-auto scrollbar-hide flex-1 px-2"><button data-scope="carousel" data-part="indicator" dir="ltr" id="carousel:«r0»:indicator:0" type="button" data-orientation="horizontal" data-index="0" data-current="" aria-label="Go to slide 1" class="shrink-0 border-2 border-transparent data-current:border-blue-500 rounded-md overflow-hidden cursor-pointer transition-all hover:border-gray-300"><img alt="Thumbnail 1" class="w-16 h-12 object-cover" src="https://picsum.photos/seed/40/120/80"></button><button data-scope="carousel" data-part="indicator" dir="ltr" id="carousel:«r0»:indicator:1" type="button" data-orientation="horizontal" data-index="1" aria-label="Go to slide 2" class="shrink-0 border-2 border-transparent data-current:border-blue-500 rounded-md overflow-hidden cursor-pointer transition-all hover:border-gray-300"><img alt="Thumbnail 2" class="w-16 h-12 object-cover" src="https://picsum.photos/seed/41/120/80"></button><button data-scope="carousel" data-part="indicator" dir="ltr" id="carousel:«r0»:indicator:2" type="button" data-orientation="horizontal" data-index="2" aria-label="Go to slide 3" class="shrink-0 border-2 border-transparent data-current:border-blue-500 rounded-md overflow-hidden cursor-pointer transition-all hover:border-gray-300"><img alt="Thumbnail 3" class="w-16 h-12 object-cover" src="https://picsum.photos/seed/42/120/80"></button><button data-scope="carousel" data-part="indicator" dir="ltr" id="carousel:«r0»:indicator:3" type="button" data-orientation="horizontal" data-index="3" aria-label="Go to slide 4" class="shrink-0 border-2 border-transparent data-current:border-blue-500 rounded-md overflow-hidden cursor-pointer transition-all hover:border-gray-300"><img alt="Thumbnail 4" class="w-16 h-12 object-cover" src="https://picsum.photos/seed/43/120/80"></button><button data-scope="carousel" data-part="indicator" dir="ltr" id="carousel:«r0»:indicator:4" type="button" data-orientation="horizontal" data-index="4" aria-label="Go to slide 5" class="shrink-0 border-2 border-transparent data-current:border-blue-500 rounded-md overflow-hidden cursor-pointer transition-all hover:border-gray-300"><img alt="Thumbnail 5" class="w-16 h-12 object-cover" src="https://picsum.photos/seed/44/120/80"></button><button data-scope="carousel" data-part="indicator" dir="ltr" id="carousel:«r0»:indicator:5" type="button" data-orientation="horizontal" data-index="5" aria-label="Go to slide 6" class="shrink-0 border-2 border-transparent data-current:border-blue-500 rounded-md overflow-hidden cursor-pointer transition-all hover:border-gray-300"><img alt="Thumbnail 6" class="w-16 h-12 object-cover" src="https://picsum.photos/seed/45/120/80"></button></div><button data-scope="carousel" data-part="next-trigger" dir="ltr" id="carousel:«r0»:next-trigger" type="button" aria-label="Next slide" data-orientation="horizontal" aria-controls="carousel:«r0»:item-group" class="p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors shrink-0">→</button></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.