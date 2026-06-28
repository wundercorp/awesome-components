# Build Text Scroll Animation in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Text Scroll Animation screenshot](screenshot.png)

## Component

- Author group: `reuno-ui`
- Component: `text-scroll-animation`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: reuno-ui
- Component slug: text-scroll-animation
- Demo slug: default
- Title: text-scroll-animation
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><main class="w-full bg-white"><div class="top-22 absolute left-1/2 z-10 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-black"><span class="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-[#f5f4f3] after:to-black after:content-['']">Scroll to see more</span></div><div class="relative box-border flex h-[210vh] items-center justify-center gap-[2vw] overflow-hidden bg-[#f5f4f3] p-[2vw]"><div class="font-geist w-full max-w-4xl text-center text-6xl font-bold uppercase tracking-tighter text-black" style="perspective: 500px;"><span class="inline-block text-orange-500" style="transform: translateX(-350px) rotateX(-350deg);">s</span><span class="inline-block text-orange-500" style="transform: translateX(-300px) rotateX(-300deg);">e</span><span class="inline-block text-orange-500" style="transform: translateX(-250px) rotateX(-250deg);">e</span><span class="inline-block text-orange-500 w-4" style="transform: translateX(-200px) rotateX(-200deg);"> </span><span class="inline-block text-orange-500" style="transform: translateX(-150px) rotateX(-150deg);">m</span><span class="inline-block text-orange-500" style="transform: translateX(-100px) rotateX(-100deg);">o</span><span class="inline-block text-orange-500" style="transform: translateX(-50px) rotateX(-50deg);">r</span><span class="inline-block text-orange-500" style="transform: none;">e</span><span class="inline-block text-orange-500 w-4" style="transform: translateX(50px) rotateX(50deg);"> </span><span class="inline-block text-orange-500" style="transform: translateX(100px) rotateX(100deg);">f</span><span class="inline-block text-orange-500" style="transform: translateX(150px) rotateX(150deg);">r</span><span class="inline-block text-orange-500" style="transform: translateX(200px) rotateX(200deg);">o</span><span class="inline-block text-orange-500" style="transform: translateX(250px) rotateX(250deg);">m</span><span class="inline-block text-orange-500 w-4" style="transform: translateX(300px) rotateX(300deg);"> </span></div></div><div class="relative -mt-[100vh] box-border flex h-[210vh] flex-col items-center justify-center gap-[2vw] overflow-hidden bg-[#f5f4f3] p-[2vw]"><p class="font-geist flex items-center justify-center gap-3 text-2xl font-medium tracking-tight text-black"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 78" class="h-12 text-black"><path fill="#000" d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"></path></svg><span class="font-geist font-medium">integrate with your fav tech stack</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 78" class="h-12 scale-x-[-1] text-black"><path fill="#000" d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"></path></svg></p><div class="flex flex-wrap items-center justify-center gap-8"><img alt="" class="h-16 w-16 shrink-0 object-contain will-change-transform" src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/discord.svg" style="transform-origin: center center; transform: translateX(-150px) translateY(150px) scale(0.75);"><img alt="" class="h-16 w-16 shrink-0 object-contain will-change-transform" src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/figma.svg" style="transform-origin: center center; transform: translateX(-100px) translateY(100px) scale(0.75);"><img alt="" class="h-16 w-16 shrink-0 object-contain will-change-transform" src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/framer.svg" style="transform-origin: center center; transform: translateX(-50px) translateY(50px) scale(0.75);"><img alt="" class="h-16 w-16 shrink-0 object-contain will-change-transform" src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg" style="transform-origin: center center; transform: scale(0.75);"><img alt="" class="h-16 w-16 shrink-0 object-contain will-change-transform" src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/mongodb.svg" style="transform-origin: center center; transform: translateX(50px) translateY(50px) scale(0.75);"><img alt="" class="h-16 w-16 shrink-0 object-contain will-change-transform" src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/notion.svg" style="transform-origin: center center; transform: translateX(100px) translateY(100px) scale(0.75);"></div></div><div class="relative -mt-[95vh] box-border flex h-[210vh] flex-col items-center justify-center gap-[2vw] overflow-hidden bg-[#f5f4f3] p-[2vw]"><p class="font-geist flex items-center justify-center gap-3 text-2xl font-medium tracking-tight text-black"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 78" class="h-12 text-black"><path fill="#000" d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"></path></svg><span class="font-geist font-medium">integrate with your fav tech stack</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 78" class="h-12 scale-x-[-1] text-black"><path fill="#000" d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"></path></svg></p><div class="flex flex-wrap items-center justify-center gap-8" style="perspective: 500px;"><img alt="" class="h-16 w-16 shrink-0 object-contain will-change-transform" src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/discord.svg" style="transform-origin: center center; transform: translateX(-270px) translateY(-60px) scale(0.75) rotate(-150deg);"><img alt="" class="h-16 w-16 shrink-0 object-contain will-change-transform" src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/figma.svg" style="transform-origin: center center; transform: translateX(-180px) translateY(-40px) scale(0.75) rotate(-100deg);"><img alt="" class="h-16 w-16 shrink-0 object-contain will-change-transform" src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/framer.svg" style="transform-origin: center center; transform: translateX(-90px) translateY(-20px) scale(0.75) rotate(-50deg);"><img alt="" class="h-16 w-16 shrink-0 object-contain will-change-transform" src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg" style="transform-origin: center center; transform: scale(0.75);"><img alt="" class="h-16 w-16 shrink-0 object-contain will-change-transform" src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/mongodb.svg" style="transform-origin: center center; transform: translateX(90px) translateY(-20px) scale(0.75) rotate(50deg);"><img alt="" class="h-16 w-16 shrink-0 object-contain will-change-transform" src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/notion.svg" style="transform-origin: center center; transform: translateX(180px) translateY(-40px) scale(0.75) rotate(100deg);"></div></div></main></div></div></div>
```

## Reference source files

No reference source files were available.
