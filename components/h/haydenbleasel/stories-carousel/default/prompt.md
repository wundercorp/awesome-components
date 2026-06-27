# Build Stories Carousel in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Stories Carousel screenshot](screenshot.png)

## Component

- Author group: `haydenbleasel`
- Component: `stories-carousel`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: haydenbleasel
- Component slug: stories-carousel
- Demo slug: default
- Title: stories-carousel
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative w-full" role="region" aria-roledescription="carousel" data-slot="carousel"><div class="overflow-hidden" data-slot="carousel-content"><div class="flex -ml-4 gap-2" style="transform: translate3d(0px, 0px, 0px);"><div role="group" aria-roledescription="slide" data-slot="carousel-item" class="min-w-0 shrink-0 grow-0 basis-auto !w-[200px] pl-2 md:pl-4 aspect-[3/4] w-[200px]"><div class="group relative overflow-hidden rounded-xl bg-muted/40 cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 aspect-[3/4] w-[200px]" role="button" tabindex="0"><video class="absolute inset-0 size-full object-cover transition-opacity duration-200 group-hover:opacity-90" loop="" preload="metadata" tabindex="0" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4#t=20"></video><div class="absolute right-0 left-0 h-10 from-black/20 to-transparent bottom-0 bg-gradient-to-t"></div><div class="absolute right-0 bottom-0 left-0 z-10 p-3 text-white"><div class="flex items-center gap-2"><span class="relative flex shrink-0 overflow-hidden rounded-full size-6 border border-white/20"><img class="aspect-square h-full w-full" alt="Alex Johnson" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&amp;h=40&amp;fit=crop&amp;crop=face"></span><span class="truncate font-medium text-sm">Alex Johnson</span></div></div></div></div><div role="group" aria-roledescription="slide" data-slot="carousel-item" class="min-w-0 shrink-0 grow-0 basis-auto !w-[200px] pl-2 md:pl-4 aspect-[3/4] w-[200px]"><div class="group relative overflow-hidden rounded-xl bg-muted/40 cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 aspect-[3/4] w-[200px]" role="button" tabindex="0"><video class="absolute inset-0 size-full object-cover transition-opacity duration-200 group-hover:opacity-90" loop="" preload="metadata" tabindex="0" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4#t=20"></video><div class="absolute right-0 left-0 h-10 from-black/20 to-transparent bottom-0 bg-gradient-to-t"></div><div class="absolute right-0 bottom-0 left-0 z-10 p-3 text-white"><div class="flex items-center gap-2"><span class="relative flex shrink-0 overflow-hidden rounded-full size-6 border border-white/20"><span class="flex h-full w-full items-center justify-center rounded-full bg-white/10 text-white text-xs">SC</span></span><span class="truncate font-medium text-sm">Sarah Chen</span></div></div></div></div><div role="group" aria-roledescription="slide" data-slot="carousel-item" class="min-w-0 shrink-0 grow-0 basis-auto !w-[200px] pl-2 md:pl-4 aspect-[3/4] w-[200px]"><div class="group relative overflow-hidden rounded-xl bg-muted/40 cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 aspect-[3/4] w-[200px]" role="button" tabindex="0"><video class="absolute inset-0 size-full object-cover transition-opacity duration-200 group-hover:opacity-90" loop="" preload="metadata" tabindex="0" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"></video><div class="absolute right-0 left-0 h-10 from-black/20 to-transparent bottom-0 bg-gradient-to-t"></div><div class="absolute right-0 bottom-0 left-0 z-10 p-3 text-white"><div class="flex items-center gap-2"><span class="relative flex shrink-0 overflow-hidden rounded-full size-6 border border-white/20"><img class="aspect-square h-full w-full" alt="Mike Rodriguez" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&amp;h=40&amp;fit=crop&amp;crop=face"></span><span class="truncate font-medium text-sm">Mike Rodriguez</span></div></div></div></div><div role="group" aria-roledescription="slide" data-slot="carousel-item" class="min-w-0 shrink-0 grow-0 basis-auto !w-[200px] pl-2 md:pl-4 aspect-[3/4] w-[200px]"><div class="group relative overflow-hidden rounded-xl bg-muted/40 cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 aspect-[3/4] w-[200px]" role="button" tabindex="0"><video class="absolute inset-0 size-full object-cover transition-opacity duration-200 group-hover:opacity-90" loop="" preload="metadata" tabindex="0" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"></video><div class="absolute right-0 left-0 h-10 from-black/20 to-transparent bottom-0 bg-gradient-to-t"></div><div class="absolute right-0 bottom-0 left-0 z-10 p-3 text-white"><div class="flex items-center gap-2"><span class="relative flex shrink-0 overflow-hidden rounded-full size-6 border border-white/20"><img class="aspect-square h-full w-full" alt="Emma Wilson" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&amp;h=40&amp;fit=crop&amp;crop=face"></span><span class="truncate font-medium text-sm">Emma Wilson</span></div></div></div></div><div role="group" aria-roledescription="slide" data-slot="carousel-item" class="min-w-0 shrink-0 grow-0 basis-auto !w-[200px] pl-2 md:pl-4 aspect-[3/4] w-[200px]"><div class="group relative overflow-hidden rounded-xl bg-muted/40 cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 aspect-[3/4] w-[200px]" role="button" tabindex="0"><video class="absolute inset-0 size-full object-cover transition-opacity duration-200 group-hover:opacity-90" loop="" preload="metadata" tabindex="0" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"></video><div class="absolute right-0 left-0 h-10 from-black/20 to-transparent bottom-0 bg-gradient-to-t"></div><div class="absolute right-0 bottom-0 left-0 z-10 p-3 text-white"><div class="flex items-center gap-2"><span class="relative flex shrink-0 overflow-hidden rounded-full size-6 border border-white/20"><img class="aspect-square h-full w-full" alt="David Kim" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&amp;h=40&amp;fit=crop&amp;crop=face"></span><span class="truncate font-medium text-sm">David Kim</span></div></div></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
