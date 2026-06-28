# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ruixenui/range-slider-input/default
- Registry URL: https://21st.dev/r/ruixenui/range-slider-input
- Author: ruixenui
- Component slug: range-slider-input
- Demo slug: default
- Title: range-slider-input
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ruixenui/range-slider-input with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ruixenui__range-slider-input__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ruixenui__range-slider-input__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-md mx-auto space-y-3"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="«r0»">Select Range</label><div class="relative h-6 flex items-center"><input min="0" max="100" step="1" class="absolute w-full h-[2px] bg-gray-300 rounded-lg appearance-none z-20 pointer-events-auto accent-primary" type="range" value="0"><input min="0" max="100" step="1" class="absolute w-full h-1 bg-gray-300 rounded-lg appearance-none z-20 pointer-events-auto accent-secondary" type="range" value="100"><div class="absolute h-1 bg-primary rounded-lg" style="left: 0%; width: 100%;"></div></div><div class="flex relative"><div class="relative flex-1"><input class="flex h-9 w-full border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50 flex-1 pr-10 relative [-moz-appearance:_textfield] [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-inner-spin-button]:m-0 [&amp;::-webkit-outer-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:m-0 rounded-lg rounded-r-none" id="«r0»-from" min="0" max="100" step="1" placeholder="From" type="number" value="0"><div class="absolute top-1/2 end-2 -translate-y-1/2 flex flex-col"><button type="button" class="p-1 hover:bg-gray-100 rounded"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up" aria-hidden="true"><path d="m18 15-6-6-6 6"></path></svg></button><button type="button" class="p-1 hover:bg-gray-100 rounded"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></div></div><div class="relative flex-1"><input class="flex h-9 w-full border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50 flex-1 pr-10 relative [-moz-appearance:_textfield] [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-inner-spin-button]:m-0 [&amp;::-webkit-outer-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:m-0 rounded-lg rounded-l-none" id="«r0»-to" min="0" max="100" step="1" placeholder="To" type="number" value="100"><div class="absolute top-1/2 end-2 -translate-y-1/2 flex flex-col"><button type="button" class="p-1 hover:bg-gray-100 rounded"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up" aria-hidden="true"><path d="m18 15-6-6-6 6"></path></svg></button><button type="button" class="p-1 hover:bg-gray-100 rounded"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.