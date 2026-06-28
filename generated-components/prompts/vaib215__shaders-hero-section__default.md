# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/vaib215/shaders-hero-section/default
- Registry URL: https://21st.dev/r/vaib215/shaders-hero-section
- Author: vaib215
- Component slug: shaders-hero-section
- Demo slug: default
- Title: shaders-hero-section
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/vaib215/shaders-hero-section with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/vaib215__shaders-hero-section__default.html
- Local screenshot file: generated-21st-prompts/screenshots/vaib215__shaders-hero-section__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen w-full relative overflow-hidden"><svg class="absolute inset-0 w-0 h-0"><defs><filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%"><feTurbulence baseFrequency="0.005" numOctaves="1" result="noise"></feTurbulence><feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3"></feDisplacementMap><feColorMatrix type="matrix" values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0" result="tint"></feColorMatrix></filter><filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"></feGaussianBlur><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="gooey"></feColorMatrix><feComposite in="SourceGraphic" in2="gooey" operator="atop"></feComposite></filter></defs></svg><div class="absolute inset-0 w-full h-full" backgroundcolor="#000000" data-paper-shader=""><canvas width="1984" height="1888"></canvas></div><div class="absolute inset-0 w-full h-full opacity-60" wireframe="true" backgroundcolor="transparent" data-paper-shader=""><canvas width="1984" height="1888"></canvas></div><header class="relative z-20 flex items-center justify-between p-6"><div class="flex items-center"><svg width="40" height="40" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="21st logo" class="text-white"><path fill-rule="evenodd" clip-rule="evenodd" d="M358.333 0C381.345 0 400 18.6548 400 41.6667V295.833C400 298.135 398.134 300 395.833 300H270.833C268.532 300 266.667 301.865 266.667 304.167V395.833C266.667 398.134 264.801 400 262.5 400H41.6667C18.6548 400 0 381.345 0 358.333V304.72C0 301.793 1.54269 299.081 4.05273 297.575L153.76 207.747C157.159 205.708 156.02 200.679 152.376 200.065L151.628 200H4.16667C1.86548 200 6.71103e-08 198.135 0 195.833V104.167C1.07376e-06 101.865 1.86548 100 4.16667 100H162.5C164.801 100 166.667 98.1345 166.667 95.8333V4.16667C166.667 1.86548 168.532 1.00666e-07 170.833 0H358.333ZM170.833 100C168.532 100 166.667 101.865 166.667 104.167V295.833C166.667 298.135 168.532 300 170.833 300H262.5C264.801 300 266.667 298.135 266.667 295.833V104.167C266.667 101.865 264.801 100 262.5 100H170.833Z" fill="currentColor"></path></svg></div><nav class="flex items-center space-x-2"><a href="#" class="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200">Features</a><a href="#" class="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200">Pricing</a><a href="#" class="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200">Docs</a></nav><div id="gooey-btn" class="relative flex items-center group" style="filter: url(&quot;#gooey-filter&quot;);"><button class="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-19 z-0"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7V17"></path></svg></button><button class="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10">Login</button></div></header><main class="absolute bottom-8 left-8 z-20 max-w-lg"><div class="text-left"><div class="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative" style="filter: url(&quot;#glass-effect&quot;);"><div class="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"></div><span class="text-white/90 text-xs font-light relative z-10">✨ New Paper Shaders Experience</span></div><h1 class="text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-4"><span class="font-medium italic instrument">Beautiful</span> Shader<br><span class="font-light tracking-tight text-white">Experiences</span></h1><p class="text-xs font-light text-white/70 mb-4 leading-relaxed">Create stunning visual experiences with our advanced shader technology. Interactive lighting, smooth animations, and beautiful effects that respond to your every move.</p><div class="flex items-center gap-4 flex-wrap"><button class="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">Pricing</button><button class="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer">Get Started</button></div></div></main><div class="absolute bottom-8 right-8 z-30"><div class="relative w-20 h-20 flex items-center justify-center"><div spotspercolor="5" data-paper-shader="" style="width: 60px; height: 60px; border-radius: 50%;"><canvas width="120" height="120"></canvas></div><svg class="absolute inset-0 w-full h-full" viewBox="0 0 100 100" style="transform: rotate(142.362deg);"><defs><path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"></path></defs><text class="text-sm fill-white/80 instrument"><textPath href="#circle" startOffset="0%">21st.dev is cool • 21st.dev is cool • 21st.dev is cool • 21st.dev is cool •</textPath></text></svg></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.