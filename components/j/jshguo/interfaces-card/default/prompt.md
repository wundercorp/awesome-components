# Build Interfaces Card in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Interfaces Card screenshot](screenshot.png)

## Component

- Author group: `jshguo`
- Component: `interfaces-card`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: jshguo
- Component slug: interfaces-card
- Demo slug: default
- Title: interfaces-card
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="default.tsx_CardDemo">default.tsx</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-screen w-full items-center justify-center bg-background p-8"><div data-slot="card" class="bg-card text-card-foreground flex flex-col rounded-xl border w-full max-w-sm shadow-sm"><div data-slot="card-header" class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1 px-4 py-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] border-b"><div><div data-slot="card-title" class="font-semibold text-lg">Pro plan</div><div data-slot="card-description" class="text-muted-foreground text-sm">For growing teams that need more control.</div></div><div data-slot="card-action" class="col-start-2 row-span-2 row-start-1 self-start justify-self-end"><button type="button" aria-label="More options" class="inline-flex size-8 items-center justify-center rounded-md border bg-background text-foreground hover:bg-accent"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis size-4" aria-hidden="true"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button></div></div><div data-slot="card-content" class="p-4 space-y-3"><div class="flex items-end justify-between"><span class="text-3xl font-semibold">$24</span><span class="text-sm text-muted-foreground">per member / month</span></div><ul class="space-y-2 text-sm text-muted-foreground"><li>Unlimited projects</li><li>Advanced permissions</li><li>Shared team library</li></ul></div><div data-slot="card-footer" class="flex items-center justify-stretch p-4 border-t gap-3"><button type="button" class="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">Upgrade</button><button type="button" class="inline-flex h-10 w-full items-center justify-center rounded-md border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent">Learn more</button></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
