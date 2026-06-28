# Build Book in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Book screenshot](screenshot.png)

## Component

- Author group: `shugar`
- Component: `book`
- Variant: `variants`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: shugar
- Component slug: book
- Demo slug: variants
- Title: book
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex gap-8"><div class="inline-block w-fit" style="perspective: 900px;"><div class="aspect-[49/60] w-fit relative rotate-0 duration-[250ms] book-rotate" style="transform-style: preserve-3d; container-type: inline-size; min-width: 196px;"><div class="flex flex-col h-full rounded-l-md rounded-r overflow-hidden bg-background-200 shadow-book translate-x-0 relative after:absolute after:border after:border-gray-alpha-400 after:w-full after:h-full after:shadow-book-border after:rounded-l-md after:rounded-r" style="width: 196px;"><div class="w-full relative overflow-hidden" style="background: var(--ds-background-200);"><div class="absolute h-full w-[8.2%] mix-blend-overlay" style="background: var(--ds-book-bind);"></div></div><div class="relative flex-1 bg-book-gradient"><div class="absolute h-full w-[8.2%] opacity-20" style="background: var(--ds-book-bind);"></div><div class="flex flex-col w-full p-[6.1%] pl-[14.3%] gap-4" style="container-type: inline-size; gap: calc(24px);"><span class="leading-[1.25em] tracking-[-.02em] text-balance font-semibold text-[12cqw]" style="color: var(--ds-gray-1000);">The user experience of the Frontend Cloud</span><svg fill="none" height="56" viewBox="0 0 36 56" width="36" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.03113 28.0005C6.26017 23.1765 11.7592 20.0005 18 20.0005C24.2409 20.0005 29.7399 23.1765 32.9689 28.0005C29.7399 32.8244 24.2409 36.0005 18 36.0005C11.7592 36.0005 6.26017 32.8244 3.03113 28.0005Z" fill="#0070F3" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M32.9691 28.0012C34.8835 25.1411 36 21.7017 36 18.0015C36 8.06034 27.9411 0.00146484 18 0.00146484C8.05887 0.00146484 0 8.06034 0 18.0015C0 21.7017 1.11648 25.1411 3.03094 28.0012C6.25996 23.1771 11.7591 20.001 18 20.001C24.2409 20.001 29.74 23.1771 32.9691 28.0012Z" fill="#45DEC4" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M32.9692 28.0005C29.7402 32.8247 24.241 36.001 18 36.001C11.759 36.001 6.25977 32.8247 3.03077 28.0005C1.11642 30.8606 0 34.2999 0 38C0 47.9411 8.05887 56 18 56C27.9411 56 36 47.9411 36 38C36 34.2999 34.8836 30.8606 32.9692 28.0005Z" fill="#E5484D" fill-rule="evenodd"></path></svg></div></div></div><div class="h-[calc(100%_-_2_*_3px)] w-[calc(29cqw_-_2px)] absolute top-[3px]" style="background: linear-gradient(90deg, rgb(234, 234, 234), transparent 70%), linear-gradient(rgb(255, 255, 255), rgb(250, 250, 250)); transform: translateX(calc(-14.5cqw + 193px)) rotateY(90deg) translateX(calc(14.5cqw));"></div><div class="bg-gray-200 absolute left-0 top-0 rounded-l-md rounded-r h-full" style="transform: translateZ(calc(-29cqw)); width: 196px;"></div></div></div><div class="inline-block w-fit" style="perspective: 900px;"><div class="aspect-[49/60] w-fit relative rotate-0 duration-[250ms] book-rotate" style="transform-style: preserve-3d; container-type: inline-size; min-width: 196px;"><div class="flex flex-col h-full rounded-l-md rounded-r overflow-hidden bg-background-200 shadow-book translate-x-0 relative after:absolute after:border after:border-gray-alpha-400 after:w-full after:h-full after:shadow-book-border after:rounded-l-md after:rounded-r" style="width: 196px;"><div class="w-full relative overflow-hidden flex-1" style="background: var(--ds-amber-600);"><div class="absolute h-full w-[8.2%] mix-blend-overlay" style="background: var(--ds-book-bind);"></div></div><div class="relative flex-1 bg-book-gradient"><div class="absolute h-full w-[8.2%] opacity-20" style="background: var(--ds-book-bind);"></div><div class="flex flex-col w-full p-[6.1%] pl-[14.3%] justify-between" style="container-type: inline-size; gap: calc(24px);"><span class="leading-[1.25em] tracking-[-.02em] text-balance font-semibold text-[10.5cqw]" style="color: var(--ds-gray-1000);">The user experience of the Frontend Cloud</span><svg class="scale-75 -ml-1 -mb-1" height="24" width="24" style="fill: var(--ds-gray-1000);"><path d="M21,21H3L12,3Z"></path></svg></div></div></div><div class="h-[calc(100%_-_2_*_3px)] w-[calc(29cqw_-_2px)] absolute top-[3px]" style="background: linear-gradient(90deg, rgb(234, 234, 234), transparent 70%), linear-gradient(rgb(255, 255, 255), rgb(250, 250, 250)); transform: translateX(calc(-14.5cqw + 193px)) rotateY(90deg) translateX(calc(14.5cqw));"></div><div class="bg-gray-200 absolute left-0 top-0 rounded-l-md rounded-r h-full" style="transform: translateZ(calc(-29cqw)); width: 196px;"></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
