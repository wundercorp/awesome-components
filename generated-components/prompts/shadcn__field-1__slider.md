# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/shadcn/field-1/slider
- Registry URL: https://21st.dev/r/shadcn/field-1
- Author: shadcn
- Component slug: field-1
- Demo slug: slider
- Title: field-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/shadcn/field-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/shadcn__field-1__slider.html
- Local screenshot file: generated-21st-prompts/screenshots/shadcn__field-1__slider.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-md"><div role="group" data-slot="field" data-orientation="vertical" class="group/field flex w-full gap-3 data-[invalid=true]:text-destructive flex-col [&amp;&gt;*]:w-full [&amp;&gt;.sr-only]:w-auto"><div data-slot="field-label" class="flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50">Price Range</div><p data-slot="field-description" class="text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&amp;]:-mt-1.5 [&amp;&gt;a:hover]:text-primary [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4">Set your budget range ($<span class="font-medium tabular-nums">200</span> - <span class="font-medium tabular-nums">800</span>).</p><span dir="ltr" data-orientation="horizontal" aria-disabled="false" class="relative flex touch-none select-none items-center mt-2 w-full" aria-label="Price Range" style="--radix-slider-thumb-transform: translateX(-50%);"><span data-orientation="horizontal" class="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary"><span data-orientation="horizontal" class="absolute h-full bg-primary" style="left: 20%; right: 20%;"></span></span><span style="transform: var(--radix-slider-thumb-transform); position: absolute; left: calc(20% + 6px);"><span role="slider" aria-valuemin="0" aria-valuemax="1000" aria-orientation="horizontal" data-orientation="horizontal" tabindex="0" class="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" data-radix-collection-item="" aria-label="Minimum" aria-valuenow="200" style=""></span></span></span></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.