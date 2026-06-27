# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/fuma-nama/accordion/default
- Registry URL: https://21st.dev/r/fuma-nama/accordion
- Author: fuma-nama
- Component slug: accordion
- Demo slug: default
- Title: accordion
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/fuma-nama/accordion with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/fuma-nama__accordion__default.html
- Local screenshot file: generated-21st-prompts/screenshots/fuma-nama__accordion__default.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="divide-y divide-border overflow-hidden rounded-lg border bg-card w-full" data-orientation="vertical"><div data-state="closed" data-orientation="vertical" class="group/accordion relative scroll-m-20"><h3 data-orientation="vertical" data-state="closed" id="what-is-fumadocs" class="not-prose flex flex-row items-center font-medium text-foreground"><button type="button" aria-controls="radix-«r1»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«r0»" class="flex flex-1 items-center gap-2 p-4 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-radix-collection-item=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right -ms-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]/accordion:rotate-90" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>What is Fumadocs?</button><button type="button" aria-label="Copy Link" class="inline-flex h-8 w-8 items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 hover:bg-accent hover:text-accent-foreground text-muted-foreground me-2 disabled:pointer-events-none disabled:opacity-50"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link h-3.5 w-3.5" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></button></h3><div data-state="closed" id="radix-«r1»" hidden="" role="region" aria-labelledby="radix-«r0»" data-orientation="vertical" class="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);"></div></div><div data-state="closed" data-orientation="vertical" class="group/accordion relative scroll-m-20"><h3 data-orientation="vertical" data-state="closed" id="what-do-we-love" class="not-prose flex flex-row items-center font-medium text-foreground"><button type="button" aria-controls="radix-«r3»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«r2»" class="flex flex-1 items-center gap-2 p-4 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-radix-collection-item=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right -ms-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]/accordion:rotate-90" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>What do we love?</button><button type="button" aria-label="Copy Link" class="inline-flex h-8 w-8 items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 hover:bg-accent hover:text-accent-foreground text-muted-foreground me-2 disabled:pointer-events-none disabled:opacity-50"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link h-3.5 w-3.5" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></button></h3><div data-state="closed" id="radix-«r3»" hidden="" role="region" aria-labelledby="radix-«r2»" data-orientation="vertical" class="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);"></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.