# Build Crystal Shader in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Crystal Shader screenshot](screenshot.png)

## Component

- Author group: `dhiluxui`
- Component: `crystal-shader`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: dhiluxui
- Component slug: crystal-shader
- Demo slug: default
- Title: crystal-shader
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div style="position: relative; width: 100%; height: 100%;"><canvas width="992" height="944" style="position: fixed; top: 0px; left: 0px; width: 992px; height: 944px; display: block;"></canvas><div style="position: absolute; bottom: 1rem; left: 50%; transform: translateX(-50%); background-color: rgba(0, 0, 0, 0.7); backdrop-filter: blur(10px); color: white; padding: 1.5rem; border-radius: 0.75rem; box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px; width: 100%; max-width: 32rem; border: 1px solid rgb(74, 85, 104);"><h1 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem; letter-spacing: 0.05em; text-align: center;">Crystal Synthesis</h1><div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem 1.5rem;"><div><label for="cellDensity" style="display: block; margin-bottom: 0.5rem; font-size: 0.875rem;">Cell Density: 8.0</label><input id="cellDensity" min="2" max="20" step="0.1" type="range" value="8" style="width: 100%;"></div><div><label for="animationSpeed" style="display: block; margin-bottom: 0.5rem; font-size: 0.875rem;">Animation Speed: 0.20</label><input id="animationSpeed" min="0" max="1" step="0.01" type="range" value="0.2" style="width: 100%;"></div><div><label for="warpFactor" style="display: block; margin-bottom: 0.5rem; font-size: 0.875rem;">Warp Factor: 0.60</label><input id="warpFactor" min="0" max="1" step="0.01" type="range" value="0.6" style="width: 100%;"></div><div><label for="mouseInfluence" style="display: block; margin-bottom: 0.5rem; font-size: 0.875rem;">Mouse Influence: 0.15</label><input id="mouseInfluence" min="0" max="0.5" step="0.01" type="range" value="0.15" style="width: 100%;"></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
