# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/svg-ui/bar-chart/highlighted-multiple-bar-chart
- Registry URL: https://21st.dev/r/svg-ui/bar-chart
- Author: svg-ui
- Component slug: bar-chart
- Demo slug: highlighted-multiple-bar-chart
- Title: bar-chart
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/svg-ui/bar-chart with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/svg-ui__bar-chart__highlighted-multiple-bar-chart.html
- Local screenshot file: generated-21st-prompts/screenshots/svg-ui__bar-chart__highlighted-multiple-bar-chart.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="rounded-lg border bg-card text-card-foreground shadow-sm"><div class="flex flex-col space-y-1.5 p-6"><h3 class="text-2xl font-semibold leading-none tracking-tight">Bar Chart - Multiple<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-red-500 bg-red-500/10 border-none ml-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-down h-4 w-4" aria-hidden="true"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline><polyline points="16 17 22 17 22 11"></polyline></svg><span>-5.2%</span></div></h3><p class="text-sm text-muted-foreground"><span>January - June 2025</span></p></div><div class="p-6 pt-0"><div data-slot="chart" data-chart="chart-«r0»" class="[&amp;_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&amp;_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&amp;_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&amp;_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&amp;_.recharts-radial-bar-background-sector]:fill-muted [&amp;_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&amp;_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&amp;_.recharts-dot[stroke='#fff']]:stroke-transparent [&amp;_.recharts-layer]:outline-hidden [&amp;_.recharts-sector]:outline-hidden [&amp;_.recharts-sector[stroke='#fff']]:stroke-transparent [&amp;_.recharts-surface]:outline-hidden"><style>
 [data-chart=chart-«r0»] {
  --color-desktop: var(--chart-1);
  --color-mobile: var(--chart-2);
}


.dark [data-chart=chart-«r0»] {
  --color-desktop: var(--chart-1);
  --color-mobile: var(--chart-2);
}
</style><div class="recharts-responsive-container" style="width: 100%; height: 100%; min-width: 0px;"><div style="width: 0px; height: 0px; overflow: visible;"><div class="recharts-wrapper" style="position: relative; cursor: default; width: 278px; height: 156px;"><div xmlns="http://www.w3.org/1999/xhtml" tabindex="-1" class="recharts-tooltip-wrapper" style="visibility: hidden; pointer-events: none; position: absolute; top: 0px; left: 0px;"></div><svg role="application" tabindex="0" class="recharts-surface" width="278" height="156" viewBox="0 0 278 156" style="width: 100%; height: 100%;"><title></title><desc></desc><defs><clipPath id="recharts1-clip"><rect x="5" y="5" height="116" width="268"></rect></clipPath></defs><rect x="0" y="0" width="100%" height="85%" fill="url(#default-multiple-pattern-dots)"></rect><defs><pattern id="default-multiple-pattern-dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse"><circle class="dark:text-muted/40 text-muted" cx="2" cy="2" r="1" fill="currentColor"></circle></pattern></defs><g class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis"><g class="recharts-cartesian-axis-ticks"><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="268" stroke="none" x="27.333333333333332" y="137" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="27.333333333333332" dy="0.71em">Jan</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="268" stroke="none" x="72" y="137" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="72" dy="0.71em">Feb</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="268" stroke="none" x="116.66666666666666" y="137" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="116.66666666666666" dy="0.71em">Mar</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="268" stroke="none" x="161.33333333333334" y="137" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="161.33333333333334" dy="0.71em">Apr</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="268" stroke="none" x="206" y="137" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="206" dy="0.71em">May</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="268" stroke="none" x="250.66666666666666" y="137" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="250.66666666666666" dy="0.71em">Jun</tspan></text></g></g></g><g class="recharts-layer recharts-bar"><g class="recharts-layer recharts-bar-rectangles"><g class="recharts-layer"><g class="recharts-layer recharts-bar-rectangle"><path fill="var(--color-desktop)" radius="4" x="9.466666666666665" y="53.574999999999996" width="15" height="67.42500000000001" fill-opacity="1" stroke="" class="recharts-rectangle duration-200" d="M 9.466666666666665,57.574999999999996
            A 4,4,0,0,1,13.466666666666665,53.574999999999996
            L 20.466666666666665,53.574999999999996
            A 4,4,0,0,1,24.466666666666665,57.574999999999996
            L 24.466666666666665,117
            A 4,4,0,0,1,20.466666666666665,121
            L 13.466666666666665,121
            A 4,4,0,0,1,9.466666666666665,117 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="var(--color-desktop)" radius="4" x="54.13333333333333" y="10.4375" width="15" height="110.5625" fill-opacity="1" stroke="" class="recharts-rectangle duration-200" d="M 54.13333333333333,14.4375
            A 4,4,0,0,1,58.13333333333333,10.4375
            L 65.13333333333333,10.4375
            A 4,4,0,0,1,69.13333333333333,14.4375
            L 69.13333333333333,117
            A 4,4,0,0,1,65.13333333333333,121
            L 58.13333333333333,121
            A 4,4,0,0,1,54.13333333333333,117 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="var(--color-desktop)" radius="4" x="98.8" y="35.087500000000006" width="15" height="85.9125" fill-opacity="1" stroke="" class="recharts-rectangle duration-200" d="M 98.8,39.087500000000006
            A 4,4,0,0,1,102.8,35.087500000000006
            L 109.8,35.087500000000006
            A 4,4,0,0,1,113.8,39.087500000000006
            L 113.8,117
            A 4,4,0,0,1,109.8,121
            L 102.8,121
            A 4,4,0,0,1,98.8,117 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="var(--color-desktop)" radius="4" x="143.46666666666667" y="94.5375" width="15" height="26.462500000000006" fill-opacity="1" stroke="" class="recharts-rectangle duration-200" d="M 143.46666666666667,98.5375
            A 4,4,0,0,1,147.46666666666667,94.5375
            L 154.46666666666667,94.5375
            A 4,4,0,0,1,158.46666666666667,98.5375
            L 158.46666666666667,117
            A 4,4,0,0,1,154.46666666666667,121
            L 147.46666666666667,121
            A 4,4,0,0,1,143.46666666666667,117 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="var(--color-desktop)" radius="4" x="188.13333333333333" y="45.237500000000004" width="15" height="75.76249999999999" fill-opacity="1" stroke="" class="recharts-rectangle duration-200" d="M 188.13333333333333,49.237500000000004
            A 4,4,0,0,1,192.13333333333333,45.237500000000004
            L 199.13333333333333,45.237500000000004
            A 4,4,0,0,1,203.13333333333333,49.237500000000004
            L 203.13333333333333,117
            A 4,4,0,0,1,199.13333333333333,121
            L 192.13333333333333,121
            A 4,4,0,0,1,188.13333333333333,117 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="var(--color-desktop)" radius="4" x="232.79999999999998" y="43.425000000000004" width="15" height="77.57499999999999" fill-opacity="1" stroke="" class="recharts-rectangle duration-200" d="M 232.79999999999998,47.425000000000004
            A 4,4,0,0,1,236.79999999999998,43.425000000000004
            L 243.79999999999998,43.425000000000004
            A 4,4,0,0,1,247.79999999999998,47.425000000000004
            L 247.79999999999998,117
            A 4,4,0,0,1,243.79999999999998,121
            L 236.79999999999998,121
            A 4,4,0,0,1,232.79999999999998,117 Z"></path></g></g></g></g><g class="recharts-layer recharts-bar"><g class="recharts-layer recharts-bar-rectangles"><g class="recharts-layer"><g class="recharts-layer recharts-bar-rectangle"><path fill="var(--color-mobile)" radius="4" x="28.466666666666665" y="92" width="15" height="29" fill-opacity="1" stroke="" class="recharts-rectangle duration-200" d="M 28.466666666666665,96
            A 4,4,0,0,1,32.46666666666667,92
            L 39.46666666666667,92
            A 4,4,0,0,1,43.46666666666667,96
            L 43.46666666666667,117
            A 4,4,0,0,1,39.46666666666667,121
            L 32.46666666666667,121
            A 4,4,0,0,1,28.466666666666665,117 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="var(--color-mobile)" radius="4" x="73.13333333333333" y="48.5" width="15" height="72.5" fill-opacity="1" stroke="" class="recharts-rectangle duration-200" d="M 73.13333333333333,52.5
            A 4,4,0,0,1,77.13333333333333,48.5
            L 84.13333333333333,48.5
            A 4,4,0,0,1,88.13333333333333,52.5
            L 88.13333333333333,117
            A 4,4,0,0,1,84.13333333333333,121
            L 77.13333333333333,121
            A 4,4,0,0,1,73.13333333333333,117 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="var(--color-mobile)" radius="4" x="117.8" y="77.5" width="15" height="43.5" fill-opacity="1" stroke="" class="recharts-rectangle duration-200" d="M 117.8,81.5
            A 4,4,0,0,1,121.8,77.5
            L 128.8,77.5
            A 4,4,0,0,1,132.8,81.5
            L 132.8,117
            A 4,4,0,0,1,128.8,121
            L 121.8,121
            A 4,4,0,0,1,117.8,117 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="var(--color-mobile)" radius="4" x="162.46666666666667" y="52.125" width="15" height="68.875" fill-opacity="1" stroke="" class="recharts-rectangle duration-200" d="M 162.46666666666667,56.125
            A 4,4,0,0,1,166.46666666666667,52.125
            L 173.46666666666667,52.125
            A 4,4,0,0,1,177.46666666666667,56.125
            L 177.46666666666667,117
            A 4,4,0,0,1,173.46666666666667,121
            L 166.46666666666667,121
            A 4,4,0,0,1,162.46666666666667,117 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="var(--color-mobile)" radius="4" x="207.13333333333333" y="73.875" width="15" height="47.125" fill-opacity="1" stroke="" class="recharts-rectangle duration-200" d="M 207.13333333333333,77.875
            A 4,4,0,0,1,211.13333333333333,73.875
            L 218.13333333333333,73.875
            A 4,4,0,0,1,222.13333333333333,77.875
            L 222.13333333333333,117
            A 4,4,0,0,1,218.13333333333333,121
            L 211.13333333333333,121
            A 4,4,0,0,1,207.13333333333333,117 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="var(--color-mobile)" radius="4" x="251.79999999999998" y="70.25" width="15" height="50.75" fill-opacity="1" stroke="" class="recharts-rectangle duration-200" d="M 251.79999999999998,74.25
            A 4,4,0,0,1,255.79999999999998,70.25
            L 262.79999999999995,70.25
            A 4,4,0,0,1,266.79999999999995,74.25
            L 266.79999999999995,117
            A 4,4,0,0,1,262.79999999999995,121
            L 255.79999999999998,121
            A 4,4,0,0,1,251.79999999999998,117 Z"></path></g></g></g></g></svg></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.