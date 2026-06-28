# Build Features in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Features screenshot](screenshot.png)

## Component

- Author group: `tailark`
- Component: `features`
- Variant: `features-ai-chat`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: tailark
- Component slug: features
- Demo slug: features-ai-chat
- Title: features
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><section><div class="py-24"><div class="mx-auto w-full max-w-3xl px-6"><h2 class="text-foreground text-balance text-3xl font-semibold md:text-4xl"><span class="text-muted-foreground">Empowering Marketing teams with</span> AI-driven solutions</h2><div class="mt-12 grid gap-12 sm:grid-cols-2"><div class="col-span-full space-y-4"><div class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden px-6 sm:col-span-2" variant="soft"><div class="mask-b-from-75% mx-auto -mt-2 max-w-sm px-2 pt-8"><div class="rounded-lg border bg-card text-card-foreground shadow-sm p-4 transition-transform duration-200 group-hover:translate-y-0" aria-hidden="true"><div class="max-w-3/4 ml-auto w-fit"><p class="border-foreground/5 bg-foreground/5 mb-2 rounded-l-2xl rounded-t-2xl rounded-br border p-4 text-sm">Mollitia rerum est quisquam nobis ut cumque, dolore earum a voluptate esse. Illo, rerum esse?</p><span class="text-muted-foreground block text-right text-xs">Now</span></div><div class="w-fit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles size-3.5 fill-purple-300 stroke-purple-300" aria-hidden="true"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg><p class="mt-2 line-clamp-2 text-sm">How can I optimize my neural network to reduce inference time while maintaining accuracy?</p></div><div class="bg-foreground/5 -mx-3 -mb-3 mt-3 space-y-3 rounded-lg p-3"><div class="text-muted-foreground text-sm">Ask AI Assistant</div><div class="flex justify-between"><div class="flex gap-2"><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground size-7 rounded-2xl bg-transparent shadow-none"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground size-7 rounded-2xl bg-transparent shadow-none"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg></button></div><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 size-7 rounded-2xl bg-black"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up" aria-hidden="true"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg></button></div></div></div></div></div><div class="max-w-md sm:col-span-3"><h3 class="text-foreground text-lg font-semibold">Contextual AI Assistant</h3><p class="text-muted-foreground mt-3 text-balance">A personalized AI companion that understands your codebase and helps solve complex...</p></div></div><div class="grid grid-rows-[1fr_auto] space-y-4"><div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6" variant="soft"><div class="rounded-lg border bg-card text-card-foreground shadow-sm p-4" aria-hidden="true"><div class="relative hidden h-fit"><div class="absolute -left-1.5 bottom-1.5 rounded-md border-t border-red-700 bg-red-500 px-1 py-px text-[10px] font-medium text-white shadow-md shadow-red-500/35">PDF</div><div class="h-10 w-8 rounded-md border bg-gradient-to-b from-zinc-100 to-zinc-200"></div></div><div class="mb-0.5 text-sm font-semibold">AI Strategy Meeting</div><div class="mb-4 flex gap-2 text-sm"><span class="text-muted-foreground">2:30 - 3:45 PM</span></div><div class="mb-2 flex -space-x-1.5"><div class="flex -space-x-1.5"><div class="bg-background size-7 rounded-full border p-0.5 shadow shadow-zinc-950/5"><img class="aspect-square rounded-full object-cover" alt="Méschac Irung" height="460" width="460" src="https://avatars.githubusercontent.com/u/47919550?v=4"></div><div class="bg-background size-7 rounded-full border p-0.5 shadow shadow-zinc-950/5"><img class="aspect-square rounded-full object-cover" alt="Bernard Ngandu" height="460" width="460" src="https://avatars.githubusercontent.com/u/31113941?v=4"></div><div class="bg-background size-7 rounded-full border p-0.5 shadow shadow-zinc-950/5"><img class="aspect-square rounded-full object-cover" alt="Théo Balick" height="460" width="460" src="https://avatars.githubusercontent.com/u/68236786?v=4"></div><div class="bg-background size-7 rounded-full border p-0.5 shadow shadow-zinc-950/5"><img class="aspect-square rounded-full object-cover" alt="Glodie Lukose" height="460" width="460" src="https://avatars.githubusercontent.com/u/99137927?v=4"></div></div></div><div class="text-muted-foreground text-sm font-medium">ML Pipeline Discussion</div></div></div><div><h3 class="text-foreground text-lg font-semibold">AI Code Generation</h3><p class="text-muted-foreground mt-3 text-balance">Our advanced AI models transform natural language into production-ready code.</p></div></div><div class="grid grid-rows-[1fr_auto] space-y-4"><div class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden p-6" variant="soft"><div aria-hidden="true" class="relative"><div class="rounded-lg border bg-card text-card-foreground shadow-sm aspect-video w-4/5 translate-y-2 p-3"><div class="mb-3 grid grid-cols-[auto_1fr] gap-2"><div class="bg-background size-6 rounded-full border p-0.5 shadow shadow-zinc-950/5"><img class="aspect-square rounded-full object-cover" alt="M Irung" height="460" width="460" src="https://avatars.githubusercontent.com/u/47919550?v=4"></div><div class="flex items-center gap-1"><span class="text-muted-foreground line-clamp-1 text-sm font-medium">Méschac Irung</span><span class="text-muted-foreground/75 text-xs">2m</span></div></div><div class="ml-8 space-y-2"><div class="bg-foreground/10 h-2 rounded-full"></div><div class="bg-foreground/10 h-2 w-3/5 rounded-full"></div><div class="bg-foreground/10 h-2 w-1/2 rounded-full"></div></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-signature ml-8 mt-3 size-5" aria-hidden="true"><path d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"></path><path d="M3 21h18"></path></svg></div><div class="rounded-lg border bg-card text-card-foreground shadow-sm aspect-3/5 absolute right-0 top-4 flex w-2/5 translate-y-4 p-2 transition-transform duration-200 ease-in-out group-hover:rotate-3"><div class="bg-foreground/5 m-auto flex size-10 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play fill-foreground/50 stroke-foreground/50 m-auto size-4" aria-hidden="true"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg></div></div></div></div><div><h3 class="text-foreground text-lg font-semibold">Intelligent Code Review</h3><p class="text-muted-foreground mt-3 text-balance">Our AI analyzes your code for bugs, security issues, and optimization opportunities.</p></div></div></div></div></div></section></div></div></div>
```

## Reference source files

No reference source files were available.
