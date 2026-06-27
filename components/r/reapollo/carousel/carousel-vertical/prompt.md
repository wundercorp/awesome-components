# Build Carousel in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Carousel screenshot](screenshot.png)

## Component

- Author group: `reapollo`
- Component: `carousel`
- Variant: `carousel-vertical`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: reapollo
- Component slug: carousel
- Demo slug: carousel-vertical
- Title: carousel
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative w-full max-w-xs" role="region" aria-roledescription="carousel" data-slot="carousel"><div class="overflow-hidden" data-slot="carousel-content"><div class="flex flex-col -mt-1 h-[200px]" style="transform: translate3d(0px, 0px, 0px);"><div role="group" aria-roledescription="slide" data-slot="carousel-item" class="min-w-0 shrink-0 grow-0 basis-full pt-1 md:basis-1/2"><div class="p-1"><div class="rounded-lg border bg-card text-card-foreground shadow-sm"><div class="flex items-center justify-center p-6"><span class="text-3xl font-semibold">1</span></div></div></div></div><div role="group" aria-roledescription="slide" data-slot="carousel-item" class="min-w-0 shrink-0 grow-0 basis-full pt-1 md:basis-1/2"><div class="p-1"><div class="rounded-lg border bg-card text-card-foreground shadow-sm"><div class="flex items-center justify-center p-6"><span class="text-3xl font-semibold">2</span></div></div></div></div><div role="group" aria-roledescription="slide" data-slot="carousel-item" class="min-w-0 shrink-0 grow-0 basis-full pt-1 md:basis-1/2"><div class="p-1"><div class="rounded-lg border bg-card text-card-foreground shadow-sm"><div class="flex items-center justify-center p-6"><span class="text-3xl font-semibold">3</span></div></div></div></div><div role="group" aria-roledescription="slide" data-slot="carousel-item" class="min-w-0 shrink-0 grow-0 basis-full pt-1 md:basis-1/2"><div class="p-1"><div class="rounded-lg border bg-card text-card-foreground shadow-sm"><div class="flex items-center justify-center p-6"><span class="text-3xl font-semibold">4</span></div></div></div></div><div role="group" aria-roledescription="slide" data-slot="carousel-item" class="min-w-0 shrink-0 grow-0 basis-full pt-1 md:basis-1/2"><div class="p-1"><div class="rounded-lg border bg-card text-card-foreground shadow-sm"><div class="flex items-center justify-center p-6"><span class="text-3xl font-semibold">5</span></div></div></div></div></div></div><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground absolute size-8 rounded-full -top-12 left-1/2 -translate-x-1/2 rotate-90" data-slot="carousel-previous" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg><span class="sr-only">Previous slide</span></button><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground absolute size-8 rounded-full -bottom-12 left-1/2 -translate-x-1/2 rotate-90" data-slot="carousel-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><span class="sr-only">Next slide</span></button></div></div></div></div>
```

## Reference source files

No reference source files were available.
