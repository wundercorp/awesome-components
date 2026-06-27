# Build Living Ferrofluid in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Living Ferrofluid screenshot](screenshot.png)

## Component

- Author group: `dhiluxui`
- Component: `living-ferrofluid`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: dhiluxui
- Component slug: living-ferrofluid
- Demo slug: default
- Title: living-ferrofluid
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><main class="hero-section w-full h-screen flex items-center justify-center"><svg width="0" height="0" style="position: absolute;"><filter id="ferrofluid"><feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur"></feGaussianBlur><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -15" result="contrast"></feColorMatrix><feComposite in="SourceGraphic" in2="contrast" operator="atop"></feComposite><feTurbulence type="fractalNoise" baseFrequency="0.02 0.08" numOctaves="3" result="noise"></feTurbulence><feDisplacementMap in="contrast" in2="noise" scale="50"></feDisplacementMap></filter></svg><div class="ferrofluid-canvas"><div class="globule globule-1"></div><div class="globule globule-2"></div><div class="globule globule-3"></div></div><div class="relative z-10 flex flex-col items-center justify-center h-full text-center p-8"><h1 class="text-5xl md:text-7xl font-black text-white tracking-tight mb-4" style="text-shadow: rgba(0, 0, 0, 0.5) 0px 0px 15px;">Forging the Future</h1><p class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8" style="text-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;">Experience a new wave of digital artistry with dynamic, fluid animations that redefine interaction.</p><a href="#" class="bg-white text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-white/20">Discover Now</a></div></main></div></div></div>
```

## Reference source files

No reference source files were available.
