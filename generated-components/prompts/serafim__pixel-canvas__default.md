# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/serafim/pixel-canvas/default
- Registry URL: https://21st.dev/r/serafim/pixel-canvas
- Author: serafim
- Component slug: pixel-canvas
- Demo slug: default
- Title: pixel-canvas
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/serafim/pixel-canvas with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/serafim__pixel-canvas__default.html
- Local screenshot file: generated-21st-prompts/screenshots/serafim__pixel-canvas__default.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="w-[300px] mx-auto"><button class="group relative w-full overflow-hidden border border-border rounded-[32px] aspect-square transition-colors duration-200 hover:border-[#0ea5e9] focus:outline-[5px] focus:outline-[Highlight]" style="--active-color: #0ea5e9;"><pixel-canvas data-gap="10" data-speed="25" data-colors="#e0f2fe,#7dd3fc,#0ea5e9" data-variant="icon" style="position: absolute; inset: 0px; pointer-events: none; width: 100%; height: 100%;"></pixel-canvas><div class="relative z-10 h-full w-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code w-20 h-20 text-muted-foreground transition-all duration-300 ease-out group-hover:scale-110 group-hover:text-[var(--active-color)]" aria-hidden="true"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg></div></button></div></div></div></div>
```

## Public registry source files

No public registry source files were available.