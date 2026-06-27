# Build Lets Work Section in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Lets Work Section screenshot](screenshot.png)

## Component

- Author group: `jatin-yadav05`
- Component: `lets-work-section`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: jatin-yadav05
- Component slug: lets-work-section
- Demo slug: default
- Title: lets-work-section
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><main class="w-full"><section class="flex min-h-screen items-center justify-center px-6"><div class="relative flex flex-col items-center gap-12"><div class="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" style="opacity: 0; transform: translateY(20px) scale(0.95); pointer-events: none;"><div class="flex flex-col items-center gap-2"><span class="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground transition-all duration-500" style="transform: translateY(10px); opacity: 0; transition-delay: 100ms;">Perfect</span><h3 class="text-3xl font-light tracking-tight text-foreground transition-all duration-500 sm:text-4xl" style="transform: translateY(10px); opacity: 0; transition-delay: 200ms;">Let's talk</h3></div><button class="group relative flex items-center gap-4 transition-all duration-500 cursor-pointer" style="transform: translateY(15px) scale(1); opacity: 0; transition-delay: 150ms;"><div class="h-px w-8 bg-border transition-all duration-500 sm:w-12" style="transform: scaleX(1); opacity: 0.5;"></div><div class="relative flex items-center gap-3 overflow-hidden rounded-full border px-6 py-3 transition-all duration-500 sm:px-8 sm:py-4" style="border-color: var(--border); background-color: transparent; box-shadow: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar size-4 transition-all duration-500 sm:size-5" aria-hidden="true" style="color: var(--foreground);"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg><span class="text-sm font-medium tracking-wide transition-all duration-500 sm:text-base" style="color: var(--foreground);">Book a call</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right size-4 transition-all duration-500 sm:size-5" aria-hidden="true" style="color: var(--foreground); transform: translate(0px, 0px) scale(1);"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></div><div class="h-px w-8 bg-border transition-all duration-500 sm:w-12" style="transform: scaleX(1); opacity: 0.5;"></div></button><span class="text-xs tracking-widest uppercase text-muted-foreground/50 transition-all duration-500" style="transform: translateY(10px); opacity: 0; transition-delay: 450ms;">15 min intro call</span></div><div class="flex items-center gap-3 transition-all duration-500" style="opacity: 1; transform: translateY(0px); pointer-events: auto;"><span class="relative flex size-2"><span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span><span class="relative inline-flex size-2 rounded-full bg-emerald-500"></span></span><span class="text-sm font-medium tracking-widest uppercase text-muted-foreground">Available for projects</span></div><div class="group relative cursor-pointer" style="pointer-events: auto;"><div class="flex flex-col items-center gap-6"><h2 class="relative text-center text-5xl font-light tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" style="opacity: 1; transform: translateY(0px) scale(1);"><span class="block overflow-hidden"><span class="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" style="transform: translateY(0px);">Let's work</span></span><span class="block overflow-hidden"><span class="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75" style="transform: translateY(0px);"><span class="text-muted-foreground/60">together</span></span></span></h2><div class="relative mt-4 flex size-16 items-center justify-center sm:size-20"><div class="pointer-events-none absolute inset-0 rounded-full border transition-all ease-out" style="border-color: var(--border); background-color: transparent; transform: scale(1); opacity: 1; transition-duration: 500ms;"></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right size-6 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] sm:size-7" aria-hidden="true" style="transform: translate(0px, 0px); opacity: 1; color: var(--foreground); transition-duration: 500ms;"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></div></div><div class="absolute -left-8 top-1/2 -translate-y-1/2 sm:-left-16"><div class="h-px w-8 bg-border transition-all duration-500 sm:w-12" style="transform: scaleX(1); opacity: 0.5;"></div></div><div class="absolute -right-8 top-1/2 -translate-y-1/2 sm:-right-16"><div class="h-px w-8 bg-border transition-all duration-500 sm:w-12" style="transform: scaleX(1); opacity: 0.5;"></div></div></div><div class="mt-8 flex flex-col items-center gap-4 text-center transition-all duration-500 delay-100" style="opacity: 1; transform: translateY(0px); pointer-events: auto;"><p class="max-w-md text-sm leading-relaxed text-muted-foreground">Have a project in mind? I'd love to hear about it. Let's create something exceptional together.</p><span class="text-xs tracking-widest uppercase text-muted-foreground/60">hello@example.com</span></div></div></section></main></div></div></div>
```

## Reference source files

No reference source files were available.
