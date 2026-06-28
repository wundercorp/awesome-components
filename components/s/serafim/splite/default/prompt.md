# Build Splite in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Splite screenshot](screenshot.png)

## Component

- Author group: `serafim`
- Component: `splite`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: serafim
- Component slug: splite
- Demo slug: default
- Title: splite
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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="rounded-lg border text-card-foreground shadow-sm w-full h-[500px] bg-black/[0.96] relative overflow-hidden" style="position: relative; overflow: hidden;"><div class="pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_80%)] blur-xl transition-opacity duration-200 from-zinc-50 via-zinc-100 to-zinc-200 opacity-0 -top-40 left-0 md:left-60 md:-top-20" style="width: 200px; height: 200px; left: -100px; top: -100px;"></div><div class="flex h-full"><div class="flex-1 p-8 relative z-10 flex flex-col justify-center"><h1 class="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Interactive 3D</h1><p class="mt-4 text-neutral-300 max-w-lg">Bring your UI to life with beautiful 3D scenes. Create immersive experiences that capture attention and enhance your design.</p></div><div class="flex-1 relative"><div class="w-full h-full" style="width: 100%; height: 100%; overflow: hidden;"><canvas width="399" height="498" style="display: block; width: 100%; height: 100%;"></canvas></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
