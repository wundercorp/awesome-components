# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hero_ui/heroui-breadcrumbs/custom-separator
- Registry URL: https://21st.dev/r/hero_ui/heroui-breadcrumbs
- Author: hero_ui
- Component slug: heroui-breadcrumbs
- Demo slug: custom-separator
- Title: heroui-breadcrumbs
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hero_ui/heroui-breadcrumbs with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hero_ui__heroui-breadcrumbs__custom-separator.html
- Local screenshot file: generated-21st-prompts/screenshots/hero_ui__heroui-breadcrumbs__custom-separator.png

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

No registry metadata available.

## Rendered DOM snapshot

This is the rendered demo HTML extracted from the live preview. Use it to verify structure, class names, visible content, and layout.

```html
<div id="root"><div class="flex min-h-screen w-full items-center justify-center overflow-hidden bg-background p-8"><nav aria-label="Breadcrumbs" class="" data-slot="breadcrumbs"><ol class="flex flex-wrap items-center list-none rounded-sm" data-slot="breadcrumbs-list"><li class="flex items-center" data-slot="breadcrumbs-item"><a class="flex items-center gap-1 whitespace-nowrap rounded-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 text-sm text-zinc-500 dark:text-zinc-400 cursor-pointer hover:opacity-80 active:opacity-50 transition-opacity hover:underline underline-offset-4" data-slot="breadcrumbs-link" href="#">Home</a><span aria-hidden="true" class="px-1 text-zinc-400 dark:text-zinc-500 rtl:rotate-180" data-slot="breadcrumbs-separator"><svg class="h-3.5 w-3.5 text-zinc-400 dark:text-zinc-500" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M249.3 235.8c10.2 12.6 9.5 31.1-2.2 42.8l-128 128c-9.2 9.2-22.9 11.9-34.9 6.9S64.5 396.9 64.5 384l0-256c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l128 128 2.2 2.4z" fill="currentColor"></path></svg></span></li><li class="flex items-center" data-slot="breadcrumbs-item"><a class="flex items-center gap-1 whitespace-nowrap rounded-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 text-sm text-zinc-500 dark:text-zinc-400 cursor-pointer hover:opacity-80 active:opacity-50 transition-opacity hover:underline underline-offset-4" data-slot="breadcrumbs-link" href="#">Products</a><span aria-hidden="true" class="px-1 text-zinc-400 dark:text-zinc-500 rtl:rotate-180" data-slot="breadcrumbs-separator"><svg class="h-3.5 w-3.5 text-zinc-400 dark:text-zinc-500" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M249.3 235.8c10.2 12.6 9.5 31.1-2.2 42.8l-128 128c-9.2 9.2-22.9 11.9-34.9 6.9S64.5 396.9 64.5 384l0-256c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l128 128 2.2 2.4z" fill="currentColor"></path></svg></span></li><li class="flex items-center" data-slot="breadcrumbs-item"><a class="flex items-center gap-1 whitespace-nowrap rounded-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 text-sm text-zinc-500 dark:text-zinc-400 cursor-pointer hover:opacity-80 active:opacity-50 transition-opacity hover:underline underline-offset-4" data-slot="breadcrumbs-link" href="#">Electronics</a><span aria-hidden="true" class="px-1 text-zinc-400 dark:text-zinc-500 rtl:rotate-180" data-slot="breadcrumbs-separator"><svg class="h-3.5 w-3.5 text-zinc-400 dark:text-zinc-500" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M249.3 235.8c10.2 12.6 9.5 31.1-2.2 42.8l-128 128c-9.2 9.2-22.9 11.9-34.9 6.9S64.5 396.9 64.5 384l0-256c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l128 128 2.2 2.4z" fill="currentColor"></path></svg></span></li><li class="flex items-center" data-current="true" data-slot="breadcrumbs-item"><span aria-current="page" class="flex items-center gap-1 whitespace-nowrap rounded-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 text-sm text-zinc-950 dark:text-zinc-50 cursor-default transition-opacity" data-current="true" data-slot="breadcrumbs-link" role="link">Laptop</span></li></ol></nav></div></div>
```

## Public registry source files

No public registry source files were available.