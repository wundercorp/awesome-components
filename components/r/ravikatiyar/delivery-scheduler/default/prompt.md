# Build Delivery Scheduler in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Delivery Scheduler screenshot](screenshot.png)

## Component

- Author group: `ravikatiyar`
- Component: `delivery-scheduler`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ravikatiyar
- Component slug: delivery-scheduler
- Demo slug: default
- Title: delivery-scheduler
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-[500px] w-full items-center justify-center bg-background p-4"><div class="w-full max-w-md rounded-2xl border bg-card p-6 text-card-foreground shadow-lg"><div class="space-y-6"><div><label class="text-sm font-medium text-muted-foreground">Delivery Window*</label><div class="mt-2 flex items-center justify-between"><h3 class="font-semibold">May 2025</h3><div class="flex items-center space-x-2"><button class="rounded-md p-1 hover:bg-muted"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left h-5 w-5" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></button><button class="rounded-md p-1 hover:bg-muted"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-5 w-5" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button></div></div></div><div class="grid grid-cols-6 gap-2"><div class="relative flex flex-col items-center"><span class="mb-2 text-xs text-muted-foreground">Mon</span><button class="relative isolate inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 w-10"><div class="absolute inset-0 z-0 rounded-lg bg-primary" style="opacity: 1; transform: none;"></div><span class="relative z-10">5</span></button></div><div class="relative flex flex-col items-center"><span class="mb-2 text-xs text-muted-foreground">Tue</span><button class="relative isolate inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent text-foreground hover:bg-muted h-10 w-10"><span class="relative z-10">6</span></button></div><div class="relative flex flex-col items-center"><span class="mb-2 text-xs text-muted-foreground">Wed</span><button class="relative isolate inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent text-foreground hover:bg-muted h-10 w-10"><span class="relative z-10">7</span></button></div><div class="relative flex flex-col items-center"><span class="mb-2 text-xs text-muted-foreground">Thu</span><button class="relative isolate inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent text-foreground hover:bg-muted h-10 w-10"><span class="relative z-10">8</span></button></div><div class="relative flex flex-col items-center"><span class="mb-2 text-xs text-muted-foreground">Fri</span><button class="relative isolate inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent text-foreground hover:bg-muted h-10 w-10"><span class="relative z-10">9</span></button></div><div class="relative flex flex-col items-center"><span class="mb-2 text-xs text-muted-foreground">Sat</span><button class="relative isolate inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent text-foreground hover:bg-muted h-10 w-10"><span class="relative z-10">10</span></button></div></div><div><p class="text-sm font-medium">Lisbon (GMT +1)</p><div class="mt-2 grid grid-cols-3 gap-2"><button class="relative isolate inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground"><div class="absolute inset-0 z-0 rounded-lg bg-primary" style="opacity: 1; transform: none;"></div><span class="relative z-10">4:30 AM</span></button><button class="relative isolate inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent text-foreground hover:bg-muted"><span class="relative z-10">5:00 AM</span></button><button class="relative isolate inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent text-foreground hover:bg-muted"><span class="relative z-10">5:30 AM</span></button><button class="relative isolate inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent text-foreground hover:bg-muted"><span class="relative z-10">6:00 AM</span></button><button class="relative isolate inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent text-foreground hover:bg-muted"><span class="relative z-10">6:30 AM</span></button><button class="relative isolate inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent text-foreground hover:bg-muted"><span class="relative z-10">7:00 AM</span></button></div></div><div class="flex items-center justify-end space-x-3 border-t pt-4"><button class="relative isolate inline-flex items-center justify-center rounded-lg py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-foreground hover:bg-muted px-6 bg-muted">Cancel</button><button class="relative isolate inline-flex items-center justify-center rounded-lg py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground px-6 bg-primary">Schedule</button></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
