# Build Text Marquee in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Text Marquee screenshot](screenshot.png)

## Component

- Author group: `tom_ui`
- Component: `text-marquee`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: tom_ui
- Component slug: text-marquee
- Demo slug: default
- Title: text-marquee
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center min-h-[400px] w-full"><style>
          @keyframes slide-vertical {
            to {
              translate: 0 var(--destination);
            }
          }
        </style><div class="flex relative text-2xl font-bold"><div class="flex relative overflow-hidden flex-row gap-1 items-center w-min h-min"><div class="whitespace-pre size-auto relative"><span class="text-2xl font-semibold text-muted-foreground mr-1">spell.sh/</span></div><div class="opacity-100 mask-[linear-gradient(rgba(0,0,0,0)_0%,rgb(0,0,0)_43.6902%,rgba(0,0,0,0)_100%)] relative w-auto overflow-hidden" style="height: 120px;"><div class="relative h-full" style="--count: 5; --speed: 0.8;"><div class="h-[40px] flex items-center" style="--index: 0; --origin: calc((var(--count) - var(--index)) * 100%); --destination: calc((var(--index) + 1) * -100%); --duration: calc(var(--speed) * 5s); --delay: calc((var(--duration) / var(--count)) * var(--index) - var(--duration)); translate: 0 var(--origin); animation: slide-vertical var(--duration) var(--delay) infinite linear;"><span>adgv</span></div><div class="h-[40px] flex items-center" style="--index: 1; --origin: calc((var(--count) - var(--index)) * 100%); --destination: calc((var(--index) + 1) * -100%); --duration: calc(var(--speed) * 5s); --delay: calc((var(--duration) / var(--count)) * var(--index) - var(--duration)); translate: 0 var(--origin); animation: slide-vertical var(--duration) var(--delay) infinite linear;"><span>tomm</span></div><div class="h-[40px] flex items-center" style="--index: 2; --origin: calc((var(--count) - var(--index)) * 100%); --destination: calc((var(--index) + 1) * -100%); --duration: calc(var(--speed) * 5s); --delay: calc((var(--duration) / var(--count)) * var(--index) - var(--duration)); translate: 0 var(--origin); animation: slide-vertical var(--duration) var(--delay) infinite linear;"><span>hugh</span></div><div class="h-[40px] flex items-center" style="--index: 3; --origin: calc((var(--count) - var(--index)) * 100%); --destination: calc((var(--index) + 1) * -100%); --duration: calc(var(--speed) * 5s); --delay: calc((var(--duration) / var(--count)) * var(--index) - var(--duration)); translate: 0 var(--origin); animation: slide-vertical var(--duration) var(--delay) infinite linear;"><span>alex</span></div><div class="h-[40px] flex items-center" style="--index: 4; --origin: calc((var(--count) - var(--index)) * 100%); --destination: calc((var(--index) + 1) * -100%); --duration: calc(var(--speed) * 5s); --delay: calc((var(--duration) / var(--count)) * var(--index) - var(--duration)); translate: 0 var(--origin); animation: slide-vertical var(--duration) var(--delay) infinite linear;"><span>emily</span></div></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
