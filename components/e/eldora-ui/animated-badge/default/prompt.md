# Build Animated Badge in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Animated Badge screenshot](screenshot.png)

## Component

- Author group: `eldora-ui`
- Component: `animated-badge`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: eldora-ui
- Component slug: animated-badge
- Demo slug: default
- Title: animated-badge
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><a href="/docs/components/animated-badge" class="inline-block"><div class="group relative flex max-w-fit items-center justify-center gap-3 rounded-full border border-neutral-300 bg-white px-4 py-1.5 text-neutral-700 transition-colors dark:border-neutral-700/80 dark:bg-black dark:text-zinc-300" style="opacity: 1; filter: blur(0px); transform: none;"><div class="pointer-events-none absolute inset-x-0 bottom-full h-20 w-[165px]"><svg class="h-full w-full" width="100%" height="100%" viewBox="0 0 50 50" fill="none"><g mask="url(#ml-mask-1)"><circle class="multiline ml-light-1" cx="0" cy="0" r="20" fill="url(#ml-white-grad)"></circle></g><defs><mask id="ml-mask-1"><path d="M 69 49.8 h -30 q -3 0 -3 -3 v -13 q 0 -3 -3 -3 h -23 q -3 0 -3 -3 v -13 q 0 -3 -3 -3 h -30" stroke-width="0.6" stroke="white"></path></mask><radialGradient id="ml-white-grad" fx="1"><stop offset="0%" stop-color="#22d3ee"></stop><stop offset="20%" stop-color="#22d3ee"></stop><stop offset="100%" stop-color="transparent"></stop></radialGradient></defs></svg></div><div class="relative flex h-1 w-1 items-center justify-center rounded-full" style="background-color: rgba(34, 211, 238, 0.4);"><div class="flex h-2 w-2 animate-ping items-center justify-center rounded-full" style="background-color: rgb(34, 211, 238);"><div class="flex h-2 w-2 animate-ping items-center justify-center rounded-full" style="background-color: rgb(34, 211, 238);"></div></div><div class="absolute top-1/2 left-1/2 flex h-1 w-1 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full" style="background-color: rgba(34, 211, 238, 0.8);"></div></div><div class="mx-2 h-4 w-px bg-neutral-300 dark:bg-neutral-600/80"></div><span class="bg-clip-text text-xs font-medium">Introducing Eldora ui</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right ml-1 h-3.5 w-3.5 text-neutral-400 transition-transform duration-200 group-hover:translate-x-0.5 dark:text-neutral-500" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></div></a><style>    
.multiline {
  offset-anchor: 10px 0px;
  animation: multiline-animation-path;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 3s;
}

.ml-light-1 {
  offset-path: path(
    "M 69 49.8 h -30 q -3 0 -3 -3 v -13 q 0 -3 -3 -3 h -23 q -3 0 -3 -3 v -13 q 0 -3 -3 -3 h -50"
  );
}

@keyframes multiline-animation-path {
  0% {
    offset-distance: 0%;
  }
  50% {
    offset-distance: 100%;
  }
  100% {
    offset-distance: 100%;
  }
}</style></div></div></div>
```

## Reference source files

No reference source files were available.
