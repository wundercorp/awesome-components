# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/isaiahbjork/event-countdown-card/default
- Registry URL: https://21st.dev/r/isaiahbjork/event-countdown-card
- Author: isaiahbjork
- Component slug: event-countdown-card
- Demo slug: default
- Title: event-countdown-card
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/isaiahbjork/event-countdown-card with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/isaiahbjork__event-countdown-card__default.html
- Local screenshot file: generated-21st-prompts/screenshots/isaiahbjork__event-countdown-card__default.png

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
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="default_Page">Page</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen p-4 bg-background flex items-center justify-center"><div data-slot="event-countdown-card" class="relative w-80 rounded-2xl border border-border/50 bg-card text-card-foreground overflow-hidden shadow-lg shadow-black/5 cursor-pointer group" style="opacity: 1; filter: blur(0px); transform: none;"><div class="relative overflow-hidden" style="opacity: 1; filter: blur(0px); transform: none;"><img alt="React &amp; AI Workshop" class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&amp;h=600&amp;fit=crop" style="transform: none;"><div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div></div><div class="p-6 space-y-4"><div class="space-y-2" style="opacity: 1; filter: blur(0px); transform: none;"><h3 class="text-xl font-bold leading-tight tracking-tight" style="opacity: 0.9;">React &amp; AI Workshop</h3><div class="flex items-center gap-4 text-sm text-muted-foreground"><div class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar w-4 h-4" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg><span>6/30/2026</span></div><div class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users w-4 h-4" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg><span>42 attending</span></div></div></div><div class="space-y-3" style="opacity: 1; filter: blur(0px); transform: none;"><div class="flex items-center gap-1 text-sm font-medium text-muted-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock w-4 h-4" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><span>Event starts in:</span></div><div class="grid grid-cols-4 gap-3"><div class="bg-muted/50 rounded-xl p-3 text-center border border-border/30"><div class="text-lg font-bold tabular-nums">02</div><div class="text-xs text-muted-foreground font-medium">Days</div></div><div class="bg-muted/50 rounded-xl p-3 text-center border border-border/30"><div class="text-lg font-bold tabular-nums">05</div><div class="text-xs text-muted-foreground font-medium">Hours</div></div><div class="bg-muted/50 rounded-xl p-3 text-center border border-border/30"><div class="text-lg font-bold tabular-nums">29</div><div class="text-xs text-muted-foreground font-medium">Min</div></div><div class="bg-muted/50 rounded-xl p-3 text-center border border-border/30" style="opacity: 1; transform: scale(1.1121);"><div class="text-lg font-bold tabular-nums">55</div><div class="text-xs text-muted-foreground font-medium">Sec</div></div></div></div><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 px-4 py-2 w-full h-11 font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/25" tabindex="0" style="opacity: 1; transform: none;">Reserve Your Spot</button></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.