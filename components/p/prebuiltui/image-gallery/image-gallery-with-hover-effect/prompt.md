# Build Image Gallery in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Image Gallery screenshot](screenshot.png)

## Component

- Author group: `prebuiltui`
- Component: `image-gallery`
- Variant: `image-gallery-with-hover-effect`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: prebuiltui
- Component slug: image-gallery
- Demo slug: image-gallery-with-hover-effect
- Title: image-gallery
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap');
    
        * {
          font-family: 'Poppins', sans-serif;
        }
      </style><section class="w-full flex flex-col items-center justify-start py-12"><div class="max-w-3xl text-center px-4"><h1 class="text-3xl font-semibold">Explore the Library</h1><p class="text-sm text-slate-500 mt-2">A visual collection of our most recent works – each piece crafted with intention, emotion, and style.</p></div><div class="flex flex-wrap items-center justify-center mt-10 mx-auto gap-4"><img class="max-w-56 h-80 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300" alt="image" src="https://images.unsplash.com/photo-1562619371-b67725b6fde2?q=80&amp;w=600&amp;h=900&amp;auto=format&amp;fit=crop"><img class="max-w-56 h-80 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300" alt="image" src="https://images.unsplash.com/photo-1633983482450-bfb7b566fe6a?q=80&amp;w=600&amp;h=900&amp;auto=format&amp;fit=crop"><img class="max-w-56 h-80 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300" alt="image" src="https://plus.unsplash.com/premium_photo-1671209879721-3082e78307e3?q=80&amp;w=600&amp;h=900&amp;auto=format&amp;fit=crop"><img class="max-w-56 h-80 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300" alt="image" src="https://images.unsplash.com/photo-1563089145-599997674d42?q=80&amp;w=600&amp;h=900&amp;auto=format&amp;fit=crop"></div></section></div></div></div>
```

## Reference source files

No reference source files were available.
