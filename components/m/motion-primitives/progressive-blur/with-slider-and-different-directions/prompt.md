# Build Progressive Blur in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Progressive Blur screenshot](screenshot.png)

## Component

- Author group: `motion-primitives`
- Component: `progressive-blur`
- Variant: `with-slider-and-different-directions`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: motion-primitives
- Component slug: progressive-blur
- Demo slug: with-slider-and-different-directions
- Title: progressive-blur
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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="relative h-[350px] w-full overflow-hidden"><div class="overflow-hidden flex h-full w-full items-center"><div class="flex w-max" style="gap: 16px; flex-direction: row; transform: translateX(-243.13px);"><div class="w-32 text-center text-4xl font-[450] text-black dark:text-white">1</div><div class="w-32 text-center text-4xl font-[450] text-black dark:text-white">2</div><div class="w-32 text-center text-4xl font-[450] text-black dark:text-white">3</div><div class="w-32 text-center text-4xl font-[450] text-black dark:text-white">4</div><div class="w-32 text-center text-4xl font-[450] text-black dark:text-white">5</div><div class="w-32 text-center text-4xl font-[450] text-black dark:text-white">6</div><div class="w-32 text-center text-4xl font-[450] text-black dark:text-white">7</div><div class="w-32 text-center text-4xl font-[450] text-black dark:text-white">8</div><div class="w-32 text-center text-4xl font-[450] text-black dark:text-white">9</div><div class="w-32 text-center text-4xl font-[450] text-black dark:text-white">1</div><div class="w-32 text-center text-4xl font-[450] text-black dark:text-white">2</div><div class="w-32 text-center text-4xl font-[450] text-black dark:text-white">3</div><div class="w-32 text-center text-4xl font-[450] text-black dark:text-white">4</div><div class="w-32 text-center text-4xl font-[450] text-black dark:text-white">5</div><div class="w-32 text-center text-4xl font-[450] text-black dark:text-white">6</div><div class="w-32 text-center text-4xl font-[450] text-black dark:text-white">7</div><div class="w-32 text-center text-4xl font-[450] text-black dark:text-white">8</div><div class="w-32 text-center text-4xl font-[450] text-black dark:text-white">9</div></div></div><div class="pointer-events-none absolute top-0 left-0 h-full w-[200px]"><div class="pointer-events-none absolute inset-0 rounded-[inherit]" style="mask-image: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 11.1111%, rgb(255, 255, 255) 22.2222%, rgba(255, 255, 255, 0) 33.3333%); backdrop-filter: blur(0px);"></div><div class="pointer-events-none absolute inset-0 rounded-[inherit]" style="mask-image: linear-gradient(270deg, rgba(255, 255, 255, 0) 11.1111%, rgb(255, 255, 255) 22.2222%, rgb(255, 255, 255) 33.3333%, rgba(255, 255, 255, 0) 44.4444%); backdrop-filter: blur(1px);"></div><div class="pointer-events-none absolute inset-0 rounded-[inherit]" style="mask-image: linear-gradient(270deg, rgba(255, 255, 255, 0) 22.2222%, rgb(255, 255, 255) 33.3333%, rgb(255, 255, 255) 44.4444%, rgba(255, 255, 255, 0) 55.5556%); backdrop-filter: blur(2px);"></div><div class="pointer-events-none absolute inset-0 rounded-[inherit]" style="mask-image: linear-gradient(270deg, rgba(255, 255, 255, 0) 33.3333%, rgb(255, 255, 255) 44.4444%, rgb(255, 255, 255) 55.5556%, rgba(255, 255, 255, 0) 66.6667%); backdrop-filter: blur(3px);"></div><div class="pointer-events-none absolute inset-0 rounded-[inherit]" style="mask-image: linear-gradient(270deg, rgba(255, 255, 255, 0) 44.4444%, rgb(255, 255, 255) 55.5556%, rgb(255, 255, 255) 66.6667%, rgba(255, 255, 255, 0) 77.7778%); backdrop-filter: blur(4px);"></div><div class="pointer-events-none absolute inset-0 rounded-[inherit]" style="mask-image: linear-gradient(270deg, rgba(255, 255, 255, 0) 55.5556%, rgb(255, 255, 255) 66.6667%, rgb(255, 255, 255) 77.7778%, rgba(255, 255, 255, 0) 88.8889%); backdrop-filter: blur(5px);"></div><div class="pointer-events-none absolute inset-0 rounded-[inherit]" style="mask-image: linear-gradient(270deg, rgba(255, 255, 255, 0) 66.6667%, rgb(255, 255, 255) 77.7778%, rgb(255, 255, 255) 88.8889%, rgba(255, 255, 255, 0) 100%); backdrop-filter: blur(6px);"></div><div class="pointer-events-none absolute inset-0 rounded-[inherit]" style="mask-image: linear-gradient(270deg, rgba(255, 255, 255, 0) 77.7778%, rgb(255, 255, 255) 88.8889%, rgb(255, 255, 255) 100%, rgba(255, 255, 255, 0) 111.111%); backdrop-filter: blur(7px);"></div></div><div class="pointer-events-none absolute top-0 right-0 h-full w-[200px]"><div class="pointer-events-none absolute inset-0 rounded-[inherit]" style="mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 11.1111%, rgb(255, 255, 255) 22.2222%, rgba(255, 255, 255, 0) 33.3333%); backdrop-filter: blur(0px);"></div><div class="pointer-events-none absolute inset-0 rounded-[inherit]" style="mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 11.1111%, rgb(255, 255, 255) 22.2222%, rgb(255, 255, 255) 33.3333%, rgba(255, 255, 255, 0) 44.4444%); backdrop-filter: blur(1px);"></div><div class="pointer-events-none absolute inset-0 rounded-[inherit]" style="mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 22.2222%, rgb(255, 255, 255) 33.3333%, rgb(255, 255, 255) 44.4444%, rgba(255, 255, 255, 0) 55.5556%); backdrop-filter: blur(2px);"></div><div class="pointer-events-none absolute inset-0 rounded-[inherit]" style="mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 33.3333%, rgb(255, 255, 255) 44.4444%, rgb(255, 255, 255) 55.5556%, rgba(255, 255, 255, 0) 66.6667%); backdrop-filter: blur(3px);"></div><div class="pointer-events-none absolute inset-0 rounded-[inherit]" style="mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 44.4444%, rgb(255, 255, 255) 55.5556%, rgb(255, 255, 255) 66.6667%, rgba(255, 255, 255, 0) 77.7778%); backdrop-filter: blur(4px);"></div><div class="pointer-events-none absolute inset-0 rounded-[inherit]" style="mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 55.5556%, rgb(255, 255, 255) 66.6667%, rgb(255, 255, 255) 77.7778%, rgba(255, 255, 255, 0) 88.8889%); backdrop-filter: blur(5px);"></div><div class="pointer-events-none absolute inset-0 rounded-[inherit]" style="mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 66.6667%, rgb(255, 255, 255) 77.7778%, rgb(255, 255, 255) 88.8889%, rgba(255, 255, 255, 0) 100%); backdrop-filter: blur(6px);"></div><div class="pointer-events-none absolute inset-0 rounded-[inherit]" style="mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 77.7778%, rgb(255, 255, 255) 88.8889%, rgb(255, 255, 255) 100%, rgba(255, 255, 255, 0) 111.111%); backdrop-filter: blur(7px);"></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
