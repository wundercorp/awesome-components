# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/danielpetho/text-rotate/landing-hero
- Registry URL: https://21st.dev/r/danielpetho/text-rotate
- Author: danielpetho
- Component slug: text-rotate
- Demo slug: landing-hero
- Title: text-rotate
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/danielpetho/text-rotate with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/danielpetho__text-rotate__landing-hero.html
- Local screenshot file: generated-21st-prompts/screenshots/danielpetho__text-rotate__landing-hero.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><section class="w-full h-screen overflow-hidden md:overflow-visible flex flex-col items-center justify-center relative"><div class="absolute top-0 left-0 w-full h-full"><div class="absolute will-change-transform top-[15%] left-[2%] md:top-[25%] md:left-[5%]" style="transform: translate3d(0px, 0px, 0px);"><img alt="A Black and White Photo of a Woman Brushing Her Teeth" class="w-16 h-12 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] shadow-2xl rounded-xl" src="https://images.unsplash.com/photo-1727341554370-80e0fe9ad082?q=80&amp;w=2276&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style="opacity: 1;"></div><div class="absolute will-change-transform top-[0%] left-[8%] md:top-[6%] md:left-[11%]" style="transform: translate3d(0px, 0px, 0px);"><img alt="Neon Palm" class="w-40 h-28 sm:w-48 sm:h-36 md:w-56 md:h-44 lg:w-60 lg:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-12 shadow-2xl rounded-xl" src="https://images.unsplash.com/photo-1640680608781-2e4199dd1579?q=80&amp;w=3087&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style="opacity: 1;"></div><div class="absolute will-change-transform top-[90%] left-[6%] md:top-[80%] md:left-[8%]" style="transform: translate3d(0px, 0px, 0px);"><img alt="A blurry photo of a crowd of people" class="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 object-cover -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rounded-xl" src="https://images.unsplash.com/photo-1726083085160-feeb4e1e5b00?q=80&amp;w=3024&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style="opacity: 1;"></div><div class="absolute will-change-transform top-[0%] left-[87%] md:top-[2%] md:left-[83%]" style="transform: translate3d(0px, 0px, 0px);"><img alt="Rippling Crystal Blue Water" class="w-40 h-36 sm:w-48 sm:h-44 md:w-60 md:h-52 lg:w-64 lg:h-56 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[6deg] rounded-xl" src="https://images.unsplash.com/photo-1562016600-ece13e8ba570?q=80&amp;w=2838&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style="opacity: 1;"></div><div class="absolute will-change-transform top-[78%] left-[83%] md:top-[68%] md:left-[83%]" style="transform: translate3d(0px, 0px, 0px);"><img alt="Mann im schwarzen Hemd unter blauem Himmel" class="w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[19deg] rounded-xl" src="https://images.unsplash.com/photo-1624344965199-ed40391d20f2?q=80&amp;w=2960&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style="opacity: 1;"></div></div><div class="flex flex-col justify-center items-center w-[250px] sm:w-[300px] md:w-[500px] lg:w-[700px] z-50 pointer-events-auto"><h1 class="text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-center w-full justify-center items-center flex-col flex whitespace-pre leading-tight font-calendas tracking-tight space-y-1 md:space-y-4" style="opacity: 1; transform: none;"><span>Make your </span><span class="flex whitespace-pre" style="transform: scale(1.07586, 1); transform-origin: 50% 50% 0px;"><span class="flex whitespace-pre" style="transform: translate3d(-8.30079px, 0px, 0px) scale(0.929493, 1) scale(1, 1); transform-origin: 50% 50% 0px;">website </span><span class="flex flex-wrap whitespace-pre-wrap overflow-hidden pr-3 text-[#0015ff] py-0 pb-2 md:pb-4 rounded-xl" style="transform: translate3d(-19.043px, 0px, 0px) scale(0.929493, 1) scale(1.02571, 1); transform-origin: 50% 50% 0px;"><span class="sr-only">fun</span><div class="flex flex-wrap" aria-hidden="true" style="transform: translate3d(-1.16958px, 0px, 0px) scale(0.974935, 1) scale(1, 1); transform-origin: 50% 50% 0px;"><span class="inline-flex"><span class="inline-block" style="opacity: 0; transform: translateY(30.6602%);">f</span><span class="inline-block" style="opacity: 0; transform: translateY(14.2716%);">u</span><span class="inline-block" style="opacity: 0; transform: translateY(4.31987%);">n</span></span></div></span></span></h1><p class="text-sm sm:text-lg md:text-xl lg:text-2xl text-center font-overusedGrotesk pt-4 sm:pt-8 md:pt-10 lg:pt-12" style="opacity: 1; transform: none;">with a growing library of ready-to-use react components &amp; microinteractions. free &amp; open source.</p><div class="flex flex-row justify-center space-x-4 items-center mt-10 sm:mt-16 md:mt-20 lg:mt-20 text-xs"><button class="sm:text-base md:text-lg lg:text-xl font-semibold tracking-tight text-background bg-foreground px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-3 rounded-full z-20 shadow-2xl font-calendas" style="opacity: 1; transform: none;"><a href="/docs/introduction">Check docs <span class="font-serif ml-1">→</span></a></button><button class="sm:text-base md:text-lg lg:text-xl font-semibold tracking-tight text-white bg-[#0015ff] px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-3 rounded-full z-20 shadow-2xl font-calendas" style="opacity: 1; transform: none;"><a href="https://github.com/danielpetho/fancy">★ on GitHub</a></button></div></div></section></div></div></div>
```

## Public registry source files

No public registry source files were available.