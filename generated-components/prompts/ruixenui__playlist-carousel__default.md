# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ruixenui/playlist-carousel/default
- Registry URL: https://21st.dev/r/ruixenui/playlist-carousel
- Author: ruixenui
- Component slug: playlist-carousel
- Demo slug: default
- Title: playlist-carousel
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ruixenui/playlist-carousel with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ruixenui__playlist-carousel__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ruixenui__playlist-carousel__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex overflow-x-auto gap-4 p-4"><div class="flex-shrink-0 rounded-xl shadow-md bg-white dark:bg-gray-800 flex flex-col items-center p-3" style="width: 180px; height: 260px;"><img alt="Morning Chill" class="w-full h-32 object-cover rounded-md mb-3" src="https://picsum.photos/200/120?random=1"><h4 class="text-sm font-semibold text-gray-900 dark:text-gray-100 text-center mb-1">Morning Chill</h4><div class="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full mb-2"><div class="h-full bg-black dark:bg-white rounded-full" style="width: 0%;"></div></div><p class="text-xs text-gray-500 dark:text-gray-400 mb-2">0:00 / 3:45</p><div class="relative"><svg class="w-12 h-12"><circle cx="24" cy="24" r="22" stroke="gray" stroke-width="3" fill="none"></circle><circle cx="24" cy="24" r="22" stroke="black" stroke-width="3" fill="none" stroke-dasharray="138.2" stroke-dashoffset="138.2" transform="rotate(-90 24 24)"></circle></svg><button class="whitespace-nowrap text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm shadow-black/5 hover:bg-accent hover:text-accent-foreground absolute top-0 left-0 w-12 h-12 flex items-center justify-center rounded-full p-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play w-5 h-5" aria-hidden="true"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg></button></div></div><div class="flex-shrink-0 rounded-xl shadow-md bg-white dark:bg-gray-800 flex flex-col items-center p-3" style="width: 180px; height: 260px;"><img alt="Evening Focus" class="w-full h-32 object-cover rounded-md mb-3" src="https://picsum.photos/200/120?random=2"><h4 class="text-sm font-semibold text-gray-900 dark:text-gray-100 text-center mb-1">Evening Focus</h4><div class="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full mb-2"><div class="h-full bg-black dark:bg-white rounded-full" style="width: 0%;"></div></div><p class="text-xs text-gray-500 dark:text-gray-400 mb-2">0:00 / 4:20</p><div class="relative"><svg class="w-12 h-12"><circle cx="24" cy="24" r="22" stroke="gray" stroke-width="3" fill="none"></circle><circle cx="24" cy="24" r="22" stroke="black" stroke-width="3" fill="none" stroke-dasharray="138.2" stroke-dashoffset="138.2" transform="rotate(-90 24 24)"></circle></svg><button class="whitespace-nowrap text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm shadow-black/5 hover:bg-accent hover:text-accent-foreground absolute top-0 left-0 w-12 h-12 flex items-center justify-center rounded-full p-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play w-5 h-5" aria-hidden="true"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg></button></div></div><div class="flex-shrink-0 rounded-xl shadow-md bg-white dark:bg-gray-800 flex flex-col items-center p-3" style="width: 180px; height: 260px;"><img alt="Workout Beats" class="w-full h-32 object-cover rounded-md mb-3" src="https://picsum.photos/200/120?random=3"><h4 class="text-sm font-semibold text-gray-900 dark:text-gray-100 text-center mb-1">Workout Beats</h4><div class="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full mb-2"><div class="h-full bg-black dark:bg-white rounded-full" style="width: 0%;"></div></div><p class="text-xs text-gray-500 dark:text-gray-400 mb-2">0:00 / 5:10</p><div class="relative"><svg class="w-12 h-12"><circle cx="24" cy="24" r="22" stroke="gray" stroke-width="3" fill="none"></circle><circle cx="24" cy="24" r="22" stroke="black" stroke-width="3" fill="none" stroke-dasharray="138.2" stroke-dashoffset="138.2" transform="rotate(-90 24 24)"></circle></svg><button class="whitespace-nowrap text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm shadow-black/5 hover:bg-accent hover:text-accent-foreground absolute top-0 left-0 w-12 h-12 flex items-center justify-center rounded-full p-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play w-5 h-5" aria-hidden="true"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg></button></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.