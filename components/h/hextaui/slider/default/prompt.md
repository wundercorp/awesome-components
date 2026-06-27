# Build Slider in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Slider screenshot](screenshot.png)

## Component

- Author group: `hextaui`
- Component: `slider`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: hextaui
- Component slug: slider
- Demo slug: default
- Title: slider
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="max-w-sm w-full"><div class="space-y-2"><div class="flex items-center justify-between"><label for="«r0»" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Volume</label><span class="text-sm text-muted-foreground">25</span></div><div class="space-y-2"><span dir="ltr" data-orientation="horizontal" aria-disabled="false" id="«r0»" class="relative flex w-full touch-none select-none items-center h-4" aria-describedby="«r1»" style="--radix-slider-thumb-transform: translateX(-50%);"><span data-orientation="horizontal" class="relative w-full grow overflow-hidden rounded-full bg-muted h-2"><span data-orientation="horizontal" class="absolute h-full rounded-full transition-all bg-primary" style="left: 0%; right: 75%;"></span></span><span style="transform: var(--radix-slider-thumb-transform); position: absolute; left: calc(25% + 4px);"><span role="slider" aria-valuemin="0" aria-valuemax="100" aria-orientation="horizontal" data-orientation="horizontal" tabindex="0" class="block rounded-full border-2 bg-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:shadow-md border-primary hover:border-primary/80 h-4 w-4" data-radix-collection-item="" aria-valuenow="25" style=""></span></span></span></div><div class="space-y-1"><p id="«r1»" class="text-sm text-muted-foreground">Adjust the volume level</p></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
