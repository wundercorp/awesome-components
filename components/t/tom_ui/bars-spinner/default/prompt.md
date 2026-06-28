# Build Bars Spinner in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Bars Spinner screenshot](screenshot.png)

## Component

- Author group: `tom_ui`
- Component: `bars-spinner`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: tom_ui
- Component slug: bars-spinner
- Demo slug: default
- Title: bars-spinner
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center min-h-[400px] p-8"><div class="wrapper" style="--spinner-size: 20px; --spinner-color: currentColor;"><div class="spinner"><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div></div><style>
          .wrapper {
            height: var(--spinner-size, 20px);
            width: var(--spinner-size, 20px);
          }

          .spinner {
            position: relative;
            top: 50%;
            left: 50%;
            height: var(--spinner-size, 20px);
            width: var(--spinner-size, 20px);
          }

          .bar {
            animation: spin 1.2s linear infinite;
            background: var(--spinner-color);
            border-radius: 6px;
            height: 8%;
            left: -10%;
            position: absolute;
            top: -3.9%;
            width: 24%;
          }

          .bar:nth-child(1) {
            animation-delay: -1.2s;
            transform: rotate(0.0001deg) translate(146%);
          }

          .bar:nth-child(2) {
            animation-delay: -1.1s;
            transform: rotate(30deg) translate(146%);
          }

          .bar:nth-child(3) {
            animation-delay: -1s;
            transform: rotate(60deg) translate(146%);
          }

          .bar:nth-child(4) {
            animation-delay: -0.9s;
            transform: rotate(90deg) translate(146%);
          }

          .bar:nth-child(5) {
            animation-delay: -0.8s;
            transform: rotate(120deg) translate(146%);
          }

          .bar:nth-child(6) {
            animation-delay: -0.7s;
            transform: rotate(150deg) translate(146%);
          }

          .bar:nth-child(7) {
            animation-delay: -0.6s;
            transform: rotate(180deg) translate(146%);
          }

          .bar:nth-child(8) {
            animation-delay: -0.5s;
            transform: rotate(210deg) translate(146%);
          }

          .bar:nth-child(9) {
            animation-delay: -0.4s;
            transform: rotate(240deg) translate(146%);
          }

          .bar:nth-child(10) {
            animation-delay: -0.3s;
            transform: rotate(270deg) translate(146%);
          }

          .bar:nth-child(11) {
            animation-delay: -0.2s;
            transform: rotate(300deg) translate(146%);
          }

          .bar:nth-child(12) {
            animation-delay: -0.1s;
            transform: rotate(330deg) translate(146%);
          }

          @keyframes spin {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0.15;
            }
          }
        </style></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
