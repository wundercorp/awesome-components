# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ravikatiyar/product-card-3/default
- Registry URL: https://21st.dev/r/ravikatiyar/product-card-3
- Author: ravikatiyar
- Component slug: product-card-3
- Demo slug: default
- Title: product-card-3
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ravikatiyar/product-card-3 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ravikatiyar__product-card-3__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ravikatiyar__product-card-3__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full bg-background p-8 flex items-center justify-center"><div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-4xl mx-auto overflow-hidden"><div class="flex flex-col space-y-1.5 p-6"><div class="flex items-center justify-between"><div><h3 class="text-2xl font-semibold leading-none tracking-tight">Today's Drops</h3><p class="text-sm text-muted-foreground">Upcoming drops from Nike</p></div><div class="flex items-center gap-2"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm shadow-black/5 hover:bg-accent hover:text-accent-foreground h-9 w-9" disabled="" aria-label="Previous drop"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left h-4 w-4" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></button><button class="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm shadow-black/5 hover:bg-accent hover:text-accent-foreground h-9 w-9" aria-label="Next drop"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-4 w-4" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button></div></div></div><div class="p-6 pt-0 overflow-hidden"><div class="flex gap-4 transition-transform duration-500 ease-in-out" style="transform: translateX(0%);"><div class="flex-shrink-0 w-full rounded-lg border bg-card p-4 text-card-foreground" style="flex-basis: calc(33.3333% - 10.6667px);"><div class="space-y-3"><p class="text-sm text-muted-foreground">14:00</p><div class="aspect-video w-full overflow-hidden rounded-md bg-muted"><img alt="Lemonade" class="h-full w-full object-contain object-center" src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-LnBkOp3vtoZxgA1Bbe9AQGMoa0Okez.png&amp;w=1000&amp;q=75"></div><div><h3 class="font-semibold">Lemonade</h3><p class="text-sm text-muted-foreground">Off-White Air Force</p></div></div></div><div class="flex-shrink-0 w-full rounded-lg border bg-card p-4 text-card-foreground" style="flex-basis: calc(33.3333% - 10.6667px);"><div class="space-y-3"><p class="text-sm text-muted-foreground">17:00</p><div class="aspect-video w-full overflow-hidden rounded-md bg-muted"><img alt="University Blue" class="h-full w-full object-contain object-center" src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-llBJrXGTGW8fvXFYtSynrQ6nWHbhKo.png&amp;w=1000&amp;q=75"></div><div><h3 class="font-semibold">University Blue</h3><p class="text-sm text-muted-foreground">Off-White Air Force</p></div></div></div><div class="flex-shrink-0 w-full rounded-lg border bg-card p-4 text-card-foreground" style="flex-basis: calc(33.3333% - 10.6667px);"><div class="space-y-3"><p class="text-sm text-muted-foreground">18:00</p><div class="aspect-video w-full overflow-hidden rounded-md bg-muted"><img alt="Brooklyn Green" class="h-full w-full object-contain object-center" src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-7DxkVlb641FDO4NwxI8j6rmWukXHAI.png&amp;w=1000&amp;q=75"></div><div><h3 class="font-semibold">Brooklyn Green</h3><p class="text-sm text-muted-foreground">Off-White Air Force</p></div></div></div><div class="flex-shrink-0 w-full rounded-lg border bg-card p-4 text-card-foreground" style="flex-basis: calc(33.3333% - 10.6667px);"><div class="space-y-3"><p class="text-sm text-muted-foreground">19:00</p><div class="aspect-video w-full overflow-hidden rounded-md bg-muted"><img alt="Chicago" class="h-full w-full object-contain object-center" src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-25Y9Z8CPr2GbrCOJekFo5jLy0sg3ce.png&amp;w=1000&amp;q=75"></div><div><h3 class="font-semibold">Chicago</h3><p class="text-sm text-muted-foreground">Off-White Air Jordan 1</p></div></div></div><div class="flex-shrink-0 w-full rounded-lg border bg-card p-4 text-card-foreground" style="flex-basis: calc(33.3333% - 10.6667px);"><div class="space-y-3"><p class="text-sm text-muted-foreground">20:00</p><div class="aspect-video w-full overflow-hidden rounded-md bg-muted"><img alt="Mocha" class="h-full w-full object-contain object-center" src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-KTicoKheLSl3rJR7arTqnbVAonWxMo.png&amp;w=1000&amp;q=75"></div><div><h3 class="font-semibold">Mocha</h3><p class="text-sm text-muted-foreground">Travis Scott Air Jordan 1</p></div></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.