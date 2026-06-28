# Build Flow Button in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Flow Button screenshot](screenshot.png)

## Component

- Author group: `tom_ui`
- Component: `flow-button`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: tom_ui
- Component slug: flow-button
- Demo slug: default
- Title: flow-button
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center min-h-[400px] p-8"><style>
            :root { --rotating-border-color: currentColor; }
            @keyframes dash-flow {
              to {
                stroke-dashoffset: -10;
              }
            }
          </style><div class="relative inline-block group pointer-events-none"><div class="absolute inset-[2px] group-hover:inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-all ease-out duration-200 z-10" style="border-radius: 18px;"><svg width="118" height="36" viewBox="0 0 118 36" aria-hidden="true" preserveAspectRatio="none" class="absolute top-0 left-0 w-full h-full pointer-events-none"><path d="M18,0.5 H100 A18,18 0 0 1 117.5,18 V18 A18,18 0 0 1 100,35.5 H18 A18,18 0 0 1 0.5,18 V18 A18,18 0 0 1 18,0.5 Z" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="6,4" stroke-dashoffset="0" class="group-hover:animate-[dash-flow_1s_linear_infinite]"></path></svg></div><button class="relative z-0 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 pointer-events-auto cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-[550] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-neutral-100 dark:bg-muted/50 text-primary dark:hover:bg-transparent hover:bg-transparent h-9 px-4 py-2 text-sm rounded-full">Hello, World!</button></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
