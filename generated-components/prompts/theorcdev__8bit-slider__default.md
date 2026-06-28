# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/theorcdev/8bit-slider/default
- Registry URL: https://21st.dev/r/theorcdev/8bit-slider
- Author: theorcdev
- Component slug: 8bit-slider
- Demo slug: default
- Title: 8bit-slider
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/theorcdev/8bit-slider with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/theorcdev__8bit-slider__default.html
- Local screenshot file: generated-21st-prompts/screenshots/theorcdev__8bit-slider__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex w-full min-h-screen items-center justify-center bg-background p-8 overflow-hidden"><div class="w-full max-w-sm space-y-4"><div class="text-xs font-pixel">VOLUME</div><div class="relative w-full"><div class="relative flex w-full touch-none select-none items-center"><div class="relative h-2 w-full grow overflow-hidden bg-secondary"><div class="absolute h-full bg-primary" style="width: 60%;"></div></div><input min="0" max="100" step="1" aria-label="slider" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed disabled:pointer-events-none" type="range" value="60"><div class="absolute block size-5 border-2 border-foreground dark:border-ring bg-foreground dark:bg-ring pointer-events-none" aria-hidden="true" style="left: calc(60% - 10px);"></div></div><div class="absolute inset-0 border-y-4 -my-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div><div class="absolute inset-0 border-x-4 -mx-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.