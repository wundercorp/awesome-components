# Build Morphing Card Stack in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Morphing Card Stack screenshot](screenshot.png)

## Component

- Author group: `kousthubha_sky`
- Component: `_morphing-card-stack`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: kousthubha_sky_
- Component slug: morphing-card-stack
- Demo slug: default
- Title: morphing-card-stack
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="space-y-4"><div class="flex items-center justify-center gap-1 rounded-lg bg-secondary/50 p-1 w-fit mx-auto"><button class="rounded-md p-2 transition-all bg-primary text-primary-foreground" aria-label="Switch to stack layout"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers h-4 w-4" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg></button><button class="rounded-md p-2 transition-all text-muted-foreground hover:text-foreground hover:bg-secondary" aria-label="Switch to grid layout"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grid3x3 lucide-grid-3x3 h-4 w-4" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg></button><button class="rounded-md p-2 transition-all text-muted-foreground hover:text-foreground hover:bg-secondary" aria-label="Switch to list layout"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-list h-4 w-4" aria-hidden="true"><rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect><path d="M14 4h7"></path><path d="M14 9h7"></path><path d="M14 15h7"></path><path d="M14 20h7"></path></svg></button></div><div class="relative h-64 w-64 mx-auto"><div class="cursor-pointer rounded-xl border border-border bg-card p-4 hover:border-primary/50 transition-colors absolute w-56 h-48" style="opacity: 1; transform: rotate(4deg); top: 24px; left: 24px; z-index: 1;"><div class="flex items-start gap-3"><div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles h-5 w-5" aria-hidden="true"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg></div><div class="min-w-0 flex-1"><h3 class="font-semibold text-card-foreground truncate">Command Menu</h3><p class="text-sm text-muted-foreground mt-1 line-clamp-3">Radial command palette with keyboard navigation</p></div></div></div><div class="cursor-pointer rounded-xl border border-border bg-card p-4 hover:border-primary/50 transition-colors absolute w-56 h-48" style="opacity: 1; transform: rotate(2deg); top: 16px; left: 16px; z-index: 2;"><div class="flex items-start gap-3"><div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock h-5 w-5" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div><div class="min-w-0 flex-1"><h3 class="font-semibold text-card-foreground truncate">Pulse Timeline</h3><p class="text-sm text-muted-foreground mt-1 line-clamp-3">Interactive timeline with animated pulse nodes</p></div></div></div><div class="cursor-pointer rounded-xl border border-border bg-card p-4 hover:border-primary/50 transition-colors absolute w-56 h-48" style="opacity: 1; transform: none; top: 8px; left: 8px; z-index: 3;"><div class="flex items-start gap-3"><div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette h-5 w-5" aria-hidden="true"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle></svg></div><div class="min-w-0 flex-1"><h3 class="font-semibold text-card-foreground truncate">Gradient Mesh</h3><p class="text-sm text-muted-foreground mt-1 line-clamp-3">Dynamic animated gradient backgrounds that follow your cursor</p></div></div></div><div class="rounded-xl border border-border bg-card p-4 hover:border-primary/50 transition-colors absolute w-56 h-48 cursor-grab active:cursor-grabbing" draggable="false" style="opacity: 1; transform: rotate(-2deg); user-select: none; touch-action: pan-y; top: 0px; left: 0px; z-index: 4;"><div class="flex items-start gap-3"><div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers h-5 w-5" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg></div><div class="min-w-0 flex-1"><h3 class="font-semibold text-card-foreground truncate">Magnetic Dock</h3><p class="text-sm text-muted-foreground mt-1 line-clamp-3">Cursor-responsive scaling with smooth spring animations</p></div></div><div class="absolute bottom-2 left-0 right-0 text-center"><span class="text-xs text-muted-foreground/50">Swipe to navigate</span></div></div></div><div class="flex justify-center gap-1.5"><button class="h-1.5 rounded-full transition-all w-4 bg-primary" aria-label="Go to card 1"></button><button class="h-1.5 rounded-full transition-all w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50" aria-label="Go to card 2"></button><button class="h-1.5 rounded-full transition-all w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50" aria-label="Go to card 3"></button><button class="h-1.5 rounded-full transition-all w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50" aria-label="Go to card 4"></button></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
