# Build Tree in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Tree screenshot](screenshot.png)

## Component

- Author group: `jollyshopland`
- Component: `tree`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: jollyshopland
- Component slug: tree
- Demo slug: default
- Title: tree
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><template data-react-aria-hidden="true"></template><span data-focus-scope-start="true" hidden=""></span><div class="flex flex-col gap-1 overflow-auto p-1 outline-none w-[250px]" data-rac="" aria-label="Files" role="treegrid" id="react-aria5152178786-«r1»" aria-multiselectable="true" tabindex="0" data-selection-mode="multiple" data-collection="react-aria5152178786-«r0»"><div tabindex="-1" data-collection="react-aria5152178786-«r0»" data-key="1" data-react-aria-pressable="true" id="react-aria5152178786-«r1»-1" role="row" aria-label="Documents" aria-selected="false" aria-expanded="false" aria-level="1" aria-posinset="1" aria-setsize="2" class="group relative flex items-center gap-2 rounded-md p-1 pl-[calc((var(--tree-item-level)_-_1)_*_2.25rem)] font-medium outline-none ring-offset-background data-[has-child-rows]:pl-[calc((var(--tree-item-level)_-_1)_*_1.5rem)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2 focus-visible:outline-none" data-rac="" data-has-child-items="true" data-level="1" data-selection-mode="multiple" style="--tree-item-level: 1;"><div role="gridcell" aria-colindex="1" style="display: contents;"><button data-react-aria-prevent-focus="true" id="react-aria5152178786-«r4»" class="outline-none" data-rac="" type="button" tabindex="-1" data-react-aria-pressable="true" aria-label="Expand" aria-labelledby="react-aria5152178786-«r4» react-aria5152178786-«r1»-1" slot="chevron"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right size-4 shrink-0 transition-transform duration-200 group-data-[expanded]:rotate-90" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button><label data-react-aria-pressable="true" class="group/checkbox flex items-center gap-x-2 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70" data-rac="" slot="selection"><span style="border: 0px; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(50%); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap;"><input id="react-aria5152178786-«r5»" aria-label="Select" aria-labelledby="react-aria5152178786-«r5» react-aria5152178786-«r1»-1" data-react-aria-pressable="true" tabindex="0" type="checkbox" title=""></span><div class="flex size-4 shrink-0 items-center justify-center rounded-sm border border-primary text-current ring-offset-background group-data-[focus-visible]/checkbox:outline-none group-data-[focus-visible]/checkbox:ring-2 group-data-[focus-visible]/checkbox:ring-ring group-data-[focus-visible]/checkbox:ring-offset-2 group-data-[indeterminate]/checkbox:bg-primary group-data-[selected]/checkbox:bg-primary group-data-[indeterminate]/checkbox:text-primary-foreground group-data-[selected]/checkbox:text-primary-foreground group-data-[disabled]/checkbox:cursor-not-allowed group-data-[disabled]/checkbox:opacity-50 group-data-[invalid]/checkbox:border-destructive group-data-[invalid]/checkbox:group-data-[selected]/checkbox:bg-destructive group-data-[invalid]/checkbox:group-data-[selected]/checkbox:text-destructive-foreground focus:outline-none focus-visible:outline-none"></div></label>Documents<button class="ml-auto flex items-center justify-center rounded-md ring-offset-background data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2 focus-visible:outline-none" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" aria-label="Info" id="react-aria5152178786-«r9»"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info size-4 shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></button></div></div><div tabindex="-1" data-collection="react-aria5152178786-«r0»" data-key="4" data-react-aria-pressable="true" id="react-aria5152178786-«r1»-4" role="row" aria-label="Photos" aria-selected="false" aria-expanded="false" aria-level="1" aria-posinset="2" aria-setsize="2" class="group relative flex items-center gap-2 rounded-md p-1 pl-[calc((var(--tree-item-level)_-_1)_*_2.25rem)] font-medium outline-none ring-offset-background data-[has-child-rows]:pl-[calc((var(--tree-item-level)_-_1)_*_1.5rem)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2 focus-visible:outline-none" data-rac="" data-has-child-items="true" data-level="1" data-selection-mode="multiple" style="--tree-item-level: 1;"><div role="gridcell" aria-colindex="1" style="display: contents;"><button data-react-aria-prevent-focus="true" id="react-aria5152178786-«rd»" class="outline-none" data-rac="" type="button" tabindex="-1" data-react-aria-pressable="true" aria-label="Expand" aria-labelledby="react-aria5152178786-«rd» react-aria5152178786-«r1»-4" slot="chevron"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right size-4 shrink-0 transition-transform duration-200 group-data-[expanded]:rotate-90" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button><label data-react-aria-pressable="true" class="group/checkbox flex items-center gap-x-2 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70" data-rac="" slot="selection"><span style="border: 0px; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(50%); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap;"><input id="react-aria5152178786-«re»" aria-label="Select" aria-labelledby="react-aria5152178786-«re» react-aria5152178786-«r1»-4" data-react-aria-pressable="true" tabindex="0" type="checkbox" title=""></span><div class="flex size-4 shrink-0 items-center justify-center rounded-sm border border-primary text-current ring-offset-background group-data-[focus-visible]/checkbox:outline-none group-data-[focus-visible]/checkbox:ring-2 group-data-[focus-visible]/checkbox:ring-ring group-data-[focus-visible]/checkbox:ring-offset-2 group-data-[indeterminate]/checkbox:bg-primary group-data-[selected]/checkbox:bg-primary group-data-[indeterminate]/checkbox:text-primary-foreground group-data-[selected]/checkbox:text-primary-foreground group-data-[disabled]/checkbox:cursor-not-allowed group-data-[disabled]/checkbox:opacity-50 group-data-[invalid]/checkbox:border-destructive group-data-[invalid]/checkbox:group-data-[selected]/checkbox:bg-destructive group-data-[invalid]/checkbox:group-data-[selected]/checkbox:text-destructive-foreground focus:outline-none focus-visible:outline-none"></div></label>Photos<button class="ml-auto flex items-center justify-center rounded-md ring-offset-background data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2 focus-visible:outline-none" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" aria-label="Info" id="react-aria5152178786-«ri»"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info size-4 shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></button></div></div></div><span data-focus-scope-end="true" hidden=""></span></div></div></div>
```

## Reference source files

No reference source files were available.
