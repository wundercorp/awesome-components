# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/lavikatiyar/offer-card/default
- Registry URL: https://21st.dev/r/lavikatiyar/offer-card
- Author: lavikatiyar
- Component slug: offer-card
- Demo slug: default
- Title: offer-card
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/lavikatiyar/offer-card with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/lavikatiyar__offer-card__default.html
- Local screenshot file: generated-21st-prompts/screenshots/lavikatiyar__offer-card__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="p-4 md:p-8 bg-background"><div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"><div class="group relative flex flex-col justify-end overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]"><a href="#flights" class="absolute inset-0 z-10" aria-label="Flights"><span class="sr-only">View Details</span></a><div aria-hidden="true" class="absolute inset-0 z-0 flex items-center justify-center"><img alt="Flights illustration" class="h-40 w-40 object-contain transition-transform duration-500 ease-in-out group-hover:scale-110" src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-OhOM7JB8YtWyJLwOJU2L3eHHTTWitp.png&amp;w=320&amp;q=75"></div><div class="relative z-20 mt-32"><h3 class="text-lg font-semibold text-card-foreground">Flights</h3><p class="mt-1 text-sm font-medium text-foreground">FLAT 10% OFF upto ₹1000</p></div></div><div class="group relative flex flex-col justify-end overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]"><a href="#hotels" class="absolute inset-0 z-10" aria-label="Hotels"><span class="sr-only">View Details</span></a><div aria-hidden="true" class="absolute inset-0 z-0 flex items-center justify-center"><img alt="Hotels illustration" class="h-40 w-40 object-contain transition-transform duration-500 ease-in-out group-hover:scale-110" src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-lCvW4p3khtoganHdqFzwxmQszzsKjS.png&amp;w=320&amp;q=75"></div><div class="relative z-20 mt-32"><h3 class="text-lg font-semibold text-card-foreground">Hotels</h3><p class="mt-1 text-sm font-medium text-foreground">FLAT 25% OFF upto ₹2,000</p></div></div><div class="group relative flex flex-col justify-end overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]"><a href="#trains" class="absolute inset-0 z-10" aria-label="Trains"><span class="sr-only">View Details</span></a><div aria-hidden="true" class="absolute inset-0 z-0 flex items-center justify-center"><img alt="Trains illustration" class="h-40 w-40 object-contain transition-transform duration-500 ease-in-out group-hover:scale-110" src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-xOGseOCJFMz0Dokb7Ph4oJyU1fqL5o.png&amp;w=320&amp;q=75"></div><div class="relative z-20 mt-32"><h3 class="text-lg font-semibold text-card-foreground">Trains</h3><p class="mt-1 text-sm font-medium text-foreground">FLAT ₹50 OFF</p></div></div><div class="relative"><div class="group relative flex flex-col justify-end overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg"><a href="#bus" class="absolute inset-0 z-10" aria-label="Bus"><span class="sr-only">View Details</span></a><div aria-hidden="true" class="absolute inset-0 z-0 flex items-center justify-center"><img alt="Bus illustration" class="h-40 w-40 object-contain transition-transform duration-500 ease-in-out group-hover:scale-110" src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-jUUd9iY5M09GRL9rsdfb188bh2kEwX.png&amp;w=320&amp;q=75"></div><div class="relative z-20 mt-32"><h3 class="text-lg font-semibold text-card-foreground">Bus</h3><p class="mt-1 text-sm font-medium text-foreground">FLAT 10% OFF</p></div></div><div aria-hidden="true" class="pointer-events-none absolute inset-0 rounded-xl" style="background: linear-gradient(to left, hsl(var(--background)) 5%, transparent 40%);"></div><div class="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 transform"><div class="flex h-12 w-12 items-center justify-center rounded-full bg-background shadow-md transition-transform duration-300 ease-in-out group-hover:scale-110"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-6 w-6 text-primary" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.