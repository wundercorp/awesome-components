# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/motion-primitives/carousel/default
- Registry URL: https://21st.dev/r/motion-primitives/carousel
- Author: motion-primitives
- Component slug: carousel
- Demo slug: default
- Title: carousel
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/motion-primitives/carousel with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/motion-primitives__carousel__default.html
- Local screenshot file: generated-21st-prompts/screenshots/motion-primitives__carousel__default.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="relative w-full max-w-xs"><div class="group/hover relative"><div class="overflow-hidden"><div class="flex items-center cursor-grab active:cursor-grabbing" draggable="false" style="transform: none; user-select: none; touch-action: pan-y;"><div class="w-full min-w-0 shrink-0 grow-0 overflow-hidden p-4"><div class="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">1</div></div><div class="w-full min-w-0 shrink-0 grow-0 overflow-hidden p-4"><div class="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">2</div></div><div class="w-full min-w-0 shrink-0 grow-0 overflow-hidden p-4"><div class="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">3</div></div><div class="w-full min-w-0 shrink-0 grow-0 overflow-hidden p-4"><div class="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">4</div></div></div><div class="pointer-events-none absolute left-[-12.5%] top-1/2 flex w-[125%] -translate-y-1/2 justify-between px-2"><button type="button" aria-label="Previous slide" class="pointer-events-auto h-fit w-fit rounded-full bg-zinc-50 p-2 transition-opacity duration-300 dark:bg-zinc-950 opacity-100 disabled:opacity-40" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left stroke-zinc-600 dark:stroke-zinc-50" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></button><button type="button" class="pointer-events-auto h-fit w-fit rounded-full bg-zinc-50 p-2 transition-opacity duration-300 dark:bg-zinc-950 opacity-100 disabled:opacity-40" aria-label="Next slide"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right stroke-zinc-600 dark:stroke-zinc-50" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button></div><div class="absolute bottom-0 z-10 flex w-full items-center justify-center"><div class="flex space-x-2"><button type="button" aria-label="Go to slide 1" class="h-2 w-2 rounded-full transition-opacity duration-300 bg-zinc-950 dark:bg-zinc-50"></button><button type="button" aria-label="Go to slide 2" class="h-2 w-2 rounded-full transition-opacity duration-300 bg-zinc-900/50 dark:bg-zinc-100/50"></button><button type="button" aria-label="Go to slide 3" class="h-2 w-2 rounded-full transition-opacity duration-300 bg-zinc-900/50 dark:bg-zinc-100/50"></button><button type="button" aria-label="Go to slide 4" class="h-2 w-2 rounded-full transition-opacity duration-300 bg-zinc-900/50 dark:bg-zinc-100/50"></button></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.