# Build Heroui Alert in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Heroui Alert screenshot](screenshot.png)

## Component

- Author group: `hero_ui`
- Component: `heroui-alert`
- Variant: `danger-steps`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: hero_ui
- Component slug: heroui-alert
- Demo slug: danger-steps
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-xl"><div class="alert alert--danger" data-slot="alert-root"><div class="alert__indicator" data-slot="alert-indicator"><svg aria-hidden="true" aria-label="Danger icon" fill="none" height="16" role="presentation" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" data-slot="alert-default-icon"><path clip-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1-4.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M8.75 5a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0z" fill="currentColor" fill-rule="evenodd"></path></svg></div><div class="alert__content" data-slot="alert-content"><p class="alert__title" data-slot="alert-title">Unable to connect to server</p><span class="alert__description" data-slot="alert-description">We're experiencing connection issues. Please try the following:<ul class="mt-2 list-inside list-disc space-y-1 text-sm"><li>Check your internet connection</li><li>Refresh the page</li><li>Clear your browser cache</li></ul></span><button data-slot="button" class="button button--sm button--danger mt-2 sm:hidden" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" id="react-aria9636025553-«r0»">Retry</button></div><button data-slot="button" class="button button--sm button--danger hidden sm:block" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" id="react-aria9636025553-«r2»">Retry</button></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
