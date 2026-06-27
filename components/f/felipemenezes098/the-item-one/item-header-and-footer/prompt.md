# Build The Item One in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![The Item One screenshot](screenshot.png)

## Component

- Author group: `felipemenezes098`
- Component: `the-item-one`
- Variant: `item-header-and-footer`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: felipemenezes098
- Component slug: the-item-one
- Demo slug: item-header-and-footer
- Title: the-item-one
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div data-slot="item" data-variant="outline" data-size="default" class="group/item flex items-center border text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border-border p-4 gap-4 w-full max-w-md"><div data-slot="item-header" class="flex basis-full items-center justify-between gap-2"><span data-slot="badge" class="inline-flex items-center justify-center border border-transparent font-medium focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 [&amp;_svg]:-ms-px [&amp;_svg]:shrink-0 bg-secondary text-secondary-foreground rounded-md px-[0.45rem] h-6 min-w-6 gap-1.5 text-xs [&amp;_svg]:size-3.5">Draft</span><span class="text-muted-foreground text-xs">#PR-482</span></div><div data-slot="item-content" class="flex flex-1 flex-col gap-1 [&amp;+[data-slot=item-content]]:flex-none"><div data-slot="item-title" class="flex w-fit items-center gap-2 text-sm leading-snug font-medium">Refactor billing module</div><p data-slot="item-description" class="text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance [&amp;&gt;a:hover]:text-primary [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4">Splits subscriptions and one-off charges into separate services.</p></div><div data-slot="item-footer" class="flex basis-full items-center justify-between gap-2"><span class="text-muted-foreground text-xs">Updated 2h ago</span><span class="text-muted-foreground text-xs">3 reviewers</span></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
