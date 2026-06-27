# Build Interfaces Progress in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Interfaces Progress screenshot](screenshot.png)

## Component

- Author group: `jshguo`
- Component: `interfaces-progress`
- Variant: `steps`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: jshguo
- Component slug: interfaces-progress
- Demo slug: steps
- Title: interfaces-progress
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="default.tsx_ProgressStepsDemo">default.tsx</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex w-full min-h-screen items-center justify-center bg-background p-8 overflow-hidden"><div class="w-full max-w-sm space-y-5"><div class="space-y-1.5"><div class="flex items-center justify-between text-sm"><span class="font-medium">Profile</span><span class="text-muted-foreground">100%</span></div><div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" data-slot="progress" class="bg-primary/20 relative h-2 w-full overflow-hidden rounded-full"><div data-state="indeterminate" data-max="100" data-slot="progress-indicator" class="bg-primary h-full w-full flex-1 transition-all rounded-full" style="transform: translateX(0%);"></div></div></div><div class="space-y-1.5"><div class="flex items-center justify-between text-sm"><span class="font-medium">Account</span><span class="text-muted-foreground">75%</span></div><div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" data-slot="progress" class="bg-primary/20 relative h-2 w-full overflow-hidden rounded-full"><div data-state="indeterminate" data-max="100" data-slot="progress-indicator" class="bg-primary h-full w-full flex-1 transition-all rounded-full" style="transform: translateX(-25%);"></div></div></div><div class="space-y-1.5"><div class="flex items-center justify-between text-sm"><span class="font-medium">Billing</span><span class="text-muted-foreground">40%</span></div><div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" data-slot="progress" class="bg-primary/20 relative h-2 w-full overflow-hidden rounded-full"><div data-state="indeterminate" data-max="100" data-slot="progress-indicator" class="bg-primary h-full w-full flex-1 transition-all rounded-full" style="transform: translateX(-60%);"></div></div></div><div class="space-y-1.5"><div class="flex items-center justify-between text-sm"><span class="font-medium">Notifications</span><span class="text-muted-foreground">10%</span></div><div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" data-slot="progress" class="bg-primary/20 relative h-2 w-full overflow-hidden rounded-full"><div data-state="indeterminate" data-max="100" data-slot="progress-indicator" class="bg-primary h-full w-full flex-1 transition-all rounded-full" style="transform: translateX(-90%);"></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
