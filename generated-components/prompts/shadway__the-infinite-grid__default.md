# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/shadway/the-infinite-grid/default
- Registry URL: https://21st.dev/r/shadway/the-infinite-grid
- Author: shadway
- Component slug: the-infinite-grid
- Demo slug: default
- Title: the-infinite-grid
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/shadway/the-infinite-grid with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/shadway__the-infinite-grid__default.html
- Local screenshot file: generated-21st-prompts/screenshots/shadway__the-infinite-grid__default.png

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

No registry metadata available.

## Rendered DOM snapshot

This is the rendered demo HTML extracted from the live preview. Use it to verify structure, class names, visible content, and layout.

```html
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-background"><div class="absolute inset-0 z-0 opacity-[0.05]"><svg class="w-full h-full"><defs><pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse" x="34.5" y="34.5"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="1" class="text-muted-foreground"></path></pattern></defs><rect width="100%" height="100%" fill="url(#grid-pattern)"></rect></svg></div><div class="absolute inset-0 z-0 opacity-40" style="mask-image: radial-gradient(300px at 0px 0px, black, transparent);"><svg class="w-full h-full"><defs><pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse" x="34.5" y="34.5"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="1" class="text-muted-foreground"></path></pattern></defs><rect width="100%" height="100%" fill="url(#grid-pattern)"></rect></svg></div><div class="absolute inset-0 pointer-events-none z-0"><div class="absolute right-[-20%] top-[-20%] w-[40%] h-[40%] rounded-full bg-orange-500/40 dark:bg-orange-600/20 blur-[120px]"></div><div class="absolute right-[10%] top-[-10%] w-[20%] h-[20%] rounded-full bg-primary/30 blur-[100px]"></div><div class="absolute left-[-10%] bottom-[-20%] w-[40%] h-[40%] rounded-full bg-blue-500/40 dark:bg-blue-600/20 blur-[120px]"></div></div><div class="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl mx-auto space-y-6 pointer-events-none"><div class="space-y-2"><h1 class="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground drop-shadow-sm">The Infinite Grid</h1><p class="text-lg md:text-xl text-muted-foreground">Move your cursor to reveal the active grid layer. <br>The pattern scrolls infinitely in the background.</p></div><div class="flex gap-4 pointer-events-auto"><button class="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all shadow-md active:scale-95">Interact (0)</button><button class="px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-md hover:bg-secondary/80 transition-all active:scale-95">Learn More</button></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.