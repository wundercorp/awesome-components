# Build 8bit Breadcrumb in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![8bit Breadcrumb screenshot](screenshot.png)

## Component

- Author group: `theorcdev`
- Component: `8bit-breadcrumb`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: theorcdev
- Component slug: 8bit-breadcrumb
- Demo slug: default
- Title: 8bit-breadcrumb
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex w-full min-h-screen items-center justify-center bg-background p-8 overflow-hidden"><div class="mb-4 flex items-center space-x-1 text-sm leading-none text-muted-foreground"><nav aria-label="breadcrumb" data-slot="breadcrumb" class="relative rounded-none border-none bg-background text-card-foreground retro"><ol data-slot="breadcrumb-list" class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5 retro"><li data-slot="breadcrumb-item" class="inline-flex items-center gap-1.5 retro"><a data-slot="breadcrumb-link" class="font-pixel" href="#">Home</a></li><li role="presentation" aria-hidden="true" data-slot="breadcrumb-separator" class="retro [&amp;&gt;svg]:size-7"><svg width="50" height="50" viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="0.25" color="" class="size-7" aria-label="chevron-right"><rect x="128" y="136" width="14" height="14" rx="1"></rect><rect x="112" y="152" width="14" height="14" rx="1"></rect><rect x="96" y="72" width="14" height="14" rx="1"></rect><rect x="96" y="168" width="14" height="14" rx="1"></rect><rect x="144" y="120" width="14" height="14" rx="1"></rect><rect x="128" y="104" width="14" height="14" rx="1"></rect><rect x="112" y="88" width="14" height="14" rx="1"></rect></svg></li><li data-slot="breadcrumb-item" class="inline-flex items-center gap-1.5 retro"><a data-slot="breadcrumb-link" class="font-pixel" href="#">Worlds</a></li><li role="presentation" aria-hidden="true" data-slot="breadcrumb-separator" class="retro [&amp;&gt;svg]:size-7"><svg width="50" height="50" viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="0.25" color="" class="size-7" aria-label="chevron-right"><rect x="128" y="136" width="14" height="14" rx="1"></rect><rect x="112" y="152" width="14" height="14" rx="1"></rect><rect x="96" y="72" width="14" height="14" rx="1"></rect><rect x="96" y="168" width="14" height="14" rx="1"></rect><rect x="144" y="120" width="14" height="14" rx="1"></rect><rect x="128" y="104" width="14" height="14" rx="1"></rect><rect x="112" y="88" width="14" height="14" rx="1"></rect></svg></li><li data-slot="breadcrumb-item" class="inline-flex items-center gap-1.5 retro"><span role="link" aria-disabled="true" aria-current="page" data-slot="breadcrumb-page" class="font-normal text-foreground font-pixel">Dungeon</span></li></ol></nav></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
