# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ravikatiyar/donut-chart/default
- Registry URL: https://21st.dev/r/ravikatiyar/donut-chart
- Author: ravikatiyar
- Component slug: donut-chart
- Demo slug: default
- Title: donut-chart
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ravikatiyar/donut-chart with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ravikatiyar__donut-chart__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ravikatiyar__donut-chart__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="border p-6 md:p-8 w-full max-w-md mx-auto flex flex-col items-center justify-center space-y-6 bg-background text-foreground shadow-lg rounded-xl"><h2 class="text-xl font-semibold text-center tracking-tight text-foreground">Objection Breakdown</h2><div class="relative flex items-center justify-center"><div class="relative flex items-center justify-center" style="width: 250px; height: 250px;"><svg width="250" height="250" viewBox="0 0 250 250" class="overflow-visible -rotate-90"><circle cx="125" cy="125" r="110" fill="transparent" stroke="hsl(var(--border) / 0.5)" stroke-width="30"></circle><circle cx="125" cy="125" r="110" fill="transparent" stroke="hsl(214.7 95% 40%)" stroke-width="30" stroke-dasharray="432.55670277998246 691.1503837897545" stroke-dashoffset="0" stroke-linecap="round" class="origin-center transition-transform duration-200 cursor-pointer" opacity="1" style="filter: none; transform: scale(1); transition: filter 0.2s ease-out, transform 0.2s ease-out;"></circle><circle cx="125" cy="125" r="110" fill="transparent" stroke="hsl(142.1 76.2% 36.3%)" stroke-width="30" stroke-dasharray="117.54258227716913 691.1503837897545" stroke-dashoffset="-432.55670277998246" stroke-linecap="round" class="origin-center transition-transform duration-200 cursor-pointer" opacity="1" style="filter: none; transform: scale(1); transition: filter 0.2s ease-out, transform 0.2s ease-out;"></circle><circle cx="125" cy="125" r="110" fill="transparent" stroke="hsl(47.9 95.8% 53.1%)" stroke-width="30" stroke-dasharray="70.52554936630149 691.1503837897545" stroke-dashoffset="-550.0992850571516" stroke-linecap="round" class="origin-center transition-transform duration-200 cursor-pointer" opacity="1" style="filter: none; transform: scale(1); transition: filter 0.2s ease-out, transform 0.2s ease-out;"></circle><circle cx="125" cy="125" r="110" fill="transparent" stroke="hsl(0 0% 63.9%)" stroke-width="30" stroke-dasharray="47.01703291086766 691.1503837897545" stroke-dashoffset="-620.6248344234531" stroke-linecap="round" class="origin-center transition-transform duration-200 cursor-pointer" opacity="1" style="filter: none; transform: scale(1); transition: filter 0.2s ease-out, transform 0.2s ease-out;"></circle><circle cx="125" cy="125" r="110" fill="transparent" stroke="hsl(262.1 83.3% 57.8%)" stroke-width="30" stroke-dasharray="23.50851645543383 691.1503837897545" stroke-dashoffset="-667.6418673343208" stroke-linecap="round" class="origin-center transition-transform duration-200 cursor-pointer" opacity="1" style="filter: none; transform: scale(1); transition: filter 0.2s ease-out, transform 0.2s ease-out;"></circle></svg><div class="absolute flex flex-col items-center justify-center pointer-events-none" style="width: 175px; height: 175px;"><div class="flex flex-col items-center justify-center text-center" style="opacity: 1; transform: none;"><p class="text-muted-foreground text-sm font-medium truncate max-w-[150px]">Total Objections</p><p class="text-4xl font-bold text-foreground">294</p></div></div></div></div><div class="flex flex-col space-y-2 w-full pt-4 border-t border-border"><div class="flex items-center justify-between p-2 rounded-md transition-all duration-200 cursor-pointer" style="opacity: 1; transform: none;"><div class="flex items-center space-x-3"><span class="h-3 w-3 rounded-full" style="background-color: rgb(5, 87, 199);"></span><span class="text-sm font-medium text-foreground">Financial Objections</span></div><span class="text-sm font-semibold text-muted-foreground">184</span></div><div class="flex items-center justify-between p-2 rounded-md transition-all duration-200 cursor-pointer" style="opacity: 1; transform: none;"><div class="flex items-center space-x-3"><span class="h-3 w-3 rounded-full" style="background-color: rgb(22, 163, 74);"></span><span class="text-sm font-medium text-foreground">Product Features</span></div><span class="text-sm font-semibold text-muted-foreground">50</span></div><div class="flex items-center justify-between p-2 rounded-md transition-all duration-200 cursor-pointer" style="opacity: 1; transform: none;"><div class="flex items-center space-x-3"><span class="h-3 w-3 rounded-full" style="background-color: rgb(250, 204, 21);"></span><span class="text-sm font-medium text-foreground">Timing Issues</span></div><span class="text-sm font-semibold text-muted-foreground">30</span></div><div class="flex items-center justify-between p-2 rounded-md transition-all duration-200 cursor-pointer" style="opacity: 1; transform: none;"><div class="flex items-center space-x-3"><span class="h-3 w-3 rounded-full" style="background-color: rgb(163, 163, 163);"></span><span class="text-sm font-medium text-foreground">Competitor Offers</span></div><span class="text-sm font-semibold text-muted-foreground">20</span></div><div class="flex items-center justify-between p-2 rounded-md transition-all duration-200 cursor-pointer" style="opacity: 1; transform: none;"><div class="flex items-center space-x-3"><span class="h-3 w-3 rounded-full" style="background-color: rgb(124, 58, 237);"></span><span class="text-sm font-medium text-foreground">Other Reasons</span></div><span class="text-sm font-semibold text-muted-foreground">10</span></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.