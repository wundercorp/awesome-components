# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/RuvyUI/loading-radar/default
- Registry URL: https://21st.dev/r/RuvyUI/loading-radar
- Author: RuvyUI
- Component slug: loading-radar
- Demo slug: default
- Title: loading-radar
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/RuvyUI/loading-radar with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/RuvyUI__loading-radar__default.html
- Local screenshot file: generated-21st-prompts/screenshots/RuvyUI__loading-radar__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative flex items-center justify-center w-[150px] h-[150px] rounded-full border border-[#333] shadow-[25px_25px_75px_rgba(0,0,0,0.55)] overflow-hidden"><div class="absolute inset-5 rounded-full border border-dashed border-[#444] shadow-[inset_-5px_-5px_25px_rgba(0,0,0,0.25),inset_5px_5px_35px_rgba(0,0,0,0.25)]"></div><div class="absolute w-[50px] h-[50px] rounded-full border border-dashed border-[#444] shadow-[inset_-5px_-5px_25px_rgba(0,0,0,0.25),inset_5px_5px_35px_rgba(0,0,0,0.25)]"></div><span class="absolute top-1/2 left-1/2 w-1/2 h-full bg-transparent origin-top-left border-t border-dashed border-white animate-[radar81_2s_linear_infinite]"><span class="absolute top-0 left-0 w-full h-full bg-[seagreen] origin-top-left rotate-[-55deg] blur-[30px] drop-shadow-[20px_20px_20px_seagreen]"></span></span><style>
        @keyframes radar81 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      </style></div></div></div></div>
```

## Public registry source files

No public registry source files were available.