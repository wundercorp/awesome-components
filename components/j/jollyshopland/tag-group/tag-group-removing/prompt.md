# Build Tag Group in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Tag Group screenshot](screenshot.png)

## Component

- Author group: `jollyshopland`
- Component: `tag-group`
- Variant: `tag-group-removing`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: jollyshopland
- Component slug: tag-group
- Demo slug: tag-group-removing
- Title: tag-group
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><template data-react-aria-hidden="true"></template><div class="space-y-1"><span class="text-sm font-medium leading-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70 group-data-[invalid]:text-destructive" id="react-aria9204551609-«r1»">Categories</span><div class="flex flex-wrap gap-2 data-[empty]:text-sm data-[empty]:text-muted-foreground" data-rac="" id="react-aria9204551609-«r0»" aria-labelledby="react-aria9204551609-«r1»" aria-multiselectable="true" tabindex="0" aria-atomic="false" aria-relevant="additions" aria-live="off" role="grid" data-collection="react-aria9204551609-«r5»"><div class="inline-flex items-center gap-2 rounded-full border px-2.5 py-0.5 text-xs font-semibold ring-offset-background transition-colors data-[focused]:outline-none data-[focused]:ring-2 data-[focused]:ring-ring data-[focused]:ring-offset-2 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 border-transparent bg-secondary text-secondary-foreground data-[hovered]:bg-secondary/80 pr-1" data-rac="" tabindex="0" data-collection="react-aria9204551609-«r5»" data-key="1" data-react-aria-pressable="true" id="react-aria9204551609-«r0»-1" role="row" aria-label="News" aria-selected="false" data-allows-removing="true" data-selection-mode="multiple"><div role="gridcell" aria-colindex="1" style="display: contents;">News<button id="react-aria9204551609-«r7»" class="rounded-sm opacity-70 ring-offset-background transition-opacity data-[hovered]:opacity-100 focus-visible:outline-none" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" aria-label="Remove" aria-labelledby="react-aria9204551609-«r7» react-aria9204551609-«r0»-1" slot="remove"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x size-3" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button></div></div><div class="inline-flex items-center gap-2 rounded-full border px-2.5 py-0.5 text-xs font-semibold ring-offset-background transition-colors data-[focused]:outline-none data-[focused]:ring-2 data-[focused]:ring-ring data-[focused]:ring-offset-2 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 border-transparent bg-secondary text-secondary-foreground data-[hovered]:bg-secondary/80 pr-1" data-rac="" tabindex="0" data-collection="react-aria9204551609-«r5»" data-key="2" data-react-aria-pressable="true" id="react-aria9204551609-«r0»-2" role="row" aria-label="Travel" aria-selected="false" data-allows-removing="true" data-selection-mode="multiple"><div role="gridcell" aria-colindex="1" style="display: contents;">Travel<button id="react-aria9204551609-«rc»" class="rounded-sm opacity-70 ring-offset-background transition-opacity data-[hovered]:opacity-100 focus-visible:outline-none" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" aria-label="Remove" aria-labelledby="react-aria9204551609-«rc» react-aria9204551609-«r0»-2" slot="remove"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x size-3" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button></div></div><div class="inline-flex items-center gap-2 rounded-full border px-2.5 py-0.5 text-xs font-semibold ring-offset-background transition-colors data-[focused]:outline-none data-[focused]:ring-2 data-[focused]:ring-ring data-[focused]:ring-offset-2 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 border-transparent bg-secondary text-secondary-foreground data-[hovered]:bg-secondary/80 pr-1" data-rac="" tabindex="0" data-collection="react-aria9204551609-«r5»" data-key="3" data-react-aria-pressable="true" id="react-aria9204551609-«r0»-3" role="row" aria-label="Gaming" aria-selected="false" data-allows-removing="true" data-selection-mode="multiple"><div role="gridcell" aria-colindex="1" style="display: contents;">Gaming<button id="react-aria9204551609-«rh»" class="rounded-sm opacity-70 ring-offset-background transition-opacity data-[hovered]:opacity-100 focus-visible:outline-none" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" aria-label="Remove" aria-labelledby="react-aria9204551609-«rh» react-aria9204551609-«r0»-3" slot="remove"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x size-3" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button></div></div><div class="inline-flex items-center gap-2 rounded-full border px-2.5 py-0.5 text-xs font-semibold ring-offset-background transition-colors data-[focused]:outline-none data-[focused]:ring-2 data-[focused]:ring-ring data-[focused]:ring-offset-2 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 border-transparent bg-secondary text-secondary-foreground data-[hovered]:bg-secondary/80 pr-1" data-rac="" tabindex="0" data-collection="react-aria9204551609-«r5»" data-key="4" data-react-aria-pressable="true" id="react-aria9204551609-«r0»-4" role="row" aria-label="Shopping" aria-selected="false" data-allows-removing="true" data-selection-mode="multiple"><div role="gridcell" aria-colindex="1" style="display: contents;">Shopping<button id="react-aria9204551609-«rm»" class="rounded-sm opacity-70 ring-offset-background transition-opacity data-[hovered]:opacity-100 focus-visible:outline-none" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" aria-label="Remove" aria-labelledby="react-aria9204551609-«rm» react-aria9204551609-«r0»-4" slot="remove"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x size-3" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
