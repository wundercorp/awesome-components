# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ShadcnStudio/radio-group-1/radio-group-twelve
- Registry URL: https://21st.dev/r/ShadcnStudio/radio-group-1
- Author: ShadcnStudio
- Component slug: radio-group-1
- Demo slug: radio-group-twelve
- Title: radio-group-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ShadcnStudio/radio-group-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ShadcnStudio__radio-group-1__radio-group-twelve.html
- Local screenshot file: generated-21st-prompts/screenshots/ShadcnStudio__radio-group-1__radio-group-twelve.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div role="radiogroup" aria-required="false" dir="ltr" class="grid w-full max-w-96 gap-2" tabindex="0" style="outline: none;"><div class="border-input has-data-[state=checked]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative w-full rounded-md border p-3 shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px]"><button type="button" role="radio" aria-checked="true" data-state="checked" value="1" class="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sr-only" id="«r0»-1" aria-label="plan-radio-basic" aria-describedby="«r0»-1-description" tabindex="-1" data-radix-collection-item=""><span data-state="checked" class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle h-2.5 w-2.5 fill-current text-current" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle></svg></span></button><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground flex flex-col items-start after:absolute after:inset-0" for="«r0»-1"><div class="flex w-full items-center justify-between"><span>Basic</span><span class="text-muted-foreground text-xs leading-[inherit] font-normal">Free</span></div><p id="«r0»-1-description" class="text-muted-foreground text-xs">Get 1 project with 1 teams members.</p></label></div><div class="border-input has-data-[state=checked]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative w-full rounded-md border p-3 shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px]"><button type="button" role="radio" aria-checked="false" data-state="unchecked" value="2" class="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sr-only" id="«r0»-2" aria-label="plan-radio-premium" aria-describedby="«r0»-2-description" tabindex="-1" data-radix-collection-item=""></button><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground flex flex-col items-start after:absolute after:inset-0" for="«r0»-2"><div class="flex w-full items-center justify-between"><span>Premium</span><span class="text-muted-foreground text-xs leading-[inherit] font-normal">$5.00</span></div><p id="«r0»-2-description" class="text-muted-foreground text-xs">Get 5 projects with 5 team members.</p></label></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.