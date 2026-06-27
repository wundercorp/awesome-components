# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ShadcnStudio/radio-group-1/radio-group-shoe-size
- Registry URL: https://21st.dev/r/ShadcnStudio/radio-group-1
- Author: ShadcnStudio
- Component slug: radio-group-1
- Demo slug: radio-group-shoe-size
- Title: radio-group-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ShadcnStudio/radio-group-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ShadcnStudio__radio-group-1__radio-group-shoe-size.html
- Local screenshot file: generated-21st-prompts/screenshots/ShadcnStudio__radio-group-1__radio-group-shoe-size.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><fieldset class="w-full max-w-96 space-y-4"><legend class="text-foreground text-sm leading-none font-medium">Select Shoe Size: </legend><div role="radiogroup" aria-required="false" dir="ltr" class="grid grid-cols-3 gap-2" tabindex="0" style="outline: none;"><label class="border-input has-data-[state=checked]:border-primary/80 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50"><button type="button" role="radio" aria-checked="true" data-state="checked" value="1" class="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sr-only after:absolute after:inset-0" id="«r0»-1" aria-label="size-radio-1" tabindex="-1" data-radix-collection-item=""><span data-state="checked" class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle h-2.5 w-2.5 fill-current text-current" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle></svg></span></button><p class="text-foreground text-sm leading-none font-medium">Size: 6 (UK)</p></label><label class="border-input has-data-[state=checked]:border-primary/80 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50"><button type="button" role="radio" aria-checked="false" data-state="unchecked" data-disabled="" disabled="" value="2" class="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sr-only after:absolute after:inset-0" id="«r0»-2" aria-label="size-radio-2" tabindex="-1" data-radix-collection-item=""></button><p class="text-foreground text-sm leading-none font-medium">Size: 7 (UK)</p></label><label class="border-input has-data-[state=checked]:border-primary/80 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50"><button type="button" role="radio" aria-checked="false" data-state="unchecked" value="3" class="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sr-only after:absolute after:inset-0" id="«r0»-3" aria-label="size-radio-3" tabindex="-1" data-radix-collection-item=""></button><p class="text-foreground text-sm leading-none font-medium">Size: 8 (UK)</p></label><label class="border-input has-data-[state=checked]:border-primary/80 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50"><button type="button" role="radio" aria-checked="false" data-state="unchecked" value="4" class="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sr-only after:absolute after:inset-0" id="«r0»-4" aria-label="size-radio-4" tabindex="-1" data-radix-collection-item=""></button><p class="text-foreground text-sm leading-none font-medium">Size: 9 (UK)</p></label><label class="border-input has-data-[state=checked]:border-primary/80 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50"><button type="button" role="radio" aria-checked="false" data-state="unchecked" value="5" class="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sr-only after:absolute after:inset-0" id="«r0»-5" aria-label="size-radio-5" tabindex="-1" data-radix-collection-item=""></button><p class="text-foreground text-sm leading-none font-medium">Size: 10 (UK)</p></label></div></fieldset></div></div></div>
```

## Public registry source files

No public registry source files were available.