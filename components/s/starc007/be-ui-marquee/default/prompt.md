# Build Be Ui Marquee in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Be Ui Marquee screenshot](screenshot.png)

## Component

- Author group: `starc007`
- Component: `be-ui-marquee`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: starc007
- Component slug: be-ui-marquee
- Demo slug: default
- Title: be-ui-marquee
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full"><div class="group relative flex overflow-hidden w-full flex-row [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]" style="--gap: 1rem;"><style>
          @keyframes marquee-x {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(calc(-100% - var(--gap)));
            }
          }

          @keyframes marquee-y {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(calc(-100% - var(--gap)));
            }
          }
        </style><div aria-hidden="false" class="flex shrink-0 items-center flex-row group-hover:[animation-play-state:paused]" style="gap: 1rem; animation-name: marquee-x; animation-duration: 25s; animation-timing-function: linear; animation-iteration-count: infinite; animation-direction: normal;"><div class="shrink-0"><div class="mx-4 flex h-12 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground">Vercel</div></div><div class="shrink-0"><div class="mx-4 flex h-12 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground">Linear</div></div><div class="shrink-0"><div class="mx-4 flex h-12 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground">Stripe</div></div><div class="shrink-0"><div class="mx-4 flex h-12 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground">Figma</div></div><div class="shrink-0"><div class="mx-4 flex h-12 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground">GitHub</div></div><div class="shrink-0"><div class="mx-4 flex h-12 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground">Notion</div></div><div class="shrink-0"><div class="mx-4 flex h-12 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground">Loom</div></div><div class="shrink-0"><div class="mx-4 flex h-12 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground">Raycast</div></div></div><div aria-hidden="true" class="flex shrink-0 items-center flex-row group-hover:[animation-play-state:paused]" style="gap: 1rem; animation-name: marquee-x; animation-duration: 25s; animation-timing-function: linear; animation-iteration-count: infinite; animation-direction: normal;"><div class="shrink-0"><div class="mx-4 flex h-12 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground">Vercel</div></div><div class="shrink-0"><div class="mx-4 flex h-12 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground">Linear</div></div><div class="shrink-0"><div class="mx-4 flex h-12 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground">Stripe</div></div><div class="shrink-0"><div class="mx-4 flex h-12 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground">Figma</div></div><div class="shrink-0"><div class="mx-4 flex h-12 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground">GitHub</div></div><div class="shrink-0"><div class="mx-4 flex h-12 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground">Notion</div></div><div class="shrink-0"><div class="mx-4 flex h-12 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground">Loom</div></div><div class="shrink-0"><div class="mx-4 flex h-12 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground">Raycast</div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
