# Build Orbiting Avatars in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Orbiting Avatars screenshot](screenshot.png)

## Component

- Author group: `ravikatiyar`
- Component: `orbiting-avatars`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ravikatiyar
- Component slug: orbiting-avatars
- Demo slug: default
- Title: orbiting-avatars
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-screen w-full items-center justify-center bg-background p-4"><style>
    @keyframes orbit {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes counter-orbit {
      from { transform: rotate(0deg); }
      to { transform: rotate(-360deg); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-12px); }
    }
    .animate-orbit {
      animation: orbit var(--orbit-duration) linear infinite;
    }
    .animate-counter-orbit {
      animation: counter-orbit var(--orbit-duration) linear infinite;
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
  </style><section class="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg bg-background"><div class="pointer-events-none absolute inset-0 z-0"><div class="absolute left-1/2 top-1/2 h-[35rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-border/40"></div><div class="absolute left-1/2 top-1/2 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-border/40"></div></div><div class="relative z-10 flex flex-col items-center gap-4 px-4 text-center"><h1 class="text-3xl font-bold tracking-tight md:text-4xl">Contribute to Our Community</h1><p class="max-w-md text-muted-foreground">Our platform is built by a community of creators who want to share — from amateurs to professionals and everyone in between.</p><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">Submit Your Work</button></div><div class="absolute inset-0 z-0 animate-orbit" style="--orbit-duration: 50s;"><div class="absolute left-1/2 top-1/2" style="transform: translate(352px, 0px);"><div class="relative h-14 w-14 animate-float" style="animation-delay: 0s;"><img alt="User 1" class="h-full w-full animate-counter-orbit rounded-full object-cover shadow-md" src="https://i.pravatar.cc/150?img=11" style="--orbit-duration: 50s;"></div></div><div class="absolute left-1/2 top-1/2" style="transform: translate(176px, 304.841px);"><div class="relative h-14 w-14 animate-float" style="animation-delay: -0.8s;"><img alt="User 2" class="h-full w-full animate-counter-orbit rounded-full object-cover shadow-md" src="https://i.pravatar.cc/150?img=12" style="--orbit-duration: 50s;"></div></div><div class="absolute left-1/2 top-1/2" style="transform: translate(-176px, 304.841px);"><div class="relative h-14 w-14 animate-float" style="animation-delay: -1.6s;"><img alt="User 3" class="h-full w-full animate-counter-orbit rounded-full object-cover shadow-md" src="https://i.pravatar.cc/150?img=13" style="--orbit-duration: 50s;"></div></div><div class="absolute left-1/2 top-1/2" style="transform: translate(-352px, 4.31076e-14px);"><div class="relative h-14 w-14 animate-float" style="animation-delay: -2.4s;"><img alt="User 4" class="h-full w-full animate-counter-orbit rounded-full object-cover shadow-md" src="https://i.pravatar.cc/150?img=14" style="--orbit-duration: 50s;"></div></div><div class="absolute left-1/2 top-1/2" style="transform: translate(-176px, -304.841px);"><div class="relative h-14 w-14 animate-float" style="animation-delay: -3.2s;"><img alt="User 5" class="h-full w-full animate-counter-orbit rounded-full object-cover shadow-md" src="https://i.pravatar.cc/150?img=15" style="--orbit-duration: 50s;"></div></div><div class="absolute left-1/2 top-1/2" style="transform: translate(176px, -304.841px);"><div class="relative h-14 w-14 animate-float" style="animation-delay: -4s;"><img alt="User 6" class="h-full w-full animate-counter-orbit rounded-full object-cover shadow-md" src="https://i.pravatar.cc/150?img=16" style="--orbit-duration: 50s;"></div></div></div></section></div></div></div></div>
```

## Reference source files

No reference source files were available.
