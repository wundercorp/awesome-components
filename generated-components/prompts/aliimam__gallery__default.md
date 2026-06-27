# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/aliimam/gallery/default
- Registry URL: https://21st.dev/r/aliimam/gallery
- Author: aliimam
- Component slug: gallery
- Demo slug: default
- Title: gallery
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/aliimam/gallery with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/aliimam__gallery__default.html
- Local screenshot file: generated-21st-prompts/screenshots/aliimam__gallery__default.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><main class="overflow-hidden"><div class="mt-40 relative"><div class="absolute inset-0 max-md:hidden top-[200px] -z-10 h-[300px] w-full bg-transparent bg-[linear-gradient(to_right,#57534e_1px,transparent_1px),linear-gradient(to_bottom,#57534e_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#a8a29e_1px,transparent_1px),linear-gradient(to_bottom,#a8a29e_1px,transparent_1px)]"></div><p class="lg:text-md my-2 text-center text-xs font-light uppercase tracking-widest text-slate-600 dark:text-slate-400">A Journey Through Visual Stories</p><h3 class="z-20 mx-auto max-w-2xl justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text py-3 text-center text-4xl text-transparent dark:bg-gradient-to-r dark:from-slate-100 dark:via-slate-200 dark:to-slate-100 dark:bg-clip-text md:text-7xl">Welcome to My <span class="text-rose-500"> Stories</span></h3><div class="relative mb-8 h-[350px] w-full items-center justify-center lg:flex"><div class="relative mx-auto flex w-full max-w-7xl justify-center" style="opacity: 1;"><div class="relative flex w-full justify-center" style="opacity: 1;"><div class="relative h-[220px] w-[220px]"><div class="absolute left-0 top-0" style="z-index: 10; transform: translateX(320px) translateY(44px);"><div class="relative mx-auto shrink-0 cursor-grab active:cursor-grabbing" draggable="false" tabindex="0" style="width: 220px; height: 220px; perspective: 400px; transform: rotate(-3.75295deg); z-index: 1; user-select: none; touch-action: none;"><div class="relative h-full w-full overflow-hidden rounded-3xl shadow-sm"><img alt="Family photo" class="rounded-3xl object-cover" draggable="false" src="https://images.pexels.com/photos/20494995/pexels-photo-20494995/free-photo-of-head-of-peacock.jpeg"></div></div></div><div class="absolute left-0 top-0" style="z-index: 20; transform: translateX(160px) translateY(22px);"><div class="relative mx-auto shrink-0 cursor-grab active:cursor-grabbing" draggable="false" tabindex="0" style="width: 220px; height: 220px; perspective: 400px; transform: rotate(3.41765deg); z-index: 1; user-select: none; touch-action: none;"><div class="relative h-full w-full overflow-hidden rounded-3xl shadow-sm"><img alt="Family photo" class="rounded-3xl object-cover" draggable="false" src="https://images.pexels.com/photos/19936068/pexels-photo-19936068/free-photo-of-women-sitting-on-hilltop-with-clouds-below.jpeg"></div></div></div><div class="absolute left-0 top-0" style="z-index: 30; transform: translateY(8px);"><div class="relative mx-auto shrink-0 cursor-grab active:cursor-grabbing" draggable="false" tabindex="0" style="width: 220px; height: 220px; perspective: 400px; transform: rotate(3.67365deg); z-index: 1; user-select: none; touch-action: none;"><div class="relative h-full w-full overflow-hidden rounded-3xl shadow-sm"><img alt="Family photo" class="rounded-3xl object-cover" draggable="false" src="https://images.pexels.com/photos/31890053/pexels-photo-31890053/free-photo-of-moody-portrait-with-heart-shaped-light.jpeg"></div></div></div><div class="absolute left-0 top-0" style="z-index: 40; transform: translateX(-160px) translateY(32px);"><div class="relative mx-auto shrink-0 cursor-grab active:cursor-grabbing" draggable="false" tabindex="0" style="width: 220px; height: 220px; perspective: 400px; transform: rotate(-1.68612deg); z-index: 1; user-select: none; touch-action: none;"><div class="relative h-full w-full overflow-hidden rounded-3xl shadow-sm"><img alt="Family photo" class="rounded-3xl object-cover" draggable="false" src="https://images.pexels.com/photos/31596551/pexels-photo-31596551/free-photo-of-winter-scene-with-lake-view-in-van-turkiye.jpeg"></div></div></div><div class="absolute left-0 top-0" style="z-index: 50; transform: translateX(-320px) translateY(15px);"><div class="relative mx-auto shrink-0 cursor-grab active:cursor-grabbing" draggable="false" tabindex="0" style="width: 220px; height: 220px; perspective: 400px; transform: rotate(-2.48667deg); z-index: 1; user-select: none; touch-action: none;"><div class="relative h-full w-full overflow-hidden rounded-3xl shadow-sm"><img alt="Family photo" class="rounded-3xl object-cover" draggable="false" src="https://images.pexels.com/photos/32025694/pexels-photo-32025694/free-photo-of-romantic-wedding-in-ancient-ruins.jpeg"></div></div></div></div></div></div></div><div class="flex w-full justify-center"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">View All Stories</button></div></div></main></div></div></div>
```

## Public registry source files

No public registry source files were available.