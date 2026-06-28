# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/shadcnspace/radio-group-colors-demo/default
- Registry URL: https://21st.dev/r/shadcnspace/radio-group-colors-demo
- Author: shadcnspace
- Component slug: radio-group-colors-demo
- Demo slug: default
- Title: radio-group-colors-demo
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/shadcnspace/radio-group-colors-demo with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/shadcnspace__radio-group-colors-demo__default.html
- Local screenshot file: generated-21st-prompts/screenshots/shadcnspace__radio-group-colors-demo__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div role="radiogroup" aria-required="false" dir="ltr" class="flex items-center gap-6 justify-center" tabindex="0" style="outline: none;"><div class="flex items-center gap-2"><button type="button" role="radio" aria-checked="true" data-state="checked" value="destructive" class="aspect-square h-4 w-4 rounded-full border ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-destructive text-destructive cursor-pointer" id="color-destructive" tabindex="-1" data-radix-collection-item=""><span data-state="checked" class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle h-2.5 w-2.5 fill-current text-current" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle></svg></span></button><label class="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-destructive cursor-pointer font-medium leading-none" for="color-destructive">Error</label></div><div class="flex items-center gap-2"><button type="button" role="radio" aria-checked="false" data-state="unchecked" value="success" class="aspect-square h-4 w-4 rounded-full border ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-teal-500 text-teal-500 cursor-pointer" id="color-success" tabindex="-1" data-radix-collection-item=""></button><label class="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-teal-500 cursor-pointer font-medium leading-none" for="color-success">Approved</label></div><div class="flex items-center gap-2"><button type="button" role="radio" aria-checked="false" data-state="unchecked" value="info" class="aspect-square h-4 w-4 rounded-full border ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-amber-500 text-amber-500 cursor-pointer" id="color-info" tabindex="-1" data-radix-collection-item=""></button><label class="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-amber-500 cursor-pointer font-medium leading-none" for="color-info">Alert</label></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.