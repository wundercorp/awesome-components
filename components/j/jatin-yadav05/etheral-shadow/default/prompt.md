# Build Etheral Shadow in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Etheral Shadow screenshot](screenshot.png)

## Component

- Author group: `jatin-yadav05`
- Component: `etheral-shadow`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: jatin-yadav05
- Component slug: etheral-shadow
- Demo slug: default
- Title: etheral-shadow
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
<div id="root"><div class="flex w-full h-screen justify-center items-center"><div style="overflow: hidden; position: relative; width: 100%; height: 100%;"><div style="position: absolute; inset: -100px; filter: url(&quot;#shadowoverlay-«r0»&quot;) blur(4px);"><svg style="position: absolute;"><defs><filter id="shadowoverlay-«r0»"><feTurbulence result="undulation" numOctaves="2" baseFrequency="0.0005,0.002" seed="0" type="turbulence"></feTurbulence><feColorMatrix in="undulation" type="hueRotate" values="335.74359861591694"></feColorMatrix><feColorMatrix in="dist" result="circulation" type="matrix" values="4 0 0 0 1  4 0 0 0 1  4 0 0 0 1  1 0 0 0 0"></feColorMatrix><feDisplacementMap in="SourceGraphic" in2="circulation" scale="100" result="dist"></feDisplacementMap><feDisplacementMap in="dist" in2="undulation" scale="100" result="output"></feDisplacementMap></filter></defs></svg><div style="background-color: rgb(128, 128, 128); mask-image: url(&quot;https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png&quot;); mask-size: cover; mask-repeat: no-repeat; mask-position: center center; width: 100%; height: 100%;"></div></div><div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; z-index: 10;"><h1 class="md:text-7xl text-6xl lg:text-8xl font-bold text-center text-foreground relative z-20">Etheral Shadows</h1></div><div style="position: absolute; inset: 0px; background-image: url(&quot;https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png&quot;); background-size: 240px; background-repeat: repeat; opacity: 0.5;"></div></div></div></div>
```

## Reference source files

No reference source files were available.
