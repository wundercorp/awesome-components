# Build Bg Pattern in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Bg Pattern screenshot](screenshot.png)

## Component

- Author group: `efferd`
- Component: `bg-pattern`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: efferd
- Component slug: bg-pattern
- Demo slug: default
- Title: bg-pattern
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
<div id="root"><div class="mx-auto max-w-4xl space-y-5 p-8"><div class="relative flex aspect-video flex-col items-center justify-center rounded-2xl border-2"><div class="absolute inset-0 z-[-10] size-full [mask-image:radial-gradient(ellipse_at_center,var(--background),transparent)]" style="background-image: linear-gradient(to right, rgb(37, 37, 37) 1px, transparent 1px), linear-gradient(rgb(37, 37, 37) 1px, transparent 1px); background-size: 24px 24px;"></div><h2 class="text-3xl font-bold">Grid Background</h2><p class="text-muted-foreground font-mono">With (fade-edges) Mask</p></div><div class="relative flex aspect-video flex-col items-center justify-center rounded-2xl border-2"><div class="absolute inset-0 z-[-10] size-full [mask-image:radial-gradient(ellipse_at_center,transparent,var(--background))]" style="background-image: radial-gradient(rgb(37, 37, 37) 1px, transparent 1px); background-size: 24px 24px;"></div><h2 class="text-3xl font-bold">Dots Background</h2><p class="text-muted-foreground font-mono">With (fade-center) Mask</p></div><div class="relative flex aspect-video flex-col items-center justify-center rounded-2xl border-2"><div class="absolute inset-0 z-[-10] size-full [mask-image:linear-gradient(to_bottom,transparent,var(--background),transparent)]" style="background-image: repeating-linear-gradient(45deg, rgb(37, 37, 37), rgb(37, 37, 37) 1px, transparent 1px, transparent 24px); background-size: 24px 24px;"></div><h2 class="text-3xl font-bold">Diagonal Stripes</h2><p class="text-muted-foreground font-mono">With (fade-y) Mask</p></div><div class="relative flex aspect-video flex-col items-center justify-center rounded-2xl border-2"><div class="absolute inset-0 z-[-10] size-full [mask-image:linear-gradient(to_right,var(--background),transparent)]" style="background-image: linear-gradient(rgb(37, 37, 37) 1px, transparent 1px); background-size: 24px 24px;"></div><h2 class="text-3xl font-bold">Horizontal Lines</h2><p class="text-muted-foreground font-mono">With (fade-right) Mask</p></div><div class="relative flex aspect-video flex-col items-center justify-center rounded-2xl border-2"><div class="absolute inset-0 z-[-10] size-full [mask-image:linear-gradient(to_bottom,var(--background),transparent)]" style="background-image: linear-gradient(to right, rgb(37, 37, 37) 1px, transparent 1px); background-size: 24px 24px;"></div><h2 class="text-3xl font-bold">Vertical Lines</h2><p class="text-muted-foreground font-mono">With (fade-bottom) Mask</p></div><div class="relative flex aspect-video flex-col items-center justify-center rounded-2xl border-2"><div class="absolute inset-0 z-[-10] size-full [mask-image:linear-gradient(to_bottom,transparent,var(--background))]" style="background-image: linear-gradient(45deg, rgb(37, 37, 37) 25%, transparent 25%), linear-gradient(-45deg, rgb(37, 37, 37) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgb(37, 37, 37) 75%), linear-gradient(-45deg, transparent 75%, rgb(37, 37, 37) 75%); background-size: 24px 24px;"></div><h2 class="text-3xl font-bold">Checkerboard Background</h2><p class="text-muted-foreground font-mono">With (fade-top) Mask</p></div></div></div>
```

## Reference source files

No reference source files were available.
