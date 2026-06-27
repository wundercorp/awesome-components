# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/originui/slider/price-slider
- Registry URL: https://21st.dev/r/originui/slider
- Author: originui
- Component slug: slider
- Demo slug: price-slider
- Title: slider
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/originui/slider with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/originui__slider__price-slider.html
- Local screenshot file: generated-21st-prompts/screenshots/originui__slider__price-slider.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="space-y-3 min-w-[300px]"><label class="text-sm font-medium leading-4 text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70 tabular-nums">From $5 to $1,240+</label><div class="flex items-center gap-4"><span dir="ltr" data-orientation="horizontal" aria-disabled="false" class="relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col data-[disabled]:opacity-50" aria-label="Price range slider" style="--radix-slider-thumb-transform: translateX(-50%);"><span data-orientation="horizontal" class="relative grow overflow-hidden rounded-full bg-secondary data-[orientation=horizontal]:h-2 data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-2"><span data-orientation="horizontal" class="absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full" style="left: 0%; right: 0%;"></span></span><span style="transform: var(--radix-slider-thumb-transform); position: absolute; left: calc(0% + 10px);"><span role="slider" aria-valuemin="5" aria-valuemax="1240" aria-orientation="horizontal" data-orientation="horizontal" tabindex="0" class="block h-5 w-5 rounded-full border-2 border-primary bg-background transition-colors focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-ring/40 data-[disabled]:cursor-not-allowed" data-radix-collection-item="" aria-label="Minimum" aria-valuenow="5" style=""></span></span><span style="transform: var(--radix-slider-thumb-transform); position: absolute; left: calc(100% - 10px);"><span role="slider" aria-valuemin="5" aria-valuemax="1240" aria-orientation="horizontal" data-orientation="horizontal" tabindex="0" class="block h-5 w-5 rounded-full border-2 border-primary bg-background transition-colors focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-ring/40 data-[disabled]:cursor-not-allowed" data-radix-collection-item="" aria-label="Maximum" aria-valuenow="1240" style=""></span></span></span><button class="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm shadow-black/5 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">Go</button></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.