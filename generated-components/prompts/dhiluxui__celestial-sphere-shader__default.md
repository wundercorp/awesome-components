# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/dhiluxui/celestial-sphere-shader/default
- Registry URL: https://21st.dev/r/dhiluxui/celestial-sphere-shader
- Author: dhiluxui
- Component slug: celestial-sphere-shader
- Demo slug: default
- Title: celestial-sphere-shader
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/dhiluxui/celestial-sphere-shader with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/dhiluxui__celestial-sphere-shader__default.html
- Local screenshot file: generated-21st-prompts/screenshots/dhiluxui__celestial-sphere-shader__default.png

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

No registry metadata available.

## Rendered DOM snapshot

This is the rendered demo HTML extracted from the live preview. Use it to verify structure, class names, visible content, and layout.

```html
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative w-screen h-screen bg-black font-sans overflow-hidden"><div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div><div style="position: fixed; inset: 0px; width: 100vw; height: 100vh; background-color: rgb(0, 0, 0);"><canvas data-engine="three.js r179" width="992" height="944" style="display: block; width: 992px; height: 944px;"></canvas></div><div class="absolute top-4 right-4 bg-black/40 backdrop-blur-xl p-6 rounded-2xl text-white shadow-2xl w-96 border border-white/10"><h1 class="text-2xl font-bold mb-2 tracking-wide text-white/90">Celestial Sphere Controls</h1><div class="grid grid-cols-2 gap-4 mb-4"><div><label class="block mb-2 text-sm text-white/70">Nebula Color A</label><input class="w-full h-10 p-1 bg-gray-800 border-white/20 rounded-md" type="color" value="#082f49"></div><div><label class="block mb-2 text-sm text-white/70">Nebula Color B</label><input class="w-full h-10 p-1 bg-gray-800 border-white/20 rounded-md" type="color" value="#7dd3fc"></div></div><div class="space-y-4"><div><label class="text-sm">Rotation Speed: 0.10</label><input min="0.0" max="0.5" step="0.01" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-sky-500" type="range" value="0.1"></div><div><label class="text-sm">Cloud Density: 2.50</label><input min="1.0" max="8.0" step="0.1" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-sky-500" type="range" value="2.5"></div><div><label class="text-sm">Glow Intensity: 1.50</label><input min="0.0" max="3.0" step="0.01" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-sky-500" type="range" value="1.5"></div></div><div class="mt-6 pt-4 border-t border-white/10 space-y-2"><div class="grid grid-cols-3 gap-2"><button class="px-3 py-2 text-xs bg-white/10 rounded-md hover:bg-white/20 transition-colors">Orion Nebula</button><button class="px-3 py-2 text-xs bg-white/10 rounded-md hover:bg-white/20 transition-colors">Crimson Gas Giant</button><button class="px-3 py-2 text-xs bg-white/10 rounded-md hover:bg-white/20 transition-colors">Ice Planet</button></div><div class="grid grid-cols-2 gap-2"><button class="px-3 py-2 text-sm bg-purple-500/20 text-purple-300 rounded-md hover:bg-purple-500/40 transition-colors">Randomize</button><button class="px-3 py-2 text-sm bg-indigo-500/20 text-indigo-300 rounded-md hover:bg-indigo-500/40 transition-colors">Reset</button></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.