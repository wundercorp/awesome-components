# Build Bento in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Bento screenshot](screenshot.png)

## Component

- Author group: `kinfe123`
- Component: `bento`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: kinfe123
- Component slug: bento
- Demo slug: default
- Title: bento
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="pt-32 container mx-auto bg-[#] min-w-screen flex flex-col p-10 bg-gray-950/10"><h1 class="font-geistMono tracking-tight text-3xl md:text-5xl">Sales</h1><p class="max-w-3xl text-2xl/8 font-medium tracking-tight mt-2 bg-gradient-to-br from-black/90 to-black/80 bg-clip-text text-transparent 
            from-black to-gray-400/20
            dark:from-white dark:to-white/40">Know more about your customers than they do.</p><div class="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2"><div class="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl group relative flex flex-col overflow-hidden rounded-lg  bg-black dark:bg-transparent transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] bg-black   shadow-sm ring-1 ring-white/10 data-[dark]:bg-gray-800 data-[dark]:ring-white/15"><div class="relative h-[29rem] shrink-0 "><div class="absolute inset-0 bg-[url(https://framerusercontent.com/images/ghyfFEStl6BNusZl0ZQd5r7JpM.png)] object-fill"></div></div><div class="relative p-10  z-20 isolate mt-[-110px] h-[14rem] backdrop-blur-xl text-white "><h1>Insight</h1><p class="mt-1 text-2xl/8 font-medium tracking-tight dark:text-gray-100 text-gray-150 group-data-[dark]:text-white">Get perfect clarity</p><p class="mt-2 max-w-[600px] text-sm/6 text-gray-100 dark:text-gray-300 group-data-[dark]:text-gray-400">PerkAI uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more.</p></div></div><div class="lg:col-span-3 lg:rounded-tr-4xl group relative flex flex-col overflow-hidden rounded-lg  bg-black dark:bg-transparent transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] bg-black   shadow-sm ring-1 ring-white/10 data-[dark]:bg-gray-800 data-[dark]:ring-white/15"><div class="relative h-[29rem] shrink-0 "><div class="absolute inset-0 bg-[url(https://framerusercontent.com/images/7CJtT0Pu3w1vNADktNltoMFC9J4.png)] object-fill"></div></div><div class="relative p-10  z-20 isolate mt-[-110px] h-[14rem] backdrop-blur-xl text-white "><h1>Analysis</h1><p class="mt-1 text-2xl/8 font-medium tracking-tight dark:text-gray-100 text-gray-150 group-data-[dark]:text-white">Undercut your competitors</p><p class="mt-2 max-w-[600px] text-sm/6 text-gray-100 dark:text-gray-300 group-data-[dark]:text-gray-400">With our advanced data mining, you’ll know which companies your leads are talking to and exactly how much they’re being charged.</p></div></div><div class="lg:col-span-2 lg:rounded-bl-4xl group relative flex flex-col overflow-hidden rounded-lg  bg-black dark:bg-transparent transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] bg-black   shadow-sm ring-1 ring-white/10 data-[dark]:bg-gray-800 data-[dark]:ring-white/15"><div class="relative h-[29rem] shrink-0 "><div class="absolute  inset-0 -top-20 -left-60 bg-[url(https://framerusercontent.com/images/gR21e8Wh6l3pU6CciDrqt8wjHM.png)] object-scale-down  bg-black"></div></div><div class="relative p-10  z-20 isolate mt-[-110px] h-[14rem] backdrop-blur-xl text-white "><h1>Speed</h1><p class="mt-1 text-2xl/8 font-medium tracking-tight dark:text-gray-100 text-gray-150 group-data-[dark]:text-white">Built for power users</p><p class="mt-2 max-w-[600px] text-sm/6 text-gray-100 dark:text-gray-300 group-data-[dark]:text-gray-400">It’s never been faster to cold email your entire contact list using our streamlined keyboard shortcuts.</p></div></div><div class="lg:col-span-2 group relative flex flex-col overflow-hidden rounded-lg  bg-black dark:bg-transparent transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] bg-black   shadow-sm ring-1 ring-white/10 data-[dark]:bg-gray-800 data-[dark]:ring-white/15"><div class="relative h-[29rem] shrink-0 "><div class="absolute inset-0 bg-[url(https://framerusercontent.com/images/PTO3RQ3S65zfZRFEGZGpiOom6aQ.png)] object-contain"></div></div><div class="relative p-10  z-20 isolate mt-[-110px] h-[14rem] backdrop-blur-xl text-white "><h1>Source</h1><p class="mt-1 text-2xl/8 font-medium tracking-tight dark:text-gray-100 text-gray-150 group-data-[dark]:text-white">Get the furthest reach</p><p class="mt-2 max-w-[600px] text-sm/6 text-gray-100 dark:text-gray-300 group-data-[dark]:text-gray-400">Bypass those inconvenient privacy laws to source leads from the most unexpected places.</p></div></div><div class="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl group relative flex flex-col overflow-hidden rounded-lg  bg-black dark:bg-transparent transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] bg-black   shadow-sm ring-1 ring-white/10 data-[dark]:bg-gray-800 data-[dark]:ring-white/15"><div class="relative h-[29rem] shrink-0 "><div class="absolute inset-0 -top-44 -left-60 bg-[url(https://framerusercontent.com/images/h496iPSwtSnGZwpJyErl6cLWdtE.png)] object-contain"></div></div><div class="relative p-10  z-20 isolate mt-[-110px] h-[14rem] backdrop-blur-xl text-white "><h1>Limitless</h1><p class="mt-1 text-2xl/8 font-medium tracking-tight dark:text-gray-100 text-gray-150 group-data-[dark]:text-white">Sell globally</p><p class="mt-2 max-w-[600px] text-sm/6 text-gray-100 dark:text-gray-300 group-data-[dark]:text-gray-400">PerkAI helps you sell in locations currently under international embargo.</p></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
