# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/erikx/mini-navbar/default
- Registry URL: https://21st.dev/r/erikx/mini-navbar
- Author: erikx
- Component slug: mini-navbar
- Demo slug: default
- Title: mini-navbar
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/erikx/mini-navbar with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/erikx__mini-navbar__default.html
- Local screenshot file: generated-21st-prompts/screenshots/erikx__mini-navbar__default.png

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
<div id="root"><div class="relative min-h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden"><div class="absolute inset-0"><img class="w-full h-full object-cover grayscale" alt="Background Stars" src="https://cdn.pixabay.com/photo/2016/06/05/07/59/stars-1436950_1280.jpg"></div><header class="fixed top-6 left-1/2 transform -translate-x-1/2 z-20
                       flex flex-col items-center
                       pl-6 pr-6 py-3 backdrop-blur-sm
                       rounded-full
                       border border-[#333] bg-[#1f1f1f57]
                       w-[calc(100%-2rem)] sm:w-auto
                       transition-[border-radius] duration-0 ease-in-out"><div class="flex items-center justify-between w-full gap-x-6 sm:gap-x-8"><div class="flex items-center"><div class="relative w-5 h-5 flex items-center justify-center"><span class="absolute w-1.5 h-1.5 rounded-full bg-gray-200 top-0 left-1/2 transform -translate-x-1/2 opacity-80"></span><span class="absolute w-1.5 h-1.5 rounded-full bg-gray-200 left-0 top-1/2 transform -translate-y-1/2 opacity-80"></span><span class="absolute w-1.5 h-1.5 rounded-full bg-gray-200 right-0 top-1/2 transform -translate-y-1/2 opacity-80"></span><span class="absolute w-1.5 h-1.5 rounded-full bg-gray-200 bottom-0 left-1/2 transform -translate-x-1/2 opacity-80"></span></div></div><nav class="hidden sm:flex items-center space-x-4 sm:space-x-6 text-sm"><a href="#1" class="group relative inline-block overflow-hidden h-5 flex items-center text-sm"><div class="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2"><span class="text-gray-300">Manifesto</span><span class="text-white">Manifesto</span></div></a><a href="#2" class="group relative inline-block overflow-hidden h-5 flex items-center text-sm"><div class="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2"><span class="text-gray-300">Careers</span><span class="text-white">Careers</span></div></a><a href="#3" class="group relative inline-block overflow-hidden h-5 flex items-center text-sm"><div class="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2"><span class="text-gray-300">Discover</span><span class="text-white">Discover</span></div></a></nav><div class="hidden sm:flex items-center gap-2 sm:gap-3"><button class="px-4 py-2 sm:px-3 text-xs sm:text-sm border border-[#333] bg-[rgba(31,31,31,0.62)] text-gray-300 rounded-full hover:border-white/50 hover:text-white transition-colors duration-200 w-full sm:w-auto">LogIn</button><div class="relative group w-full sm:w-auto"><div class="absolute inset-0 -m-2 rounded-full
                     hidden sm:block
                     bg-gray-100
                     opacity-40 filter blur-lg pointer-events-none
                     transition-all duration-300 ease-out
                     group-hover:opacity-60 group-hover:blur-xl group-hover:-m-3"></div><button class="relative z-10 px-4 py-2 sm:px-3 text-xs sm:text-sm font-semibold text-black bg-gradient-to-br from-gray-100 to-gray-300 rounded-full hover:from-gray-200 hover:to-gray-400 transition-all duration-200 w-full sm:w-auto">Signup</button></div></div><button class="sm:hidden flex items-center justify-center w-8 h-8 text-gray-300 focus:outline-none" aria-label="Open Menu"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div><div class="sm:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
                       max-h-0 opacity-0 pt-0 pointer-events-none"><nav class="flex flex-col items-center space-y-4 text-base w-full"><a href="#1" class="text-gray-300 hover:text-white transition-colors w-full text-center">Manifesto</a><a href="#2" class="text-gray-300 hover:text-white transition-colors w-full text-center">Careers</a><a href="#3" class="text-gray-300 hover:text-white transition-colors w-full text-center">Discover</a></nav><div class="flex flex-col items-center space-y-4 mt-4 w-full"><button class="px-4 py-2 sm:px-3 text-xs sm:text-sm border border-[#333] bg-[rgba(31,31,31,0.62)] text-gray-300 rounded-full hover:border-white/50 hover:text-white transition-colors duration-200 w-full sm:w-auto">LogIn</button><div class="relative group w-full sm:w-auto"><div class="absolute inset-0 -m-2 rounded-full
                     hidden sm:block
                     bg-gray-100
                     opacity-40 filter blur-lg pointer-events-none
                     transition-all duration-300 ease-out
                     group-hover:opacity-60 group-hover:blur-xl group-hover:-m-3"></div><button class="relative z-10 px-4 py-2 sm:px-3 text-xs sm:text-sm font-semibold text-black bg-gradient-to-br from-gray-100 to-gray-300 rounded-full hover:from-gray-200 hover:to-gray-400 transition-all duration-200 w-full sm:w-auto">Signup</button></div></div></div></header><main class="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4 pt-24"><h1 class="text-8xl md:text-9xl font-bold text-white mb-4 tracking-tight drop-shadow-xl">MINI NAVBAR</h1><div class="flex flex-col sm:flex-row items-center text-xl text-gray-300 mb-8 space-y-2 sm:space-y-0 sm:space-x-2"><span>Please support by saving this component</span><button class="px-4 py-1 border border-[#333] bg-[rgba(31,31,31,0.62)] rounded-full text-white transition-colors duration-200 cursor-pointer text-base
                       inline-flex items-center justify-center"><span>Thank You</span></button></div></main></div></div>
```

## Public registry source files

No public registry source files were available.