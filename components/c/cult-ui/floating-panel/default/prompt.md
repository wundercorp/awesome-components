# Build Floating Panel in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Floating Panel screenshot](screenshot.png)

## Component

- Author group: `cult-ui`
- Component: `floating-panel`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: cult-ui
- Component slug: floating-panel
- Demo slug: default
- Title: floating-panel
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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="p-8 space-y-8"><h1 class="text-3xl font-bold mb-4">FloatingPanel Examples</h1><div class="flex flex-col md:flex-row flex-wrap gap-4"><div class="relative"><button class="h-9 border border-zinc-950/10 dark:border-zinc-50/10 dark:bg-zinc-700 dark:text-zinc-50 flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors" aria-haspopup="dialog" aria-expanded="false" tabindex="0" style="border-radius: 8px; opacity: 1;"><div class="flex items-center" style="opacity: 1;"><span class="text-sm font-semibold" style="opacity: 1;"><span>Add Note</span></span></div></button></div><div class="relative"><button class="h-9 border border-zinc-950/10 dark:border-zinc-50/10 dark:bg-zinc-700 dark:text-zinc-50 flex items-center space-x-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors" aria-haspopup="dialog" aria-expanded="false" tabindex="0" style="border-radius: 8px; opacity: 1;"><div class="flex items-center" style="opacity: 1;"><span class="text-sm font-semibold" style="opacity: 1;"><span>Choose Color</span></span></div></button></div><div class="relative"><button class="h-9 border border-zinc-950/10 dark:border-zinc-50/10 dark:bg-zinc-700 dark:text-zinc-50 flex items-center space-x-2 px-4 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors" aria-haspopup="dialog" aria-expanded="false" tabindex="0" style="border-radius: 8px; opacity: 1;"><div class="flex items-center" style="opacity: 1;"><span class="text-sm font-semibold" style="opacity: 1;"><span>Quick Actions</span></span></div></button></div><div class="relative"><button class="h-9 border border-zinc-950/10 dark:border-zinc-50/10 dark:bg-zinc-700 dark:text-zinc-50 flex items-center space-x-2 px-4 py-2 bg-muted text-muted-foreground rounded-md hover:bg-muted/90 transition-colors" aria-haspopup="dialog" aria-expanded="false" tabindex="0" style="border-radius: 8px; opacity: 1;"><div class="flex items-center" style="opacity: 1;"><span class="text-sm font-semibold" style="opacity: 1;"><span>Preview Image</span></span></div></button></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
