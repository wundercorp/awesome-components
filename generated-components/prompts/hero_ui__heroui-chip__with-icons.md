# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hero_ui/heroui-chip/with-icons
- Registry URL: https://21st.dev/r/hero_ui/heroui-chip
- Author: hero_ui
- Component slug: heroui-chip
- Demo slug: with-icons
- Title: heroui-chip
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hero_ui/heroui-chip with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hero_ui__heroui-chip__with-icons.html
- Local screenshot file: generated-21st-prompts/screenshots/hero_ui__heroui-chip__with-icons.png

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
<div id="root"><div class="flex min-h-screen w-full items-center justify-center overflow-hidden bg-background p-8"><div class="flex flex-wrap items-center justify-center gap-3"><div class="relative box-border inline-flex min-w-min max-w-fit items-center justify-between whitespace-nowrap rounded-full font-normal transition-colors h-7 px-1 text-sm bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200" data-slot="chip"><svg aria-hidden="true" class="shrink-0" fill="none" height="16" viewBox="0 0 16 16" width="6" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14" fill="currentColor" fill-rule="evenodd"></path></svg><span class="flex-1 text-inherit px-2 pl-1" data-slot="chip-label">Information</span></div><div class="relative box-border inline-flex min-w-min max-w-fit items-center justify-between whitespace-nowrap rounded-full font-normal transition-colors h-7 px-1 text-sm bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-200" data-slot="chip"><svg aria-hidden="true" class="shrink-0" fill="none" height="16" viewBox="0 0 16 16" width="12" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m3.1-8.55a.75.75 0 1 0-1.2-.9L7.419 8.858 6.03 7.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.13-.08z" fill="currentColor" fill-rule="evenodd"></path></svg><span class="flex-1 text-inherit px-2 pl-1" data-slot="chip-label">Completed</span></div><div class="relative box-border inline-flex min-w-min max-w-fit items-center justify-between whitespace-nowrap rounded-full font-normal transition-colors h-7 px-1 text-sm bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-200" data-slot="chip"><svg aria-hidden="true" class="shrink-0" fill="none" height="16" viewBox="0 0 16 16" width="12" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M8.75 4.5a.75.75 0 0 0-1.5 0V8a.75.75 0 0 0 .3.6l2 1.5a.75.75 0 1 0 .9-1.2l-1.7-1.275z" fill="currentColor" fill-rule="evenodd"></path></svg><span class="flex-1 text-inherit px-2 pl-1" data-slot="chip-label">Pending</span></div><div class="relative box-border inline-flex min-w-min max-w-fit items-center justify-between whitespace-nowrap rounded-full font-normal transition-colors h-7 px-1 text-sm bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-200" data-slot="chip"><svg aria-hidden="true" class="shrink-0" fill="none" height="16" viewBox="0 0 16 16" width="12" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.47 3.47a.75.75 0 0 1 1.06 0L8 6.94l3.47-3.47a.75.75 0 1 1 1.06 1.06L9.06 8l3.47 3.47a.75.75 0 1 1-1.06 1.06L8 9.06l-3.47 3.47a.75.75 0 0 1-1.06-1.06L6.94 8 3.47 4.53a.75.75 0 0 1 0-1.06" fill="currentColor" fill-rule="evenodd"></path></svg><span class="flex-1 text-inherit px-2 pl-1" data-slot="chip-label">Failed</span></div><div class="relative box-border inline-flex min-w-min max-w-fit items-center justify-between whitespace-nowrap rounded-full font-normal transition-colors h-7 px-1 text-sm bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200" data-slot="chip"><span class="flex-1 text-inherit px-2 pr-1" data-slot="chip-label">Label</span><svg aria-hidden="true" class="shrink-0" fill="none" height="16" viewBox="0 0 16 16" width="12" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M2.97 5.47a.75.75 0 0 1 1.06 0L8 9.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06" fill="currentColor" fill-rule="evenodd"></path></svg></div></div></div></div>
```

## Public registry source files

No public registry source files were available.