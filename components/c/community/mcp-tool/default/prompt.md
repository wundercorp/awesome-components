# Build Mcp Tool in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Mcp Tool screenshot](screenshot.png)

## Component

- Author group: `community`
- Component: `mcp-tool`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: BuilderStudio
- Component slug: mcp-tool
- Demo slug: default
- Title: mcp-tool
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
<div id="root"><div class="flex items-center justify-center w-full min-h-screen bg-background p-8 overflow-hidden"><div class="w-full max-w-md"><div class="flex flex-col gap-2 w-full"><button type="button" aria-expanded="true" class="group flex items-center max-w-full select-none gap-1 bg-transparent border-0 p-0 m-0 text-left cursor-pointer"><div class="flex items-center gap-2 min-w-0 text-sm text-neutral-500 dark:text-neutral-400"><span class="font-[450] whitespace-nowrap shrink-0">Listed Resources</span><span class="font-normal truncate min-w-0 flex-1 text-neutral-400 dark:text-neutral-500/80">query: resources</span></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-chevron-right shrink-0 text-neutral-500 dark:text-neutral-400 transition-transform duration-150 ease-out size-3 rotate-90"><path d="M9 6l6 6l-6 6"></path></svg></button><div class="rounded-[10px] overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950"><pre class="m-0 p-3 text-[12px] leading-[1.5] font-mono text-neutral-800 dark:text-neutral-200 overflow-x-auto whitespace-pre">[
  {
    "id": "res_1",
    "name": "Billing"
  },
  {
    "id": "res_2",
    "name": "Support"
  }
]</pre></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
