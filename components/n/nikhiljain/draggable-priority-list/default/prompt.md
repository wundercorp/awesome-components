# Build Draggable Priority List in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Draggable Priority List screenshot](screenshot.png)

## Component

- Author group: `nikhiljain`
- Component: `draggable-priority-list`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: nikhiljain
- Component slug: draggable-priority-list
- Demo slug: default
- Title: draggable-priority-list
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-screen items-center justify-center bg-background p-8"><div class="w-full max-w-lg space-y-4"><div><h1 class="font-serif text-2xl font-normal">Priority Queue</h1><p class="text-sm text-muted-foreground">Drag or use keyboard to reorder</p></div><div class="w-full "><ul role="listbox" aria-label="Priority list — drag or use keyboard to reorder" class="flex flex-col gap-2 list-none p-0 m-0"><li role="option" tabindex="0" draggable="true" aria-selected="false" aria-label="Redesign onboarding flow, rank 1 of 5" data-rank="0" class="relative flex items-stretch rounded-xl border cursor-grab select-none transition-all duration-150 outline-offset-2 bg-card border-border/40 hover:bg-accent/40 hover:border-border/70   "><div aria-hidden="true" class="flex flex-col items-center justify-center w-14 min-w-14 border-r border-border/40 py-4 gap-0.5"><span class="font-mono text-lg font-medium text-muted-foreground leading-none">1</span><span class="text-[9px] uppercase tracking-widest text-muted-foreground/60">top</span></div><div class="flex-1 px-4 py-3.5 min-w-0"><p class="text-sm font-medium truncate leading-snug">Redesign onboarding flow</p><p class="text-xs text-muted-foreground mt-0.5">Product · 3 subtasks</p></div><div aria-hidden="true" class="flex items-center justify-center w-10 text-muted-foreground/40 hover:text-muted-foreground/80 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grip-vertical w-4 h-4" aria-hidden="true"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg></div></li><li role="option" tabindex="0" draggable="true" aria-selected="false" aria-label="Migrate to new API gateway, rank 2 of 5" data-rank="1" class="relative flex items-stretch rounded-xl border cursor-grab select-none transition-all duration-150 outline-offset-2 bg-card border-border/40 hover:bg-accent/40 hover:border-border/70   "><div aria-hidden="true" class="flex flex-col items-center justify-center w-14 min-w-14 border-r border-border/40 py-4 gap-0.5"><span class="font-mono text-lg font-medium text-muted-foreground leading-none">2</span><span class="text-[9px] uppercase tracking-widest text-muted-foreground/60"></span></div><div class="flex-1 px-4 py-3.5 min-w-0"><p class="text-sm font-medium truncate leading-snug">Migrate to new API gateway</p><p class="text-xs text-muted-foreground mt-0.5">Engineering · 8 tasks</p></div><div aria-hidden="true" class="flex items-center justify-center w-10 text-muted-foreground/40 hover:text-muted-foreground/80 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grip-vertical w-4 h-4" aria-hidden="true"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg></div></li><li role="option" tabindex="0" draggable="true" aria-selected="false" aria-label="Write Q3 strategy doc, rank 3 of 5" data-rank="2" class="relative flex items-stretch rounded-xl border cursor-grab select-none transition-all duration-150 outline-offset-2 bg-card border-border/40 hover:bg-accent/40 hover:border-border/70   "><div aria-hidden="true" class="flex flex-col items-center justify-center w-14 min-w-14 border-r border-border/40 py-4 gap-0.5"><span class="font-mono text-lg font-medium text-muted-foreground leading-none">3</span><span class="text-[9px] uppercase tracking-widest text-muted-foreground/60"></span></div><div class="flex-1 px-4 py-3.5 min-w-0"><p class="text-sm font-medium truncate leading-snug">Write Q3 strategy doc</p><p class="text-xs text-muted-foreground mt-0.5">Strategy · 1 subtask</p></div><div aria-hidden="true" class="flex items-center justify-center w-10 text-muted-foreground/40 hover:text-muted-foreground/80 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grip-vertical w-4 h-4" aria-hidden="true"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg></div></li><li role="option" tabindex="0" draggable="true" aria-selected="false" aria-label="Update design tokens, rank 4 of 5" data-rank="3" class="relative flex items-stretch rounded-xl border cursor-grab select-none transition-all duration-150 outline-offset-2 bg-card border-border/40 hover:bg-accent/40 hover:border-border/70   "><div aria-hidden="true" class="flex flex-col items-center justify-center w-14 min-w-14 border-r border-border/40 py-4 gap-0.5"><span class="font-mono text-lg font-medium text-muted-foreground leading-none">4</span><span class="text-[9px] uppercase tracking-widest text-muted-foreground/60"></span></div><div class="flex-1 px-4 py-3.5 min-w-0"><p class="text-sm font-medium truncate leading-snug">Update design tokens</p><p class="text-xs text-muted-foreground mt-0.5">Design · 4 tasks</p></div><div aria-hidden="true" class="flex items-center justify-center w-10 text-muted-foreground/40 hover:text-muted-foreground/80 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grip-vertical w-4 h-4" aria-hidden="true"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg></div></li><li role="option" tabindex="0" draggable="true" aria-selected="false" aria-label="Audit analytics pipeline, rank 5 of 5" data-rank="4" class="relative flex items-stretch rounded-xl border cursor-grab select-none transition-all duration-150 outline-offset-2 bg-card border-border/40 hover:bg-accent/40 hover:border-border/70   "><div aria-hidden="true" class="flex flex-col items-center justify-center w-14 min-w-14 border-r border-border/40 py-4 gap-0.5"><span class="font-mono text-lg font-medium text-muted-foreground leading-none">5</span><span class="text-[9px] uppercase tracking-widest text-muted-foreground/60">last</span></div><div class="flex-1 px-4 py-3.5 min-w-0"><p class="text-sm font-medium truncate leading-snug">Audit analytics pipeline</p><p class="text-xs text-muted-foreground mt-0.5">Data · 2 subtasks</p></div><div aria-hidden="true" class="flex items-center justify-center w-10 text-muted-foreground/40 hover:text-muted-foreground/80 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grip-vertical w-4 h-4" aria-hidden="true"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg></div></li></ul><div class="mt-3 flex items-center justify-end gap-1 text-[11px] text-muted-foreground/60"><kbd class="px-1.5 py-0.5 rounded bg-muted border border-border/50 font-mono text-[10px]">Space</kbd>grab ·<kbd class="px-1.5 py-0.5 rounded bg-muted border border-border/50 font-mono text-[10px]">↑↓</kbd>move ·<kbd class="px-1.5 py-0.5 rounded bg-muted border border-border/50 font-mono text-[10px]">Esc</kbd>cancel</div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
