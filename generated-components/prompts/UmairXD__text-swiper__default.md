# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/UmairXD/text-swiper/default
- Registry URL: https://21st.dev/r/UmairXD/text-swiper
- Author: UmairXD
- Component slug: text-swiper
- Demo slug: default
- Title: text-swiper
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/UmairXD/text-swiper with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/UmairXD__text-swiper__default.html
- Local screenshot file: generated-21st-prompts/screenshots/UmairXD__text-swiper__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><section class="relative z-10 grid place-content-center gap-12 px-8 py-24 text-neutral-800 dark:text-neutral-100"><div class="group flex items-center justify-center gap-6 transition-all duration-300 hover:gap-8"><div class="transition-transform duration-500 group-hover:translate-x-2"><svg width="86" height="86" viewBox="0 0 86 86" class="transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3"><defs><linearGradient id="linkedin-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#a5b4fc"></stop><stop offset="100%" stop-color="#c7d2fe"></stop></linearGradient><linearGradient id="linkedin-bg-dark" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4f46e5"></stop><stop offset="100%" stop-color="#7c3aed"></stop></linearGradient><linearGradient id="linkedin-hover" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0ea5e9"></stop><stop offset="100%" stop-color="#3b82f6"></stop></linearGradient></defs><rect width="86" height="86" rx="18" class="shadow-lg transition-all duration-500" style="fill: url(&quot;#linkedin-bg&quot;);"></rect><rect width="86" height="86" rx="18" class="shadow-lg transition-all duration-500 opacity-0 dark:opacity-100" style="fill: url(&quot;#linkedin-bg-dark&quot;);"></rect><rect width="86" height="86" rx="18" class="opacity-0 group-hover:opacity-100 transition-opacity duration-500" fill="url(#linkedin-hover)"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M27.7128 69.5277V33.4109H15.7096V69.5277H27.7128ZM21.7112 28.1545C25.5648 28.1545 28.0008 25.5858 28.0008 22.5772C27.916 19.4843 25.5648 17 21.7968 17C18.0289 17 15.5 19.4843 15.5 22.5772C15.5 25.5858 17.9359 28.1545 21.6264 28.1545H21.7112ZM34.5376 69.5277C34.5376 69.5277 34.7079 34.9887 34.5376 33.4109H46.5408V38.9569H46.456C48.0153 36.4592 51.1069 32.6946 57.7039 32.6946C65.7438 32.6946 70.5 37.9369 70.5 48.004V69.5277H58.4968V49.7506C58.4968 45.3979 56.9643 42.1812 52.5418 42.1812C49.1744 42.1812 47.2189 44.4491 46.3719 46.6603C46.0332 47.5476 46.0332 48.7998 46.0332 50.1355V69.5277H34.5376Z" class="fill-indigo-900 dark:fill-indigo-100 group-hover:fill-white drop-shadow-sm transition-colors duration-300"></path></svg></div><a target="_blank" href="https://linkedin.com" class="relative block overflow-hidden whitespace-nowrap text-4xl font-bold uppercase bg-gradient-to-br from-indigo-900 to-[#c7d2fe] bg-clip-text text-transparent dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300 sm:text-7xl md:text-8xl transition-all duration-300 hover:scale-105" style="line-height: 0.795;"><div><span class="inline-block" style="transform: none;">L</span><span class="inline-block" style="transform: none;">i</span><span class="inline-block" style="transform: none;">n</span><span class="inline-block" style="transform: none;">k</span><span class="inline-block" style="transform: none;">e</span><span class="inline-block" style="transform: none;">d</span><span class="inline-block" style="transform: none;">I</span><span class="inline-block" style="transform: none;">n</span></div><div class="absolute inset-0"><span class="inline-block bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-blue-300 dark:to-indigo-300" style="transform: translateY(100%);">L</span><span class="inline-block bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-blue-300 dark:to-indigo-300" style="transform: translateY(100%);">i</span><span class="inline-block bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-blue-300 dark:to-indigo-300" style="transform: translateY(100%);">n</span><span class="inline-block bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-blue-300 dark:to-indigo-300" style="transform: translateY(100%);">k</span><span class="inline-block bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-blue-300 dark:to-indigo-300" style="transform: translateY(100%);">e</span><span class="inline-block bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-blue-300 dark:to-indigo-300" style="transform: translateY(100%);">d</span><span class="inline-block bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-blue-300 dark:to-indigo-300" style="transform: translateY(100%);">I</span><span class="inline-block bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-blue-300 dark:to-indigo-300" style="transform: translateY(100%);">n</span></div></a></div></section></div></div></div>
```

## Public registry source files

No public registry source files were available.