# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/samke/slider/slider-demo
- Registry URL: https://21st.dev/r/samke/slider
- Author: samke
- Component slug: slider
- Demo slug: slider-demo
- Title: slider
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/samke/slider with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/samke__slider__slider-demo.html
- Local screenshot file: generated-21st-prompts/screenshots/samke__slider__slider-demo.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><span dir="ltr" data-orientation="horizontal" aria-disabled="false" class="relative flex touch-none select-none items-center w-[400px]" style="--radix-slider-thumb-transform: translateX(-50%);"><span data-orientation="horizontal" class="relative h-3 w-full grow overflow-hidden rounded-full border-2 border-border bg-bw"><span data-orientation="horizontal" class="absolute h-full bg-main" style="left: 0%; right: 67%;"></span></span><span style="transform: var(--radix-slider-thumb-transform); position: absolute; left: calc(33% + 3.4px);"><span role="slider" aria-valuemin="0" aria-valuemax="100" aria-orientation="horizontal" data-orientation="horizontal" tabindex="0" class="block h-5 w-5 rounded-full border-2 border-border bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" data-radix-collection-item="" aria-valuenow="33" style=""></span></span></span></div></div></div>
```

## Public registry source files

No public registry source files were available.