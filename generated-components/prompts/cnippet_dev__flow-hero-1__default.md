# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/cnippet_dev/flow-hero-1/default
- Registry URL: https://21st.dev/r/cnippet_dev/flow-hero-1
- Author: cnippet_dev
- Component slug: flow-hero-1
- Demo slug: default
- Title: flow-hero-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/cnippet_dev/flow-hero-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/cnippet_dev__flow-hero-1__default.html
- Local screenshot file: generated-21st-prompts/screenshots/cnippet_dev__flow-hero-1__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="mx-auto w-full max-w-7xl p-4"><div class="relative w-full overflow-hidden rounded-xl"><div aria-roledescription="carousel" class="relative w-full" data-slot="carousel" role="region"><div class="overflow-hidden" data-slot="carousel-content"><div class="flex -ml-4" style="transform: translate3d(-976px, 0px, 0px);"><div aria-roledescription="slide" class="min-w-0 shrink-0 grow-0 basis-full pl-4" data-slot="carousel-item" role="group"><div class="relative aspect-video w-full overflow-hidden bg-muted"><img alt="Slide 1" class="object-cover" src="https://images.cnippet.dev/image/upload/v1770400411/h2.jpg"></div></div><div aria-roledescription="slide" class="min-w-0 shrink-0 grow-0 basis-full pl-4" data-slot="carousel-item" role="group"><div class="relative aspect-video w-full overflow-hidden bg-muted"><img alt="Slide 2" class="object-cover" src="https://images.cnippet.dev/image/upload/v1770400411/h3.jpg"></div></div><div aria-roledescription="slide" class="min-w-0 shrink-0 grow-0 basis-full pl-4" data-slot="carousel-item" role="group"><div class="relative aspect-video w-full overflow-hidden bg-muted"><img alt="Slide 3" class="object-cover" src="https://images.cnippet.dev/image/upload/v1770400411/h4.jpg"></div></div><div aria-roledescription="slide" class="min-w-0 shrink-0 grow-0 basis-full pl-4" data-slot="carousel-item" role="group"><div class="relative aspect-video w-full overflow-hidden bg-muted"><img alt="Slide 4" class="object-cover" src="https://images.cnippet.dev/image/upload/v1770400411/h5.jpg"></div></div><div aria-roledescription="slide" class="min-w-0 shrink-0 grow-0 basis-full pl-4" data-slot="carousel-item" role="group"><div class="relative aspect-video w-full overflow-hidden bg-muted"><img alt="Slide 5" class="object-cover" src="https://images.cnippet.dev/image/upload/v1770400411/h6.jpg"></div></div></div></div></div><div class="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-4 transition-opacity duration-300"><div class="flex items-end justify-between px-10"><div class="relative w-full max-w-md"><div aria-roledescription="carousel" class="relative w-full" data-slot="carousel" role="region"><div class="overflow-hidden" data-slot="carousel-content"><div class="flex -ml-2 flex-row items-end" style="transform: translate3d(0px, 0px, 0px);"><div aria-roledescription="slide" class="min-w-0 shrink-0 grow-0 basis-1/4 cursor-pointer pl-2 sm:basis-1/7" data-slot="carousel-item" role="group"><div class="relative overflow-hidden transition-all duration-300 aspect-square border-white/40 opacity-50 hover:opacity-80"><img alt="Thumb 2" class="object-cover h-full" src="https://images.cnippet.dev/image/upload/v1770400411/h2.jpg"></div></div><div aria-roledescription="slide" class="min-w-0 shrink-0 grow-0 basis-1/4 cursor-pointer pl-2 sm:basis-1/7" data-slot="carousel-item" role="group"><div class="relative overflow-hidden transition-all duration-300 h-20 opacity-100"><img alt="Thumb 3" class="object-cover h-full" src="https://images.cnippet.dev/image/upload/v1770400411/h3.jpg"></div></div><div aria-roledescription="slide" class="min-w-0 shrink-0 grow-0 basis-1/4 cursor-pointer pl-2 sm:basis-1/7" data-slot="carousel-item" role="group"><div class="relative overflow-hidden transition-all duration-300 aspect-square border-white/40 opacity-50 hover:opacity-80"><img alt="Thumb 4" class="object-cover h-full" src="https://images.cnippet.dev/image/upload/v1770400411/h4.jpg"></div></div><div aria-roledescription="slide" class="min-w-0 shrink-0 grow-0 basis-1/4 cursor-pointer pl-2 sm:basis-1/7" data-slot="carousel-item" role="group"><div class="relative overflow-hidden transition-all duration-300 aspect-square border-white/40 opacity-50 hover:opacity-80"><img alt="Thumb 5" class="object-cover h-full" src="https://images.cnippet.dev/image/upload/v1770400411/h5.jpg"></div></div><div aria-roledescription="slide" class="min-w-0 shrink-0 grow-0 basis-1/4 cursor-pointer pl-2 sm:basis-1/7" data-slot="carousel-item" role="group"><div class="relative overflow-hidden transition-all duration-300 aspect-square border-white/40 opacity-50 hover:opacity-80"><img alt="Thumb 6" class="object-cover h-full" src="https://images.cnippet.dev/image/upload/v1770400411/h6.jpg"></div></div></div></div></div></div><div class="flex max-w-sm flex-col items-end gap-6"><div class="flex items-center gap-3"><div class="flex gap-1"><span class="text-2xl text-orange-500">★</span><span class="text-2xl text-orange-500">★</span><span class="text-2xl text-orange-500">★</span><span class="text-2xl text-orange-500">★</span><span class="text-2xl text-gray-400">★</span></div><span class="font-semibold text-lg text-white">4 / 5</span></div><p class="text-right text-lg text-white leading-relaxed">We crafts modern, clean, and purposeful digital experiences that elevate brands with simplicity, clarity, and strong visual design.</p><button type="button" class="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg border outline-none transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64 sm:text-sm [&amp;_svg:not([class*='opacity-'])]:opacity-80 [&amp;_svg:not([class*='size-'])]:size-4.5 sm:[&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:pointer-events-none [&amp;_svg]:-mx-0.5 [&amp;_svg]:shrink-0 h-9 sm:h-8 border-transparent data-pressed:bg-accent [:hover,[data-pressed]]:bg-accent group relative overflow-hidden px-2 font-normal text-lg text-white hover:bg-transparent" data-slot="button">View Services <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><div class="absolute bottom-0 z-20 h-px w-full bg-gray-500"></div><div class="absolute bottom-0 z-30 h-px w-full -translate-x-40 bg-white transition-all duration-700 ease-in-out group-hover:translate-x-0"></div></button></div></div><div class=""><h1 class="text-center font-semibold text-8xl text-white tracking-wide">FLOW + STUDIO</h1></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.