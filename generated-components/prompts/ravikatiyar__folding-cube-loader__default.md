# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ravikatiyar/folding-cube-loader/default
- Registry URL: https://21st.dev/r/ravikatiyar/folding-cube-loader
- Author: ravikatiyar
- Component slug: folding-cube-loader
- Demo slug: default
- Title: folding-cube-loader
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ravikatiyar/folding-cube-loader with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ravikatiyar__folding-cube-loader__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ravikatiyar__folding-cube-loader__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="
          min-h-screen w-full flex flex-col items-center justify-center p-4 transition-colors duration-500
          bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800
        "><div class="text-center mb-8 text-white"><h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Folding Cube Loader</h1><p class="text-sm sm:text-base text-gray-300">Responsive design with theme switching</p></div><div class="
          p-8 sm:p-12 md:p-16 rounded-2xl mb-8 transition-all duration-500
          bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-2xl shadow-blue-500/10
        "><div class="w-10 h-10 relative transform rotate-45 transition-all duration-300"><div class="cube-face float-left w-1/2 h-1/2 relative transform scale-110 cube-face-dark"></div><div class="cube-face float-left w-1/2 h-1/2 relative transform scale-110 origin-top-right rotate-90 cube-face-dark"></div><div class="cube-face float-left w-1/2 h-1/2 relative transform scale-110 origin-bottom-left -rotate-90 cube-face-dark"></div><div class="cube-face float-left w-1/2 h-1/2 relative transform scale-110 origin-bottom-right rotate-180 cube-face-dark"></div></div></div><div class="space-y-6 w-full max-w-md"><div class="flex items-center justify-center space-x-4"><span class="text-sm font-medium text-gray-300">☀️ Light</span><button class="
        relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-500
        bg-blue-600
      " role="switch" aria-checked="true" aria-label="Toggle theme"><span class="
          inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 shadow-lg
          translate-x-6
        "></span><span class="sr-only">Switch to light mode</span></button><span class="text-sm font-medium text-gray-300">🌙 Dark</span></div><div class="text-center"><label class="block text-sm font-medium mb-3 text-gray-300">Size Selection</label><div class="flex flex-wrap gap-2 justify-center"><button class="
            px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 border
            bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600
          ">Small</button><button class="
            px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 border
            bg-blue-600 text-white border-blue-600
          ">Medium</button><button class="
            px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 border
            bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600
          ">Large</button><button class="
            px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 border
            bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600
          ">Extra Large</button></div></div></div><div class="mt-12 text-center text-xs text-gray-500"><p>Responsive • Accessible • Smooth Animations</p></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.