# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/dhiluxui/liquid-crystal/default
- Registry URL: https://21st.dev/r/dhiluxui/liquid-crystal
- Author: dhiluxui
- Component slug: liquid-crystal
- Demo slug: default
- Title: liquid-crystal
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/dhiluxui/liquid-crystal with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/dhiluxui__liquid-crystal__default.html
- Local screenshot file: generated-21st-prompts/screenshots/dhiluxui__liquid-crystal__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative w-full h-screen bg-gray-900 font-sans antialiased overflow-hidden"><canvas class="absolute top-0 left-0 w-full h-full" width="992" height="944"></canvas><div class="absolute top-4 left-4 bg-gray-900/60 backdrop-blur-xl text-white p-6 rounded-2xl shadow-2xl w-[340px] border border-white/10 transition-all duration-300"><h1 class="text-2xl font-bold mb-6 tracking-wider text-white/90">Liquid Crystal</h1><div class="mb-4"><label for="hue" class="block mb-2 text-sm font-medium text-white/80">Hue: 225</label><input id="hue" min="0" max="360" step="1" class="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500" type="range" value="225"></div><div class="mb-4"><label for="speed" class="block mb-2 text-sm font-medium text-white/80">Speed: 0.40</label><input id="speed" min="0" max="2" step="0.01" class="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500" type="range" value="0.4"></div><div class="mb-4"><label for="noise" class="block mb-2 text-sm font-medium text-white/80">Noise: 0.20</label><input id="noise" min="0" max="1" step="0.01" class="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500" type="range" value="0.2"></div><div class="mb-4"><label for="warp" class="block mb-2 text-sm font-medium text-white/80">Warp: 0.10</label><input id="warp" min="0" max="0.5" step="0.01" class="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500" type="range" value="0.1"></div><div class="mb-4"><label for="zoom" class="block mb-2 text-sm font-medium text-white/80">Zoom: 1.50</label><input id="zoom" min="0.5" max="5" step="0.01" class="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500" type="range" value="1.5"></div><div class="mb-4"><label for="brightness" class="block mb-2 text-sm font-medium text-white/80">Brightness: 0.90</label><input id="brightness" min="0.1" max="2" step="0.01" class="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500" type="range" value="0.9"></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.