# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ridemountainpig/flightcn-flight-routes/default
- Registry URL: https://21st.dev/r/ridemountainpig/flightcn-flight-routes
- Author: ridemountainpig
- Component slug: flightcn-flight-routes
- Demo slug: default
- Title: flightcn-flight-routes
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ridemountainpig/flightcn-flight-routes with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ridemountainpig__flightcn-flight-routes__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ridemountainpig__flightcn-flight-routes__default.png

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
<div id="root"><div class="flex min-h-screen w-full items-center justify-center overflow-hidden bg-background p-8"><div class="h-[420px] w-full max-w-4xl overflow-hidden rounded-lg border bg-background shadow-sm"><div class="relative h-full w-full maplibregl-map"><div class="maplibregl-canvas-container maplibregl-interactive maplibregl-touch-drag-pan maplibregl-touch-zoom-rotate"><canvas class="maplibregl-canvas" tabindex="0" aria-label="Map" role="region" width="894" height="418" style="width: 894px; height: 418px;"></canvas><div class="maplibregl-marker maplibregl-marker-anchor-center" aria-label="Map marker" role="button" style="transform: translate(-50%, -50%) translate(649px, 97px) rotateX(0deg) rotateZ(241.048deg); visibility: visible; opacity: 1;"><div class="flex items-center justify-center text-white drop-shadow-lg" style="width: 24px; height: 24px;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="currentColor"></path></svg></div></div><div class="maplibregl-marker maplibregl-marker-anchor-center" aria-label="Map marker" role="button" style="transform: translate(-50%, -50%) translate(452px, 300px) rotateX(0deg) rotateZ(33.682deg); visibility: visible; opacity: 1;"><div class="flex items-center justify-center text-white drop-shadow-lg" style="width: 24px; height: 24px;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="currentColor"></path></svg></div></div><div class="maplibregl-marker maplibregl-marker-anchor-center" aria-label="Map marker" role="button" style="transform: translate(-50%, -50%) translate(435px, 231px) rotateX(0deg) rotateZ(56.6382deg); visibility: visible; opacity: 1;"><div class="flex items-center justify-center text-white drop-shadow-lg" style="width: 24px; height: 24px;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="currentColor"></path></svg></div></div><div class="maplibregl-marker maplibregl-marker-anchor-center" aria-label="Map marker" role="button" style="transform: translate(-50%, -50%) translate(548px, 164px) rotateX(0deg) rotateZ(0deg); opacity: 1;"><div class="relative cursor-pointer"><div class="relative h-4 w-4 rounded-full border-2 shadow-lg border-white bg-neutral-950"></div><div class="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-foreground text-[10px] font-medium bottom-full mb-1 text-neutral-950">TPE</div></div></div><div class="maplibregl-marker maplibregl-marker-anchor-center" aria-label="Map marker" role="button" style="transform: translate(-50%, -50%) translate(657px, 93px) rotateX(0deg) rotateZ(0deg); opacity: 1;"><div class="relative cursor-pointer"><div class="relative h-4 w-4 rounded-full border-2 shadow-lg border-white bg-neutral-950"></div><div class="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-foreground text-[10px] font-medium bottom-full mb-1 text-neutral-950">HND</div></div></div><div class="maplibregl-marker maplibregl-marker-anchor-center" aria-label="Map marker" role="button" style="transform: translate(-50%, -50%) translate(446px, 309px) rotateX(0deg) rotateZ(0deg); opacity: 1;"><div class="relative cursor-pointer"><div class="relative h-4 w-4 rounded-full border-2 shadow-lg border-white bg-neutral-950"></div><div class="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-foreground text-[10px] font-medium bottom-full mb-1 text-neutral-950">SIN</div></div></div><div class="maplibregl-marker maplibregl-marker-anchor-center" aria-label="Map marker" role="button" style="transform: translate(-50%, -50%) translate(427px, 235px) rotateX(0deg) rotateZ(0deg); opacity: 1;"><div class="relative cursor-pointer"><div class="relative h-4 w-4 rounded-full border-2 shadow-lg border-white bg-neutral-950"></div><div class="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-foreground text-[10px] font-medium bottom-full mb-1 text-neutral-950">BKK</div></div></div></div><div class="maplibregl-control-container"><div class="maplibregl-ctrl-top-left "></div><div class="maplibregl-ctrl-top-right "></div><div class="maplibregl-ctrl-bottom-left "></div><div class="maplibregl-ctrl-bottom-right "><details class="maplibregl-ctrl maplibregl-ctrl-attrib maplibregl-compact maplibregl-compact-show" open=""><summary class="maplibregl-ctrl-attrib-button" title="Toggle attribution" aria-label="Toggle attribution"></summary><div class="maplibregl-ctrl-attrib-inner">© <a href="https://carto.com/about-carto/" target="_blank" rel="noopener">CARTO</a>, © <a href="http://www.openstreetmap.org/about/" target="_blank">OpenStreetMap</a> contributors</div></details></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.