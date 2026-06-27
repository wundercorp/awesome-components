# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/OrcDev/8bit-advanced2/default
- Registry URL: https://21st.dev/r/OrcDev/8bit-advanced2
- Author: OrcDev
- Component slug: 8bit-advanced2
- Demo slug: default
- Title: 8bit-advanced2
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/OrcDev/8bit-advanced2 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/OrcDev__8bit-advanced2__default.html
- Local screenshot file: generated-21st-prompts/screenshots/OrcDev__8bit-advanced2__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="dark flex w-full min-h-screen items-center justify-center bg-background p-8 retro"><section class="w-full px-4 py-16"><div class="mx-auto max-w-4xl"><div class="mb-10 text-center"><h2 class="retro mb-3 font-bold text-2xl tracking-tight md:text-3xl">Stats Dashboard</h2><p class="retro text-muted-foreground text-[9px]">Real-time metrics from the battlefield</p></div><div class="grid gap-x-4 gap-y-1 sm:grid-cols-2"><div class="relative bg-card text-card-foreground border-y-6 border-foreground dark:border-ring p-0!"><div data-slot="card" class="gap-6 py-6 rounded-none border-0 w-full! h-full flex flex-col bg-card text-card-foreground shadow-none retro"><div data-slot="card-header" class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-2"><div class="flex items-center justify-between"><div data-slot="card-title" class="font-semibold text-xs text-muted-foreground">Active Players</div><span class="retro font-bold text-sm">HP</span></div></div><div data-slot="card-content" class="px-6 flex-1 retro"><div class="retro mb-1 font-bold text-2xl">12,847</div><p class="retro mb-2 text-muted-foreground text-[10px]">+23% this week</p><div class="relative w-full h-2"><div aria-valuemax="100" aria-valuemin="0" aria-valuenow="78" aria-valuetext="78%" role="progressbar" data-state="loading" data-value="78" data-max="100" data-slot="progress" class="bg-primary/20 relative w-full overflow-hidden h-2 retro"><div data-state="loading" data-value="78" data-max="100" data-slot="progress-indicator" class="h-full transition-all w-full flex-1 bg-primary" style="transform: translateX(-22%);"></div></div><div class="absolute inset-0 border-y-4 -my-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div><div class="absolute inset-0 border-x-4 -mx-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div></div></div></div><div class="absolute inset-0 border-x-6 -mx-1.5 border-inherit pointer-events-none" aria-hidden="true"></div></div><div class="relative bg-card text-card-foreground border-y-6 border-foreground dark:border-ring p-0!"><div data-slot="card" class="gap-6 py-6 rounded-none border-0 w-full! h-full flex flex-col bg-card text-card-foreground shadow-none retro"><div data-slot="card-header" class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-2"><div class="flex items-center justify-between"><div data-slot="card-title" class="font-semibold text-xs text-muted-foreground">Total XP Earned</div><span class="retro font-bold text-sm">XP</span></div></div><div data-slot="card-content" class="px-6 flex-1 retro"><div class="retro mb-1 font-bold text-2xl">4.2M</div><p class="retro mb-2 text-muted-foreground text-[10px]">+180K today</p></div></div><div class="absolute inset-0 border-x-6 -mx-1.5 border-inherit pointer-events-none" aria-hidden="true"></div></div><div class="relative bg-card text-card-foreground border-y-6 border-foreground dark:border-ring p-0!"><div data-slot="card" class="gap-6 py-6 rounded-none border-0 w-full! h-full flex flex-col bg-card text-card-foreground shadow-none retro"><div data-slot="card-header" class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-2"><div class="flex items-center justify-between"><div data-slot="card-title" class="font-semibold text-xs text-muted-foreground">Gold Collected</div><span class="retro font-bold text-sm">GP</span></div></div><div data-slot="card-content" class="px-6 flex-1 retro"><div class="retro mb-1 font-bold text-2xl">891K</div><p class="retro mb-2 text-muted-foreground text-[10px]">+12% this month</p><div class="relative w-full h-2"><div aria-valuemax="100" aria-valuemin="0" aria-valuenow="45" aria-valuetext="45%" role="progressbar" data-state="loading" data-value="45" data-max="100" data-slot="progress" class="bg-primary/20 relative w-full overflow-hidden h-2 retro"><div data-state="loading" data-value="45" data-max="100" data-slot="progress-indicator" class="h-full transition-all w-full flex-1 bg-primary" style="transform: translateX(-55%);"></div></div><div class="absolute inset-0 border-y-4 -my-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div><div class="absolute inset-0 border-x-4 -mx-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div></div></div></div><div class="absolute inset-0 border-x-6 -mx-1.5 border-inherit pointer-events-none" aria-hidden="true"></div></div><div class="relative bg-card text-card-foreground border-y-6 border-foreground dark:border-ring p-0!"><div data-slot="card" class="gap-6 py-6 rounded-none border-0 w-full! h-full flex flex-col bg-card text-card-foreground shadow-none retro"><div data-slot="card-header" class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-2"><div class="flex items-center justify-between"><div data-slot="card-title" class="font-semibold text-xs text-muted-foreground">Avg Player Level</div><span class="retro font-bold text-sm">LV</span></div></div><div data-slot="card-content" class="px-6 flex-1 retro"><div class="retro mb-1 font-bold text-2xl">34</div><p class="retro mb-2 text-muted-foreground text-[10px]">+2 this week</p><div class="relative w-full h-2"><div aria-valuemax="100" aria-valuemin="0" aria-valuenow="68" aria-valuetext="68%" role="progressbar" data-state="loading" data-value="68" data-max="100" data-slot="progress" class="bg-primary/20 relative w-full overflow-hidden h-2 retro"><div data-state="loading" data-value="68" data-max="100" data-slot="progress-indicator" class="h-full transition-all w-full flex-1 bg-primary" style="transform: translateX(-32%);"></div></div><div class="absolute inset-0 border-y-4 -my-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div><div class="absolute inset-0 border-x-4 -mx-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div></div></div></div><div class="absolute inset-0 border-x-6 -mx-1.5 border-inherit pointer-events-none" aria-hidden="true"></div></div></div></div></section></div></div></div></div>
```

## Public registry source files

No public registry source files were available.