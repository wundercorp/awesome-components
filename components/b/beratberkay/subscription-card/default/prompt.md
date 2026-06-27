# Build Subscription Card in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Subscription Card screenshot](screenshot.png)

## Component

- Author group: `beratberkay`
- Component: `subscription-card`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: beratberkay
- Component slug: subscription-card
- Demo slug: default
- Title: subscription-card
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full h-screen flex items-center justify-center mx-auto relative"> <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full md:max-w-md"><div class="flex flex-col space-y-1.5 p-6 pb-2"><h3 class="tracking-tight text-base font-medium"> Subscriptions </h3></div><div class="p-6 pt-0 space-y-4"><div><h3 class="text-2xl font-bold"> +2350 </h3><p class="text-sm text-muted-foreground">+80.1 % from last month</p></div><div class=" h-32 w-full"><div class="recharts-responsive-container" style="width: 100%; height: 100%; min-width: 0px;"><div style="width: 0px; height: 0px; overflow: visible;"><div class="recharts-wrapper" style="position: relative; cursor: default; width: 398px; height: 128px;"><svg role="application" tabindex="0" class="recharts-surface" width="398" height="128" viewBox="0 0 398 128" style="width: 100%; height: 100%;"><title></title><desc></desc><defs><clipPath id="recharts1-clip"><rect x="5" y="5" height="88" width="388"></rect></clipPath></defs><g class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis"><g class="recharts-cartesian-axis-ticks"><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="388" stroke="none" font-size="12" x="29.25" y="101" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="29.25" dy="0.71em">Jan</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="388" stroke="none" font-size="12" x="77.75" y="101" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="77.75" dy="0.71em">Feb</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="388" stroke="none" font-size="12" x="126.25" y="101" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="126.25" dy="0.71em">Mar</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="388" stroke="none" font-size="12" x="174.75" y="101" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="174.75" dy="0.71em">Apr</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="388" stroke="none" font-size="12" x="223.25" y="101" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="223.25" dy="0.71em">May</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="388" stroke="none" font-size="12" x="271.75" y="101" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="271.75" dy="0.71em">Jun</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="388" stroke="none" font-size="12" x="320.25" y="101" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="320.25" dy="0.71em">Jul</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text height="30" orientation="bottom" width="388" stroke="none" font-size="12" x="368.75" y="101" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#666"><tspan x="368.75" dy="0.71em">Aug</tspan></text></g></g></g><g class="recharts-layer recharts-bar"><g class="recharts-layer recharts-bar-rectangles"><g class="recharts-layer"><g class="recharts-layer recharts-bar-rectangle"><path fill="hsl(var(--foreground))" radius="2,2,0,0" x="9.85" y="35.8" width="38" height="57.2" class="recharts-rectangle" d="M9.85,37.8A 2,2,0,0,1,11.85,35.8L 45.85,35.8A 2,2,0,0,1,
        47.85,37.8L 47.85,93L 9.85,93Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="hsl(var(--foreground))" radius="2,2,0,0" x="58.35" y="18.200000000000003" width="38" height="74.8" class="recharts-rectangle" d="M58.35,20.200000000000003A 2,2,0,0,1,60.35,18.200000000000003L 94.35,18.200000000000003A 2,2,0,0,1,
        96.35,20.200000000000003L 96.35,93L 58.35,93Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="hsl(var(--foreground))" radius="2,2,0,0" x="106.85" y="44.599999999999994" width="38" height="48.400000000000006" class="recharts-rectangle" d="M106.85,46.599999999999994A 2,2,0,0,1,108.85,44.599999999999994L 142.85,44.599999999999994A 2,2,0,0,1,
        144.85,46.599999999999994L 144.85,93L 106.85,93Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="hsl(var(--foreground))" radius="2,2,0,0" x="155.35" y="27" width="38" height="66" class="recharts-rectangle" d="M155.35,29A 2,2,0,0,1,157.35,27L 191.35,27A 2,2,0,0,1,
        193.35,29L 193.35,93L 155.35,93Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="hsl(var(--foreground))" radius="2,2,0,0" x="203.85" y="49" width="38" height="44" class="recharts-rectangle" d="M203.85,51A 2,2,0,0,1,205.85,49L 239.85,49A 2,2,0,0,1,
        241.85,51L 241.85,93L 203.85,93Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="hsl(var(--foreground))" radius="2,2,0,0" x="252.35" y="35.8" width="38" height="57.2" class="recharts-rectangle" d="M252.35,37.8A 2,2,0,0,1,254.35,35.8L 288.35,35.8A 2,2,0,0,1,
        290.35,37.8L 290.35,93L 252.35,93Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="hsl(var(--foreground))" radius="2,2,0,0" x="300.85" y="18.200000000000003" width="38" height="74.8" class="recharts-rectangle" d="M300.85,20.200000000000003A 2,2,0,0,1,302.85,18.200000000000003L 336.85,18.200000000000003A 2,2,0,0,1,
        338.85,20.200000000000003L 338.85,93L 300.85,93Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="hsl(var(--foreground))" radius="2,2,0,0" x="349.35" y="44.599999999999994" width="38" height="48.400000000000006" class="recharts-rectangle" d="M349.35,46.599999999999994A 2,2,0,0,1,351.35,44.599999999999994L 385.35,44.599999999999994A 2,2,0,0,1,
        387.35,46.599999999999994L 387.35,93L 349.35,93Z"></path></g></g></g></g></svg></div></div></div></div></div></div> <div class="absolute w-full h-full -z-10" style="background-image: url(&quot;data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6' cy='6' r='1' fill='%23aaa' fill-opacity='0.25' /%3E%3C/svg%3E&quot;); background-color: transparent;"> </div></div></div></div></div>
```

## Reference source files

No reference source files were available.
