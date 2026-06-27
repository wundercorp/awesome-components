# Build Lamp Tooltip in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Lamp Tooltip screenshot](screenshot.png)

## Component

- Author group: `fanoflix`
- Component: `lamp-tooltip`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: fanoflix
- Component slug: lamp-tooltip
- Demo slug: default
- Title: lamp-tooltip
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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="flex flex-wrap gap-10"><button data-state="closed" class="h-max bg-[#1f1f1f] text-sm font-medium p-1.5 px-3 border">Hover (Top)</button><button data-state="closed" class="h-max bg-[#1f1f1f] text-sm font-medium p-1.5 px-3 border">Hover (Bottom)</button><div class="flex flex-col gap-10"><button data-state="closed" class="h-max bg-[#1f1f1f] text-sm font-medium p-1.5 px-3 border">Hover (Right)</button><button data-state="closed" class="h-max bg-[#1f1f1f] text-sm font-medium p-1.5 px-3 border">Hover (Left)</button></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
