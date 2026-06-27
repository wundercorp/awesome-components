# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/erikx/sign-in-flow-1/default
- Registry URL: https://21st.dev/r/erikx/sign-in-flow-1
- Author: erikx
- Component slug: sign-in-flow-1
- Demo slug: default
- Title: sign-in-flow-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/erikx/sign-in-flow-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/erikx__sign-in-flow-1__default.html
- Local screenshot file: generated-21st-prompts/screenshots/erikx__sign-in-flow-1__default.png

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
<div id="root"><div class="flex w-full h-screen justify-center items-center"><div class="flex w-[100%] flex-col min-h-screen bg-black relative"><div class="absolute inset-0 z-0"><div class="absolute inset-0"><div class="h-full relative w-full bg-black"> <div class="h-full w-full"><div class="absolute inset-0  h-full w-full" style="position: relative; width: 100%; height: 100%; overflow: hidden; pointer-events: auto;"><div style="width: 100%; height: 100%;"><canvas data-engine="three.js r176" width="992" height="944" style="display: block; width: 992px; height: 944px;"></canvas></div></div></div><div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div></div></div><div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,1)_0%,_transparent_100%)]"></div><div class="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black to-transparent"></div></div><div class="relative z-10 flex flex-col flex-1"><header class="fixed top-6 left-1/2 transform -translate-x-1/2 z-20
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
                     group-hover:opacity-60 group-hover:blur-xl group-hover:-m-3"></div><button class="relative z-10 px-4 py-2 sm:px-3 text-xs sm:text-sm font-semibold text-black bg-gradient-to-br from-gray-100 to-gray-300 rounded-full hover:from-gray-200 hover:to-gray-400 transition-all duration-200 w-full sm:w-auto">Signup</button></div></div></div></header><div class="flex flex-1 flex-col lg:flex-row "><div class="flex-1 flex flex-col justify-center items-center"><div class="w-full mt-[150px] max-w-sm"><div class="space-y-6 text-center" style="opacity: 1; transform: none;"><div class="space-y-1"><h1 class="text-[2.5rem] font-bold leading-[1.1] tracking-tight text-white">Welcome Developer</h1><p class="text-[1.8rem] text-white/70 font-light">Your sign in component</p></div><div class="space-y-4"><button class="backdrop-blur-[2px] w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full py-3 px-4 transition-colors"><span class="text-lg">G</span><span>Sign in with Google</span></button><div class="flex items-center gap-4"><div class="h-px bg-white/10 flex-1"></div><span class="text-white/40 text-sm">or</span><div class="h-px bg-white/10 flex-1"></div></div><form><div class="relative"><input placeholder="info@gmail.com" class="w-full backdrop-blur-[1px] text-white border-1 border-white/10 rounded-full py-3 px-4 focus:outline-none focus:border focus:border-white/30 text-center" required="" type="email" value=""><button type="submit" class="absolute right-1.5 top-1.5 text-white w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors group overflow-hidden"><span class="relative w-full h-full block overflow-hidden"><span class="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-full">→</span><span class="absolute inset-0 flex items-center justify-center transition-transform duration-300 -translate-x-full group-hover:translate-x-0">→</span></span></button></div></form></div><p class="text-xs text-white/40 pt-10">By signing up, you agree to the <a href="#" class="underline text-white/40 hover:text-white/60 transition-colors">MSA</a>, <a href="#" class="underline text-white/40 hover:text-white/60 transition-colors">Product Terms</a>, <a href="#" class="underline text-white/40 hover:text-white/60 transition-colors">Policies</a>, <a href="#" class="underline text-white/40 hover:text-white/60 transition-colors">Privacy Notice</a>, and <a href="#" class="underline text-white/40 hover:text-white/60 transition-colors">Cookie Notice</a>.</p></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.