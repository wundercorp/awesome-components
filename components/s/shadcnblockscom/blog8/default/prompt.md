# Build Blog8 in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Blog8 screenshot](screenshot.png)

## Component

- Author group: `shadcnblockscom`
- Component: `blog8`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: shadcnblockscom
- Component slug: blog8
- Demo slug: default
- Title: blog8
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
<div id="root"><div class="bg-background text-foreground"><div class="w-full"><section class="py-32"><div class="container flex flex-col items-center gap-16"><div class="text-center"><h2 class="mx-auto mb-6 text-pretty text-3xl font-semibold md:text-4xl lg:max-w-3xl">Blog Posts</h2><p class="mx-auto max-w-2xl text-muted-foreground md:text-lg">Discover the latest insights and tutorials about modern web development, UI design, and component-driven architecture.</p></div><div class="grid gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20"><div class="rounded-lg text-card-foreground order-last border-0 bg-transparent shadow-none sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2"><div class="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12"><div class="sm:col-span-5"><div class="mb-4 md:mb-6"><div class="flex flex-wrap gap-3 text-xs uppercase tracking-wider text-muted-foreground md:gap-5 lg:gap-6"><span>Web Design</span><span>UI Development</span></div></div><h3 class="text-xl font-semibold md:text-2xl lg:text-3xl"><a href="https://shadcnblocks.com" target="_blank" class="hover:underline">Building Modern UIs: A Deep Dive into Shadcn and React Components</a></h3><p class="mt-4 text-muted-foreground md:mt-5">Join us for an in-depth exploration of building modern user interfaces using shadcn/ui and React. Learn best practices and advanced techniques.</p><div class="mt-6 flex items-center space-x-4 text-sm md:mt-8"><span class="text-muted-foreground">Sarah Chen</span><span class="text-muted-foreground">•</span><span class="text-muted-foreground">15 Feb 2024</span></div><div class="mt-6 flex items-center space-x-2 md:mt-8"><a href="https://shadcnblocks.com" target="_blank" class="inline-flex items-center font-semibold hover:underline md:text-base"><span>Read more</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2 size-4 transition-transform" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a></div></div><div class="order-first sm:order-last sm:col-span-5"><a href="https://shadcnblocks.com" target="_blank" class="block"><div class="aspect-[16/9] overflow-clip rounded-lg border border-border"><img alt="Building Modern UIs: A Deep Dive into Shadcn and React Components" class="h-full w-full object-cover transition-opacity duration-200 fade-in hover:opacity-70" src="https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg"></div></a></div></div></div><div class="rounded-lg text-card-foreground order-last border-0 bg-transparent shadow-none sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2"><div class="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12"><div class="sm:col-span-5"><div class="mb-4 md:mb-6"><div class="flex flex-wrap gap-3 text-xs uppercase tracking-wider text-muted-foreground md:gap-5 lg:gap-6"><span>Web Design</span><span>CSS</span></div></div><h3 class="text-xl font-semibold md:text-2xl lg:text-3xl"><a href="https://shadcnblocks.com" target="_blank" class="hover:underline">Mastering Tailwind CSS: From Basics to Advanced Techniques</a></h3><p class="mt-4 text-muted-foreground md:mt-5">Discover how to leverage the full power of Tailwind CSS to create beautiful, responsive websites with clean and maintainable code.</p><div class="mt-6 flex items-center space-x-4 text-sm md:mt-8"><span class="text-muted-foreground">Michael Park</span><span class="text-muted-foreground">•</span><span class="text-muted-foreground">22 Feb 2024</span></div><div class="mt-6 flex items-center space-x-2 md:mt-8"><a href="https://shadcnblocks.com" target="_blank" class="inline-flex items-center font-semibold hover:underline md:text-base"><span>Read more</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2 size-4 transition-transform" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a></div></div><div class="order-first sm:order-last sm:col-span-5"><a href="https://shadcnblocks.com" target="_blank" class="block"><div class="aspect-[16/9] overflow-clip rounded-lg border border-border"><img alt="Mastering Tailwind CSS: From Basics to Advanced Techniques" class="h-full w-full object-cover transition-opacity duration-200 fade-in hover:opacity-70" src="https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg"></div></a></div></div></div></div></div></section></div></div></div>
```

## Reference source files

No reference source files were available.
