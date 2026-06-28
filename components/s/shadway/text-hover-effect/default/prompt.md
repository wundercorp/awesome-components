# Build Text Hover Effect in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Text Hover Effect screenshot](screenshot.png)

## Component

- Author group: `shadway`
- Component: `text-hover-effect`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: shadway
- Component slug: text-hover-effect
- Demo slug: default
- Title: text-hover-effect
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><section class="w-full h-full"><svg width="100%" height="100%" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" class="select-none"><defs><linearGradient id="textGradient" gradientUnits="userSpaceOnUse" cx="50%" cy="50%" r="20%"></linearGradient><radialGradient id="revealMask" gradientUnits="userSpaceOnUse" r="25%" cx="0%" cy="-92.74643228428316%"><stop offset="0%" stop-color="white"></stop><stop offset="100%" stop-color="black"></stop></radialGradient><mask id="textMask"><rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)"></rect></mask></defs><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" stroke-width="0.3" class="fill-transparent font-[helvetica] font-bold stroke-neutral-200 dark:stroke-neutral-800" style="font-size: 56px; opacity: 0;">Shadway</text><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" stroke-width="0.3" class="fill-transparent font-[helvetica] font-bold stroke-neutral-200 dark:stroke-neutral-800" style="font-size: 56px; opacity: 1; stroke-dasharray: 1000; stroke-dashoffset: 0px;">Shadway</text><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" stroke-width="0.3" class="fill-transparent font-[helvetica] font-bold " stroke="url(#textGradient)" mask="url(#textMask)" style="font-size: 56px; opacity: 1;">Shadway</text></svg></section></div></div></div>
```

## Reference source files

No reference source files were available.
