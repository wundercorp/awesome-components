# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/aliimam/text-aimation/default
- Registry URL: https://21st.dev/r/aliimam/text-aimation
- Author: aliimam
- Component slug: text-aimation
- Demo slug: default
- Title: text-aimation
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/aliimam/text-aimation with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/aliimam__text-aimation__default.html
- Local screenshot file: generated-21st-prompts/screenshots/aliimam__text-aimation__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100vh; margin: 0px; text-rendering: optimizelegibility; overflow: hidden; box-sizing: border-box; -webkit-tap-highlight-color: transparent;"><div id="text" style="animation: 1200ms cubic-bezier(0.4, 0, 0.2, 1) 200ms infinite alternate none running layerize; opacity: 0; width: 100%; color: rgb(244, 63, 94); font: 20vmin Geist, sans-serif; cursor: default; user-select: none; text-align: center;"><span class="italic tracking-tighter font-bold">21st.dev</span></div><style>
        @keyframes layerize {
          0% {
            opacity: 0;
            transform: translate(0, 0);
            text-shadow: 0 0 transparent, 0 0 transparent, 0 0 transparent, 0 0 transparent;
          }
          100% {
            opacity: 1;
            transform: translate(calc(0.033333em * 4 / -2), calc(0.033333em * 4 / -2));
            text-shadow: calc(0.033333em * 1 * 1) calc(0.033333em * 1 * 1) #f43f5e40, calc(0.033333em * 2 * 1) calc(0.033333em * 2 * 1) #f43f5e33, calc(0.033333em * 3 * 1) calc(0.033333em * 3 * 1) #f43f5e26, calc(0.033333em * 4 * 1) calc(0.033333em * 4 * 1) #f43f5e1A;
          }
        }
      </style></div></div></div></div>
```

## Public registry source files

No public registry source files were available.