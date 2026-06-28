# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ruixenui/ruixen-ui-hero/default
- Registry URL: https://21st.dev/r/ruixenui/ruixen-ui-hero
- Author: ruixenui
- Component slug: ruixen-ui-hero
- Demo slug: default
- Title: ruixen-ui-hero
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ruixenui/ruixen-ui-hero with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ruixenui__ruixen-ui-hero__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ruixenui__ruixen-ui-hero__default.png

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
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="named_DemoOne_DemoOne">DemoOne</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><section class="w-full min-h-[90vh] bg-gradient-to-b from-background to-muted/30 relative overflow-hidden"><div class="absolute inset-0 overflow-hidden"><div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-70"></div><div class="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl" style="opacity: 0.3; transform: none;"></div><div class="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" style="opacity: 0.2; transform: none;"></div></div><div class="container mx-auto px-4 py-16 md:py-24 relative z-10"><div class="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6"><div class="w-full lg:w-1/2 space-y-8"><div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/80 border border-border" style="opacity: 1; transform: none;"><span class="flex h-2 w-2 rounded-full bg-primary"></span><span class="text-sm font-medium">Modern UI Components</span></div><div><h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight" style="opacity: 1; transform: none;">Create stunning <span class="text-primary">interfaces</span> with smooth transitions</h1><p class="mt-6 text-lg text-muted-foreground max-w-lg" style="opacity: 1; transform: none;">Build beautiful, accessible, and performant user interfaces with our modern component library powered by Shadcn UI and Tailwind CSS.</p></div><div class="flex flex-wrap gap-4" style="opacity: 1; transform: none;"><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow-sm shadow-black/5 hover:bg-primary/90 h-10 rounded-lg px-8 group">Get Started<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm shadow-black/5 hover:bg-accent hover:text-accent-foreground h-10 rounded-lg px-8 group">View Components<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link ml-2 h-4 w-4 transition-transform group-hover:scale-110" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg></button></div></div><div class="w-full lg:w-1/2 relative" style="opacity: 1; transform: none;"><div class="relative bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg"><div class="aspect-video relative overflow-hidden rounded-lg border border-border mb-6"><img alt="" width="100" height="100" class="w-full h-full rounded-lg" src="https://raw.githubusercontent.com/ruixenui/RUIXEN_ASSESTS/refs/heads/main/component_assests/tour.png"></div><ul class="space-y-4"><li class="flex items-start gap-4" style="opacity: 1; transform: none;"><div class="text-primary shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-5 w-5" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div><span class="text-base text-muted-foreground">Built with Shadcn UI and Tailwind CSS</span></li><li class="flex items-start gap-4" style="opacity: 1; transform: none;"><div class="text-primary shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-5 w-5" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div><span class="text-base text-muted-foreground">Smooth animations and transitions</span></li><li class="flex items-start gap-4" style="opacity: 1; transform: none;"><div class="text-primary shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-5 w-5" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div><span class="text-base text-muted-foreground">Fully responsive and accessible</span></li><li class="flex items-start gap-4" style="opacity: 1; transform: none;"><div class="text-primary shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-5 w-5" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div><span class="text-base text-muted-foreground">Dark and light mode support</span></li></ul></div><div class="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div><div class="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/5 rounded-full blur-2xl"></div></div></div></div></section></div></div>
```

## Public registry source files

No public registry source files were available.