# Build Ai Voice Input in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Ai Voice Input screenshot](screenshot.png)

## Component

- Author group: `kokonutd`
- Component: `ai-voice-input`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: kokonutd
- Component slug: ai-voice-input
- Demo slug: default
- Title: ai-voice-input
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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="space-y-8"><div class="space-y-4"><div class="w-full py-4"><div class="relative max-w-xl w-full mx-auto flex items-center flex-col gap-2"><button class="group w-16 h-16 rounded-xl flex items-center justify-center transition-colors bg-none hover:bg-black/10 dark:hover:bg-white/10" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic w-6 h-6 text-black/70 dark:text-white/70" aria-hidden="true"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect x="9" y="2" width="6" height="13" rx="3"></rect></svg></button><span class="font-mono text-sm transition-opacity duration-300 text-black/30 dark:text-white/30">00:00</span><div class="h-4 w-64 flex items-center justify-center gap-0.5"><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div><div class="w-0.5 rounded-full transition-all duration-300 bg-black/10 dark:bg-white/10 h-1"></div></div><p class="h-4 text-xs text-black/70 dark:text-white/70">Click to speak</p></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
