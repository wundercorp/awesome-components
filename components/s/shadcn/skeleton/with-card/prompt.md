# Build Skeleton in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Skeleton screenshot](screenshot.png)

## Component

- Author group: `shadcn`
- Component: `skeleton`
- Variant: `with-card`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: shadcn
- Component slug: skeleton
- Demo slug: with-card
- Title: skeleton
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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="rounded-lg border bg-card text-card-foreground shadow-sm min-w-[300px]"><div class="flex flex-col space-y-1.5 p-6"><div class="animate-pulse rounded-md bg-muted h-4 w-4/5"></div><div class="animate-pulse rounded-md bg-muted h-4 w-2/3"></div></div><div class="p-6 pt-0"><div class="animate-pulse bg-muted h-72 w-full rounded"></div></div><div class="flex items-center p-6 pt-0 gap-2"><div class="animate-pulse rounded-md bg-muted h-8 w-20"></div><div class="animate-pulse rounded-md bg-muted h-8 w-20"></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
