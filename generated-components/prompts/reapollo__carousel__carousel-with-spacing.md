# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/reapollo/carousel/carousel-with-spacing
- Registry URL: https://21st.dev/r/reapollo/carousel
- Author: reapollo
- Component slug: carousel
- Demo slug: carousel-with-spacing
- Title: carousel
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/reapollo/carousel with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/reapollo__carousel__carousel-with-spacing.html
- Local screenshot file: generated-21st-prompts/screenshots/reapollo__carousel__carousel-with-spacing.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative w-full max-w-sm" role="region" aria-roledescription="carousel" data-slot="carousel"><div class="overflow-hidden" data-slot="carousel-content"><div class="flex -ml-1" style="transform: translate3d(0px, 0px, 0px);"><div role="group" aria-roledescription="slide" data-slot="carousel-item" class="min-w-0 shrink-0 grow-0 basis-full pl-1 md:basis-1/2 lg:basis-1/3"><div class="p-1"><div class="rounded-lg border bg-card text-card-foreground shadow-sm"><div class="flex aspect-square items-center justify-center p-6"><span class="text-2xl font-semibold">1</span></div></div></div></div><div role="group" aria-roledescription="slide" data-slot="carousel-item" class="min-w-0 shrink-0 grow-0 basis-full pl-1 md:basis-1/2 lg:basis-1/3"><div class="p-1"><div class="rounded-lg border bg-card text-card-foreground shadow-sm"><div class="flex aspect-square items-center justify-center p-6"><span class="text-2xl font-semibold">2</span></div></div></div></div><div role="group" aria-roledescription="slide" data-slot="carousel-item" class="min-w-0 shrink-0 grow-0 basis-full pl-1 md:basis-1/2 lg:basis-1/3"><div class="p-1"><div class="rounded-lg border bg-card text-card-foreground shadow-sm"><div class="flex aspect-square items-center justify-center p-6"><span class="text-2xl font-semibold">3</span></div></div></div></div><div role="group" aria-roledescription="slide" data-slot="carousel-item" class="min-w-0 shrink-0 grow-0 basis-full pl-1 md:basis-1/2 lg:basis-1/3"><div class="p-1"><div class="rounded-lg border bg-card text-card-foreground shadow-sm"><div class="flex aspect-square items-center justify-center p-6"><span class="text-2xl font-semibold">4</span></div></div></div></div><div role="group" aria-roledescription="slide" data-slot="carousel-item" class="min-w-0 shrink-0 grow-0 basis-full pl-1 md:basis-1/2 lg:basis-1/3"><div class="p-1"><div class="rounded-lg border bg-card text-card-foreground shadow-sm"><div class="flex aspect-square items-center justify-center p-6"><span class="text-2xl font-semibold">5</span></div></div></div></div></div></div><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground absolute size-8 rounded-full top-1/2 -left-12 -translate-y-1/2" data-slot="carousel-previous" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg><span class="sr-only">Previous slide</span></button><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground absolute size-8 rounded-full top-1/2 -right-12 -translate-y-1/2" data-slot="carousel-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><span class="sr-only">Next slide</span></button></div></div></div></div>
```

## Public registry source files

No public registry source files were available.