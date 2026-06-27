# Build Vortex in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Vortex screenshot](screenshot.png)

## Component

- Author group: `kain0127`
- Component: `vortex`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: Kain0127
- Component slug: vortex
- Demo slug: default
- Title: vortex
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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="w-full h-screen bg-black"><div class="relative w-full h-screen bg-black"><canvas class="w-full h-full" width="992" height="944"></canvas><div class="fixed left-1/2 -translate-x-1/2 text-base font-mono text-[#666666] text-center" style="top: calc(50% + 220px);"><textarea class="bg-transparent focus:outline-none px-2 w-[400px] text-center resize-none h-[48px] leading-6 overflow-hidden" rows="2" spellcheck="false">sin(x*cos(t) - y*sin(t))*8 * (1-max(abs(x), abs(y)))</textarea></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
