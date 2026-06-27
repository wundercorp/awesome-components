# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ShadcnStudio/radio-group-1/radio-group-colored
- Registry URL: https://21st.dev/r/ShadcnStudio/radio-group-1
- Author: ShadcnStudio
- Component slug: radio-group-1
- Demo slug: radio-group-colored
- Title: radio-group-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ShadcnStudio/radio-group-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ShadcnStudio__radio-group-1__radio-group-colored.html
- Local screenshot file: generated-21st-prompts/screenshots/ShadcnStudio__radio-group-1__radio-group-colored.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div role="radiogroup" aria-required="false" dir="ltr" class="flex items-center gap-4" tabindex="0" style="outline: none;"><div class="flex items-center gap-2"><button type="button" role="radio" aria-checked="true" data-state="checked" value="destructive" class="aspect-square h-4 w-4 rounded-full border ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-destructive text-destructive [&amp;_svg]:fill-destructive focus-visible:ring-destructive/20 focus-visible:border-destructive dark:focus-visible:ring-destructive/40" id="color-destructive" tabindex="-1" data-radix-collection-item=""><span data-state="checked" class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle h-2.5 w-2.5 fill-current text-current" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle></svg></span></button><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="color-destructive">Destructive</label></div><div class="flex items-center gap-2"><button type="button" role="radio" aria-checked="false" data-state="unchecked" value="success" class="aspect-square h-4 w-4 rounded-full border ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-green-600 text-green-600 focus-visible:border-green-600 focus-visible:ring-green-600/20 dark:border-green-400 dark:text-green-400 dark:focus-visible:border-green-400 dark:focus-visible:ring-green-400/40 [&amp;_svg]:fill-green-600 dark:[&amp;_svg]:fill-green-400" id="color-success" tabindex="-1" data-radix-collection-item=""></button><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="color-success">Success</label></div><div class="flex items-center gap-2"><button type="button" role="radio" aria-checked="false" data-state="unchecked" value="info" class="aspect-square h-4 w-4 rounded-full border ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-sky-600 text-sky-600 focus-visible:border-sky-600 focus-visible:ring-sky-600/20 dark:border-sky-400 dark:text-sky-400 dark:focus-visible:border-sky-400 dark:focus-visible:ring-sky-400/40 [&amp;_svg]:fill-sky-600 dark:[&amp;_svg]:fill-sky-400" id="color-info" tabindex="-1" data-radix-collection-item=""></button><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="color-info">Info</label></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.