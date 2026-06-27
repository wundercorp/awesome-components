# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hero_ui/heroui-color-swatch/transparency
- Registry URL: https://21st.dev/r/hero_ui/heroui-color-swatch
- Author: hero_ui
- Component slug: heroui-color-swatch
- Demo slug: transparency
- Title: heroui-color-swatch
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hero_ui/heroui-color-swatch with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hero_ui__heroui-color-swatch__transparency.html
- Local screenshot file: generated-21st-prompts/screenshots/hero_ui__heroui-color-swatch__transparency.png

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
<div id="root"><div class="flex min-h-screen w-full items-center justify-center overflow-hidden bg-background p-8"><div class="flex items-center gap-3"><style>
      .color-swatch {
        position: relative;
        box-sizing: border-box;
        display: inline-block;
        width: 32px;
        height: 32px;
        flex-shrink: 0;
        background:
          linear-gradient(var(--color-swatch-current), var(--color-swatch-current)),
          repeating-conic-gradient(#efefef 0% 25%, #f7f7f7 0% 50%) 50% / 16px 16px;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
      }
      .color-swatch--circle { border-radius: 16px; }
      .color-swatch--square { border-radius: 6px; }
      .color-swatch--xs {
        width: 16px;
        height: 16px;
      }
      .color-swatch--xs.color-swatch--circle { border-radius: 8px; }
      .color-swatch--sm {
        width: 24px;
        height: 24px;
      }
      .color-swatch--sm.color-swatch--circle { border-radius: 12px; }
      .color-swatch--md {
        width: 32px;
        height: 32px;
      }
      .color-swatch--lg {
        width: 36px;
        height: 36px;
      }
      .color-swatch--lg.color-swatch--circle { border-radius: 24px; }
      .color-swatch--xl {
        width: 40px;
        height: 40px;
      }
      .color-swatch--xl.color-swatch--circle { border-radius: 24px; }
      .color-swatch:focus-visible {
        outline: 2px solid hsl(var(--ring, 240 5% 65%));
        outline-offset: 2px;
      }
    </style><div aria-label="100% opacity" class="color-swatch color-swatch--circle color-swatch--md" data-slot="color-swatch" role="img" style="--color-swatch-current: rgba(4, 133, 247, 1); background-color: rgb(4, 133, 247); forced-color-adjust: none;"></div><style>
      .color-swatch {
        position: relative;
        box-sizing: border-box;
        display: inline-block;
        width: 32px;
        height: 32px;
        flex-shrink: 0;
        background:
          linear-gradient(var(--color-swatch-current), var(--color-swatch-current)),
          repeating-conic-gradient(#efefef 0% 25%, #f7f7f7 0% 50%) 50% / 16px 16px;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
      }
      .color-swatch--circle { border-radius: 16px; }
      .color-swatch--square { border-radius: 6px; }
      .color-swatch--xs {
        width: 16px;
        height: 16px;
      }
      .color-swatch--xs.color-swatch--circle { border-radius: 8px; }
      .color-swatch--sm {
        width: 24px;
        height: 24px;
      }
      .color-swatch--sm.color-swatch--circle { border-radius: 12px; }
      .color-swatch--md {
        width: 32px;
        height: 32px;
      }
      .color-swatch--lg {
        width: 36px;
        height: 36px;
      }
      .color-swatch--lg.color-swatch--circle { border-radius: 24px; }
      .color-swatch--xl {
        width: 40px;
        height: 40px;
      }
      .color-swatch--xl.color-swatch--circle { border-radius: 24px; }
      .color-swatch:focus-visible {
        outline: 2px solid hsl(var(--ring, 240 5% 65%));
        outline-offset: 2px;
      }
    </style><div aria-label="75% opacity" class="color-swatch color-swatch--circle color-swatch--md" data-slot="color-swatch" role="img" style="--color-swatch-current: rgba(4, 133, 247, 0.75); background-color: rgba(4, 133, 247, 0.75); forced-color-adjust: none;"></div><style>
      .color-swatch {
        position: relative;
        box-sizing: border-box;
        display: inline-block;
        width: 32px;
        height: 32px;
        flex-shrink: 0;
        background:
          linear-gradient(var(--color-swatch-current), var(--color-swatch-current)),
          repeating-conic-gradient(#efefef 0% 25%, #f7f7f7 0% 50%) 50% / 16px 16px;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
      }
      .color-swatch--circle { border-radius: 16px; }
      .color-swatch--square { border-radius: 6px; }
      .color-swatch--xs {
        width: 16px;
        height: 16px;
      }
      .color-swatch--xs.color-swatch--circle { border-radius: 8px; }
      .color-swatch--sm {
        width: 24px;
        height: 24px;
      }
      .color-swatch--sm.color-swatch--circle { border-radius: 12px; }
      .color-swatch--md {
        width: 32px;
        height: 32px;
      }
      .color-swatch--lg {
        width: 36px;
        height: 36px;
      }
      .color-swatch--lg.color-swatch--circle { border-radius: 24px; }
      .color-swatch--xl {
        width: 40px;
        height: 40px;
      }
      .color-swatch--xl.color-swatch--circle { border-radius: 24px; }
      .color-swatch:focus-visible {
        outline: 2px solid hsl(var(--ring, 240 5% 65%));
        outline-offset: 2px;
      }
    </style><div aria-label="50% opacity" class="color-swatch color-swatch--circle color-swatch--md" data-slot="color-swatch" role="img" style="--color-swatch-current: rgba(4, 133, 247, 0.5); background-color: rgba(4, 133, 247, 0.5); forced-color-adjust: none;"></div><style>
      .color-swatch {
        position: relative;
        box-sizing: border-box;
        display: inline-block;
        width: 32px;
        height: 32px;
        flex-shrink: 0;
        background:
          linear-gradient(var(--color-swatch-current), var(--color-swatch-current)),
          repeating-conic-gradient(#efefef 0% 25%, #f7f7f7 0% 50%) 50% / 16px 16px;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
      }
      .color-swatch--circle { border-radius: 16px; }
      .color-swatch--square { border-radius: 6px; }
      .color-swatch--xs {
        width: 16px;
        height: 16px;
      }
      .color-swatch--xs.color-swatch--circle { border-radius: 8px; }
      .color-swatch--sm {
        width: 24px;
        height: 24px;
      }
      .color-swatch--sm.color-swatch--circle { border-radius: 12px; }
      .color-swatch--md {
        width: 32px;
        height: 32px;
      }
      .color-swatch--lg {
        width: 36px;
        height: 36px;
      }
      .color-swatch--lg.color-swatch--circle { border-radius: 24px; }
      .color-swatch--xl {
        width: 40px;
        height: 40px;
      }
      .color-swatch--xl.color-swatch--circle { border-radius: 24px; }
      .color-swatch:focus-visible {
        outline: 2px solid hsl(var(--ring, 240 5% 65%));
        outline-offset: 2px;
      }
    </style><div aria-label="25% opacity" class="color-swatch color-swatch--circle color-swatch--md" data-slot="color-swatch" role="img" style="--color-swatch-current: rgba(4, 133, 247, 0.25); background-color: rgba(4, 133, 247, 0.25); forced-color-adjust: none;"></div><style>
      .color-swatch {
        position: relative;
        box-sizing: border-box;
        display: inline-block;
        width: 32px;
        height: 32px;
        flex-shrink: 0;
        background:
          linear-gradient(var(--color-swatch-current), var(--color-swatch-current)),
          repeating-conic-gradient(#efefef 0% 25%, #f7f7f7 0% 50%) 50% / 16px 16px;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
      }
      .color-swatch--circle { border-radius: 16px; }
      .color-swatch--square { border-radius: 6px; }
      .color-swatch--xs {
        width: 16px;
        height: 16px;
      }
      .color-swatch--xs.color-swatch--circle { border-radius: 8px; }
      .color-swatch--sm {
        width: 24px;
        height: 24px;
      }
      .color-swatch--sm.color-swatch--circle { border-radius: 12px; }
      .color-swatch--md {
        width: 32px;
        height: 32px;
      }
      .color-swatch--lg {
        width: 36px;
        height: 36px;
      }
      .color-swatch--lg.color-swatch--circle { border-radius: 24px; }
      .color-swatch--xl {
        width: 40px;
        height: 40px;
      }
      .color-swatch--xl.color-swatch--circle { border-radius: 24px; }
      .color-swatch:focus-visible {
        outline: 2px solid hsl(var(--ring, 240 5% 65%));
        outline-offset: 2px;
      }
    </style><div aria-label="0% opacity" class="color-swatch color-swatch--circle color-swatch--md" data-slot="color-swatch" role="img" style="--color-swatch-current: rgba(4, 133, 247, 0); background-color: rgba(4, 133, 247, 0); forced-color-adjust: none;"></div></div></div></div>
```

## Public registry source files

No public registry source files were available.