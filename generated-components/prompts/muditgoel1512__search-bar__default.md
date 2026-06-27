# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/muditgoel1512/search-bar/default
- Registry URL: https://21st.dev/r/muditgoel1512/search-bar
- Author: muditgoel1512
- Component slug: search-bar
- Demo slug: default
- Title: search-bar
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/muditgoel1512/search-bar with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/muditgoel1512__search-bar__default.html
- Local screenshot file: generated-21st-prompts/screenshots/muditgoel1512__search-bar__default.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="flex min-h-screen flex-col items-center justify-center p-24"><div class="relative w-full"><svg aria-hidden="true" style="position: absolute; width: 0px; height: 0px;"><defs><filter id="gooey-effect"><feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur"></feGaussianBlur><feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -8" result="goo"></feColorMatrix><feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite></filter></defs></svg><form class="relative flex items-center justify-center w-full mx-auto" style="width: 240px; transform: none;"><div class="flex items-center w-full rounded-full border relative overflow-hidden backdrop-blur-md border-gray-200 dark:border-gray-700 bg-white/30 dark:bg-gray-800/50" style="box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px;"><div class="absolute inset-0 overflow-hidden rounded-full -z-5" style="filter: url(&quot;#gooey-effect&quot;);"></div><div class="pl-4 py-3" style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search transition-all duration-300 text-gray-500 dark:text-gray-300" aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg></div><input placeholder="Search..." class="w-full py-3 bg-transparent outline-none placeholder:text-gray-400 dark:placeholder:text-gray-500 font-medium text-base relative z-10 text-gray-600 dark:text-gray-300" type="text" value=""></div></form></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.