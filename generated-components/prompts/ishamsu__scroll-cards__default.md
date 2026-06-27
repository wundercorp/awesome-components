# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ishamsu/scroll-cards/default
- Registry URL: https://21st.dev/r/ishamsu/scroll-cards
- Author: ishamsu
- Component slug: scroll-cards
- Demo slug: default
- Title: scroll-cards
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ishamsu/scroll-cards with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ishamsu__scroll-cards__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ishamsu__scroll-cards__default.png

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
<div id="root"><div class="min-h-screen"><div class="h-screen flex items-center justify-center sticky top-0 md:p-0 px-4"><div class="relative flex flex-col h-[300px] w-[700px] py-12 px-10 md:px-12
				rotate-0 md:h-[400px] md:w-[600px] items-center justify-center mx-auto 
				shadow-md pr-3 pl-3 pt-3 pb-4" style="background-color: white;"><span class="font-bold relative text-5xl md:text-7xl mt-5"><span class="relative z-10 font-tiemposHeadline font-black tracking-tight" style="color: white;">Everest Camp</span></span><div class="font-manrope text-lg md:text-2xl font-medium text-center mb-0 z-50 mt-2 lowercase tracking-wide" style="line-height: 1.4; color: white;">Experience the ultimate trek to the world's highest mountain</div><div class="absolute inset-0 z-0"><img alt="Background" class="w-full h-full object-cover" layout="fill" src="https://images.unsplash.com/photo-1484291470158-b8f8d608850d?q=80&amp;w=2940&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div></div></div><div class="h-screen flex items-center justify-center sticky top-0 md:p-0 px-4"><div class="relative flex flex-col h-[300px] w-[700px] py-12 px-10 md:px-12
				rotate-0 md:h-[400px] md:w-[600px] items-center justify-center mx-auto 
				shadow-md pr-3 pl-3 pt-3 pb-4" style="background-color: green;"><span class="font-bold relative text-5xl md:text-7xl mt-5"><span class="relative z-10 font-tiemposHeadline font-black tracking-tight" style="color: white;">Annapurna</span></span><div class="font-manrope text-lg md:text-2xl font-medium text-center mb-0 z-50 mt-2 lowercase tracking-wide" style="line-height: 1.4; color: white;">Journey through the stunning landscapes of Nepal</div><div class="absolute inset-0 z-0"><img alt="Background" class="w-full h-full object-cover" layout="fill" src="https://images.unsplash.com/photo-1635077637121-2f6013736f3d?q=80&amp;w=3174&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div></div></div><div class="h-screen flex items-center justify-center sticky top-0 md:p-0 px-4"><div class="relative flex flex-col h-[300px] w-[700px] py-12 px-10 md:px-12
				rotate-0 md:h-[400px] md:w-[600px] items-center justify-center mx-auto 
				shadow-md pr-3 pl-3 pt-3 pb-4" style="background-color: white;"><span class="font-bold relative text-5xl md:text-7xl mt-5"><span class="relative z-10 font-tiemposHeadline font-black tracking-tight" style="color: black;">Inca Trail</span></span><div class="font-manrope text-lg md:text-2xl font-medium text-center mb-0 z-50 mt-2 lowercase tracking-wide" style="line-height: 1.4; color: black;">Ancient paths leading to Machu Picchu</div><div class="absolute inset-0 z-0"><img alt="Background" class="w-full h-full object-cover" layout="fill" src="https://images.unsplash.com/photo-1609668192525-c9b9342a0d92?q=80&amp;w=2913&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div></div></div><div class="h-screen flex items-center justify-center sticky top-0 md:p-0 px-4"><div class="relative flex flex-col h-[300px] w-[700px] py-12 px-10 md:px-12
				rotate-0 md:h-[400px] md:w-[600px] items-center justify-center mx-auto 
				shadow-md pr-3 pl-3 pt-3 pb-4" style="background-color: white;"><span class="font-bold relative text-5xl md:text-7xl mt-5"><span class="relative z-10 font-tiemposHeadline font-black tracking-tight" style="color: white;">Swiss Alps</span></span><div class="font-manrope text-lg md:text-2xl font-medium text-center mb-0 z-50 mt-2 lowercase tracking-wide" style="line-height: 1.4; color: white;">Discover the breathtaking beauty of European mountains</div><div class="absolute inset-0 z-0"><img alt="Background" class="w-full h-full object-cover" layout="fill" src="https://images.unsplash.com/photo-1635191125273-ee825970dd05?q=80&amp;w=2940&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.