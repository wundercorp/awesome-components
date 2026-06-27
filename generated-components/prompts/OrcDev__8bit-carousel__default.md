# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/OrcDev/8bit-carousel/default
- Registry URL: https://21st.dev/r/OrcDev/8bit-carousel
- Author: OrcDev
- Component slug: 8bit-carousel
- Demo slug: default
- Title: 8bit-carousel
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/OrcDev/8bit-carousel with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/OrcDev__8bit-carousel__default.html
- Local screenshot file: generated-21st-prompts/screenshots/OrcDev__8bit-carousel__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex w-full min-h-screen items-center justify-center bg-background p-8 retro"><div class="relative w-full max-w-xs" role="region" aria-roledescription="carousel"><div class="overflow-hidden"><div class="flex -ml-4" style="transform: translate3d(0px, 0px, 0px);"><div role="group" aria-roledescription="slide" class="min-w-0 shrink-0 grow-0 basis-full pl-4"><div class="p-1"><div class="relative bg-card text-card-foreground border-y-6 border-foreground dark:border-ring p-0!"><div class="rounded-none border-0 w-full! h-full flex flex-col gap-6 py-6 bg-card text-card-foreground shadow-none retro"><div class="flex-1 retro flex aspect-square items-center justify-center p-6"><span class="text-4xl font-semibold">1</span></div></div><div class="absolute inset-0 border-x-6 -mx-1.5 border-inherit pointer-events-none" aria-hidden="true"></div></div></div></div><div role="group" aria-roledescription="slide" class="min-w-0 shrink-0 grow-0 basis-full pl-4"><div class="p-1"><div class="relative bg-card text-card-foreground border-y-6 border-foreground dark:border-ring p-0!"><div class="rounded-none border-0 w-full! h-full flex flex-col gap-6 py-6 bg-card text-card-foreground shadow-none retro"><div class="flex-1 retro flex aspect-square items-center justify-center p-6"><span class="text-4xl font-semibold">2</span></div></div><div class="absolute inset-0 border-x-6 -mx-1.5 border-inherit pointer-events-none" aria-hidden="true"></div></div></div></div><div role="group" aria-roledescription="slide" class="min-w-0 shrink-0 grow-0 basis-full pl-4"><div class="p-1"><div class="relative bg-card text-card-foreground border-y-6 border-foreground dark:border-ring p-0!"><div class="rounded-none border-0 w-full! h-full flex flex-col gap-6 py-6 bg-card text-card-foreground shadow-none retro"><div class="flex-1 retro flex aspect-square items-center justify-center p-6"><span class="text-4xl font-semibold">3</span></div></div><div class="absolute inset-0 border-x-6 -mx-1.5 border-inherit pointer-events-none" aria-hidden="true"></div></div></div></div><div role="group" aria-roledescription="slide" class="min-w-0 shrink-0 grow-0 basis-full pl-4"><div class="p-1"><div class="relative bg-card text-card-foreground border-y-6 border-foreground dark:border-ring p-0!"><div class="rounded-none border-0 w-full! h-full flex flex-col gap-6 py-6 bg-card text-card-foreground shadow-none retro"><div class="flex-1 retro flex aspect-square items-center justify-center p-6"><span class="text-4xl font-semibold">4</span></div></div><div class="absolute inset-0 border-x-6 -mx-1.5 border-inherit pointer-events-none" aria-hidden="true"></div></div></div></div><div role="group" aria-roledescription="slide" class="min-w-0 shrink-0 grow-0 basis-full pl-4"><div class="p-1"><div class="relative bg-card text-card-foreground border-y-6 border-foreground dark:border-ring p-0!"><div class="rounded-none border-0 w-full! h-full flex flex-col gap-6 py-6 bg-card text-card-foreground shadow-none retro"><div class="flex-1 retro flex aspect-square items-center justify-center p-6"><span class="text-4xl font-semibold">5</span></div></div><div class="absolute inset-0 border-x-6 -mx-1.5 border-inherit pointer-events-none" aria-hidden="true"></div></div></div></div></div></div><button data-slot="button" class="shrink-0 items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-all outline-none disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 border-none bg-foreground text-background size-9 mx-1 my-0 retro retro top-1/2 -left-10 md:-left-14 -translate-y-1/2 active:-translate-y-1 w-8 h-9 md:w-9 md:h-10 absolute rounded-none aspect-square grid place-items-center" disabled=""><svg width="50" height="50" viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="0.25" color="currentColor" aria-label="arrow-left"><rect x="64" y="120" width="14" height="14" rx="1"></rect><rect x="96" y="120" width="14" height="14" rx="1"></rect><rect x="80" y="120" width="14" height="14" rx="1"></rect><rect x="112" y="120" width="14" height="14" rx="1"></rect><rect x="144" y="120" width="14" height="14" rx="1"></rect><rect x="160" y="120" width="14" height="14" rx="1"></rect><rect x="80" y="104" width="14" height="14" rx="1"></rect><rect x="96" y="88" width="14" height="14" rx="1"></rect><rect x="112" y="72" width="14" height="14" rx="1"></rect><rect x="80" y="136" width="14" height="14" rx="1"></rect><rect x="96" y="152" width="14" height="14" rx="1"></rect><rect x="112" y="168" width="14" height="14" rx="1"></rect><rect x="176" y="120" width="14" height="14" rx="1"></rect><rect x="128" y="120" width="14" height="14" rx="1"></rect></svg><span class="sr-only">Previous slide</span></button><button data-slot="button" class="items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-all outline-none disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 border-none bg-foreground text-background size-9 mx-1 my-0 retro retro top-1/2 -right-10 md:-right-14 -translate-y-1/2 active:-translate-y-1 shrink-0 w-8 h-9 md:w-9 md:h-10 absolute rounded-none aspect-square grid place-items-center"><svg width="50" height="50" viewBox="0 0 256 256" fill="currentColor" class="block" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="0.25" color="currentColor" aria-label="arrow-right"><rect x="64" y="120" width="14" height="14" rx="1"></rect><rect x="96" y="120" width="14" height="14" rx="1"></rect><rect x="80" y="120" width="14" height="14" rx="1"></rect><rect x="112" y="120" width="14" height="14" rx="1"></rect><rect x="144" y="120" width="14" height="14" rx="1"></rect><rect x="160" y="120" width="14" height="14" rx="1"></rect><rect x="160" y="136" width="14" height="14" rx="1"></rect><rect x="144" y="152" width="14" height="14" rx="1"></rect><rect x="128" y="72" width="14" height="14" rx="1"></rect><rect x="128" y="168" width="14" height="14" rx="1"></rect><rect x="176" y="120" width="14" height="14" rx="1"></rect><rect x="160" y="104" width="14" height="14" rx="1"></rect><rect x="144" y="88" width="14" height="14" rx="1"></rect><rect x="128" y="120" width="14" height="14" rx="1"></rect></svg><span class="sr-only">Next slide</span></button></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.