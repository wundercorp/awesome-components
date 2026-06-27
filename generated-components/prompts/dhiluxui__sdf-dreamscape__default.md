# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/dhiluxui/sdf-dreamscape/default
- Registry URL: https://21st.dev/r/dhiluxui/sdf-dreamscape
- Author: dhiluxui
- Component slug: sdf-dreamscape
- Demo slug: default
- Title: sdf-dreamscape
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/dhiluxui/sdf-dreamscape with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/dhiluxui__sdf-dreamscape__default.html
- Local screenshot file: generated-21st-prompts/screenshots/dhiluxui__sdf-dreamscape__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative w-full h-screen bg-gray-900 font-sans overflow-hidden"><canvas class="absolute top-0 left-0 w-full h-full" width="992" height="944"></canvas><div class="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none"><h1 class="text-5xl md:text-8xl font-bold text-white mix-blend-overlay select-none">SDF Dreamscape</h1></div><div class="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-lg p-4"><div class="bg-black/50 backdrop-blur-md p-6 rounded-2xl shadow-lg space-y-4 border border-white/10"><div class="flex flex-col text-white"><div class="flex justify-between items-center mb-1"><label class="text-sm font-medium select-none">Hue</label><span class="text-sm bg-white/10 px-2 py-0.5 rounded-full select-none">180</span></div><input min="0" max="360" step="1" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-400" type="range" value="180"></div><div class="flex flex-col text-white"><div class="flex justify-between items-center mb-1"><label class="text-sm font-medium select-none">Speed</label><span class="text-sm bg-white/10 px-2 py-0.5 rounded-full select-none">0.4</span></div><input min="0.0" max="2.0" step="0.01" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-400" type="range" value="0.4"></div><div class="flex flex-col text-white"><div class="flex justify-between items-center mb-1"><label class="text-sm font-medium select-none">Iterations</label><span class="text-sm bg-white/10 px-2 py-0.5 rounded-full select-none">5</span></div><input min="1.0" max="8.0" step="1" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-400" type="range" value="5"></div><div class="flex flex-col text-white"><div class="flex justify-between items-center mb-1"><label class="text-sm font-medium select-none">Zoom</label><span class="text-sm bg-white/10 px-2 py-0.5 rounded-full select-none">2.5</span></div><input min="0.5" max="10.0" step="0.1" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-400" type="range" value="2.5"></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.