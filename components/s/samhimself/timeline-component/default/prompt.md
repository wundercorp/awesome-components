# Build Timeline Component in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Timeline Component screenshot](screenshot.png)

## Component

- Author group: `samhimself`
- Component: `timeline-component`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: samhimself
- Component slug: timeline-component
- Demo slug: default
- Title: timeline-component
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative max-w-3xl mx-auto py-12 px-4"><div class="absolute left-[18px] top-0 h-full w-[2px] bg-gradient-to-b from-blue-400/60 to-purple-500/60 dark:from-blue-500/40 dark:to-purple-600/40"></div><div class="space-y-12"><div class="relative flex gap-6 items-start animate-fade-in"><div class="relative z-10"><div class="h-4 w-4 rounded-full border-2 border-white dark:border-neutral-800 bg-gradient-to-r from-blue-400 to-purple-500 shadow-[0_0_12px_rgba(59,130,246,0.6)] transition-transform duration-200 hover:scale-110"></div></div><div class="flex-1 rounded-lg p-4 backdrop-blur-xl bg-white/70 dark:bg-neutral-900/70 border border-gray-200/50 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_36px_rgba(0,0,0,0.15)] transition-all duration-300"><span class="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">2021</span><h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">Founded yourThing</h3><p class="mt-2 text-sm text-gray-700 dark:text-gray-300">The project started with a small passionate team.</p></div></div><div class="relative flex gap-6 items-start animate-fade-in"><div class="relative z-10"><div class="h-4 w-4 rounded-full border-2 border-white dark:border-neutral-800 bg-gradient-to-r from-blue-400 to-purple-500 shadow-[0_0_12px_rgba(59,130,246,0.6)] transition-transform duration-200 hover:scale-110"></div></div><div class="flex-1 rounded-lg p-4 backdrop-blur-xl bg-white/70 dark:bg-neutral-900/70 border border-gray-200/50 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_36px_rgba(0,0,0,0.15)] transition-all duration-300"><span class="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">2022</span><h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">Launch v1.0</h3><p class="mt-2 text-sm text-gray-700 dark:text-gray-300">Released our first public version with core features.</p></div></div><div class="relative flex gap-6 items-start animate-fade-in"><div class="relative z-10"><div class="h-4 w-4 rounded-full border-2 border-white dark:border-neutral-800 bg-gradient-to-r from-blue-400 to-purple-500 shadow-[0_0_12px_rgba(59,130,246,0.6)] transition-transform duration-200 hover:scale-110"></div></div><div class="flex-1 rounded-lg p-4 backdrop-blur-xl bg-white/70 dark:bg-neutral-900/70 border border-gray-200/50 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_36px_rgba(0,0,0,0.15)] transition-all duration-300"><span class="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">2023</span><h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">Global Expansion</h3><p class="mt-2 text-sm text-gray-700 dark:text-gray-300">Scaled to thousands of users in over 40 countries.</p></div></div><div class="relative flex gap-6 items-start animate-fade-in"><div class="relative z-10"><div class="h-4 w-4 rounded-full border-2 border-white dark:border-neutral-800 bg-gradient-to-r from-blue-400 to-purple-500 shadow-[0_0_12px_rgba(59,130,246,0.6)] transition-transform duration-200 hover:scale-110"></div></div><div class="flex-1 rounded-lg p-4 backdrop-blur-xl bg-white/70 dark:bg-neutral-900/70 border border-gray-200/50 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_36px_rgba(0,0,0,0.15)] transition-all duration-300"><span class="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">2024</span><h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">New Horizons</h3><p class="mt-2 text-sm text-gray-700 dark:text-gray-300">Introduced AI-powered features and deeper integrations.</p></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
