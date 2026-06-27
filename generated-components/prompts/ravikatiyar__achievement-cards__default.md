# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ravikatiyar/achievement-cards/default
- Registry URL: https://21st.dev/r/ravikatiyar/achievement-cards
- Author: ravikatiyar
- Component slug: achievement-cards
- Demo slug: default
- Title: achievement-cards
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ravikatiyar/achievement-cards with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ravikatiyar__achievement-cards__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ravikatiyar__achievement-cards__default.png

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

No registry metadata available.

## Rendered DOM snapshot

This is the rendered demo HTML extracted from the live preview. Use it to verify structure, class names, visible content, and layout.

```html
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-6xl p-4" aria-label="Awards and Recognitions"><div class="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3 xl:grid-cols-4" role="list" style="opacity: 1;"><div role="listitem" style="opacity: 1; transform: none;"><div class="flex min-w-[240px] items-center gap-4 rounded-lg border bg-card p-4 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1"><div class="flex-shrink-0 text-foreground"><img alt="Paddle logo" class="h-8 w-8 object-contain dark:invert" src="https://svgl.app/library/clerk-light.svg"></div><div class="flex flex-col text-left"><p class="text-sm text-muted-foreground">1st Place</p><p class="font-semibold text-card-foreground">Clerk</p></div></div></div><div role="listitem" style="opacity: 1; transform: none;"><div class="flex min-w-[240px] items-center gap-4 rounded-lg border bg-card p-4 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1"><div class="flex-shrink-0 text-foreground"><img alt="Procure" class="h-8 w-8 object-contain" src="https://svgl.app/library/procure.svg"></div><div class="flex flex-col text-left"><p class="text-sm text-muted-foreground">People's Choice</p><p class="font-semibold text-card-foreground">Procure</p></div></div></div><div role="listitem" style="opacity: 1; transform: none;"><div class="flex min-w-[240px] items-center gap-4 rounded-lg border bg-card p-4 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1"><div class="flex-shrink-0 text-foreground"><img alt="Microsoft logo" class="h-8 w-8 object-contain" src="https://svgl.app/library/microsoft.svg"></div><div class="flex flex-col text-left"><p class="text-sm text-muted-foreground">Supported by</p><p class="font-semibold text-card-foreground">Microsoft for Startups</p></div></div></div><div role="listitem" style="opacity: 1; transform: none;"><div class="flex min-w-[240px] items-center gap-4 rounded-lg border bg-card p-4 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1"><div class="flex-shrink-0 text-foreground"><img alt="Product Hunt logo" class="h-8 w-8 object-contain" src="https://svgl.app/library/producthunt.svg"></div><div class="flex flex-col text-left"><p class="text-sm text-muted-foreground">Featured on</p><p class="font-semibold text-card-foreground">Product Hunt</p></div></div></div><div role="listitem" style="opacity: 1; transform: none;"><div class="flex min-w-[240px] items-center gap-4 rounded-lg border bg-card p-4 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1"><div class="flex-shrink-0 text-foreground"><img alt="Replicate logo" class="h-8 w-8 object-contain dark:invert" src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/replicate.svg"></div><div class="flex flex-col text-left"><p class="text-sm text-muted-foreground">Sponsorship from</p><p class="font-semibold text-card-foreground">Replicate</p></div></div></div><div role="listitem" style="opacity: 1; transform: none;"><div class="flex min-w-[240px] items-center gap-4 rounded-lg border bg-card p-4 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1"><div class="flex-shrink-0 text-foreground"><img alt="Apple" class="h-8 w-8 object-contain dark:invert" src="https://svgl.app/library/apple.svg"></div><div class="flex flex-col text-left"><p class="text-sm text-muted-foreground">2nd Runner up</p><p class="font-semibold text-card-foreground">Apple</p></div></div></div><div role="listitem" style="opacity: 1; transform: none;"><div class="flex min-w-[240px] items-center gap-4 rounded-lg border bg-card p-4 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1"><div class="flex-shrink-0 text-foreground"><img alt="crome" class="h-8 w-8 object-contain" src="https://svgl.app/library/chrome.svg"></div><div class="flex flex-col text-left"><p class="text-sm text-muted-foreground">2nd Runner up</p><p class="font-semibold text-card-foreground">Chrome</p></div></div></div><div role="listitem" style="opacity: 1; transform: none;"><div class="flex min-w-[240px] items-center gap-4 rounded-lg border bg-card p-4 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1"><div class="flex-shrink-0 text-foreground"><img alt="crome" class="h-8 w-8 object-contain" src="https://svgl.app/library/blender.svg"></div><div class="flex flex-col text-left"><p class="text-sm text-muted-foreground">Top 10 Startup</p><p class="font-semibold text-card-foreground">Blender</p></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.