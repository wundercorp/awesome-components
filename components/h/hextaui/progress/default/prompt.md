# Build Progress in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Progress screenshot](screenshot.png)

## Component

- Author group: `hextaui`
- Component: `progress`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: hextaui
- Component slug: progress
- Demo slug: default
- Title: progress
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="space-y-3 max-w-sm w-full mx-auto"><div class="flex items-center justify-between"><span class="text-sm font-semibold">Download Progress</span><span class="text-xs text-muted-foreground ">Downloading...</span></div><div class="space-y-2"><div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" class="relative overflow-hidden rounded-full bg-secondary h-1.5 w-full"><div data-state="indeterminate" data-max="100" class="h-full w-full flex-1 rounded-full transition-all duration-500 ease-out bg-primary" style="transform: translateX(-55%);"></div></div><div class="text-right text-xs font-semibold text-muted-foreground tabular-nums" style="opacity: 1; transform: none;">45%</div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
