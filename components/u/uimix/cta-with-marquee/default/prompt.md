# Build Cta With Marquee in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Cta With Marquee screenshot](screenshot.png)

## Component

- Author group: `uimix`
- Component: `cta-with-marquee`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: uimix
- Component slug: cta-with-marquee
- Demo slug: default
- Title: cta-with-marquee
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen bg-background text-foreground flex items-center overflow-hidden relative"><div class="container mx-auto px-6 lg:px-12"><div class="grid lg:grid-cols-2 gap-8 items-center"><div class="space-y-6"><h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">The Future of Creative Design</h1><div class="space-y-1 text-muted-foreground"><p class="text-lg">March 2025</p><p class="text-lg">Design Studio</p></div><button class="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors">Read More</button></div><div class="space-y-4 overflow-hidden"><div class="group flex overflow-hidden [gap:var(--gap)] [--gap:1rem]" style="--duration: 30s;"><div class="flex min-w-full shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee [animation-direction:reverse]"><div class="relative w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0"><img alt="Image 1" class="object-cover" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&amp;h=400&amp;fit=crop"></div><div class="relative w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0"><img alt="Image 2" class="object-cover" src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&amp;h=400&amp;fit=crop"></div><div class="relative w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0"><img alt="Image 3" class="object-cover" src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=400&amp;h=400&amp;fit=crop"></div><div class="relative w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0"><img alt="Image 4" class="object-cover" src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&amp;h=400&amp;fit=crop"></div></div><div class="flex min-w-full shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee [animation-direction:reverse]" aria-hidden="true"><div class="relative w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0"><img alt="Image 1" class="object-cover" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&amp;h=400&amp;fit=crop"></div><div class="relative w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0"><img alt="Image 2" class="object-cover" src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&amp;h=400&amp;fit=crop"></div><div class="relative w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0"><img alt="Image 3" class="object-cover" src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=400&amp;h=400&amp;fit=crop"></div><div class="relative w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0"><img alt="Image 4" class="object-cover" src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&amp;h=400&amp;fit=crop"></div></div></div><div class="group flex overflow-hidden [gap:var(--gap)] [--gap:1rem]" style="--duration: 30s;"><div class="flex min-w-full shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee"><div class="relative w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0"><img alt="Image 5" class="object-cover" src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&amp;h=400&amp;fit=crop"></div><div class="relative w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0"><img alt="Image 6" class="object-cover" src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=400&amp;h=400&amp;fit=crop"></div><div class="relative w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0"><img alt="Image 7" class="object-cover" src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=400&amp;h=400&amp;fit=crop"></div><div class="relative w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0"><img alt="Image 8" class="object-cover" src="https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?w=400&amp;h=400&amp;fit=crop"></div></div><div class="flex min-w-full shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee" aria-hidden="true"><div class="relative w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0"><img alt="Image 5" class="object-cover" src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&amp;h=400&amp;fit=crop"></div><div class="relative w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0"><img alt="Image 6" class="object-cover" src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=400&amp;h=400&amp;fit=crop"></div><div class="relative w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0"><img alt="Image 7" class="object-cover" src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=400&amp;h=400&amp;fit=crop"></div><div class="relative w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0"><img alt="Image 8" class="object-cover" src="https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?w=400&amp;h=400&amp;fit=crop"></div></div></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
