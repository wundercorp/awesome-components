# Build Horizontal Scroll Carousel in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Horizontal Scroll Carousel screenshot](screenshot.png)

## Component

- Author group: `uniquesonu`
- Component: `horizontal-scroll-carousel`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: uniquesonu
- Component slug: horizontal-scroll-carousel
- Demo slug: default
- Title: horizontal-scroll-carousel
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-neutral-800"><div class="flex h-48 items-center justify-center"><span class="font-semibold uppercase text-neutral-500">Scroll down</span></div><section class="relative h-[300vh] bg-neutral-900"><div class="sticky top-0 flex h-screen items-center overflow-hidden"><div class="flex gap-4" style="transform: translateX(1%);"><div class="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"><div class="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110" style="background-image: url(&quot;https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&amp;q=80&amp;auto=format&amp;fit=crop&quot;); background-size: cover; background-position: center center;"></div><div class="absolute inset-0 z-10 grid place-content-center"><p class="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">Title 1</p></div></div><div class="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"><div class="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110" style="background-image: url(&quot;https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&amp;q=80&amp;auto=format&amp;fit=crop&quot;); background-size: cover; background-position: center center;"></div><div class="absolute inset-0 z-10 grid place-content-center"><p class="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">Title 2</p></div></div><div class="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"><div class="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110" style="background-image: url(&quot;https://images.unsplash.com/photo-1602526216279-61258f121a1c?w=800&amp;q=80&amp;auto=format&amp;fit=crop&quot;); background-size: cover; background-position: center center;"></div><div class="absolute inset-0 z-10 grid place-content-center"><p class="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">Title 3</p></div></div><div class="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"><div class="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110" style="background-image: url(&quot;https://images.unsplash.com/photo-1612831195783-c994e079a3bb?w=800&amp;q=80&amp;auto=format&amp;fit=crop&quot;); background-size: cover; background-position: center center;"></div><div class="absolute inset-0 z-10 grid place-content-center"><p class="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">Title 4</p></div></div><div class="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"><div class="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110" style="background-image: url(&quot;https://images.unsplash.com/photo-1605460375648-278bcbd579a6?w=800&amp;q=80&amp;auto=format&amp;fit=crop&quot;); background-size: cover; background-position: center center;"></div><div class="absolute inset-0 z-10 grid place-content-center"><p class="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">Title 5</p></div></div><div class="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"><div class="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110" style="background-image: url(&quot;https://images.unsplash.com/photo-1616587891160-9446f49b7f10?w=800&amp;q=80&amp;auto=format&amp;fit=crop&quot;); background-size: cover; background-position: center center;"></div><div class="absolute inset-0 z-10 grid place-content-center"><p class="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">Title 6</p></div></div><div class="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"><div class="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110" style="background-image: url(&quot;https://images.unsplash.com/photo-1612831455544-e3a53c056cd7?w=800&amp;q=80&amp;auto=format&amp;fit=crop&quot;); background-size: cover; background-position: center center;"></div><div class="absolute inset-0 z-10 grid place-content-center"><p class="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">Title 7</p></div></div></div></div></section><div class="flex h-48 items-center justify-center"><span class="font-semibold uppercase text-neutral-500">Scroll up</span></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
