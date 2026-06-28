# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/svg-ui/line-chart/pinging-dot-chart
- Registry URL: https://21st.dev/r/svg-ui/line-chart
- Author: svg-ui
- Component slug: line-chart
- Demo slug: pinging-dot-chart
- Title: line-chart
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/svg-ui/line-chart with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/svg-ui__line-chart__pinging-dot-chart.html
- Local screenshot file: generated-21st-prompts/screenshots/svg-ui__line-chart__pinging-dot-chart.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="rounded-lg border bg-card text-card-foreground shadow-sm"><div class="flex flex-col space-y-1.5 p-6"><h3 class="text-2xl font-semibold leading-none tracking-tight">Pinging Dot Chart<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-green-500 bg-green-500/10 border-none ml-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up h-4 w-4" aria-hidden="true"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg><span>5.2%</span></div></h3><p class="text-sm text-muted-foreground">January - June 2024</p></div><div class="p-6 pt-0"><div data-slot="chart" data-chart="chart-«r0»" class="[&amp;_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&amp;_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&amp;_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&amp;_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&amp;_.recharts-radial-bar-background-sector]:fill-muted [&amp;_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&amp;_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&amp;_.recharts-dot[stroke='#fff']]:stroke-transparent [&amp;_.recharts-layer]:outline-hidden [&amp;_.recharts-sector]:outline-hidden [&amp;_.recharts-sector[stroke='#fff']]:stroke-transparent [&amp;_.recharts-surface]:outline-hidden"><style>
 [data-chart=chart-«r0»] {
  --color-desktop: var(--chart-2);
}


.dark [data-chart=chart-«r0»] {
  --color-desktop: var(--chart-2);
}
</style><div class="recharts-responsive-container" style="width: 100%; height: 100%; min-width: 0px;"><div style="width: 0px; height: 0px; overflow: visible;"><div class="recharts-wrapper" style="position: relative; cursor: default; width: 255px; height: 144px;"><div xmlns="http://www.w3.org/1999/xhtml" tabindex="-1" class="recharts-tooltip-wrapper" style="visibility: hidden; pointer-events: none; position: absolute; top: 0px; left: 0px;"></div><svg role="application" tabindex="0" class="recharts-surface" width="255" height="144" viewBox="0 0 255 144" style="width: 100%; height: 100%;"><title></title><desc></desc><defs><clipPath id="recharts1-clip"><rect x="12" y="0" height="114" width="231"></rect></clipPath></defs><g class="recharts-cartesian-grid"><g class="recharts-cartesian-grid-horizontal"><line stroke="#ccc" fill="none" x="12" y="0" width="231" height="114" x1="12" y1="114" x2="243" y2="114"></line><line stroke="#ccc" fill="none" x="12" y="0" width="231" height="114" x1="12" y1="57" x2="243" y2="57"></line><line stroke="#ccc" fill="none" x="12" y="0" width="231" height="114" x1="12" y1="0" x2="243" y2="0"></line></g></g><g class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis"><g class="recharts-cartesian-axis-ticks"><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="231" stroke="none" x="12" y="128" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="12" dy="0.71em">Jan</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="231" stroke="none" x="58.2" y="128" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="58.2" dy="0.71em">Feb</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="231" stroke="none" x="104.4" y="128" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="104.4" dy="0.71em">Mar</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="231" stroke="none" x="150.60000000000002" y="128" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="150.60000000000002" dy="0.71em">Apr</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="231" stroke="none" x="196.8" y="128" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="196.8" dy="0.71em">May</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="231" stroke="none" x="243" y="128" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="243" dy="0.71em">Jun</tspan></text></g></g></g><g class="recharts-layer recharts-line"><path stroke="var(--color-desktop)" stroke-dasharray="4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 2.534423828125px, 0px, 0px" fill="none" stroke-width="1" height="114" width="231" class="recharts-curve recharts-line-curve" d="M12,47.738L58.2,5.344L104.4,29.569L150.6,87.994L196.8,39.544L243,37.763"></path><g class="recharts-layer recharts-line-dots"><g><circle cx="12" cy="47.7375" r="3" fill="var(--color-desktop)"></circle><circle cx="12" cy="47.7375" r="3" stroke="var(--color-desktop)" fill="none" stroke-width="1" opacity="0.8"><animate attributeName="r" values="3;10" dur="1s" repeatCount="indefinite"></animate><animate attributeName="opacity" values="0.8;0" dur="1s" repeatCount="indefinite"></animate></circle></g><g><circle cx="58.2" cy="5.34375" r="3" fill="var(--color-desktop)"></circle><circle cx="58.2" cy="5.34375" r="3" stroke="var(--color-desktop)" fill="none" stroke-width="1" opacity="0.8"><animate attributeName="r" values="3;10" dur="1s" repeatCount="indefinite"></animate><animate attributeName="opacity" values="0.8;0" dur="1s" repeatCount="indefinite"></animate></circle></g><g><circle cx="104.4" cy="29.56875" r="3" fill="var(--color-desktop)"></circle><circle cx="104.4" cy="29.56875" r="3" stroke="var(--color-desktop)" fill="none" stroke-width="1" opacity="0.8"><animate attributeName="r" values="3;10" dur="1s" repeatCount="indefinite"></animate><animate attributeName="opacity" values="0.8;0" dur="1s" repeatCount="indefinite"></animate></circle></g><g><circle cx="150.60000000000002" cy="87.99374999999999" r="3" fill="var(--color-desktop)"></circle><circle cx="150.60000000000002" cy="87.99374999999999" r="3" stroke="var(--color-desktop)" fill="none" stroke-width="1" opacity="0.8"><animate attributeName="r" values="3;10" dur="1s" repeatCount="indefinite"></animate><animate attributeName="opacity" values="0.8;0" dur="1s" repeatCount="indefinite"></animate></circle></g><g><circle cx="196.8" cy="39.54375" r="3" fill="var(--color-desktop)"></circle><circle cx="196.8" cy="39.54375" r="3" stroke="var(--color-desktop)" fill="none" stroke-width="1" opacity="0.8"><animate attributeName="r" values="3;10" dur="1s" repeatCount="indefinite"></animate><animate attributeName="opacity" values="0.8;0" dur="1s" repeatCount="indefinite"></animate></circle></g><g><circle cx="243" cy="37.7625" r="3" fill="var(--color-desktop)"></circle><circle cx="243" cy="37.7625" r="3" stroke="var(--color-desktop)" fill="none" stroke-width="1" opacity="0.8"><animate attributeName="r" values="3;10" dur="1s" repeatCount="indefinite"></animate><animate attributeName="opacity" values="0.8;0" dur="1s" repeatCount="indefinite"></animate></circle></g></g></g></svg></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.