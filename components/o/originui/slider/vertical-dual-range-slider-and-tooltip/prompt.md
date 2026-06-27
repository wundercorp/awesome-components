# Build Slider in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Slider screenshot](screenshot.png)

## Component

- Author group: `originui`
- Component: `slider`
- Variant: `vertical-dual-range-slider-and-tooltip`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: originui
- Component slug: slider
- Demo slug: vertical-dual-range-slider-and-tooltip
- Title: slider
- Description: 

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

No reference metadata available.

## Rendered DOM snapshot

This is the rendered demo HTML extracted from the live preview. Use it to verify structure, class names, visible content, and layout.

```html
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="space-y-4 min-w-[300px]"><label class="text-sm font-medium leading-4 text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Vertical dual range slider and tooltip</label><div class="flex h-40 justify-center"><span data-orientation="vertical" aria-disabled="false" class="relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col data-[disabled]:opacity-50" aria-label="Vertical slider" style="--radix-slider-thumb-transform: translateY(50%);"><span data-orientation="vertical" class="relative grow overflow-hidden rounded-full bg-secondary data-[orientation=horizontal]:h-2 data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-2"><span data-orientation="vertical" class="absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full" style="bottom: 20%; top: 30%;"></span></span><span style="transform: var(--radix-slider-thumb-transform); position: absolute; bottom: calc(20% + 6px);"><span role="slider" aria-valuemin="0" aria-valuemax="10" aria-orientation="vertical" data-orientation="vertical" tabindex="0" class="block h-5 w-5 rounded-full border-2 border-primary bg-background transition-colors focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-ring/40 data-[disabled]:cursor-not-allowed" data-state="closed" data-radix-collection-item="" aria-label="Minimum" aria-valuenow="2" style=""></span></span><span style="transform: var(--radix-slider-thumb-transform); position: absolute; bottom: calc(70% - 4px);"><span role="slider" aria-valuemin="0" aria-valuemax="10" aria-orientation="vertical" data-orientation="vertical" tabindex="0" class="block h-5 w-5 rounded-full border-2 border-primary bg-background transition-colors focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-ring/40 data-[disabled]:cursor-not-allowed" data-state="closed" data-radix-collection-item="" aria-label="Maximum" aria-valuenow="7" style=""></span></span></span></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
