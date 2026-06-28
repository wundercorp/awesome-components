# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/svg-ui/area-chart/default
- Registry URL: https://21st.dev/r/svg-ui/area-chart
- Author: svg-ui
- Component slug: area-chart
- Demo slug: default
- Title: area-chart
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/svg-ui/area-chart with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/svg-ui__area-chart__default.html
- Local screenshot file: generated-21st-prompts/screenshots/svg-ui__area-chart__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="rounded-lg border bg-card text-card-foreground shadow-sm"><div class="flex flex-col space-y-1.5 p-6"><h3 class="text-2xl font-semibold leading-none tracking-tight">Area Chart<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-green-500 bg-green-500/10 border-none ml-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up h-4 w-4" aria-hidden="true"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg><span>5.2%</span></div></h3><p class="text-sm text-muted-foreground">Showing total visitors for the last 6 months</p></div><div class="p-6 pt-0"><div data-slot="chart" data-chart="chart-«r0»" class="[&amp;_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&amp;_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&amp;_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&amp;_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&amp;_.recharts-radial-bar-background-sector]:fill-muted [&amp;_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&amp;_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&amp;_.recharts-dot[stroke='#fff']]:stroke-transparent [&amp;_.recharts-layer]:outline-hidden [&amp;_.recharts-sector]:outline-hidden [&amp;_.recharts-sector[stroke='#fff']]:stroke-transparent [&amp;_.recharts-surface]:outline-hidden"><style>
 [data-chart=chart-«r0»] {
  --color-desktop: var(--chart-1);
  --color-mobile: var(--chart-2);
}


.dark [data-chart=chart-«r0»] {
  --color-desktop: var(--chart-1);
  --color-mobile: var(--chart-2);
}
</style><div class="recharts-responsive-container" style="width: 100%; height: 100%; min-width: 0px;"><div style="width: 0px; height: 0px; overflow: visible;"><div class="recharts-wrapper" style="position: relative; cursor: default; width: 276px; height: 155px;"><div xmlns="http://www.w3.org/1999/xhtml" tabindex="-1" class="recharts-tooltip-wrapper" style="visibility: hidden; pointer-events: none; position: absolute; top: 0px; left: 0px;"></div><svg role="application" tabindex="0" class="recharts-surface" width="276" height="155" viewBox="0 0 276 155" style="width: 100%; height: 100%;"><title></title><desc></desc><defs><clipPath id="recharts1-clip"><rect x="5" y="5" height="115" width="266"></rect></clipPath></defs><g class="recharts-cartesian-grid"><g class="recharts-cartesian-grid-horizontal"><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="5" y="5" width="266" height="115" x1="5" y1="120" x2="271" y2="120"></line><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="5" y="5" width="266" height="115" x1="5" y1="62.5" x2="271" y2="62.5"></line><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="5" y="5" width="266" height="115" x1="5" y1="5" x2="271" y2="5"></line></g></g><g class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis"><g class="recharts-cartesian-axis-ticks"><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="266" stroke="none" x="29.181818181818183" y="134" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="29.181818181818183" dy="0.71em">Feb</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="266" stroke="none" x="77.54545454545455" y="134" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="77.54545454545455" dy="0.71em">Apr</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="266" stroke="none" x="125.90909090909092" y="134" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="125.90909090909092" dy="0.71em">Jun</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="266" stroke="none" x="174.27272727272728" y="134" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="174.27272727272728" dy="0.71em">Aug</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="266" stroke="none" x="222.63636363636365" y="134" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="222.63636363636365" dy="0.71em">Oct</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="266" stroke="none" x="264.8515625" y="134" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="264.8515625" dy="0.71em">Dec</tspan></text></g></g></g><defs><linearGradient id="gradient-chart-desktop" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stop-color="var(--color-desktop)" stop-opacity="0.5"></stop><stop offset="95%" stop-color="var(--color-desktop)" stop-opacity="0.1"></stop></linearGradient><linearGradient id="gradient-chart-mobile" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stop-color="var(--color-mobile)" stop-opacity="0.5"></stop><stop offset="95%" stop-color="var(--color-mobile)" stop-opacity="0.1"></stop></linearGradient></defs><g class="recharts-layer recharts-area"><g class="recharts-layer"><path stroke-width="0.8" stroke-dasharray="3 3" fill="url(#gradient-chart-mobile)" fill-opacity="0.4" height="115" width="266" stroke="none" class="recharts-curve recharts-area-area" d="M5,104.347L29.182,78.217L53.364,95.275L77.545,86.714L101.727,93.678L125.909,81.794L150.091,100.067L174.273,72.531L198.455,88.758L222.636,89.589L246.818,76.108L271,107.35L271,120L246.818,120L222.636,120L198.455,120L174.273,120L150.091,120L125.909,120L101.727,120L77.545,120L53.364,120L29.182,120L5,120Z"></path><path stroke-width="0.8" stroke-dasharray="3 3" fill="none" fill-opacity="0.4" height="115" stroke="var(--color-mobile)" width="266" class="recharts-curve recharts-area-curve" d="M5,104.347L29.182,78.217L53.364,95.275L77.545,86.714L101.727,93.678L125.909,81.794L150.091,100.067L174.273,72.531L198.455,88.758L222.636,89.589L246.818,76.108L271,107.35"></path></g></g><g class="recharts-layer recharts-area"><g class="recharts-layer"><path stroke-width="0.8" stroke-dasharray="3 3" fill="url(#gradient-chart-desktop)" fill-opacity="0.4" height="115" width="266" stroke="none" class="recharts-curve recharts-area-area" d="M5,82.497L29.182,22.25L53.364,62.564L77.545,46.528L101.727,64.417L125.909,31.897L150.091,74.894L174.273,13.433L198.455,47.422L222.636,55.6L246.818,24.806L271,90.036L271,107.35L246.818,76.108L222.636,89.589L198.455,88.758L174.273,72.531L150.091,100.067L125.909,81.794L101.727,93.678L77.545,86.714L53.364,95.275L29.182,78.217L5,104.347Z"></path><path stroke-width="0.8" stroke-dasharray="3 3" fill="none" fill-opacity="0.4" height="115" stroke="var(--color-desktop)" width="266" class="recharts-curve recharts-area-curve" d="M5,82.497L29.182,22.25L53.364,62.564L77.545,46.528L101.727,64.417L125.909,31.897L150.091,74.894L174.273,13.433L198.455,47.422L222.636,55.6L246.818,24.806L271,90.036"></path></g></g></svg></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.