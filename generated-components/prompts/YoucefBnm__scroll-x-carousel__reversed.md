# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/YoucefBnm/scroll-x-carousel/reversed
- Registry URL: https://21st.dev/r/YoucefBnm/scroll-x-carousel
- Author: YoucefBnm
- Component slug: scroll-x-carousel
- Demo slug: reversed
- Title: scroll-x-carousel
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/YoucefBnm/scroll-x-carousel with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/YoucefBnm__scroll-x-carousel__reversed.html
- Local screenshot file: generated-21st-prompts/screenshots/YoucefBnm__scroll-x-carousel__reversed.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative w-screen max-w-full h-[110vh]"><div class="overflow-hidden w-full top-0 left-0 h-screen relative place-content-center flex flex-col space-y-4 py-12"><div class=" pointer-events-none w-[12vw] h-[103%] absolute inset-[0_auto_0_0] z-10 bg-[linear-gradient(90deg,_var(--background)_35%,_transparent)]"></div><div class="pointer-events-none bg-[linear-gradient(270deg,_var(--background)_35%,_transparent)] w-[15vw] h-[103%] absolute inset-[0_0_0_auto] z-10"></div><div class="w-fit relative flex space-x-4 [&amp;&gt;*:first-child]:ml-8" style="transform: translateX(5%);"><div class="min-w-[42vw] aspect-video  overflow-hidden"><img alt="agency showcase" class="size-full object-cover" src="https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?q=80&amp;w=2487&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div><div class="min-w-[42vw] aspect-video  overflow-hidden"><img alt="agency showcase" class="size-full object-cover" src="https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&amp;w=2487&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div><div class="min-w-[42vw] aspect-video  overflow-hidden"><img alt="agency showcase" class="size-full object-cover" src="https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&amp;w=2487&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div><div class="min-w-[42vw] aspect-video  overflow-hidden"><img alt="agency showcase" class="size-full object-cover" src="https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&amp;w=2486&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div><div class="min-w-[42vw] aspect-video  overflow-hidden"><img alt="agency showcase" class="size-full object-cover" src="https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&amp;w=2487&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div></div><div class="w-fit relative flex space-x-4 [&amp;&gt;*:first-child]:ml-8" style="transform: translateX(-70%);"><div class="min-w-[42vw] aspect-video overflow-hidden"><img alt="agency showcase" class="size-full object-cover" src="https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&amp;w=2487&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div><div class="min-w-[42vw] aspect-video overflow-hidden"><img alt="agency showcase" class="size-full object-cover" src="https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&amp;w=2486&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div><div class="min-w-[42vw] aspect-video overflow-hidden"><img alt="agency showcase" class="size-full object-cover" src="https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&amp;w=2487&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div><div class="min-w-[42vw] aspect-video overflow-hidden"><img alt="agency showcase" class="size-full object-cover" src="https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&amp;w=2487&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div><div class="min-w-[42vw] aspect-video overflow-hidden"><img alt="agency showcase" class="size-full object-cover" src="https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?q=80&amp;w=2487&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.