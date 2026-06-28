# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/uniquesonu/loading-indicator/default
- Registry URL: https://21st.dev/r/uniquesonu/loading-indicator
- Author: uniquesonu
- Component slug: loading-indicator
- Demo slug: default
- Title: loading-indicator
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/uniquesonu/loading-indicator with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/uniquesonu__loading-indicator__default.html
- Local screenshot file: generated-21st-prompts/screenshots/uniquesonu__loading-indicator__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div><div class="flex items-center justify-center min-h-screen w-screen bg-background "><div class="flex justify-center "><div class="relative" style="--color1: #3498db; --color2: #e74c3c; --spin-duration: 10s; --squeeze-duration: 3s; width: 60px; height: 60px; animation: spin var(--spin-duration) infinite linear;"><div class="absolute" style="background: var(--color1); animation: squeeze var(--squeeze-duration) infinite;"></div><div class="absolute rounded-full" style="background: var(--color2); animation-duration: ; animation-timing-function: ; animation-delay: -1.25s; animation-iteration-count: ; animation-direction: ; animation-fill-mode: ; animation-play-state: ; animation-name: ; animation-timeline: ; animation-range-start: ; animation-range-end: ;"></div></div></div><style>
        @keyframes squeeze {
          0% { inset: 0 2em 2em 0; }
          12.5% { inset: 0 2em 0 0; }
          25% { inset: 2em 2em 0 0; }
          37.5% { inset: 2em 0 0 0; }
          50% { inset: 2em 0 0 2em; }
          62.5% { inset: 0 0 0 2em; }
          75% { inset: 0 0 2em 2em; }
          87.5% { inset: 0 0 2em 0; }
          100% { inset: 0 2em 2em 0; }
        }
        @keyframes spin {
          to { transform: rotate(-360deg); }
        }
      </style></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.