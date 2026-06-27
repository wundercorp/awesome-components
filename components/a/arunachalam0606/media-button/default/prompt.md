# Build Media Button in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Media Button screenshot](screenshot.png)

## Component

- Author group: `arunachalam0606`
- Component: `media-button`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: arunachalam0606
- Component slug: media-button
- Demo slug: default
- Title: media-button
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
<div id="root"><div class="h-screen flex flex-col items-center justify-center gap-10 bg-muted"><button class="relative overflow-hidden rounded-2xl px-6 py-3 text-white font-semibold text-lg bg-black group shadow-lg hover:cursor-pointer"><video class="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" src="https://www.w3schools.com/howto/rain.mp4" loop="" playsinline="" autoplay=""></video><div class="absolute inset-0 bg-black/50 z-10 pointer-events-none group-hover:opacity-100 transition-opacity duration-300"></div><span class="relative z-20 text-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Button (Video)</span></button><button class="relative overflow-hidden rounded-2xl px-6 py-3 text-white font-semibold text-lg bg-black group shadow-lg hover:cursor-pointer"><img class="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" alt="Background" src="https://i.pinimg.com/originals/71/fb/91/71fb9176f16357776802391df14b4e40.gif"><div class="absolute inset-0 bg-black/50 z-10 pointer-events-none group-hover:opacity-100 transition-opacity duration-300"></div><span class="relative z-20 text-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Button (GIF)</span></button></div></div>
```

## Reference source files

No reference source files were available.
