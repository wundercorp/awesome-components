# Build Heroui Color Area in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Heroui Color Area screenshot](screenshot.png)

## Component

- Author group: `reapollo`
- Component: `heroui-color-area`
- Variant: `disabled`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: reapollo
- Component slug: heroui-color-area
- Demo slug: disabled
- Title: heroui-color-area
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
<div id="root"><div class="flex min-h-screen w-full items-center justify-center overflow-hidden bg-background p-8"><style>
      .color-area{position:relative;width:100%;max-width:14rem;flex-shrink:0;aspect-ratio:1/1;border-radius:1rem;user-select:none;background:var(--color-area-background);box-shadow:inset 0 0 0 1px rgba(0,0,0,.1);touch-action:none;outline:none}
      .color-area[data-disabled="true"]{opacity:.5;pointer-events:none}
      .color-area--show-dots::after{content:"";pointer-events:none;position:absolute;inset:0;border-radius:inherit;background-image:radial-gradient(circle,rgba(255,255,255,.2) 1px,transparent 1px);background-size:8px 8px}
      .color-area__thumb{position:absolute;width:1rem;height:1rem;transform:translate(-50%,-50%);border-radius:.75rem;background-color:var(--color-area-thumb-color);border:3px solid #fff;box-shadow:0 0 0 1px rgba(0,0,0,.1),inset 0 0 0 1px rgba(0,0,0,.1);transition:width 150ms ease-out,height 150ms ease-out;will-change:width,height}
      .color-area__thumb[data-dragging="true"]{width:1.25rem;height:1.25rem}
      .color-area__thumb[data-disabled="true"]{opacity:.5}
      .color-area__thumb[data-focus-visible="true"]{outline:2px solid hsl(var(--ring,240 5% 65%));outline-offset:2px}
      .color-swatch{display:inline-block}
      .select{display:flex;flex-direction:column;gap:.375rem}
      .label{font-size:.875rem;line-height:1.25rem;color:hsl(var(--foreground,240 10% 3.9%));font-weight:500}
      .select__trigger{height:2.5rem;border-radius:.75rem;border:1px solid hsl(var(--border,240 5.9% 90%));background:hsl(var(--background,0 0% 100%));padding:0 .75rem;font-size:.875rem;color:hsl(var(--foreground,240 10% 3.9%));box-shadow:0 1px 2px rgba(0,0,0,.04);outline:none}
      .select__trigger:focus{box-shadow:0 0 0 2px hsl(var(--ring,240 5% 65%) / .45)}
      .dark .select__trigger{border-color:hsl(var(--border,240 3.7% 15.9%));background:hsl(var(--background,240 10% 3.9%));color:hsl(var(--foreground,0 0% 98%))}
      .dark .label{color:hsl(var(--foreground,0 0% 98%))}
    </style><div role="group" tabindex="-1" aria-label="Color area" aria-disabled="true" data-disabled="true" data-slot="color-area" class="color-area" style="--color-area-background: linear-gradient(to bottom, transparent, hsl(0, 0%, 50%)), linear-gradient(to right, hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%));"><div data-slot="color-area-thumb" data-disabled="true" class="color-area__thumb" style="--color-area-thumb-color: rgba(0, 170, 255, 1); left: 55.5556%; top: 0%;"></div></div></div></div>
```

## Reference source files

No reference source files were available.
