# Build 8bit Toggle Group in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![8bit Toggle Group screenshot](screenshot.png)

## Component

- Author group: `theorcdev`
- Component: `8bit-toggle-group`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: theorcdev
- Component slug: 8bit-toggle-group
- Demo slug: default
- Title: 8bit-toggle-group
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex w-full min-h-screen items-center justify-center bg-background p-8 overflow-hidden"><div role="group" data-slot="toggle-group" class="inline-flex items-center justify-center gap-3 font-pixel retro"><button type="button" aria-pressed="true" data-state="on" data-slot="toggle-group-item" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground h-9 px-3 min-w-9 relative transition-transform active:translate-x-1 active:translate-y-1 retro">B</button><button type="button" aria-pressed="false" data-state="off" data-slot="toggle-group-item" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground h-9 px-3 min-w-9 relative transition-transform active:translate-x-1 active:translate-y-1 italic retro">I</button><button type="button" aria-pressed="false" data-state="off" data-slot="toggle-group-item" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground h-9 px-3 min-w-9 relative transition-transform active:translate-x-1 active:translate-y-1 underline retro">U</button></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
