# Build Scroll Portrait Wall in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Scroll Portrait Wall screenshot](screenshot.png)

## Component

- Author group: `ruixenui`
- Component: `scroll-portrait-wall`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ruixenui
- Component slug: scroll-portrait-wall
- Demo slug: default
- Title: scroll-portrait-wall
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><section aria-label="The Lineup" class="relative w-full bg-background text-foreground"><div class="pointer-events-none absolute left-1/2 top-[60vh] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center" style="opacity: 1; visibility: inherit;"><span class="relative max-w-[12ch] text-xs uppercase leading-tight text-muted-foreground after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-transparent after:to-muted-foreground/40 after:content-['']">scroll to meet the lineup</span></div><div class="pointer-events-none sticky top-1/2 z-20 -translate-y-1/2 text-center text-white mix-blend-exclusion"><h2 class="text-5xl font-semibold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl">The Lineup</h2><p class="mt-1 text-xs uppercase tracking-wide text-white/60 sm:text-sm">Sep 18, 2026</p></div><div class="relative z-0 mb-[50vh] mt-[50vh]"><div class="flex w-full"><div class="aspect-square flex-1"><div class="spw-item relative h-full w-full" style="transform-origin: right bottom; transform: translate3d(0px, 0px, 0px) scale(0.1276, 0.1276); translate: none; rotate: none; scale: none;"><img alt="Naomi Adeyemi" loading="lazy" decoding="async" draggable="false" class="h-full w-full object-cover grayscale contrast-[1.15] filter transition-transform duration-500 ease-in-out hover:scale-95" src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/avatar-images/avatar-01.jpg"></div></div><div class="aspect-square flex-1"></div><div class="aspect-square flex-1"><div class="spw-item relative h-full w-full" style="transform-origin: left bottom; transform: translate3d(0px, 0px, 0px) scale(0.1276, 0.1276); translate: none; rotate: none; scale: none;"><img alt="Hugo Marchetti" loading="lazy" decoding="async" draggable="false" class="h-full w-full object-cover grayscale contrast-[1.15] filter transition-transform duration-500 ease-in-out hover:scale-95" src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/avatar-images/avatar-02.jpg"></div></div></div><div class="flex w-full"><div class="aspect-square flex-1"><div class="spw-item relative h-full w-full" style="transform-origin: right bottom; transform: scale(0, 0); translate: none; rotate: none; scale: none;"><img alt="Priya Nair" loading="lazy" decoding="async" draggable="false" class="h-full w-full object-cover grayscale contrast-[1.15] filter transition-transform duration-500 ease-in-out hover:scale-95" src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/avatar-images/avatar-03.jpg"></div></div><div class="aspect-square flex-1"></div><div class="aspect-square flex-1"></div></div><div class="flex w-full"><div class="aspect-square flex-1"></div><div class="aspect-square flex-1"><div class="spw-item relative h-full w-full" style="transform-origin: right bottom; transform: scale(0, 0); translate: none; rotate: none; scale: none;"><img alt="Sebastian Cole" loading="lazy" decoding="async" draggable="false" class="h-full w-full object-cover grayscale contrast-[1.15] filter transition-transform duration-500 ease-in-out hover:scale-95" src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/avatar-images/avatar-04.jpg"></div></div><div class="aspect-square flex-1"></div></div><div class="flex w-full"><div class="aspect-square flex-1"><div class="spw-item relative h-full w-full" style="transform-origin: right bottom; transform: scale(0, 0); translate: none; rotate: none; scale: none;"><img alt="Idris Calloway" loading="lazy" decoding="async" draggable="false" class="h-full w-full object-cover grayscale contrast-[1.15] filter transition-transform duration-500 ease-in-out hover:scale-95" src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/avatar-images/avatar-01.jpg"></div></div><div class="aspect-square flex-1"><div class="spw-item relative h-full w-full" style="transform-origin: right bottom; transform: scale(0, 0); translate: none; rotate: none; scale: none;"><img alt="Mei-Ling Zhao" loading="lazy" decoding="async" draggable="false" class="h-full w-full object-cover grayscale contrast-[1.15] filter transition-transform duration-500 ease-in-out hover:scale-95" src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/avatar-images/avatar-05.jpg"></div></div><div class="aspect-square flex-1"></div></div><div class="flex w-full"><div class="aspect-square flex-1"></div><div class="aspect-square flex-1"></div><div class="aspect-square flex-1"><div class="spw-item relative h-full w-full" style="transform-origin: left bottom; transform: scale(0, 0); translate: none; rotate: none; scale: none;"><img alt="Clara Boström" loading="lazy" decoding="async" draggable="false" class="h-full w-full object-cover grayscale contrast-[1.15] filter transition-transform duration-500 ease-in-out hover:scale-95" src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/avatar-images/avatar-02.jpg"></div></div></div><div class="flex w-full"><div class="aspect-square flex-1"></div><div class="aspect-square flex-1"></div><div class="aspect-square flex-1"><div class="spw-item relative h-full w-full" style="transform-origin: left bottom; transform: scale(0, 0); translate: none; rotate: none; scale: none;"><img alt="Rafael Ortega" loading="lazy" decoding="async" draggable="false" class="h-full w-full object-cover grayscale contrast-[1.15] filter transition-transform duration-500 ease-in-out hover:scale-95" src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/avatar-images/avatar-03.jpg"></div></div></div><div class="flex w-full"><div class="aspect-square flex-1"><div class="spw-item relative h-full w-full" style="transform-origin: right bottom; transform: scale(0, 0); translate: none; rotate: none; scale: none;"><img alt="Hannah Whitfield" loading="lazy" decoding="async" draggable="false" class="h-full w-full object-cover grayscale contrast-[1.15] filter transition-transform duration-500 ease-in-out hover:scale-95" src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/avatar-images/avatar-04.jpg"></div></div><div class="aspect-square flex-1"></div><div class="aspect-square flex-1"><div class="spw-item relative h-full w-full" style="transform-origin: left bottom; transform: scale(0, 0); translate: none; rotate: none; scale: none;"><img alt="Yusuf Demir" loading="lazy" decoding="async" draggable="false" class="h-full w-full object-cover grayscale contrast-[1.15] filter transition-transform duration-500 ease-in-out hover:scale-95" src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/avatar-images/avatar-05.jpg"></div></div></div></div></section></div></div></div>
```

## Reference source files

No reference source files were available.
