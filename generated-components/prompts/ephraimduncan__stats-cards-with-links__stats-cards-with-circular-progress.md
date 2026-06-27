# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ephraimduncan/stats-cards-with-links/stats-cards-with-circular-progress
- Registry URL: https://21st.dev/r/ephraimduncan/stats-cards-with-links
- Author: ephraimduncan
- Component slug: stats-cards-with-links
- Demo slug: stats-cards-with-circular-progress
- Title: stats-cards-with-links
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ephraimduncan/stats-cards-with-links with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ephraimduncan__stats-cards-with-links__stats-cards-with-circular-progress.html
- Local screenshot file: generated-21st-prompts/screenshots/ephraimduncan__stats-cards-with-links__stats-cards-with-circular-progress.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center p-10 w-full"><div class="w-full"><h2 class="text-xl font-medium text-foreground">Plan overview</h2><p class="mt-1 text-sm leading-6 text-muted-foreground">You are currently on the <span class="font-medium text-foreground">starter plan</span>. <a href="#" class="inline-flex items-center gap-1 text-primary hover:underline hover:underline-offset-4">View other plans<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link size-4" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg></a></p><dl class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"><div class="rounded-xl border bg-card text-card-foreground shadow p-4"><div class="p-0 flex items-center space-x-4"><div class="relative flex items-center justify-center"><div data-slot="chart" data-chart="chart-«r0»" class="[&amp;_.recharts-cartesian-axis-tick_text]:fill-muted-foreground flex aspect-video justify-center text-xs h-[80px] w-[80px]"><style>
 [data-chart=chart-«r0»] {
  --color-workspaces: hsl(200, 70%, 50%);
  --color-dashboards: hsl(120, 70%, 50%);
  --color-chartWidgets: hsl(340, 70%, 50%);
  --color-storage: hsl(280, 70%, 50%);
  --color-background: hsl(210, 40%, 96%);
}


.dark [data-chart=chart-«r0»] {
  --color-workspaces: hsl(200, 70%, 70%);
  --color-dashboards: hsl(120, 70%, 70%);
  --color-chartWidgets: hsl(340, 70%, 70%);
  --color-storage: hsl(280, 70%, 70%);
  --color-background: hsl(210, 40%, 20%);
}
</style><div class="recharts-responsive-container" style="width: 100%; height: 100%; min-width: 0px;"><div style="width: 0px; height: 0px; overflow: visible;"><div class="recharts-wrapper" style="position: relative; cursor: default; width: 80px; height: 80px;"><svg cx="50%" cy="50%" role="application" tabindex="0" class="recharts-surface" width="80" height="80" viewBox="0 0 80 80" style="width: 100%; height: 100%;"><title></title><desc></desc><defs><clipPath id="recharts1-clip"><rect x="5" y="5" height="70" width="70"></rect></clipPath></defs><g class="recharts-layer recharts-polar-angle-axis angleAxis"><g class="recharts-layer recharts-polar-angle-axis-ticks"><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="40" y1="2" x2="40" y2="-6"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="17.664160412886027" y1="9.257354213751995" x2="12.96187839454624" y2="2.7852182587524155"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="3.8598523807841687" y1="28.257354213751995" x2="-3.7485997495770604" y2="25.785218258752415"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="3.8598523807841616" y1="51.742645786248" x2="-3.7485997495770675" y2="54.21478174124758"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="17.664160412886016" y1="70.742645786248" x2="12.961878394546229" y2="77.21478174124758"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="39.99999999999999" y1="78" x2="39.99999999999999" y2="86"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="62.335839587113966" y1="70.742645786248" x2="67.03812160545375" y2="77.21478174124758"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="76.14014761921584" y1="51.74264578624801" x2="83.74859974957707" y2="54.21478174124759"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="76.14014761921584" y1="28.25735421375201" x2="83.74859974957707" y2="25.78521825875243"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="62.33583958711399" y1="9.257354213752006" x2="67.03812160545377" y2="2.7852182587524297"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="40.000000000000014" y1="2" x2="40.000000000000014" y2="-6"></line></g></g></g><g class="recharts-layer recharts-area"><g class="recharts-layer recharts-radial-bar-background"><path name="Workspaces" fill="var(--color-background)" cx="40" cy="40" class="recharts-sector recharts-radial-bar-background-sector" d="M 40,2.799999999999997
    A 37.2,37.2,0,
    1,0,
    40.00064926248171,2.800000005665879
  L 40.00052359877557,10.000000004569262
            A 30,30,0,
            1,1,
            40,10 Z"></path></g><g class="recharts-layer recharts-radial-bar-sectors"><g class="recharts-layer"><path fill="var(--color-workspaces)" name="Workspaces" cx="40" cy="40" class="recharts-sector recharts-radial-bar-sector undefined" d="M 40,6.593413823019866
    A3.6000000000000014,3.6000000000000014,0,0,0,36.01428571428572,3.01413673262914
    A37.2,37.2,0,0,0,6.056007177774106,24.780100155235026
    A3.6000000000000014,3.6000000000000014,0,0,0,8.22844852920744,29.67679714726193
  L8.22844852920744,29.67679714726193
      A3.6000000000000014,3.6000000000000014,0,0,0,12.625812240140409,27.72588722196373
      A30,30,0,0,1,36.78571428571429,10.172690913410598
      A3.6000000000000014,3.6000000000000014,0,0,0,40,6.593413823019866Z"></path></g></g></g></svg></div></div></div></div><div class="absolute inset-0 flex items-center justify-center"><span class="text-base font-medium text-foreground">20%</span></div></div><div><dt class="text-sm font-medium text-foreground">Workspaces</dt><dd class="text-sm text-muted-foreground">1 of 5 used</dd></div></div></div><div class="rounded-xl border bg-card text-card-foreground shadow p-4"><div class="p-0 flex items-center space-x-4"><div class="relative flex items-center justify-center"><div data-slot="chart" data-chart="chart-«r1»" class="[&amp;_.recharts-cartesian-axis-tick_text]:fill-muted-foreground flex aspect-video justify-center text-xs h-[80px] w-[80px]"><style>
 [data-chart=chart-«r1»] {
  --color-workspaces: hsl(200, 70%, 50%);
  --color-dashboards: hsl(120, 70%, 50%);
  --color-chartWidgets: hsl(340, 70%, 50%);
  --color-storage: hsl(280, 70%, 50%);
  --color-background: hsl(210, 40%, 96%);
}


.dark [data-chart=chart-«r1»] {
  --color-workspaces: hsl(200, 70%, 70%);
  --color-dashboards: hsl(120, 70%, 70%);
  --color-chartWidgets: hsl(340, 70%, 70%);
  --color-storage: hsl(280, 70%, 70%);
  --color-background: hsl(210, 40%, 20%);
}
</style><div class="recharts-responsive-container" style="width: 100%; height: 100%; min-width: 0px;"><div style="width: 0px; height: 0px; overflow: visible;"><div class="recharts-wrapper" style="position: relative; cursor: default; width: 80px; height: 80px;"><svg cx="50%" cy="50%" role="application" tabindex="0" class="recharts-surface" width="80" height="80" viewBox="0 0 80 80" style="width: 100%; height: 100%;"><title></title><desc></desc><defs><clipPath id="recharts2-clip"><rect x="5" y="5" height="70" width="70"></rect></clipPath></defs><g class="recharts-layer recharts-polar-angle-axis angleAxis"><g class="recharts-layer recharts-polar-angle-axis-ticks"><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="40" y1="2" x2="40" y2="-6"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="17.664160412886027" y1="9.257354213751995" x2="12.96187839454624" y2="2.7852182587524155"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="3.8598523807841687" y1="28.257354213751995" x2="-3.7485997495770604" y2="25.785218258752415"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="3.8598523807841616" y1="51.742645786248" x2="-3.7485997495770675" y2="54.21478174124758"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="17.664160412886016" y1="70.742645786248" x2="12.961878394546229" y2="77.21478174124758"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="39.99999999999999" y1="78" x2="39.99999999999999" y2="86"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="62.335839587113966" y1="70.742645786248" x2="67.03812160545375" y2="77.21478174124758"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="76.14014761921584" y1="51.74264578624801" x2="83.74859974957707" y2="54.21478174124759"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="76.14014761921584" y1="28.25735421375201" x2="83.74859974957707" y2="25.78521825875243"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="62.33583958711399" y1="9.257354213752006" x2="67.03812160545377" y2="2.7852182587524297"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="40.000000000000014" y1="2" x2="40.000000000000014" y2="-6"></line></g></g></g><g class="recharts-layer recharts-area"><g class="recharts-layer recharts-radial-bar-background"><path name="Dashboards" fill="var(--color-background)" cx="40" cy="40" class="recharts-sector recharts-radial-bar-background-sector" d="M 40,2.799999999999997
    A 37.2,37.2,0,
    1,0,
    40.00064926248171,2.800000005665879
  L 40.00052359877557,10.000000004569262
            A 30,30,0,
            1,1,
            40,10 Z"></path></g><g class="recharts-layer recharts-radial-bar-sectors"><g class="recharts-layer"><path fill="var(--color-dashboards)" name="Dashboards" cx="40" cy="40" class="recharts-sector recharts-radial-bar-sector undefined" d="M 40,6.593413823019866
    A3.6000000000000014,3.6000000000000014,0,0,0,36.01428571428572,3.01413673262914
    A37.2,37.2,0,0,0,21.484765619999365,7.735063988074565
    A3.6000000000000014,3.6000000000000014,0,0,0,20.36410131573349,12.973504058771866
  L20.36410131573349,12.973504058771866
      A3.6000000000000014,3.6000000000000014,0,0,0,25.06835937096723,13.979890312963363
      A30,30,0,0,1,36.78571428571429,10.172690913410598
      A3.6000000000000014,3.6000000000000014,0,0,0,40,6.593413823019866Z"></path></g></g></g></svg></div></div></div></div><div class="absolute inset-0 flex items-center justify-center"><span class="text-base font-medium text-foreground">10%</span></div></div><div><dt class="text-sm font-medium text-foreground">Dashboards</dt><dd class="text-sm text-muted-foreground">2 of 20 used</dd></div></div></div><div class="rounded-xl border bg-card text-card-foreground shadow p-4"><div class="p-0 flex items-center space-x-4"><div class="relative flex items-center justify-center"><div data-slot="chart" data-chart="chart-«r2»" class="[&amp;_.recharts-cartesian-axis-tick_text]:fill-muted-foreground flex aspect-video justify-center text-xs h-[80px] w-[80px]"><style>
 [data-chart=chart-«r2»] {
  --color-workspaces: hsl(200, 70%, 50%);
  --color-dashboards: hsl(120, 70%, 50%);
  --color-chartWidgets: hsl(340, 70%, 50%);
  --color-storage: hsl(280, 70%, 50%);
  --color-background: hsl(210, 40%, 96%);
}


.dark [data-chart=chart-«r2»] {
  --color-workspaces: hsl(200, 70%, 70%);
  --color-dashboards: hsl(120, 70%, 70%);
  --color-chartWidgets: hsl(340, 70%, 70%);
  --color-storage: hsl(280, 70%, 70%);
  --color-background: hsl(210, 40%, 20%);
}
</style><div class="recharts-responsive-container" style="width: 100%; height: 100%; min-width: 0px;"><div style="width: 0px; height: 0px; overflow: visible;"><div class="recharts-wrapper" style="position: relative; cursor: default; width: 80px; height: 80px;"><svg cx="50%" cy="50%" role="application" tabindex="0" class="recharts-surface" width="80" height="80" viewBox="0 0 80 80" style="width: 100%; height: 100%;"><title></title><desc></desc><defs><clipPath id="recharts3-clip"><rect x="5" y="5" height="70" width="70"></rect></clipPath></defs><g class="recharts-layer recharts-polar-angle-axis angleAxis"><g class="recharts-layer recharts-polar-angle-axis-ticks"><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="40" y1="2" x2="40" y2="-6"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="17.664160412886027" y1="9.257354213751995" x2="12.96187839454624" y2="2.7852182587524155"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="3.8598523807841687" y1="28.257354213751995" x2="-3.7485997495770604" y2="25.785218258752415"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="3.8598523807841616" y1="51.742645786248" x2="-3.7485997495770675" y2="54.21478174124758"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="17.664160412886016" y1="70.742645786248" x2="12.961878394546229" y2="77.21478174124758"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="39.99999999999999" y1="78" x2="39.99999999999999" y2="86"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="62.335839587113966" y1="70.742645786248" x2="67.03812160545375" y2="77.21478174124758"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="76.14014761921584" y1="51.74264578624801" x2="83.74859974957707" y2="54.21478174124759"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="76.14014761921584" y1="28.25735421375201" x2="83.74859974957707" y2="25.78521825875243"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="62.33583958711399" y1="9.257354213752006" x2="67.03812160545377" y2="2.7852182587524297"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="40.000000000000014" y1="2" x2="40.000000000000014" y2="-6"></line></g></g></g><g class="recharts-layer recharts-area"><g class="recharts-layer recharts-radial-bar-background"><path name="Chart widgets" fill="var(--color-background)" cx="40" cy="40" class="recharts-sector recharts-radial-bar-background-sector" d="M 40,2.799999999999997
    A 37.2,37.2,0,
    1,0,
    40.00064926248171,2.800000005665879
  L 40.00052359877557,10.000000004569262
            A 30,30,0,
            1,1,
            40,10 Z"></path></g><g class="recharts-layer recharts-radial-bar-sectors"><g class="recharts-layer"><path fill="var(--color-chartWidgets)" name="Chart widgets" cx="40" cy="40" class="recharts-sector recharts-radial-bar-sector undefined" d="M 40,6.593413823019866
    A3.6000000000000014,3.6000000000000014,0,0,0,36.01428571428572,3.01413673262914
    A37.2,37.2,0,0,0,3.592700279756663,47.63862075772646
    A3.6000000000000014,3.6000000000000014,0,0,0,8.228448529207437,50.32320285273806
  L8.228448529207437,50.32320285273806
      A3.6000000000000014,3.6000000000000014,0,0,0,10.6392744191586,46.16017803042456
      A30,30,0,0,1,36.78571428571429,10.172690913410598
      A3.6000000000000014,3.6000000000000014,0,0,0,40,6.593413823019866Z"></path></g></g></g></svg></div></div></div></div><div class="absolute inset-0 flex items-center justify-center"><span class="text-base font-medium text-foreground">30%</span></div></div><div><dt class="text-sm font-medium text-foreground">Chart widgets</dt><dd class="text-sm text-muted-foreground">15 of 50 used</dd></div></div></div><div class="rounded-xl border bg-card text-card-foreground shadow p-4"><div class="p-0 flex items-center space-x-4"><div class="relative flex items-center justify-center"><div data-slot="chart" data-chart="chart-«r3»" class="[&amp;_.recharts-cartesian-axis-tick_text]:fill-muted-foreground flex aspect-video justify-center text-xs h-[80px] w-[80px]"><style>
 [data-chart=chart-«r3»] {
  --color-workspaces: hsl(200, 70%, 50%);
  --color-dashboards: hsl(120, 70%, 50%);
  --color-chartWidgets: hsl(340, 70%, 50%);
  --color-storage: hsl(280, 70%, 50%);
  --color-background: hsl(210, 40%, 96%);
}


.dark [data-chart=chart-«r3»] {
  --color-workspaces: hsl(200, 70%, 70%);
  --color-dashboards: hsl(120, 70%, 70%);
  --color-chartWidgets: hsl(340, 70%, 70%);
  --color-storage: hsl(280, 70%, 70%);
  --color-background: hsl(210, 40%, 20%);
}
</style><div class="recharts-responsive-container" style="width: 100%; height: 100%; min-width: 0px;"><div style="width: 0px; height: 0px; overflow: visible;"><div class="recharts-wrapper" style="position: relative; cursor: default; width: 80px; height: 80px;"><svg cx="50%" cy="50%" role="application" tabindex="0" class="recharts-surface" width="80" height="80" viewBox="0 0 80 80" style="width: 100%; height: 100%;"><title></title><desc></desc><defs><clipPath id="recharts4-clip"><rect x="5" y="5" height="70" width="70"></rect></clipPath></defs><g class="recharts-layer recharts-polar-angle-axis angleAxis"><g class="recharts-layer recharts-polar-angle-axis-ticks"><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="40" y1="2" x2="40" y2="-6"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="17.664160412886027" y1="9.257354213751995" x2="12.96187839454624" y2="2.7852182587524155"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="3.8598523807841687" y1="28.257354213751995" x2="-3.7485997495770604" y2="25.785218258752415"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="3.8598523807841616" y1="51.742645786248" x2="-3.7485997495770675" y2="54.21478174124758"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="17.664160412886016" y1="70.742645786248" x2="12.961878394546229" y2="77.21478174124758"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="39.99999999999999" y1="78" x2="39.99999999999999" y2="86"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="62.335839587113966" y1="70.742645786248" x2="67.03812160545375" y2="77.21478174124758"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="76.14014761921584" y1="51.74264578624801" x2="83.74859974957707" y2="54.21478174124759"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="76.14014761921584" y1="28.25735421375201" x2="83.74859974957707" y2="25.78521825875243"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="62.33583958711399" y1="9.257354213752006" x2="67.03812160545377" y2="2.7852182587524297"></line></g><g class="recharts-layer recharts-polar-angle-axis-tick"><line class="recharts-polar-angle-axis-tick-line" cx="40" cy="40" orientation="outer" radius="38" fill="none" x1="40.000000000000014" y1="2" x2="40.000000000000014" y2="-6"></line></g></g></g><g class="recharts-layer recharts-area"><g class="recharts-layer recharts-radial-bar-background"><path name="Storage" fill="var(--color-background)" cx="40" cy="40" class="recharts-sector recharts-radial-bar-background-sector" d="M 40,2.799999999999997
    A 37.2,37.2,0,
    1,0,
    40.00064926248171,2.800000005665879
  L 40.00052359877557,10.000000004569262
            A 30,30,0,
            1,1,
            40,10 Z"></path></g><g class="recharts-layer recharts-radial-bar-sectors"><g class="recharts-layer"><path fill="var(--color-storage)" name="Storage" cx="40" cy="40" class="recharts-sector recharts-radial-bar-sector undefined" d="M 40,6.593413823019866
    A3.6000000000000014,3.6000000000000014,0,0,0,36.01428571428572,3.01413673262914
    A37.2,37.2,0,0,0,36.01428571428569,76.98586326737086
    A3.6000000000000014,3.6000000000000014,0,0,0,39.99999999999999,73.40658617698014
  L39.99999999999999,73.40658617698014
      A3.6000000000000014,3.6000000000000014,0,0,0,36.78571428571427,69.8273090865894
      A30,30,0,0,1,36.78571428571429,10.172690913410598
      A3.6000000000000014,3.6000000000000014,0,0,0,40,6.593413823019866Z"></path></g></g></g></svg></div></div></div></div><div class="absolute inset-0 flex items-center justify-center"><span class="text-base font-medium text-foreground">50%</span></div></div><div><dt class="text-sm font-medium text-foreground">Storage</dt><dd class="text-sm text-muted-foreground">25 of 100 used</dd></div></div></div></dl></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.