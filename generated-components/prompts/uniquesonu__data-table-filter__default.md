# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/uniquesonu/data-table-filter/default
- Registry URL: https://21st.dev/r/uniquesonu/data-table-filter
- Author: uniquesonu
- Component slug: data-table-filter
- Demo slug: default
- Title: data-table-filter
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/uniquesonu/data-table-filter with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/uniquesonu__data-table-filter__default.html
- Local screenshot file: generated-21st-prompts/screenshots/uniquesonu__data-table-filter__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-wrap gap-4 p-8 bg-background border rounded-lg max-w-4xl mx-auto"><h3 class="w-full text-lg font-semibold text-foreground mb-2">Filter Controls</h3><div class="flex items-center space-x-2"><span class="text-sm font-medium text-muted-foreground">Status:</span><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:text-accent-foreground rounded-md px-3 h-8 border-dashed transition-colors duration-150 hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" aria-expanded="false" aria-haspopup="listbox" aria-label="Filter by Status. Current selection: Status" type="button" aria-controls="radix-«r0»" data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-funnel mr-2 h-3.5 w-3.5 text-muted-foreground" aria-hidden="true"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg><span class="font-medium text-sm">Status</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down ml-2 h-3 w-3 opacity-70" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></div><div class="flex items-center space-x-2"><span class="text-sm font-medium text-muted-foreground">Priority:</span><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:text-accent-foreground rounded-md px-3 h-8 border-dashed transition-colors duration-150 hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" aria-expanded="false" aria-haspopup="listbox" aria-label="Filter by Priority. Current selection: Priority" type="button" aria-controls="radix-«r1»" data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-funnel mr-2 h-3.5 w-3.5 text-muted-foreground" aria-hidden="true"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg><span class="font-medium text-sm">Priority</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down ml-2 h-3 w-3 opacity-70" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></div><div class="w-full mt-4 p-3 bg-muted rounded-md text-sm text-muted-foreground"><p>Current Status Filter: <strong class="text-foreground">None</strong></p><p>Current Priority Filter: <strong class="text-foreground">None</strong></p></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.