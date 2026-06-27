# Build Mapcn Marker Tooltip in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Mapcn Marker Tooltip screenshot](screenshot.png)

## Component

- Author group: `mapcn`
- Component: `mapcn-marker-tooltip`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: mapcn
- Component slug: mapcn-marker-tooltip
- Demo slug: default
- Title: mapcn-marker-tooltip
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
<div id="root"><div class="flex min-h-screen w-full items-center justify-center overflow-hidden bg-background p-8 text-foreground"><div class="h-[420px] w-full max-w-4xl overflow-hidden rounded-lg border shadow-sm"><div class="relative h-full w-full maplibregl-map"><div class="maplibregl-canvas-container maplibregl-interactive maplibregl-touch-drag-pan maplibregl-touch-zoom-rotate"><canvas class="maplibregl-canvas" tabindex="0" aria-label="Map" role="region" width="894" height="418" style="width: 894px; height: 418px;"></canvas><div class="maplibregl-marker maplibregl-marker-anchor-center" aria-label="Map marker" role="button" style="transform: translate(-50%, -50%) translate(447px, 209px) rotateX(0deg) rotateZ(0deg); opacity: 1;"><div class="relative cursor-pointer"><div data-mapcn-marker="Empire State Building" class="size-5 rounded-full border-2 border-white bg-blue-500 shadow-lg transition-transform hover:scale-110"></div></div></div><div class="maplibregl-marker maplibregl-marker-anchor-center" aria-label="Map marker" role="button" style="transform: translate(-50%, -50%) translate(506.128px, 76.322px) rotateX(0deg) rotateZ(0deg); opacity: 1;"><div class="relative cursor-pointer"><div data-mapcn-marker="Central Park" class="size-5 rounded-full border-2 border-white bg-blue-500 shadow-lg transition-transform hover:scale-110"></div></div></div><div class="maplibregl-marker maplibregl-marker-anchor-center" aria-label="Map marker" role="button" style="transform: translate(-50%, -50%) translate(448.748px, 172.088px) rotateX(0deg) rotateZ(0deg); opacity: 1;"><div class="relative cursor-pointer"><div data-mapcn-marker="Times Square" class="size-5 rounded-full border-2 border-white bg-blue-500 shadow-lg transition-transform hover:scale-110"></div></div></div></div><div class="maplibregl-control-container"><div class="maplibregl-ctrl-top-left "></div><div class="maplibregl-ctrl-top-right "></div><div class="maplibregl-ctrl-bottom-left "></div><div class="maplibregl-ctrl-bottom-right "><details class="maplibregl-ctrl maplibregl-ctrl-attrib maplibregl-compact maplibregl-compact-show" open=""><summary class="maplibregl-ctrl-attrib-button" title="Toggle attribution" aria-label="Toggle attribution"></summary><div class="maplibregl-ctrl-attrib-inner">© <a href="https://carto.com/about-carto/" target="_blank" rel="noopener">CARTO</a>, © <a href="http://www.openstreetmap.org/about/" target="_blank">OpenStreetMap</a> contributors</div></details></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
