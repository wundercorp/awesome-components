# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/micka_design/button/default
- Registry URL: https://21st.dev/r/micka_design/button
- Author: micka_design
- Component slug: button
- Demo slug: default
- Title: button
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/micka_design/button with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/micka_design__button__default.html
- Local screenshot file: generated-21st-prompts/screenshots/micka_design__button__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center min-h-screen bg-background"><style>
          @keyframes spinner-move {
            from { stroke-dashoffset: 100; }
            to { stroke-dashoffset: 0; }
          }
          @keyframes spinner-dash {
            0%, 100% { stroke-dasharray: 15 85; }
            50% { stroke-dasharray: 50 50; }
          }
        </style><button class="group relative inline-flex items-center justify-center outline-none cursor-pointer rounded-full transition-all duration-80 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-1 focus-visible:ring-[#6B97FF] bg-foreground text-background hover:bg-foreground/90 active:bg-foreground/80 h-9 px-4 text-[13px] gap-1.5"><span>Click me</span></button></div></div></div></div>
```

## Public registry source files

No public registry source files were available.