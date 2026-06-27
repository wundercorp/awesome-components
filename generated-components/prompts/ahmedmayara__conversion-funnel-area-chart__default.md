# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ahmedmayara/conversion-funnel-area-chart/default
- Registry URL: https://21st.dev/r/ahmedmayara/conversion-funnel-area-chart
- Author: ahmedmayara
- Component slug: conversion-funnel-area-chart
- Demo slug: default
- Title: conversion-funnel-area-chart
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ahmedmayara/conversion-funnel-area-chart with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ahmedmayara__conversion-funnel-area-chart__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ahmedmayara__conversion-funnel-area-chart__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="rounded-lg border bg-card text-card-foreground flex w-full flex-col h-[310px] gap-0 p-6 shadow-none max-w-[500px]"><div class="space-y-1.5 flex flex-row items-center justify-between p-0"><h3 class="tracking-tight text-base font-medium text-muted-foreground">Conversion Rate</h3><button class="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md h-8 px-3 text-sm">Details</button></div><div class="flex flex-col gap-4 p-0"><div class="flex items-center gap-3"><span class="text-2xl font-medium leading-none tracking-tight tabular-nums">16.9%</span><div class="inline-flex items-center border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent rounded-full bg-green-100 text-xs text-green-800 dark:bg-green-950 dark:text-green-600 hover:bg-green-200">+2.1%</div></div><div class="flex flex-col gap-2"><div class="flex items-center justify-between"><p class="text-sm font-medium tracking-[-0.006em] text-muted-foreground">Added to Cart</p><div class="flex items-center gap-4"><span class="text-sm font-medium">3,842</span><div class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="size-3.5 text-green-600"><path fill="currentColor" d="M11 20V7.825l-5.6 5.6L4 12l8-8l8 8l-1.4 1.425l-5.6-5.6V20z"></path></svg><span class="text-xs font-medium text-green-600">+1.8%</span></div></div></div><div class="flex items-center justify-between"><p class="text-sm font-medium tracking-[-0.006em] text-muted-foreground">Reached Checkout</p><div class="flex items-center gap-4"><span class="text-sm font-medium">1,256</span><div class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="size-3.5 text-destructive"><path fill="currentColor" d="M11 16.175V5q0-.425.288-.712T12 4t.713.288T13 5v11.175l4.9-4.9q.3-.3.7-.288t.7.313q.275.3.287.7t-.287.7l-6.6 6.6q-.15.15-.325.213t-.375.062t-.375-.062t-.325-.213l-6.6-6.6q-.275-.275-.275-.687T4.7 11.3q.3-.3.713-.3t.712.3z"></path></svg><span class="text-xs font-medium text-destructive">-1.2%</span></div></div></div></div><div class="relative w-full"><div class="absolute inset-0 h-[112px] overflow-hidden rounded-lg ring-1 ring-border ring-inset" style="background: linear-gradient(90deg, var(--color-border) 1px, #0000 1px 100%) 0 0 / calc(100% / 6) 112px repeat no-repeat, linear-gradient(180deg, var(--color-border) 1px, #0000 1px 100%) 0 0 / 100% calc(112px / 4) no-repeat repeat;"><div data-chart="chart-conversion-rate-chart" class="flex justify-center text-xs [&amp;_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&amp;_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&amp;_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&amp;_.recharts-dot[stroke='#fff']]:stroke-transparent [&amp;_.recharts-layer]:outline-none [&amp;_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&amp;_.recharts-radial-bar-background-sector]:fill-muted [&amp;_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&amp;_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&amp;_.recharts-sector[stroke='#fff']]:stroke-transparent [&amp;_.recharts-sector]:outline-none [&amp;_.recharts-surface]:outline-none aspect-auto h-[120px] w-full"><style>
 [data-chart=chart-conversion-rate-chart] {
  --color-addedToCart: #10b981;
  --color-reachedCheckout: #a7f3d0;
}


.dark [data-chart=chart-conversion-rate-chart] {
  --color-addedToCart: #10b981;
  --color-reachedCheckout: #a7f3d0;
}
</style><div class="recharts-responsive-container" style="width: 100%; height: 100%; min-width: 0px;"><div style="width: 0px; height: 0px; overflow: visible;"><div class="recharts-wrapper" style="position: relative; cursor: default; width: 450px; height: 120px;"><div xmlns="http://www.w3.org/1999/xhtml" tabindex="-1" class="recharts-tooltip-wrapper" style="visibility: hidden; pointer-events: none; position: absolute; top: 0px; left: 0px;"></div><svg role="application" tabindex="0" class="recharts-surface" width="450" height="120" viewBox="0 0 450 120" style="width: 100%; height: 100%;"><title></title><desc></desc><defs><clipPath id="recharts1-clip"><rect x="0" y="0" height="120" width="446"></rect></clipPath></defs><g class="recharts-layer recharts-area"><g class="recharts-layer"><path stroke-width="2" fill="#10b981" fill-opacity="0.8" height="120" stroke="none" width="446" id="recharts-area-«r1»" class="recharts-curve recharts-area-area" d="M0,100L40.545,108L81.091,98L121.636,112L162.182,96L202.727,105L243.273,78L283.818,85L324.364,62L364.909,110L405.455,85L446,118L446,120L405.455,120L364.909,120L324.364,120L283.818,120L243.273,120L202.727,120L162.182,120L121.636,120L81.091,120L40.545,120L0,120Z"></path><path stroke-width="2" fill="none" fill-opacity="0.8" height="120" stroke="#10b981" width="446" class="recharts-curve recharts-area-curve" d="M0,100L40.545,108L81.091,98L121.636,112L162.182,96L202.727,105L243.273,78L283.818,85L324.364,62L364.909,110L405.455,85L446,118"></path></g></g><g class="recharts-layer recharts-area"><g class="recharts-layer"><path stroke-width="2" stroke-opacity="0.2" fill="#a7f3d0" fill-opacity="1" height="120" stroke="none" width="446" id="recharts-area-«r2»" class="recharts-curve recharts-area-area" d="M0,90L40.545,100L81.091,83L121.636,107L162.182,76L202.727,94L243.273,48L283.818,60L324.364,17L364.909,102L405.455,60L446,117L446,118L405.455,85L364.909,110L324.364,62L283.818,85L243.273,78L202.727,105L162.182,96L121.636,112L81.091,98L40.545,108L0,100Z"></path><path stroke-width="2" stroke-opacity="0.2" fill="none" fill-opacity="1" height="120" stroke="#a7f3d0" width="446" class="recharts-curve recharts-area-curve" d="M0,90L40.545,100L81.091,83L121.636,107L162.182,76L202.727,94L243.273,48L283.818,60L324.364,17L364.909,102L405.455,60L446,117"></path></g></g></svg></div></div></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.