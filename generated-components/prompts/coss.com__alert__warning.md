# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/coss.com/alert/warning
- Registry URL: https://21st.dev/r/coss.com/alert
- Author: coss.com
- Component slug: alert
- Demo slug: warning
- Title: alert
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/coss.com/alert with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/coss.com__alert__warning.html
- Local screenshot file: generated-21st-prompts/screenshots/coss.com__alert__warning.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center w-full min-h-screen bg-background p-8"><div class="w-full max-w-xl"><div class="relative grid w-full items-start gap-x-2 gap-y-0.5 rounded-xl border px-3.5 py-3 text-sm has-[&gt;svg]:grid-cols-[calc(var(--spacing)*4)_1fr] [&amp;&gt;svg]:h-[1lh] [&amp;&gt;svg]:w-4 border-amber-500/30 bg-amber-500/5 text-amber-700 dark:text-amber-400 [&amp;&gt;svg]:text-amber-500" data-slot="alert" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert size-4" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg><div class="font-medium [svg~&amp;]:col-start-2" data-slot="alert-title">Heads up!</div><div class="flex flex-col gap-2.5 text-muted-foreground [svg~&amp;]:col-start-2" data-slot="alert-description">This action will not be able to be done once started.</div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.