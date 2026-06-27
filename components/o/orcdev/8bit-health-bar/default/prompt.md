# Build 8bit Health Bar in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![8bit Health Bar screenshot](screenshot.png)

## Component

- Author group: `orcdev`
- Component: `8bit-health-bar`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: OrcDev
- Component slug: 8bit-health-bar
- Demo slug: default
- Title: 8bit-health-bar
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex w-full min-h-screen items-center justify-center bg-background p-8 retro"><div class="md:min-w-[300px] min-w-[200px] flex flex-col gap-8"><div><p class="text-sm text-muted-foreground mb-2">Default health bar</p><div class="flex justify-between text-sm mb-2 retro"><span>Health</span><span>75%</span></div><div class="relative w-full"><div data-slot="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="75" class="bg-primary/20 relative w-full overflow-hidden h-2 retro"><div data-slot="progress-indicator" class="h-full transition-all w-full flex-1 bg-red-500" style="transform: translateX(-25%);"></div></div><div class="absolute inset-0 border-y-4 -my-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div><div class="absolute inset-0 border-x-4 -mx-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div></div></div><div><p class="text-sm text-muted-foreground mb-2">Retro health bar</p><div class="flex justify-between text-sm mb-2 retro"><span>Health</span><span>45%</span></div><div class="relative w-full"><div data-slot="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="45" class="bg-primary/20 relative w-full overflow-hidden h-2 retro"><div data-slot="progress-indicator" class="h-full transition-all flex w-full"><div class="flex w-full"><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div></div></div></div><div class="absolute inset-0 border-y-4 -my-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div><div class="absolute inset-0 border-x-4 -mx-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
