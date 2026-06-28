# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/uniquesonu/data-card-display/default
- Registry URL: https://21st.dev/r/uniquesonu/data-card-display
- Author: uniquesonu
- Component slug: data-card-display
- Demo slug: default
- Title: data-card-display
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/uniquesonu/data-card-display with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/uniquesonu__data-card-display__default.html
- Local screenshot file: generated-21st-prompts/screenshots/uniquesonu__data-card-display__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="p-4 bg-background"><h2 class="text-xl font-semibold mb-4 text-foreground">Dashboard Overview</h2><div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 md:p-6 max-w-7xl mx-auto" role="list"><div class="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col h-full transition-shadow duration-200 hover:shadow-lg focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2" role="listitem"><div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"><h3 class="text-sm font-medium tracking-tight text-foreground">Active Users</h3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-4 w-4 text-muted-foreground" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div><div class="p-6 pt-0 flex-grow"><div class="text-2xl font-bold mb-1 text-foreground">1,234</div><p class="text-xs text-muted-foreground min-h-[1.5rem]">+20.1% from last month</p></div><div class="flex items-center p-6 pt-0"><button class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background h-9 rounded-md px-3 w-full text-sm font-semibold transition-colors duration-150 hover:bg-accent hover:text-accent-foreground" aria-label="Action for Active Users: View Report">View Report</button></div></div><div class="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col h-full transition-shadow duration-200 hover:shadow-lg focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2" role="listitem"><div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"><h3 class="text-sm font-medium tracking-tight text-foreground">Total Revenue</h3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign h-4 w-4 text-muted-foreground" aria-hidden="true"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div><div class="p-6 pt-0 flex-grow"><div class="text-2xl font-bold mb-1 text-foreground">$45,231.89</div><p class="text-xs text-muted-foreground min-h-[1.5rem]">Revenue year-to-date</p></div><div class="flex items-center p-6 pt-0"><button class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background h-9 rounded-md px-3 w-full text-sm font-semibold transition-colors duration-150 hover:bg-accent hover:text-accent-foreground" aria-label="Action for Total Revenue: Export Data">Export Data</button></div></div><div class="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col h-full transition-shadow duration-200 hover:shadow-lg focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2" role="listitem"><div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"><h3 class="text-sm font-medium tracking-tight text-foreground">Avg. Session Time</h3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock h-4 w-4 text-muted-foreground" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div><div class="p-6 pt-0 flex-grow"><div class="text-2xl font-bold mb-1 text-foreground">12m 34s</div><p class="text-xs text-muted-foreground min-h-[1.5rem]">The average user session duration.</p></div><div class="flex items-center p-6 pt-0"><button class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background h-9 rounded-md px-3 w-full text-sm font-semibold transition-colors duration-150 hover:bg-accent hover:text-accent-foreground" aria-label="Action for Avg. Session Time: Analyze">Analyze</button></div></div><div class="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col h-full transition-shadow duration-200 hover:shadow-lg focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2" role="listitem"><div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"><h3 class="text-sm font-medium tracking-tight text-foreground">Tasks Completed</h3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-4 w-4 text-muted-foreground" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg></div><div class="p-6 pt-0 flex-grow"><div class="text-2xl font-bold mb-1 text-foreground">95%</div><p class="text-xs text-muted-foreground min-h-[1.5rem]">Monthly task completion rate.</p></div><div class="flex items-center p-6 pt-0"><button class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background h-9 rounded-md px-3 w-full text-sm font-semibold transition-colors duration-150 hover:bg-accent hover:text-accent-foreground" aria-label="Action for Tasks Completed: Details">Details</button></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.