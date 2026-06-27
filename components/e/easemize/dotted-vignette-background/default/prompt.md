# Build Dotted Vignette Background in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Dotted Vignette Background screenshot](screenshot.png)

## Component

- Author group: `easemize`
- Component: `dotted-vignette-background`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: easemize
- Component slug: dotted-vignette-background
- Demo slug: default
- Title: dotted-vignette-background
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
<div id="root"><div class="flex w-full h-screen justify-center items-center"><div class="w-full h-full "><svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="dotted-bg-1i4j73kau-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="5" cy="5" r="2" fill="#6ee7b7"></circle></pattern><radialGradient id="dotted-bg-1i4j73kau-vignette" cx="50%" cy="50%" r="50%" fx="50%" fy="50%"><stop offset="40%" stop-color="rgba(0,0,0,0.9)" stop-opacity="0"></stop><stop offset="100%" stop-color="rgba(0,0,0,0.9)" stop-opacity="1"></stop></radialGradient><radialGradient id="dotted-bg-1i4j73kau-inner-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%"><stop offset="50%" stop-color="rgba(0,0,0,0.8)" stop-opacity="0.7"></stop><stop offset="100%" stop-color="rgba(0,0,0,0.8)" stop-opacity="0"></stop></radialGradient></defs><rect x="0" y="0" width="100%" height="100%" fill="#0f172a" stroke="none"></rect><rect x="0" y="0" width="100%" height="100%" fill="url(#dotted-bg-1i4j73kau-pattern)" stroke="none"></rect><rect x="0" y="0" width="100%" height="100%" fill="url(#dotted-bg-1i4j73kau-vignette)" stroke="none"></rect><circle cx="50%" cy="50%" r="25%" fill="url(#dotted-bg-1i4j73kau-inner-glow)" stroke="none"></circle></svg></div></div></div>
```

## Reference source files

No reference source files were available.
