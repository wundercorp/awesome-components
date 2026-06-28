# Build Breadcramb in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Breadcramb screenshot](screenshot.png)

## Component

- Author group: `reui`
- Component: `breadcramb`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: reui
- Component slug: breadcramb
- Demo slug: default
- Title: breadcramb
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><nav data-slot="breadcrumb" aria-label="breadcrumb"><ol data-slot="breadcrumb-list" class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground"><li data-slot="breadcrumb-item" class="inline-flex items-center gap-1.5"><a data-slot="breadcrumb-link" class="transition-colors hover:text-foreground" href="/">Home</a></li><li data-slot="breadcrumb-separator" role="presentation" aria-hidden="true" class="[&amp;&gt;svg]:w-3.5 [&amp;&gt;svg]:h-3.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right rtl:rotate-180" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></li><li data-slot="breadcrumb-item" class="inline-flex items-center gap-1.5"><a href="/" data-slot="breadcrumb-link" class="transition-colors hover:text-foreground">Components</a></li><li data-slot="breadcrumb-separator" role="presentation" aria-hidden="true" class="[&amp;&gt;svg]:w-3.5 [&amp;&gt;svg]:h-3.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right rtl:rotate-180" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></li><li data-slot="breadcrumb-item" class="inline-flex items-center gap-1.5"><span data-slot="breadcrumb-page" role="link" aria-disabled="true" aria-current="page" class="font-normal text-foreground">Breadcrumb</span></li></ol></nav></div></div></div>
```

## Reference source files

No reference source files were available.
