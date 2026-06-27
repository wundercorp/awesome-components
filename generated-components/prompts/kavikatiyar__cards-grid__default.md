# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/kavikatiyar/cards-grid/default
- Registry URL: https://21st.dev/r/kavikatiyar/cards-grid
- Author: kavikatiyar
- Component slug: cards-grid
- Demo slug: default
- Title: cards-grid
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/kavikatiyar/cards-grid with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/kavikatiyar__cards-grid__default.html
- Local screenshot file: generated-21st-prompts/screenshots/kavikatiyar__cards-grid__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-6xl p-4 md:p-8"><div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" style="opacity: 1;"><a href="#" class="group block" target="_blank" rel="noopener noreferrer" tabindex="0" style="opacity: 1; transform: none;"><div class="flex h-full flex-col justify-between rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"><div class="flex items-start justify-between"><div class="flex items-center gap-4"><img alt="SOPs icon" class="h-10 w-10" src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-tRfo11d3TVT3JA1CtlD6iR8HZCvIQM.png&amp;w=320&amp;q=75"><div><h3 class="text-lg font-semibold text-card-foreground">SOPs</h3><p class="text-sm text-muted-foreground">Last updated: 29 April 2025</p></div></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></div></div></a><a href="#" class="group block" target="_blank" rel="noopener noreferrer" tabindex="0" style="opacity: 1; transform: none;"><div class="flex h-full flex-col justify-between rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"><div class="flex items-start justify-between"><div class="flex items-center gap-4"><img alt="Contracts icon" class="h-10 w-10" src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-fs2N6IIs4VkGZQpjrS17tAgnWBFkbl.png&amp;w=320&amp;q=75"><div><h3 class="text-lg font-semibold text-card-foreground">Contracts</h3><p class="text-sm text-muted-foreground">Last updated: 29 April 2025</p></div></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></div></div></a><a href="#" class="group block" target="_blank" rel="noopener noreferrer" tabindex="0" style="opacity: 1; transform: none;"><div class="flex h-full flex-col justify-between rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"><div class="flex items-start justify-between"><div class="flex items-center gap-4"><img alt="Templates icon" class="h-10 w-10" src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-uqbQgvm8wfMxwP35nXRvS4ZteqmoCU.png&amp;w=320&amp;q=75"><div><h3 class="text-lg font-semibold text-card-foreground">Templates</h3><p class="text-sm text-muted-foreground">Last updated: 29 April 2025</p></div></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></div></div></a><a href="#" class="group block" target="_blank" rel="noopener noreferrer" tabindex="0" style="opacity: 1; transform: none;"><div class="flex h-full flex-col justify-between rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"><div class="flex items-start justify-between"><div class="flex items-center gap-4"><img alt="Policies icon" class="h-10 w-10" src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-vSXxF8u21GdIWRr8AtFn5sK74jIZN8.png&amp;w=320&amp;q=75"><div><h3 class="text-lg font-semibold text-card-foreground">Policies</h3><p class="text-sm text-muted-foreground">Last updated: 29 April 2025</p></div></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></div></div></a><a href="#" class="group block" target="_blank" rel="noopener noreferrer" tabindex="0" style="opacity: 1; transform: none;"><div class="flex h-full flex-col justify-between rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"><div class="flex items-start justify-between"><div class="flex items-center gap-4"><img alt="Knowledge Base icon" class="h-10 w-10" src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-OcGyav7XXTTVq0fDXxzmOVek6Noq7s.png&amp;w=320&amp;q=75"><div><h3 class="text-lg font-semibold text-card-foreground">Knowledge Base</h3><p class="text-sm text-muted-foreground">Last updated: 29 April 2025</p></div></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></div></div></a><a href="#" class="group block" target="_blank" rel="noopener noreferrer" tabindex="0" style="opacity: 1; transform: none;"><div class="flex h-full flex-col justify-between rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"><div class="flex items-start justify-between"><div class="flex items-center gap-4"><img alt="Archive icon" class="h-10 w-10" src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-5zVOONIN28dJticozuMBCoSEjaw6VA.png&amp;w=320&amp;q=75"><div><h3 class="text-lg font-semibold text-card-foreground">Archive</h3><p class="text-sm text-muted-foreground">Last updated: 29 April 2025</p></div></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></div></div></a></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.