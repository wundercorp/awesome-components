# Build Aura Core in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Aura Core screenshot](screenshot.png)

## Component

- Author group: `dhiluxui`
- Component: `aura-core`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: dhiluxui
- Component slug: aura-core
- Demo slug: default
- Title: aura-core
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen h-screen"><div class="relative w-full h-full bg-black"><canvas class="w-full h-full" width="992" height="944" style="width: 992px; height: 944px;"></canvas><div class="absolute z-10 bottom-4 left-4 right-4 md:left-auto md:w-72 p-4 rounded-lg
                            bg-black/30 backdrop-blur-md border border-white/10 text-white shadow-2xl"><div class="flex items-center justify-between mb-4"><h2 class="text-lg font-bold">Aura Core Controls</h2><div class="w-3 h-3 rounded-full bg-yellow-400 animate-pulse"></div></div><div class="space-y-4"><div class="flex flex-col space-y-2"><label class="text-xs font-medium text-gray-400">Hue</label><input min="0" max="360" step="1" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-yellow-400" type="range" value="210"></div><div class="flex flex-col space-y-2"><label class="text-xs font-medium text-gray-400">Power</label><input min="0.1" max="5.0" step="0.1" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-yellow-400" type="range" value="1.5"></div><div class="flex flex-col space-y-2"><label class="text-xs font-medium text-gray-400">Ray Focus</label><input min="5.0" max="100.0" step="1.0" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-yellow-400" type="range" value="30"></div><div class="flex flex-col space-y-2"><label class="text-xs font-medium text-gray-400">Distortion</label><input min="0.0" max="3.0" step="0.1" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-yellow-400" type="range" value="1"></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
