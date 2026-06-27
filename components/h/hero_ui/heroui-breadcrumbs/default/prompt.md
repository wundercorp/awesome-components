# Build Heroui Breadcrumbs in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Heroui Breadcrumbs screenshot](screenshot.png)

## Component

- Author group: `hero_ui`
- Component: `heroui-breadcrumbs`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: hero_ui
- Component slug: heroui-breadcrumbs
- Demo slug: default
- Title: heroui-breadcrumbs
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
<div id="root"><div class="flex min-h-screen w-full items-center justify-center overflow-hidden bg-background p-8"><nav aria-label="Breadcrumbs" class="" data-slot="breadcrumbs"><ol class="flex flex-wrap items-center list-none rounded-sm" data-slot="breadcrumbs-list"><li class="flex items-center" data-slot="breadcrumbs-item"><a class="flex items-center gap-1 whitespace-nowrap rounded-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 text-sm text-zinc-500 dark:text-zinc-400 cursor-pointer hover:opacity-80 active:opacity-50 transition-opacity hover:underline underline-offset-4" data-slot="breadcrumbs-link" href="#">Home</a><span aria-hidden="true" class="px-1 text-zinc-400 dark:text-zinc-500 rtl:rotate-180" data-slot="breadcrumbs-separator"><svg aria-hidden="true" aria-label="Chevron right icon" fill="none" height="16" role="presentation" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M5.47 2.97a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06L9.44 8 5.47 4.03a.75.75 0 0 1 0-1.06Z" fill="currentColor" fill-rule="evenodd"></path></svg></span></li><li class="flex items-center" data-slot="breadcrumbs-item"><a class="flex items-center gap-1 whitespace-nowrap rounded-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 text-sm text-zinc-500 dark:text-zinc-400 cursor-pointer hover:opacity-80 active:opacity-50 transition-opacity hover:underline underline-offset-4" data-slot="breadcrumbs-link" href="#">Products</a><span aria-hidden="true" class="px-1 text-zinc-400 dark:text-zinc-500 rtl:rotate-180" data-slot="breadcrumbs-separator"><svg aria-hidden="true" aria-label="Chevron right icon" fill="none" height="16" role="presentation" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M5.47 2.97a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06L9.44 8 5.47 4.03a.75.75 0 0 1 0-1.06Z" fill="currentColor" fill-rule="evenodd"></path></svg></span></li><li class="flex items-center" data-slot="breadcrumbs-item"><a class="flex items-center gap-1 whitespace-nowrap rounded-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 text-sm text-zinc-500 dark:text-zinc-400 cursor-pointer hover:opacity-80 active:opacity-50 transition-opacity hover:underline underline-offset-4" data-slot="breadcrumbs-link" href="#">Electronics</a><span aria-hidden="true" class="px-1 text-zinc-400 dark:text-zinc-500 rtl:rotate-180" data-slot="breadcrumbs-separator"><svg aria-hidden="true" aria-label="Chevron right icon" fill="none" height="16" role="presentation" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M5.47 2.97a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06L9.44 8 5.47 4.03a.75.75 0 0 1 0-1.06Z" fill="currentColor" fill-rule="evenodd"></path></svg></span></li><li class="flex items-center" data-current="true" data-slot="breadcrumbs-item"><span aria-current="page" class="flex items-center gap-1 whitespace-nowrap rounded-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 text-sm text-zinc-950 dark:text-zinc-50 cursor-default transition-opacity" data-current="true" data-slot="breadcrumbs-link" role="link">Laptop</span></li></ol></nav></div></div>
```

## Reference source files

No reference source files were available.
