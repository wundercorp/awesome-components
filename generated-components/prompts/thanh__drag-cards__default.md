# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/thanh/drag-cards/default
- Registry URL: https://21st.dev/r/thanh/drag-cards
- Author: thanh
- Component slug: drag-cards
- Demo slug: default
- Title: drag-cards
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/thanh/drag-cards with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/thanh__drag-cards__default.html
- Local screenshot file: generated-21st-prompts/screenshots/thanh__drag-cards__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full "><div class="relative w-full h-screen bg-white dark:bg-black overflow-hidden"><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-10 p-4"><h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-400 opacity-40">Plan Your Next Adventure</h1><p class="text-lg text-gray-600 mt-2 opacity-50">Discover and plan your perfect getaway.</p></div><div class="absolute w-48 md:w-56 bg-white rounded-xl shadow-lg cursor-grab active:cursor-grabbing transition-all duration-300 hover:shadow-xl" style="left: 668px; top: 120px; z-index: 20; touch-action: none; transform: rotate(8deg);"><img alt="Mountain Retreat" class="w-full aspect-[2/3] object-cover rounded-t-xl pointer-events-none" src="https://plus.unsplash.com/premium_photo-1752659924623-491a6e7e2546?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"><div class="p-4"><h3 class="text-center font-semibold text-gray-800">Mountain Retreat</h3></div></div><div class="absolute w-48 md:w-56 bg-white rounded-xl shadow-lg cursor-grab active:cursor-grabbing transition-all duration-300 hover:shadow-xl" style="left: 80px; top: 100px; z-index: 21; touch-action: none; transform: rotate(-8deg);"><img alt="Coastal Village" class="w-full aspect-[2/3] object-cover rounded-t-xl pointer-events-none" src="https://images.unsplash.com/photo-1752986002031-579569bd3d6d?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D"><div class="p-4"><h3 class="text-center font-semibold text-gray-800">Coastal Village</h3></div></div><div class="absolute w-48 md:w-56 bg-white rounded-xl shadow-lg cursor-grab active:cursor-grabbing transition-all duration-300 hover:shadow-xl" style="left: 180px; top: 300px; z-index: 22; touch-action: none; transform: rotate(5deg);"><img alt="Desert Adventure" class="w-full aspect-[2/3] object-cover rounded-t-xl pointer-events-none" src="https://images.unsplash.com/photo-1752517497978-9c30910641af?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D"><div class="p-4"><h3 class="text-center font-semibold text-gray-800">Desert Adventure</h3></div></div><div class="absolute w-48 md:w-56 bg-white rounded-xl shadow-lg cursor-grab active:cursor-grabbing transition-all duration-300 hover:shadow-xl" style="left: 568px; top: 320px; z-index: 23; touch-action: none; transform: rotate(-6deg);"><img alt="Lakeside Serenity" class="w-full aspect-[2/3] object-cover rounded-t-xl pointer-events-none" src="https://images.unsplash.com/photo-1752835251736-244769f0aa5e?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D"><div class="p-4"><h3 class="text-center font-semibold text-gray-800">Lakeside Serenity</h3></div></div><div class="absolute w-48 md:w-56 bg-white rounded-xl shadow-lg cursor-grab active:cursor-grabbing transition-all duration-300 hover:shadow-xl" style="left: 678px; top: 520px; z-index: 24; touch-action: none; transform: rotate(4deg);"><img alt="Ancient Ruins" class="w-full aspect-[2/3] object-cover rounded-t-xl pointer-events-none" src="https://images.unsplash.com/photo-1750688650077-143cec3d0aa8?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTN8fHxlbnwwfHx8fHw%3D%3D"><div class="p-4"><h3 class="text-center font-semibold text-gray-800">Ancient Ruins</h3></div></div><div class="absolute w-48 md:w-56 bg-white rounded-xl shadow-lg cursor-grab active:cursor-grabbing transition-all duration-300 hover:shadow-xl" style="left: 60px; top: 480px; z-index: 25; touch-action: none; transform: rotate(-3deg);"><img alt="Canyon Exploration" class="w-full aspect-[2/3] object-cover rounded-t-xl pointer-events-none" src="https://images.unsplash.com/photo-1682686581264-c47e25e61d95?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"><div class="p-4"><h3 class="text-center font-semibold text-gray-800">Canyon Exploration</h3></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.