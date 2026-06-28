# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ruixenui/product-image-card/default
- Registry URL: https://21st.dev/r/ruixenui/product-image-card
- Author: ruixenui
- Component slug: product-image-card
- Demo slug: default
- Title: product-image-card
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ruixenui/product-image-card with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ruixenui__product-image-card__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ruixenui__product-image-card__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><main><div class="container mx-auto max-w-5xl px-4"><div class="border text-card-foreground relative mx-auto w-full max-w-3xl rounded-3xl border-border bg-card/70 p-4 shadow-sm"><div class="flex items-center justify-between"><a href="#" aria-label="Back" class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm shadow-black/5 hover:bg-accent hover:text-accent-foreground h-9 w-9 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left h-4 w-4" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></a><h2 class="text-xl font-semibold sm:text-2xl">Product Details</h2><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm shadow-black/5 hover:bg-accent hover:text-accent-foreground h-9 w-9 rounded-full" aria-label="Favorite"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart h-4 w-4" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg></button></div><div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full my-4"></div><div class="grid grid-cols-12 gap-4"><div class="order-2 col-span-12 sm:order-1 sm:col-span-3"><div dir="ltr" class="relative overflow-hidden h-auto sm:h-[420px]" style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"><style>[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}</style><div data-radix-scroll-area-viewport="" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;"><div style="min-width: 100%; display: table;"><div class="flex gap-3 sm:flex-col"><button type="button" aria-pressed="true" class="relative overflow-hidden rounded-xl border p-0 outline-none transition focus-visible:ring-2 focus-visible:ring-ring border-foreground"><img alt="Front view" class="h-20 w-20 object-cover sm:h-16 sm:w-full" loading="eager" src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/v1.png"></button><button type="button" aria-pressed="false" class="relative overflow-hidden rounded-xl border p-0 outline-none transition focus-visible:ring-2 focus-visible:ring-ring border-border hover:border-foreground/50"><img alt="Back view" class="h-20 w-20 object-cover sm:h-16 sm:w-full" loading="lazy" src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/v2.png"></button><button type="button" aria-pressed="false" class="relative overflow-hidden rounded-xl border p-0 outline-none transition focus-visible:ring-2 focus-visible:ring-ring border-border hover:border-foreground/50"><img alt="Side angle" class="h-20 w-20 object-cover sm:h-16 sm:w-full" loading="lazy" src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/v3.png"></button><button type="button" aria-pressed="false" class="relative overflow-hidden rounded-xl border p-0 outline-none transition focus-visible:ring-2 focus-visible:ring-ring border-border hover:border-foreground/50"><img alt="Detail patch" class="h-20 w-20 object-cover sm:h-16 sm:w-full" loading="lazy" src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/v4.png"></button><button type="button" aria-pressed="false" class="relative overflow-hidden rounded-xl border p-0 outline-none transition focus-visible:ring-2 focus-visible:ring-ring border-border hover:border-foreground/50"><img alt="Other view" class="h-20 w-20 object-cover sm:h-16 sm:w-full" loading="lazy" src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/v1.png"></button></div></div></div></div></div><div class="order-1 col-span-12 sm:order-2 sm:col-span-9"><div class="relative"><div data-radix-aspect-ratio-wrapper="" style="position: relative; width: 100%; padding-bottom: 125%;"><div style="position: absolute; inset: 0px;"><div class="h-full w-full overflow-hidden rounded-3xl bg-muted"><img alt="Front view" class="h-full w-full rounded-3xl object-contain" src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/v1.png"></div></div></div><div class="absolute bottom-3 right-3 flex gap-2"><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 text-secondary-foreground shadow-sm shadow-black/5 hover:bg-secondary/80 h-9 w-9 rounded-full bg-background/80 backdrop-blur" aria-label="Previous image"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left h-4 w-4" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></button><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 text-secondary-foreground shadow-sm shadow-black/5 hover:bg-secondary/80 h-9 w-9 rounded-full bg-background/80 backdrop-blur" aria-label="Next image"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-4 w-4" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button></div></div></div></div></div></div></main></div></div></div>
```

## Public registry source files

No public registry source files were available.