# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ravikatiyar/services-card/default
- Registry URL: https://21st.dev/r/ravikatiyar/services-card
- Author: ravikatiyar
- Component slug: services-card
- Demo slug: default
- Title: services-card
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ravikatiyar/services-card with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ravikatiyar__services-card__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ravikatiyar__services-card__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full bg-background flex flex-col items-center justify-center p-8"><div class="text-left w-full max-w-6xl mb-12"><h1 class="text-6xl font-bold tracking-tighter">Services.</h1></div><div class="w-full max-w-6xl mx-auto px-4"><div class="relative" role="region" aria-roledescription="carousel"><div><div class="overflow-hidden"><div class="flex -ml-4" style="transform: translate3d(0px, 0px, 0px);"><div role="group" aria-roledescription="slide" class="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3" style="transform: translate3d(0px, 0px, 0px);"><div class="p-1"><div class="relative flex h-[450px] w-full flex-col justify-between overflow-hidden rounded-3xl p-8 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50" style="opacity: 1; transform: none;"><div class="z-10 flex flex-col items-start text-left"><span class="mb-8 text-sm font-mono text-foreground/50">( 001 )</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette mb-auto h-12 w-12 text-foreground" aria-hidden="true"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle></svg></div><div class="z-10"><h3 class="mb-2 text-lg font-semibold uppercase tracking-wider">Branding</h3><p class="text-sm text-foreground/70">We craft logos and brand systems that leave a lasting impression.</p></div><div class="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div></div></div></div><div role="group" aria-roledescription="slide" class="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3" style="transform: translate3d(0px, 0px, 0px);"><div class="p-1"><div class="relative flex h-[450px] w-full flex-col justify-between overflow-hidden rounded-3xl p-8 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/50 dark:to-green-800/50" style="opacity: 1; transform: none;"><div class="z-10 flex flex-col items-start text-left"><span class="mb-8 text-sm font-mono text-foreground/50">( 002 )</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code mb-auto h-12 w-12 text-foreground" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div><div class="z-10"><h3 class="mb-2 text-lg font-semibold uppercase tracking-wider">Development</h3><p class="text-sm text-foreground/70">Beautiful and functional websites built with purpose and precision.</p></div><div class="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div></div></div></div><div role="group" aria-roledescription="slide" class="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3"><div class="p-1"><div class="relative flex h-[450px] w-full flex-col justify-between overflow-hidden rounded-3xl p-8 bg-gradient-to-r from-red-100 to-red-200 dark:from-red-900/50 dark:to-red-800/50" style="opacity: 1; transform: none;"><div class="z-10 flex flex-col items-start text-left"><span class="mb-8 text-sm font-mono text-foreground/50">( 003 )</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search mb-auto h-12 w-12 text-foreground" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg></div><div class="z-10"><h3 class="mb-2 text-lg font-semibold uppercase tracking-wider">SEO Optimization</h3><p class="text-sm text-foreground/70">Get found faster with tailored SEO strategies backed by real data.</p></div><div class="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div></div></div></div><div role="group" aria-roledescription="slide" class="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3"><div class="p-1"><div class="relative flex h-[450px] w-full flex-col justify-between overflow-hidden rounded-3xl p-8 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50" style="opacity: 1; transform: none;"><div class="z-10 flex flex-col items-start text-left"><span class="mb-8 text-sm font-mono text-foreground/50">( 004 )</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette mb-auto h-12 w-12 text-foreground" aria-hidden="true"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle></svg></div><div class="z-10"><h3 class="mb-2 text-lg font-semibold uppercase tracking-wider">UI/UX Design</h3><p class="text-sm text-foreground/70">Intuitive and engaging user interfaces designed for seamless user experiences.</p></div><div class="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div></div></div></div></div></div></div><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-input hover:text-accent-foreground absolute h-10 w-10 rounded-full right-2 top-1/2 -translate-y-1/2 bg-foreground/10 border-0 hover:bg-foreground/20 text-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><span class="sr-only">Next slide</span></button></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.