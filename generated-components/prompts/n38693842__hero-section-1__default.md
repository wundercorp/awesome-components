# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/n38693842/hero-section-1/default
- Registry URL: https://21st.dev/r/n38693842/hero-section-1
- Author: n38693842
- Component slug: hero-section-1
- Demo slug: default
- Title: hero-section-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/n38693842/hero-section-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/n38693842__hero-section-1__default.html
- Local screenshot file: generated-21st-prompts/screenshots/n38693842__hero-section-1__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><section class="bg-white dark:bg-black text-black dark:text-white min-h-screen w-full flex flex-col justify-center items-center px-4 relative"><div class="absolute top-4 right-4"><button class="p-2 rounded-full border hover:bg-gray-100 dark:hover:bg-gray-800 transition" aria-label="Toggle theme"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg></button></div><div class="mb-6" tabindex="0" style="opacity: 1; transform: none;"><div class="flex items-center px-4 py-1.5 rounded-full bg-black/10 dark:bg-white/10 text-sm font-medium border border-black/10 dark:border-white/20 backdrop-blur-md" style="transform: scale(1.00043);">✨ Introducing Sparkles<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2 h-4 w-4" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div></div><h1 class="text-5xl sm:text-6xl font-bold text-center leading-tight tracking-tight" style="opacity: 1; transform: none;">Build sites <br><span class="text-[#f7cbb7] dark:text-[#f7cbb7]">that sell well.</span></h1><p class="text-gray-600 dark:text-gray-400 mt-6 max-w-xl text-center text-lg" style="opacity: 1;">Future UI is a collection of interactive Tailwind CSS components built for <strong>React</strong> and <strong>Vue.js</strong>.</p><div class="flex flex-col sm:flex-row items-center gap-4 mt-8" style="opacity: 1; transform: none;"><button class="bg-black dark:bg-white text-white dark:text-black text-sm font-medium px-6 py-3 rounded-full hover:opacity-90 transition hover:cursor-pointer 
          ">Get lifetime access — $59</button><button class="text-black dark:text-white text-sm font-medium px-6 py-3 rounded-full border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition hover:cursor-pointer">Explore components</button></div><div class="mt-10 flex flex-col sm:flex-row items-center gap-3 text-sm text-gray-600 dark:text-white/80" style="opacity: 1;"><div class="flex items-center -space-x-2"><div class="relative group"><div class="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white dark:text-black bg-black/80 dark:bg-white/10 dark:text-white border dark:border-white/10  border-white/10 rounded shadow-md pointer-events-none" style="opacity: 0; transform: translateY(8px);">Michael</div><img alt="Michael" class="w-8 h-8 rounded-full border-2 border-white dark:border-black" src="https://avatars.githubusercontent.com/u/1?v=4"></div><div class="relative group"><div class="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white dark:text-black bg-black/80 dark:bg-white/10 dark:text-white border dark:border-white/10  border-white/10 rounded shadow-md pointer-events-none" style="opacity: 0; transform: translateY(8px);">Tamara</div><img alt="Tamara" class="w-8 h-8 rounded-full border-2 border-white dark:border-black" src="https://avatars.githubusercontent.com/u/2?v=4"></div><div class="relative group"><div class="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white dark:text-black bg-black/80 dark:bg-white/10 dark:text-white border dark:border-white/10  border-white/10 rounded shadow-md pointer-events-none" style="opacity: 0; transform: translateY(8px);">Diego</div><img alt="Diego" class="w-8 h-8 rounded-full border-2 border-white dark:border-black" src="https://avatars.githubusercontent.com/u/3?v=4"></div><div class="relative group"><div class="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white dark:text-black bg-black/80 dark:bg-white/10 dark:text-white border dark:border-white/10  border-white/10 rounded shadow-md pointer-events-none" style="opacity: 0; transform: translateY(8px);">Mark</div><img alt="Mark" class="w-8 h-8 rounded-full border-2 border-white dark:border-black" src="https://avatars.githubusercontent.com/u/1?v=4"></div><div class="relative group"><div class="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white dark:text-black bg-black/80 dark:bg-white/10 dark:text-white border dark:border-white/10  border-white/10 rounded shadow-md pointer-events-none" style="opacity: 0; transform: translateY(8px);">Tamang</div><img alt="Tamang" class="w-8 h-8 rounded-full border-2 border-white dark:border-black" src="https://avatars.githubusercontent.com/u/2?v=4"></div></div><div class="flex items-center gap-1 mt-2 sm:mt-0"><span>⭐️⭐️⭐️⭐️⭐️</span><span>Trusted by 400+ users</span></div></div></section></div></div></div>
```

## Public registry source files

No public registry source files were available.