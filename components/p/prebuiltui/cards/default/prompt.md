# Build Cards in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Cards screenshot](screenshot.png)

## Component

- Author group: `prebuiltui`
- Component: `cards`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: prebuiltui
- Component slug: cards
- Demo slug: default
- Title: cards
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
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      </style><div class="flex flex-col items-center w-full"><h1 class="text-3xl font-semibold">Latest Blog</h1><p class="text-sm text-slate-500 mt-2 max-w-lg text-center">Stay ahead of the curve with fresh content on code, design, startups, and everything in between.</p><div class="mt-10 flex flex-wrap justify-center gap-8"><div class="max-w-72 w-full hover:-translate-y-0.5 transition duration-300"><img class="rounded-xl" alt="" src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=1200&amp;h=800&amp;auto=format&amp;fit=crop&amp;q=60"><h3 class="text-base text-slate-900 font-medium mt-3">Color Psychology in UI: How to Choose the Right Palette</h3><p class="text-xs text-indigo-600 font-medium mt-1">UI/UX design</p></div><div class="max-w-72 w-full hover:-translate-y-0.5 transition duration-300"><img class="rounded-xl" alt="" src="https://images.unsplash.com/photo-1714974528646-ea024a3db7a7?w=1200&amp;h=800&amp;auto=format&amp;fit=crop&amp;q=60"><h3 class="text-base text-slate-900 font-medium mt-3">Understanding Typography: Crafting a Visual Voice for Your Brand</h3><p class="text-xs text-indigo-600 font-medium mt-1">Branding</p></div><div class="max-w-72 w-full hover:-translate-y-0.5 transition duration-300"><img class="rounded-xl" alt="" src="https://images.unsplash.com/photo-1713947501966-34897f21162e?w=1200&amp;h=800&amp;auto=format&amp;fit=crop&amp;q=60"><h3 class="text-base text-slate-900 font-medium mt-3">Design Thinking in Practice: How to Solve Real User Problems</h3><p class="text-xs text-indigo-600 font-medium mt-1">Product Design</p></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
