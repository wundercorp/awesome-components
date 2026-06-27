# Build Aero Hero 2 in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Aero Hero 2 screenshot](screenshot.png)

## Component

- Author group: `cnippet_dev`
- Component: `aero-hero-2`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: cnippet_dev
- Component slug: aero-hero-2
- Demo slug: default
- Title: aero-hero-2
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><section class="relative flex h-screen w-full items-end justify-center"><div class="absolute inset-0 h-full bg-cover" style="background-image: url(&quot;https://images.cnippet.dev/image/upload/v1770400411/img_14002.jpg&quot;); background-position: center bottom;"><div class="absolute inset-0 bg-linear-to-t from-black/70"></div></div><div class="relative z-10 w-full max-w-7xl px-6 pb-20 text-center text-white md:px-0"><div class="flex items-center justify-between text-left"><div class="max-w-3xl space-y-6"><h1 class="font-kanturmuy font-normal text-5xl text-white tracking-tighter md:text-7xl">Sustainable Solutions for a Better Future</h1><p class="max-w-2xl font-light text-lg text-white/90 md:text-xl">Empowering businesses and communities to thrive in a low-carbon world through tailored clean energy solutions.</p></div><div class="mt-auto space-y-7"><div class="mt-8 flex flex-wrap items-center gap-3 lg:mt-auto"><div class="flex -space-x-3"><span class="relative flex shrink-0 overflow-hidden rounded-full size-12 border-2 border-[#e1fcad] transition-all duration-300 hover:grayscale-0 dark:border-[#e1fcad]"><img class="aspect-square h-full w-full" src="https://images.cnippet.dev/image/upload/v1770400411/a2.jpg"></span><span class="relative flex shrink-0 overflow-hidden rounded-full size-12 border-2 border-[#e1fcad] transition-all duration-300 hover:grayscale-0 dark:border-[#e1fcad]"><img class="aspect-square h-full w-full" src="https://images.cnippet.dev/image/upload/v1770400411/a3.jpg"></span><span class="relative flex shrink-0 overflow-hidden rounded-full size-12 border-2 border-[#e1fcad] transition-all duration-300 hover:grayscale-0 dark:border-[#e1fcad]"><img class="aspect-square h-full w-full" src="https://images.cnippet.dev/image/upload/v1770400411/a4.jpg"></span><span class="relative flex shrink-0 overflow-hidden rounded-full size-12 border-2 border-[#e1fcad] transition-all duration-300 hover:grayscale-0 dark:border-[#e1fcad]"><img class="aspect-square h-full w-full" src="https://images.cnippet.dev/image/upload/v1770400411/a5.jpg"></span></div><div class="flex flex-col font-normal text-sm"><span class="text-base sm:text-lg">15,000+</span><span class="">Teams Connected</span></div></div><div class="flex w-fit gap-6"><button type="button" class="relative shrink-0 whitespace-nowrap border text-base outline-none transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64 sm:text-sm [&amp;_svg:not([class*='opacity-'])]:opacity-80 [&amp;_svg:not([class*='size-'])]:size-4.5 sm:[&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:pointer-events-none [&amp;_svg]:-mx-0.5 [&amp;_svg]:shrink-0 h-9 sm:h-8 border-primary text-primary-foreground shadow-primary/24 [:active,[data-pressed]]:inset-shadow-[0_1px_--theme(--color-black/8%)] [:disabled,:active,[data-pressed]]:shadow-none group not-disabled:inset-shadow-none mx-auto flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent px-0 py-5 font-normal shadow-none hover:bg-transparent [:hover,[data-pressed]]:bg-transparent" data-slot="button"><span class="rounded-full bg-[#e1fcad] px-6 py-3 text-black duration-500 ease-in-out group-hover:bg-[#122023] group-hover:text-[#e1fcad] group-hover:transition-colors">Start a Project</span><div class="relative flex h-fit cursor-pointer items-center overflow-hidden rounded-full bg-[#e1fcad] p-5 text-black duration-500 ease-in-out group-hover:bg-[#122023] group-hover:text-[#e1fcad] group-hover:transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></div></button></div></div></div></div></section></div></div></div>
```

## Reference source files

No reference source files were available.
