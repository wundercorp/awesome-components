# Build Underline Animation in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Underline Animation screenshot](screenshot.png)

## Component

- Author group: `danielpetho`
- Component: `underline-animation`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: danielpetho
- Component slug: underline-animation
- Demo slug: default
- Title: underline-animation
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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="w-full h-full flex flex-col items-center justify-center bg-background"><div class="flex flex-row font-overusedGrotesk items-start text-[#0015ff] h-full py-36 uppercase space-x-8 text-sm sm:text-xl md:text-2xl lg:text-3xl"><div>Contact</div><ul class="flex flex-col space-y-1 h-full"><a href="#"><span class="relative inline-block cursor-pointer" style="--underline-height: 2.4000000000000004px; --underline-padding: 0.24px;"><span>LINKEDIN</span><div class="absolute left-1/2 bg-current -translate-x-1/2" style="height: var(--underline-height); bottom: calc(-1 * var(--underline-padding));"></div></span></a><a href="#"><span class="relative inline-block cursor-pointer" style="--underline-height: 2.4000000000000004px; --underline-padding: 0.24px;"><span>INSTAGRAM</span><span class="absolute bg-current w-0 right-0" style="height: var(--underline-height); bottom: calc(-1 * var(--underline-padding));"></span></span></a><a href="#"><span class="relative inline-block cursor-pointer" style="--underline-height: 2.4000000000000004px; --underline-padding: 0.24px;"><span>X (TWITTER)</span><span class="absolute bg-current w-0 left-0" style="height: var(--underline-height); bottom: calc(-1 * var(--underline-padding));"></span></span></a><div class="pt-12"><ul class="flex flex-col space-y-1 h-full"><a href="#"><span class="relative inline-block cursor-pointer" style="--underline-height: 2.4000000000000004px; --underline-padding: 0.24px;"><span class="sr-only">FANCY@FANCY.DEV</span><span aria-hidden="true">FANCY@FANCY.DEV</span><span class="absolute bg-current left-0" aria-hidden="true" style="height: var(--underline-height); bottom: calc(-1 * var(--underline-padding)); width: 100%;"></span></span></a><a href="#"><span class="relative inline-block cursor-pointer" style="--underline-height: 2.4000000000000004px; --underline-padding: 0.24px;"><span class="sr-only">HELLO@FANCY.DEV</span><span aria-hidden="true">HELLO@FANCY.DEV</span><span class="absolute bg-current right-0" aria-hidden="true" style="height: var(--underline-height); bottom: calc(-1 * var(--underline-padding)); width: 100%;"></span></span></a></ul></div></ul></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
