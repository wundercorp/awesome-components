# Build Audio Upload Card in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Audio Upload Card screenshot](screenshot.png)

## Component

- Author group: `isaiahbjork`
- Component: `audio-upload-card`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: isaiahbjork
- Component slug: audio-upload-card
- Demo slug: default
- Title: audio-upload-card
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative w-full max-w-md mx-auto" style="opacity: 1; transform: none;"><div class="relative overflow-hidden rounded-xl border border-border/50 bg-card p-6 text-center"><div class="flex flex-col justify-center space-y-8"><div class="relative w-full mx-auto"><div class="relative"><div class="rounded-xl border-2 border-dashed border-border/60 p-6 backdrop-blur-sm min-h-[120px] flex items-center justify-center relative transition-colors duration-200 cursor-pointer hover:bg-accent/20 bg-card"><div class="absolute inset-0 flex items-center justify-center pointer-events-none"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload transition-colors duration-200 text-muted" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg></div><div class="relative z-10 w-full"></div></div><input accept="audio/*" class="sr-only" type="file"></div></div><div class="flex flex-col items-start"><h2 class="text-lg font-semibold text-foreground text-left">Upload Your Audio</h2><p class="text-sm text-muted-foreground text-left">Drop in your recordings and start transcribing instantly.</p></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
