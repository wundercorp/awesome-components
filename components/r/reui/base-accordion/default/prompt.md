# Build Base Accordion in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Base Accordion screenshot](screenshot.png)

## Component

- Author group: `reui`
- Component: `base-accordion`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: reui
- Component slug: base-accordion
- Demo slug: default
- Title: base-accordion
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex w-full h-screen justify-center items-center p-10"><div data-orientation="vertical" dir="ltr" role="region" data-slot="accordion" class="w-full lg:w-[75%]"><div data-orientation="vertical" data-index="0" data-closed="" data-slot="accordion-item" class="border-b border-border"><h3 data-orientation="vertical" data-index="0" data-closed="" data-slot="accordion-header" class="flex"><button type="button" data-value="" data-orientation="vertical" tabindex="0" aria-disabled="false" aria-expanded="false" id="base-ui-«r1»" data-slot="accordion-trigger" class="flex flex-1 items-center justify-between py-4 gap-2.5 text-foreground font-medium transition-all [&amp;[data-panel-open]&gt;svg]:rotate-180 cursor-pointer">What is ReUI?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down size-4 shrink-0 transition-transform duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></h3></div><div data-orientation="vertical" data-index="1" data-closed="" data-slot="accordion-item" class="border-b border-border"><h3 data-orientation="vertical" data-index="1" data-closed="" data-slot="accordion-header" class="flex"><button type="button" data-value="" data-orientation="vertical" data-index="1" tabindex="0" aria-disabled="false" aria-expanded="false" id="base-ui-«r3»" data-slot="accordion-trigger" class="flex flex-1 items-center justify-between py-4 gap-2.5 text-foreground font-medium transition-all [&amp;[data-panel-open]&gt;svg]:rotate-180 cursor-pointer">Who benefits from ReUI?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down size-4 shrink-0 transition-transform duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></h3></div><div data-orientation="vertical" data-index="2" data-closed="" data-slot="accordion-item" class="border-b border-border"><h3 data-orientation="vertical" data-index="2" data-closed="" data-slot="accordion-header" class="flex"><button type="button" data-value="" data-orientation="vertical" data-index="2" tabindex="0" aria-disabled="false" aria-expanded="false" id="base-ui-«r5»" data-slot="accordion-trigger" class="flex flex-1 items-center justify-between py-4 gap-2.5 text-foreground font-medium transition-all [&amp;[data-panel-open]&gt;svg]:rotate-180 cursor-pointer">Why choose ReUI?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down size-4 shrink-0 transition-transform duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></h3></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
