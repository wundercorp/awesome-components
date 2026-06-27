# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/micka_design/button/loading
- Registry URL: https://21st.dev/r/micka_design/button
- Author: micka_design
- Component slug: button
- Demo slug: loading
- Title: button
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/micka_design/button with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/micka_design__button__loading.html
- Local screenshot file: generated-21st-prompts/screenshots/micka_design__button__loading.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center min-h-screen bg-background"><div class="flex gap-3"><style>
          @keyframes spinner-move {
            from { stroke-dashoffset: 100; }
            to { stroke-dashoffset: 0; }
          }
          @keyframes spinner-dash {
            0%, 100% { stroke-dasharray: 15 85; }
            50% { stroke-dasharray: 50 50; }
          }
        </style><button class="group relative inline-flex items-center justify-center outline-none cursor-pointer rounded-full transition-all duration-80 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-1 focus-visible:ring-[#6B97FF] bg-foreground text-background hover:bg-foreground/90 active:bg-foreground/80 h-9 px-4 text-[13px] gap-1.5"><span>Save changes</span></button><style>
          @keyframes spinner-move {
            from { stroke-dashoffset: 100; }
            to { stroke-dashoffset: 0; }
          }
          @keyframes spinner-dash {
            0%, 100% { stroke-dasharray: 15 85; }
            50% { stroke-dasharray: 50 50; }
          }
        </style><button class="group relative inline-flex items-center justify-center outline-none cursor-pointer rounded-full transition-all duration-80 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-1 focus-visible:ring-[#6B97FF] bg-accent text-foreground hover:bg-accent/80 active:bg-accent h-9 px-4 text-[13px] gap-1.5" disabled=""><span class="flex items-center justify-center gap-[inherit] opacity-0">Loading</span><span class="absolute inset-0 flex items-center justify-center"><svg class="h-8 w-8" viewBox="0 0 24 24" fill="none"><path d="M 12 12 C 14 8.5 19 8.5 19 12 C 19 15.5 14 15.5 12 12 C 10 8.5 5 8.5 5 12 C 5 15.5 10 15.5 12 12 Z" stroke="currentColor" stroke-width="1.125" stroke-linecap="round" pathLength="100" style="stroke-dasharray: 15, 85; animation: 2s linear 0s infinite normal none running spinner-move, 4s ease-in-out 0s infinite normal none running spinner-dash;"></path></svg></span></button><style>
          @keyframes spinner-move {
            from { stroke-dashoffset: 100; }
            to { stroke-dashoffset: 0; }
          }
          @keyframes spinner-dash {
            0%, 100% { stroke-dasharray: 15 85; }
            50% { stroke-dasharray: 50 50; }
          }
        </style><button class="group relative inline-flex items-center justify-center outline-none cursor-pointer rounded-full transition-all duration-80 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-1 focus-visible:ring-[#6B97FF] border border-border text-foreground bg-transparent hover:bg-muted active:bg-muted/60 h-9 px-4 text-[13px] gap-1.5" disabled=""><span class="flex items-center justify-center gap-[inherit] opacity-0">Loading</span><span class="absolute inset-0 flex items-center justify-center"><svg class="h-8 w-8" viewBox="0 0 24 24" fill="none"><path d="M 12 12 C 14 8.5 19 8.5 19 12 C 19 15.5 14 15.5 12 12 C 10 8.5 5 8.5 5 12 C 5 15.5 10 15.5 12 12 Z" stroke="currentColor" stroke-width="1.125" stroke-linecap="round" pathLength="100" style="stroke-dasharray: 15, 85; animation: 2s linear 0s infinite normal none running spinner-move, 4s ease-in-out 0s infinite normal none running spinner-dash;"></path></svg></span></button></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.