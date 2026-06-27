# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ravikatiyar/flight-card/default
- Registry URL: https://21st.dev/r/ravikatiyar/flight-card
- Author: ravikatiyar
- Component slug: flight-card
- Demo slug: default
- Title: flight-card
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ravikatiyar/flight-card with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ravikatiyar__flight-card__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ravikatiyar__flight-card__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full min-h-[350px] flex items-center justify-center bg-background p-4"><div class="w-full max-w-4xl rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow" style="opacity: 1; transform: none;"><div class="p-6"><div class="flex justify-between items-start mb-4"><div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground bg-secondary/50">Partial Refundable</div></div><div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-6 items-center"><div class="md:col-span-3 flex flex-col"><div class="flex items-center gap-3"><div class="w-10 h-10 flex items-center justify-center rounded-md bg-muted overflow-hidden"><img alt="IndiGo logo" class="w-full h-full object-contain" src="https://static-assets-ct.flixcart.com/ct/assets/resources/images/logos/air-logos/svg_logos/6E.svg"></div><div><p class="font-semibold text-foreground">IndiGo</p><p class="text-sm text-muted-foreground">6E-2195</p></div></div><button class="inline-flex items-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline p-0 h-auto justify-start mt-2 text-sm" aria-label="View flight details">Flight Details</button></div><div class="md:col-span-5 flex items-center gap-2"><div class="text-center"><p class="font-bold text-lg text-foreground">12:45</p></div><div class="flex-grow text-center"><p class="text-sm text-muted-foreground">7h 15m</p><div class="relative w-full h-px bg-border my-1"><div class="absolute top-1/2 left-0 w-full h-px flex items-center justify-center"><div class="w-2 h-2 rounded-full bg-primary border-2 border-card"></div></div></div><p class="text-xs font-medium text-primary">1 stop</p></div><div class="text-center"><p class="font-bold text-lg text-foreground">20:00</p></div></div><div class="md:col-span-4 flex flex-col md:items-end gap-2"><p class="text-2xl font-bold text-foreground">₹6,916</p><p class="text-sm text-green-600 dark:text-green-500 text-right">Get ₹968 off with Axis Cards</p><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full md:w-auto mt-2" aria-label="Book flight for ₹6,916">Book<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2 h-4 w-4" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.