# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ravikatiyar/hero-5/default
- Registry URL: https://21st.dev/r/ravikatiyar/hero-5
- Author: ravikatiyar
- Component slug: hero-5
- Demo slug: default
- Title: hero-5
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ravikatiyar/hero-5 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ravikatiyar__hero-5__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ravikatiyar__hero-5__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full bg-background"><section class="container mx-auto max-w-6xl px-4 py-16 sm:py-24" style="opacity: 1;"><div class="mx-auto max-w-3xl text-center"><h1 class="text-3xl font-bold tracking-tight text-foreground sm:text-5xl" style="opacity: 1; transform: none;">Invest in companies<br>and industries that share your <span class="text-primary">ethical values.</span></h1><p class="mt-6 text-lg leading-8 text-muted-foreground" style="opacity: 1; transform: none;">GOODFOLIO is a simple and transparent investment platform designed for experienced and aspiring socially responsible investors.</p><div class="mt-10" style="opacity: 1; transform: none;"><a href="#" class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">Join the waitlist</a></div></div><div class="mt-16 grid grid-cols-1 gap-6 sm:mt-24 md:grid-cols-3" style="opacity: 1;"><a href="#" aria-label="Fight deforestation" class="block" style="opacity: 1; transform: none;"><div class="border bg-card text-card-foreground group h-full overflow-hidden rounded-xl shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-md"><div class="overflow-hidden"><img alt="Fight deforestation" class="aspect-square w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"></div><div class="p-6"><div class="flex items-center justify-between"><h3 class="text-lg font-semibold text-foreground">Fight deforestation</h3><div class="flex h-10 w-10 items-center justify-center rounded-full bg-muted/50 transition-colors duration-300 group-hover:bg-muted"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div></div></div></div></a><a href="#" aria-label="Invest in ocean health" class="block" style="opacity: 1; transform: none;"><div class="border bg-card text-card-foreground group h-full overflow-hidden rounded-xl shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-md"><div class="overflow-hidden"><img alt="Invest in ocean health" class="aspect-square w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1503756234508-e32369269deb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"></div><div class="p-6"><div class="flex items-center justify-between"><h3 class="text-lg font-semibold text-foreground">Invest in ocean health</h3><div class="flex h-10 w-10 items-center justify-center rounded-full bg-muted/50 transition-colors duration-300 group-hover:bg-muted"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div></div></div></div></a><a href="#" aria-label="Support animal welfare" class="block" style="opacity: 1; transform: none;"><div class="border bg-card text-card-foreground group h-full overflow-hidden rounded-xl shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-md"><div class="overflow-hidden"><img alt="Support animal welfare" class="aspect-square w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"></div><div class="p-6"><div class="flex items-center justify-between"><h3 class="text-lg font-semibold text-foreground">Support animal welfare</h3><div class="flex h-10 w-10 items-center justify-center rounded-full bg-muted/50 transition-colors duration-300 group-hover:bg-muted"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div></div></div></div></a></div></section></div></div></div></div>
```

## Public registry source files

No public registry source files were available.