# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hero_ui/heroui-chip/statuses
- Registry URL: https://21st.dev/r/hero_ui/heroui-chip
- Author: hero_ui
- Component slug: heroui-chip
- Demo slug: statuses
- Title: heroui-chip
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hero_ui/heroui-chip with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hero_ui__heroui-chip__statuses.html
- Local screenshot file: generated-21st-prompts/screenshots/hero_ui__heroui-chip__statuses.png

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
<div id="root"><div class="flex min-h-screen w-full items-center justify-center overflow-hidden bg-background p-8"><div class="flex max-w-xl flex-wrap items-center justify-center gap-3"><div class="relative box-border inline-flex min-w-min max-w-fit items-center justify-between whitespace-nowrap rounded-full font-normal transition-colors h-7 px-1 text-sm bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950" data-slot="chip"><svg aria-hidden="true" class="shrink-0" fill="none" height="16" viewBox="0 0 16 16" width="6" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14" fill="currentColor" fill-rule="evenodd"></path></svg><span class="flex-1 text-inherit px-2 pl-1" data-slot="chip-label">Default</span></div><div class="relative box-border inline-flex min-w-min max-w-fit items-center justify-between whitespace-nowrap rounded-full font-normal transition-colors h-7 px-1 text-sm bg-emerald-600 text-white" data-slot="chip"><svg aria-hidden="true" class="shrink-0" fill="none" height="16" viewBox="0 0 16 16" width="12" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M13.488 3.43a.75.75 0 0 1 .081 1.058l-6 7a.75.75 0 0 1-1.1.042l-3.5-3.5A.75.75 0 0 1 4.03 6.97l2.928 2.927 5.473-6.385a.75.75 0 0 1 1.057-.081" fill="currentColor" fill-rule="evenodd"></path></svg><span class="flex-1 text-inherit px-2 pl-1" data-slot="chip-label">Active</span></div><div class="relative box-border inline-flex min-w-min max-w-fit items-center justify-between whitespace-nowrap rounded-full font-normal transition-colors h-7 px-1 text-sm bg-amber-500 text-zinc-950" data-slot="chip"><svg aria-hidden="true" class="shrink-0" fill="none" height="16" viewBox="0 0 16 16" width="12" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M8.75 4.5a.75.75 0 0 0-1.5 0V8a.75.75 0 0 0 .3.6l2 1.5a.75.75 0 1 0 .9-1.2l-1.7-1.275z" fill="currentColor" fill-rule="evenodd"></path></svg><span class="flex-1 text-inherit px-2 pl-1" data-slot="chip-label">Pending</span></div><div class="relative box-border inline-flex min-w-min max-w-fit items-center justify-between whitespace-nowrap rounded-full font-normal transition-colors h-7 px-1 text-sm border border-zinc-200 bg-transparent text-zinc-700 dark:border-zinc-700 dark:text-zinc-200" data-slot="chip"><svg aria-hidden="true" class="shrink-0" fill="none" height="16" viewBox="0 0 16 16" width="12" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M11.323 12.383a5.5 5.5 0 0 1-7.706-7.706zm1.06-1.06L4.677 3.617a5.5 5.5 0 0 1 7.706 7.706M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" fill="currentColor" fill-rule="evenodd"></path></svg><span class="flex-1 text-inherit px-2 pl-1" data-slot="chip-label">Inactive</span></div><div class="relative box-border inline-flex min-w-min max-w-fit items-center justify-between whitespace-nowrap rounded-full font-normal transition-colors h-7 px-1 text-sm bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-200" data-slot="chip"><svg aria-hidden="true" class="shrink-0" fill="none" height="16" viewBox="0 0 16 16" width="12" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1-9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-.25 3a.75.75 0 0 0-1.5 0V11a.75.75 0 0 0 1.5 0z" fill="currentColor" fill-rule="evenodd"></path></svg><span class="flex-1 text-inherit px-2 pl-1" data-slot="chip-label">New Feature</span></div><div class="relative box-border inline-flex min-w-min max-w-fit items-center justify-between whitespace-nowrap rounded-full font-normal transition-colors h-7 px-1 text-sm bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-200" data-slot="chip"><svg aria-hidden="true" class="shrink-0" fill="none" height="16" viewBox="0 0 16 16" width="12" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M13.488 3.43a.75.75 0 0 1 .081 1.058l-6 7a.75.75 0 0 1-1.1.042l-3.5-3.5A.75.75 0 0 1 4.03 6.97l2.928 2.927 5.473-6.385a.75.75 0 0 1 1.057-.081" fill="currentColor" fill-rule="evenodd"></path></svg><span class="flex-1 text-inherit px-2 pl-1" data-slot="chip-label">Available</span></div><div class="relative box-border inline-flex min-w-min max-w-fit items-center justify-between whitespace-nowrap rounded-full font-normal transition-colors h-7 px-1 text-sm bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-200" data-slot="chip"><svg aria-hidden="true" class="shrink-0" fill="none" height="16" viewBox="0 0 16 16" width="12" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M7.134 2.994 2.217 11.5a1 1 0 0 0 .866 1.5h9.834a1 1 0 0 0 .866-1.5L8.866 2.993a1 1 0 0 0-1.732 0m3.03-.75c-.962-1.665-3.366-1.665-4.329 0L.918 10.749c-.963 1.666.24 3.751 2.165 3.751h9.834c1.925 0 3.128-2.085 2.164-3.751zM8 5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 8 5m1 5.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" fill-rule="evenodd"></path></svg><span class="flex-1 text-inherit px-2 pl-1" data-slot="chip-label">Beta</span></div><div class="relative box-border inline-flex min-w-min max-w-fit items-center justify-between whitespace-nowrap rounded-full font-normal transition-colors h-7 px-1 text-sm bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-200" data-slot="chip"><svg aria-hidden="true" class="shrink-0" fill="none" height="16" viewBox="0 0 16 16" width="12" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M11.323 12.383a5.5 5.5 0 0 1-7.706-7.706zm1.06-1.06L4.677 3.617a5.5 5.5 0 0 1 7.706 7.706M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" fill="currentColor" fill-rule="evenodd"></path></svg><span class="flex-1 text-inherit px-2 pl-1" data-slot="chip-label">Deprecated</span></div></div></div></div>
```

## Public registry source files

No public registry source files were available.