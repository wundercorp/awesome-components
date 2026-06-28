# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/shadcnblockscom/blog7/default
- Registry URL: https://21st.dev/r/shadcnblockscom/blog7
- Author: shadcnblockscom
- Component slug: blog7
- Demo slug: default
- Title: blog7
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/shadcnblockscom/blog7 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/shadcnblockscom__blog7__default.html
- Local screenshot file: generated-21st-prompts/screenshots/shadcnblockscom__blog7__default.png

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
<div id="root"><div class="bg-background text-foreground"><div class="w-full"><section class="py-32"><div class="container mx-auto flex flex-col items-center gap-16 lg:px-16"><div class="text-center"><div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6">Latest Updates</div><h2 class="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">Blog Posts</h2><p class="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.</p><a href="https://www.shadcnblocks.com" target="_blank" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2 w-full sm:w-auto">Explore all posts<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2 size-4" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a></div><div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"><div class="rounded-lg border bg-card text-card-foreground shadow-sm grid grid-rows-[auto_auto_1fr_auto]"><div class="aspect-[16/9] w-full"><a href="https://www.shadcnblocks.com" target="_blank" class="transition-opacity duration-200 fade-in hover:opacity-70"><img alt="Build websites in minutes with shadcn/ui" class="h-full w-full object-cover object-center" src="https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg"></a></div><div class="flex flex-col space-y-1.5 p-6"><h3 class="text-lg font-semibold hover:underline md:text-xl"><a href="https://www.shadcnblocks.com" target="_blank">Build websites in minutes with shadcn/ui</a></h3></div><div class="p-6 pt-0"><p class="text-muted-foreground">Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.</p></div><div class="flex items-center p-6 pt-0"><a href="https://www.shadcnblocks.com" target="_blank" class="flex items-center text-foreground hover:underline">Read more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2 size-4" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a></div></div><div class="rounded-lg border bg-card text-card-foreground shadow-sm grid grid-rows-[auto_auto_1fr_auto]"><div class="aspect-[16/9] w-full"><a href="https://www.shadcnblocks.com" target="_blank" class="transition-opacity duration-200 fade-in hover:opacity-70"><img alt="Easily copy code to build your website" class="h-full w-full object-cover object-center" src="https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg"></a></div><div class="flex flex-col space-y-1.5 p-6"><h3 class="text-lg font-semibold hover:underline md:text-xl"><a href="https://www.shadcnblocks.com" target="_blank">Easily copy code to build your website</a></h3></div><div class="p-6 pt-0"><p class="text-muted-foreground">Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.</p></div><div class="flex items-center p-6 pt-0"><a href="https://www.shadcnblocks.com" target="_blank" class="flex items-center text-foreground hover:underline">Read more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2 size-4" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a></div></div><div class="rounded-lg border bg-card text-card-foreground shadow-sm grid grid-rows-[auto_auto_1fr_auto]"><div class="aspect-[16/9] w-full"><a href="https://www.shadcnblocks.com" target="_blank" class="transition-opacity duration-200 fade-in hover:opacity-70"><img alt="The future of web design" class="h-full w-full object-cover object-center" src="https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg"></a></div><div class="flex flex-col space-y-1.5 p-6"><h3 class="text-lg font-semibold hover:underline md:text-xl"><a href="https://www.shadcnblocks.com" target="_blank">The future of web design</a></h3></div><div class="p-6 pt-0"><p class="text-muted-foreground">Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.</p></div><div class="flex items-center p-6 pt-0"><a href="https://www.shadcnblocks.com" target="_blank" class="flex items-center text-foreground hover:underline">Read more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2 size-4" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a></div></div></div></div></section></div></div></div>
```

## Public registry source files

No public registry source files were available.