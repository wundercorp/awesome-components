# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/wisedev/portfolio-hero/default
- Registry URL: https://21st.dev/r/wisedev/portfolio-hero
- Author: wisedev
- Component slug: portfolio-hero
- Demo slug: default
- Title: portfolio-hero
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/wisedev/portfolio-hero with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/wisedev__portfolio-hero__default.html
- Local screenshot file: generated-21st-prompts/screenshots/wisedev__portfolio-hero__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&amp;family=Antic&amp;display=swap"><div class="w-full"><div class="min-h-screen text-foreground transition-colors" style="background-color: rgb(0, 0, 0); color: rgb(255, 255, 255);"><header class="fixed top-0 left-0 right-0 z-50 px-6 py-6"><nav class="flex items-center justify-between max-w-screen-2xl mx-auto"><div class="relative"><button type="button" class="p-2 transition-colors duration-300 z-50 text-neutral-500 hover:text-black dark:hover:text-white" aria-label="Open menu"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu w-8 h-8 transition-colors duration-300" aria-hidden="true"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg></button></div><div class="text-4xl" style="color: rgb(255, 255, 255); font-family: &quot;Brush Script MT&quot;, &quot;Lucida Handwriting&quot;, cursive;">A</div><button type="button" class="relative w-16 h-8 rounded-full hover:opacity-80 transition-opacity" aria-label="Toggle theme" style="background-color: rgb(38, 38, 38);"><div class="absolute top-1 left-1 w-6 h-6 rounded-full transition-transform duration-300" style="background-color: rgb(255, 255, 255); transform: translateX(2rem);"></div></button></nav></header><main class="relative min-h-screen flex flex-col"><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4"><div class="relative text-center"><div><p class="inline-flex flex-wrap font-bold text-[100px] sm:text-[140px] md:text-[180px] lg:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap" style="color: rgb(195, 228, 29); font-family: &quot;Fira Code&quot;, monospace;"><span style="display: inline-block; filter: blur(0px); opacity: 1; transform: translateY(0px); transition: 0.5s ease-out;">A</span><span style="display: inline-block; filter: blur(0px); opacity: 1; transform: translateY(0px); transition: 0.5s ease-out 100ms;">L</span><span style="display: inline-block; filter: blur(0px); opacity: 1; transform: translateY(0px); transition: 0.5s ease-out 200ms;">E</span><span style="display: inline-block; filter: blur(0px); opacity: 1; transform: translateY(0px); transition: 0.5s ease-out 300ms;">X</span></p></div><div><p class="inline-flex flex-wrap font-bold text-[100px] sm:text-[140px] md:text-[180px] lg:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap" style="color: rgb(195, 228, 29); font-family: &quot;Fira Code&quot;, monospace;"><span style="display: inline-block; filter: blur(0px); opacity: 1; transform: translateY(0px); transition: 0.5s ease-out;">K</span><span style="display: inline-block; filter: blur(0px); opacity: 1; transform: translateY(0px); transition: 0.5s ease-out 100ms;">A</span><span style="display: inline-block; filter: blur(0px); opacity: 1; transform: translateY(0px); transition: 0.5s ease-out 200ms;">N</span><span style="display: inline-block; filter: blur(0px); opacity: 1; transform: translateY(0px); transition: 0.5s ease-out 300ms;">E</span></p></div><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"><div class="w-[65px] h-[110px] sm:w-[90px] sm:h-[152px] md:w-[110px] md:h-[185px] lg:w-[129px] lg:h-[218px] rounded-full overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-110 cursor-pointer"><img alt="Profile" class="w-full h-full object-cover" src="https://i.postimg.cc/y8DnKLyK/albert-dera-ILip77-Sbm-OE-unsplash.jpg"></div></div></div></div><div class="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-32 xl:bottom-36 left-1/2 -translate-x-1/2 w-full px-6"><div class="flex justify-center"><p class="inline-flex flex-wrap text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-center transition-colors duration-300 text-neutral-500 hover:text-black dark:hover:text-white" style="font-family: Antic, sans-serif;"><span style="display: inline-block; filter: blur(0px); opacity: 1; transform: translateY(0px); transition: 0.5s ease-out;">Designing&nbsp;</span><span style="display: inline-block; filter: blur(0px); opacity: 1; transform: translateY(0px); transition: 0.5s ease-out 150ms;">human&nbsp;</span><span style="display: inline-block; filter: blur(0px); opacity: 1; transform: translateY(0px); transition: 0.5s ease-out 300ms;">experiences&nbsp;</span><span style="display: inline-block; filter: blur(0px); opacity: 1; transform: translateY(0px); transition: 0.5s ease-out 450ms;">in&nbsp;</span><span style="display: inline-block; filter: blur(0px); opacity: 1; transform: translateY(0px); transition: 0.5s ease-out 600ms;">code.</span></p></div></div><button type="button" class="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 transition-colors duration-300" aria-label="Scroll down"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-5 h-5 md:w-8 md:h-8 text-neutral-500 hover:text-black dark:hover:text-white transition-colors duration-300" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></main></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.