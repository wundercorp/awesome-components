# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/0xUrvish/vertical-tabs/default
- Registry URL: https://21st.dev/r/0xUrvish/vertical-tabs
- Author: 0xUrvish
- Component slug: vertical-tabs
- Demo slug: default
- Title: vertical-tabs
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/0xUrvish/vertical-tabs with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/0xUrvish__vertical-tabs__default.html
- Local screenshot file: generated-21st-prompts/screenshots/0xUrvish__vertical-tabs__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center w-full min-h-screen bg-background p-8"><section class="w-full bg-background py-8 md:py-16 lg:py-24"><div class="w-full px-4 md:px-8 lg:px-12 xl:px-20 mx-auto"><div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"><div class="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 pt-4"><div class="space-y-1 mb-12"><h2 class="tracking-tighter text-balance text-3xl font-medium md:text-4xl lg:text-5xl text-foreground">How I can help you</h2><span class="text-[10px] font-medium text-muted-foreground uppercase tracking-[0.3em] block ml-0.5">(SERVICES)</span></div><div class="flex flex-col space-y-0"><button class="group relative flex items-start gap-4 py-6 md:py-8 text-left transition-all duration-500 border-t border-border/50 first:border-0 text-foreground"><div class="absolute left-[-16px] md:left-[-24px] top-0 bottom-0 w-[2px] bg-muted"><div class="absolute top-0 left-0 w-full bg-foreground origin-top" style="height: 95.2%;"></div></div><span class="text-[9px] md:text-[10px] font-medium mt-1 tabular-nums opacity-50">/01</span><div class="flex flex-col gap-2 flex-1"><span class="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight transition-colors duration-500 text-foreground">Web Design</span><div class="overflow-hidden" style="opacity: 1; height: auto;"><p class="text-muted-foreground text-sm md:text-base font-normal leading-relaxed max-w-sm pb-2">Creating beautiful, functional, and user-centric digital experiences.</p></div></div></button><button class="group relative flex items-start gap-4 py-6 md:py-8 text-left transition-all duration-500 border-t border-border/50 first:border-0 text-muted-foreground/60 hover:text-foreground"><div class="absolute left-[-16px] md:left-[-24px] top-0 bottom-0 w-[2px] bg-muted"></div><span class="text-[9px] md:text-[10px] font-medium mt-1 tabular-nums opacity-50">/02</span><div class="flex flex-col gap-2 flex-1"><span class="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight transition-colors duration-500">Framer Development</span></div></button><button class="group relative flex items-start gap-4 py-6 md:py-8 text-left transition-all duration-500 border-t border-border/50 first:border-0 text-muted-foreground/60 hover:text-foreground"><div class="absolute left-[-16px] md:left-[-24px] top-0 bottom-0 w-[2px] bg-muted"></div><span class="text-[9px] md:text-[10px] font-medium mt-1 tabular-nums opacity-50">/03</span><div class="flex flex-col gap-2 flex-1"><span class="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight transition-colors duration-500">Branding</span></div></button></div></div><div class="lg:col-span-7 flex flex-col justify-end h-full order-1 lg:order-2"><div class="relative group/gallery"><div class="relative aspect-4/5 md:aspect-4/3 lg:aspect-16/11 rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-muted/30 border border-border/40"><div class="absolute inset-0 w-full h-full cursor-pointer" style="z-index: 1; opacity: 1; transform: none;"><img alt="Web Design" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105 m-0! p-0! block" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=1200"><div class="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-60"></div></div><div class="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex gap-2 md:gap-3 z-20"><button class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur-md border border-border/50 flex items-center justify-center text-foreground hover:bg-background transition-all active:scale-90" aria-label="Previous"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" color="currentColor" class=""><path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg></button><button class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur-md border border-border/50 flex items-center justify-center text-foreground hover:bg-background transition-all active:scale-90" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" color="currentColor" class=""><path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg></button></div></div></div></div></div></div></section></div></div></div></div>
```

## Public registry source files

No public registry source files were available.