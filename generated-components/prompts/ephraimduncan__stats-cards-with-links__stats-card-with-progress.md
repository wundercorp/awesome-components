# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ephraimduncan/stats-cards-with-links/stats-card-with-progress
- Registry URL: https://21st.dev/r/ephraimduncan/stats-cards-with-links
- Author: ephraimduncan
- Component slug: stats-cards-with-links
- Demo slug: stats-card-with-progress
- Title: stats-cards-with-links
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ephraimduncan/stats-cards-with-links with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ephraimduncan__stats-cards-with-links__stats-card-with-progress.html
- Local screenshot file: generated-21st-prompts/screenshots/ephraimduncan__stats-cards-with-links__stats-card-with-progress.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center p-10 w-full"><dl class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full"><div data-slot="card" class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm py-4"><div data-slot="card-content" class="px-6"><dt class="text-sm text-muted-foreground">Requests</dt><dd class="text-2xl font-semibold text-foreground">996</dd><div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" data-slot="progress" class="bg-primary/20 relative w-full overflow-hidden rounded-full mt-6 h-2"><div data-state="indeterminate" data-max="100" data-slot="progress-indicator" class="bg-primary h-full w-full flex-1 transition-all" style="transform: translateX(-90.04%);"></div></div><dd class="mt-2 flex items-center justify-between text-sm"><span class="text-primary">9.96%</span><span class="text-muted-foreground">996 of 10,000</span></dd></div></div><div data-slot="card" class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm py-4"><div data-slot="card-content" class="px-6"><dt class="text-sm text-muted-foreground">Credits</dt><dd class="text-2xl font-semibold text-foreground">$672</dd><div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" data-slot="progress" class="bg-primary/20 relative w-full overflow-hidden rounded-full mt-6 h-2"><div data-state="indeterminate" data-max="100" data-slot="progress-indicator" class="bg-primary h-full w-full flex-1 transition-all" style="transform: translateX(-32.8%);"></div></div><dd class="mt-2 flex items-center justify-between text-sm"><span class="text-primary">67.2%</span><span class="text-muted-foreground">$672 of $1,000</span></dd></div></div><div data-slot="card" class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm py-4"><div data-slot="card-content" class="px-6"><dt class="text-sm text-muted-foreground">Storage</dt><dd class="text-2xl font-semibold text-foreground">1.85</dd><div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" data-slot="progress" class="bg-primary/20 relative w-full overflow-hidden rounded-full mt-6 h-2"><div data-state="indeterminate" data-max="100" data-slot="progress-indicator" class="bg-primary h-full w-full flex-1 transition-all" style="transform: translateX(-81.5%);"></div></div><dd class="mt-2 flex items-center justify-between text-sm"><span class="text-primary">18.5%</span><span class="text-muted-foreground">1.85 of 10GB</span></dd></div></div><div data-slot="card" class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm py-4"><div data-slot="card-content" class="px-6"><dt class="text-sm text-muted-foreground">API Calls</dt><dd class="text-2xl font-semibold text-foreground">4,328</dd><div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" data-slot="progress" class="bg-primary/20 relative w-full overflow-hidden rounded-full mt-6 h-2"><div data-state="indeterminate" data-max="100" data-slot="progress-indicator" class="bg-primary h-full w-full flex-1 transition-all" style="transform: translateX(-13.44%);"></div></div><dd class="mt-2 flex items-center justify-between text-sm"><span class="text-primary">86.56%</span><span class="text-muted-foreground">4,328 of 5,000</span></dd></div></div></dl></div></div></div></div>
```

## Public registry source files

No public registry source files were available.