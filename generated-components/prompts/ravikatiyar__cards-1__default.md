# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ravikatiyar/cards-1/default
- Registry URL: https://21st.dev/r/ravikatiyar/cards-1
- Author: ravikatiyar
- Component slug: cards-1
- Demo slug: default
- Title: cards-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ravikatiyar/cards-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ravikatiyar__cards-1__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ravikatiyar__cards-1__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full bg-background p-4 sm:p-6 md:p-8"><div class="mx-auto max-w-7xl"><div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"><div class="group relative block overflow-hidden rounded-lg border bg-card text-card-foreground transition-all duration-300 ease-in-out hover:shadow-lg"><a href="#" aria-label="AER Duffle Pack 3"><div class="aspect-square overflow-hidden"><img alt="AER Duffle Pack 3" class="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1621624959365-071359461b94?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJhY2twYWNrc3xlbnwwfHwwfHx8MA%3D%3D?w=500&amp;q=80"></div><div class="p-4"><h3 class="font-semibold leading-tight truncate">AER Duffle Pack 3</h3><p class="mt-1 text-sm text-muted-foreground">Backpacks</p></div></a><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 absolute top-3 right-3 h-8 w-8 rounded-full opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100" aria-label="Save thing"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark h-4 w-4" aria-hidden="true"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg></button></div><div class="group relative block overflow-hidden rounded-lg border bg-card text-card-foreground transition-all duration-300 ease-in-out hover:shadow-lg"><a href="#" aria-label="Minimalist Mechanical Watch"><div class="aspect-square overflow-hidden"><img alt="Minimalist Mechanical Watch" class="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&amp;q=80"></div><div class="p-4"><h3 class="font-semibold leading-tight truncate">Minimalist Mechanical Watch</h3><p class="mt-1 text-sm text-muted-foreground">Watches</p></div></a><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 absolute top-3 right-3 h-8 w-8 rounded-full opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100" aria-label="Save thing"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark h-4 w-4" aria-hidden="true"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg></button></div><div class="group relative block overflow-hidden rounded-lg border bg-card text-card-foreground transition-all duration-300 ease-in-out hover:shadow-lg"><a href="#" aria-label="Wireless Charging Stand"><div class="aspect-square overflow-hidden"><img alt="Wireless Charging Stand" class="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1617975316514-69cd7e16c2a4?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2lyZWxlc3MlMjBDaGFyZ2luZyUyMFN0YW5kfGVufDB8fDB8fHww?w=500&amp;q=80"></div><div class="p-4"><h3 class="font-semibold leading-tight truncate">Wireless Charging Stand</h3><p class="mt-1 text-sm text-muted-foreground">Tech Accessories</p></div></a><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 absolute top-3 right-3 h-8 w-8 rounded-full opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100" aria-label="Save thing"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark h-4 w-4" aria-hidden="true"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg></button></div><div class="group relative block overflow-hidden rounded-lg border bg-card text-card-foreground transition-all duration-300 ease-in-out hover:shadow-lg"><a href="#" aria-label="Artisan Ceramic Mug"><div class="aspect-square overflow-hidden"><img alt="Artisan Ceramic Mug" class="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&amp;q=80"></div><div class="p-4"><h3 class="font-semibold leading-tight truncate">Artisan Ceramic Mug</h3><p class="mt-1 text-sm text-muted-foreground">Home Goods</p></div></a><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 absolute top-3 right-3 h-8 w-8 rounded-full opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100" aria-label="Save thing"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark h-4 w-4" aria-hidden="true"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg></button></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.