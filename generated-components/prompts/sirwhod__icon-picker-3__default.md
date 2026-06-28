# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/sirwhod/icon-picker-3/default
- Registry URL: https://21st.dev/r/sirwhod/icon-picker-3
- Author: sirwhod
- Component slug: icon-picker-3
- Demo slug: default
- Title: icon-picker-3
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/sirwhod/icon-picker-3 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/sirwhod__icon-picker-3__default.html
- Local screenshot file: generated-21st-prompts/screenshots/sirwhod__icon-picker-3__default.png

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
<div id="root"><div class="w-screen h-screen flex items-center justify-center"><form class="w-full max-w-xs space-y-6"><div class="space-y-2 flex flex-col"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="«r0»-form-item">Icon</label><button class="inline-flex items-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm shadow-black/5 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-16 justify-between text-muted-foreground" role="combobox" aria-expanded="false" id="«r0»-form-item" aria-describedby="«r0»-form-item-description" aria-invalid="false" type="button" aria-haspopup="dialog" aria-controls="radix-«r1»" data-state="closed"><div class="flex items-center"><div class="h-4 w-4 border-dashed border rounded-full"></div></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-up-down ml-2 h-4 w-4 shrink-0 opacity-50" aria-hidden="true"><path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path></svg></button><p id="«r0»-form-item-description" class="text-sm text-muted-foreground">Choose an icon to represent the category.</p></div><button class="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow-sm shadow-black/5 hover:bg-primary/90 h-9 px-4 py-2 w-full" type="submit">Submit</button></form></div></div>
```

## Public registry source files

No public registry source files were available.