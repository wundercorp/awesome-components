# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/shugar/book/width
- Registry URL: https://21st.dev/r/shugar/book
- Author: shugar
- Component slug: book
- Demo slug: width
- Title: book
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/shugar/book with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/shugar__book__width.html
- Local screenshot file: generated-21st-prompts/screenshots/shugar__book__width.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex gap-8"><div class="inline-block w-fit" style="perspective: 900px;"><div class="aspect-[49/60] w-fit relative rotate-0 duration-[250ms] book-rotate" style="transform-style: preserve-3d; container-type: inline-size; min-width: 300px;"><div class="flex flex-col h-full rounded-l-md rounded-r overflow-hidden bg-background-200 shadow-book translate-x-0 relative after:absolute after:border after:border-gray-alpha-400 after:w-full after:h-full after:shadow-book-border after:rounded-l-md after:rounded-r" style="width: 300px;"><div class="w-full relative overflow-hidden flex-1" style="background: var(--ds-amber-600);"><div class="absolute h-full w-[8.2%] mix-blend-overlay" style="background: var(--ds-book-bind);"></div></div><div class="relative flex-1 bg-book-gradient"><div class="absolute h-full w-[8.2%] opacity-20" style="background: var(--ds-book-bind);"></div><div class="flex flex-col w-full p-[6.1%] pl-[14.3%] justify-between" style="container-type: inline-size; gap: calc(36.7347px);"><span class="leading-[1.25em] tracking-[-.02em] text-balance font-semibold text-[10.5cqw]" style="color: var(--ds-gray-1000);">The user experience of the Frontend Cloud</span><svg class="scale-75 -ml-1 -mb-1" height="24" width="24" style="fill: var(--ds-gray-1000);"><path d="M21,21H3L12,3Z"></path></svg></div></div></div><div class="h-[calc(100%_-_2_*_3px)] w-[calc(29cqw_-_2px)] absolute top-[3px]" style="background: linear-gradient(90deg, rgb(234, 234, 234), transparent 70%), linear-gradient(rgb(255, 255, 255), rgb(250, 250, 250)); transform: translateX(calc(-14.5cqw + 297px)) rotateY(90deg) translateX(calc(14.5cqw));"></div><div class="bg-gray-200 absolute left-0 top-0 rounded-l-md rounded-r h-full" style="transform: translateZ(calc(-29cqw)); width: 300px;"></div></div></div><div class="inline-block w-fit" style="perspective: 900px;"><div class="aspect-[49/60] w-fit relative rotate-0 duration-[250ms] book-rotate" style="transform-style: preserve-3d; container-type: inline-size; min-width: 200px;"><div class="flex flex-col h-full rounded-l-md rounded-r overflow-hidden bg-background-200 shadow-book translate-x-0 relative after:absolute after:border after:border-gray-alpha-400 after:w-full after:h-full after:shadow-book-border after:rounded-l-md after:rounded-r" style="width: 200px;"><div class="w-full relative overflow-hidden flex-1" style="background: var(--ds-amber-600);"><div class="absolute h-full w-[8.2%] mix-blend-overlay" style="background: var(--ds-book-bind);"></div></div><div class="relative flex-1 bg-book-gradient"><div class="absolute h-full w-[8.2%] opacity-20" style="background: var(--ds-book-bind);"></div><div class="flex flex-col w-full p-[6.1%] pl-[14.3%] justify-between" style="container-type: inline-size; gap: calc(24.4898px);"><span class="leading-[1.25em] tracking-[-.02em] text-balance font-semibold text-[10.5cqw]" style="color: var(--ds-gray-1000);">The user experience of the Frontend Cloud</span><svg class="scale-75 -ml-1 -mb-1" height="24" width="24" style="fill: var(--ds-gray-1000);"><path d="M21,21H3L12,3Z"></path></svg></div></div></div><div class="h-[calc(100%_-_2_*_3px)] w-[calc(29cqw_-_2px)] absolute top-[3px]" style="background: linear-gradient(90deg, rgb(234, 234, 234), transparent 70%), linear-gradient(rgb(255, 255, 255), rgb(250, 250, 250)); transform: translateX(calc(-14.5cqw + 197px)) rotateY(90deg) translateX(calc(14.5cqw));"></div><div class="bg-gray-200 absolute left-0 top-0 rounded-l-md rounded-r h-full" style="transform: translateZ(calc(-29cqw)); width: 200px;"></div></div></div><div class="inline-block w-fit" style="perspective: 900px;"><div class="aspect-[49/60] w-fit relative rotate-0 duration-[250ms] book-rotate" style="transform-style: preserve-3d; container-type: inline-size; min-width: 150px;"><div class="flex flex-col h-full rounded-l-md rounded-r overflow-hidden bg-background-200 shadow-book translate-x-0 relative after:absolute after:border after:border-gray-alpha-400 after:w-full after:h-full after:shadow-book-border after:rounded-l-md after:rounded-r" style="width: 150px;"><div class="w-full relative overflow-hidden flex-1" style="background: var(--ds-amber-600);"><div class="absolute h-full w-[8.2%] mix-blend-overlay" style="background: var(--ds-book-bind);"></div></div><div class="relative flex-1 bg-book-gradient"><div class="absolute h-full w-[8.2%] opacity-20" style="background: var(--ds-book-bind);"></div><div class="flex flex-col w-full p-[6.1%] pl-[14.3%] justify-between" style="container-type: inline-size; gap: calc(18.3673px);"><span class="leading-[1.25em] tracking-[-.02em] text-balance font-semibold text-[10.5cqw]" style="color: var(--ds-gray-1000);">The user experience of the Frontend Cloud</span><svg class="scale-75 -ml-1 -mb-1" height="24" width="24" style="fill: var(--ds-gray-1000);"><path d="M21,21H3L12,3Z"></path></svg></div></div></div><div class="h-[calc(100%_-_2_*_3px)] w-[calc(29cqw_-_2px)] absolute top-[3px]" style="background: linear-gradient(90deg, rgb(234, 234, 234), transparent 70%), linear-gradient(rgb(255, 255, 255), rgb(250, 250, 250)); transform: translateX(calc(-14.5cqw + 147px)) rotateY(90deg) translateX(calc(14.5cqw));"></div><div class="bg-gray-200 absolute left-0 top-0 rounded-l-md rounded-r h-full" style="transform: translateZ(calc(-29cqw)); width: 150px;"></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.