# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/brijr/accordion-1/accordion-two
- Registry URL: https://21st.dev/r/brijr/accordion-1
- Author: brijr
- Component slug: accordion-1
- Demo slug: accordion-two
- Title: accordion-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/brijr/accordion-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/brijr__accordion-1__accordion-two.html
- Local screenshot file: generated-21st-prompts/screenshots/brijr__accordion-1__accordion-two.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><section class="py-8 md:py-12"><div class="mx-auto max-w-5xl p-6 sm:p-8"><h3 class="!mt-0">Frequently Asked Questions</h3><h4 class="text-muted-foreground">Can't find the answer you're looking for? Reach out to our customer support team.</h4><div class="not-prose mt-4 md:mt-8"><div class="flex flex-col gap-4" data-orientation="vertical"><div data-state="closed" data-orientation="vertical" class="rounded-md border bg-muted/20 px-4 transition-all hover:bg-muted/50"><h3 data-orientation="vertical" data-state="closed" class="flex"><button type="button" aria-controls="radix-«r1»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«r0»" class="flex flex-1 items-center justify-between py-4 font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 text-left hover:no-underline" data-radix-collection-item="">Lorem ipsum dolor sit amet?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></h3><div data-state="closed" id="radix-«r1»" hidden="" role="region" aria-labelledby="radix-«r0»" data-orientation="vertical" class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);"></div></div><div data-state="closed" data-orientation="vertical" class="rounded-md border bg-muted/20 px-4 transition-all hover:bg-muted/50"><h3 data-orientation="vertical" data-state="closed" class="flex"><button type="button" aria-controls="radix-«r3»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«r2»" class="flex flex-1 items-center justify-between py-4 font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 text-left hover:no-underline" data-radix-collection-item="">Ut enim ad minim veniam?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></h3><div data-state="closed" id="radix-«r3»" hidden="" role="region" aria-labelledby="radix-«r2»" data-orientation="vertical" class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);"></div></div><div data-state="closed" data-orientation="vertical" class="rounded-md border bg-muted/20 px-4 transition-all hover:bg-muted/50"><h3 data-orientation="vertical" data-state="closed" class="flex"><button type="button" aria-controls="radix-«r5»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«r4»" class="flex flex-1 items-center justify-between py-4 font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 text-left hover:no-underline" data-radix-collection-item="">Duis aute irure dolor in reprehenderit?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></h3><div data-state="closed" id="radix-«r5»" hidden="" role="region" aria-labelledby="radix-«r4»" data-orientation="vertical" class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);"></div></div><div data-state="closed" data-orientation="vertical" class="rounded-md border bg-muted/20 px-4 transition-all hover:bg-muted/50"><h3 data-orientation="vertical" data-state="closed" class="flex"><button type="button" aria-controls="radix-«r7»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«r6»" class="flex flex-1 items-center justify-between py-4 font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 text-left hover:no-underline" data-radix-collection-item="">Excepteur sint occaecat cupidatat non proident?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></h3><div data-state="closed" id="radix-«r7»" hidden="" role="region" aria-labelledby="radix-«r6»" data-orientation="vertical" class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);"></div></div></div></div></div></section></div></div></div>
```

## Public registry source files

No public registry source files were available.