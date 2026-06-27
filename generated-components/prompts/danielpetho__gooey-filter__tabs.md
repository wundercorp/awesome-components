# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/danielpetho/gooey-filter/tabs
- Registry URL: https://21st.dev/r/danielpetho/gooey-filter
- Author: danielpetho
- Component slug: gooey-filter
- Demo slug: tabs
- Title: gooey-filter
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/danielpetho/gooey-filter with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/danielpetho__gooey-filter__tabs.html
- Local screenshot file: generated-21st-prompts/screenshots/danielpetho__gooey-filter__tabs.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="relative w-full h-full min-h-[600px] flex justify-center p-8 font-calendas md:text-base text-xs sm:text-sm bg-white dark:bg-black"><svg class="hidden absolute"><defs><filter id="gooey-filter"><feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur"></feGaussianBlur><feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"></feColorMatrix><feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite></filter></defs></svg><button class="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm shadow-black/5 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 absolute top-4 left-4 font-overusedGrotesk">Disable filter</button><div class="w-11/12 md:w-4/5 relative mt-24"><div class="absolute inset-0" style="filter: url(&quot;#gooey-filter&quot;);"><div class="flex w-full "><div class="relative flex-1 h-8 md:h-12"><div class="absolute inset-0 bg-[#efefef]" style="opacity: 1;"></div></div><div class="relative flex-1 h-8 md:h-12"></div><div class="relative flex-1 h-8 md:h-12"></div><div class="relative flex-1 h-8 md:h-12"></div></div><div class="w-full h-[200px] sm:h-[250px] md:h-[300px] bg-[#efefef] overflow-hidden text-muted-foreground"><div class="p-8 md:p-12" style="opacity: 1; filter: blur(0px); transform: none;"><div class="space-y-2 mt-4 sm:mt-8 md:mt-8"><ul class=""><li class="border-b border-muted-foreground/50 pt-2 pb-1 text-black">learning-to-meditate.md</li><li class="border-b border-muted-foreground/50 pt-2 pb-1 text-black">spring-garden-plans.md</li><li class="border-b border-muted-foreground/50 pt-2 pb-1 text-black">travel-wishlist.md</li><li class="border-b border-muted-foreground/50 pt-2 pb-1 text-black">new-coding-projects.md</li></ul></div></div></div></div><div class="relative flex w-full "><button class="flex-1 h-8 md:h-12"><span class="
                w-full h-full flex items-center justify-center
                text-black
              ">2024</span></button><button class="flex-1 h-8 md:h-12"><span class="
                w-full h-full flex items-center justify-center
                text-muted-foreground
              ">2023</span></button><button class="flex-1 h-8 md:h-12"><span class="
                w-full h-full flex items-center justify-center
                text-muted-foreground
              ">2022</span></button><button class="flex-1 h-8 md:h-12"><span class="
                w-full h-full flex items-center justify-center
                text-muted-foreground
              ">2021</span></button></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.