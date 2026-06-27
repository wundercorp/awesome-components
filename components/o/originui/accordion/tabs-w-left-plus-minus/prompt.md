# Build Accordion in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Accordion screenshot](screenshot.png)

## Component

- Author group: `originui`
- Component: `accordion`
- Variant: `tabs-w-left-plus-minus`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: originui
- Component slug: accordion
- Demo slug: tabs-w-left-plus-minus
- Title: accordion
- Description: 

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

No reference metadata available.

## Rendered DOM snapshot

This is the rendered demo HTML extracted from the live preview. Use it to verify structure, class names, visible content, and layout.

```html
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="space-y-4 max-w-[500px]"><h2 class="text-xl font-bold">Tabs w/ left plus-minus</h2><div class="w-full space-y-2" data-orientation="vertical"><div data-state="closed" data-orientation="vertical" class="border-border rounded-lg border bg-background px-4 py-1"><h3 data-orientation="vertical" data-state="closed" class="flex"><button type="button" aria-controls="radix-«r1»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«r0»" class="flex flex-1 items-center gap-3 py-2 text-left text-[15px] font-semibold leading-6 transition-all [&amp;&gt;svg&gt;path:last-child]:origin-center [&amp;&gt;svg&gt;path:last-child]:transition-all [&amp;&gt;svg&gt;path:last-child]:duration-200 [&amp;&gt;svg]:-order-1 [&amp;[data-state=open]&gt;svg&gt;path:last-child]:rotate-90 [&amp;[data-state=open]&gt;svg&gt;path:last-child]:opacity-0 [&amp;[data-state=open]&gt;svg]:rotate-180" data-radix-collection-item="">What makes Origin UI different?<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus shrink-0 opacity-60 transition-transform duration-200" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button></h3><div data-state="closed" id="radix-«r1»" hidden="" role="region" aria-labelledby="radix-«r0»" data-orientation="vertical" class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);"></div></div><div data-state="closed" data-orientation="vertical" class="border-border rounded-lg border bg-background px-4 py-1"><h3 data-orientation="vertical" data-state="closed" class="flex"><button type="button" aria-controls="radix-«r3»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«r2»" class="flex flex-1 items-center gap-3 py-2 text-left text-[15px] font-semibold leading-6 transition-all [&amp;&gt;svg&gt;path:last-child]:origin-center [&amp;&gt;svg&gt;path:last-child]:transition-all [&amp;&gt;svg&gt;path:last-child]:duration-200 [&amp;&gt;svg]:-order-1 [&amp;[data-state=open]&gt;svg&gt;path:last-child]:rotate-90 [&amp;[data-state=open]&gt;svg&gt;path:last-child]:opacity-0 [&amp;[data-state=open]&gt;svg]:rotate-180" data-radix-collection-item="">How can I customize the components?<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus shrink-0 opacity-60 transition-transform duration-200" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button></h3><div data-state="closed" id="radix-«r3»" hidden="" role="region" aria-labelledby="radix-«r2»" data-orientation="vertical" class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);"></div></div><div data-state="open" data-orientation="vertical" class="border-border rounded-lg border bg-background px-4 py-1"><h3 data-orientation="vertical" data-state="open" class="flex"><button type="button" aria-controls="radix-«r5»" aria-expanded="true" data-state="open" data-orientation="vertical" id="radix-«r4»" class="flex flex-1 items-center gap-3 py-2 text-left text-[15px] font-semibold leading-6 transition-all [&amp;&gt;svg&gt;path:last-child]:origin-center [&amp;&gt;svg&gt;path:last-child]:transition-all [&amp;&gt;svg&gt;path:last-child]:duration-200 [&amp;&gt;svg]:-order-1 [&amp;[data-state=open]&gt;svg&gt;path:last-child]:rotate-90 [&amp;[data-state=open]&gt;svg&gt;path:last-child]:opacity-0 [&amp;[data-state=open]&gt;svg]:rotate-180" data-radix-collection-item="">Is Origin UI optimized for performance?<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus shrink-0 opacity-60 transition-transform duration-200" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button></h3><div data-state="open" id="radix-«r5»" role="region" aria-labelledby="radix-«r4»" data-orientation="vertical" class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width); transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 48px; --radix-collapsible-content-width: 466px;"><div class="pt-0 pb-2 ps-7 text-muted-foreground">Yes, with tree-shaking, code splitting, and minimal runtime overhead. Most components are under 5KB gzipped.</div></div></div><div data-state="closed" data-orientation="vertical" class="border-border rounded-lg border bg-background px-4 py-1"><h3 data-orientation="vertical" data-state="closed" class="flex"><button type="button" aria-controls="radix-«r7»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«r6»" class="flex flex-1 items-center gap-3 py-2 text-left text-[15px] font-semibold leading-6 transition-all [&amp;&gt;svg&gt;path:last-child]:origin-center [&amp;&gt;svg&gt;path:last-child]:transition-all [&amp;&gt;svg&gt;path:last-child]:duration-200 [&amp;&gt;svg]:-order-1 [&amp;[data-state=open]&gt;svg&gt;path:last-child]:rotate-90 [&amp;[data-state=open]&gt;svg&gt;path:last-child]:opacity-0 [&amp;[data-state=open]&gt;svg]:rotate-180" data-radix-collection-item="">How accessible are the components?<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus shrink-0 opacity-60 transition-transform duration-200" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button></h3><div data-state="closed" id="radix-«r7»" hidden="" role="region" aria-labelledby="radix-«r6»" data-orientation="vertical" class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);"></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
