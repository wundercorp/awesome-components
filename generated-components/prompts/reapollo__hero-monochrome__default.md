# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/reapollo/hero-monochrome/default
- Registry URL: https://21st.dev/r/reapollo/hero-monochrome
- Author: reapollo
- Component slug: hero-monochrome
- Demo slug: default
- Title: hero-monochrome
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/reapollo/hero-monochrome with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/reapollo__hero-monochrome__default.html
- Local screenshot file: generated-21st-prompts/screenshots/reapollo__hero-monochrome__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative isolate min-h-screen w-full transition-colors duration-700 bg-white text-neutral-950"><div class="pointer-events-none absolute inset-0 -z-20" style="background-color: rgb(245, 245, 244); background-image: radial-gradient(65% 90% at 12% -10%, rgba(15, 15, 15, 0.08), transparent 62%), radial-gradient(45% 65% at 88% -20%, rgba(15, 15, 15, 0.06), transparent 70%);"></div><div class="pointer-events-none absolute inset-0 -z-10 opacity-80" style="background-image: radial-gradient(circle at 25% 25%, rgba(17, 17, 17, 0.12) 0.65px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(17, 17, 17, 0.08) 0.65px, transparent 1px); background-size: 12px 12px; background-repeat: repeat;"></div><section class="relative flex min-h-screen w-full flex-col gap-16 px-6 py-24 transition-opacity duration-700 md:gap-20 md:px-10 lg:px-16 xl:px-24 motion-safe:animate-[hero1-intro_1s_cubic-bezier(.25,.9,.3,1)_forwards]"><header class="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-end"><div class="space-y-8"><div class="flex items-center gap-4 text-xs uppercase tracking-[0.4em]"><span class="rounded-full border px-4 py-1 border-neutral-200/80 bg-neutral-100/60">Canvas</span><span class="text-neutral-600">Hero / Monochrome</span></div><div class="space-y-6"><h1 class="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">Launch monochrome experiences with precision and calm energy.</h1><p class="max-w-2xl text-base md:text-lg text-neutral-600">Built for component libraries that demand focus: subtle motion, tonal discipline, and theme-aware surfaces extend naturally across product canvases.</p></div><div class="flex flex-col gap-3 sm:flex-row sm:items-center"><button type="button" class="group inline-flex items-center gap-3 rounded-full border px-6 py-3 text-sm font-medium transition duration-500 border-neutral-200/80 bg-neutral-100/60"><span class="relative flex h-6 w-6 items-center justify-center"><span class="absolute inset-0 rounded-full border border-current opacity-30"></span><span class="h-2.5 w-2.5 rounded-full bg-current transition-transform duration-500 group-hover:scale-110"></span></span>Activate dark mode</button><a href="#" class="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition duration-500 sm:ml-4 border-neutral-200/80 hover:translate-y-[-2px]">Explore patterns<span aria-hidden="true" class="text-lg">↗</span></a></div></div><div class="relative flex h-full w-full items-stretch overflow-hidden rounded-3xl border backdrop-blur-xl"><div class="absolute inset-0 -z-10 rounded-3xl border-neutral-200/80 bg-neutral-100"></div><figure class="relative flex w-full flex-col"><div class="relative w-full overflow-hidden rounded-t-3xl sm:rounded-3xl lg:rounded-3xl"><div class="relative w-full pb-[125%] sm:pb-[110%] md:pb-[85%] lg:pb-[115%]"><img alt="Futuristic monochrome interface composition with orbital typography" loading="lazy" class="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 ease-out hover:scale-[1.02]" src="https://assets.awwwards.com/awards/element/2023/03/642704bd2500c913987159_static.jpeg"><span class="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30 mix-blend-soft-light dark:from-white/10"></span><div class="pointer-events-none absolute inset-0 border border-white/10 mix-blend-overlay dark:border-white/20"></div><div class="pointer-events-none absolute top-6 left-6"><div class="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-black/30 backdrop-blur-sm dark:border-white/20"><svg viewBox="0 0 120 120" class="h-16 w-16" aria-hidden="true"><rect x="26" y="26" width="68" height="68" rx="18" fill="rgba(17,17,17,0.08)" stroke="#111111" stroke-width="1.5" class="motion-safe:animate-[hero1-pulse_4.5s_ease-in-out_infinite] motion-reduce:animate-none"></rect><path d="M60 38v44" stroke="#111111" stroke-width="3" stroke-linecap="round" class="motion-safe:animate-[hero1-trace_6s_ease-in-out_infinite] motion-reduce:animate-none"></path><path d="M42 60h36" stroke="#111111" stroke-width="3" stroke-linecap="round" class="motion-safe:animate-[hero1-trace_6s_ease-in-out_infinite] motion-reduce:animate-none" style="animation-delay: 0.45s;"></path></svg></div></div><span class="pointer-events-none absolute bottom-10 right-10 h-24 w-24 rounded-full border border-white/10 opacity-60 motion-safe:animate-[hero1-orbit_8s_linear_infinite]"></span></div></div><figcaption class="flex items-center justify-between px-6 py-5 text-xs uppercase tracking-[0.35em] text-neutral-600"><span>Archive Capture</span><span class="flex items-center gap-2"><span class="h-1 w-1 animate-pulse rounded-full bg-current"></span>Monochrome Orbit</span></figcaption></figure></div></header><div class="grid grid-cols-1 gap-4 md:grid-cols-3"><div class="group relative overflow-hidden rounded-2xl border px-6 py-5 text-sm uppercase tracking-[0.3em] transition duration-500 border-neutral-200/80 bg-neutral-100"><span class="block text-xs text-neutral-600">Capability</span><span class="mt-4 block text-base font-semibold tracking-[0.2em]">Pulse backdrop</span><span class="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" style="background: radial-gradient(220px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(255,255,255,0.18), transparent 72%);"></span><div class="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full border border-current/15 opacity-70" style="animation-delay: 0s;"></div></div><div class="group relative overflow-hidden rounded-2xl border px-6 py-5 text-sm uppercase tracking-[0.3em] transition duration-500 border-neutral-200/80 bg-neutral-100"><span class="block text-xs text-neutral-600">Capability</span><span class="mt-4 block text-base font-semibold tracking-[0.2em]">Theme aware</span><span class="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" style="background: radial-gradient(220px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(255,255,255,0.18), transparent 72%);"></span><div class="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full border border-current/15 opacity-70" style="animation-delay: 0.35s;"></div></div><div class="group relative overflow-hidden rounded-2xl border px-6 py-5 text-sm uppercase tracking-[0.3em] transition duration-500 border-neutral-200/80 bg-neutral-100"><span class="block text-xs text-neutral-600">Capability</span><span class="mt-4 block text-base font-semibold tracking-[0.2em]">Responsive</span><span class="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" style="background: radial-gradient(220px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(255,255,255,0.18), transparent 72%);"></span><div class="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full border border-current/15 opacity-70" style="animation-delay: 0.7s;"></div></div></div></section></div></div></div></div>
```

## Public registry source files

No public registry source files were available.