# Build Loading Bottle in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Loading Bottle screenshot](screenshot.png)

## Component

- Author group: `ruvyui`
- Component: `loading-bottle`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: RuvyUI
- Component slug: loading-bottle
- Demo slug: default
- Title: loading-bottle
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center"><svg viewBox="0 0 205 615" class="cola w-[45px] fill-transparent stroke-black stroke-[15px] stroke-linecap-round"><path d="M47 595c-8 0-26-6-26-34V261c0-17 9-29 16-38s16-28 16-28L68 59l-4-5s3-30 7-36 14-6 32-6 28 0 32 6 7 36 7 36l-4 5 15 136s9 19 16 28 16 21 16 38v300c0 28-18 34-26 34H47z"></path></svg><style>
        .cola {
          --pathlength: 1384;
          stroke-dashoffset: var(--pathlength);
          stroke-dasharray: 0 var(--pathlength);
          animation: loader 8s cubic-bezier(0.5, 0.1, 0.5, 1) infinite both;
        }

        @keyframes loader {
          90%,
          100% {
            stroke-dashoffset: 0;
            stroke-dasharray: var(--pathlength) 0;
          }
        }
      </style></div></div></div></div>
```

## Reference source files

No reference source files were available.
