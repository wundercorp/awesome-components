# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ruixenui/gooey-pagination/default
- Registry URL: https://21st.dev/r/ruixenui/gooey-pagination
- Author: ruixenui
- Component slug: gooey-pagination
- Demo slug: default
- Title: gooey-pagination
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ruixenui/gooey-pagination with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ruixenui__gooey-pagination__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ruixenui__gooey-pagination__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center gap-6 p-4 relative"><svg class="absolute h-0 w-0"><defs><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur"></feGaussianBlur><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 20 -10" result="goo"></feColorMatrix><feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite></filter></defs></svg><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none hover:bg-accent h-10 w-10 text-gray-400 hover:text-primary disabled:opacity-40 transition-colors" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left w-5 h-5" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></button><div class="flex gap-4 relative" style="filter: url(&quot;#goo&quot;);"><div class="relative w-6 h-6 flex items-center justify-center"><div class="absolute w-6 h-6 rounded-full bg-primary/70" style="opacity: 1; transform: scale(1.8);"></div><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-primary/50 transition-colors"></button></div><div class="relative w-6 h-6 flex items-center justify-center"><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-primary/50 transition-colors"></button></div><div class="relative w-6 h-6 flex items-center justify-center"><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-primary/50 transition-colors"></button></div><div class="relative w-6 h-6 flex items-center justify-center"><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-primary/50 transition-colors"></button></div><div class="relative w-6 h-6 flex items-center justify-center"><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-primary/50 transition-colors"></button></div><div class="relative w-6 h-6 flex items-center justify-center"><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-primary/50 transition-colors"></button></div><div class="relative w-6 h-6 flex items-center justify-center"><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-primary/50 transition-colors"></button></div></div><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none hover:bg-accent h-10 w-10 text-gray-400 hover:text-primary disabled:opacity-40 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right w-5 h-5" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button></div></div></div></div>
```

## Public registry source files

No public registry source files were available.