# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/aceternity/draggable-card/default
- Registry URL: https://21st.dev/r/aceternity/draggable-card
- Author: aceternity
- Component slug: draggable-card
- Demo slug: default
- Title: draggable-card
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/aceternity/draggable-card with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/aceternity__draggable-card__default.html
- Local screenshot file: generated-21st-prompts/screenshots/aceternity__draggable-card__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="[perspective:3000px] relative flex min-h-screen w-full items-center justify-center overflow-clip"><p class="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">If its your first day at Fight Club, you have to fight.</p><div class="min-h-96 w-80 overflow-hidden rounded-md bg-neutral-100 p-6 shadow-2xl transform-3d dark:bg-neutral-900 absolute top-10 left-[20%] rotate-[-5deg]" draggable="false" style="will-change: transform; opacity: 1; transform: none; user-select: none; touch-action: none;"><img alt="Tyler Durden" class="pointer-events-none relative z-10 h-80 w-80 object-cover" src="https://images.unsplash.com/photo-1732310216648-603c0255c000?q=80&amp;w=3540&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"><h3 class="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">Tyler Durden</h3><div class="pointer-events-none absolute inset-0 bg-white select-none" style="opacity: 0;"></div></div><div class="min-h-96 w-80 overflow-hidden rounded-md bg-neutral-100 p-6 shadow-2xl transform-3d dark:bg-neutral-900 absolute top-40 left-[25%] rotate-[-7deg]" draggable="false" style="will-change: transform; opacity: 1; transform: none; user-select: none; touch-action: none;"><img alt="The Narrator" class="pointer-events-none relative z-10 h-80 w-80 object-cover" src="https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&amp;w=2667&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"><h3 class="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">The Narrator</h3><div class="pointer-events-none absolute inset-0 bg-white select-none" style="opacity: 0;"></div></div><div class="min-h-96 w-80 overflow-hidden rounded-md bg-neutral-100 p-6 shadow-2xl transform-3d dark:bg-neutral-900 absolute top-5 left-[40%] rotate-[8deg]" draggable="false" style="will-change: transform; opacity: 1; transform: none; user-select: none; touch-action: none;"><img alt="Iceland" class="pointer-events-none relative z-10 h-80 w-80 object-cover" src="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&amp;w=2600&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"><h3 class="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">Iceland</h3><div class="pointer-events-none absolute inset-0 bg-white select-none" style="opacity: 0;"></div></div><div class="min-h-96 w-80 overflow-hidden rounded-md bg-neutral-100 p-6 shadow-2xl transform-3d dark:bg-neutral-900 absolute top-32 left-[55%] rotate-[10deg]" draggable="false" style="will-change: transform; opacity: 1; transform: none; user-select: none; touch-action: none;"><img alt="Japan" class="pointer-events-none relative z-10 h-80 w-80 object-cover" src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&amp;w=3648&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"><h3 class="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">Japan</h3><div class="pointer-events-none absolute inset-0 bg-white select-none" style="opacity: 0;"></div></div><div class="min-h-96 w-80 overflow-hidden rounded-md bg-neutral-100 p-6 shadow-2xl transform-3d dark:bg-neutral-900 absolute top-20 right-[35%] rotate-[2deg]" draggable="false" style="will-change: transform; opacity: 1; transform: none; user-select: none; touch-action: none;"><img alt="Norway" class="pointer-events-none relative z-10 h-80 w-80 object-cover" src="https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&amp;w=3542&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"><h3 class="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">Norway</h3><div class="pointer-events-none absolute inset-0 bg-white select-none" style="opacity: 0;"></div></div><div class="min-h-96 w-80 overflow-hidden rounded-md bg-neutral-100 p-6 shadow-2xl transform-3d dark:bg-neutral-900 absolute top-24 left-[45%] rotate-[-7deg]" draggable="false" style="will-change: transform; opacity: 1; transform: none; user-select: none; touch-action: none;"><img alt="New Zealand" class="pointer-events-none relative z-10 h-80 w-80 object-cover" src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&amp;w=3070&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"><h3 class="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">New Zealand</h3><div class="pointer-events-none absolute inset-0 bg-white select-none" style="opacity: 0;"></div></div><div class="min-h-96 w-80 overflow-hidden rounded-md bg-neutral-100 p-6 shadow-2xl transform-3d dark:bg-neutral-900 absolute top-8 left-[30%] rotate-[4deg]" draggable="false" style="will-change: transform; opacity: 1; transform: none; user-select: none; touch-action: none;"><img alt="Canada" class="pointer-events-none relative z-10 h-80 w-80 object-cover" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&amp;w=2560&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"><h3 class="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">Canada</h3><div class="pointer-events-none absolute inset-0 bg-white select-none" style="opacity: 0;"></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.