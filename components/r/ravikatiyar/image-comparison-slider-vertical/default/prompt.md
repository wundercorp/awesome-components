# Build Image Comparison Slider Vertical in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Image Comparison Slider Vertical screenshot](screenshot.png)

## Component

- Author group: `ravikatiyar`
- Component: `image-comparison-slider-vertical`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ravikatiyar
- Component slug: image-comparison-slider-vertical
- Demo slug: default
- Title: image-comparison-slider-vertical
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-2xl mx-auto"><div class="aspect-[3/4] rounded-lg border overflow-hidden"><div class="relative w-full h-full overflow-hidden select-none group"><img alt="The same building facade in black and white" class="absolute inset-0 w-full h-full object-cover pointer-events-none" draggable="false" src="https://ik.imagekit.io/fpxbgsota/Firefly%2020250725164243.png?updatedAt=1753441977753"><div class="absolute inset-0 w-full h-full overflow-hidden pointer-events-none" style="clip-path: inset(0px 0px 50%);"><img alt="A colorful historic building facade" class="w-full h-full object-cover" draggable="false" src="https://ik.imagekit.io/fpxbgsota/image.png?updatedAt=1753442020302"></div><div class="absolute left-0 w-full h-px -translate-y-1/2 bg-border cursor-ns-resize" role="separator" aria-orientation="vertical" style="top: 50%;"><button class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform group-hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" aria-label="Drag to compare images" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" aria-controls="image-comparison-container"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grip-vertical h-5 w-5" aria-hidden="true"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg></button></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
