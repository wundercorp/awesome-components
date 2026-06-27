# Build Grid List in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Grid List screenshot](screenshot.png)

## Component

- Author group: `reapollo`
- Component: `grid-list`
- Variant: `simple-cards-with-dropdown`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: reapollo
- Component slug: grid-list
- Demo slug: simple-cards-with-dropdown
- Title: grid-list
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center p-8"><div><h2 class="text-sm font-medium text-muted-foreground">Favorite Book Collections</h2><ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3"><li class="col-span-1"><div class="border bg-card text-card-foreground flex flex-row w-full gap-0 rounded-md shadow-sm overflow-hidden py-0"><div class="flex w-16 shrink-0 items-center justify-center bg-primary text-sm font-medium text-primary-foreground">SF</div><div class="flex flex-1 items-center justify-between truncate p-0 bg-card"><div class="flex-1 truncate px-4 py-2 text-sm"><a href="#" class="font-medium text-foreground hover:text-muted-foreground">Science Fiction</a><p class="text-muted-foreground">37 Books</p></div><div class="shrink-0 pr-2"><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 rounded-full" type="button" id="radix-«r0»" aria-haspopup="menu" aria-expanded="false" data-state="closed"><span class="sr-only">Open options</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-vertical h-5 w-5" aria-hidden="true"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></button></div></div></div></li><li class="col-span-1"><div class="border bg-card text-card-foreground flex flex-row w-full gap-0 rounded-md shadow-sm overflow-hidden py-0"><div class="flex w-16 shrink-0 items-center justify-center bg-primary text-sm font-medium text-primary-foreground">MT</div><div class="flex flex-1 items-center justify-between truncate p-0 bg-card"><div class="flex-1 truncate px-4 py-2 text-sm"><a href="#" class="font-medium text-foreground hover:text-muted-foreground">Mystery Thrillers</a><p class="text-muted-foreground">29 Books</p></div><div class="shrink-0 pr-2"><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 rounded-full" type="button" id="radix-«r2»" aria-haspopup="menu" aria-expanded="false" data-state="closed"><span class="sr-only">Open options</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-vertical h-5 w-5" aria-hidden="true"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></button></div></div></div></li><li class="col-span-1"><div class="border bg-card text-card-foreground flex flex-row w-full gap-0 rounded-md shadow-sm overflow-hidden py-0"><div class="flex w-16 shrink-0 items-center justify-center bg-primary text-sm font-medium text-primary-foreground">HF</div><div class="flex flex-1 items-center justify-between truncate p-0 bg-card"><div class="flex-1 truncate px-4 py-2 text-sm"><a href="#" class="font-medium text-foreground hover:text-muted-foreground">Historical Fiction</a><p class="text-muted-foreground">23 Books</p></div><div class="shrink-0 pr-2"><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 rounded-full" type="button" id="radix-«r4»" aria-haspopup="menu" aria-expanded="false" data-state="closed"><span class="sr-only">Open options</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-vertical h-5 w-5" aria-hidden="true"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></button></div></div></div></li></ul></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
