# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/moumensoliman/glowy-waves-hero-shadcnui/default
- Registry URL: https://21st.dev/r/moumensoliman/glowy-waves-hero-shadcnui
- Author: moumensoliman
- Component slug: glowy-waves-hero-shadcnui
- Demo slug: default
- Title: glowy-waves-hero-shadcnui
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/moumensoliman/glowy-waves-hero-shadcnui with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/moumensoliman__glowy-waves-hero-shadcnui__default.html
- Local screenshot file: generated-21st-prompts/screenshots/moumensoliman__glowy-waves-hero-shadcnui__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-screen items-center justify-center bg-background p-8"><section class="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-background" role="region" aria-label="Glowing waves hero section"><canvas class="absolute inset-0 h-full w-full" aria-hidden="true" width="992" height="944"></canvas><div class="absolute inset-0 -z-10 pointer-events-none"><div class="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-foreground/[0.035] blur-[140px] dark:bg-foreground/[0.06]"></div><div class="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-foreground/[0.025] blur-[120px] dark:bg-foreground/[0.05]"></div><div class="absolute top-1/2 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.02] blur-[150px] dark:bg-primary/[0.05]"></div></div><div class="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-24 text-center md:px-8 lg:px-12"><div class="w-full" style="opacity: 1; transform: none;"><div class="mb-6 inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-foreground/70 dark:border-border/60 dark:bg-background/70 dark:text-foreground/80" style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles h-4 w-4 text-primary" aria-hidden="true"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>Reactive canvas hero</div><h1 class="mb-6 text-4xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl" style="opacity: 1; transform: none;">Welcome to immersive <span class="bg-gradient-to-r from-primary via-primary/60 to-foreground/80 bg-clip-text text-transparent">realtime playgrounds</span></h1><p class="mx-auto mb-10 max-w-3xl text-lg text-foreground/70 md:text-2xl" style="opacity: 1; transform: none;">Build living surfaces that respond to every interaction. Craft cinematic hero moments, responsive canvases, and luminous gradients without leaving your design system.</p><div class="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row" style="opacity: 1; transform: none;"><button class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 group gap-2 rounded-full px-8 text-base uppercase tracking-[0.2em]">Launch Studio<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button><button class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-sm hover:text-accent-foreground h-10 rounded-full border-border/40 bg-background/60 px-8 text-base text-foreground/80 backdrop-blur transition-all hover:border-border/60 hover:bg-background/70 dark:border-border/50 dark:bg-background/40 dark:text-foreground/70 dark:hover:border-border/70 dark:hover:bg-background/50">Explore stories</button></div><ul class="mb-12 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] text-foreground/70 dark:text-foreground/80" style="opacity: 1; transform: none;"><li class="rounded-full border border-border/40 bg-background/60 px-4 py-2 backdrop-blur dark:border-border/60 dark:bg-background/70">Immersive visuals</li><li class="rounded-full border border-border/40 bg-background/60 px-4 py-2 backdrop-blur dark:border-border/60 dark:bg-background/70">Responsive motion</li><li class="rounded-full border border-border/40 bg-background/60 px-4 py-2 backdrop-blur dark:border-border/60 dark:bg-background/70">GPU friendly</li></ul><div class="grid gap-4 rounded-2xl border border-border/30 bg-background/60 p-6 backdrop-blur-sm dark:border-border/60 dark:bg-background/70 sm:grid-cols-3" style="opacity: 1; transform: none;"><div class="space-y-1" style="opacity: 1; transform: none;"><div class="text-xs uppercase tracking-[0.3em] text-foreground/50 dark:text-foreground/60">Live installations</div><div class="text-3xl font-semibold text-foreground">320+</div></div><div class="space-y-1" style="opacity: 1; transform: none;"><div class="text-xs uppercase tracking-[0.3em] text-foreground/50 dark:text-foreground/60">Latency</div><div class="text-3xl font-semibold text-foreground">8ms</div></div><div class="space-y-1" style="opacity: 1; transform: none;"><div class="text-xs uppercase tracking-[0.3em] text-foreground/50 dark:text-foreground/60">Teams onboarded</div><div class="text-3xl font-semibold text-foreground">120+</div></div></div></div></div></section></div></div></div></div>
```

## Public registry source files

No public registry source files were available.