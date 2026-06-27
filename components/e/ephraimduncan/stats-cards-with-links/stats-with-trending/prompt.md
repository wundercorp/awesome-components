# Build Stats Cards With Links in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Stats Cards With Links screenshot](screenshot.png)

## Component

- Author group: `ephraimduncan`
- Component: `stats-cards-with-links`
- Variant: `stats-with-trending`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ephraimduncan
- Component slug: stats-cards-with-links
- Demo slug: stats-with-trending
- Title: stats-cards-with-links
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center p-10"><div class="mx-auto grid grid-cols-1 gap-px rounded-xl bg-border sm:grid-cols-2 lg:grid-cols-4"><div data-slot="card" class="bg-card text-card-foreground flex flex-col gap-6 rounded-none border-0 shadow-none py-0 rounded-l-xl"><div data-slot="card-content" class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 p-4 sm:p-6"><div class="text-sm font-medium text-muted-foreground">Profit</div><div class="text-xs font-medium text-green-800 dark:text-green-400">+8.32%</div><div class="w-full flex-none text-3xl font-medium tracking-tight text-foreground">$287,654.00</div></div></div><div data-slot="card" class="bg-card text-card-foreground flex flex-col gap-6 rounded-none border-0 shadow-none py-0"><div data-slot="card-content" class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 p-4 sm:p-6"><div class="text-sm font-medium text-muted-foreground">Late payments</div><div class="text-xs font-medium text-red-800 dark:text-red-400">-12.64%</div><div class="w-full flex-none text-3xl font-medium tracking-tight text-foreground">$9,435.00</div></div></div><div data-slot="card" class="bg-card text-card-foreground flex flex-col gap-6 rounded-none border-0 shadow-none py-0"><div data-slot="card-content" class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 p-4 sm:p-6"><div class="text-sm font-medium text-muted-foreground">Pending orders</div><div class="text-xs font-medium text-green-800 dark:text-green-400">+2.87%</div><div class="w-full flex-none text-3xl font-medium tracking-tight text-foreground">$173,229.00</div></div></div><div data-slot="card" class="bg-card text-card-foreground flex flex-col gap-6 rounded-none border-0 shadow-none py-0 rounded-r-xl"><div data-slot="card-content" class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 p-4 sm:p-6"><div class="text-sm font-medium text-muted-foreground">Operating costs</div><div class="text-xs font-medium text-red-800 dark:text-red-400">-5.73%</div><div class="w-full flex-none text-3xl font-medium tracking-tight text-foreground">$52,891.00</div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
