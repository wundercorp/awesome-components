# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/kavikatiyar/article-cards/default
- Registry URL: https://21st.dev/r/kavikatiyar/article-cards
- Author: kavikatiyar
- Component slug: article-cards
- Demo slug: default
- Title: article-cards
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/kavikatiyar/article-cards with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/kavikatiyar__article-cards__default.html
- Local screenshot file: generated-21st-prompts/screenshots/kavikatiyar__article-cards__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="p-4 md:p-8 bg-background"><div class="mb-8"><h1 class="text-4xl font-bold text-foreground">Lifestyle.</h1><p class="text-muted-foreground">The latest and best lifestyle articles selected by our editorial office.</p></div><div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"><div class="group relative flex h-80 cursor-pointer flex-col justify-between overflow-hidden rounded-xl bg-cover bg-center p-6 text-white shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl" style="background-image: url(&quot;https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-shBKuu4CZPoxpdoQH7r6Xn5jcZlCRq.png&amp;w=320&amp;q=75&quot;);"><div class="absolute inset-0 bg-gradient-to-t opacity-70 transition-opacity duration-300 group-hover:opacity-80 from-emerald-400/70 to-teal-600/70"></div><div class="relative z-10 flex h-full flex-col justify-between"><div><p class="mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">FOOD</p><h2 class="text-2xl font-bold">Wake Up and Smell the Coffee</h2></div><div class="self-start"><span class="rounded-md bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm transition-all duration-300 group-hover:bg-white/30">Read for $0.99</span></div></div></div><div class="group relative flex h-80 cursor-pointer flex-col justify-between overflow-hidden rounded-xl bg-cover bg-center p-6 text-white shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl" style="background-image: url(&quot;https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-2kErHQIkqMuToUFqQ4XSMhya9d6NqZ.png&amp;w=320&amp;q=75&quot;);"><div class="absolute inset-0 bg-gradient-to-t opacity-70 transition-opacity duration-300 group-hover:opacity-80 from-slate-800/70 to-slate-900/70"></div><div class="relative z-10 flex h-full flex-col justify-between"><div><p class="mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">ARCHITECTURE</p><h2 class="text-2xl font-bold">The Brand New NASA Office</h2></div><div class="self-start"><span class="rounded-md bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm transition-all duration-300 group-hover:bg-white/30">Read for $0.19</span></div></div></div><div class="group relative flex h-80 cursor-pointer flex-col justify-between overflow-hidden rounded-xl bg-cover bg-center p-6 text-white shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl" style="background-image: url(&quot;https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-5FKJfLGlXSNveVVEHP0G4l2qyXGuLF.png&amp;w=320&amp;q=75&quot;);"><div class="absolute inset-0 bg-gradient-to-t opacity-70 transition-opacity duration-300 group-hover:opacity-80 from-amber-400/70 to-orange-600/70"></div><div class="relative z-10 flex h-full flex-col justify-between"><div><p class="mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">TRAVEL</p><h2 class="text-2xl font-bold">Experience the Saharan Sands</h2></div><div class="self-start"><span class="rounded-md bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm transition-all duration-300 group-hover:bg-white/30">Read for $2.29</span></div></div></div><div class="group relative flex h-80 cursor-pointer flex-col justify-between overflow-hidden rounded-xl bg-cover bg-center p-6 text-white shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl" style="background-image: url(&quot;https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-2lorEIIaeeDsHDW0gQw4MbmuyVqwXH.png&amp;w=320&amp;q=75&quot;);"><div class="absolute inset-0 bg-gradient-to-t opacity-70 transition-opacity duration-300 group-hover:opacity-80 from-sky-300/70 to-cyan-400/70"></div><div class="relative z-10 flex h-full flex-col justify-between"><div><p class="mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">INTERIOR</p><h2 class="text-2xl font-bold">9 Air-Cleaning Plants Your Home Needs</h2></div><div class="self-start"><span class="rounded-md bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm transition-all duration-300 group-hover:bg-white/30">Read for $0.09</span></div></div></div><div class="group relative flex h-80 cursor-pointer flex-col justify-between overflow-hidden rounded-xl bg-cover bg-center p-6 text-white shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl" style="background-image: url(&quot;https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-5RC9cCQElsr5G9D6fw15rohV86HSp0.png&amp;w=320&amp;q=75&quot;);"><div class="absolute inset-0 bg-gradient-to-t opacity-70 transition-opacity duration-300 group-hover:opacity-80 from-rose-400/70 to-red-500/70"></div><div class="relative z-10 flex h-full flex-col justify-between"><div><p class="mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">FOOD</p><h2 class="text-2xl font-bold">One Month Sugar Detox</h2></div><div class="self-start"><span class="rounded-md bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm transition-all duration-300 group-hover:bg-white/30">Read for $0.99</span></div></div></div><div class="group relative flex h-80 cursor-pointer flex-col justify-between overflow-hidden rounded-xl bg-cover bg-center p-6 text-white shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl" style="background-image: url(&quot;https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-qzcaGMjbD8jUVkF6Pr2zNhONiA3NCZ.png&amp;w=320&amp;q=75&quot;);"><div class="absolute inset-0 bg-gradient-to-t opacity-70 transition-opacity duration-300 group-hover:opacity-80 from-blue-400/70 to-indigo-500/70"></div><div class="relative z-10 flex h-full flex-col justify-between"><div><p class="mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">PHOTOGRAPHY</p><h2 class="text-2xl font-bold">Shooting Minimal Instagram Photos</h2></div><div class="self-start"><span class="rounded-md bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm transition-all duration-300 group-hover:bg-white/30">Read for $0.29</span></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.