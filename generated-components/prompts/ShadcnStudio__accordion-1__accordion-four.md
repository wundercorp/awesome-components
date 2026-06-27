# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ShadcnStudio/accordion-1/accordion-four
- Registry URL: https://21st.dev/r/ShadcnStudio/accordion-1
- Author: ShadcnStudio
- Component slug: accordion-1
- Demo slug: accordion-four
- Title: accordion-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ShadcnStudio/accordion-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ShadcnStudio__accordion-1__accordion-four.html
- Local screenshot file: generated-21st-prompts/screenshots/ShadcnStudio__accordion-1__accordion-four.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full" data-orientation="vertical"><div data-state="open" data-orientation="vertical" class="border-b data-[state=open]:border-amber-600 not-last:data-[state=open]:border-b-2 dark:data-[state=open]:border-amber-400"><h3 data-orientation="vertical" data-state="open" class="flex"><button type="button" aria-controls="radix-«r1»" aria-expanded="true" data-state="open" data-orientation="vertical" id="radix-«r0»" class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&amp;[data-state=open]&gt;svg]:rotate-180 data-[state=open]:text-amber-600 dark:data-[state=open]:text-amber-400 [&amp;[data-state=open]&gt;svg]:text-amber-600 dark:[&amp;[data-state=open]&gt;svg]:text-amber-400" data-radix-collection-item="">How do I track my order?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></h3><div data-state="open" id="radix-«r1»" role="region" aria-labelledby="radix-«r0»" data-orientation="vertical" class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width); transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 56px; --radix-collapsible-content-width: 992px;"><div class="pb-4 pt-0 text-muted-foreground">You can track your order by logging into your account and visiting the "Orders" section. You'll receive tracking information via email once your order ships. For real-time updates, you can also use the tracking number provided in your shipping confirmation email.</div></div></div><div data-state="closed" data-orientation="vertical" class="border-b data-[state=open]:border-amber-600 not-last:data-[state=open]:border-b-2 dark:data-[state=open]:border-amber-400"><h3 data-orientation="vertical" data-state="closed" class="flex"><button type="button" aria-controls="radix-«r3»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«r2»" class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&amp;[data-state=open]&gt;svg]:rotate-180 data-[state=open]:text-amber-600 dark:data-[state=open]:text-amber-400 [&amp;[data-state=open]&gt;svg]:text-amber-600 dark:[&amp;[data-state=open]&gt;svg]:text-amber-400" data-radix-collection-item="">What is your return policy?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></h3><div data-state="closed" id="radix-«r3»" hidden="" role="region" aria-labelledby="radix-«r2»" data-orientation="vertical" class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);"></div></div><div data-state="closed" data-orientation="vertical" class="border-b data-[state=open]:border-amber-600 not-last:data-[state=open]:border-b-2 dark:data-[state=open]:border-amber-400"><h3 data-orientation="vertical" data-state="closed" class="flex"><button type="button" aria-controls="radix-«r5»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«r4»" class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&amp;[data-state=open]&gt;svg]:rotate-180 data-[state=open]:text-amber-600 dark:data-[state=open]:text-amber-400 [&amp;[data-state=open]&gt;svg]:text-amber-600 dark:[&amp;[data-state=open]&gt;svg]:text-amber-400" data-radix-collection-item="">How can I contact customer support?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></h3><div data-state="closed" id="radix-«r5»" hidden="" role="region" aria-labelledby="radix-«r4»" data-orientation="vertical" class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);"></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.