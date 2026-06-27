# Build List Box in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![List Box screenshot](screenshot.png)

## Component

- Author group: `jollyshopland`
- Component: `list-box`
- Variant: `drag-between-lists`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: jollyshopland
- Component slug: list-box
- Demo slug: drag-between-lists
- Title: list-box
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div style="display: flex; gap: 12px; flex-wrap: wrap;"><template data-react-aria-hidden="true"></template><span data-focus-scope-start="true" hidden=""></span><div class="max-h-[200px] group overflow-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-none data-[empty]:p-6 data-[empty]:text-center data-[empty]:text-sm" data-rac="" aria-label="First ListBox" role="listbox" id="react-aria6753761734-«r5»" tabindex="0" data-collection="react-aria6753761734-«r0»" data-layout="stack" data-orientation="vertical"><div class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focused]:bg-accent data-[focused]:text-accent-foreground data-[hovered]:bg-accent data-[hovered]:text-accent-foreground data-[selection-mode]:pl-8" data-rac="" role="option" aria-describedby="react-aria-description-0" tabindex="-1" data-collection="react-aria6753761734-«r0»" data-key="1" id="react-aria6753761734-«r5»-option-1" draggable="true" data-allows-dragging="true">Adobe Photoshop</div><div class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focused]:bg-accent data-[focused]:text-accent-foreground data-[hovered]:bg-accent data-[hovered]:text-accent-foreground data-[selection-mode]:pl-8" data-rac="" role="option" aria-describedby="react-aria-description-0" tabindex="-1" data-collection="react-aria6753761734-«r0»" data-key="2" id="react-aria6753761734-«r5»-option-2" draggable="true" data-allows-dragging="true">Adobe XD</div><div class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focused]:bg-accent data-[focused]:text-accent-foreground data-[hovered]:bg-accent data-[hovered]:text-accent-foreground data-[selection-mode]:pl-8" data-rac="" role="option" aria-describedby="react-aria-description-0" tabindex="-1" data-collection="react-aria6753761734-«r0»" data-key="3" id="react-aria6753761734-«r5»-option-3" draggable="true" data-allows-dragging="true">Documents</div><div class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focused]:bg-accent data-[focused]:text-accent-foreground data-[hovered]:bg-accent data-[hovered]:text-accent-foreground data-[selection-mode]:pl-8" data-rac="" role="option" aria-describedby="react-aria-description-0" tabindex="-1" data-collection="react-aria6753761734-«r0»" data-key="4" id="react-aria6753761734-«r5»-option-4" draggable="true" data-allows-dragging="true">Adobe InDesign</div><div class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focused]:bg-accent data-[focused]:text-accent-foreground data-[hovered]:bg-accent data-[hovered]:text-accent-foreground data-[selection-mode]:pl-8" data-rac="" role="option" aria-describedby="react-aria-description-0" tabindex="-1" data-collection="react-aria6753761734-«r0»" data-key="5" id="react-aria6753761734-«r5»-option-5" draggable="true" data-allows-dragging="true">Utilities</div><div class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focused]:bg-accent data-[focused]:text-accent-foreground data-[hovered]:bg-accent data-[hovered]:text-accent-foreground data-[selection-mode]:pl-8" data-rac="" role="option" aria-describedby="react-aria-description-0" tabindex="-1" data-collection="react-aria6753761734-«r0»" data-key="6" id="react-aria6753761734-«r5»-option-6" draggable="true" data-allows-dragging="true">Adobe AfterEffects</div></div><span data-focus-scope-end="true" hidden=""></span><template data-react-aria-hidden="true"></template><span data-focus-scope-start="true" hidden=""></span><div class="max-h-[200px] group overflow-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-none data-[empty]:p-6 data-[empty]:text-center data-[empty]:text-sm" data-rac="" aria-label="Second ListBox" role="listbox" id="react-aria6753761734-«rb»" tabindex="0" data-collection="react-aria6753761734-«r6»" data-layout="stack" data-orientation="vertical"><div class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focused]:bg-accent data-[focused]:text-accent-foreground data-[hovered]:bg-accent data-[hovered]:text-accent-foreground data-[selection-mode]:pl-8" data-rac="" role="option" aria-describedby="react-aria-description-0" tabindex="-1" data-collection="react-aria6753761734-«r6»" data-key="7" id="react-aria6753761734-«rb»-option-7" draggable="true" data-allows-dragging="true">Pictures</div><div class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focused]:bg-accent data-[focused]:text-accent-foreground data-[hovered]:bg-accent data-[hovered]:text-accent-foreground data-[selection-mode]:pl-8" data-rac="" role="option" aria-describedby="react-aria-description-0" tabindex="-1" data-collection="react-aria6753761734-«r6»" data-key="8" id="react-aria6753761734-«rb»-option-8" draggable="true" data-allows-dragging="true">Adobe Fresco</div><div class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focused]:bg-accent data-[focused]:text-accent-foreground data-[hovered]:bg-accent data-[hovered]:text-accent-foreground data-[selection-mode]:pl-8" data-rac="" role="option" aria-describedby="react-aria-description-0" tabindex="-1" data-collection="react-aria6753761734-«r6»" data-key="9" id="react-aria6753761734-«rb»-option-9" draggable="true" data-allows-dragging="true">Apps</div><div class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focused]:bg-accent data-[focused]:text-accent-foreground data-[hovered]:bg-accent data-[hovered]:text-accent-foreground data-[selection-mode]:pl-8" data-rac="" role="option" aria-describedby="react-aria-description-0" tabindex="-1" data-collection="react-aria6753761734-«r6»" data-key="10" id="react-aria6753761734-«rb»-option-10" draggable="true" data-allows-dragging="true">Adobe Illustrator</div><div class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focused]:bg-accent data-[focused]:text-accent-foreground data-[hovered]:bg-accent data-[hovered]:text-accent-foreground data-[selection-mode]:pl-8" data-rac="" role="option" aria-describedby="react-aria-description-0" tabindex="-1" data-collection="react-aria6753761734-«r6»" data-key="11" id="react-aria6753761734-«rb»-option-11" draggable="true" data-allows-dragging="true">Adobe Lightroom</div><div class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focused]:bg-accent data-[focused]:text-accent-foreground data-[hovered]:bg-accent data-[hovered]:text-accent-foreground data-[selection-mode]:pl-8" data-rac="" role="option" aria-describedby="react-aria-description-0" tabindex="-1" data-collection="react-aria6753761734-«r6»" data-key="12" id="react-aria6753761734-«rb»-option-12" draggable="true" data-allows-dragging="true">Adobe Dreamweaver</div></div><span data-focus-scope-end="true" hidden=""></span></div></div></div></div>
```

## Reference source files

No reference source files were available.
