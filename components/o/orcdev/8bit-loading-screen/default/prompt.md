# Build 8bit Loading Screen in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![8bit Loading Screen screenshot](screenshot.png)

## Component

- Author group: `orcdev`
- Component: `8bit-loading-screen`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: OrcDev
- Component slug: 8bit-loading-screen
- Demo slug: default
- Title: 8bit-loading-screen
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex w-full min-h-screen items-center justify-center bg-background p-8 retro"><div class="w-full min-w-[300px] md:min-w-[400px]"><div class="flex flex-col items-center justify-center gap-6 p-8"><h2 class="retro text-xl md:text-2xl text-center animate-pulse">LOADING</h2><div class="w-full max-w-md space-y-2"><div class="flex justify-end"><span class="retro text-xs text-muted-foreground">45%</span></div><div class="relative w-full h-4"><div data-slot="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="45" class="bg-primary/20 relative w-full overflow-hidden h-4 retro"><div data-slot="progress-indicator" class="h-full transition-all flex w-full"><div class="flex w-full"><div class="flex-1 h-full mx-[1px] bg-primary"></div><div class="flex-1 h-full mx-[1px] bg-primary"></div><div class="flex-1 h-full mx-[1px] bg-primary"></div><div class="flex-1 h-full mx-[1px] bg-primary"></div><div class="flex-1 h-full mx-[1px] bg-primary"></div><div class="flex-1 h-full mx-[1px] bg-primary"></div><div class="flex-1 h-full mx-[1px] bg-primary"></div><div class="flex-1 h-full mx-[1px] bg-primary"></div><div class="flex-1 h-full mx-[1px] bg-primary"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div></div></div></div><div class="absolute inset-0 border-y-4 -my-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div><div class="absolute inset-0 border-x-4 -mx-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div></div></div><div class="w-full max-w-md min-h-16 flex items-center justify-center"><p class="retro text-[0.625rem] md:text-xs text-center text-muted-foreground leading-relaxed animate-pulse">Did you know? Saving often prevents lost progress!</p></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
