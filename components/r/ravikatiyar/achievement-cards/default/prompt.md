# Build Achievement Cards in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Achievement Cards screenshot](screenshot.png)

## Component

- Author group: `ravikatiyar`
- Component: `achievement-cards`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ravikatiyar
- Component slug: achievement-cards
- Demo slug: default
- Title: achievement-cards
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-6xl p-4" aria-label="Awards and Recognitions"><div class="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3 xl:grid-cols-4" role="list" style="opacity: 1;"><div role="listitem" style="opacity: 1; transform: none;"><div class="flex min-w-[240px] items-center gap-4 rounded-lg border bg-card p-4 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1"><div class="flex-shrink-0 text-foreground"><img alt="Paddle logo" class="h-8 w-8 object-contain dark:invert" src="https://svgl.app/library/clerk-light.svg"></div><div class="flex flex-col text-left"><p class="text-sm text-muted-foreground">1st Place</p><p class="font-semibold text-card-foreground">Clerk</p></div></div></div><div role="listitem" style="opacity: 1; transform: none;"><div class="flex min-w-[240px] items-center gap-4 rounded-lg border bg-card p-4 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1"><div class="flex-shrink-0 text-foreground"><img alt="Procure" class="h-8 w-8 object-contain" src="https://svgl.app/library/procure.svg"></div><div class="flex flex-col text-left"><p class="text-sm text-muted-foreground">People's Choice</p><p class="font-semibold text-card-foreground">Procure</p></div></div></div><div role="listitem" style="opacity: 1; transform: none;"><div class="flex min-w-[240px] items-center gap-4 rounded-lg border bg-card p-4 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1"><div class="flex-shrink-0 text-foreground"><img alt="Microsoft logo" class="h-8 w-8 object-contain" src="https://svgl.app/library/microsoft.svg"></div><div class="flex flex-col text-left"><p class="text-sm text-muted-foreground">Supported by</p><p class="font-semibold text-card-foreground">Microsoft for Startups</p></div></div></div><div role="listitem" style="opacity: 1; transform: none;"><div class="flex min-w-[240px] items-center gap-4 rounded-lg border bg-card p-4 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1"><div class="flex-shrink-0 text-foreground"><img alt="Product Hunt logo" class="h-8 w-8 object-contain" src="https://svgl.app/library/producthunt.svg"></div><div class="flex flex-col text-left"><p class="text-sm text-muted-foreground">Featured on</p><p class="font-semibold text-card-foreground">Product Hunt</p></div></div></div><div role="listitem" style="opacity: 1; transform: none;"><div class="flex min-w-[240px] items-center gap-4 rounded-lg border bg-card p-4 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1"><div class="flex-shrink-0 text-foreground"><img alt="Replicate logo" class="h-8 w-8 object-contain dark:invert" src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/replicate.svg"></div><div class="flex flex-col text-left"><p class="text-sm text-muted-foreground">Sponsorship from</p><p class="font-semibold text-card-foreground">Replicate</p></div></div></div><div role="listitem" style="opacity: 1; transform: none;"><div class="flex min-w-[240px] items-center gap-4 rounded-lg border bg-card p-4 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1"><div class="flex-shrink-0 text-foreground"><img alt="Apple" class="h-8 w-8 object-contain dark:invert" src="https://svgl.app/library/apple.svg"></div><div class="flex flex-col text-left"><p class="text-sm text-muted-foreground">2nd Runner up</p><p class="font-semibold text-card-foreground">Apple</p></div></div></div><div role="listitem" style="opacity: 1; transform: none;"><div class="flex min-w-[240px] items-center gap-4 rounded-lg border bg-card p-4 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1"><div class="flex-shrink-0 text-foreground"><img alt="crome" class="h-8 w-8 object-contain" src="https://svgl.app/library/chrome.svg"></div><div class="flex flex-col text-left"><p class="text-sm text-muted-foreground">2nd Runner up</p><p class="font-semibold text-card-foreground">Chrome</p></div></div></div><div role="listitem" style="opacity: 1; transform: none;"><div class="flex min-w-[240px] items-center gap-4 rounded-lg border bg-card p-4 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1"><div class="flex-shrink-0 text-foreground"><img alt="crome" class="h-8 w-8 object-contain" src="https://svgl.app/library/blender.svg"></div><div class="flex flex-col text-left"><p class="text-sm text-muted-foreground">Top 10 Startup</p><p class="font-semibold text-card-foreground">Blender</p></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
