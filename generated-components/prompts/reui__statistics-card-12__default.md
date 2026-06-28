# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/reui/statistics-card-12/default
- Registry URL: https://21st.dev/r/reui/statistics-card-12
- Author: reui
- Component slug: statistics-card-12
- Demo slug: default
- Title: statistics-card-12
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/reui/statistics-card-12 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/reui__statistics-card-12__default.html
- Local screenshot file: generated-21st-prompts/screenshots/reui__statistics-card-12__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-5xl min-h-screen flex items-center justify-center p-6 lg:p-8"><div class="@container grow w-full"><div class="grow grid grid-cols-1 @3xl:grid-cols-3 gap-5 max-w-5xl"><div data-slot="card" class="flex flex-col items-stretch text-card-foreground rounded-xl bg-card border border-border shadow-xs black/5"><div data-slot="card-content" class="grow p-5 flex flex-col items-start gap-6"><div class="rounded-xl flex items-center justify-center size-12 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-life-buoy size-6" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg></div><div class="space-y-0.5"><div class="text-2xl font-bold text-foreground leading-none">320</div><div class="text-sm text-muted-foreground">Support Tickets</div></div><span data-slot="badge" class="inline-flex items-center justify-center border border-transparent font-medium focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 [&amp;_svg]:-ms-px [&amp;_svg]:shrink-0 rounded-md px-[0.45rem] h-6 min-w-6 gap-1.5 text-xs [&amp;_svg]:size-3.5 bg-secondary dark:bg-secondary/50 text-secondary-foreground">12 Open, 308 Closed</span></div></div><div data-slot="card" class="flex flex-col items-stretch text-card-foreground rounded-xl bg-card border border-border shadow-xs black/5"><div data-slot="card-content" class="grow p-5 flex flex-col items-start gap-6"><div class="rounded-xl flex items-center justify-center size-12 border border-green-200 dark:border-green-800 text-green-600 dark:text-green-400"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check size-6" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div><div class="space-y-0.5"><div class="text-2xl font-bold text-foreground leading-none">98%</div><div class="text-sm text-muted-foreground">Resolved</div></div><span data-slot="badge" class="inline-flex items-center justify-center border border-transparent font-medium focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 [&amp;_svg]:-ms-px [&amp;_svg]:shrink-0 rounded-md px-[0.45rem] h-6 min-w-6 gap-1.5 text-xs [&amp;_svg]:size-3.5 text-[var(--color-success-accent,var(--color-green-800))] bg-[var(--color-success-soft,var(--color-green-100))] dark:bg-[var(--color-success-soft,var(--color-green-950))] dark:text-[var(--color-success-soft,var(--color-green-600))]">+2.1% this month</span></div></div><div data-slot="card" class="flex flex-col items-stretch text-card-foreground rounded-xl bg-card border border-border shadow-xs black/5"><div data-slot="card-content" class="grow p-5 flex flex-col items-start gap-6"><div class="rounded-xl flex items-center justify-center size-12 border border-yellow-200 dark:border-yellow-800 text-yellow-600 dark:text-yellow-400"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smile size-6" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg></div><div class="space-y-0.5"><div class="text-2xl font-bold text-foreground leading-none">4.8</div><div class="text-sm text-muted-foreground">Satisfaction Rate</div></div><span data-slot="badge" class="inline-flex items-center justify-center border border-transparent font-medium focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 [&amp;_svg]:-ms-px [&amp;_svg]:shrink-0 rounded-md px-[0.45rem] h-6 min-w-6 gap-1.5 text-xs [&amp;_svg]:size-3.5 bg-secondary dark:bg-secondary/50 text-secondary-foreground">Avg. (out of 5)</span></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.