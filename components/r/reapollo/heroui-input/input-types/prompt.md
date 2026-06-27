# Build Heroui Input in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Heroui Input screenshot](screenshot.png)

## Component

- Author group: `reapollo`
- Component: `heroui-input`
- Variant: `input-types`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: reapollo
- Component slug: heroui-input
- Demo slug: input-types
- Title: heroui-input
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
<div id="root"><div class="w-screen heroui-preview-shell flex justify-center items-center"><div class="w-screen heroui-preview-shell flex justify-center items-center"><div class="flex w-80 flex-col gap-4"><div class="flex flex-col gap-1"><label class="label" data-slot="label" for="input-type-email">Email</label><input class="input input--primary" data-slot="input" id="input-type-email" placeholder="jane@example.com" data-rac="" type="email"></div><div class="flex flex-col gap-1"><label class="label" data-slot="label" for="input-type-number">Age</label><input class="input input--primary" data-slot="input" id="input-type-number" min="0" placeholder="30" data-rac="" type="number"></div><div class="flex flex-col gap-1"><label class="label" data-slot="label" for="input-type-password">Password</label><input class="input input--primary" data-slot="input" id="input-type-password" placeholder="••••••••" data-rac="" type="password"></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
