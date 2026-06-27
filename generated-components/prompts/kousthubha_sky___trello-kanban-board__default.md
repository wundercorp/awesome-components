# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/kousthubha_sky_/trello-kanban-board/default
- Registry URL: https://21st.dev/r/kousthubha_sky_/trello-kanban-board
- Author: kousthubha_sky_
- Component slug: trello-kanban-board
- Demo slug: default
- Title: trello-kanban-board
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/kousthubha_sky_/trello-kanban-board with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/kousthubha_sky___trello-kanban-board__default.html
- Local screenshot file: generated-21st-prompts/screenshots/kousthubha_sky___trello-kanban-board__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-background p-8"><div class="mx-auto max-w-5xl"><div class="mb-10 text-center"><h1 class="mb-2 text-3xl font-bold text-foreground">Task Board</h1><p class="text-muted-foreground">Drag tasks between columns to update their status</p></div><div class="flex gap-4 overflow-x-auto pb-4"><div class="min-w-[280px] max-w-[280px] rounded-xl p-3 transition-all duration-200 bg-muted/50 border-2 border-transparent"><div class="mb-3 flex items-center justify-between px-1"><div class="flex items-center gap-2"><div class="h-3 w-3 rounded bg-indigo-500"></div><h2 class="text-sm font-semibold text-foreground">To Do</h2><span class="rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">3</span></div><button class="rounded p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" aria-label="Column options"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button></div><div class="flex min-h-[100px] flex-col gap-2"><div draggable="true" class="cursor-grab rounded-lg border border-border bg-card p-3 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md active:cursor-grabbing"><h3 class="text-sm font-medium text-card-foreground">Create project documentation</h3></div><div draggable="true" class="cursor-grab rounded-lg border border-border bg-card p-3 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md active:cursor-grabbing"><h3 class="text-sm font-medium text-card-foreground">Design system components</h3></div><div draggable="true" class="cursor-grab rounded-lg border border-border bg-card p-3 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md active:cursor-grabbing"><h3 class="text-sm font-medium text-card-foreground">Set up testing framework</h3></div></div></div><div class="min-w-[280px] max-w-[280px] rounded-xl p-3 transition-all duration-200 bg-muted/50 border-2 border-transparent"><div class="mb-3 flex items-center justify-between px-1"><div class="flex items-center gap-2"><div class="h-3 w-3 rounded bg-amber-500"></div><h2 class="text-sm font-semibold text-foreground">In Progress</h2><span class="rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">2</span></div><button class="rounded p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" aria-label="Column options"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button></div><div class="flex min-h-[100px] flex-col gap-2"><div draggable="true" class="cursor-grab rounded-lg border border-border bg-card p-3 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md active:cursor-grabbing"><h3 class="text-sm font-medium text-card-foreground">Build authentication flow</h3></div><div draggable="true" class="cursor-grab rounded-lg border border-border bg-card p-3 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md active:cursor-grabbing"><h3 class="text-sm font-medium text-card-foreground">API integration</h3></div></div></div><div class="min-w-[280px] max-w-[280px] rounded-xl p-3 transition-all duration-200 bg-muted/50 border-2 border-transparent"><div class="mb-3 flex items-center justify-between px-1"><div class="flex items-center gap-2"><div class="h-3 w-3 rounded bg-emerald-500"></div><h2 class="text-sm font-semibold text-foreground">Done</h2><span class="rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">2</span></div><button class="rounded p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" aria-label="Column options"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button></div><div class="flex min-h-[100px] flex-col gap-2"><div draggable="true" class="cursor-grab rounded-lg border border-border bg-card p-3 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md active:cursor-grabbing"><h3 class="text-sm font-medium text-card-foreground">Project setup</h3></div><div draggable="true" class="cursor-grab rounded-lg border border-border bg-card p-3 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md active:cursor-grabbing"><h3 class="text-sm font-medium text-card-foreground">Database design</h3></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.