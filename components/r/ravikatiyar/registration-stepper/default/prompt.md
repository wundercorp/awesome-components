# Build Registration Stepper in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Registration Stepper screenshot](screenshot.png)

## Component

- Author group: `ravikatiyar`
- Component: `registration-stepper`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ravikatiyar
- Component slug: registration-stepper
- Demo slug: default
- Title: registration-stepper
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-background p-10"><div class="w-screen max-w-md mx-auto"><div class="rounded-xl border bg-card text-card-foreground shadow-sm"><div class="flex flex-col space-y-1.5 p-6"><div class="flex items-center justify-between"><h3 class="font-semibold leading-none tracking-tight text-lg">karigirwa.eth</h3><span class="text-xs font-semibold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">Available</span></div></div><div class="p-6 pt-0"><ol class="space-y-2"><li class="overflow-hidden"><div class="flex items-start gap-4"><div class="flex flex-col items-center"><div class="relative flex h-8 w-8 items-center justify-center"><div style="transform: scale(1.1);"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle h-8 w-8 text-primary" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle></svg><span class="absolute text-sm font-semibold inset-0 flex items-center justify-center text-primary-foreground bg-primary rounded-full h-6 w-6 m-1">1</span></div></div><div class="mt-2 h-8 w-px bg-border"></div></div><div class="flex-1"><div class="flex items-center justify-between cursor-pointer"><div><h4 class="font-medium text-foreground">Commit</h4><p class="text-sm text-muted-foreground">Complete a transaction to begin the timer</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 text-muted-foreground transition-transform rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div><div class="overflow-hidden" style="height: auto; opacity: 1;"><div class="pt-4"><div class="space-y-4 mt-2"><div class="flex justify-between items-center p-2 border rounded-lg"><p class="font-mono font-medium">20.5 Gwei</p><div class="flex items-center text-sm border rounded-md p-1 bg-muted"><button class="px-3 py-1 rounded-sm bg-background text-foreground shadow-sm">ETH</button><button class="px-3 py-1 text-muted-foreground">USD</button></div></div><div class="space-y-2 text-sm"><div class="flex justify-between items-center text-sm"><p class="text-muted-foreground">1 year registration</p><p class="font-medium text-foreground">0.036 ETH</p></div><div class="flex justify-between items-center text-sm"><p class="text-muted-foreground">Est. network fee</p><p class="font-medium text-foreground">0.0096 ETH</p></div></div><div class="border-t pt-2"><div class="flex justify-between items-center text-sm"><p class="text-muted-foreground">Estimated total</p><p class="font-medium text-foreground">0.0457 ETH</p></div></div><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">Commit</button></div></div></div></div></div></li><li class="overflow-hidden"><div class="flex items-start gap-4"><div class="flex flex-col items-center"><div class="relative flex h-8 w-8 items-center justify-center"><div style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle h-8 w-8 text-muted-foreground" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle></svg><span class="absolute text-sm font-semibold text-muted-foreground inset-0 flex items-center justify-center">2</span></div></div><div class="mt-2 h-8 w-px bg-border"></div></div><div class="flex-1"><div class="flex items-center justify-between cursor-pointer"><div><h4 class="font-medium">Wait 60 seconds</h4><p class="text-sm text-muted-foreground">This timer prevents front-running</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 text-muted-foreground transition-transform" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></div></div></li><li class="overflow-hidden"><div class="flex items-start gap-4"><div class="flex flex-col items-center"><div class="relative flex h-8 w-8 items-center justify-center"><div style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle h-8 w-8 text-muted-foreground" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle></svg><span class="absolute text-sm font-semibold text-muted-foreground inset-0 flex items-center justify-center">3</span></div></div></div><div class="flex-1"><div class="flex items-center justify-between cursor-pointer"><div><h4 class="font-medium">Complete transaction</h4><p class="text-sm text-muted-foreground">Open wallet and confirm transaction</p></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 text-muted-foreground transition-transform" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></div></div></li></ol></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
