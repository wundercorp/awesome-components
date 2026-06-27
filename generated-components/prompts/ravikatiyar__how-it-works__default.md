# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ravikatiyar/how-it-works/default
- Registry URL: https://21st.dev/r/ravikatiyar/how-it-works
- Author: ravikatiyar
- Component slug: how-it-works
- Demo slug: default
- Title: how-it-works
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ravikatiyar/how-it-works with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ravikatiyar__how-it-works__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ravikatiyar__how-it-works__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-background text-foreground"><section id="how-it-works" class="w-full bg-background py-16 sm:py-24"><div class="container mx-auto px-4"><div class="mx-auto mb-16 max-w-4xl text-center"><h2 class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">How it works</h2><p class="mt-4 text-lg text-muted-foreground">Our service uses advanced technologies for instant auto parts search across thousands of stores in your city</p></div><div class="relative mx-auto mb-8 w-full max-w-4xl"><div aria-hidden="true" class="absolute left-[16.6667%] top-1/2 h-0.5 w-[66.6667%] -translate-y-1/2 bg-border"></div><div class="relative grid grid-cols-3"><div class="flex h-8 w-8 items-center justify-center justify-self-center rounded-full bg-muted font-semibold text-foreground ring-4 ring-background">1</div><div class="flex h-8 w-8 items-center justify-center justify-self-center rounded-full bg-muted font-semibold text-foreground ring-4 ring-background">2</div><div class="flex h-8 w-8 items-center justify-center justify-self-center rounded-full bg-muted font-semibold text-foreground ring-4 ring-background">3</div></div></div><div class="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3"><div class="relative rounded-2xl border bg-card p-6 text-card-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-primary/50 hover:bg-muted"><div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search h-6 w-6" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg></div><h3 class="mb-2 text-xl font-semibold">Enter your query</h3><p class="mb-6 text-muted-foreground">Enter part name or article number, and we'll instantly check availability across thousands of stores.</p><ul class="space-y-3"><li class="flex items-center gap-3"><div class="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/20"><div class="h-2 w-2 rounded-full bg-primary"></div></div><span class="text-muted-foreground">Smart search understands even imprecise queries</span></li><li class="flex items-center gap-3"><div class="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/20"><div class="h-2 w-2 rounded-full bg-primary"></div></div><span class="text-muted-foreground">Automatic city detection</span></li><li class="flex items-center gap-3"><div class="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/20"><div class="h-2 w-2 rounded-full bg-primary"></div></div><span class="text-muted-foreground">Search history for quick access</span></li></ul></div><div class="relative rounded-2xl border bg-card p-6 text-card-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-primary/50 hover:bg-muted"><div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers h-6 w-6" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg></div><h3 class="mb-2 text-xl font-semibold">Choose the best offer</h3><p class="mb-6 text-muted-foreground">Compare prices, location and availability, choose the optimal option.</p><ul class="space-y-3"><li class="flex items-center gap-3"><div class="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/20"><div class="h-2 w-2 rounded-full bg-primary"></div></div><span class="text-muted-foreground">Sort by price, distance and rating</span></li><li class="flex items-center gap-3"><div class="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/20"><div class="h-2 w-2 rounded-full bg-primary"></div></div><span class="text-muted-foreground">Filter by availability and manufacturer</span></li><li class="flex items-center gap-3"><div class="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/20"><div class="h-2 w-2 rounded-full bg-primary"></div></div><span class="text-muted-foreground">Detailed information about each offer</span></li></ul></div><div class="relative rounded-2xl border bg-card p-6 text-card-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-primary/50 hover:bg-muted"><div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap h-6 w-6" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div><h3 class="mb-2 text-xl font-semibold">Contact the store</h3><p class="mb-6 text-muted-foreground">Call the store directly or request a callback through our service.</p><ul class="space-y-3"><li class="flex items-center gap-3"><div class="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/20"><div class="h-2 w-2 rounded-full bg-primary"></div></div><span class="text-muted-foreground">Direct contact without intermediaries</span></li><li class="flex items-center gap-3"><div class="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/20"><div class="h-2 w-2 rounded-full bg-primary"></div></div><span class="text-muted-foreground">Parts reservation capability</span></li><li class="flex items-center gap-3"><div class="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/20"><div class="h-2 w-2 rounded-full bg-primary"></div></div><span class="text-muted-foreground">Route building to store</span></li></ul></div></div></div></section></div></div></div></div>
```

## Public registry source files

No public registry source files were available.