# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/YoucefBnm/hero-gallery-scroll-animation/default
- Registry URL: https://21st.dev/r/YoucefBnm/hero-gallery-scroll-animation
- Author: YoucefBnm
- Component slug: hero-gallery-scroll-animation
- Demo slug: default
- Title: hero-gallery-scroll-animation
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/YoucefBnm/hero-gallery-scroll-animation with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/YoucefBnm__hero-gallery-scroll-animation__default.html
- Local screenshot file: generated-21st-prompts/screenshots/YoucefBnm__hero-gallery-scroll-animation__default.png

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
<div id="root"><div class="bg-background text-foreground"><div class="absolute z-10 top-4 right-14 flex flex-col items-end gap-1"><button type="button" role="combobox" aria-controls="radix-«r0»" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" class="flex w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 gap-2 h-8"><span style="pointer-events: none;">Hero Demo1</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></div><div class="w-full"><div class="relative min-h-screen w-full h-[350vh]"><div class="grid gap-4 [&amp;&gt;*:first-child]:origin-top-right [&amp;&gt;*:nth-child(3)]:origin-bottom-right [&amp;&gt;*:nth-child(4)]:origin-top-right grid-cols-8 grid-rows-[1fr_0.5fr_0.5fr_1fr] [&amp;&gt;*:first-child]:col-span-8 md:[&amp;&gt;*:first-child]:col-span-6 [&amp;&gt;*:first-child]:row-span-3 [&amp;&gt;*:nth-child(2)]:col-span-2 md:[&amp;&gt;*:nth-child(2)]:row-span-2 [&amp;&gt;*:nth-child(2)]:hidden md:[&amp;&gt;*:nth-child(2)]:block [&amp;&gt;*:nth-child(3)]:col-span-2 md:[&amp;&gt;*:nth-child(3)]:row-span-2 [&amp;&gt;*:nth-child(3)]:hidden md:[&amp;&gt;*:nth-child(3)]:block [&amp;&gt;*:nth-child(4)]:col-span-4 md:[&amp;&gt;*:nth-child(4)]:col-span-3 [&amp;&gt;*:nth-child(5)]:col-span-4 md:[&amp;&gt;*:nth-child(5)]:col-span-3 sticky left-0 top-0 z-0 h-screen w-full p-4"><div class="overflow-hidden rounded-xl shadow-xl" style="translate: -35%; transform: scale(0.5);"><img class="size-full object-cover object-center" alt="" src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&amp;w=2388&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div><div class="overflow-hidden rounded-xl shadow-xl" style="translate: -35%; transform: scale(0.5);"><img class="size-full object-cover object-center" alt="" src="https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?q=80&amp;w=2264&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div><div class="overflow-hidden rounded-xl shadow-xl" style="translate: -35%; transform: scale(0.5);"><img class="size-full object-cover object-center" alt="" src="https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&amp;w=2368&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div><div class="overflow-hidden rounded-xl shadow-xl" style="translate: -35%; transform: scale(0.5);"><img class="size-full object-cover object-center" alt="" src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=700&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8fDA%3D"></div><div class="overflow-hidden rounded-xl shadow-xl" style="translate: -35%; transform: scale(0.5);"><img class="size-full object-cover object-center" alt="" src="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=700&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww"></div></div><div class="left-1/2 top-1/2 size-fit relative z-10 text-center" style="translate: -50% -50%; position: fixed; opacity: 1; transform: none;"><h1 class="max-w-xl text-5xl font-bold tracking-tighter text-slate-800 ">Your Animated Hero</h1><p class="my-6 max-w-xl text-sm text-slate-700 md:text-base">Yet another hero section, this time with scroll trigger animations, animating the hero content with motion.</p><div class="flex items-center justify-center gap-4"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 bg-indigo-500 px-4 py-2 font-medium hover:bg-indigo-400">Get Started</button><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 bg-transparent px-4 py-2 font-medium">Learn more</button></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.