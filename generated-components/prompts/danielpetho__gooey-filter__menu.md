# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/danielpetho/gooey-filter/menu
- Registry URL: https://21st.dev/r/danielpetho/gooey-filter
- Author: danielpetho
- Component slug: gooey-filter
- Demo slug: menu
- Title: gooey-filter
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/danielpetho/gooey-filter with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/danielpetho__gooey-filter__menu.html
- Local screenshot file: generated-21st-prompts/screenshots/danielpetho__gooey-filter__menu.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="relative w-full h-full min-h-[600px] flex items-center justify-center dark:bg-black bg-white"><svg class="hidden absolute"><defs><filter id="gooey-filter-menu"><feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"></feGaussianBlur><feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"></feColorMatrix><feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite></filter></defs></svg><div class="absolute top-4 left-4" style="filter: url(&quot;#gooey-filter-menu&quot;);"><button class="relative w-12 h-12 bg-[#efefef] rounded-full flex items-center justify-center"><div style="opacity: 1; filter: blur(0px);"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu w-5 h-5 text-black" aria-hidden="true"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg></div></button></div><p>Open the menu in the top left corner</p></div></div></div></div>
```

## Public registry source files

No public registry source files were available.