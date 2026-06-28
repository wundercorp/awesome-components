# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/uniquesonu/text-parallax-content-scroll/default
- Registry URL: https://21st.dev/r/uniquesonu/text-parallax-content-scroll
- Author: uniquesonu
- Component slug: text-parallax-content-scroll
- Demo slug: default
- Title: text-parallax-content-scroll
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/uniquesonu/text-parallax-content-scroll with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/uniquesonu__text-parallax-content-scroll__default.html
- Local screenshot file: generated-21st-prompts/screenshots/uniquesonu__text-parallax-content-scroll__default.png

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
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="named_DemoOne_DemoOne">DemoOne</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-white"><div style="padding-left: 12px; padding-right: 12px;"><div class="relative h-[150vh]"><div class="sticky z-0 overflow-hidden rounded-3xl" style="background-image: url(&quot;https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&amp;w=2671&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&quot;); background-size: cover; background-position: center center; height: calc(-24px + 100vh); top: 12px; transform: scale(0.998093);"><div class="absolute inset-0 bg-neutral-950/70" style="opacity: 0.987288;"></div></div><div class="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white" style="opacity: 1; transform: none;"><p class="mb-2 text-center text-xl md:mb-4 md:text-3xl">Collaborate</p><p class="text-center text-4xl font-bold md:text-7xl">Built for all of us.</p></div></div><div class="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12"><h2 class="col-span-1 text-3xl font-bold md:col-span-4">Additional content explaining the above card here</h2><div class="col-span-1 md:col-span-8"><p class="mb-4 text-xl text-neutral-600 md:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima maiores voluptate est ut saepe accusantium maxime doloremque nulla consectetur possimus.</p><p class="mb-8 text-xl text-neutral-600 md:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis blanditiis aliquam aut fugit sint.</p><button class="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">Learn more <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></button></div></div></div><div style="padding-left: 12px; padding-right: 12px;"><div class="relative h-[150vh]"><div class="sticky z-0 overflow-hidden rounded-3xl" style="background-image: url(&quot;https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&amp;w=2564&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&quot;); background-size: cover; background-position: center center; height: calc(-24px + 100vh); top: 12px; transform: none;"><div class="absolute inset-0 bg-neutral-950/70" style="opacity: 1;"></div></div><div class="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white" style="opacity: 0; transform: translateY(250px);"><p class="mb-2 text-center text-xl md:mb-4 md:text-3xl">Quality</p><p class="text-center text-4xl font-bold md:text-7xl">Never compromise.</p></div></div><div class="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12"><h2 class="col-span-1 text-3xl font-bold md:col-span-4">Additional content explaining the above card here</h2><div class="col-span-1 md:col-span-8"><p class="mb-4 text-xl text-neutral-600 md:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima maiores voluptate est ut saepe accusantium maxime doloremque nulla consectetur possimus.</p><p class="mb-8 text-xl text-neutral-600 md:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis blanditiis aliquam aut fugit sint.</p><button class="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">Learn more <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></button></div></div></div><div style="padding-left: 12px; padding-right: 12px;"><div class="relative h-[150vh]"><div class="sticky z-0 overflow-hidden rounded-3xl" style="background-image: url(&quot;https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&amp;w=2416&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&quot;); background-size: cover; background-position: center center; height: calc(-24px + 100vh); top: 12px; transform: none;"><div class="absolute inset-0 bg-neutral-950/70" style="opacity: 1;"></div></div><div class="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white" style="opacity: 0; transform: translateY(250px);"><p class="mb-2 text-center text-xl md:mb-4 md:text-3xl">Modern</p><p class="text-center text-4xl font-bold md:text-7xl">Dress for the best.</p></div></div><div class="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12"><h2 class="col-span-1 text-3xl font-bold md:col-span-4">Additional content explaining the above card here</h2><div class="col-span-1 md:col-span-8"><p class="mb-4 text-xl text-neutral-600 md:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima maiores voluptate est ut saepe accusantium maxime doloremque nulla consectetur possimus.</p><p class="mb-8 text-xl text-neutral-600 md:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis blanditiis aliquam aut fugit sint.</p><button class="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">Learn more <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></button></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.