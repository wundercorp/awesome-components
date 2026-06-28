# Build Carousel in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Carousel screenshot](screenshot.png)

## Component

- Author group: `reui`
- Component: `carousel`
- Variant: `size`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: reui
- Component slug: carousel
- Demo slug: size
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative w-full max-w-sm" role="region" aria-roledescription="carousel" data-slot="carousel"><div class="overflow-hidden" data-slot="carousel-content"><div class="flex -ml-4" style="transform: translate3d(0px, 0px, 0px);"><div role="group" aria-roledescription="slide" data-slot="carousel-item" class="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3"><div class="p-1"><div data-slot="card" class="flex flex-col items-stretch text-card-foreground rounded-xl bg-card border border-border shadow-xs black/5"><div data-slot="card-content" class="grow flex aspect-square items-center justify-center p-6"><span class="text-3xl font-semibold">1</span></div></div></div></div><div role="group" aria-roledescription="slide" data-slot="carousel-item" class="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3"><div class="p-1"><div data-slot="card" class="flex flex-col items-stretch text-card-foreground rounded-xl bg-card border border-border shadow-xs black/5"><div data-slot="card-content" class="grow flex aspect-square items-center justify-center p-6"><span class="text-3xl font-semibold">2</span></div></div></div></div><div role="group" aria-roledescription="slide" data-slot="carousel-item" class="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3"><div class="p-1"><div data-slot="card" class="flex flex-col items-stretch text-card-foreground rounded-xl bg-card border border-border shadow-xs black/5"><div data-slot="card-content" class="grow flex aspect-square items-center justify-center p-6"><span class="text-3xl font-semibold">3</span></div></div></div></div><div role="group" aria-roledescription="slide" data-slot="carousel-item" class="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3"><div class="p-1"><div data-slot="card" class="flex flex-col items-stretch text-card-foreground rounded-xl bg-card border border-border shadow-xs black/5"><div data-slot="card-content" class="grow flex aspect-square items-center justify-center p-6"><span class="text-3xl font-semibold">4</span></div></div></div></div><div role="group" aria-roledescription="slide" data-slot="carousel-item" class="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3"><div class="p-1"><div data-slot="card" class="flex flex-col items-stretch text-card-foreground rounded-xl bg-card border border-border shadow-xs black/5"><div data-slot="card-content" class="grow flex aspect-square items-center justify-center p-6"><span class="text-3xl font-semibold">5</span></div></div></div></div></div></div><button data-slot="carousel-previous" class="cursor-pointer group focus-visible:outline-hidden inline-flex items-center justify-center has-data-[arrow=true]:justify-between whitespace-nowrap text-sm font-medium ring-offset-background transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-60 [&amp;_svg]:shrink-0 bg-background text-accent-foreground border border-input hover:bg-accent data-[state=open]:bg-accent shrink-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&amp;_svg:not([role=img]):not([class*=text-]):not([class*=opacity-])]:opacity-60 shadow-xs shadow-black/5 p-0 [&amp;_svg:not([class*=size-])]:size-4 absolute size-8 rounded-full top-1/2 -left-12 -translate-y-1/2" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg><span class="sr-only">Previous slide</span></button><button data-slot="carousel-next" class="cursor-pointer group focus-visible:outline-hidden inline-flex items-center justify-center has-data-[arrow=true]:justify-between whitespace-nowrap text-sm font-medium ring-offset-background transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-60 [&amp;_svg]:shrink-0 bg-background text-accent-foreground border border-input hover:bg-accent data-[state=open]:bg-accent shrink-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&amp;_svg:not([role=img]):not([class*=text-]):not([class*=opacity-])]:opacity-60 shadow-xs shadow-black/5 p-0 [&amp;_svg:not([class*=size-])]:size-4 absolute size-8 rounded-full top-1/2 -right-12 -translate-y-1/2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><span class="sr-only">Next slide</span></button></div></div></div></div>
```

## Reference source files

No reference source files were available.
