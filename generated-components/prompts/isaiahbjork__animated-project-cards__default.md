# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/isaiahbjork/animated-project-cards/default
- Registry URL: https://21st.dev/r/isaiahbjork/animated-project-cards
- Author: isaiahbjork
- Component slug: animated-project-cards
- Demo slug: default
- Title: animated-project-cards
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/isaiahbjork/animated-project-cards with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/isaiahbjork__animated-project-cards__default.html
- Local screenshot file: generated-21st-prompts/screenshots/isaiahbjork__animated-project-cards__default.png

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
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="named_Demo_Demo">Demo</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen w-full bg-[#E8EAEC]"><div class="mt-10"><div class="max-w-4xl mx-auto p-6"><div style="opacity: 1;"><div style="opacity: 1; transform: none;"><div class="border-b border-gray-300 py-4 cursor-pointer" style="opacity: 1; transform: none;"><div class="flex items-start justify-between"><div class="flex items-start gap-4 flex-1"><div class="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white text-lg font-semibold flex-shrink-0 shadow-sm">🔄</div><div class="flex-1 min-w-0"><div class="flex items-center gap-3 mb-2" style="opacity: 1; transform: none;"><h3 class="font-semibold text-gray-900 text-sm">Web Development Project</h3><div class="w-px h-3 bg-gray-400"></div><span class="px-2 py-0.5 rounded-full text-xs font-medium transition-all duration-200 text-gray-200 shadow-sm" tabindex="0" style="background-color: rgb(39, 45, 65);">Paid</span></div><p class="text-gray-600 text-sm mb-4 font-medium" style="opacity: 1; transform: none;">$10/hour</p></div></div><button class="w-9 h-9 rounded-full flex items-center justify-center text-[#272D41] flex-shrink-0 ml-3 shadow-sm" tabindex="0" style="background-color: rgb(213, 217, 221);"><div style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-4 h-4" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></button></div></div></div><div style="opacity: 1; transform: none;"><div class="border-b border-gray-300 py-4 cursor-pointer" style="opacity: 1; transform: none;"><div class="flex items-start justify-between"><div class="flex items-start gap-4 flex-1"><div class="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center text-white text-lg font-semibold flex-shrink-0 shadow-sm">⬇</div><div class="flex-1 min-w-0"><div class="flex items-center gap-3 mb-2" style="opacity: 1; transform: none;"><h3 class="font-semibold text-gray-900 text-sm">Copyright Project</h3><div class="w-px h-3 bg-gray-400"></div><span class="px-2 py-0.5 rounded-full text-xs font-medium transition-all duration-200 text-gray-700" tabindex="0" style="background-color: rgb(212, 218, 219);">Not Paid</span></div><p class="text-gray-600 text-sm mb-4 font-medium" style="opacity: 1; transform: none;">$10/hour</p></div></div><button class="w-9 h-9 rounded-full flex items-center justify-center text-[#272D41] flex-shrink-0 ml-3 shadow-sm" tabindex="0" style="background-color: rgb(213, 217, 221);"><div style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-4 h-4" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></button></div></div></div><div style="opacity: 1; transform: none;"><div class="border-b border-gray-300 py-4 cursor-pointer" style="opacity: 1; transform: none;"><div class="flex items-start justify-between"><div class="flex items-start gap-4 flex-1"><div class="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-lg font-semibold flex-shrink-0 shadow-sm">✓</div><div class="flex-1 min-w-0"><div class="flex items-center gap-3 mb-2" style="opacity: 1; transform: none;"><h3 class="font-semibold text-gray-900 text-sm">Web Design Project</h3><div class="w-px h-3 bg-gray-400"></div><span class="px-2 py-0.5 rounded-full text-xs font-medium transition-all duration-200 text-gray-200 shadow-sm" tabindex="0" style="background-color: rgb(39, 45, 65);">Paid</span></div><p class="text-gray-600 text-sm mb-4 font-medium" style="opacity: 1; transform: none;">$10/hour</p></div></div><button class="w-9 h-9 rounded-full flex items-center justify-center text-[#272D41] flex-shrink-0 ml-3 shadow-sm" tabindex="0" style="background-color: rgb(213, 217, 221);"><div style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-4 h-4" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></button></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.