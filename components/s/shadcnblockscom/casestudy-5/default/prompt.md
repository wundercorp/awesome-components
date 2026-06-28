# Build Casestudy 5 in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Casestudy 5 screenshot](screenshot.png)

## Component

- Author group: `shadcnblockscom`
- Component: `casestudy-5`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: shadcnblockscom
- Component slug: casestudy-5
- Demo slug: default
- Title: casestudy-5
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
<div id="root"><section class="py-32"><div class="container mx-auto"><div class="border border-border"><a href="https://shadcnblocks.com" class="group grid gap-4 overflow-hidden px-6 transition-colors duration-500 ease-out hover:bg-muted/40 lg:grid-cols-2 xl:px-28"><div class="flex flex-col justify-between gap-4 pt-8 md:pt-16 lg:pb-16"><div class="flex items-center gap-2 text-2xl font-medium"><img alt="logo" class="h-9" src="https://shadcnblocks.com/images/block/block-1.svg">Acme</div><div><span class="text-xs text-muted-foreground sm:text-sm">ARTIFICIAL INTELLIGENCE / ENTERPRISE SOLUTIONS</span><h2 class="mt-4 mb-5 text-2xl font-semibold text-balance sm:text-3xl sm:leading-10">Workflow Automation for the Digital Age.<span class="font-medium text-primary/50 transition-colors duration-500 ease-out group-hover:text-primary/70"> How to automate your workflow with AI.</span></h2><div class="flex items-center gap-2 font-medium">Read case study<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" aria-hidden="true"><path d="M18 8L22 12L18 16"></path><path d="M2 12H22"></path></svg></div></div></div><div class="relative isolate py-16"><div class="relative isolate h-full border border-border bg-background p-2"><div class="h-full overflow-hidden"><img alt="placeholder" class="aspect-[14/9] h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" src="https://shadcnblocks.com/images/block/placeholder-1.svg"></div></div></div></a><div class="flex border-t border-border"><div class="hidden w-28 shrink-0 bg-[radial-gradient(var(--muted-foreground)_1px,transparent_1px)] [background-size:10px_10px] opacity-15 xl:block"></div><div class="grid lg:grid-cols-2"><a href="https://shadcnblocks.com" class="group flex flex-col justify-between gap-12 border-border bg-background px-6 py-8 transition-colors duration-500 ease-out hover:bg-muted/40 md:py-16 lg:pb-16 xl:gap-16 xl:border-l xl:pl-8"><div class="flex items-center gap-2 text-2xl font-medium"><img alt="logo" class="h-9" src="https://shadcnblocks.com/images/block/block-2.svg">Super</div><div><span class="text-xs text-muted-foreground sm:text-sm">DATA MIGRATION / SOFTWARE SOLUTIONS</span><h2 class="mt-4 mb-5 text-2xl font-semibold text-balance sm:text-3xl sm:leading-10">Enhance data migration with AI.<span class="font-medium text-primary/50 transition-colors duration-500 ease-out group-hover:text-primary/70"> A data migration platform toward a data-driven future.</span></h2><div class="flex items-center gap-2 font-medium">Read case study<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" aria-hidden="true"><path d="M18 8L22 12L18 16"></path><path d="M2 12H22"></path></svg></div></div></a><a href="https://shadcnblocks.com" class="group flex flex-col justify-between gap-12 border-border bg-background px-6 py-8 transition-colors duration-500 ease-out hover:bg-muted/40 md:py-16 lg:pb-16 xl:gap-16 border-t lg:border-t-0 lg:border-l xl:border-r xl:pl-8"><div class="flex items-center gap-2 text-2xl font-medium"><img alt="logo" class="h-9" src="https://shadcnblocks.com/images/block/block-3.svg">Advent</div><div><span class="text-xs text-muted-foreground sm:text-sm">ARTIFICIAL INTELLIGENCE / DATA SOLUTIONS</span><h2 class="mt-4 mb-5 text-2xl font-semibold text-balance sm:text-3xl sm:leading-10">Strategic AI for a future-proof business.<span class="font-medium text-primary/50 transition-colors duration-500 ease-out group-hover:text-primary/70"> Mastering AI for more efficient operations.</span></h2><div class="flex items-center gap-2 font-medium">Read case study<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" aria-hidden="true"><path d="M18 8L22 12L18 16"></path><path d="M2 12H22"></path></svg></div></div></a></div><div class="hidden w-28 shrink-0 bg-[radial-gradient(var(--muted-foreground)_1px,transparent_1px)] [background-size:10px_10px] opacity-15 xl:block"></div></div></div></div></section></div>
```

## Reference source files

No reference source files were available.
