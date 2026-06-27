# Build Animated Spinner in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Animated Spinner screenshot](screenshot.png)

## Component

- Author group: `aliimam`
- Component: `animated-spinner`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: aliimam
- Component slug: animated-spinner
- Demo slug: default
- Title: animated-spinner
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen w-full flex items-center justify-center"><style>
        @property --deg {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: true;
        }

        @property --p {
          syntax: "<percentage>";
          initial-value: 0%;
          inherits: true;
        }

        @property --line-width {
          syntax: "<length>";
          initial-value: 1rem;
          inherits: true;
        }

        .animated-spinner {
          --size: 10rem;
          --color: #ffeb3b;
          --color-2: #9c27b0;
          --color-3: #03a9f4;
          width: var(--size);
          background: conic-gradient(
            from var(--deg),
            var(--color),
            var(--color-2),
            var(--color-3),
            transparent var(--p)
          );
          mask: radial-gradient(
            circle,
            transparent calc(var(--size) / 2 - var(--line-width, 1rem)),
            black calc(var(--size) / 2 - var(--line-width, 1rem))
          );
          filter: drop-shadow(1rem 0 2rem var(--color-3));
          border-radius: 50%;
          aspect-ratio: 1;
          animation: rotate 1.1s ease infinite, line-width 3.3s ease infinite;
        }

        @keyframes rotate {
          from {
            --p: 20%;
          }
          50% {
            --p: 50%;
          }
          70% {
            --p: 30%;
          }
          90% {
            --p: 10%;
          }
          to {
            --p: 20%;
            --deg: -360deg;
          }
        }

        @keyframes line-width {
          from, 20%, 70%, to {
            --line-width: 1rem;
          }
          
          50% {
            --line-width: .1rem;
          }
        }
      </style><div class="animated-spinner "></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
