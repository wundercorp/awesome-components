# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/micka_design/accordion/default
- Registry URL: https://21st.dev/r/micka_design/accordion
- Author: micka_design
- Component slug: accordion
- Demo slug: default
- Title: accordion
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/micka_design/accordion with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/micka_design__accordion__default.html
- Local screenshot file: generated-21st-prompts/screenshots/micka_design__accordion__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center min-h-screen bg-background"><div class="max-w-full flex flex-col gap-0.5 w-80" data-orientation="vertical"><div data-state="open" data-orientation="vertical" class="relative"><div class="absolute inset-0 rounded-[20px] bg-accent/20 dark:bg-accent/12 pointer-events-none" style="opacity: 1;"></div><div class="relative"><div data-orientation="vertical" data-state="open"><button type="button" aria-controls="radix-«r1»" aria-expanded="true" data-state="open" data-orientation="vertical" id="radix-«r0»" class="relative z-10 flex items-center gap-2.5 rounded-[20px] px-3 py-2 w-full cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[#6B97FF] focus-visible:ring-offset-0" data-radix-collection-item=""><span class="inline-grid text-[13px] flex-1 text-left"><span class="col-start-1 row-start-1 invisible" aria-hidden="true" style="font-variation-settings: &quot;wght&quot; 550;">What is this component?</span><span class="col-start-1 row-start-1 transition-[color,font-variation-settings] duration-80 text-foreground" style="font-variation-settings: &quot;wght&quot; 550;">What is this component?</span></span><span class="shrink-0 inline-flex items-center justify-center" style="transform: rotate(90deg);"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right transition-[color,stroke-width] duration-80 text-foreground" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></span></button></div></div><div class="overflow-hidden cursor-pointer" data-state="open" id="radix-«r1»" role="region" aria-labelledby="radix-«r0»" data-orientation="vertical" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width); height: auto; transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 74.5px; --radix-collapsible-content-width: 320px;"><div class="px-3 pb-3 pt-1 text-[13px] text-muted-foreground">A fluid accordion with smooth spring animations, collapsible sections, and proximity hover effects when grouped.</div></div></div><div data-state="closed" data-orientation="vertical" class="relative"><div class="relative"><div data-orientation="vertical" data-state="closed"><button type="button" aria-controls="radix-«r5»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«r4»" class="relative z-10 flex items-center gap-2.5 rounded-[20px] px-3 py-2 w-full cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[#6B97FF] focus-visible:ring-offset-0" data-radix-collection-item=""><span class="inline-grid text-[13px] flex-1 text-left"><span class="col-start-1 row-start-1 invisible" aria-hidden="true" style="font-variation-settings: &quot;wght&quot; 550;">How does it animate?</span><span class="col-start-1 row-start-1 transition-[color,font-variation-settings] duration-80 text-muted-foreground" style="font-variation-settings: &quot;wght&quot; 400;">How does it animate?</span></span><span class="shrink-0 inline-flex items-center justify-center" style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right transition-[color,stroke-width] duration-80 text-muted-foreground" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></span></button></div></div></div><div data-state="closed" data-orientation="vertical" class="relative"><div class="relative"><div data-orientation="vertical" data-state="closed"><button type="button" aria-controls="radix-«r7»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«r6»" class="relative z-10 flex items-center gap-2.5 rounded-[20px] px-3 py-2 w-full cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[#6B97FF] focus-visible:ring-offset-0" data-radix-collection-item=""><span class="inline-grid text-[13px] flex-1 text-left"><span class="col-start-1 row-start-1 invisible" aria-hidden="true" style="font-variation-settings: &quot;wght&quot; 550;">Is it accessible?</span><span class="col-start-1 row-start-1 transition-[color,font-variation-settings] duration-80 text-muted-foreground" style="font-variation-settings: &quot;wght&quot; 400;">Is it accessible?</span></span><span class="shrink-0 inline-flex items-center justify-center" style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right transition-[color,stroke-width] duration-80 text-muted-foreground" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></span></button></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.