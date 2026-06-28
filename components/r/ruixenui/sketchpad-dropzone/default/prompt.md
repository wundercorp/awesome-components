# Build Sketchpad Dropzone in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Sketchpad Dropzone screenshot](screenshot.png)

## Component

- Author group: `ruixenui`
- Component: `sketchpad-dropzone`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ruixenui
- Component slug: sketchpad-dropzone
- Demo slug: default
- Title: sketchpad-dropzone
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="p-6 space-y-6"><h1 class="text-2xl font-semibold">Sketchpad Drop Zone Demo</h1><p class="text-sm text-muted-foreground">Drag and drop files onto the sketchpad. They will appear as pinned notes.</p><div><input multiple="" class="hidden" type="file"><div class="relative border-2 border-dashed border-gray-400 dark:border-gray-600 rounded-lg p-8 min-h-[300px] bg-white dark:bg-gray-800 flex flex-wrap gap-4 items-start cursor-pointer" style="background-image: repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(0, 0, 0, 0.05) 25px), repeating-linear-gradient(-90deg, transparent, transparent 24px, rgba(0, 0, 0, 0.05) 25px);"></div></div><button class="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm shadow-black/5 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 mt-4">Clear All</button></div></div></div></div>
```

## Reference source files

No reference source files were available.
