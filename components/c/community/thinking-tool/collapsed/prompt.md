# Build Thinking Tool in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Thinking Tool screenshot](screenshot.png)

## Component

- Author group: `community`
- Component: `thinking-tool`
- Variant: `collapsed`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: BuilderStudio
- Component slug: thinking-tool
- Demo slug: collapsed
- Title: thinking-tool
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
<div id="root"><div class="flex items-center justify-center w-full min-h-screen bg-background p-8 overflow-hidden"><div class="w-fit"><div class="flex flex-col gap-2 w-full"><button type="button" aria-expanded="false" class="group flex items-center max-w-full select-none gap-1 rounded-[6px] bg-transparent border-0 p-0 m-0 text-left cursor-pointer"><div class="flex items-center gap-2 min-w-0 text-sm text-neutral-500 dark:text-neutral-400"><span class="font-[450] whitespace-nowrap shrink-0">Thought</span></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-chevron-right shrink-0 text-neutral-500 dark:text-neutral-400 transition-transform duration-150 ease-out size-3 rotate-0"><path d="M9 6l6 6l-6 6"></path></svg></button></div></div></div></div>
```

## Reference source files

No reference source files were available.
