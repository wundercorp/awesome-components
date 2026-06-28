# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/theorcdev/8bit-tabs/default
- Registry URL: https://21st.dev/r/theorcdev/8bit-tabs
- Author: theorcdev
- Component slug: 8bit-tabs
- Demo slug: default
- Title: 8bit-tabs
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/theorcdev/8bit-tabs with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/theorcdev__8bit-tabs__default.html
- Local screenshot file: generated-21st-prompts/screenshots/theorcdev__8bit-tabs__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex w-full min-h-screen items-center justify-center bg-background p-8 overflow-hidden"><div data-slot="tabs" class="relative retro w-full max-w-sm"><div role="tablist" data-slot="tabs-list" class="inline-flex h-10 items-center justify-center p-1 text-muted-foreground relative bg-card rounded-none"><div class="absolute inset-0 border-y-6 -my-1.5 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div><div class="absolute inset-0 border-x-6 -mx-1.5 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div><button type="button" role="tab" aria-selected="true" data-state="active" data-slot="tabs-trigger" class="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm border-none data-[state=active]:bg-accent data-[state=active]:text-foreground text-muted-foreground rounded-none">Stats</button><button type="button" role="tab" aria-selected="false" data-state="inactive" data-slot="tabs-trigger" class="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm border-none data-[state=active]:bg-accent data-[state=active]:text-foreground text-muted-foreground rounded-none">Items</button><button type="button" role="tab" aria-selected="false" data-state="inactive" data-slot="tabs-trigger" class="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm border-none data-[state=active]:bg-accent data-[state=active]:text-foreground text-muted-foreground rounded-none">Skills</button></div><div role="tabpanel" data-state="active" data-slot="tabs-content" class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 p-4 font-pixel text-sm">HP 120 / 120 — ATK 42 — DEF 30</div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.