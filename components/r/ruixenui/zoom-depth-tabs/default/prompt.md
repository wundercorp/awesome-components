# Build Zoom Depth Tabs in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Zoom Depth Tabs screenshot](screenshot.png)

## Component

- Author group: `ruixenui`
- Component: `zoom-depth-tabs`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ruixenui
- Component slug: zoom-depth-tabs
- Demo slug: default
- Title: zoom-depth-tabs
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col items-center justify-center min-h-[60vh]"><div dir="ltr" data-orientation="horizontal" class="w-full max-w-3xl"><div role="tablist" aria-orientation="horizontal" class="items-center justify-center text-muted-foreground/70 flex gap-4 p-2 overflow-x-auto rounded-xl bg-background/30 scrollbar-none" tabindex="0" data-orientation="horizontal" style="outline: none;"><button type="button" role="tab" aria-selected="true" aria-controls="radix-«r0»-content-overview" data-state="active" id="radix-«r0»-trigger-overview" class="inline-flex items-center justify-center whitespace-nowrap outline-offset-2 transition-all hover:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:shadow-black/5 px-6 py-3 rounded-xl text-sm font-medium shadow-md relative" tabindex="-1" data-orientation="horizontal" data-radix-collection-item=""><span class="block text-white bg-primary px-6 py-2 rounded-lg" style="transform: scale(1.1); opacity: 1;">Overview</span></button><button type="button" role="tab" aria-selected="false" aria-controls="radix-«r0»-content-reports" data-state="inactive" id="radix-«r0»-trigger-reports" class="inline-flex items-center justify-center whitespace-nowrap outline-offset-2 transition-all hover:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:shadow-black/5 px-6 py-3 rounded-xl text-sm font-medium shadow-md relative" tabindex="-1" data-orientation="horizontal" data-radix-collection-item=""><span class="block text-foreground/70" style="transform: scale(0.95) rotateX(-5deg) rotateY(5deg); opacity: 0.7;">Reports</span></button><button type="button" role="tab" aria-selected="false" aria-controls="radix-«r0»-content-settings" data-state="inactive" id="radix-«r0»-trigger-settings" class="inline-flex items-center justify-center whitespace-nowrap outline-offset-2 transition-all hover:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:shadow-black/5 px-6 py-3 rounded-xl text-sm font-medium shadow-md relative" tabindex="-1" data-orientation="horizontal" data-radix-collection-item=""><span class="block text-foreground/70" style="transform: scale(0.95) rotateX(-5deg) rotateY(5deg); opacity: 0.7;">Settings</span></button><button type="button" role="tab" aria-selected="false" aria-controls="radix-«r0»-content-help" data-state="inactive" id="radix-«r0»-trigger-help" class="inline-flex items-center justify-center whitespace-nowrap outline-offset-2 transition-all hover:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:shadow-black/5 px-6 py-3 rounded-xl text-sm font-medium shadow-md relative" tabindex="-1" data-orientation="horizontal" data-radix-collection-item=""><span class="block text-foreground/70" style="transform: scale(0.95) rotateX(-5deg) rotateY(5deg); opacity: 0.7;">Help</span></button></div><div class="mt-6 w-full max-w-3xl relative"><div data-state="active" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-overview" id="radix-«r0»-content-overview" tabindex="0" class="mt-2 outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70" style="animation-duration: 0s;"><div class="p-6 bg-card rounded-xl shadow-lg" style="opacity: 1; transform: none;"><div><h2 class="text-lg font-medium mb-2">Dashboard Overview</h2><p class="text-muted-foreground">Here you can see a summary of your analytics, quick stats, and recent activity.</p></div></div></div><div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-reports" hidden="" id="radix-«r0»-content-reports" tabindex="0" class="mt-2 outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70"></div><div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-settings" hidden="" id="radix-«r0»-content-settings" tabindex="0" class="mt-2 outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70"></div><div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-help" hidden="" id="radix-«r0»-content-help" tabindex="0" class="mt-2 outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70"></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
