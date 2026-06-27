# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/YoucefBnm/scroll-trigger-animations/default
- Registry URL: https://21st.dev/r/YoucefBnm/scroll-trigger-animations
- Author: YoucefBnm
- Component slug: scroll-trigger-animations
- Demo slug: default
- Title: scroll-trigger-animations
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/YoucefBnm/scroll-trigger-animations with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/YoucefBnm__scroll-trigger-animations__default.html
- Local screenshot file: generated-21st-prompts/screenshots/YoucefBnm__scroll-trigger-animations__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative overflow-hidden"><div class="h-dvh relative" style="transform: none;"><div class="h-full relative" style="clip-path: inset(0px 48px);"><div class="flex bg-secondary gap-2 overflow-hidden px-6" style="transform: scale(1.2);"><div class="relative flex flex-col gap-2" style="transform: none;"><img class="aspect-[4/2.5] inline-block align-middle h-auto max-h-full w-full  object-cover" alt="gallery item" src="https://images.unsplash.com/photo-1529218402470-5dec8fea0761?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFkfGVufDB8fDB8fHww"><img class="aspect-[4/2.5] inline-block align-middle h-auto max-h-full w-full  object-cover" alt="gallery item" src="https://images.unsplash.com/photo-1717008303072-88c8ad26c3ff?q=80&amp;w=2663&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"><img class="aspect-[4/2.5] inline-block align-middle h-auto max-h-full w-full  object-cover" alt="gallery item" src="https://images.unsplash.com/photo-1716855048433-50d4db79ba14?q=80&amp;w=2669&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"><img class="aspect-[4/2.5] inline-block align-middle h-auto max-h-full w-full  object-cover" alt="gallery item" src="https://images.unsplash.com/photo-1608501078713-8e445a709b39?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div><div class="flex mt-[-20%] relative flex-col gap-2" style="transform: none;"><img class="aspect-[4/2.5] inline-block align-middle h-auto max-h-full w-full  object-cover" alt="gallery item" src="https://images.unsplash.com/photo-1712183465613-555424cf0e69?q=80&amp;w=2661&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"><img class="aspect-[4/2.5] inline-block align-middle h-auto max-h-full w-full  object-cover" alt="gallery item" src="https://images.unsplash.com/photo-1560360482-d5588f13d530?q=80&amp;w=2687&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"><img class="aspect-[4/2.5] inline-block align-middle h-auto max-h-full w-full  object-cover" alt="gallery item" src="https://images.unsplash.com/photo-1712183465613-555424cf0e69?q=80&amp;w=2661&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"><img class="aspect-[4/2.5] inline-block align-middle h-auto max-h-full w-full  object-cover" alt="gallery item" src="https://images.unsplash.com/photo-1493515322954-4fa727e97985?w=800&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRva3lvfGVufDB8MHwwfHx8Mg%3D%3D"></div><div class="relative hidden md:flex flex-col gap-2" style="transform: none;"><img class="aspect-[4/2.5] inline-block align-middle h-auto max-h-full w-full  object-cover" alt="gallery item" src="https://images.unsplash.com/photo-1687647849698-e54685db9ae3?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"><img class="aspect-[4/2.5] inline-block align-middle h-auto max-h-full w-full  object-cover" alt="gallery item" src="https://images.unsplash.com/photo-1658195686058-3b790484ae7e?q=80&amp;w=2452&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"><img class="aspect-[4/2.5] inline-block align-middle h-auto max-h-full w-full  object-cover" alt="gallery item" src="https://images.unsplash.com/photo-1629692905066-d202dad72ebf?q=80&amp;w=2678&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"><img class="aspect-[4/2.5] inline-block align-middle h-auto max-h-full w-full  object-cover" alt="gallery item" src="https://images.unsplash.com/photo-1608875004752-2fdb6a39ba4c?q=80&amp;w=2340&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div></div></div></div><div class="w-full h-96"></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.