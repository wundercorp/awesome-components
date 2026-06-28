# Build Area Chart in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Area Chart screenshot](screenshot.png)

## Component

- Author group: `svg-ui`
- Component: `area-chart`
- Variant: `hatched-area-chart`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: svg-ui
- Component slug: area-chart
- Demo slug: hatched-area-chart
- Title: area-chart
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="rounded-lg border bg-card text-card-foreground shadow-sm"><div class="flex flex-col space-y-1.5 p-6"><h3 class="text-2xl font-semibold leading-none tracking-tight">Hatched Area Chart<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-green-500 bg-green-500/10 border-none ml-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up h-4 w-4" aria-hidden="true"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg><span>5.2%</span></div></h3><p class="text-sm text-muted-foreground">Showing total visitors for the last 6 months</p></div><div class="p-6 pt-0"><div data-slot="chart" data-chart="chart-«r0»" class="[&amp;_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&amp;_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&amp;_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&amp;_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&amp;_.recharts-radial-bar-background-sector]:fill-muted [&amp;_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&amp;_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&amp;_.recharts-dot[stroke='#fff']]:stroke-transparent [&amp;_.recharts-layer]:outline-hidden [&amp;_.recharts-sector]:outline-hidden [&amp;_.recharts-sector[stroke='#fff']]:stroke-transparent [&amp;_.recharts-surface]:outline-hidden"><style>
 [data-chart=chart-«r0»] {
  --color-desktop: var(--chart-1);
  --color-mobile: var(--chart-2);
}


.dark [data-chart=chart-«r0»] {
  --color-desktop: var(--chart-1);
  --color-mobile: var(--chart-2);
}
</style><div class="recharts-responsive-container" style="width: 100%; height: 100%; min-width: 0px;"><div style="width: 0px; height: 0px; overflow: visible;"><div class="recharts-wrapper" style="position: relative; cursor: default; width: 277px; height: 156px;"><div xmlns="http://www.w3.org/1999/xhtml" tabindex="-1" class="recharts-tooltip-wrapper" style="visibility: hidden; pointer-events: none; position: absolute; top: 0px; left: 0px;"></div><svg role="application" tabindex="0" class="recharts-surface" width="277" height="156" viewBox="0 0 277 156" style="width: 100%; height: 100%;"><title></title><desc></desc><defs><clipPath id="recharts1-clip"><rect x="5" y="5" height="116" width="267"></rect></clipPath></defs><g class="recharts-cartesian-grid"><g class="recharts-cartesian-grid-horizontal"><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="5" y="5" width="267" height="116" x1="5" y1="121" x2="272" y2="121"></line><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="5" y="5" width="267" height="116" x1="5" y1="92" x2="272" y2="92"></line><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="5" y="5" width="267" height="116" x1="5" y1="63" x2="272" y2="63"></line><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="5" y="5" width="267" height="116" x1="5" y1="5" x2="272" y2="5"></line></g></g><g class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis"><g class="recharts-cartesian-axis-ticks"><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="267" stroke="none" x="29.272727272727273" y="135" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="29.272727272727273" dy="0.71em">Feb</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="267" stroke="none" x="77.81818181818181" y="135" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="77.81818181818181" dy="0.71em">Apr</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="267" stroke="none" x="126.36363636363637" y="135" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="126.36363636363637" dy="0.71em">Jun</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="267" stroke="none" x="174.9090909090909" y="135" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="174.9090909090909" dy="0.71em">Aug</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="267" stroke="none" x="223.45454545454547" y="135" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="223.45454545454547" dy="0.71em">Oct</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="267" stroke="none" x="265.8515625" y="135" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="265.8515625" dy="0.71em">Dec</tspan></text></g></g></g><defs><pattern id="hatched-background-pattern-desktop" x="0" y="0" width="6.81" height="6.81" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)" overflow="visible"><g overflow="visible" class="will-change-transform"><animateTransform attributeName="transform" type="translate" from="0 0" to="6 0" dur="1s" repeatCount="indefinite"></animateTransform><rect width="10" height="10" opacity="0.05" fill="var(--chart-1)"></rect><rect width="1" height="10" fill="var(--chart-1)"></rect></g></pattern><pattern id="hatched-background-pattern-mobile" x="0" y="0" width="6.81" height="6.81" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)" overflow="visible"><g overflow="visible" class="will-change-transform"><animateTransform attributeName="transform" type="translate" from="0 0" to="6 0" dur="1s" repeatCount="indefinite"></animateTransform><rect width="10" height="10" opacity="0.05" fill="var(--chart-2)"></rect><rect width="1" height="10" fill="var(--chart-2)"></rect></g></pattern><linearGradient id="hatched-background-pattern-grad-desktop" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stop-color="var(--color-desktop)" stop-opacity="0.4"></stop><stop offset="95%" stop-color="var(--color-desktop)" stop-opacity="0"></stop></linearGradient><linearGradient id="hatched-background-pattern-grad-mobile" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stop-color="var(--color-mobile)" stop-opacity="0.4"></stop><stop offset="95%" stop-color="var(--color-mobile)" stop-opacity="0"></stop></linearGradient></defs><g class="recharts-layer recharts-area"><g class="recharts-layer"><path stroke-width="0.8" fill="url(#hatched-background-pattern-grad-mobile)" fill-opacity="0.4" height="116" width="267" stroke="none" class="recharts-curve recharts-area-area" d="M5,105.211C13.091,91.761,21.182,78.312,29.273,78.853C37.364,79.395,45.455,93.928,53.545,96.06C61.636,98.192,69.727,87.922,77.818,87.424C85.909,86.926,94,96.2,102.091,94.449C110.182,92.698,118.273,79.922,126.364,82.462C134.455,85.002,142.545,102.858,150.636,100.893C158.727,98.928,166.818,77.142,174.909,73.118C183,69.093,191.091,82.831,199.182,89.487C207.273,96.143,215.364,95.718,223.455,90.324C231.545,84.931,239.636,74.569,247.727,76.727C255.818,78.884,263.909,93.562,272,108.24L272,121C263.909,121,255.818,121,247.727,121C239.636,121,231.545,121,223.455,121C215.364,121,207.273,121,199.182,121C191.091,121,183,121,174.909,121C166.818,121,158.727,121,150.636,121C142.545,121,134.455,121,126.364,121C118.273,121,110.182,121,102.091,121C94,121,85.909,121,77.818,121C69.727,121,61.636,121,53.545,121C45.455,121,37.364,121,29.273,121C21.182,121,13.091,121,5,121Z"></path><path stroke-width="0.8" fill="none" fill-opacity="0.4" height="116" stroke="var(--color-mobile)" width="267" class="recharts-curve recharts-area-curve" d="M5,105.211C13.091,91.761,21.182,78.312,29.273,78.853C37.364,79.395,45.455,93.928,53.545,96.06C61.636,98.192,69.727,87.922,77.818,87.424C85.909,86.926,94,96.2,102.091,94.449C110.182,92.698,118.273,79.922,126.364,82.462C134.455,85.002,142.545,102.858,150.636,100.893C158.727,98.928,166.818,77.142,174.909,73.118C183,69.093,191.091,82.831,199.182,89.487C207.273,96.143,215.364,95.718,223.455,90.324C231.545,84.931,239.636,74.569,247.727,76.727C255.818,78.884,263.909,93.562,272,108.24"></path></g></g><g class="recharts-layer recharts-area"><g class="recharts-layer"><path stroke-width="0.8" fill="url(#hatched-background-pattern-grad-desktop)" fill-opacity="0.4" height="116" width="267" stroke="none" class="recharts-curve recharts-area-area" d="M5,83.171C13.091,52.136,21.182,21.1,29.273,22.4C37.364,23.7,45.455,57.334,53.545,63.064C61.636,68.795,69.727,46.621,77.818,46.889C85.909,47.157,94,69.866,102.091,64.933C110.182,60,118.273,27.425,126.364,32.131C134.455,36.837,142.545,78.825,150.636,75.502C158.727,72.18,166.818,23.548,174.909,13.507C183,3.465,191.091,32.015,199.182,47.791C207.273,63.567,215.364,66.571,223.455,56.04C231.545,45.509,239.636,21.444,247.727,24.978C255.818,28.511,263.909,59.643,272,90.776L272,108.24C263.909,93.562,255.818,78.884,247.727,76.727C239.636,74.569,231.545,84.931,223.455,90.324C215.364,95.718,207.273,96.143,199.182,89.487C191.091,82.831,183,69.093,174.909,73.118C166.818,77.142,158.727,98.928,150.636,100.893C142.545,102.858,134.455,85.002,126.364,82.462C118.273,79.922,110.182,92.698,102.091,94.449C94,96.2,85.909,86.926,77.818,87.424C69.727,87.922,61.636,98.192,53.545,96.06C45.455,93.928,37.364,79.395,29.273,78.853C21.182,78.312,13.091,91.761,5,105.211Z"></path><path stroke-width="0.8" fill="none" fill-opacity="0.4" height="116" stroke="var(--color-desktop)" width="267" class="recharts-curve recharts-area-curve" d="M5,83.171C13.091,52.136,21.182,21.1,29.273,22.4C37.364,23.7,45.455,57.334,53.545,63.064C61.636,68.795,69.727,46.621,77.818,46.889C85.909,47.157,94,69.866,102.091,64.933C110.182,60,118.273,27.425,126.364,32.131C134.455,36.837,142.545,78.825,150.636,75.502C158.727,72.18,166.818,23.548,174.909,13.507C183,3.465,191.091,32.015,199.182,47.791C207.273,63.567,215.364,66.571,223.455,56.04C231.545,45.509,239.636,21.444,247.727,24.978C255.818,28.511,263.909,59.643,272,90.776"></path></g></g></svg></div></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
