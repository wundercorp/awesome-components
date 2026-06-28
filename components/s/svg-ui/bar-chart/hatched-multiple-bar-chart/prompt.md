# Build Bar Chart in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Bar Chart screenshot](screenshot.png)

## Component

- Author group: `svg-ui`
- Component: `bar-chart`
- Variant: `hatched-multiple-bar-chart`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: svg-ui
- Component slug: bar-chart
- Demo slug: hatched-multiple-bar-chart
- Title: bar-chart
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="rounded-lg border bg-card text-card-foreground shadow-sm"><div class="flex flex-col space-y-1.5 p-6"><h3 class="text-2xl font-semibold leading-none tracking-tight">Bar Chart - Multiple<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-red-500 bg-red-500/10 border-none ml-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-down h-4 w-4" aria-hidden="true"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline><polyline points="16 17 22 17 22 11"></polyline></svg><span>-5.2%</span></div></h3><p class="text-sm text-muted-foreground">January - June 2025</p></div><div class="p-6 pt-0"><div data-slot="chart" data-chart="chart-«r0»" class="[&amp;_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&amp;_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&amp;_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&amp;_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&amp;_.recharts-radial-bar-background-sector]:fill-muted [&amp;_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&amp;_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&amp;_.recharts-dot[stroke='#fff']]:stroke-transparent [&amp;_.recharts-layer]:outline-hidden [&amp;_.recharts-sector]:outline-hidden [&amp;_.recharts-sector[stroke='#fff']]:stroke-transparent [&amp;_.recharts-surface]:outline-hidden"><style>
 [data-chart=chart-«r0»] {
  --color-desktop: var(--chart-1);
  --color-mobile: var(--chart-2);
}


.dark [data-chart=chart-«r0»] {
  --color-desktop: var(--chart-1);
  --color-mobile: var(--chart-2);
}
</style><div class="recharts-responsive-container" style="width: 100%; height: 100%; min-width: 0px;"><div style="width: 0px; height: 0px; overflow: visible;"><div class="recharts-wrapper" style="position: relative; cursor: default; width: 278px; height: 156px;"><div xmlns="http://www.w3.org/1999/xhtml" tabindex="-1" class="recharts-tooltip-wrapper" style="visibility: hidden; pointer-events: none; position: absolute; top: 0px; left: 0px;"></div><svg role="application" tabindex="0" class="recharts-surface" width="278" height="156" viewBox="0 0 278 156" style="width: 100%; height: 100%;"><title></title><desc></desc><defs><clipPath id="recharts1-clip"><rect x="5" y="5" height="116" width="268"></rect></clipPath></defs><rect x="0" y="0" width="100%" height="85%" fill="url(#default-multiple-pattern-dots)"></rect><defs><pattern id="default-multiple-pattern-dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse"><circle class="dark:text-muted/40 text-muted" cx="2" cy="2" r="1" fill="currentColor"></circle></pattern></defs><g class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis"><g class="recharts-cartesian-axis-ticks"><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="268" stroke="none" x="27.333333333333332" y="137" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="27.333333333333332" dy="0.71em">Jan</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="268" stroke="none" x="72" y="137" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="72" dy="0.71em">Feb</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="268" stroke="none" x="116.66666666666666" y="137" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="116.66666666666666" dy="0.71em">Mar</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="268" stroke="none" x="161.33333333333334" y="137" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="161.33333333333334" dy="0.71em">Apr</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="268" stroke="none" x="206" y="137" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="206" dy="0.71em">May</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="268" stroke="none" x="250.66666666666666" y="137" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="250.66666666666666" dy="0.71em">Jun</tspan></text></g></g></g><g class="recharts-layer recharts-bar"><g class="recharts-layer recharts-bar-rectangles"><g class="recharts-layer"><g class="recharts-layer recharts-bar-rectangle"><rect rx="4" x="9.466666666666665" y="53.574999999999996" width="15" height="67.42500000000001" stroke="none" fill="var(--color-desktop)"></rect><defs><pattern id="hatched-bar-pattern-desktop" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)"><rect width="10" height="10" opacity="0.5" fill="var(--color-desktop)"></rect><rect width="1" height="10" fill="var(--color-desktop)"></rect></pattern></defs></g><g class="recharts-layer recharts-bar-rectangle"><rect rx="4" x="54.13333333333333" y="10.4375" width="15" height="110.5625" stroke="none" fill="var(--color-desktop)"></rect><defs><pattern id="hatched-bar-pattern-desktop" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)"><rect width="10" height="10" opacity="0.5" fill="var(--color-desktop)"></rect><rect width="1" height="10" fill="var(--color-desktop)"></rect></pattern></defs></g><g class="recharts-layer recharts-bar-rectangle"><rect rx="4" x="98.8" y="35.087500000000006" width="15" height="85.9125" stroke="none" fill="var(--color-desktop)"></rect><defs><pattern id="hatched-bar-pattern-desktop" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)"><rect width="10" height="10" opacity="0.5" fill="var(--color-desktop)"></rect><rect width="1" height="10" fill="var(--color-desktop)"></rect></pattern></defs></g><g class="recharts-layer recharts-bar-rectangle"><rect rx="4" x="143.46666666666667" y="94.5375" width="15" height="26.462500000000006" stroke="none" fill="var(--color-desktop)"></rect><defs><pattern id="hatched-bar-pattern-desktop" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)"><rect width="10" height="10" opacity="0.5" fill="var(--color-desktop)"></rect><rect width="1" height="10" fill="var(--color-desktop)"></rect></pattern></defs></g><g class="recharts-layer recharts-bar-rectangle"><rect rx="4" x="188.13333333333333" y="45.237500000000004" width="15" height="75.76249999999999" stroke="none" fill="var(--color-desktop)"></rect><defs><pattern id="hatched-bar-pattern-desktop" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)"><rect width="10" height="10" opacity="0.5" fill="var(--color-desktop)"></rect><rect width="1" height="10" fill="var(--color-desktop)"></rect></pattern></defs></g><g class="recharts-layer recharts-bar-rectangle"><rect rx="4" x="232.79999999999998" y="43.425000000000004" width="15" height="77.57499999999999" stroke="none" fill="var(--color-desktop)"></rect><defs><pattern id="hatched-bar-pattern-desktop" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)"><rect width="10" height="10" opacity="0.5" fill="var(--color-desktop)"></rect><rect width="1" height="10" fill="var(--color-desktop)"></rect></pattern></defs></g></g></g></g><g class="recharts-layer recharts-bar"><g class="recharts-layer recharts-bar-rectangles"><g class="recharts-layer"><g class="recharts-layer recharts-bar-rectangle"><rect rx="4" x="28.466666666666665" y="92" width="15" height="29" stroke="none" fill="url(#hatched-bar-pattern-mobile)"></rect><defs><pattern id="hatched-bar-pattern-mobile" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)"><rect width="10" height="10" opacity="0.5" fill="var(--color-mobile)"></rect><rect width="1" height="10" fill="var(--color-mobile)"></rect></pattern></defs></g><g class="recharts-layer recharts-bar-rectangle"><rect rx="4" x="73.13333333333333" y="48.5" width="15" height="72.5" stroke="none" fill="url(#hatched-bar-pattern-mobile)"></rect><defs><pattern id="hatched-bar-pattern-mobile" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)"><rect width="10" height="10" opacity="0.5" fill="var(--color-mobile)"></rect><rect width="1" height="10" fill="var(--color-mobile)"></rect></pattern></defs></g><g class="recharts-layer recharts-bar-rectangle"><rect rx="4" x="117.8" y="77.5" width="15" height="43.5" stroke="none" fill="url(#hatched-bar-pattern-mobile)"></rect><defs><pattern id="hatched-bar-pattern-mobile" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)"><rect width="10" height="10" opacity="0.5" fill="var(--color-mobile)"></rect><rect width="1" height="10" fill="var(--color-mobile)"></rect></pattern></defs></g><g class="recharts-layer recharts-bar-rectangle"><rect rx="4" x="162.46666666666667" y="52.125" width="15" height="68.875" stroke="none" fill="url(#hatched-bar-pattern-mobile)"></rect><defs><pattern id="hatched-bar-pattern-mobile" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)"><rect width="10" height="10" opacity="0.5" fill="var(--color-mobile)"></rect><rect width="1" height="10" fill="var(--color-mobile)"></rect></pattern></defs></g><g class="recharts-layer recharts-bar-rectangle"><rect rx="4" x="207.13333333333333" y="73.875" width="15" height="47.125" stroke="none" fill="url(#hatched-bar-pattern-mobile)"></rect><defs><pattern id="hatched-bar-pattern-mobile" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)"><rect width="10" height="10" opacity="0.5" fill="var(--color-mobile)"></rect><rect width="1" height="10" fill="var(--color-mobile)"></rect></pattern></defs></g><g class="recharts-layer recharts-bar-rectangle"><rect rx="4" x="251.79999999999998" y="70.25" width="15" height="50.75" stroke="none" fill="url(#hatched-bar-pattern-mobile)"></rect><defs><pattern id="hatched-bar-pattern-mobile" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)"><rect width="10" height="10" opacity="0.5" fill="var(--color-mobile)"></rect><rect width="1" height="10" fill="var(--color-mobile)"></rect></pattern></defs></g></g></g></g></svg></div></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
