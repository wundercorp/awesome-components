# Build New Button in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![New Button screenshot](screenshot.png)

## Component

- Author group: `edwinvakayil`
- Component: `new-button`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: edwinvakayil
- Component slug: new-button
- Demo slug: default
- Title: new-button
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="mx-auto max-w-2xl space-y-3 text-center"><p class="text-balance text-lg font-medium leading-snug tracking-tight dark:text-neutral-100">When you are ready to ship.</p><p class="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-balance text-lg font-medium leading-snug tracking-tight dark:text-neutral-100"><span>Tap</span><span class="inline-flex translate-y-px align-middle"><button type="button" tabindex="0" class="relative inline-flex cursor-pointer touch-manipulation select-none items-center justify-center overflow-hidden rounded-lg font-medium transition-[background-color,color,filter] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[pressed=true]:brightness-95 bg-primary text-background hover:bg-primary/90" data-pressed="false" style="transform: none;"><span aria-hidden="true" class="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]"></span><span class="relative z-10 inline-flex items-center justify-center gap-2 whitespace-nowrap text-inherit [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 min-h-11 px-5 text-sm">Continue</span></button></span><span>to finish.</span></p></div></div></div></div>
```

## Reference source files

No reference source files were available.
