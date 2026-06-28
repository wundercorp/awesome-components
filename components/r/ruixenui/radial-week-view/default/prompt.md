# Build Radial Week View in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Radial Week View screenshot](screenshot.png)

## Component

- Author group: `ruixenui`
- Component: `radial-week-view`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ruixenui
- Component slug: radial-week-view
- Demo slug: default
- Title: radial-week-view
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="p-4"><h2 class="text-lg font-semibold mb-4">Radial Week View Demo</h2><div class="space-y-6 flex flex-col items-center"><div class="relative w-[400px] h-[400px] rounded-full border border-gray-300 dark:border-gray-600"><div class="absolute w-1 h-3 bg-gray-400 dark:bg-gray-500 top-1/2 left-1/2 origin-bottom" style="transform: rotate(0deg) translateY(-50%);"></div><div class="absolute w-1 h-3 bg-gray-400 dark:bg-gray-500 top-1/2 left-1/2 origin-bottom" style="transform: rotate(15deg) translateY(-50%);"></div><div class="absolute w-1 h-3 bg-gray-400 dark:bg-gray-500 top-1/2 left-1/2 origin-bottom" style="transform: rotate(30deg) translateY(-50%);"></div><div class="absolute w-1 h-3 bg-gray-400 dark:bg-gray-500 top-1/2 left-1/2 origin-bottom" style="transform: rotate(45deg) translateY(-50%);"></div><div class="absolute w-1 h-3 bg-gray-400 dark:bg-gray-500 top-1/2 left-1/2 origin-bottom" style="transform: rotate(60deg) translateY(-50%);"></div><div class="absolute w-1 h-3 bg-gray-400 dark:bg-gray-500 top-1/2 left-1/2 origin-bottom" style="transform: rotate(75deg) translateY(-50%);"></div><div class="absolute w-1 h-3 bg-gray-400 dark:bg-gray-500 top-1/2 left-1/2 origin-bottom" style="transform: rotate(90deg) translateY(-50%);"></div><div class="absolute w-1 h-3 bg-gray-400 dark:bg-gray-500 top-1/2 left-1/2 origin-bottom" style="transform: rotate(105deg) translateY(-50%);"></div><div class="absolute w-1 h-3 bg-gray-400 dark:bg-gray-500 top-1/2 left-1/2 origin-bottom" style="transform: rotate(120deg) translateY(-50%);"></div><div class="absolute w-1 h-3 bg-gray-400 dark:bg-gray-500 top-1/2 left-1/2 origin-bottom" style="transform: rotate(135deg) translateY(-50%);"></div><div class="absolute w-1 h-3 bg-gray-400 dark:bg-gray-500 top-1/2 left-1/2 origin-bottom" style="transform: rotate(150deg) translateY(-50%);"></div><div class="absolute w-1 h-3 bg-gray-400 dark:bg-gray-500 top-1/2 left-1/2 origin-bottom" style="transform: rotate(165deg) translateY(-50%);"></div><div class="absolute w-1 h-3 bg-gray-400 dark:bg-gray-500 top-1/2 left-1/2 origin-bottom" style="transform: rotate(180deg) translateY(-50%);"></div><div class="absolute w-1 h-3 bg-gray-400 dark:bg-gray-500 top-1/2 left-1/2 origin-bottom" style="transform: rotate(195deg) translateY(-50%);"></div><div class="absolute w-1 h-3 bg-gray-400 dark:bg-gray-500 top-1/2 left-1/2 origin-bottom" style="transform: rotate(210deg) translateY(-50%);"></div><div class="absolute w-1 h-3 bg-gray-400 dark:bg-gray-500 top-1/2 left-1/2 origin-bottom" style="transform: rotate(225deg) translateY(-50%);"></div><div class="absolute w-1 h-3 bg-gray-400 dark:bg-gray-500 top-1/2 left-1/2 origin-bottom" style="transform: rotate(240deg) translateY(-50%);"></div><div class="absolute w-1 h-3 bg-gray-400 dark:bg-gray-500 top-1/2 left-1/2 origin-bottom" style="transform: rotate(255deg) translateY(-50%);"></div><div class="absolute w-1 h-3 bg-gray-400 dark:bg-gray-500 top-1/2 left-1/2 origin-bottom" style="transform: rotate(270deg) translateY(-50%);"></div><div class="absolute w-1 h-3 bg-gray-400 dark:bg-gray-500 top-1/2 left-1/2 origin-bottom" style="transform: rotate(285deg) translateY(-50%);"></div><div class="absolute w-1 h-3 bg-gray-400 dark:bg-gray-500 top-1/2 left-1/2 origin-bottom" style="transform: rotate(300deg) translateY(-50%);"></div><div class="absolute w-1 h-3 bg-gray-400 dark:bg-gray-500 top-1/2 left-1/2 origin-bottom" style="transform: rotate(315deg) translateY(-50%);"></div><div class="absolute w-1 h-3 bg-gray-400 dark:bg-gray-500 top-1/2 left-1/2 origin-bottom" style="transform: rotate(330deg) translateY(-50%);"></div><div class="absolute w-1 h-3 bg-gray-400 dark:bg-gray-500 top-1/2 left-1/2 origin-bottom" style="transform: rotate(345deg) translateY(-50%);"></div></div><div class="flex gap-2 items-center"><input class="flex h-9 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Event title" value=""><input class="flex h-9 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50" min="0" max="23" placeholder="Hour (0-23)" type="number" value="0"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow-sm shadow-black/5 hover:bg-primary/90 h-9 px-4 py-2">Add Event</button></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
