# Build Card Comment in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Card Comment screenshot](screenshot.png)

## Component

- Author group: `animata`
- Component: `card-comment`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: animata
- Component slug: card-comment
- Demo slug: default
- Title: card-comment
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex w-full h-screen justify-center items-center"><div class="storybook-fix group mx-auto h-48 w-full max-w-md rounded-xl bg-white p-4 shadow"><div class="relative flex h-40 flex-col space-y-4 overflow-hidden rounded-md bg-neutral-50 text-black shadow-sm hover:shadow-lg"><div class="h-fit p-4 transition-all group-hover:-translate-y-1/3"><h3 class="text-sm font-semibold">Alice commented</h3><div class="my-2 h-3 w-full animate-pulse rounded-md bg-neutral-300"></div><div class="my-2 h-3 w-2/5 animate-pulse rounded-md bg-neutral-300"></div></div><div class="w-full px-4 opacity-0 transition-all group-hover:-translate-y-1/3 group-hover:opacity-100"><div class="h-40 w-full rounded-md bg-green-500 p-4"><h3 class="text-sm font-semibold text-white">Bob replied</h3><div class="line my-2 h-3 w-full animate-pulse rounded-lg bg-white/50"></div><div class="line my-2 h-3 w-full animate-pulse rounded-lg bg-white/50"></div><div class="line2 my-2 h-3 w-2/5 animate-pulse rounded-lg bg-white/50"></div></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
