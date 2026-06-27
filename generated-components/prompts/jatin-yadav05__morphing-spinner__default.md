# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/jatin-yadav05/morphing-spinner/default
- Registry URL: https://21st.dev/r/jatin-yadav05/morphing-spinner
- Author: jatin-yadav05
- Component slug: morphing-spinner
- Demo slug: default
- Title: morphing-spinner
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/jatin-yadav05/morphing-spinner with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/jatin-yadav05__morphing-spinner__default.html
- Local screenshot file: generated-21st-prompts/screenshots/jatin-yadav05__morphing-spinner__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><main class="min-h-screen bg-background flex items-center justify-center"><div class="flex flex-col items-center gap-4"><div class="relative w-12 h-12"><div class="absolute inset-0 animate-[smoothMorph_3s_ease-in-out_infinite] bg-primary"></div><style>
        @keyframes smoothMorph {
          0% { 
            transform: scale(1) rotate(0deg);
            border-radius: 50%;
          }
          20% { 
            transform: scale(0.9) rotate(72deg);
            border-radius: 35%;
          }
          40% { 
            transform: scale(1.1) rotate(144deg);
            border-radius: 15%;
          }
          60% { 
            transform: scale(0.85) rotate(216deg);
            border-radius: 8%;
          }
          80% { 
            transform: scale(1.05) rotate(288deg);
            border-radius: 25%;
          }
          100% { 
            transform: scale(1) rotate(360deg);
            border-radius: 50%;
          }
        }
      </style></div><p class="text-lg text-foreground flex gap-1">Loading</p></div></main></div></div></div>
```

## Public registry source files

No public registry source files were available.