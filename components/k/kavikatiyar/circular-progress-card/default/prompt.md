# Build Circular Progress Card in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Circular Progress Card screenshot](screenshot.png)

## Component

- Author group: `kavikatiyar`
- Component: `circular-progress-card`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: kavikatiyar
- Component slug: circular-progress-card
- Demo slug: default
- Title: circular-progress-card
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-[500px] w-full flex-wrap items-center justify-center gap-8 bg-background p-4"><div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-sm text-center"><div class="flex flex-col space-y-1.5 p-6"><h3 class="text-2xl font-semibold leading-none tracking-tight">Project Completion</h3><p class="text-sm text-muted-foreground">Tasks completed for the new feature launch.</p></div><div class="p-6 pt-0"><div class="relative mx-auto h-52 w-52"><svg width="100%" height="100%" viewBox="0 0 200 200" role="img" aria-label="Progress: 64%"><g transform="rotate(-90, 100, 100)"><circle cx="100" cy="100" r="80" fill="transparent" stroke="hsl(var(--muted))" stroke-width="16"></circle><circle cx="100" cy="100" r="80" fill="transparent" stroke="hsl(142.1 76.2% 41.2%)" stroke-width="16" stroke-linecap="round" stroke-dasharray="502.6548245743669" stroke-dashoffset="180.95573684677208"></circle></g></svg><div class="absolute inset-0 flex flex-col items-center justify-center"><span class="text-4xl font-bold text-foreground">64%</span><span class="text-sm text-muted-foreground">128 / 200</span></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
