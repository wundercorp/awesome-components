# Build Kinetic Scroll Gallery in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Kinetic Scroll Gallery screenshot](screenshot.png)

## Component

- Author group: `dhiluxui`
- Component: `kinetic-scroll-gallery`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: dhiluxui
- Component slug: kinetic-scroll-gallery
- Demo slug: default
- Title: kinetic-scroll-gallery
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="App"><div class="bg-neutral-900 text-neutral-50 min-h-screen"><div class="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8"><div class="mb-12 text-center"><h1 class="text-4xl font-bold tracking-tight sm:text-6xl">Kinetic Scroll Gallery</h1><p class="mt-4 text-lg text-neutral-300">The faster you scroll, the more the images will distort.</p></div><div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"><div class="w-full h-80 relative overflow-hidden rounded-lg" style="transform: none;"><img alt="A landscape" class="absolute inset-0 h-full w-full object-cover" src="https://images.pexels.com/photos/1010648/pexels-photo-1010648.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2" style="transform: scale(1.15);"></div><div class="w-full h-80 relative overflow-hidden rounded-lg" style="transform: none;"><img alt="A landscape" class="absolute inset-0 h-full w-full object-cover" src="https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2" style="transform: scale(1.15);"></div><div class="w-full h-80 relative overflow-hidden rounded-lg" style="transform: none;"><img alt="A landscape" class="absolute inset-0 h-full w-full object-cover" src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2" style="transform: scale(1.15);"></div><div class="w-full h-80 relative overflow-hidden rounded-lg" style="transform: none;"><img alt="A landscape" class="absolute inset-0 h-full w-full object-cover" src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2" style="transform: scale(1.15);"></div><div class="w-full h-80 relative overflow-hidden rounded-lg" style="transform: none;"><img alt="A landscape" class="absolute inset-0 h-full w-full object-cover" src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2" style="transform: scale(1.15);"></div><div class="w-full h-80 relative overflow-hidden rounded-lg" style="transform: none;"><img alt="A landscape" class="absolute inset-0 h-full w-full object-cover" src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2" style="transform: scale(1.15);"></div><div class="w-full h-80 relative overflow-hidden rounded-lg" style="transform: none;"><img alt="A landscape" class="absolute inset-0 h-full w-full object-cover" src="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2" style="transform: scale(1.15);"></div><div class="w-full h-80 relative overflow-hidden rounded-lg" style="transform: none;"><img alt="A landscape" class="absolute inset-0 h-full w-full object-cover" src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2" style="transform: scale(1.15);"></div><div class="w-full h-80 relative overflow-hidden rounded-lg" style="transform: none;"><img alt="A landscape" class="absolute inset-0 h-full w-full object-cover" src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2" style="transform: scale(1.15);"></div><div class="w-full h-80 relative overflow-hidden rounded-lg" style="transform: none;"><img alt="A landscape" class="absolute inset-0 h-full w-full object-cover" src="https://images.pexels.com/photos/8665530/pexels-photo-8665530.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2" style="transform: scale(1.15);"></div><div class="w-full h-80 relative overflow-hidden rounded-lg" style="transform: none;"><img alt="A landscape" class="absolute inset-0 h-full w-full object-cover" src="https://images.pexels.com/photos/2440061/pexels-photo-2440061.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2" style="transform: scale(1.15);"></div><div class="w-full h-80 relative overflow-hidden rounded-lg" style="transform: none;"><img alt="A landscape" class="absolute inset-0 h-full w-full object-cover" src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2" style="transform: scale(1.15);"></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
