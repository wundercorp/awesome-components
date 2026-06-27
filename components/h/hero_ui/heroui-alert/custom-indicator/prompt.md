# Build Heroui Alert in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Heroui Alert screenshot](screenshot.png)

## Component

- Author group: `hero_ui`
- Component: `heroui-alert`
- Variant: `custom-indicator`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: hero_ui
- Component slug: heroui-alert
- Demo slug: custom-indicator
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-xl"><div class="alert alert--accent" data-slot="alert-root"><div class="alert__indicator" data-slot="alert-indicator"><span data-slot="spinner" class="spinner spinner--accent spinner--sm"><svg data-slot="spinner-icon" viewBox="0 0 24 24" aria-hidden="true" aria-label="Loading" role="presentation"><defs><linearGradient id="«data-slot-icon-def-1»-«r0»" x1="50%" x2="50%" y1="5.271%" y2="91.793%"><stop offset="0%" stop-color="currentColor"></stop><stop offset="100%" stop-color="currentColor" stop-opacity="0.55"></stop></linearGradient><linearGradient id="«data-slot-icon-def-2»-«r0»" x1="50%" x2="50%" y1="15.24%" y2="87.15%"><stop offset="0%" stop-color="currentColor" stop-opacity="0"></stop><stop offset="100%" stop-color="currentColor" stop-opacity="0.55"></stop></linearGradient></defs><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path d="M8.749.021a1.5 1.5 0 0 1 .497 2.958A7.5 7.5 0 0 0 3 10.375a7.5 7.5 0 0 0 7.5 7.5v3c-5.799 0-10.5-4.7-10.5-10.5C0 5.23 3.726.865 8.749.021" fill="url(#«data-slot-icon-def-1»-«r0»)" transform="translate(1.5 1.625)"></path><path d="M15.392 2.673a1.5 1.5 0 0 1 2.119-.115A10.48 10.48 0 0 1 21 10.375c0 5.8-4.701 10.5-10.5 10.5v-3a7.5 7.5 0 0 0 5.007-13.084a1.5 1.5 0 0 1-.115-2.118" fill="url(#«data-slot-icon-def-2»-«r0»)" transform="translate(1.5 1.625)"></path></g></svg></span></div><div class="alert__content" data-slot="alert-content"><p class="alert__title" data-slot="alert-title">Processing your request</p><span class="alert__description" data-slot="alert-description">Please wait while we sync your data. This may take a few moments.</span></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
