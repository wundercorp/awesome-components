# Build 3d Tilt Card in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![3d Tilt Card screenshot](screenshot.png)

## Component

- Author group: `avanishverma4`
- Component: `3d-tilt-card`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: avanishverma4
- Component slug: 3d-tilt-card
- Demo slug: default
- Title: 3d-tilt-card
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full flex items-center justify-center min-h-screen bg-zinc-950 p-8 relative overflow-hidden"><div class="absolute inset-0 opacity-30"><div class="w-full h-full" style="background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px); background-size: 40px 40px;"></div></div><div class="relative z-10"><div class="w-80 h-96 cursor-pointer overflow-hidden transition-all duration-200 ease-out border-2 border-slate-700 rounded-lg bg-white shadow-sm" style="transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1.02, 1.02, 1.02); box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 40px;"><div class="p-0 h-full relative group"><img alt="Card" class="w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1759345157520-66920771f7b1?q=80&amp;w=1025&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"><div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div><label for="image-upload" class="absolute bottom-4 right-4 bg-white/90 hover:bg-white p-3 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:scale-110"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload w-5 h-5 text-slate-900" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg><input id="image-upload" accept="image/*" class="hidden" type="file"></label><div class="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><h3 class="text-white font-bold text-xl mb-1">3D Tilt Card</h3><p class="text-white/80 text-sm">Hover to interact</p></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
