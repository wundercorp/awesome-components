# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/trophyso/streak-card/default
- Registry URL: https://21st.dev/r/trophyso/streak-card
- Author: trophyso
- Component slug: streak-card
- Demo slug: default
- Title: streak-card
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/trophyso/streak-card with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/trophyso__streak-card__default.html
- Local screenshot file: generated-21st-prompts/screenshots/trophyso__streak-card__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div style="padding: 16px;"><section aria-label="Streak summary card" class="bg-card rounded-2xl border p-6 shadow-sm"><header class="mb-3 flex items-center justify-between gap-3"><div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame text-primary h-6 w-6" aria-hidden="true"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg><h3 class="text-2xl leading-none font-semibold">Streak</h3></div><button class="inline-flex items-center justify-center gap-1 rounded-md whitespace-nowrap cursor-pointer h-7 px-3 text-muted-foreground hover:text-foreground text-sm font-medium transition-colors" aria-label="View Details">View Details</button></header><p class="mb-4 text-5xl leading-none font-semibold tracking-tight">16<span class="text-muted-foreground ml-2 text-2xl font-medium">days</span></p><div role="grid" aria-label="Streak calendar week view" class="w-full max-w-none"><div role="rowgroup" class="grid grid-cols-7 gap-2"><div class="flex flex-col items-center gap-2"><button type="button" role="gridcell" class="relative flex h-12 w-12 items-center justify-center rounded-full border-2 transition-colors hover:opacity-90 border-border/60 bg-muted/30"></button><span class="text-sm text-foreground">Mon</span></div><div class="flex flex-col items-center gap-2"><button type="button" role="gridcell" class="relative flex h-12 w-12 items-center justify-center rounded-full border-2 transition-colors hover:opacity-90 border-border/60 bg-muted/30"></button><span class="text-sm text-foreground">Tue</span></div><div class="flex flex-col items-center gap-2"><button type="button" role="gridcell" class="relative flex h-12 w-12 items-center justify-center rounded-full border-2 transition-colors hover:opacity-90 border-border/60 bg-muted/30"></button><span class="text-sm text-foreground">Wed</span></div><div class="flex flex-col items-center gap-2"><button type="button" role="gridcell" class="relative flex h-12 w-12 items-center justify-center rounded-full border-2 transition-colors hover:opacity-90 border-border/60 bg-muted/30"></button><span class="text-sm text-foreground">Thu</span></div><div class="flex flex-col items-center gap-2"><button type="button" role="gridcell" class="relative flex h-12 w-12 items-center justify-center rounded-full border-2 transition-colors hover:opacity-90 border-border/60 bg-muted/30"></button><span class="text-sm text-foreground">Fri</span></div><div class="flex flex-col items-center gap-2"><button type="button" role="gridcell" class="relative flex h-12 w-12 items-center justify-center rounded-full border-2 transition-colors hover:opacity-90 border-border/60 bg-muted/30"></button><span class="text-sm text-foreground">Sat</span></div><div class="flex flex-col items-center gap-2"><button type="button" role="gridcell" aria-current="date" class="relative flex h-12 w-12 items-center justify-center rounded-full border-2 transition-colors hover:opacity-90 !bg-primary-foreground !text-primary border-border/60 bg-muted/30"></button><span class="text-sm text-foreground">Sun</span></div></div></div><div class="mt-4 grid grid-cols-2 gap-4 border-t border-dashed pt-4" aria-label="Streak stats"><div><p class="text-muted-foreground text-sm">Longest Streak</p><p class="text-3xl leading-tight font-semibold">100<span class="ml-1 text-2xl font-medium">days</span></p></div><div class="text-right"><p class="text-muted-foreground text-sm">Total</p><p class="text-3xl leading-tight font-semibold">131</p></div></div><div class="mt-4 border-t pt-4"><button type="button" class="bg-muted flex w-full items-center justify-between rounded-xl px-4 py-3 text-left" aria-expanded="false" aria-controls="«r0»"><span class="text-lg font-semibold">How do streaks work?</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down text-muted-foreground h-5 w-5 transition-transform" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></div></section></div></div></div></div>
```

## Public registry source files

No public registry source files were available.