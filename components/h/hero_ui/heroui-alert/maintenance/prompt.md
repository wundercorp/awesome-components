# Build Heroui Alert in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Heroui Alert screenshot](screenshot.png)

## Component

- Author group: `hero_ui`
- Component: `heroui-alert`
- Variant: `maintenance`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: hero_ui
- Component slug: heroui-alert
- Demo slug: maintenance
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-xl"><div class="alert alert--warning" data-slot="alert-root"><div class="alert__indicator" data-slot="alert-indicator"><svg aria-hidden="true" aria-label="Warning icon" fill="none" height="16" role="presentation" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" data-slot="alert-default-icon"><path clip-rule="evenodd" d="M7.134 2.994L2.217 11.5a1 1 0 0 0 .866 1.5h9.834a1 1 0 0 0 .866-1.5L8.866 2.993a1 1 0 0 0-1.732 0m3.03-.75c-.962-1.665-3.366-1.665-4.329 0L.918 10.749c-.963 1.666.24 3.751 2.165 3.751h9.834c1.925 0 3.128-2.085 2.164-3.751zM8 5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 8 5m1 5.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0" fill="currentColor" fill-rule="evenodd"></path></svg></div><div class="alert__content" data-slot="alert-content"><p class="alert__title" data-slot="alert-title">Scheduled maintenance</p><span class="alert__description" data-slot="alert-description">Our services will be unavailable on Sunday, March 15th from 2:00 AM to 6:00 AM UTC for scheduled maintenance.</span></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
