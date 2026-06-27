# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/reapollo/heroui-color-area/controlled
- Registry URL: https://21st.dev/r/reapollo/heroui-color-area
- Author: reapollo
- Component slug: heroui-color-area
- Demo slug: controlled
- Title: heroui-color-area
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/reapollo/heroui-color-area with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/reapollo__heroui-color-area__controlled.html
- Local screenshot file: generated-21st-prompts/screenshots/reapollo__heroui-color-area__controlled.png

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

No registry metadata available.

## Rendered DOM snapshot

This is the rendered demo HTML extracted from the live preview. Use it to verify structure, class names, visible content, and layout.

```html
<div id="root"><div class="flex min-h-screen w-full items-center justify-center overflow-hidden bg-background p-8"><div class="flex flex-col gap-4"><style>
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
    </style><div role="group" tabindex="0" aria-label="Color area" data-slot="color-area" class="color-area" style="--color-area-background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 255, .9) 100%), linear-gradient(to right, rgb(0, 255, 255), rgb(255, 255, 255) 72%, rgb(255, 0, 255) 100%);"><div data-slot="color-area-thumb" class="color-area__thumb" style="--color-area-thumb-color: rgba(155, 128, 255, 1); left: 60.7843%; top: 49.8039%;"></div></div><div class="flex w-[300px] items-center gap-3"><div aria-label="#9B80FF" aria-roledescription="color swatch" class="color-swatch color-swatch--circle rounded-full border border-black/10 shadow-sm size-8" data-rac="" data-slot="color-swatch" role="img" style="background-color: rgb(155, 128, 255); forced-color-adjust: none; --color-swatch-current: rgba(155, 128, 255, 1);"></div><p class="text-sm text-muted">Current color: <span class="font-medium">#9B80FF</span></p></div></div></div></div>
```

## Public registry source files

No public registry source files were available.