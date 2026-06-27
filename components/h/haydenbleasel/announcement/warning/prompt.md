# Build Announcement in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Announcement screenshot](screenshot.png)

## Component

- Author group: `haydenbleasel`
- Component: `announcement`
- Variant: `warning`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: haydenbleasel
- Component slug: announcement
- Demo slug: warning
- Title: announcement
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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="flex flex-col w-full h-screen items-center justify-center gap-4"><div class="inline-flex items-center border text-xs focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 max-w-full gap-2 rounded-full px-3 py-0.5 font-medium shadow-sm transition-all hover:shadow-md border-foreground/5 bg-orange-100 text-orange-700"><div class="-ml-2.5 shrink-0 truncate rounded-full px-2.5 py-1 text-xs bg-background/60">Warning</div><div class="flex items-center gap-1 truncate py-1">Approaching your limit<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right shrink-0 opacity-70" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
