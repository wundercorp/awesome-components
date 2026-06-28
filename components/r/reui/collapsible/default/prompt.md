# Build Collapsible in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Collapsible screenshot](screenshot.png)

## Component

- Author group: `reui`
- Component: `collapsible`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: reui
- Component slug: collapsible
- Demo slug: default
- Title: collapsible
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-[500px] text-foreground text-sm rounded-lg border border-border p-4">ReUI is a free toolkit offering complete CRUD (Create, Read, Update, Delete) examples for real-world projects use cases.<div data-state="closed" data-slot="collapsible"><div data-state="closed" id="radix-«r0»" hidden="" data-slot="collapsible-content" class="overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down" style=""></div><div class="text-end"><button data-slot="collapsible-trigger" class="cursor-pointer group focus-visible:outline-hidden inline-flex items-center justify-center has-data-[arrow=true]:justify-between whitespace-nowrap ring-offset-background transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-60 [&amp;_svg]:shrink-0 gap-1.25 text-xs [&amp;_svg:not([class*=size-])]:size-3.5 h-auto p-0 bg-transparent rounded-none hover:bg-transparent data-[state=open]:bg-transparent font-medium text-primary hover:text-primary/90 [&amp;_svg]:opacity-60 underline underline-offset-4 decoration-dashed decoration-1" type="button" aria-controls="radix-«r0»" aria-expanded="false" data-state="closed">Show more</button></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
