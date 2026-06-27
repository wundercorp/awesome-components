# Build Swap Card in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Swap Card screenshot](screenshot.png)

## Component

- Author group: `ravikatiyar`
- Component: `swap-card`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ravikatiyar
- Component slug: swap-card
- Demo slug: default
- Title: swap-card
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen bg-background flex items-center justify-center p-4"><div class="bg-card text-card-foreground w-full max-w-md mx-auto p-4 sm:p-2 rounded-3xl shadow-lg border"><div class="p-2 sm:p-4"><div class="flex justify-center mb-6"><div class="bg-muted p-1 rounded-full flex items-center"><button class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 py-2 rounded-full px-6 sm:px-8 text-md font-medium">Swap</button><button class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 py-2 rounded-full px-6 sm:px-8 text-md font-medium">Send</button><button class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 py-2 rounded-full px-6 sm:px-8 text-md font-medium">Buy</button></div></div><div class="relative"><div class="bg-muted/50 rounded-2xl" style="opacity: 1; transform: none;"><div class="border text-card-foreground bg-background rounded-2xl border-none shadow-none"><div class="flex flex-col space-y-1.5 p-4"><span class="text-sm text-muted-foreground">Sell</span></div><div class="p-4 pt-0"><div class="flex items-center justify-between gap-4"><input class="flex w-full rounded-lg border border-input text-foreground shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50 text-4xl font-semibold h-auto p-0 border-none focus-visible:ring-0 shadow-none bg-transparent" placeholder="0" type="number" value="10"><button class="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground py-2 rounded-full h-12 px-4 gap-2 text-lg" type="button" id="radix-«r2»" aria-haspopup="menu" aria-expanded="false" data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-coins h-6 w-6" aria-hidden="true"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>ETH<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 text-muted-foreground" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></div><div class="flex items-center justify-between mt-2"><span class="text-sm text-muted-foreground">$38409.20</span><div class="flex items-center gap-2"><span class="text-sm text-muted-foreground">52.32 ETH</span><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-3 rounded-full h-7">Max</button></div></div></div></div></div><div class="bg-muted/50 rounded-2xl mt-1" style="opacity: 1; transform: none;"><div class="border text-card-foreground bg-background rounded-2xl border-none shadow-none"><div class="flex flex-col space-y-1.5 p-4"><span class="text-sm text-muted-foreground">Buy</span></div><div class="p-4 pt-0"><div class="flex items-center justify-between gap-4"><input class="flex w-full rounded-lg border border-input text-foreground shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50 text-4xl font-semibold h-auto p-0 border-none focus-visible:ring-0 shadow-none bg-transparent" placeholder="0" type="number" value="147.712"><button class="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground py-2 rounded-full h-12 px-4 gap-2 text-lg" type="button" id="radix-«r6»" aria-haspopup="menu" aria-expanded="false" data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-piggy-bank h-6 w-6" aria-hidden="true"><path d="M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z"></path><path d="M16 10h.01"></path><path d="M2 8v1a2 2 0 0 0 2 2h1"></path></svg>AAVE<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 text-muted-foreground" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></div><div class="flex items-center justify-between mt-2"><span class="text-sm text-muted-foreground">$38257.41</span></div></div></div></div><div class="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center"><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full h-10 w-10 border-4 border-background"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-right h-5 w-5 rotate-90" aria-hidden="true"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg></button></div></div><button class="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-8 w-full mt-6 h-14 text-lg rounded-2xl">Swap</button><div class="text-center text-sm text-muted-foreground mt-4">1 AAVE = 0.0676995 ETH ($259.00) | $7.44 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down inline h-4 w-4" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
