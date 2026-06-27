# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/prebuiltui/cards/marquee-cards-with-hover-effect
- Registry URL: https://21st.dev/r/prebuiltui/cards
- Author: prebuiltui
- Component slug: cards
- Demo slug: marquee-cards-with-hover-effect
- Title: cards
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/prebuiltui/cards with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/prebuiltui__cards__marquee-cards-with-hover-effect.html
- Local screenshot file: generated-21st-prompts/screenshots/prebuiltui__cards__marquee-cards-with-hover-effect.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><style>
        .marquee-inner {
          animation: marqueeScroll linear infinite;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      </style><div class="overflow-hidden w-full relative max-w-6xl mx-auto"><div class="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div><div class="marquee-inner flex w-fit" style="animation-play-state: running; animation-duration: 10000ms;"><div class="flex"><div class="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300"><img alt="card" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1543487945-139a97f387d5?w=1200&amp;auto=format&amp;fit=crop&amp;q=60"><div class="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20"><p class="text-white text-lg font-semibold text-center">Unlock Your Creative Flow</p></div></div><div class="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300"><img alt="card" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1529254479751-faeedc59e78f?w=1200&amp;auto=format&amp;fit=crop&amp;q=60"><div class="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20"><p class="text-white text-lg font-semibold text-center">Design Your Digital Future</p></div></div><div class="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300"><img alt="card" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618327907215-4e514efabd41?w=1200&amp;auto=format&amp;fit=crop&amp;q=60"><div class="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20"><p class="text-white text-lg font-semibold text-center">Build with Passion, Ship with Pride</p></div></div><div class="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300"><img alt="card" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1583407723467-9b2d22504831?w=1200&amp;auto=format&amp;fit=crop&amp;q=60"><div class="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20"><p class="text-white text-lg font-semibold text-center">Think Big, Code Smart</p></div></div><div class="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300"><img alt="card" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1543487945-139a97f387d5?w=1200&amp;auto=format&amp;fit=crop&amp;q=60"><div class="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20"><p class="text-white text-lg font-semibold text-center">Unlock Your Creative Flow</p></div></div><div class="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300"><img alt="card" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1529254479751-faeedc59e78f?w=1200&amp;auto=format&amp;fit=crop&amp;q=60"><div class="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20"><p class="text-white text-lg font-semibold text-center">Design Your Digital Future</p></div></div><div class="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300"><img alt="card" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618327907215-4e514efabd41?w=1200&amp;auto=format&amp;fit=crop&amp;q=60"><div class="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20"><p class="text-white text-lg font-semibold text-center">Build with Passion, Ship with Pride</p></div></div><div class="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300"><img alt="card" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1583407723467-9b2d22504831?w=1200&amp;auto=format&amp;fit=crop&amp;q=60"><div class="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20"><p class="text-white text-lg font-semibold text-center">Think Big, Code Smart</p></div></div></div></div><div class="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.