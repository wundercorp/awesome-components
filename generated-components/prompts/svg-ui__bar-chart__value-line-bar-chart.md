# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/svg-ui/bar-chart/value-line-bar-chart
- Registry URL: https://21st.dev/r/svg-ui/bar-chart
- Author: svg-ui
- Component slug: bar-chart
- Demo slug: value-line-bar-chart
- Title: bar-chart
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/svg-ui/bar-chart with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/svg-ui__bar-chart__value-line-bar-chart.html
- Local screenshot file: generated-21st-prompts/screenshots/svg-ui__bar-chart__value-line-bar-chart.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="rounded-lg border bg-card text-card-foreground shadow-sm"><div class="flex flex-col space-y-1.5 p-6"><h3 class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2"><span class="font-mono text-2xl tracking-tighter">$924</span><div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up h-4 w-4" aria-hidden="true"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg><span>5.2%</span></div></h3><p class="text-sm text-muted-foreground">vs. last quarter</p></div><div class="p-6 pt-0"><div data-slot="chart" data-chart="chart-«r1»" class="[&amp;_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&amp;_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&amp;_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&amp;_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&amp;_.recharts-radial-bar-background-sector]:fill-muted [&amp;_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&amp;_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&amp;_.recharts-dot[stroke='#fff']]:stroke-transparent [&amp;_.recharts-layer]:outline-hidden [&amp;_.recharts-sector]:outline-hidden [&amp;_.recharts-sector[stroke='#fff']]:stroke-transparent [&amp;_.recharts-surface]:outline-hidden"><style>
 [data-chart=chart-«r1»] {
  --color-desktop: var(--secondary-foreground);
}


.dark [data-chart=chart-«r1»] {
  --color-desktop: var(--secondary-foreground);
}
</style><div class="recharts-responsive-container" style="width: 100%; height: 100%; min-width: 0px;"><div style="width: 0px; height: 0px; overflow: visible;"><div class="recharts-wrapper" style="position: relative; cursor: default; width: 127px; height: 72px;"><svg role="application" tabindex="0" class="recharts-surface" width="127" height="72" viewBox="0 0 127 72" style="width: 100%; height: 100%;"><title></title><desc></desc><defs><clipPath id="recharts1-clip"><rect x="35" y="0" height="42" width="92"></rect></clipPath></defs><g class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis"><g class="recharts-cartesian-axis-ticks"><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="92" stroke="none" x="60.875" y="58" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="60.875" dy="0.71em">May</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="92" stroke="none" x="89.625" y="58" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="89.625" dy="0.71em">Oct</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="92" stroke="none" x="117.0078125" y="58" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="117.0078125" dy="0.71em">Apr</tspan></text></g></g></g><g class="recharts-layer recharts-bar"><g class="recharts-layer recharts-bar-rectangles"><g class="recharts-layer"><g class="recharts-layer recharts-bar-rectangle"><path fill="var(--color-desktop)" radius="4" x="35.575" y="27.635999999999996" width="4" height="14.364000000000004" class="recharts-rectangle duration-200" opacity="0.2" d="M 35.575,29.635999999999996
            A 2,2,0,0,1,37.575,27.635999999999996
            L 37.575,27.635999999999996
            A 2,2,0,0,1,39.575,29.635999999999996
            L 39.575,40
            A 2,2,0,0,1,37.575,42
            L 37.575,42
            A 2,2,0,0,1,35.575,40 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="var(--color-desktop)" radius="4" x="41.325" y="13.607999999999999" width="4" height="28.392000000000003" class="recharts-rectangle duration-200" opacity="0.2" d="M 41.325,15.607999999999999
            A 2,2,0,0,1,43.325,13.607999999999999
            L 43.325,13.607999999999999
            A 2,2,0,0,1,45.325,15.607999999999999
            L 45.325,40
            A 2,2,0,0,1,43.325,42
            L 43.325,42
            A 2,2,0,0,1,41.325,40 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="var(--color-desktop)" radius="4" x="47.075" y="20.496" width="4" height="21.504" class="recharts-rectangle duration-200" opacity="0.2" d="M 47.075,22.496
            A 2,2,0,0,1,49.075,20.496
            L 49.075,20.496
            A 2,2,0,0,1,51.075,22.496
            L 51.075,40
            A 2,2,0,0,1,49.075,42
            L 49.075,42
            A 2,2,0,0,1,47.075,40 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="var(--color-desktop)" radius="4" x="52.825" y="15.582" width="4" height="26.418" class="recharts-rectangle duration-200" opacity="0.2" d="M 52.825,17.582
            A 2,2,0,0,1,54.825,15.582
            L 54.825,15.582
            A 2,2,0,0,1,56.825,17.582
            L 56.825,40
            A 2,2,0,0,1,54.825,42
            L 54.825,42
            A 2,2,0,0,1,52.825,40 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="var(--color-desktop)" radius="4" x="58.575" y="22.764000000000003" width="4" height="19.235999999999997" class="recharts-rectangle duration-200" opacity="0.2" d="M 58.575,24.764000000000003
            A 2,2,0,0,1,60.575,22.764000000000003
            L 60.575,22.764000000000003
            A 2,2,0,0,1,62.575,24.764000000000003
            L 62.575,40
            A 2,2,0,0,1,60.575,42
            L 60.575,42
            A 2,2,0,0,1,58.575,40 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="var(--color-desktop)" radius="4" x="64.325" y="9.197999999999999" width="4" height="32.802" class="recharts-rectangle duration-200" opacity="0.2" d="M 64.325,11.197999999999999
            A 2,2,0,0,1,66.325,9.197999999999999
            L 66.325,9.197999999999999
            A 2,2,0,0,1,68.325,11.197999999999999
            L 68.325,40
            A 2,2,0,0,1,66.325,42
            L 66.325,42
            A 2,2,0,0,1,64.325,40 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="var(--color-desktop)" radius="4" x="70.075" y="25.451999999999998" width="4" height="16.548000000000002" class="recharts-rectangle duration-200" opacity="0.2" d="M 70.075,27.451999999999998
            A 2,2,0,0,1,72.075,25.451999999999998
            L 72.075,25.451999999999998
            A 2,2,0,0,1,74.075,27.451999999999998
            L 74.075,40
            A 2,2,0,0,1,72.075,42
            L 72.075,42
            A 2,2,0,0,1,70.075,40 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="var(--color-desktop)" radius="4" x="75.825" y="3.1919999999999984" width="4" height="38.808" class="recharts-rectangle duration-200" opacity="1" d="M 75.825,5.191999999999998
            A 2,2,0,0,1,77.825,3.1919999999999984
            L 77.825,3.1919999999999984
            A 2,2,0,0,1,79.825,5.191999999999998
            L 79.825,40
            A 2,2,0,0,1,77.825,42
            L 77.825,42
            A 2,2,0,0,1,75.825,40 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="var(--color-desktop)" radius="4" x="81.575" y="14.825999999999999" width="4" height="27.174" class="recharts-rectangle duration-200" opacity="0.2" d="M 81.575,16.826
            A 2,2,0,0,1,83.575,14.825999999999999
            L 83.575,14.825999999999999
            A 2,2,0,0,1,85.575,16.826
            L 85.575,40
            A 2,2,0,0,1,83.575,42
            L 83.575,42
            A 2,2,0,0,1,81.575,40 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="var(--color-desktop)" radius="4" x="87.325" y="19.656" width="4" height="22.344" class="recharts-rectangle duration-200" opacity="0.2" d="M 87.325,21.656
            A 2,2,0,0,1,89.325,19.656
            L 89.325,19.656
            A 2,2,0,0,1,91.325,21.656
            L 91.325,40
            A 2,2,0,0,1,89.325,42
            L 89.325,42
            A 2,2,0,0,1,87.325,40 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="var(--color-desktop)" radius="4" x="93.075" y="8.273999999999997" width="4" height="33.726" class="recharts-rectangle duration-200" opacity="0.2" d="M 93.075,10.273999999999997
            A 2,2,0,0,1,95.075,8.273999999999997
            L 95.075,8.273999999999997
            A 2,2,0,0,1,97.075,10.273999999999997
            L 97.075,40
            A 2,2,0,0,1,95.075,42
            L 95.075,42
            A 2,2,0,0,1,93.075,40 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="var(--color-desktop)" radius="4" x="98.825" y="30.618" width="4" height="11.382000000000001" class="recharts-rectangle duration-200" opacity="0.2" d="M 98.825,32.617999999999995
            A 2,2,0,0,1,100.825,30.618
            L 100.825,30.618
            A 2,2,0,0,1,102.825,32.617999999999995
            L 102.825,40
            A 2,2,0,0,1,100.825,42
            L 100.825,42
            A 2,2,0,0,1,98.825,40 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="var(--color-desktop)" radius="4" x="104.575" y="27.635999999999996" width="4" height="14.364000000000004" class="recharts-rectangle duration-200" opacity="0.2" d="M 104.575,29.635999999999996
            A 2,2,0,0,1,106.575,27.635999999999996
            L 106.575,27.635999999999996
            A 2,2,0,0,1,108.575,29.635999999999996
            L 108.575,40
            A 2,2,0,0,1,106.575,42
            L 106.575,42
            A 2,2,0,0,1,104.575,40 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="var(--color-desktop)" radius="4" x="110.325" y="5.208" width="4" height="36.792" class="recharts-rectangle duration-200" opacity="0.2" d="M 110.325,7.208
            A 2,2,0,0,1,112.325,5.208
            L 112.325,5.208
            A 2,2,0,0,1,114.325,7.208
            L 114.325,40
            A 2,2,0,0,1,112.325,42
            L 112.325,42
            A 2,2,0,0,1,110.325,40 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="var(--color-desktop)" radius="4" x="116.075" y="20.496" width="4" height="21.504" class="recharts-rectangle duration-200" opacity="0.2" d="M 116.075,22.496
            A 2,2,0,0,1,118.075,20.496
            L 118.075,20.496
            A 2,2,0,0,1,120.075,22.496
            L 120.075,40
            A 2,2,0,0,1,118.075,42
            L 118.075,42
            A 2,2,0,0,1,116.075,40 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="var(--color-desktop)" radius="4" x="121.825" y="15.582" width="4" height="26.418" class="recharts-rectangle duration-200" opacity="0.2" d="M 121.825,17.582
            A 2,2,0,0,1,123.825,15.582
            L 123.825,15.582
            A 2,2,0,0,1,125.825,17.582
            L 125.825,40
            A 2,2,0,0,1,123.825,42
            L 123.825,42
            A 2,2,0,0,1,121.825,40 Z"></path></g></g></g></g><g class="recharts-layer recharts-reference-line"><line opacity="0.4" y="924" stroke="var(--secondary-foreground)" stroke-width="1" stroke-dasharray="3 3" fill="none" fill-opacity="1" x1="35" y1="3.1919999999999984" x2="127" y2="3.1919999999999984" class="recharts-reference-line-line"></line><rect x="0" y="-5.808000000000002" width="34" height="18" fill="var(--secondary-foreground)" rx="4"></rect><text class="font-mono" font-weight="600" x="6" y="7.191999999999998" fill="var(--primary-foreground)">924</text></g></svg></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.