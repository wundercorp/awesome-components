# Build Loader 10 in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Loader 10 screenshot](screenshot.png)

## Component

- Author group: `ravikatiyar`
- Component: `loader-10`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ravikatiyar
- Component slug: loader-10
- Demo slug: default
- Title: loader-10
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center w-full min-h-[250px]"><div class="relative flex items-center justify-center text-sm" role="status" aria-label="Loading" style="--gooey-primary-color: #f87171; --gooey-secondary-color: #fca5a5; --gooey-border-color: #e5e7eb;"><svg class="absolute w-0 h-0"><defs><filter id="gooey-loader-filter"><feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur"></feGaussianBlur><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 48 -7" result="goo"></feColorMatrix><feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite></filter></defs></svg><style>
            .gooey-loader {
              width: 12em;
              height: 3em;
              position: relative;
              overflow: hidden;
              border-bottom: 8px solid var(--gooey-border-color);
              filter: url(#gooey-loader-filter);
            }

            .gooey-loader::before,
            .gooey-loader::after {
              content: '';
              position: absolute;
              border-radius: 50%;
            }

            .gooey-loader::before {
              width: 22em;
              height: 18em;
              background-color: var(--gooey-primary-color);
              left: -2em;
              bottom: -18em;
              animation: gooey-loader-wee1 2s linear infinite;
            }

            .gooey-loader::after {
              width: 16em;
              height: 12em;
              background-color: var(--gooey-secondary-color);
              left: -4em;
              bottom: -12em;
              animation: gooey-loader-wee2 2s linear infinite 0.75s;
            }

            @keyframes gooey-loader-wee1 {
              0% {
                transform: translateX(-10em) rotate(0deg);
              }
              100% {
                transform: translateX(7em) rotate(180deg);
              }
            }

            @keyframes gooey-loader-wee2 {
              0% {
                transform: translateX(-8em) rotate(0deg);
              }
              100% {
                transform: translateX(8em) rotate(180deg);
              }
            }
          </style><div class="gooey-loader"></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
