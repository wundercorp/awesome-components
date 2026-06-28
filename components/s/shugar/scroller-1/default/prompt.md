# Build Scroller 1 in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Scroller 1 screenshot](screenshot.png)

## Component

- Author group: `shugar`
- Component: `scroller-1`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: shugar
- Component slug: scroller-1
- Demo slug: default
- Title: scroller-1
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center"><div class="relative overflow-hidden flex flex-col gap-2" style="width: 100%; height: 220px;"><div class="flex relative hide-scrollbar overflow-auto flex-col"><div><div class="flex flex-col gap-4 w-[400px]"><div class="bg-[#171717] dark:bg-[#ededed] h-64 w-64"></div><div class="bg-[#171717] dark:bg-[#ededed] h-64 w-64"></div></div></div></div><div class="absolute left-0 right-0 w-full h-10 bg-gradient-to-b from-white dark:from-black/75 to-white/0 duration-300 -top-10"></div><div class="absolute left-0 right-0 w-full h-10 bg-gradient-to-t from-white dark:from-black/75 to-white/0 duration-300 bottom-0"></div><div class="absolute top-0 bottom-0 w-10 h-full bg-gradient-to-r from-white dark:from-black/75 to-white/0 duration-300 -left-10"></div><div class="absolute top-0 bottom-0 w-10 h-full bg-gradient-to-l from-white dark:from-black/75 to-white/0 duration-300 -right-10"></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
