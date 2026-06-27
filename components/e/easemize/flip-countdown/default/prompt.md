# Build Flip Countdown in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Flip Countdown screenshot](screenshot.png)

## Component

- Author group: `easemize`
- Component: `flip-countdown`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: easemize
- Component slug: flip-countdown
- Demo slug: default
- Title: flip-countdown
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col items-center gap-8 p-4"><div class="flip-countdown-container"><div class="flip-unit"><div class="flip-card flip-card__bottom">0</div><div class="flip-card flip-card__top">0</div><div class="flipper"><div class="flip-card flipper__top">0</div><div class="flip-card flipper__bottom">0</div></div></div><div class="flip-unit"><div class="flip-card flip-card__bottom">8</div><div class="flip-card flip-card__top">8</div><div class="flipper"><div class="flip-card flipper__top">8</div><div class="flip-card flipper__bottom">8</div></div></div><div class="flip-unit"><div class="flip-card flip-card__bottom">8</div><div class="flip-card flip-card__top">8</div><div class="flipper"><div class="flip-card flipper__top">8</div><div class="flip-card flipper__bottom">8</div></div></div></div><div class="flex flex-wrap items-center justify-center gap-4"><div class="flex flex-col gap-1.5"><label for="from" class="text-sm font-medium text-muted-foreground">From</label><input id="from" inputmode="numeric" class="w-32 rounded-md border bg-transparent p-2 text-center" placeholder="e.g., 10000" type="text" value="100"></div><div class="flex flex-col gap-1.5"><label for="to" class="text-sm font-medium text-muted-foreground">To</label><input id="to" inputmode="numeric" class="w-32 rounded-md border bg-transparent p-2 text-center" placeholder="e.g., 0" type="text" value="0"></div><button class="self-end rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90">Restart</button></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
