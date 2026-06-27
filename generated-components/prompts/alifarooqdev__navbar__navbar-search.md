# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/alifarooqdev/navbar/navbar-search
- Registry URL: https://21st.dev/r/alifarooqdev/navbar
- Author: alifarooqdev
- Component slug: navbar
- Demo slug: navbar-search
- Title: navbar
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/alifarooqdev/navbar with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/alifarooqdev__navbar__navbar-search.html
- Local screenshot file: generated-21st-prompts/screenshots/alifarooqdev__navbar__navbar-search.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><header class="container mx-auto flex h-14 items-center justify-between gap-4"><div class="flex flex-1 items-center justify-start gap-2 md:gap-4"><button class="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground extend-touch-target block size-8 touch-manipulation items-center justify-start gap-2.5 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent md:hidden dark:hover:bg-transparent" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-«r0»" data-state="closed"><div class="relative flex items-center justify-center"><div class="relative size-4"><span class="bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100 top-1"></span><span class="bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100 top-2.5"></span></div><span class="sr-only">Toggle Menu</span></div></button><a href="#" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 dark:hover:bg-accent text-accent-foreground [&amp;_svg:not([class*=&quot;size-&quot;])]:size-6"><svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"></svg></a><nav aria-label="Main" data-orientation="horizontal" dir="ltr" class="relative z-10 flex max-w-max flex-1 items-center justify-center max-md:hidden"><div style="position: relative;"><ul data-orientation="horizontal" class="group flex flex-1 list-none items-center justify-center space-x-1" dir="ltr"><li><a href="#" data-active="true" class="rounded-md px-3 py-1.5 font-medium" data-radix-collection-item="">Products</a></li><li><a href="#" class="rounded-md px-3 py-1.5 font-medium" data-radix-collection-item="">Pricing</a></li><li><a href="#" class="rounded-md px-3 py-1.5 font-medium" data-radix-collection-item="">Docs</a></li><li><a href="#" class="rounded-md px-3 py-1.5 font-medium" data-radix-collection-item="">About</a></li></ul></div><div class="absolute left-0 top-full flex justify-center"></div></nav></div><div class="flex items-center justify-end gap-2"><button class="items-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-secondary/80 px-4 py-2 bg-surface text-surface-foreground/60 dark:bg-card relative h-8 w-full justify-start pl-2.5 font-normal shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64 mr-2 hidden sm:flex"><span class="hidden lg:inline-flex">Search...</span><span class="inline-flex lg:hidden">Search...</span><div class="absolute top-1.5 right-1.5 hidden gap-1 sm:flex"><kbd class="bg-background text-muted-foreground pointer-events-none flex h-5 items-center justify-center gap-1 rounded border px-1 font-sans text-[0.7rem] font-medium select-none [&amp;_svg:not([class*=&quot;size-&quot;])]:size-3">⌘</kbd><kbd class="bg-background text-muted-foreground pointer-events-none flex h-5 items-center justify-center gap-1 rounded border px-1 font-sans text-[0.7rem] font-medium select-none [&amp;_svg:not([class*=&quot;size-&quot;])]:size-3 aspect-square">K</kbd></div></button><div data-orientation="vertical" role="none" class="shrink-0 bg-border h-full w-[1px] hidden data-[orientation=vertical]:h-5 sm:flex"></div><a href="#" class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-md px-3 size-8 cursor-pointer"><svg viewBox="0 0 438.549 438.549" fill="currentColor"></svg></a><div data-orientation="vertical" role="none" class="shrink-0 bg-border h-full w-[1px] data-[orientation=vertical]:h-5"></div><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground group/toggle extend-touch-target size-8 cursor-pointer" title="Toggle theme"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4.5"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M12 3l0 18"></path><path d="M12 9l4.65 -4.65"></path><path d="M12 14.3l7.37 -7.37"></path><path d="M12 19.6l8.85 -8.85"></path></svg><span class="sr-only">Toggle theme</span></button></div></header></div></div></div>
```

## Public registry source files

No public registry source files were available.