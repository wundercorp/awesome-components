# Build Custom Cursor in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Custom Cursor screenshot](screenshot.png)

## Component

- Author group: `aliimam`
- Component: `custom-cursor`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: aliimam
- Component slug: custom-cursor
- Demo slug: default
- Title: custom-cursor
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div><div style="position: fixed; top: 0px; left: 0px; z-index: 2147483647; pointer-events: none; user-select: none; opacity: 0; transition: 250ms, transform 100ms; transform: translate3d(-10px, 0px, 0px) rotate(0deg); width: 20px; height: 20px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="width: 100%; height: 100%;"><path d="M25,30a5.82,5.82,0,0,1-1.09-.17l-.2-.07-7.36-3.48a.72.72,0,0,0-.35-.08.78.78,0,0,0-.33.07L8.24,29.54a.66.66,0,0,1-.2.06,5.17,5.17,0,0,1-1,.15,3.6,3.6,0,0,1-3.29-5L12.68,4.2a3.59,3.59,0,0,1,6.58,0l9,20.74A3.6,3.6,0,0,1,25,30Z" fill="#F2F5F8"></path><path d="M16,3A2.59,2.59,0,0,1,18.34,4.6l9,20.74A2.59,2.59,0,0,1,25,29a5.42,5.42,0,0,1-.86-.15l-7.37-3.48a1.84,1.84,0,0,0-.77-.17,1.69,1.69,0,0,0-.73.16l-7.4,3.31a5.89,5.89,0,0,1-.79.12,2.59,2.59,0,0,1-2.37-3.62L13.6,4.6A2.58,2.58,0,0,1,16,3m0-2h0A4.58,4.58,0,0,0,11.76,3.8L2.84,24.33A4.58,4.58,0,0,0,7,30.75a6.08,6.08,0,0,0,1.21-.17,1.87,1.87,0,0,0,.4-.13L16,27.18l7.29,3.44a1.64,1.64,0,0,0,.39.14A6.37,6.37,0,0,0,25,31a4.59,4.59,0,0,0,4.21-6.41l-9-20.75A4.62,4.62,0,0,0,16,1Z" fill="#292927"></path></svg></div><div><div class="flex flex-wrap m-6 justify-center gap-3"><button class="cursor-hover text-start w-full max-w-80 border p-6 rounded-xl"><h3 class="font-bold text-xl">Arrow Pointer</h3><p class="text-sm text-primary/60">Rotating arrow that follows movement direction</p></button><button class="cursor-hover text-start w-full max-w-80 border p-6 rounded-xl"><h3 class="font-bold text-xl">Big Circle</h3><p class="text-sm text-primary/60">Large circle with backdrop filter effects</p></button><button class="cursor-hover text-start w-full max-w-80 border p-6 rounded-xl"><h3 class="font-bold text-xl">Ring Dot</h3><p class="text-sm text-primary/60">Ring with center dot that expands on hover</p></button><button class="cursor-hover text-start w-full max-w-80 border p-6 rounded-xl"><h3 class="font-bold text-xl">Circle &amp; Dot</h3><p class="text-sm text-primary/60">Circle with rotating trailing dot</p></button><button class="cursor-hover text-start w-full max-w-80 border p-6 rounded-xl"><h3 class="font-bold text-xl">Glitch Effect</h3><p class="text-sm text-primary/60">Cursor with colorful glitch shadows</p></button><button class="cursor-hover text-start w-full max-w-80 border p-6 rounded-xl"><h3 class="font-bold text-xl">Motion Blur</h3><p class="text-sm text-primary/60">Cursor with directional motion blur</p></button></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
