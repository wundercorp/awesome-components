# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ravikatiyar/sparks-carousel/default
- Registry URL: https://21st.dev/r/ravikatiyar/sparks-carousel
- Author: ravikatiyar
- Component slug: sparks-carousel
- Demo slug: default
- Title: sparks-carousel
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ravikatiyar/sparks-carousel with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ravikatiyar__sparks-carousel__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ravikatiyar__sparks-carousel__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full bg-background"><section class="w-full py-8" aria-labelledby="sparks-title"><div class="container mx-auto px-4 md:px-6"><div class="mb-6 flex items-center justify-between"><div><a href="#" class="group inline-flex items-center"><h2 id="sparks-title" class="text-2xl md:text-3xl font-bold tracking-tight text-card-foreground">Sparks</h2><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></a><p class="mt-1 text-muted-foreground">Curated watchlists where ETHUSD is featured.</p></div></div><div class="relative"><div class="flex w-full space-x-4 overflow-x-auto pb-4 scrollbar-hide"><div class="group w-[280px] flex-shrink-0" style="opacity: 1; transform: none;"><div class="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md"><img alt="Gen 2: Crypto is here to stay - and it's brought some friends..." class="aspect-video w-full object-cover transition-transform group-hover:scale-105" height="160" width="280" src="https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q3J5cHRvfGVufDB8fDB8fHww?q=80&amp;w=280&amp;h=160&amp;fit=crop"><div class="p-4"><h3 class="text-md font-semibold leading-tight text-card-foreground">Gen 2: Crypto is here to stay - and it's brought some friends...</h3><div class="mt-4"><p class="text-xl font-bold">19</p><p class="text-xs font-medium uppercase tracking-wider text-muted-foreground">NO. OF SYMBOLS</p></div></div></div></div><div class="group w-[280px] flex-shrink-0" style="opacity: 1; transform: none;"><div class="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md"><img alt="Proof of Work: Embracing the crunch" class="aspect-video w-full object-cover transition-transform group-hover:scale-105" height="160" width="280" src="https://plus.unsplash.com/premium_photo-1661284836545-3a6ec65fcffc?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHdvcmt8ZW58MHx8MHx8fDA%3D"><div class="p-4"><h3 class="text-md font-semibold leading-tight text-card-foreground">Proof of Work: Embracing the crunch</h3><div class="mt-4"><p class="text-xl font-bold">27</p><p class="text-xs font-medium uppercase tracking-wider text-muted-foreground">NO. OF SYMBOLS</p></div></div></div></div><div class="group w-[280px] flex-shrink-0" style="opacity: 1; transform: none;"><div class="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md"><img alt="Smart contracts: Make the smart decision" class="aspect-video w-full object-cover transition-transform group-hover:scale-105" height="160" width="280" src="https://images.unsplash.com/photo-1696960181433-68ca79ac8149?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlY2lzaW9ufGVufDB8fDB8fHww"><div class="p-4"><h3 class="text-md font-semibold leading-tight text-card-foreground">Smart contracts: Make the smart decision</h3><div class="mt-4"><p class="text-xl font-bold">36</p><p class="text-xs font-medium uppercase tracking-wider text-muted-foreground">NO. OF SYMBOLS</p></div></div></div></div><div class="group w-[280px] flex-shrink-0" style="opacity: 1; transform: none;"><div class="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md"><img alt="Staking Coins: Pick up a stake" class="aspect-video w-full object-cover transition-transform group-hover:scale-105" height="160" width="280" src="https://images.unsplash.com/photo-1695390837115-408e49a2041e?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3Rha2V8ZW58MHx8MHx8fDA%3D"><div class="p-4"><h3 class="text-md font-semibold leading-tight text-card-foreground">Staking Coins: Pick up a stake</h3><div class="mt-4"><p class="text-xl font-bold">18</p><p class="text-xs font-medium uppercase tracking-wider text-muted-foreground">NO. OF SYMBOLS</p></div></div></div></div><div class="group w-[280px] flex-shrink-0" style="opacity: 1; transform: none;"><div class="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md"><img alt="Web3 Infrastructure: The new frontier" class="aspect-video w-full object-cover transition-transform group-hover:scale-105" height="160" width="280" src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&amp;w=280&amp;h=160&amp;fit=crop"><div class="p-4"><h3 class="text-md font-semibold leading-tight text-card-foreground">Web3 Infrastructure: The new frontier</h3><div class="mt-4"><p class="text-xl font-bold">42</p><p class="text-xs font-medium uppercase tracking-wider text-muted-foreground">NO. OF SYMBOLS</p></div></div></div></div><div class="group w-[280px] flex-shrink-0" style="opacity: 1; transform: none;"><div class="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md"><img alt="Decentralized Finance (DeFi): Beyond the banks" class="aspect-video w-full object-cover transition-transform group-hover:scale-105" height="160" width="280" src="https://images.unsplash.com/photo-1534951009808-766178b47a4f?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpbmFuY2V8ZW58MHx8MHx8fDA%3D"><div class="p-4"><h3 class="text-md font-semibold leading-tight text-card-foreground">Decentralized Finance (DeFi): Beyond the banks</h3><div class="mt-4"><p class="text-xl font-bold">55</p><p class="text-xs font-medium uppercase tracking-wider text-muted-foreground">NO. OF SYMBOLS</p></div></div></div></div></div><button class="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/60 backdrop-blur-sm border text-foreground shadow-md transition-opacity hover:bg-background/80 disabled:opacity-0" aria-label="Scroll right"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-6 w-6" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button></div></div></section></div></div></div></div>
```

## Public registry source files

No public registry source files were available.