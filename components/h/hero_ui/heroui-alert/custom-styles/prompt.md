# Build Heroui Alert in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Heroui Alert screenshot](screenshot.png)

## Component

- Author group: `hero_ui`
- Component: `heroui-alert`
- Variant: `custom-styles`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: hero_ui
- Component slug: heroui-alert
- Demo slug: custom-styles
- Title: heroui-alert
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-xl"><div class="alert alert--accent rounded-2xl border-2 border-blue-500 bg-blue-50/70 shadow-lg dark:bg-blue-950/30" data-slot="alert-root"><div class="alert__indicator text-blue-600 dark:text-blue-300" data-slot="alert-indicator"><svg aria-hidden="true" aria-label="Info icon" fill="none" height="16" role="presentation" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" data-slot="alert-default-icon"><path clip-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1-9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-.25 3a.75.75 0 0 0-1.5 0V11a.75.75 0 0 0 1.5 0z" fill="currentColor" fill-rule="evenodd"></path></svg></div><div class="alert__content gap-1" data-slot="alert-content"><p class="alert__title text-lg font-bold" data-slot="alert-title">Custom Alert</p><span class="alert__description text-sm opacity-80" data-slot="alert-description">Tailwind classes can be passed to the alert parts, while HeroUI keeps the underlying BEM structure available for component-level overrides.</span></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
