# Build Volume Component Shadcnui in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Volume Component Shadcnui screenshot](screenshot.png)

## Component

- Author group: `moumensoliman`
- Component: `volume-component-shadcnui`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: moumensoliman
- Component slug: volume-component-shadcnui
- Demo slug: default
- Title: volume-component-shadcnui
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex w-full min-h-screen items-center justify-center bg-background p-8"><div class="w-full p-6"><div class="flex justify-between items-center mb-4"><label class="text-sm font-medium text-foreground/80">Volume</label><span class="text-sm font-mono text-muted-foreground bg-muted px-2 py-1 rounded-md">0</span></div><div class="relative h-6 flex items-center cursor-pointer group"><div class="absolute w-full h-2 bg-secondary rounded-full overflow-hidden"><div class="h-full bg-primary" style="width: 0px;"></div></div><div class="absolute top-1/2 -translate-y-1/2 left-0 -ml-3 z-10" draggable="false" style="transform: none; user-select: none; touch-action: pan-y;"><div class="w-6 h-6 rounded-full bg-background border-2 border-primary shadow-lg flex items-center justify-center transition-colors group-hover:border-primary/80" tabindex="0"><div class="w-2 h-2 rounded-full bg-primary"></div></div></div></div><div class="flex justify-between mt-2 text-xs text-muted-foreground"><span>0</span><span>100</span></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
