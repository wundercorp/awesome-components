# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/jshguo/interfaces-slider/range
- Registry URL: https://21st.dev/r/jshguo/interfaces-slider
- Author: jshguo
- Component slug: interfaces-slider
- Demo slug: range
- Title: interfaces-slider
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/jshguo/interfaces-slider with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/jshguo__interfaces-slider__range.html
- Local screenshot file: generated-21st-prompts/screenshots/jshguo__interfaces-slider__range.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex w-full min-h-screen items-center justify-center bg-background p-8 overflow-hidden"><div class="w-full max-w-sm space-y-5"><div class="space-y-2"><div class="flex items-center justify-between text-sm"><span class="font-medium">Price Range</span><span class="text-muted-foreground">$20 – $80</span></div><span dir="ltr" data-orientation="horizontal" aria-disabled="false" data-slot="slider" class="relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col" style="--radix-slider-thumb-transform: translateX(-50%);"><span data-orientation="horizontal" data-slot="slider-track" class="bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"><span data-orientation="horizontal" data-slot="slider-range" class="bg-primary/75 absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full" style="left: 10%; right: 60%;"></span></span><span style="transform: var(--radix-slider-thumb-transform); position: absolute; left: calc(10% + 6.4px);"><span role="slider" aria-valuemin="0" aria-valuemax="200" aria-orientation="horizontal" data-orientation="horizontal" tabindex="0" data-slot="slider-thumb" class="border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden cursor-pointer disabled:pointer-events-none disabled:opacity-50" data-radix-collection-item="" aria-label="Minimum" aria-valuenow="20" style=""></span></span><span style="transform: var(--radix-slider-thumb-transform); position: absolute; left: calc(40% + 1.6px);"><span role="slider" aria-valuemin="0" aria-valuemax="200" aria-orientation="horizontal" data-orientation="horizontal" tabindex="0" data-slot="slider-thumb" class="border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden cursor-pointer disabled:pointer-events-none disabled:opacity-50" data-radix-collection-item="" aria-label="Maximum" aria-valuenow="80" style=""></span></span></span></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.