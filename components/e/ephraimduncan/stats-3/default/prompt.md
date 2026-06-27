# Build Stats 3 in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Stats 3 screenshot](screenshot.png)

## Component

- Author group: `ephraimduncan`
- Component: `stats-3`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ephraimduncan
- Component slug: stats-3
- Demo slug: default
- Title: stats-3
- Description: 

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

No reference metadata available.

## Rendered DOM snapshot

This is the rendered demo HTML extracted from the live preview. Use it to verify structure, class names, visible content, and layout.

```html
<div id="root"><div class="flex justify-center items-center h-screen bg-gray-50 dark:bg-gray-900"><div class="flex items-center justify-center p-10 w-full"><dl class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full"><div data-slot="card" class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm py-4"><div data-slot="card-content" class="px-6"><dt class="text-sm text-muted-foreground">Requests</dt><dd class="text-2xl font-semibold text-foreground">996</dd><div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" data-slot="progress" class="bg-primary/20 relative w-full overflow-hidden rounded-full mt-6 h-2"><div data-state="indeterminate" data-max="100" data-slot="progress-indicator" class="bg-primary h-full w-full flex-1 transition-all" style="transform: translateX(-90.04%);"></div></div><dd class="mt-2 flex items-center justify-between text-sm"><span class="text-primary">9.96%</span><span class="text-muted-foreground">996 of 10,000</span></dd></div></div><div data-slot="card" class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm py-4"><div data-slot="card-content" class="px-6"><dt class="text-sm text-muted-foreground">Credits</dt><dd class="text-2xl font-semibold text-foreground">$672</dd><div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" data-slot="progress" class="bg-primary/20 relative w-full overflow-hidden rounded-full mt-6 h-2"><div data-state="indeterminate" data-max="100" data-slot="progress-indicator" class="bg-primary h-full w-full flex-1 transition-all" style="transform: translateX(-32.8%);"></div></div><dd class="mt-2 flex items-center justify-between text-sm"><span class="text-primary">67.2%</span><span class="text-muted-foreground">$672 of $1,000</span></dd></div></div><div data-slot="card" class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm py-4"><div data-slot="card-content" class="px-6"><dt class="text-sm text-muted-foreground">Storage</dt><dd class="text-2xl font-semibold text-foreground">1.85</dd><div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" data-slot="progress" class="bg-primary/20 relative w-full overflow-hidden rounded-full mt-6 h-2"><div data-state="indeterminate" data-max="100" data-slot="progress-indicator" class="bg-primary h-full w-full flex-1 transition-all" style="transform: translateX(-81.5%);"></div></div><dd class="mt-2 flex items-center justify-between text-sm"><span class="text-primary">18.5%</span><span class="text-muted-foreground">1.85 of 10GB</span></dd></div></div><div data-slot="card" class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm py-4"><div data-slot="card-content" class="px-6"><dt class="text-sm text-muted-foreground">API Calls</dt><dd class="text-2xl font-semibold text-foreground">4,328</dd><div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" data-slot="progress" class="bg-primary/20 relative w-full overflow-hidden rounded-full mt-6 h-2"><div data-state="indeterminate" data-max="100" data-slot="progress-indicator" class="bg-primary h-full w-full flex-1 transition-all" style="transform: translateX(-13.44%);"></div></div><dd class="mt-2 flex items-center justify-between text-sm"><span class="text-primary">86.56%</span><span class="text-muted-foreground">4,328 of 5,000</span></dd></div></div></dl></div></div></div>
```

## Reference source files

No reference source files were available.
