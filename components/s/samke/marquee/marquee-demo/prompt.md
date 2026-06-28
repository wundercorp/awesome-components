# Build Marquee in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Marquee screenshot](screenshot.png)

## Component

- Author group: `samke`
- Component: `marquee`
- Variant: `marquee-demo`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: samke
- Component slug: marquee
- Demo slug: marquee-demo
- Title: marquee
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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-border bg-bw text-text font-base"><div class="animate-marquee whitespace-nowrap py-12"><span class="mx-4 text-4xl">Item 1</span><span class="mx-4 text-4xl">Item 2</span><span class="mx-4 text-4xl">Item 3</span><span class="mx-4 text-4xl">Item 4</span><span class="mx-4 text-4xl">Item 5</span><span class="mx-4 text-4xl">Item 6</span><span class="mx-4 text-4xl">Item 7</span><span class="mx-4 text-4xl">Item 8</span><span class="mx-4 text-4xl">Item 9</span><span class="mx-4 text-4xl">Item 10</span></div><div class="absolute top-0 animate-marquee2 whitespace-nowrap py-12"><span class="mx-4 text-4xl">Item 1</span><span class="mx-4 text-4xl">Item 2</span><span class="mx-4 text-4xl">Item 3</span><span class="mx-4 text-4xl">Item 4</span><span class="mx-4 text-4xl">Item 5</span><span class="mx-4 text-4xl">Item 6</span><span class="mx-4 text-4xl">Item 7</span><span class="mx-4 text-4xl">Item 8</span><span class="mx-4 text-4xl">Item 9</span><span class="mx-4 text-4xl">Item 10</span></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
