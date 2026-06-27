# Build Draggable List in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Draggable List screenshot](screenshot.png)

## Component

- Author group: `hextaui`
- Component: `draggable-list`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: hextaui
- Component slug: draggable-list
- Demo slug: default
- Title: draggable-list
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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="flex flex-col gap-2 max-w-sm w-full"><div draggable="true" class="cursor-grab rounded-lg border bg-secondary/50 border-primary/10 p-4 shadow-xs transition-colors" style="opacity: 1; transform: none;"><div class="flex items-center gap-2"><div class="text-gray-400">≡</div>First Item</div></div><div draggable="true" class="cursor-grab rounded-lg border bg-secondary/50 border-primary/10 p-4 shadow-xs transition-colors" style="opacity: 1; transform: none;"><div class="flex items-center gap-2"><div class="text-gray-400">≡</div>Second Item</div></div><div draggable="true" class="cursor-grab rounded-lg border bg-secondary/50 border-primary/10 p-4 shadow-xs transition-colors" style="opacity: 1; transform: none;"><div class="flex items-center gap-2"><div class="text-gray-400">≡</div>Third Item</div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
