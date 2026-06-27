# Build Immersive Scroll Gallery in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Immersive Scroll Gallery screenshot](screenshot.png)

## Component

- Author group: `ishamsu`
- Component: `immersive-scroll-gallery`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ishamsu
- Component slug: immersive-scroll-gallery
- Demo slug: default
- Title: immersive-scroll-gallery
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
<div id="root"><div class="mx-auto relative h-dvh"><div class="relative h-[200vh] "><div class="sticky top-0 h-[100vh] overflow-hidden"><div class="absolute flex items-center justify-center w-full h-full top-0" style="opacity: 1; transform: none;"><div class="relative w-[25vw] h-[25vh]"><img alt="Zoom image 1" class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1612801356940-8fdcde8aef61?q=80&amp;w=2940&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div></div><div class="absolute flex items-center justify-center w-full h-full top-0" style="opacity: 1; transform: none;"><div class="relative w-[35vw] h-[30vh] -top-[30vh] left-[5vw]"><img alt="Zoom image 2" class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1612801356940-8fdcde8aef61?q=80&amp;w=2940&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div></div><div class="absolute flex items-center justify-center w-full h-full top-0" style="opacity: 1; transform: none;"><div class="relative w-[20vw] h-[55vh] -top-[15vh] -left-[25vw]"><img alt="Zoom image 3" class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1612801356940-8fdcde8aef61?q=80&amp;w=2940&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div></div><div class="absolute flex items-center justify-center w-full h-full top-0" style="opacity: 1; transform: none;"><div class="relative w-[25vw] h-[25vh] left-[27.5vw]"><img alt="Zoom image 4" class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1612801356940-8fdcde8aef61?q=80&amp;w=2940&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div></div><div class="absolute flex items-center justify-center w-full h-full top-0" style="opacity: 1; transform: none;"><div class="relative w-[20vw] h-[30vh] top-[30vh] left-[5vw]"><img alt="Zoom image 5" class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1612801356940-8fdcde8aef61?q=80&amp;w=2940&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div></div><div class="absolute flex items-center justify-center w-full h-full top-0" style="opacity: 1; transform: none;"><div class="relative w-[30vw] h-[25vh] top-[27.5vh] -left-[22.5vw]"><img alt="Zoom image 6" class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1612801356940-8fdcde8aef61?q=80&amp;w=2940&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div></div><div class="absolute flex items-center justify-center w-full h-full top-0" style="opacity: 1; transform: none;"><div class="relative w-[15vw] h-[15vh] top-[22.5vh] left-[25vw]"><img alt="Zoom image 7" class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1612801356940-8fdcde8aef61?q=80&amp;w=2940&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div></div><div class="w-full h-full flex items-center justify-center max-w-3xl mx-auto p-8 relative" style="opacity: 0; transform: scale(0.8);"><h1 class="text-[#4b3f33] text-2xl md:text-4xl font-thin py-4 font-tiemposHeadline lowercase" style="line-height: 1.5;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
