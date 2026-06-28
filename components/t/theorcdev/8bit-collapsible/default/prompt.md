# Build 8bit Collapsible in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![8bit Collapsible screenshot](screenshot.png)

## Component

- Author group: `theorcdev`
- Component: `8bit-collapsible`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: theorcdev
- Component slug: 8bit-collapsible
- Demo slug: default
- Title: 8bit-collapsible
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex w-full min-h-screen items-center justify-center bg-background p-8 overflow-hidden"><div class="relative w-full max-w-sm space-y-2"><div data-slot="collapsible" data-state="closed" class="w-full max-w-sm space-y-2 retro"><div class="flex items-center justify-between border-2 border-foreground p-3"><span class="text-sm font-pixel">Secret Stash</span><button type="button" data-slot="collapsible-trigger" data-state="closed" aria-expanded="false" class="text-xs font-pixel underline">Toggle</button></div><div data-slot="collapsible-content" data-state="closed" class="overflow-hidden transition-all max-h-0 space-y-2"><div class="border-2 border-foreground p-3 font-pixel text-sm">Gold ×999</div><div class="border-2 border-foreground p-3 font-pixel text-sm">Phoenix Down ×3</div><div class="border-2 border-foreground p-3 font-pixel text-sm">Megalixir ×1</div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
