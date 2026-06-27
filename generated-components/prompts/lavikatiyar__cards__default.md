# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/lavikatiyar/cards/default
- Registry URL: https://21st.dev/r/lavikatiyar/cards
- Author: lavikatiyar
- Component slug: cards
- Demo slug: default
- Title: cards
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/lavikatiyar/cards with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/lavikatiyar__cards__default.html
- Local screenshot file: generated-21st-prompts/screenshots/lavikatiyar__cards__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-screen w-full items-center justify-center bg-background p-4"><div role="list" class="group grid w-full max-w-6xl grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-4"><div role="listitem" aria-label="Echoes, Grand Canyon" tabindex="0" class="relative h-80 cursor-pointer overflow-hidden rounded-xl bg-cover bg-center shadow-lg transition-all duration-500 ease-in-out group-hover:scale-[0.97] group-hover:opacity-60 group-hover:blur-[2px] hover:!scale-105 hover:!opacity-100 hover:!blur-none focus-visible:!scale-105 focus-visible:!opacity-100 focus-visible:!blur-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background" style="background-image: url(&quot;https://images.unsplash.com/photo-1723633345813-4fa3642d13f6?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R3JhbmQlMjBDYW55b24lMjAlMjBFY2hvZXN8ZW58MHx8MHx8fDA%3D?q=80&amp;w=2000&amp;auto=format&amp;fit=crop&quot;);"><div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div><div class="absolute bottom-0 left-0 p-6 text-white"><p class="text-sm font-light uppercase tracking-widest opacity-80">Grand Canyon</p><h3 class="mt-1 text-2l font-semibold">Echoes</h3></div></div><div role="listitem" aria-label="Highest Mountain, Yosemite" tabindex="0" class="relative h-80 cursor-pointer overflow-hidden rounded-xl bg-cover bg-center shadow-lg transition-all duration-500 ease-in-out group-hover:scale-[0.97] group-hover:opacity-60 group-hover:blur-[2px] hover:!scale-105 hover:!opacity-100 hover:!blur-none focus-visible:!scale-105 focus-visible:!opacity-100 focus-visible:!blur-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background" style="background-image: url(&quot;https://plus.unsplash.com/premium_photo-1673283379754-27635807eaf8?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFlvc2VtaXRlJTIwJTIwSGlnaGVzdCUyME1vdW50YWlufGVufDB8fDB8fHww?q=80&amp;w=2000&amp;auto=format&amp;fit=crop&quot;);"><div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div><div class="absolute bottom-0 left-0 p-6 text-white"><p class="text-sm font-light uppercase tracking-widest opacity-80">Yosemite</p><h3 class="mt-1 text-2l font-semibold">Highest Mountain</h3></div></div><div role="listitem" aria-label="Deep Desert, Sahara" tabindex="0" class="relative h-80 cursor-pointer overflow-hidden rounded-xl bg-cover bg-center shadow-lg transition-all duration-500 ease-in-out group-hover:scale-[0.97] group-hover:opacity-60 group-hover:blur-[2px] hover:!scale-105 hover:!opacity-100 hover:!blur-none focus-visible:!scale-105 focus-visible:!opacity-100 focus-visible:!blur-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background" style="background-image: url(&quot;https://images.unsplash.com/photo-1592782480535-847fa6dbff97?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhaGFyYXxlbnwwfHwwfHx8MA%3D%3D?q=80&amp;w=2000&amp;auto=format&amp;fit=crop&quot;);"><div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div><div class="absolute bottom-0 left-0 p-6 text-white"><p class="text-sm font-light uppercase tracking-widest opacity-80">Sahara</p><h3 class="mt-1 text-2l font-semibold">Deep Desert</h3></div></div><div role="listitem" aria-label="Breath-taking, Landscape" tabindex="0" class="relative h-80 cursor-pointer overflow-hidden rounded-xl bg-cover bg-center shadow-lg transition-all duration-500 ease-in-out group-hover:scale-[0.97] group-hover:opacity-60 group-hover:blur-[2px] hover:!scale-105 hover:!opacity-100 hover:!blur-none focus-visible:!scale-105 focus-visible:!opacity-100 focus-visible:!blur-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background" style="background-image: url(&quot;https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&amp;w=2000&amp;auto=format&amp;fit=crop&quot;);"><div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div><div class="absolute bottom-0 left-0 p-6 text-white"><p class="text-sm font-light uppercase tracking-widest opacity-80">Landscape</p><h3 class="mt-1 text-2l font-semibold">Breath-taking</h3></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.