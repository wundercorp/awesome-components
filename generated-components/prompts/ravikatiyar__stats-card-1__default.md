# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ravikatiyar/stats-card-1/default
- Registry URL: https://21st.dev/r/ravikatiyar/stats-card-1
- Author: ravikatiyar
- Component slug: stats-card-1
- Demo slug: default
- Title: stats-card-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ravikatiyar/stats-card-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ravikatiyar__stats-card-1__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ravikatiyar__stats-card-1__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-background min-h-screen w-full p-4 sm:p-8"><div class="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4"><div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full"><div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"><h3 class="tracking-tight text-sm font-medium text-muted-foreground">Total Revenue</h3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-indian-rupee h-4 w-4 text-muted-foreground" aria-hidden="true"><path d="M6 3h12"></path><path d="M6 8h12"></path><path d="m6 13 8.5 8"></path><path d="M6 13h3"></path><path d="M9 13c6.667 0 6.667-10 0-10"></path></svg></div><div class="p-6 pt-0"><div class="text-2xl font-bold text-foreground">₹4,52,318</div><p class="text-xs mt-1 text-emerald-600 dark:text-emerald-500">+20.1% from last month</p></div></div><div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full"><div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"><h3 class="tracking-tight text-sm font-medium text-muted-foreground">Subscriptions</h3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-4 w-4 text-muted-foreground" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div><div class="p-6 pt-0"><div class="text-2xl font-bold text-foreground">+2350</div><p class="text-xs mt-1 text-emerald-600 dark:text-emerald-500">+180.1% from last month</p></div></div><div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full"><div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"><h3 class="tracking-tight text-sm font-medium text-muted-foreground">Sales</h3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card h-4 w-4 text-muted-foreground" aria-hidden="true"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg></div><div class="p-6 pt-0"><div class="text-2xl font-bold text-foreground">+12,234</div><p class="text-xs mt-1 text-emerald-600 dark:text-emerald-500">+19% from last month</p></div></div><div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full"><div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"><h3 class="tracking-tight text-sm font-medium text-muted-foreground">Active Now</h3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity h-4 w-4 text-muted-foreground" aria-hidden="true"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg></div><div class="p-6 pt-0"><div class="text-2xl font-bold text-foreground">+573</div><p class="text-xs mt-1 text-destructive">-2.1% from last month</p></div></div><div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full"><div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"><h3 class="tracking-tight text-sm font-medium text-muted-foreground">Total Revenue</h3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-indian-rupee h-4 w-4 text-muted-foreground" aria-hidden="true"><path d="M6 3h12"></path><path d="M6 8h12"></path><path d="m6 13 8.5 8"></path><path d="M6 13h3"></path><path d="M9 13c6.667 0 6.667-10 0-10"></path></svg></div><div class="p-6 pt-0"><div class="text-2xl font-bold text-foreground">₹4,52,318</div><p class="text-xs mt-1 text-emerald-600 dark:text-emerald-500">+20.1% from last month</p></div></div><div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full"><div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"><h3 class="tracking-tight text-sm font-medium text-muted-foreground">Subscriptions</h3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-4 w-4 text-muted-foreground" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div><div class="p-6 pt-0"><div class="text-2xl font-bold text-foreground">+2350</div><p class="text-xs mt-1 text-emerald-600 dark:text-emerald-500">+180.1% from last month</p></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.