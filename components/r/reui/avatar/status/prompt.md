# Build Avatar in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Avatar screenshot](screenshot.png)

## Component

- Author group: `reui`
- Component: `avatar`
- Variant: `status`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: reui
- Component slug: avatar
- Demo slug: status
- Title: avatar
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-wrap gap-6"><span data-slot="avatar" class="relative flex shrink-0 size-10"><div class="relative overflow-hidden rounded-full"><img data-slot="avatar-image" class="aspect-square h-full w-full" alt="@reui" src="https://avatars.githubusercontent.com/u/124599?v=4"></div><div data-slot="avatar-indicator" class="absolute flex size-6 items-center justify-center -end-1.5 -top-1.5"><div data-slot="avatar-status" class="flex items-center rounded-full border-2 border-background bg-green-600 size-2.5"></div></div></span><span data-slot="avatar" class="relative flex shrink-0 size-10"><div class="relative overflow-hidden rounded-full"><img data-slot="avatar-image" class="aspect-square h-full w-full" alt="@reui" src="https://avatars.githubusercontent.com/u/124599?v=4"></div><div data-slot="avatar-indicator" class="absolute flex size-6 items-center justify-center -end-1.5 -top-1.5"><div data-slot="avatar-status" class="flex items-center rounded-full border-2 border-background bg-zinc-600 dark:bg-zinc-300 size-2.5"></div></div></span><span data-slot="avatar" class="relative flex shrink-0 size-10"><div class="relative overflow-hidden rounded-full"><img data-slot="avatar-image" class="aspect-square h-full w-full" alt="@reui" src="https://avatars.githubusercontent.com/u/124599?v=4"></div><div data-slot="avatar-indicator" class="absolute flex size-6 items-center justify-center -end-1.5 -bottom-1.5"><div data-slot="avatar-status" class="flex items-center rounded-full border-2 border-background bg-yellow-600 size-2.5"></div></div></span><span data-slot="avatar" class="relative flex shrink-0 size-10"><div class="relative overflow-hidden rounded-full"><img data-slot="avatar-image" class="aspect-square h-full w-full" alt="@reui" src="https://avatars.githubusercontent.com/u/124599?v=4"></div><div data-slot="avatar-indicator" class="absolute flex size-6 items-center justify-center -end-1.5 -bottom-1.5"><div data-slot="avatar-status" class="flex items-center rounded-full border-2 border-background bg-blue-600 size-2.5"></div></div></span></div></div></div></div>
```

## Reference source files

No reference source files were available.
