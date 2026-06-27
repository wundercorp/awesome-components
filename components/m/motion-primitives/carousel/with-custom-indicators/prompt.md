# Build Carousel in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Carousel screenshot](screenshot.png)

## Component

- Author group: `motion-primitives`
- Component: `carousel`
- Variant: `with-custom-indicators`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: motion-primitives
- Component slug: carousel
- Demo slug: with-custom-indicators
- Title: carousel
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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="relative w-full max-w-xs py-8"><div class="group/hover relative"><div class="overflow-hidden"><div class="flex items-center cursor-grab active:cursor-grabbing relative" draggable="false" style="transform: none; user-select: none; touch-action: pan-y;"><div class="w-full min-w-0 shrink-0 grow-0 overflow-hidden p-4"><div class="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">1</div></div><div class="w-full min-w-0 shrink-0 grow-0 overflow-hidden p-4"><div class="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">2</div></div><div class="w-full min-w-0 shrink-0 grow-0 overflow-hidden p-4"><div class="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">3</div></div><div class="w-full min-w-0 shrink-0 grow-0 overflow-hidden p-4"><div class="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">4</div></div></div></div></div><div class="flex w-full justify-center space-x-3 px-4"><button type="button" aria-label="Go to slide 1" class="h-12 w-12 border border-zinc-200 dark:border-zinc-800">1</button><button type="button" aria-label="Go to slide 2" class="h-12 w-12 border border-zinc-200 dark:border-zinc-800">2</button><button type="button" aria-label="Go to slide 3" class="h-12 w-12 border border-zinc-200 dark:border-zinc-800">3</button><button type="button" aria-label="Go to slide 4" class="h-12 w-12 border border-zinc-200 dark:border-zinc-800">4</button></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
