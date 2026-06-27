# Build Alert in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Alert screenshot](screenshot.png)

## Component

- Author group: `coss.com`
- Component: `alert`
- Variant: `with-icon`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: coss.com
- Component slug: alert
- Demo slug: with-icon
- Title: alert
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center w-full min-h-screen bg-background p-8"><div class="w-full max-w-xl"><div class="relative grid w-full items-start gap-x-2 gap-y-0.5 rounded-xl border px-3.5 py-3 text-sm has-[&gt;svg]:grid-cols-[calc(var(--spacing)*4)_1fr] [&amp;&gt;svg]:h-[1lh] [&amp;&gt;svg]:w-4 bg-transparent text-card-foreground dark:bg-muted/30 [&amp;&gt;svg]:text-muted-foreground" data-slot="alert" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-terminal size-4" aria-hidden="true"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg><div class="font-medium [svg~&amp;]:col-start-2" data-slot="alert-title">Heads up!</div><div class="flex flex-col gap-2.5 text-muted-foreground [svg~&amp;]:col-start-2" data-slot="alert-description">You can add components and dependencies to your app using the CLI.</div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
