# Build Heroui Card in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Heroui Card screenshot](screenshot.png)

## Component

- Author group: `hero_ui`
- Component: `heroui-card`
- Variant: `horizontal`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: hero_ui
- Component slug: heroui-card
- Demo slug: horizontal
- Title: heroui-card
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
<div id="root"><div class="flex min-h-screen w-full items-center justify-center overflow-hidden bg-background p-8"><div class="relative flex flex-col gap-3 overflow-visible p-4 text-zinc-950 dark:text-zinc-50 rounded-[min(32px,var(--radius-3xl,32px))] border border-zinc-200 bg-white shadow-[0_16px_48px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-zinc-900 dark:shadow-[0_20px_60px_rgba(0,0,0,0.28)] w-full max-w-[720px] items-stretch md:flex-row" data-slot="card"><div class="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]"><img alt="Cherries" class="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none" src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/cherries.jpeg"></div><div class="flex flex-1 flex-col gap-3"><div class="flex flex-col gap-1" data-slot="card-header"><h3 class="text-sm font-medium leading-6 text-zinc-950 dark:text-zinc-50 pr-8" data-slot="card-title">Become an ACME Creator!</h3><p class="text-sm leading-5 text-zinc-500 dark:text-zinc-400" data-slot="card-description">Lorem ipsum dolor sit amet consectetur. Sed arcu donec id aliquam dolor sed amet faucibus etiam.</p><button aria-label="Close banner" class="absolute right-3 top-3 inline-flex size-7 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-zinc-50" type="button"><svg aria-hidden="true" fill="none" viewBox="0 0 16 16" class="size-4"><path clip-rule="evenodd" d="M3.47 3.47a.75.75 0 0 1 1.06 0L8 6.94l3.47-3.47a.75.75 0 1 1 1.06 1.06L9.06 8l3.47 3.47a.75.75 0 1 1-1.06 1.06L8 9.06l-3.47 3.47a.75.75 0 0 1-1.06-1.06L6.94 8 3.47 4.53a.75.75 0 0 1 0-1.06Z" fill="currentColor" fill-rule="evenodd"></path></svg></button></div><div class="flex flex-row items-center mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between" data-slot="card-footer"><div class="flex flex-col"><span class="text-sm font-medium text-zinc-950 dark:text-zinc-50">Only 10 spots</span><span class="text-xs text-zinc-500 dark:text-zinc-400">Submission ends Oct 10.</span></div><button class="w-full rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 sm:w-auto dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200" type="button">Apply Now</button></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
