# Build Card in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Card screenshot](screenshot.png)

## Component

- Author group: `kavikatiyar`
- Component: `card`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: kavikatiyar
- Component slug: card
- Demo slug: default
- Title: card
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex h-screen w-full items-center justify-center bg-background p-4"><div class="w-full max-w-sm rounded-2xl border bg-card p-6 text-card-foreground shadow-sm"><div class="flex items-start justify-between"><h3 class="text-lg font-medium text-muted-foreground">Analytics</h3><div class="flex h-8 w-8 items-center justify-center rounded-full bg-muted/50"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right h-4 w-4 text-muted-foreground" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></div></div><div class="my-4"><h2 class="text-4xl font-bold tracking-tight">$242,63</h2></div><div class="grid grid-cols-3 gap-4" aria-label="Weekly analytics chart"><div class="flex flex-col items-center gap-2"><div class="relative flex h-32 w-full items-end overflow-hidden rounded-lg bg-muted/60" role="presentation" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 4px, hsl(var(--muted)) 4px, hsl(var(--muted)) 8px); background-size: 16px 16px;"><div class="relative w-full rounded-t-md p-2 bg-primary" aria-label="Mon: 64%" aria-valuenow="64" aria-valuemin="0" aria-valuemax="100" style="height: 64%;"><div class="absolute left-1/2 top-1.5 h-1 w-1/3 -translate-x-1/2 rounded-full bg-background/50"></div><span class="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-semibold text-primary-foreground">64%</span></div></div><span class="text-sm text-muted-foreground">Mon</span></div><div class="flex flex-col items-center gap-2"><div class="relative flex h-32 w-full items-end overflow-hidden rounded-lg bg-muted/60" role="presentation" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 4px, hsl(var(--muted)) 4px, hsl(var(--muted)) 8px); background-size: 16px 16px;"><div class="relative w-full rounded-t-md p-2 bg-primary/40" aria-label="Tue: 52%" aria-valuenow="52" aria-valuemin="0" aria-valuemax="100" style="height: 52%;"><div class="absolute left-1/2 top-1.5 h-1 w-1/3 -translate-x-1/2 rounded-full bg-background/50"></div><span class="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-semibold text-primary-foreground">52%</span></div></div><span class="text-sm text-muted-foreground">Tue</span></div><div class="flex flex-col items-center gap-2"><div class="relative flex h-32 w-full items-end overflow-hidden rounded-lg bg-muted/60" role="presentation" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 4px, hsl(var(--muted)) 4px, hsl(var(--muted)) 8px); background-size: 16px 16px;"><div class="relative w-full rounded-t-md p-2 bg-primary/40" aria-label="Wed: 46%" aria-valuenow="46" aria-valuemin="0" aria-valuemax="100" style="height: 46%;"><div class="absolute left-1/2 top-1.5 h-1 w-1/3 -translate-x-1/2 rounded-full bg-background/50"></div><span class="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-semibold text-primary-foreground">46%</span></div></div><span class="text-sm text-muted-foreground">Wed</span></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
