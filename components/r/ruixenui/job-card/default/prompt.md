# Build Job Card in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Job Card screenshot](screenshot.png)

## Component

- Author group: `ruixenui`
- Component: `job-card`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ruixenui
- Component slug: job-card
- Demo slug: default
- Title: job-card
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-80 rounded-2xl shadow-sm border border-border bg-card text-card-foreground transition-colors"><div class="space-y-1.5 p-6 flex flex-row items-center justify-between px-4 py-6"><div class="flex items-center gap-3"><span class="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10"><span class="flex h-full w-full items-center justify-center rounded-[inherit] bg-secondary text-xs">T</span></span><div><p class="font-medium">Tech Corp</p><p class="text-sm text-muted-foreground">$80k - $100k</p></div></div></div><div class="p-6 px-4 py-3"><h2 class="text-xl font-medium leading-snug">Software Engineer</h2><div class="mt-3 space-y-2 text-sm"><p><span class="font-medium">Location:</span> Remote</p><p><span class="font-medium">Type:</span> Full-time</p><p><span class="font-medium">Experience:</span> 2+ years</p></div></div><div class="items-center p-6 flex justify-between gap-2 px-4 py-6 border-t"><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm shadow-black/5 hover:bg-accent hover:text-accent-foreground h-9 py-2 rounded-xl px-4">Save</button><div class="flex gap-2"><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 bg-secondary text-secondary-foreground shadow-sm shadow-black/5 hover:bg-secondary/80 h-9 py-2 rounded-xl px-4">Share</button><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow-sm shadow-black/5 hover:bg-primary/90 h-9 py-2 rounded-xl px-6">Apply</button></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
