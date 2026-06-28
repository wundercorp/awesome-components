# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/trophyso/points-awards/default
- Registry URL: https://21st.dev/r/trophyso/points-awards
- Author: trophyso
- Component slug: points-awards
- Demo slug: default
- Title: points-awards
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/trophyso/points-awards with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/trophyso__points-awards__default.html
- Local screenshot file: generated-21st-prompts/screenshots/trophyso__points-awards__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div style="padding: 16px 8px;"><div class="bg-card w-full rounded-xl border"><div role="list" aria-label="Points awards history" class="divide-border divide-y"><div role="listitem" class="py-3" style="padding-left: 24px; padding-right: 24px;"><div class="grid grid-cols-[7rem_minmax(0,1fr)_auto] items-center gap-4"><span class="text-muted-foreground truncate text-sm">May 7, 2026</span><p class="flex items-center gap-2"><span class="text-foreground justify-self-center font-bold tabular-nums">20,148</span><span class="text-green-600 dark:text-green-400 font-medium tabular-nums">+12</span></p><div class="flex items-center justify-end gap-2" style="padding-left: 48px;"><span aria-label="+12 — Every 1 day(s)" class="bg-muted text-foreground inline-flex h-6 w-6 items-center justify-center rounded-full" data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock h-3 w-3" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></span></div></div></div><div role="listitem" class="py-3" style="padding-left: 24px; padding-right: 24px;"><div class="grid grid-cols-[7rem_minmax(0,1fr)_auto] items-center gap-4"><span class="text-muted-foreground truncate text-sm">May 6, 2026</span><p class="flex items-center gap-2"><span class="text-foreground justify-self-center font-bold tabular-nums">20,136</span><span class="text-green-600 dark:text-green-400 font-medium tabular-nums">+20</span></p><div class="flex items-center justify-end gap-2" style="padding-left: 48px;"><span aria-label="+20 — Streak · 7" class="bg-muted text-foreground inline-flex h-6 w-6 items-center justify-center rounded-full" data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame h-3 w-3" aria-hidden="true"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg></span></div></div></div><div role="listitem" class="py-3" style="padding-left: 24px; padding-right: 24px;"><div class="grid grid-cols-[7rem_minmax(0,1fr)_auto] items-center gap-4"><span class="text-muted-foreground truncate text-sm">May 6, 2026</span><p class="flex items-center gap-2"><span class="text-foreground justify-self-center font-bold tabular-nums">20,116</span><span class="text-green-600 dark:text-green-400 font-medium tabular-nums">+8</span></p><div class="flex items-center justify-end gap-2" style="padding-left: 48px;"><span aria-label="+8 — Account created" class="bg-muted text-foreground inline-flex h-6 w-6 items-center justify-center rounded-full" data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-plus h-3 w-3" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg></span></div></div></div><div role="listitem" class="py-3" style="padding-left: 24px; padding-right: 24px;"><div class="grid grid-cols-[7rem_minmax(0,1fr)_auto] items-center gap-4"><span class="text-muted-foreground truncate text-sm">May 4, 2026</span><p class="flex items-center gap-2"><span class="text-foreground justify-self-center font-bold tabular-nums">20,108</span><span class="text-green-600 dark:text-green-400 font-medium tabular-nums">+10</span></p><div class="flex items-center justify-end gap-2" style="padding-left: 48px;"><span aria-label="+10 — words written · threshold 1,000" class="bg-muted text-foreground inline-flex h-6 w-6 items-center justify-center rounded-full" data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target h-3 w-3" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg></span></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.