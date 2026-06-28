# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/uniquesonu/dashboard-overview/default
- Registry URL: https://21st.dev/r/uniquesonu/dashboard-overview
- Author: uniquesonu
- Component slug: dashboard-overview
- Demo slug: default
- Title: dashboard-overview
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/uniquesonu/dashboard-overview with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/uniquesonu__dashboard-overview__default.html
- Local screenshot file: generated-21st-prompts/screenshots/uniquesonu__dashboard-overview__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="p-8 bg-background border rounded-lg max-w-7xl mx-auto shadow-md"><h3 class="text-xl font-semibold text-foreground mb-6">Dashboard Overview</h3><div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"><div class="cursor-pointer rounded-lg"><div class="rounded-lg border bg-card text-card-foreground shadow-sm h-full transition-colors duration-200"><div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"><h3 class="tracking-tight text-sm font-medium text-muted-foreground">Total Users</h3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-4 w-4 text-muted-foreground" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div><div class="p-6 pt-0"><div class="text-2xl font-bold text-foreground mb-2">2,350</div><p class="flex items-center text-xs font-medium text-green-600 dark:text-green-400"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up h-3 w-3 mr-1" aria-hidden="true"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>+180 increase</p></div></div></div><div class="cursor-pointer rounded-lg"><div class="rounded-lg border bg-card text-card-foreground shadow-sm h-full transition-colors duration-200"><div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"><h3 class="tracking-tight text-sm font-medium text-muted-foreground">Revenue</h3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign h-4 w-4 text-muted-foreground" aria-hidden="true"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div><div class="p-6 pt-0"><div class="text-2xl font-bold text-foreground mb-2">$12,450</div><p class="flex items-center text-xs font-medium text-red-600 dark:text-red-400"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down h-3 w-3 mr-1" aria-hidden="true"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>-2.5% decrease</p></div></div></div><div class="cursor-pointer rounded-lg"><div class="rounded-lg border bg-card text-card-foreground shadow-sm h-full transition-colors duration-200"><div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"><h3 class="tracking-tight text-sm font-medium text-muted-foreground">Avg. Session</h3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock h-4 w-4 text-muted-foreground" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div><div class="p-6 pt-0"><div class="text-2xl font-bold text-foreground mb-2">4m 32s</div><p class="flex items-center text-xs font-medium text-muted-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus h-3 w-3 mr-1" aria-hidden="true"><path d="M5 12h14"></path></svg>+0.5s change</p></div></div></div><div class="cursor-pointer rounded-lg lg:col-span-1"><div class="rounded-lg border bg-card text-card-foreground shadow-sm h-full transition-colors duration-200"><div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"><h3 class="tracking-tight text-sm font-medium text-muted-foreground">Open Tickets</h3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert h-4 w-4 text-muted-foreground" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg></div><div class="p-6 pt-0"><div class="text-2xl font-bold text-foreground mb-2">12</div><p class="flex items-center text-xs font-medium text-green-600 dark:text-green-400"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up h-3 w-3 mr-1" aria-hidden="true"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>+3 increase</p></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.