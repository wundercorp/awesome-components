# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/jollyshopland/tag-group/tag-group-disabled
- Registry URL: https://21st.dev/r/jollyshopland/tag-group
- Author: jollyshopland
- Component slug: tag-group
- Demo slug: tag-group-disabled
- Title: tag-group
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/jollyshopland/tag-group with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/jollyshopland__tag-group__tag-group-disabled.html
- Local screenshot file: generated-21st-prompts/screenshots/jollyshopland__tag-group__tag-group-disabled.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><template data-react-aria-hidden="true"></template><div class="space-y-1"><span class="text-sm font-medium leading-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70 group-data-[invalid]:text-destructive" id="react-aria9805539329-«r1»">Sandwich contents</span><div class="flex flex-wrap gap-2 data-[empty]:text-sm data-[empty]:text-muted-foreground" data-rac="" id="react-aria9805539329-«r0»" aria-labelledby="react-aria9805539329-«r1»" aria-multiselectable="true" tabindex="0" aria-atomic="false" aria-relevant="additions" aria-live="off" role="grid" data-collection="react-aria9805539329-«r5»"><div class="inline-flex items-center gap-2 rounded-full border px-2.5 py-0.5 text-xs font-semibold ring-offset-background transition-colors data-[focused]:outline-none data-[focused]:ring-2 data-[focused]:ring-ring data-[focused]:ring-offset-2 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 border-transparent bg-secondary text-secondary-foreground data-[hovered]:bg-secondary/80" data-rac="" tabindex="0" data-collection="react-aria9805539329-«r5»" data-key="react-aria-1" data-react-aria-pressable="true" id="react-aria9805539329-«r0»-react-aria-1" role="row" aria-label="Lettuce" aria-selected="false" data-selection-mode="multiple"><div role="gridcell" aria-colindex="1" style="display: contents;">Lettuce</div></div><div class="inline-flex items-center gap-2 rounded-full border px-2.5 py-0.5 text-xs font-semibold ring-offset-background transition-colors data-[focused]:outline-none data-[focused]:ring-2 data-[focused]:ring-ring data-[focused]:ring-offset-2 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 border-transparent bg-secondary text-secondary-foreground data-[hovered]:bg-secondary/80" data-rac="" tabindex="0" data-collection="react-aria9805539329-«r5»" data-key="react-aria-2" data-react-aria-pressable="true" id="react-aria9805539329-«r0»-react-aria-2" role="row" aria-label="Tomato" aria-selected="false" data-selection-mode="multiple"><div role="gridcell" aria-colindex="1" style="display: contents;">Tomato</div></div><div class="inline-flex items-center gap-2 rounded-full border px-2.5 py-0.5 text-xs font-semibold ring-offset-background transition-colors data-[focused]:outline-none data-[focused]:ring-2 data-[focused]:ring-ring data-[focused]:ring-offset-2 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 border-transparent bg-secondary text-secondary-foreground data-[hovered]:bg-secondary/80" data-rac="" tabindex="0" data-collection="react-aria9805539329-«r5»" data-key="react-aria-3" data-react-aria-pressable="true" id="react-aria9805539329-«r0»-react-aria-3" role="row" aria-label="Cheese" aria-selected="false" data-selection-mode="multiple"><div role="gridcell" aria-colindex="1" style="display: contents;">Cheese</div></div><div class="inline-flex items-center gap-2 rounded-full border px-2.5 py-0.5 text-xs font-semibold ring-offset-background transition-colors data-[focused]:outline-none data-[focused]:ring-2 data-[focused]:ring-ring data-[focused]:ring-offset-2 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 border-transparent bg-secondary text-secondary-foreground data-[hovered]:bg-secondary/80" data-rac="" tabindex="-1" data-collection="react-aria9805539329-«r5»" data-key="react-aria-4" id="react-aria9805539329-«r0»-react-aria-4" role="row" aria-label="Tuna Salad" aria-disabled="true" data-disabled="true" data-selection-mode="multiple"><div role="gridcell" aria-colindex="1" style="display: contents;">Tuna Salad</div></div><div class="inline-flex items-center gap-2 rounded-full border px-2.5 py-0.5 text-xs font-semibold ring-offset-background transition-colors data-[focused]:outline-none data-[focused]:ring-2 data-[focused]:ring-ring data-[focused]:ring-offset-2 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 border-transparent bg-secondary text-secondary-foreground data-[hovered]:bg-secondary/80" data-rac="" tabindex="0" data-collection="react-aria9805539329-«r5»" data-key="react-aria-5" data-react-aria-pressable="true" id="react-aria9805539329-«r0»-react-aria-5" role="row" aria-label="Egg Salad" aria-selected="false" data-selection-mode="multiple"><div role="gridcell" aria-colindex="1" style="display: contents;">Egg Salad</div></div><div class="inline-flex items-center gap-2 rounded-full border px-2.5 py-0.5 text-xs font-semibold ring-offset-background transition-colors data-[focused]:outline-none data-[focused]:ring-2 data-[focused]:ring-ring data-[focused]:ring-offset-2 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 border-transparent bg-secondary text-secondary-foreground data-[hovered]:bg-secondary/80" data-rac="" tabindex="0" data-collection="react-aria9805539329-«r5»" data-key="react-aria-6" data-react-aria-pressable="true" id="react-aria9805539329-«r0»-react-aria-6" role="row" aria-label="Ham" aria-selected="false" data-selection-mode="multiple"><div role="gridcell" aria-colindex="1" style="display: contents;">Ham</div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.