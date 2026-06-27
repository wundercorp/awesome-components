# Build Interfaces Slider in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Interfaces Slider screenshot](screenshot.png)

## Component

- Author group: `jshguo`
- Component: `interfaces-slider`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: jshguo
- Component slug: interfaces-slider
- Demo slug: default
- Title: interfaces-slider
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex w-full min-h-screen items-center justify-center bg-background p-8 overflow-hidden"><div class="w-full max-w-sm"><span dir="ltr" data-orientation="horizontal" aria-disabled="false" data-slot="slider" class="relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col" style="--radix-slider-thumb-transform: translateX(-50%);"><span data-orientation="horizontal" data-slot="slider-track" class="bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"><span data-orientation="horizontal" data-slot="slider-range" class="bg-primary/75 absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full" style="left: 0%; right: 40%;"></span></span><span style="transform: var(--radix-slider-thumb-transform); position: absolute; left: calc(60% - 1.6px);"><span role="slider" aria-valuemin="0" aria-valuemax="100" aria-orientation="horizontal" data-orientation="horizontal" tabindex="0" data-slot="slider-thumb" class="border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden cursor-pointer disabled:pointer-events-none disabled:opacity-50" data-radix-collection-item="" aria-valuenow="60" style=""></span></span></span></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
