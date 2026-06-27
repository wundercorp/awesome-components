# Build Slider Number Flow in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Slider Number Flow screenshot](screenshot.png)

## Component

- Author group: `barvian`
- Component: `slider-number-flow`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: barvian
- Component slug: slider-number-flow
- Demo slug: default
- Title: slider-number-flow
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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="flex items-center justify-center p-8"><span dir="ltr" data-orientation="horizontal" aria-disabled="false" aria-label="Volume" class="relative flex h-5 w-[200px] touch-none select-none items-center" style="--radix-slider-thumb-transform: translateX(-50%);"><span data-orientation="horizontal" class="relative h-[3px] grow rounded-full bg-zinc-100 dark:bg-zinc-800"><span data-orientation="horizontal" class="absolute h-full rounded-full bg-black dark:bg-white" style="left: 0%; right: 50%;"></span></span><span style="transform: var(--radix-slider-thumb-transform); position: absolute; left: calc(50% + 0px);"><span role="slider" aria-label="Volume" aria-valuemin="0" aria-valuemax="100" aria-orientation="horizontal" data-orientation="horizontal" tabindex="0" class="relative block h-5 w-5 rounded-[1rem] bg-white shadow-md ring ring-black/10" data-radix-collection-item="" aria-valuenow="50" style=""><number-flow-react data-will-change="" class="absolute bottom-8 left-1/2 -translate-x-1/2 text-lg font-semibold" continuous=""></number-flow-react></span></span></span></div></div></div></div>
```

## Reference source files

No reference source files were available.
