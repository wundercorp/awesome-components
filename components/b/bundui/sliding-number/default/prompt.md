# Build Sliding Number in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Sliding Number screenshot](screenshot.png)

## Component

- Author group: `bundui`
- Component: `sliding-number`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: bundui
- Component slug: sliding-number
- Demo slug: default
- Title: sliding-number
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div style="font-size: 24px; transform: none;"><div class="inline-flex items-center"><div class="flex items-center"><div class="relative inline-block w-[1ch] overflow-x-visible overflow-y-clip leading-none tabular-nums"><div class="invisible">0</div><span class="absolute inset-0 flex items-center justify-center" style="transform: translateY(-24px); opacity: 1;">0</span><span class="absolute inset-0 flex items-center justify-center" style="transform: none; opacity: 1;">1</span><span class="absolute inset-0 flex items-center justify-center" style="transform: translateY(24px); opacity: 1;">2</span><span class="absolute inset-0 flex items-center justify-center" style="transform: translateY(48px); opacity: 1;">3</span><span class="absolute inset-0 flex items-center justify-center" style="transform: translateY(72px); opacity: 1;">4</span><span class="absolute inset-0 flex items-center justify-center" style="transform: translateY(96px); opacity: 1;">5</span><span class="absolute inset-0 flex items-center justify-center" style="transform: translateY(120px); opacity: 1;">6</span><span class="absolute inset-0 flex items-center justify-center" style="transform: translateY(-96px); opacity: 1;">7</span><span class="absolute inset-0 flex items-center justify-center" style="transform: translateY(-72px); opacity: 1;">8</span><span class="absolute inset-0 flex items-center justify-center" style="transform: translateY(-48px); opacity: 1;">9</span></div><div class="relative inline-block w-[1ch] overflow-x-visible overflow-y-clip leading-none tabular-nums"><div class="invisible">0</div><span class="absolute inset-0 flex items-center justify-center" style="transform: none; transform-origin: 50% 50% 0px;">0</span><span class="absolute inset-0 flex items-center justify-center" style="transform: translate3d(0px, 24px, 0px); transform-origin: 50% 50% 0px;">1</span><span class="absolute inset-0 flex items-center justify-center" style="transform: translate3d(0px, 48px, 0px); transform-origin: 50% 50% 0px;">2</span><span class="absolute inset-0 flex items-center justify-center" style="transform: translate3d(0px, 72px, 0px); transform-origin: 50% 50% 0px;">3</span><span class="absolute inset-0 flex items-center justify-center" style="transform: translate3d(0px, 96px, 0px); transform-origin: 50% 50% 0px;">4</span><span class="absolute inset-0 flex items-center justify-center" style="transform: translate3d(0px, 120px, 0px); transform-origin: 50% 50% 0px;">5</span><span class="absolute inset-0 flex items-center justify-center" style="transform: translate3d(0px, -96px, 0px); transform-origin: 50% 50% 0px;">6</span><span class="absolute inset-0 flex items-center justify-center" style="transform: translate3d(0px, -72px, 0px); transform-origin: 50% 50% 0px;">7</span><span class="absolute inset-0 flex items-center justify-center" style="transform: translate3d(0px, -48px, 0px); transform-origin: 50% 50% 0px;">8</span><span class="absolute inset-0 flex items-center justify-center" style="transform: translate3d(0px, -24px, 0px); transform-origin: 50% 50% 0px;">9</span></div><div class="relative inline-block w-[1ch] overflow-x-visible overflow-y-clip leading-none tabular-nums"><div class="invisible">0</div><span class="absolute inset-0 flex items-center justify-center" style="transform: none; transform-origin: 50% 50% 0px;">0</span><span class="absolute inset-0 flex items-center justify-center" style="transform: translate3d(0px, 24px, 0px); transform-origin: 50% 50% 0px;">1</span><span class="absolute inset-0 flex items-center justify-center" style="transform: translate3d(0px, 48px, 0px); transform-origin: 50% 50% 0px;">2</span><span class="absolute inset-0 flex items-center justify-center" style="transform: translate3d(0px, 72px, 0px); transform-origin: 50% 50% 0px;">3</span><span class="absolute inset-0 flex items-center justify-center" style="transform: translate3d(0px, 96px, 0px); transform-origin: 50% 50% 0px;">4</span><span class="absolute inset-0 flex items-center justify-center" style="transform: translate3d(0px, 120px, 0px); transform-origin: 50% 50% 0px;">5</span><span class="absolute inset-0 flex items-center justify-center" style="transform: translate3d(0px, -96px, 0px); transform-origin: 50% 50% 0px;">6</span><span class="absolute inset-0 flex items-center justify-center" style="transform: translate3d(0px, -72px, 0px); transform-origin: 50% 50% 0px;">7</span><span class="absolute inset-0 flex items-center justify-center" style="transform: translate3d(0px, -48px, 0px); transform-origin: 50% 50% 0px;">8</span><span class="absolute inset-0 flex items-center justify-center" style="transform: translate3d(0px, -24px, 0px); transform-origin: 50% 50% 0px;">9</span></div></div>%</div></div></div></div></div>
```

## Reference source files

No reference source files were available.
