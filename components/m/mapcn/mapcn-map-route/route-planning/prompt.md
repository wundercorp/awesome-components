# Build Mapcn Map Route in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Mapcn Map Route screenshot](screenshot.png)

## Component

- Author group: `mapcn`
- Component: `mapcn-map-route`
- Variant: `route-planning`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: mapcn
- Component slug: mapcn-map-route
- Demo slug: route-planning
- Title: mapcn-map-route
- Description: 

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

No reference metadata available.

## Rendered DOM snapshot

This is the rendered demo HTML extracted from the live preview. Use it to verify structure, class names, visible content, and layout.

```html
<div id="root"><div class="flex min-h-screen w-full items-center justify-center overflow-hidden bg-background p-8"><div class="relative h-[500px] w-full max-w-4xl overflow-hidden rounded-lg border bg-background shadow-sm"><div class="relative h-full w-full maplibregl-map"><div class="maplibregl-canvas-container maplibregl-interactive maplibregl-touch-drag-pan maplibregl-touch-zoom-rotate"><canvas class="maplibregl-canvas" tabindex="0" aria-label="Map" role="region" width="894" height="498" style="width: 894px; height: 498px;"></canvas><div class="maplibregl-marker maplibregl-marker-anchor-center" aria-label="Map marker" role="button" style="transform: translate(-50%, -50%) translate(557px, 58px) rotateX(0deg) rotateZ(0deg); opacity: 1;"><div class="relative cursor-pointer"><div class="size-5 rounded-full border-2 border-white bg-green-500 shadow-lg"></div><div class="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-foreground text-[10px] font-medium bottom-full mb-1">Amsterdam</div></div></div><div class="maplibregl-marker maplibregl-marker-anchor-center" aria-label="Map marker" role="button" style="transform: translate(-50%, -50%) translate(338px, 429px) rotateX(0deg) rotateZ(0deg); opacity: 1;"><div class="relative cursor-pointer"><div class="size-5 rounded-full border-2 border-white bg-red-500 shadow-lg"></div><div class="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-foreground text-[10px] font-medium top-full mt-1">Rotterdam</div></div></div></div><div class="maplibregl-control-container"><div class="maplibregl-ctrl-top-left "></div><div class="maplibregl-ctrl-top-right "></div><div class="maplibregl-ctrl-bottom-left "></div><div class="maplibregl-ctrl-bottom-right "><details class="maplibregl-ctrl maplibregl-ctrl-attrib maplibregl-compact maplibregl-compact-show" open=""><summary class="maplibregl-ctrl-attrib-button" title="Toggle attribution" aria-label="Toggle attribution"></summary><div class="maplibregl-ctrl-attrib-inner">© <a href="https://carto.com/about-carto/" target="_blank" rel="noopener">CARTO</a>, © <a href="http://www.openstreetmap.org/about/" target="_blank">OpenStreetMap</a> contributors</div></details></div></div></div><div class="absolute left-3 top-3 flex flex-col gap-2"><button type="button" class="inline-flex h-8 items-center rounded-md px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 justify-start gap-3"><div class="flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock size-3.5" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg><span class="font-medium">1h 10m</span></div><div class="flex items-center gap-1.5 text-xs opacity-80"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-route size-3" aria-hidden="true"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>80.2 km</div><span class="rounded bg-green-100 px-1.5 py-0.5 text-[10px] font-medium text-green-700 dark:bg-green-900 dark:text-green-300">Fastest</span></button><button type="button" class="inline-flex h-8 items-center rounded-md px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 justify-start gap-3"><div class="flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock size-3.5" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg><span class="font-medium">1h 16m</span></div><div class="flex items-center gap-1.5 text-xs opacity-80"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-route size-3" aria-hidden="true"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>80.9 km</div></button></div></div></div></div>
```

## Reference source files

No reference source files were available.
