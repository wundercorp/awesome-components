# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/jatin-yadav05/feature-spotlight/default
- Registry URL: https://21st.dev/r/jatin-yadav05/feature-spotlight
- Author: jatin-yadav05
- Component slug: feature-spotlight
- Demo slug: default
- Title: feature-spotlight
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/jatin-yadav05/feature-spotlight with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/jatin-yadav05__feature-spotlight__default.html
- Local screenshot file: generated-21st-prompts/screenshots/jatin-yadav05__feature-spotlight__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><main class="flex min-h-screen items-center justify-center bg-background p-8"><div class="group relative flex cursor-pointer flex-col items-center gap-8 md:flex-row md:items-start md:gap-12 lg:gap-16"><div class="relative z-10 flex w-full max-w-[320px] shrink-0 flex-col items-center text-center md:w-[240px] md:items-start md:text-left lg:w-[280px] lg:pt-4"><div class="mb-6 flex items-center gap-3 md:mb-8 md:gap-4"><div class="h-px bg-foreground transition-all duration-700" style="width: 32px; transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);"></div><span class="text-[10px] font-medium uppercase tracking-[0.25em] text-foreground transition-all duration-700 md:text-xs" style="letter-spacing: 0.25em; transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);">Featured</span></div><h2 class="relative"><span class="block text-4xl font-normal tracking-tight text-foreground transition-all duration-700 sm:text-5xl md:text-5xl lg:text-6xl" style="transform: translateY(0px); transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);">Modern</span><span class="block text-4xl font-normal tracking-tight text-foreground transition-all duration-700 sm:text-5xl md:text-5xl lg:text-6xl" style="transform: translateX(0px); transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);">Living</span></h2><p class="mt-6 max-w-[260px] text-sm leading-relaxed transition-all duration-700 md:mt-8 md:max-w-[220px] md:text-base lg:mt-10 lg:max-w-[240px]" style="color: hsl(var(--muted-foreground) / 0.6); transform: translateY(0px); transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);">Where architecture meets the natural world.</p><div class="mt-6 flex items-center gap-4 md:mt-8 lg:mt-10"><div class="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 md:h-11 md:w-11 lg:h-12 lg:w-12" style="border-color: hsl(var(--muted-foreground) / 0.3); background-color: transparent; color: hsl(var(--foreground)); transform: scale(1); box-shadow: transparent 0px 0px 0px; transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right h-3.5 w-3.5 transition-transform duration-500 md:h-4 md:w-4" aria-hidden="true" style="transform: rotate(0deg); transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></div><span class="text-[10px] font-medium uppercase tracking-widest transition-all duration-700 md:text-xs" style="opacity: 0.5; transform: translateX(-8px); transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1); transition-delay: 0ms;">Explore</span></div></div><div class="relative transition-all duration-700" style="transform: translateX(0px) translateY(0px); transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);"><div class="absolute -inset-3 border transition-all duration-700 md:-inset-4" style="border-color: transparent; transform: scale(1); transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);"></div><div class="relative h-[280px] w-[260px] overflow-hidden sm:h-[320px] sm:w-[300px] md:h-[360px] md:w-[320px] lg:h-[420px] lg:w-[380px]"><div class="absolute -inset-1 transition-all duration-700" style="box-shadow: transparent 0px 0px 0px; transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);"></div><img alt="Modern architecture" class="h-full w-full object-cover transition-all duration-1000" src="https://plus.unsplash.com/premium_photo-1681338224373-9669c2497c05?q=80&amp;w=2307&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D$0" style="transform: scale(1); transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);"><div class="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent transition-opacity duration-700" style="opacity: 0; transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);"></div><div class="absolute left-2 top-2 h-5 w-px bg-white/80 transition-all duration-500 md:left-3 md:top-3 md:h-6" style="opacity: 0; transform: scaleY(0); transform-origin: center top; transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1); transition-delay: 50ms;"></div><div class="absolute left-2 top-2 h-px w-5 bg-white/80 transition-all duration-500 md:left-3 md:top-3 md:w-6" style="opacity: 0; transform: scaleX(0); transform-origin: left center; transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1); transition-delay: 100ms;"></div><div class="absolute bottom-2 right-2 h-5 w-px bg-white/80 transition-all duration-500 md:bottom-3 md:right-3 md:h-6" style="opacity: 0; transform: scaleY(0); transform-origin: center bottom; transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1); transition-delay: 150ms;"></div><div class="absolute bottom-2 right-2 h-px w-5 bg-white/80 transition-all duration-500 md:bottom-3 md:right-3 md:w-6" style="opacity: 0; transform: scaleX(0); transform-origin: right center; transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1); transition-delay: 200ms;"></div></div><span class="absolute -bottom-6 right-0 font-mono text-xs text-muted-foreground transition-all duration-700 md:-bottom-8 md:text-sm" style="opacity: 0.4; transform: translateY(0px); transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);">01</span></div></div></main></div></div></div>
```

## Public registry source files

No public registry source files were available.