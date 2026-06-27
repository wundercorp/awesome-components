# Build Magnetic Cursor in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Magnetic Cursor screenshot](screenshot.png)

## Component

- Author group: `easemize`
- Component: `magnetic-cursor`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: easemize
- Component slug: magnetic-cursor
- Demo slug: default
- Title: magnetic-cursor
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
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="default_MagneticCursorDemo">MagneticCursorDemo</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="magnetic-cursor " style="position: fixed; top: 0px; left: 0px; z-index: 9999; pointer-events: none; will-change: transform, width, height, border-radius; background-color: white; mix-blend-mode: exclusion; width: 40px; height: 40px; border-radius: 50%; backdrop-filter: contrast(1.5); translate: none; rotate: none; scale: none; transform: translate(-50%, -50%) translate(-100px, -100px);"></div><div class="relative w-full h-screen bg-background text-foreground overflow-hidden font-sans selection:bg-primary selection:text-background flex flex-col"><div class="absolute inset-0 z-0 opacity-80 pointer-events-none" style="background-image: linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px); background-size: 40px 40px;"></div><header class="relative z-10 flex items-center justify-between p-8 md:p-12"><div data-magnetic="true" class="text-xl font-bold tracking-tighter mix-blend-difference">BuilderStudio</div><button data-magnetic="true" class="group relative flex h-14 w-14 items-center justify-center rounded-full border border-2 border-border bg-secondary backdrop-blur-sm transition-colors hover:bg-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu h-6 w-6 stroke-1 pointer-events-none text-foreground" aria-hidden="true"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg></button></header><main class="relative z-10 flex flex-1 flex-col items-center justify-center gap-12 p-6"><div class="text-center space-y-4"><h1 class="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9]">Fluid <br><span class="text-muted-foreground">Interaction</span></h1></div><div data-magnetic="true" class="relative flex h-32 w-full max-w-sm items-center justify-between overflow-hidden rounded-2xl bg-primary px-8 text-primary-foreground shadow-2xl transition-transform hover:scale-[1.02]"><div class="flex flex-col gap-1"><span class="text-xs font-medium uppercase tracking-widest opacity-60">Try Hovering</span><span class="text-2xl font-bold tracking-tight">Smart Contrast</span></div><div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right h-5 w-5 pointer-events-none" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></div></div><p class="max-w-md text-center text-sm text-muted-foreground leading-relaxed">A physics-based cursor wrapper that handles velocity, magnetic snapping, and auto-contrast inversion.</p></main><footer class="relative z-10 flex w-full justify-between p-8 text-xs text-muted-foreground md:p-12 uppercase tracking-widest"><span>GSAP Power</span><span>React Three Fiber</span></footer></div></div></div>
```

## Reference source files

No reference source files were available.
