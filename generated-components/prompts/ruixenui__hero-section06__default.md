# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ruixenui/hero-section06/default
- Registry URL: https://21st.dev/r/ruixenui/hero-section06
- Author: ruixenui
- Component slug: hero-section06
- Demo slug: default
- Title: hero-section06
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ruixenui/hero-section06 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ruixenui__hero-section06__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ruixenui__hero-section06__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative flex flex-col items-center justify-center w-full py-20"><div class="absolute flex lg:hidden size-40 rounded-full bg-blue-500 blur-[10rem] top-0 left-1/2 -translate-x-1/2 -z-10"></div><div class="flex flex-col items-center justify-center gap-y-8 relative"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="pointer-events-none absolute inset-0 size-full"><circle class="stroke-white/10 stroke-1 currentColor" stroke-dasharray="5 5" cx="50%" cy="50%" r="300" fill="none"></circle></svg><svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="pointer-events-none absolute inset-0 size-full"><circle class="stroke-white/10 stroke-1 currentColor" stroke-dasharray="5 5" cx="50%" cy="50%" r="400" fill="none"></circle></svg><svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="pointer-events-none absolute inset-0 size-full"><circle class="stroke-white/10 stroke-1 currentColor" stroke-dasharray="5 5" cx="50%" cy="50%" r="500" fill="none"></circle></svg><div class="flex flex-col items-center justify-center text-center gap-y-4 bg-background/0"><button class="group relative grid overflow-hidden rounded-full px-2 py-1 shadow-[0_1000px_0_0_hsl(0_0%_15%)_inset] transition-colors duration-200 mx-auto"><span><span class="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]"></span></span><span class="backdrop absolute inset-[1px] rounded-full bg-background transition-colors duration-200 group-hover:bg-neutral-800"></span><span class="z-10 py-0.5 text-sm text-neutral-800 dark:text-neutral-100 flex items-center"><span class="px-2 py-[0.5px] h-[18px] tracking-wide flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-teal-600 text-[9px] font-medium mr-2 text-white">NEW</span>Discover what’s trending now</span></button><h1 class="text-4xl md:text-4xl lg:text-7xl font-bold text-center !leading-tight max-w-4xl mx-auto">Supercharge your  <span class="">growth  </span>with Smart AI Solutions</h1><p class="max-w-xl mx-auto mt-2 text-base lg:text-lg text-center text-muted-foreground">Intelligent tools designed to optimize performance, automate workflows, and scale your impact faster than ever.</p><div class="flex items-center justify-center mt-6 gap-x-4 z-20"><a href="#" class="flex items-center gap-2 group"><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow-sm shadow-black/5 hover:bg-primary/90 h-10 px-8 rounded-xl">Start Free Trial<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right size-4 group-hover:translate-x-1 transition-all duration-300" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button></a><a href="#" class="flex items-center gap-2 group border rounded-xl"><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 shadow-sm shadow-black/5 hover:bg-primary/90 h-10 px-8 rounded-xl bg-white dark:bg-black text-black dark:text-white hover:text-white">Explore the 2024 recap</button></a></div><div class="relative rounded-xl lg:rounded-[32px] border border-border p-2 backdrop-blur-lg mt-10 max-w-6xl mx-auto"><div class="absolute top-1/8 left-1/2 -z-10 bg-gradient-to-r from-sky-500 to-blue-600 w-1/2 lg:w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[4rem] lg:blur-[10rem] animate-image-glow"></div><div class="hidden lg:block absolute -top-1/8 left-1/2 -z-20 bg-blue-600 w-1/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem] animate-image-glow"></div><div class="rounded-lg lg:rounded-[22px] border border-border bg-background"><img alt="dashboard" width="1920" height="1080" class="rounded-lg lg:rounded-[20px]" src="https://github.com/ruixenui/ruixen.com/blob/main/public/38.jpg?raw=true"></div></div><div class="bg-gradient-to-t from-background to-transparent absolute bottom-0 inset-x-0 w-full h-1/2"></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.