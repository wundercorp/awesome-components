# Build Lazy Image in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Lazy Image screenshot](screenshot.png)

## Component

- Author group: `efferd`
- Component: `lazy-image`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: efferd
- Component slug: lazy-image
- Demo slug: default
- Title: lazy-image
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-screen w-full flex-col items-center justify-center gap-4 p-4"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Load Image</button><div class="mx-auto w-full max-w-4xl"><div data-radix-aspect-ratio-wrapper="" style="position: relative; width: 100%; padding-bottom: 56.25%;"><div class="relative size-full overflow-hidden rounded-lg border" style="position: absolute; inset: 0px;"><div class="bg-accent/30 absolute inset-0 animate-pulse rounded-lg transition-opacity will-change-[opacity] opacity-0"></div><img alt="Random" class="size-full rounded-lg object-cover transition-opacity duration-2000 will-change-[opacity] opacity-100" loading="lazy" decoding="async" fetchpriority="low" src="https://picsum.photos/seed/142/1280/720"></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
