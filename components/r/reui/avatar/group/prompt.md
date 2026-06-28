# Build Avatar in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Avatar screenshot](screenshot.png)

## Component

- Author group: `reui`
- Component: `avatar`
- Variant: `group`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: reui
- Component slug: avatar
- Demo slug: group
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex -space-x-2"><span data-slot="avatar" class="relative flex shrink-0 size-10"><div class="relative overflow-hidden rounded-full border-2 border-background hover:z-10"><img data-slot="avatar-image" class="aspect-square h-full w-full" alt="@reui" src="https://avatars.githubusercontent.com/u/124599?v=4"></div></span><span data-slot="avatar" class="relative flex shrink-0 size-10"><div class="relative overflow-hidden rounded-full border-2 border-background hover:z-10"><img data-slot="avatar-image" class="aspect-square h-full w-full" alt="@reui" src="https://avatars.githubusercontent.com/u/124599?v=4"></div></span><span data-slot="avatar" class="relative flex shrink-0 size-10"><div class="relative overflow-hidden rounded-full border-2 border-background hover:z-10"><img data-slot="avatar-image" class="aspect-square h-full w-full" alt="@reui" src="https://avatars.githubusercontent.com/u/124599?v=4"></div></span><span data-slot="avatar" class="relative flex shrink-0 size-10"><div class="relative overflow-hidden rounded-full border-2 border-background hover:z-10"><img data-slot="avatar-image" class="aspect-square h-full w-full" alt="@reui" src="https://avatars.githubusercontent.com/u/124599?v=4"></div></span><button data-slot="button" class="cursor-pointer group focus-visible:outline-hidden inline-flex items-center justify-center has-data-[arrow=true]:justify-between whitespace-nowrap font-medium ring-offset-background transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-60 [&amp;_svg]:shrink-0 bg-secondary text-secondary-foreground hover:bg-secondary/90 data-[state=open]:bg-secondary/90 gap-1.5 text-[0.8125rem] leading-(--text-sm--line-height) rounded-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shadow-xs shadow-black/5 p-0 [&amp;_svg:not([class*=size-])]:size-4 relative size-10 border-2 border-background hover:z-10">+7</button></div></div></div></div>
```

## Reference source files

No reference source files were available.
