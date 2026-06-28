# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/thanh/scrolling-animation/default
- Registry URL: https://21st.dev/r/thanh/scrolling-animation
- Author: thanh
- Component slug: scrolling-animation
- Demo slug: default
- Title: scrolling-animation
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/thanh/scrolling-animation with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/thanh__scrolling-animation__default.html
- Local screenshot file: generated-21st-prompts/screenshots/thanh__scrolling-animation__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full"><div class="min-h-[200vh] bg-[#ffffff] dark:bg-black"><div class="h-screen flex items-center justify-center p-8 sticky top-0"><div class="relative"><div class="w-[600px] h-[600px] rounded-full flex items-center justify-center transition-all duration-500 "><div class="w-[500px] h-[500px] rounded-full flex items-center justify-center relative transition-all duration-500 "><div class="w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 dark:from-purple-600 dark:via-pink-600 dark:to-red-600 p-0.5 flex items-center justify-center relative"><div class="w-full h-full rounded-full bg-[#ffffff] dark:bg-black flex items-center justify-center relative"><div class="absolute w-24 h-24 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg transition-transform duration-300 ease-out z-0" style="transform: translate(0px, 0px);"><img alt="Profile 1" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0"></div><div class="absolute w-24 h-24 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg transition-transform duration-300 ease-out z-0" style="transform: translate(0px, 0px);"><img alt="Profile 2" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1610652492500-ded49ceeb378?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0"></div><div class="absolute w-24 h-24 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg transition-transform duration-300 ease-out z-0" style="transform: translate(0px, 0px);"><img alt="Profile 3" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1619365734050-cb5e64a42d43?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0"></div><div class="absolute w-24 h-24 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg transition-transform duration-300 ease-out z-0" style="transform: translate(0px, 0px);"><img alt="Profile 4" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0"></div><div class="absolute w-24 h-24 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg transition-transform duration-300 ease-out z-0" style="transform: translate(0px, 0px);"><img alt="Profile 5" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0"></div><div class="absolute w-24 h-24 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg transition-transform duration-300 ease-out z-0" style="transform: translate(0px, 0px);"><img alt="Profile 6" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0"></div><div class="absolute w-24 h-24 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg transition-transform duration-300 ease-out z-0" style="transform: translate(0px, 0px);"><img alt="Profile 7" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0"></div><div class="absolute w-24 h-24 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg transition-transform duration-300 ease-out z-0" style="transform: translate(0px, 0px);"><img alt="Profile 8" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0"></div><div class="flex flex-col items-center justify-center relative z-20 transition-opacity duration-500 opacity-0"><h1 class="text-4xl font-bold text-gray-800 dark:text-white text-center mb-2">Empowering</h1><h1 class="text-4xl font-bold text-gray-800 dark:text-white text-center mb-4">Every User</h1><p class="text-gray-500 dark:text-gray-400 text-center max-w-xs">From entrepreneurs to educators, Gen AI provides tools to simplify work.</p></div></div></div></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.