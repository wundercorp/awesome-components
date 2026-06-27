# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/dhiluxui/aurora-shader/default
- Registry URL: https://21st.dev/r/dhiluxui/aurora-shader
- Author: dhiluxui
- Component slug: aurora-shader
- Demo slug: default
- Title: aurora-shader
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/dhiluxui/aurora-shader with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/dhiluxui__aurora-shader__default.html
- Local screenshot file: generated-21st-prompts/screenshots/dhiluxui__aurora-shader__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative w-full h-screen font-sans"><canvas class="absolute top-0 left-0 w-full h-full" width="992" height="944"></canvas><div class="absolute top-4 left-4 bg-black bg-opacity-70 backdrop-blur-md text-white p-6 rounded-xl shadow-2xl w-full max-w-sm border border-gray-700"><h1 class="text-xl font-bold mb-4 tracking-wider text-center">Volumetric Aurora</h1><div class="space-y-4"><div><label for="flowSpeed" class="block mb-2 text-sm font-medium">Flow Speed: 0.40</label><input id="flowSpeed" min="0" max="2.0" step="0.01" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-400" type="range" value="0.4"></div><div><label for="colorIntensity" class="block mb-2 text-sm font-medium">Color Intensity: 1.20</label><input id="colorIntensity" min="0" max="3" step="0.01" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-400" type="range" value="1.2"></div><div><label for="noiseLayers" class="block mb-2 text-sm font-medium">Noise Layers: 4.00</label><input id="noiseLayers" min="1.0" max="8.0" step="0.01" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-400" type="range" value="4"></div><div><label for="mouseInfluence" class="block mb-2 text-sm font-medium">Mouse Influence: 0.30</label><input id="mouseInfluence" min="0" max="1.0" step="0.01" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-400" type="range" value="0.3"></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.