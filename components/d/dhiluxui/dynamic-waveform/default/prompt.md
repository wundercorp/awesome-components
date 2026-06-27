# Build Dynamic Waveform in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Dynamic Waveform screenshot](screenshot.png)

## Component

- Author group: `dhiluxui`
- Component: `dynamic-waveform`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: dhiluxui
- Component slug: dynamic-waveform
- Demo slug: default
- Title: dynamic-waveform
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative w-screen h-screen bg-gray-900 font-sans overflow-hidden"><div style="position: fixed; inset: 0px; background: rgb(0, 0, 0); overflow: hidden;"><canvas data-engine="three.js r179" width="992" height="944" style="display: block; width: 992px; height: 944px;"></canvas></div><div class="absolute top-4 left-4 bg-black/40 backdrop-blur-xl p-6 rounded-2xl text-white shadow-2xl w-96 border border-white/10"><h1 class="text-2xl font-bold mb-2 tracking-wide text-white/90">Dynamic Waveform Controls</h1><div class="grid grid-cols-2 gap-4 mb-4"><div><label class="block mb-2 text-sm text-white/70">Color A</label><input class="w-full h-10 p-1 bg-gray-800 border-white/20 rounded-md" type="color" value="#fb7185"></div><div><label class="block mb-2 text-sm text-white/70">Color B</label><input class="w-full h-10 p-1 bg-gray-800 border-white/20 rounded-md" type="color" value="#67e8f9"></div></div><div class="space-y-4"><div><label class="text-sm">Speed: 0.50</label><input min="0.0" max="2.0" step="0.01" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-rose-500" type="range" value="0.5"></div><div><label class="text-sm">Wave Complexity: 4.0</label><input min="1.0" max="8.0" step="0.1" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-rose-500" type="range" value="4"></div><div><label class="text-sm">Amplitude: 1.00</label><input min="0.0" max="2.0" step="0.01" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-rose-500" type="range" value="1"></div><div><label class="text-sm">Frequency: 20.0</label><input min="5.0" max="50.0" step="0.1" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-rose-500" type="range" value="20"></div><div><label class="text-sm">Mouse Distortion: 0.50</label><input min="0.0" max="2.0" step="0.01" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-rose-500" type="range" value="0.5"></div></div><div class="mt-6 pt-4 border-t border-white/10"><div class="grid grid-cols-3 gap-2"><button class="px-3 py-2 text-xs bg-white/10 rounded-md hover:bg-white/20 transition-colors">Signal Scan</button><button class="px-3 py-2 text-xs bg-white/10 rounded-md hover:bg-white/20 transition-colors">Deep Sea</button><button class="px-3 py-2 text-xs bg-white/10 rounded-md hover:bg-white/20 transition-colors">Vaporwave</button></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
