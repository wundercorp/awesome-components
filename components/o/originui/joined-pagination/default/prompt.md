# Build Joined Pagination in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Joined Pagination screenshot](screenshot.png)

## Component

- Author group: `originui`
- Component: `joined-pagination`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: originui
- Component slug: joined-pagination
- Demo slug: default
- Title: joined-pagination
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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="flex min-w-[300px] flex-col space-y-4 rounded-lg border p-4"><div class="space-y-2"><div class="rounded-md bg-muted/50 p-2 text-sm">Item 1</div><div class="rounded-md bg-muted/50 p-2 text-sm">Item 2</div><div class="rounded-md bg-muted/50 p-2 text-sm">Item 3</div><div class="rounded-md bg-muted/50 p-2 text-sm">Item 4</div><div class="rounded-md bg-muted/50 p-2 text-sm">Item 5</div></div><nav role="navigation" aria-label="pagination" class="mx-auto flex w-full justify-center"><ul class="items-center inline-flex gap-0 -space-x-px rounded-lg border shadow-sm shadow-black/5 rtl:space-x-reverse"><li class="[&amp;:first-child&gt;a]:rounded-s-lg [&amp;:last-child&gt;a]:rounded-e-lg"><a class="w-9 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border-input bg-background shadow-black/5 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-none border-0 shadow-none focus-visible:z-10 aria-disabled:pointer-events-none [&amp;[aria-disabled]&gt;svg]:opacity-50" href="#" aria-label="Go to previous page" aria-disabled="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></a></li><li class=""><a aria-current="page" class="w-9 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border-input shadow-black/5 hover:text-accent-foreground h-9 px-4 py-2 rounded-none border-0 shadow-none focus-visible:z-10 bg-accent hover:bg-accent/80" href="#">1</a></li><li class=""><a class="w-9 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border-input bg-background shadow-black/5 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-none border-0 shadow-none focus-visible:z-10" href="#">2</a></li><li class=""><a class="w-9 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border-input bg-background shadow-black/5 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-none border-0 shadow-none focus-visible:z-10" href="#">3</a></li><li class=""><a class="w-9 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border-input bg-background shadow-black/5 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-none border-0 shadow-none focus-visible:z-10" href="#">4</a></li><li class=""><a class="w-9 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border-input bg-background shadow-black/5 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 pointer-events-none rounded-none border-0 shadow-none">...</a></li><li class="[&amp;:first-child&gt;a]:rounded-s-lg [&amp;:last-child&gt;a]:rounded-e-lg"><a class="w-9 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border-input bg-background shadow-black/5 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-none border-0 shadow-none focus-visible:z-10 aria-disabled:pointer-events-none [&amp;[aria-disabled]&gt;svg]:opacity-50" href="#" aria-label="Go to next page" aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></a></li></ul></nav></div></div></div></div>
```

## Reference source files

No reference source files were available.
