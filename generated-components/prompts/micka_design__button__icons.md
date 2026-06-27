# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/micka_design/button/icons
- Registry URL: https://21st.dev/r/micka_design/button
- Author: micka_design
- Component slug: button
- Demo slug: icons
- Title: button
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/micka_design/button with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/micka_design__button__icons.html
- Local screenshot file: generated-21st-prompts/screenshots/micka_design__button__icons.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center min-h-screen bg-background"><div class="flex flex-wrap items-center gap-3"><style>
          @keyframes spinner-move {
            from { stroke-dashoffset: 100; }
            to { stroke-dashoffset: 0; }
          }
          @keyframes spinner-dash {
            0%, 100% { stroke-dasharray: 15 85; }
            50% { stroke-dasharray: 50 50; }
          }
        </style><button class="group relative inline-flex items-center justify-center outline-none cursor-pointer rounded-full transition-all duration-80 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-1 focus-visible:ring-[#6B97FF] bg-foreground text-background hover:bg-foreground/90 active:bg-foreground/80 h-9 px-4 text-[13px] gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus transition-[stroke-width] duration-80 group-hover:stroke-[2]" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg><span>Add item</span></button><style>
          @keyframes spinner-move {
            from { stroke-dashoffset: 100; }
            to { stroke-dashoffset: 0; }
          }
          @keyframes spinner-dash {
            0%, 100% { stroke-dasharray: 15 85; }
            50% { stroke-dasharray: 50 50; }
          }
        </style><button class="group relative inline-flex items-center justify-center outline-none cursor-pointer rounded-full transition-all duration-80 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-1 focus-visible:ring-[#6B97FF] bg-accent text-foreground hover:bg-accent/80 active:bg-accent h-9 px-4 text-[13px] gap-1.5"><span>Continue</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right transition-[stroke-width] duration-80 group-hover:stroke-[2]" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button><style>
          @keyframes spinner-move {
            from { stroke-dashoffset: 100; }
            to { stroke-dashoffset: 0; }
          }
          @keyframes spinner-dash {
            0%, 100% { stroke-dasharray: 15 85; }
            50% { stroke-dasharray: 50 50; }
          }
        </style><button class="group relative inline-flex items-center justify-center outline-none cursor-pointer rounded-full transition-all duration-80 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-1 focus-visible:ring-[#6B97FF] border border-border text-foreground bg-transparent hover:bg-muted active:bg-muted/60 h-9 px-4 text-[13px] gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search transition-[stroke-width] duration-80 group-hover:stroke-[2]" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg><span>Search</span></button><style>
          @keyframes spinner-move {
            from { stroke-dashoffset: 100; }
            to { stroke-dashoffset: 0; }
          }
          @keyframes spinner-dash {
            0%, 100% { stroke-dasharray: 15 85; }
            50% { stroke-dasharray: 50 50; }
          }
        </style><button class="group relative inline-flex items-center justify-center outline-none cursor-pointer rounded-full transition-all duration-80 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-1 focus-visible:ring-[#6B97FF] text-muted-foreground bg-transparent hover:bg-muted hover:text-foreground active:bg-muted/60 h-9 w-9 p-0 [&amp;_svg]:h-4 [&amp;_svg]:w-4"><span class="[&amp;_svg]:stroke-[1.5] [&amp;_svg]:transition-[stroke-width] [&amp;_svg]:duration-80 group-hover:[&amp;_svg]:stroke-[2]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings" aria-hidden="true"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg></span></button><style>
          @keyframes spinner-move {
            from { stroke-dashoffset: 100; }
            to { stroke-dashoffset: 0; }
          }
          @keyframes spinner-dash {
            0%, 100% { stroke-dasharray: 15 85; }
            50% { stroke-dasharray: 50 50; }
          }
        </style><button class="group relative inline-flex items-center justify-center outline-none cursor-pointer rounded-full transition-all duration-80 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-1 focus-visible:ring-[#6B97FF] bg-accent text-foreground hover:bg-accent/80 active:bg-accent h-8 w-8 p-0 [&amp;_svg]:h-3.5 [&amp;_svg]:w-3.5"><span class="[&amp;_svg]:stroke-[1.5] [&amp;_svg]:transition-[stroke-width] [&amp;_svg]:duration-80 group-hover:[&amp;_svg]:stroke-[2]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></span></button><style>
          @keyframes spinner-move {
            from { stroke-dashoffset: 100; }
            to { stroke-dashoffset: 0; }
          }
          @keyframes spinner-dash {
            0%, 100% { stroke-dasharray: 15 85; }
            50% { stroke-dasharray: 50 50; }
          }
        </style><button class="group relative inline-flex items-center justify-center outline-none cursor-pointer rounded-full transition-all duration-80 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-1 focus-visible:ring-[#6B97FF] bg-foreground text-background hover:bg-foreground/90 active:bg-foreground/80 h-10 w-10 p-0 [&amp;_svg]:h-5 [&amp;_svg]:w-5"><span class="[&amp;_svg]:stroke-[1.5] [&amp;_svg]:transition-[stroke-width] [&amp;_svg]:duration-80 group-hover:[&amp;_svg]:stroke-[2]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span></button></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.