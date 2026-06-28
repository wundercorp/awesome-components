# Build 8bit Skeleton in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![8bit Skeleton screenshot](screenshot.png)

## Component

- Author group: `theorcdev`
- Component: `8bit-skeleton`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: theorcdev
- Component slug: 8bit-skeleton
- Demo slug: default
- Title: 8bit-skeleton
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col w-full min-h-screen items-center justify-center gap-3 bg-background p-8 retro"><div class="relative animate-pulse h-6 w-72"><div class="animate-pulse rounded-none border-none bg-accent retro h-6 w-72"></div><div class="opacity-60"><div class="absolute -top-1.5 w-1/2 left-1.5 h-1.5 bg-foreground dark:bg-ring"></div><div class="absolute -top-1.5 w-1/2 right-1.5 h-1.5 bg-foreground dark:bg-ring"></div></div><div class="opacity-60"><div class="absolute -bottom-1.5 w-1/2 left-1.5 h-1.5 bg-foreground dark:bg-ring"></div><div class="absolute -bottom-1.5 w-1/2 right-1.5 h-1.5 bg-foreground dark:bg-ring"></div></div><div class="absolute top-0 left-0 size-1.5 bg-foreground/60 dark:bg-ring/60"></div><div class="absolute top-0 right-0 size-1.5 bg-foreground/60 dark:bg-ring/60"></div><div class="absolute bottom-0 left-0 size-1.5 bg-foreground/60 dark:bg-ring/60"></div><div class="absolute bottom-0 right-0 size-1.5 bg-foreground/60 dark:bg-ring/60"></div><div class="opacity-60"><div class="absolute top-1 -left-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring"></div><div class="absolute bottom-1 -left-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring"></div></div><div class="opacity-60"><div class="absolute top-1 -right-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring"></div><div class="absolute bottom-1 -right-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring"></div></div></div><div class="relative animate-pulse h-6 w-56"><div class="animate-pulse rounded-none border-none bg-accent retro h-6 w-56"></div><div class="opacity-60"><div class="absolute -top-1.5 w-1/2 left-1.5 h-1.5 bg-foreground dark:bg-ring"></div><div class="absolute -top-1.5 w-1/2 right-1.5 h-1.5 bg-foreground dark:bg-ring"></div></div><div class="opacity-60"><div class="absolute -bottom-1.5 w-1/2 left-1.5 h-1.5 bg-foreground dark:bg-ring"></div><div class="absolute -bottom-1.5 w-1/2 right-1.5 h-1.5 bg-foreground dark:bg-ring"></div></div><div class="absolute top-0 left-0 size-1.5 bg-foreground/60 dark:bg-ring/60"></div><div class="absolute top-0 right-0 size-1.5 bg-foreground/60 dark:bg-ring/60"></div><div class="absolute bottom-0 left-0 size-1.5 bg-foreground/60 dark:bg-ring/60"></div><div class="absolute bottom-0 right-0 size-1.5 bg-foreground/60 dark:bg-ring/60"></div><div class="opacity-60"><div class="absolute top-1 -left-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring"></div><div class="absolute bottom-1 -left-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring"></div></div><div class="opacity-60"><div class="absolute top-1 -right-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring"></div><div class="absolute bottom-1 -right-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring"></div></div></div><div class="relative animate-pulse h-6 w-64"><div class="animate-pulse rounded-none border-none bg-accent retro h-6 w-64"></div><div class="opacity-60"><div class="absolute -top-1.5 w-1/2 left-1.5 h-1.5 bg-foreground dark:bg-ring"></div><div class="absolute -top-1.5 w-1/2 right-1.5 h-1.5 bg-foreground dark:bg-ring"></div></div><div class="opacity-60"><div class="absolute -bottom-1.5 w-1/2 left-1.5 h-1.5 bg-foreground dark:bg-ring"></div><div class="absolute -bottom-1.5 w-1/2 right-1.5 h-1.5 bg-foreground dark:bg-ring"></div></div><div class="absolute top-0 left-0 size-1.5 bg-foreground/60 dark:bg-ring/60"></div><div class="absolute top-0 right-0 size-1.5 bg-foreground/60 dark:bg-ring/60"></div><div class="absolute bottom-0 left-0 size-1.5 bg-foreground/60 dark:bg-ring/60"></div><div class="absolute bottom-0 right-0 size-1.5 bg-foreground/60 dark:bg-ring/60"></div><div class="opacity-60"><div class="absolute top-1 -left-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring"></div><div class="absolute bottom-1 -left-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring"></div></div><div class="opacity-60"><div class="absolute top-1 -right-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring"></div><div class="absolute bottom-1 -right-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring"></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
