# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/jatin-yadav05/interactive-accordion/default
- Registry URL: https://21st.dev/r/jatin-yadav05/interactive-accordion
- Author: jatin-yadav05
- Component slug: interactive-accordion
- Demo slug: default
- Title: interactive-accordion
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/jatin-yadav05/interactive-accordion with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/jatin-yadav05__interactive-accordion__default.html
- Local screenshot file: generated-21st-prompts/screenshots/jatin-yadav05__interactive-accordion__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><main class="min-h-screen flex items-center justify-center p-8"><div class="w-full max-w-2xl"><div class="mb-12"><h1 class="text-4xl font-medium tracking-tight mb-3 text-balance">What we do</h1><p class="text-muted-foreground text-lg">Transforming ideas into exceptional digital experiences.</p></div><div class="w-full max-w-xl"><div class="space-y-0"><div><button class="w-full group relative"><div class="flex items-center gap-6 py-5 px-1"><div class="relative flex items-center justify-center w-10 h-10"><div class="absolute inset-0 rounded-full bg-foreground" style="opacity: 1; transform: none;"></div><span class="relative z-10 text-sm font-medium tracking-wide" style="color: var(--primary-foreground);">01</span></div><h3 class="text-2xl font-medium tracking-tight" style="color: var(--foreground); transform: translateX(4px);">Design</h3><div class="ml-auto flex items-center gap-3"><div class="flex items-center justify-center w-8 h-8" style="transform: rotate(45deg);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="text-foreground" style="opacity: 1;"><path d="M8 1V15M1 8H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></div></div></div><div class="absolute bottom-0 left-0 right-0 h-px bg-border origin-left"></div><div class="absolute bottom-0 left-0 h-px bg-foreground origin-left" style="transform: none;"></div></button><div class="overflow-hidden" style="height: auto; opacity: 1;"><p class="pl-16 pr-12 py-6 text-muted-foreground leading-relaxed" style="transform: none;">We craft pixel-perfect interfaces that blend aesthetics with functionality, creating memorable digital experiences.</p></div></div><div><button class="w-full group relative"><div class="flex items-center gap-6 py-5 px-1"><div class="relative flex items-center justify-center w-10 h-10"><div class="absolute inset-0 rounded-full bg-foreground" style="opacity: 0; transform: scale(0);"></div><span class="relative z-10 text-sm font-medium tracking-wide" style="color: var(--muted-foreground);">02</span></div><h3 class="text-2xl font-medium tracking-tight" style="color: var(--muted-foreground); transform: none;">Development</h3><div class="ml-auto flex items-center gap-3"><div class="flex items-center justify-center w-8 h-8" style="transform: none;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="text-foreground" style="opacity: 0.4;"><path d="M8 1V15M1 8H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></div></div></div><div class="absolute bottom-0 left-0 right-0 h-px bg-border origin-left"></div><div class="absolute bottom-0 left-0 h-px bg-foreground origin-left" style="transform: scaleX(0);"></div></button></div><div><button class="w-full group relative"><div class="flex items-center gap-6 py-5 px-1"><div class="relative flex items-center justify-center w-10 h-10"><div class="absolute inset-0 rounded-full bg-foreground" style="opacity: 0; transform: scale(0);"></div><span class="relative z-10 text-sm font-medium tracking-wide" style="color: var(--muted-foreground);">03</span></div><h3 class="text-2xl font-medium tracking-tight" style="color: var(--muted-foreground); transform: none;">Strategy</h3><div class="ml-auto flex items-center gap-3"><div class="flex items-center justify-center w-8 h-8" style="transform: none;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="text-foreground" style="opacity: 0.4;"><path d="M8 1V15M1 8H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></div></div></div><div class="absolute bottom-0 left-0 right-0 h-px bg-border origin-left"></div><div class="absolute bottom-0 left-0 h-px bg-foreground origin-left" style="transform: scaleX(0);"></div></button></div><div><button class="w-full group relative"><div class="flex items-center gap-6 py-5 px-1"><div class="relative flex items-center justify-center w-10 h-10"><div class="absolute inset-0 rounded-full bg-foreground" style="opacity: 0; transform: scale(0);"></div><span class="relative z-10 text-sm font-medium tracking-wide" style="color: var(--muted-foreground);">04</span></div><h3 class="text-2xl font-medium tracking-tight" style="color: var(--muted-foreground); transform: none;">Growth</h3><div class="ml-auto flex items-center gap-3"><div class="flex items-center justify-center w-8 h-8" style="transform: none;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="text-foreground" style="opacity: 0.4;"><path d="M8 1V15M1 8H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></div></div></div><div class="absolute bottom-0 left-0 right-0 h-px bg-border origin-left"></div><div class="absolute bottom-0 left-0 h-px bg-foreground origin-left" style="transform: scaleX(0);"></div></button></div></div></div></div></main></div></div></div>
```

## Public registry source files

No public registry source files were available.