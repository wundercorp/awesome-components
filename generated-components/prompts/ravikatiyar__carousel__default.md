# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ravikatiyar/carousel/default
- Registry URL: https://21st.dev/r/ravikatiyar/carousel
- Author: ravikatiyar
- Component slug: carousel
- Demo slug: default
- Title: carousel
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ravikatiyar/carousel with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ravikatiyar__carousel__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ravikatiyar__carousel__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full bg-background"><section class="w-full max-w-7xl mx-auto py-8" aria-labelledby="reports-heading"><div class="flex items-center justify-between px-4 sm:px-6 mb-4"><h2 id="reports-heading" class="text-2xl font-semibold tracking-tight text-foreground">Shareholders' Letter and Results</h2><div class="hidden sm:flex items-center gap-2"><button aria-label="Scroll left" class="p-2 rounded-full border border-border bg-card text-card-foreground transition-opacity duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left h-5 w-5" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></button><button aria-label="Scroll right" class="p-2 rounded-full border border-border bg-card text-card-foreground transition-opacity duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-5 w-5" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button></div></div><div class="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide space-x-4 md:space-x-6 px-4 sm:px-6"><div class="flex-shrink-0 w-[240px] sm:w-[280px] snap-start"><div class="group cursor-pointer"><div class="relative overflow-hidden rounded-lg bg-card border border-border mb-3 transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:-translate-y-1"><img alt="Report for Q1FY26" class="w-full h-[320px] sm:h-[380px] object-cover" src="https://b.zmtcdn.com/investor-relations/363d6f33a40607fd7b70f39081d79eb6_1753090727.jpeg"><div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex flex-col justify-between text-white"><div><h3 class="text-xs font-bold uppercase tracking-wider">Shareholders' Letter and Results</h3><p class="text-xs text-white/80">Q4FY26 | JULY 20, 2025</p></div><p class="text-sm font-medium">Powering India's changing lifestyles</p></div></div><div class="flex items-center gap-3"><h4 class="font-semibold text-foreground text-sm sm:text-base">Q1FY26</h4><span class="text-xs font-semibold bg-primary text-primary-foreground px-2 py-0.5 rounded-full">NEW</span></div></div></div><div class="flex-shrink-0 w-[240px] sm:w-[280px] snap-start"><div class="group cursor-pointer"><div class="relative overflow-hidden rounded-lg bg-card border border-border mb-3 transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:-translate-y-1"><img alt="Report for Q4FY25" class="w-full h-[320px] sm:h-[380px] object-cover" src="https://b.zmtcdn.com/investor-relations/1199bb1a7e905267f520ace8be13fdad_1746093395.png"><div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex flex-col justify-between text-white"><div><h3 class="text-xs font-bold uppercase tracking-wider">Shareholders' Letter and Results</h3><p class="text-xs text-white/80">Q4FY25 | MAY 1, 2025</p></div><p class="text-sm font-medium">Powering India's changing lifestyles</p></div></div><div class="flex items-center gap-3"><h4 class="font-semibold text-foreground text-sm sm:text-base">Q4FY25</h4></div></div></div><div class="flex-shrink-0 w-[240px] sm:w-[280px] snap-start"><div class="group cursor-pointer"><div class="relative overflow-hidden rounded-lg bg-card border border-border mb-3 transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:-translate-y-1"><img alt="Report for Q3FY25" class="w-full h-[320px] sm:h-[380px] object-cover" src="https://b.zmtcdn.com/investor-relations/2f012a6bbbb592159108f792460fb5b3_1737366169.jpeg"><div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex flex-col justify-between text-white"><div><h3 class="text-xs font-bold uppercase tracking-wider">Shareholders' Letter and Results</h3><p class="text-xs text-white/80">Q3FY25 | JANUARY 20, 2025</p></div><p class="text-sm font-medium">Powering India's changing lifestyles</p></div></div><div class="flex items-center gap-3"><h4 class="font-semibold text-foreground text-sm sm:text-base">Q3FY25</h4></div></div></div><div class="flex-shrink-0 w-[240px] sm:w-[280px] snap-start"><div class="group cursor-pointer"><div class="relative overflow-hidden rounded-lg bg-card border border-border mb-3 transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:-translate-y-1"><img alt="Report for Q2FY25" class="w-full h-[320px] sm:h-[380px] object-cover" src="https://b.zmtcdn.com/investor-relations/fbfcc09072b22ad718da3681e98f711d_1729591272.png"><div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex flex-col justify-between text-white"><div><h3 class="text-xs font-bold uppercase tracking-wider">Shareholders' Letter and Results</h3><p class="text-xs text-white/80">Q2FY25 | OCTOBER 15, 2024</p></div><p class="text-sm font-medium">Powering India's changing lifestyles</p></div></div><div class="flex items-center gap-3"><h4 class="font-semibold text-foreground text-sm sm:text-base">Q2FY25</h4></div></div></div><div class="flex-shrink-0 w-[240px] sm:w-[280px] snap-start"><div class="group cursor-pointer"><div class="relative overflow-hidden rounded-lg bg-card border border-border mb-3 transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:-translate-y-1"><img alt="Report for Q1FY25" class="w-full h-[320px] sm:h-[380px] object-cover" src="https://b.zmtcdn.com/investor-relations/254790073164218ac21893a8046c0a05_1707385481.png"><div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex flex-col justify-between text-white"><div><h3 class="text-xs font-bold uppercase tracking-wider">Shareholders' Letter and Results</h3><p class="text-xs text-white/80">Q1FY25 | JULY 18, 2024</p></div><p class="text-sm font-medium">Powering India's changing lifestyles</p></div></div><div class="flex items-center gap-3"><h4 class="font-semibold text-foreground text-sm sm:text-base">Q1FY25</h4></div></div></div></div></section></div></div></div></div>
```

## Public registry source files

No public registry source files were available.