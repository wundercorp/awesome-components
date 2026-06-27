# Build Modern Hero Section in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Modern Hero Section screenshot](screenshot.png)

## Component

- Author group: `ravikatiyar`
- Component: `modern-hero-section`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ravikatiyar
- Component slug: modern-hero-section
- Demo slug: default
- Title: modern-hero-section
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full"><style>
  @keyframes float-up {
    0% { transform: translateY(0px); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
    50% { transform: translateY(-15px); box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3); }
    100% { transform: translateY(0px); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
  }
  .animate-float-up {
    animation: float-up 6s ease-in-out infinite;
  }
</style><section class="relative w-full bg-background font-sans py-20 sm:py-32 overflow-hidden"><div class="container relative z-10 mx-auto px-4 text-center"><h1 class="text-5xl md:text-6xl font-bold tracking-tight text-foreground">Free <span class="text-blue-600">AI Photo Editor</span></h1><p class="mx-auto mt-5 max-w-2xl text-base md:text-lg text-muted-foreground">Supercharge your editing 10x faster and easier than ever with AIEASE’s a diverse of AI-powered toolsets. Use our all-in-one online free AI photo editor to deliver perfect and professional images.</p></div><div class="relative z-0 mt-20 h-[600px] flex items-center justify-center"><div class="relative h-full w-full max-w-6xl"><img alt="Main feature" class="absolute left-1/2 top-1/2 h-auto w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-2xl z-20 animate-float-up" src="https://plus.unsplash.com/premium_photo-1670282392820-e3590c1c5c54?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGdpcmx8ZW58MHx8MHx8fDA%3D" style="animation-delay: 0s;"><img alt="Feature 2" class="absolute left-[22%] top-[15%] h-auto w-52 rounded-xl shadow-lg z-10 animate-float-up" src="https://images.unsplash.com/photo-1652161468447-d8abb529b464?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVmb3JlJTIwYW5kJTIwYWZ0ZXJ8ZW58MHx8MHx8fDA%3D" style="animation-delay: -1.2s;"><img alt="Feature 3" class="absolute right-[24%] top-[10%] h-auto w-48 rounded-xl shadow-lg z-10 animate-float-up" src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&amp;w=400&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3" style="animation-delay: -2.5s;"><img alt="Feature 4" class="absolute right-[20%] bottom-[12%] h-auto w-60 rounded-xl shadow-lg z-30 animate-float-up" src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&amp;w=400&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3" style="animation-delay: -3.5s;"><img alt="Feature 5" class="absolute right-[5%] top-1/2 -translate-y-[60%] h-auto w-52 rounded-xl shadow-lg z-10 animate-float-up" src="https://images.unsplash.com/photo-1596639410348-8470f7fa9f84?q=80&amp;w=400&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3" style="animation-delay: -4.8s;"><img alt="Feature 6" class="absolute left-[18%] bottom-[8%] h-auto w-56 rounded-xl shadow-lg z-30 animate-float-up" src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&amp;w=400&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3" style="animation-delay: -5.2s;"><img alt="Feature 7" class="absolute left-[5%] top-[25%] h-auto w-48 rounded-xl shadow-lg z-10 animate-float-up" src="https://images.unsplash.com/photo-1532135468830-e51699205b70?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhaW5ib3d8ZW58MHx8MHx8fDA%3D" style="animation-delay: -6s;"></div></div><div class="container relative z-10 mx-auto mt-16 px-4"><div class="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16"><div class="text-center"><p class="text-4xl font-bold tracking-tight text-blue-600">3,888,846+</p><p class="mt-1 text-sm font-medium text-muted-foreground">Users Trusted</p></div><div class="text-center"><p class="text-4xl font-bold tracking-tight text-blue-600">16,015,507+</p><p class="mt-1 text-sm font-medium text-muted-foreground">Images Processed</p></div></div></div></section></div></div></div></div>
```

## Reference source files

No reference source files were available.
