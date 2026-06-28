# Build Base Avatar 1 in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Base Avatar 1 screenshot](screenshot.png)

## Component

- Author group: `reui`
- Component: `base-avatar-1`
- Variant: `badge`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: reui
- Component slug: base-avatar-1
- Demo slug: badge
- Title: base-avatar-1
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-wrap gap-6"><span data-slot="avatar" class="relative flex h-10 w-10 shrink-0"><img alt="@reui" data-slot="avatar-image" class="aspect-square overflow-hidden h-full w-full rounded-full" src="https://avatars.githubusercontent.com/u/124599?v=4"><div data-slot="avatar-indicator" class="absolute flex size-6 items-center justify-center -end-2 -top-2"><span class="inline-flex items-center justify-center font-medium focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 [&amp;_svg]:-ms-px [&amp;_svg]:shrink-0 bg-primary text-primary-foreground px-[0.25rem] h-4 min-w-4 gap-1 text-[0.625rem] leading-[0.5rem] [&amp;_svg]:size-3 rounded-full border border-background" data-slot="badge">6</span></div></span><span data-slot="avatar" class="relative flex h-10 w-10 shrink-0"><img alt="@reui" data-slot="avatar-image" class="aspect-square overflow-hidden h-full w-full rounded-full" src="https://avatars.githubusercontent.com/u/124599?v=4"><div data-slot="avatar-indicator" class="absolute flex size-6 items-center justify-center -end-2 -bottom-2"><span class="inline-flex items-center justify-center font-medium focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 [&amp;_svg]:-ms-px [&amp;_svg]:shrink-0 bg-destructive text-destructive-foreground px-[0.25rem] h-4 min-w-4 gap-1 text-[0.625rem] leading-[0.5rem] [&amp;_svg]:size-3 rounded-full border border-background" data-slot="badge">3</span></div></span></div></div></div></div>
```

## Reference source files

No reference source files were available.
