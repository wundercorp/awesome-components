# Build Menu Hover Effects in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Menu Hover Effects screenshot](screenshot.png)

## Component

- Author group: `thanh`
- Component: `menu-hover-effects`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: thanh
- Component slug: menu-hover-effects
- Demo slug: default
- Title: menu-hover-effects
- Description: 

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

No reference metadata available.

## Rendered DOM snapshot

This is the rendered demo HTML extracted from the live preview. Use it to verify structure, class names, visible content, and layout.

```html
<div id="root"><div class="bgflex w-full h-screen justify-center items-center"><nav class="absolute bg-[#fafafa] inset-0 w-full"><button class="md:hidden absolute top-6 right-6 z-20 p-2" aria-label="Open menu"><div class="w-6 h-0.5 bg-[#262626] mb-1.5 transition-transform duration-300 "></div><div class="w-6 h-0.5 bg-[#262626] mb-1.5 transition-opacity duration-300 "></div><div class="w-6 h-0.5 bg-[#262626] transition-transform duration-300 "></div></button><div class="
        flex items-center justify-center w-full h-full
        md:block md:h-auto md:pt-8
        hidden md:block
      "><ul class="
          flex flex-col items-center space-y-6
          md:flex-row md:space-y-0 md:space-x-4 md:justify-center
          lg:space-x-8
        "><li class="list-none"><a href="#" class="relative inline-block group"><span class="
                  relative z-10 block uppercase text-[#262626] 
                  font-sans font-semibold transition-colors duration-300 
                  group-hover:text-white
                  text-xl py-2 px-3
                  md:text-base md:py-2 md:px-3
                  lg:text-lg lg:py-2 lg:px-4
                ">Home</span><span class="
                  absolute inset-0 border-t-2 border-b-2 border-[#262626]
                  transform scale-y-[2] opacity-0 
                  transition-all duration-300 origin-center
                  group-hover:scale-y-100 group-hover:opacity-100
                "></span><span class="
                  absolute top-[2px] left-0 w-full h-full bg-[#262626]
                  transform scale-0 opacity-0
                  transition-all duration-300 origin-top
                  group-hover:scale-100 group-hover:opacity-100
                "></span></a></li><li class="list-none"><a href="#" class="relative inline-block group"><span class="
                  relative z-10 block uppercase text-[#262626] 
                  font-sans font-semibold transition-colors duration-300 
                  group-hover:text-white
                  text-xl py-2 px-3
                  md:text-base md:py-2 md:px-3
                  lg:text-lg lg:py-2 lg:px-4
                ">About</span><span class="
                  absolute inset-0 border-t-2 border-b-2 border-[#262626]
                  transform scale-y-[2] opacity-0 
                  transition-all duration-300 origin-center
                  group-hover:scale-y-100 group-hover:opacity-100
                "></span><span class="
                  absolute top-[2px] left-0 w-full h-full bg-[#262626]
                  transform scale-0 opacity-0
                  transition-all duration-300 origin-top
                  group-hover:scale-100 group-hover:opacity-100
                "></span></a></li><li class="list-none"><a href="#" class="relative inline-block group"><span class="
                  relative z-10 block uppercase text-[#262626] 
                  font-sans font-semibold transition-colors duration-300 
                  group-hover:text-white
                  text-xl py-2 px-3
                  md:text-base md:py-2 md:px-3
                  lg:text-lg lg:py-2 lg:px-4
                ">Services</span><span class="
                  absolute inset-0 border-t-2 border-b-2 border-[#262626]
                  transform scale-y-[2] opacity-0 
                  transition-all duration-300 origin-center
                  group-hover:scale-y-100 group-hover:opacity-100
                "></span><span class="
                  absolute top-[2px] left-0 w-full h-full bg-[#262626]
                  transform scale-0 opacity-0
                  transition-all duration-300 origin-top
                  group-hover:scale-100 group-hover:opacity-100
                "></span></a></li><li class="list-none"><a href="#" class="relative inline-block group"><span class="
                  relative z-10 block uppercase text-[#262626] 
                  font-sans font-semibold transition-colors duration-300 
                  group-hover:text-white
                  text-xl py-2 px-3
                  md:text-base md:py-2 md:px-3
                  lg:text-lg lg:py-2 lg:px-4
                ">Team</span><span class="
                  absolute inset-0 border-t-2 border-b-2 border-[#262626]
                  transform scale-y-[2] opacity-0 
                  transition-all duration-300 origin-center
                  group-hover:scale-y-100 group-hover:opacity-100
                "></span><span class="
                  absolute top-[2px] left-0 w-full h-full bg-[#262626]
                  transform scale-0 opacity-0
                  transition-all duration-300 origin-top
                  group-hover:scale-100 group-hover:opacity-100
                "></span></a></li><li class="list-none"><a href="#" class="relative inline-block group"><span class="
                  relative z-10 block uppercase text-[#262626] 
                  font-sans font-semibold transition-colors duration-300 
                  group-hover:text-white
                  text-xl py-2 px-3
                  md:text-base md:py-2 md:px-3
                  lg:text-lg lg:py-2 lg:px-4
                ">Portfolio</span><span class="
                  absolute inset-0 border-t-2 border-b-2 border-[#262626]
                  transform scale-y-[2] opacity-0 
                  transition-all duration-300 origin-center
                  group-hover:scale-y-100 group-hover:opacity-100
                "></span><span class="
                  absolute top-[2px] left-0 w-full h-full bg-[#262626]
                  transform scale-0 opacity-0
                  transition-all duration-300 origin-top
                  group-hover:scale-100 group-hover:opacity-100
                "></span></a></li><li class="list-none"><a href="#" class="relative inline-block group"><span class="
                  relative z-10 block uppercase text-[#262626] 
                  font-sans font-semibold transition-colors duration-300 
                  group-hover:text-white
                  text-xl py-2 px-3
                  md:text-base md:py-2 md:px-3
                  lg:text-lg lg:py-2 lg:px-4
                ">Contact</span><span class="
                  absolute inset-0 border-t-2 border-b-2 border-[#262626]
                  transform scale-y-[2] opacity-0 
                  transition-all duration-300 origin-center
                  group-hover:scale-y-100 group-hover:opacity-100
                "></span><span class="
                  absolute top-[2px] left-0 w-full h-full bg-[#262626]
                  transform scale-0 opacity-0
                  transition-all duration-300 origin-top
                  group-hover:scale-100 group-hover:opacity-100
                "></span></a></li></ul></div></nav></div></div>
```

## Reference source files

No reference source files were available.
