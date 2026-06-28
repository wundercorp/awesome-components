# Build Badge Tabs in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Badge Tabs screenshot](screenshot.png)

## Component

- Author group: `ruixenui`
- Component: `badge-tabs`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ruixenui
- Component slug: badge-tabs
- Demo slug: default
- Title: badge-tabs
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col items-center justify-center w-full mt-10"><div dir="ltr" data-orientation="horizontal" class="w-full max-w-lg"><div role="tablist" aria-orientation="horizontal" class="items-center justify-center text-muted-foreground/70 relative flex gap-2 bg-background/30 p-2 rounded-xl border" tabindex="0" data-orientation="horizontal" style="outline: none;"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium outline-offset-2 transition-all hover:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:shadow-black/5 relative flex-1 flex justify-between items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors text-foreground/80" type="button" role="tab" aria-selected="false" aria-controls="radix-«r0»-content-messages" data-state="inactive" id="radix-«r0»-trigger-messages" tabindex="-1" data-orientation="horizontal" data-radix-collection-item=""><span class="relative z-10">Messages</span><span class="ml-2 relative z-10 inline-flex items-center justify-center min-w-[20px] h-5 px-2 rounded-full bg-blue-500 text-white text-xs font-bold" style="transform: none;">5</span></button><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium outline-offset-2 transition-all hover:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:shadow-black/5 relative flex-1 flex justify-between items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors text-white" type="button" role="tab" aria-selected="true" aria-controls="radix-«r0»-content-tasks" data-state="active" id="radix-«r0»-trigger-tasks" tabindex="-1" data-orientation="horizontal" data-radix-collection-item=""><div class="absolute inset-0 bg-primary/10 rounded-lg z-0" style="opacity: 1;"></div><span class="relative z-10">Tasks</span><span class="ml-2 relative z-10 inline-flex items-center justify-center min-w-[20px] h-5 px-2 rounded-full bg-blue-500 text-white text-xs font-bold" style="transform: none;">12</span></button><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium outline-offset-2 transition-all hover:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:shadow-black/5 relative flex-1 flex justify-between items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors text-foreground/80" type="button" role="tab" aria-selected="false" aria-controls="radix-«r0»-content-alerts" data-state="inactive" id="radix-«r0»-trigger-alerts" tabindex="-1" data-orientation="horizontal" data-radix-collection-item=""><span class="relative z-10">Alerts</span><span class="ml-2 relative z-10 inline-flex items-center justify-center min-w-[20px] h-5 px-2 rounded-full bg-blue-500 text-white text-xs font-bold" style="transform: none;">3</span></button></div><div class="mt-4 w-full max-w-lg"><div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-messages" hidden="" id="radix-«r0»-content-messages" tabindex="0" class="mt-2 outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70"></div><div data-state="active" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-tasks" id="radix-«r0»-content-tasks" tabindex="0" class="mt-2 outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70" style="animation-duration: 0s;"><div class="p-4 bg-card rounded-lg"><div><h2 class="font-bold text-lg">Tasks</h2><p>There are 12 tasks pending your review.</p></div></div></div><div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-alerts" hidden="" id="radix-«r0»-content-alerts" tabindex="0" class="mt-2 outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70"></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
