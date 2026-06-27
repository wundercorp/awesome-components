# Build Animated Gradient Background in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Animated Gradient Background screenshot](screenshot.png)

## Component

- Author group: `hammamikhairi`
- Component: `animated-gradient-background`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: hammamikhairi
- Component slug: animated-gradient-background
- Demo slug: default
- Title: animated-gradient-background
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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="relative w-full h-screen overflow-hidden"><div class="absolute inset-0 overflow-hidden " style="opacity: 1; transform: none;"><div class="absolute inset-0 transition-transform" style="background: radial-gradient(125% 125% at 50% 20%, rgb(10, 10, 10) 35%, rgb(41, 121, 255) 50%, rgb(255, 128, 171) 60%, rgb(255, 109, 0) 70%, rgb(255, 214, 0) 80%, rgb(0, 230, 118) 90%, rgb(61, 90, 254) 100%);"></div></div><div class="relative z-10 flex flex-col items-center justify-start h-full px-4 pt-32 text-center"><div delay="0.4" duration="0.9"><div style="width: 100%; height: 100%; line-height: 0;"><canvas width="300" height="150" style="width: 100%; height: 100%;"></canvas></div></div><p class="mt-4 text-lg text-gray-300 md:text-xl max-w-lg">A customizable animated radial gradient background with a subtle breathing effect.</p></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
