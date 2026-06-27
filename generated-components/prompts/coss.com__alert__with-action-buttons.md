# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/coss.com/alert/with-action-buttons
- Registry URL: https://21st.dev/r/coss.com/alert
- Author: coss.com
- Component slug: alert
- Demo slug: with-action-buttons
- Title: alert
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/coss.com/alert with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/coss.com__alert__with-action-buttons.html
- Local screenshot file: generated-21st-prompts/screenshots/coss.com__alert__with-action-buttons.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center w-full min-h-screen bg-background p-8"><div class="w-full max-w-xl"><div class="relative w-full items-start rounded-xl border text-sm has-[&gt;svg]:grid-cols-[calc(var(--spacing)*4)_1fr] [&amp;&gt;svg]:h-[1lh] [&amp;&gt;svg]:w-4 bg-transparent text-card-foreground dark:bg-muted/30 [&amp;&gt;svg]:text-muted-foreground flex flex-col gap-3 p-4" data-slot="alert" role="alert"><div class="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-terminal size-4 mt-0.5 shrink-0" aria-hidden="true"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg><div class="space-y-1 min-w-0"><div class="font-medium [svg~&amp;]:col-start-2 leading-none" data-slot="alert-title">Heads up!</div><div class="flex flex-col gap-2.5 text-muted-foreground [svg~&amp;]:col-start-2" data-slot="alert-description">You can add components to your app using the CLI.</div></div></div><div class="max-sm:col-start-2 max-sm:mt-2 sm:row-start-1 sm:row-end-3 sm:self-center flex flex-wrap gap-2 pl-7" data-slot="alert-action"><button class="inline-flex items-center justify-center rounded-lg border bg-background px-3 py-1.5 text-xs font-medium shadow-sm hover:bg-muted transition-colors">Undo</button><button class="inline-flex items-center justify-center rounded-lg border border-transparent bg-foreground text-background px-3 py-1.5 text-xs font-medium shadow-sm hover:opacity-90 transition-opacity">Action</button></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.