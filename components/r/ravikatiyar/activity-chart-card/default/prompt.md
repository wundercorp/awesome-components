# Build Activity Chart Card in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Activity Chart Card screenshot](screenshot.png)

## Component

- Author group: `ravikatiyar`
- Component: `activity-chart-card`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ravikatiyar
- Component slug: activity-chart-card
- Demo slug: default
- Title: activity-chart-card
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-[400px] w-full items-center justify-center bg-background p-4"><div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md" aria-labelledby="activity-card-title"><div class="flex flex-col space-y-1.5 p-6"><div class="flex items-center justify-between"><h3 class="text-2xl font-semibold leading-none tracking-tight" id="activity-card-title">Activity</h3><button class="justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1 text-sm" aria-haspopup="true" type="button" id="radix-«r0»" aria-expanded="false" data-state="closed">Weekly<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></div></div><div class="p-6 pt-0"><div class="flex flex-col sm:flex-row items-start sm:items-end gap-4"><div class="flex flex-col"><p class="text-5xl font-bold tracking-tighter text-foreground">21h</p><p class="text-sm text-muted-foreground flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up h-4 w-4 text-emerald-500" aria-hidden="true"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>+12% from last week</p></div><div class="flex h-28 w-full items-end justify-between gap-2" aria-label="Activity chart" style="opacity: 1;"><div class="flex h-full w-full flex-col items-center justify-end gap-2" role="presentation"><div class="w-full rounded-md bg-primary" aria-label="S: 8 hours" style="height: 57.1429%; opacity: 1; transform-origin: center bottom; transform: none;"></div><span class="text-xs text-muted-foreground">S</span></div><div class="flex h-full w-full flex-col items-center justify-end gap-2" role="presentation"><div class="w-full rounded-md bg-primary" aria-label="M: 12 hours" style="height: 85.7143%; opacity: 1; transform-origin: center bottom; transform: none;"></div><span class="text-xs text-muted-foreground">M</span></div><div class="flex h-full w-full flex-col items-center justify-end gap-2" role="presentation"><div class="w-full rounded-md bg-primary" aria-label="T: 9 hours" style="height: 64.2857%; opacity: 1; transform-origin: center bottom; transform: none;"></div><span class="text-xs text-muted-foreground">T</span></div><div class="flex h-full w-full flex-col items-center justify-end gap-2" role="presentation"><div class="w-full rounded-md bg-primary" aria-label="W: 4 hours" style="height: 28.5714%; opacity: 1; transform-origin: center bottom; transform: none;"></div><span class="text-xs text-muted-foreground">W</span></div><div class="flex h-full w-full flex-col items-center justify-end gap-2" role="presentation"><div class="w-full rounded-md bg-primary" aria-label="T: 7 hours" style="height: 50%; opacity: 1; transform-origin: center bottom; transform: none;"></div><span class="text-xs text-muted-foreground">T</span></div><div class="flex h-full w-full flex-col items-center justify-end gap-2" role="presentation"><div class="w-full rounded-md bg-primary" aria-label="F: 14 hours" style="height: 100%; opacity: 1; transform-origin: center bottom; transform: none;"></div><span class="text-xs text-muted-foreground">F</span></div><div class="flex h-full w-full flex-col items-center justify-end gap-2" role="presentation"><div class="w-full rounded-md bg-primary" aria-label="S: 2 hours" style="height: 14.2857%; opacity: 1; transform-origin: center bottom; transform: none;"></div><span class="text-xs text-muted-foreground">S</span></div></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
