# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/reui/statistics-card-7/default
- Registry URL: https://21st.dev/r/reui/statistics-card-7
- Author: reui
- Component slug: statistics-card-7
- Demo slug: default
- Title: statistics-card-7
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/reui/statistics-card-7 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/reui__statistics-card-7__default.html
- Local screenshot file: generated-21st-prompts/screenshots/reui__statistics-card-7__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-5xl min-h-screen flex items-center justify-center p-6 lg:p-12"><div class="@container grow w-full"><div class="grid grid-cols-1 @3xl:grid-cols-3 bg-background overflow-hidden rounded-xl border border-border"><div data-slot="card" class="flex flex-col items-stretch text-card-foreground bg-card black/5 border-0 shadow-none rounded-none border-y @3xl:border-x @3xl:border-y-0 border-border last:border-0 first:border-0"><div data-slot="card-content" class="grow p-5 flex flex-col h-full space-y-6 justify-between"><div class="space-y-0.25"><div class="text-lg font-semibold text-foreground">Total Sales &amp; Cost</div><div class="text-sm text-muted-foreground">Last 60 days</div></div><div class="flex-1 flex flex-col gap-1.5 justify-between grow"><div class="flex items-center gap-2"><span class="text-3xl font-bold tracking-tight">$956.82k</span><span data-slot="badge" class="justify-center border border-transparent focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 [&amp;_svg]:-ms-px [&amp;_svg]:shrink-0 h-6 min-w-6 [&amp;_svg]:size-3.5 bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400 px-2 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-none"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right w-3 h-3 text-green-500" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>+5.4%</span></div><div class="text-sm"><span class="text-green-600 font-medium">+8.20k <span class="text-muted-foreground font-normal">vs prev. 60 days</span></span></div></div></div></div><div data-slot="card" class="flex flex-col items-stretch text-card-foreground bg-card black/5 border-0 shadow-none rounded-none border-y @3xl:border-x @3xl:border-y-0 border-border last:border-0 first:border-0"><div data-slot="card-content" class="grow p-5 flex flex-col h-full space-y-6 justify-between"><div class="space-y-0.25"><div class="text-lg font-semibold text-foreground">New Customers</div><div class="text-sm text-muted-foreground">This quarter</div></div><div class="flex-1 flex flex-col gap-1.5 justify-between grow"><div class="flex items-center gap-2"><span class="text-3xl font-bold tracking-tight">1,245</span><span data-slot="badge" class="justify-center border border-transparent focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 [&amp;_svg]:-ms-px [&amp;_svg]:shrink-0 h-6 min-w-6 [&amp;_svg]:size-3.5 bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400 px-2 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-none"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-plus w-3 h-3 text-blue-500" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>+3.2%</span></div><div class="text-sm"><span class="text-blue-600 font-medium">+39 <span class="text-muted-foreground font-normal">vs last quarter</span></span></div></div></div></div><div data-slot="card" class="flex flex-col items-stretch text-card-foreground bg-card black/5 border-0 shadow-none rounded-none border-y @3xl:border-x @3xl:border-y-0 border-border last:border-0 first:border-0"><div data-slot="card-content" class="grow p-5 flex flex-col h-full space-y-6 justify-between"><div class="space-y-0.25"><div class="text-lg font-semibold text-foreground">Churn Rate</div><div class="text-sm text-muted-foreground">Last 30 days</div></div><div class="flex-1 flex flex-col gap-1.5 justify-between grow"><div class="flex items-center gap-2"><span class="text-3xl font-bold tracking-tight">2.8%</span><span data-slot="badge" class="justify-center border border-transparent focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 [&amp;_svg]:-ms-px [&amp;_svg]:shrink-0 h-6 min-w-6 [&amp;_svg]:size-3.5 bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400 px-2 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-none"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-down w-3 h-3 text-red-500" aria-hidden="true"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline><polyline points="16 17 22 17 22 11"></polyline></svg>-1.1%</span></div><div class="text-sm"><span class="text-red-500 font-medium">-0.3% <span class="text-muted-foreground font-normal">vs prev. 30 days</span></span></div></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.