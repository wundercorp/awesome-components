# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/shadcnspace/radio-group-with-plan-cards/default
- Registry URL: https://21st.dev/r/shadcnspace/radio-group-with-plan-cards
- Author: shadcnspace
- Component slug: radio-group-with-plan-cards
- Demo slug: default
- Title: radio-group-with-plan-cards
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/shadcnspace/radio-group-with-plan-cards with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/shadcnspace__radio-group-with-plan-cards__default.html
- Local screenshot file: generated-21st-prompts/screenshots/shadcnspace__radio-group-with-plan-cards__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div role="radiogroup" aria-required="false" dir="ltr" class="grid gap-2 max-w-sm" tabindex="0" style="outline: none;"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex cursor-pointer items-start gap-3 rounded-lg border p-4 shadow-xs transition-all hover:bg-accent has-data-checked:bg-accent" for="card-1"><div class="bg-blue-500/10 p-1.5 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket text-blue-500" aria-hidden="true"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg></div><div class="w-full flex gap-2 items-start justify-between"><div class="grid gap-1.5"><p class="font-medium leading-none">Launch Plan</p><p class="text-xs text-muted-foreground font-normal">Essential tools to get started.</p></div><span class="text-muted-foreground text-xs font-normal">Free</span></div><button type="button" role="radio" aria-checked="true" data-state="checked" value="card-1" class="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="card-1" tabindex="-1" data-radix-collection-item=""><span data-state="checked" class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle h-2.5 w-2.5 fill-current text-current" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle></svg></span></button></label><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex cursor-pointer items-start gap-3 rounded-lg border p-4 shadow-xs transition-all hover:bg-accent has-data-checked:bg-accent" for="card-2"><div class="bg-orange-400/10 p-1.5 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-handshake text-orange-400" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path><path d="m18 15-2-2"></path><path d="m15 18-2-2"></path></svg></div><div class="w-full flex gap-2 items-start justify-between"><div class="grid gap-1.5"><p class="font-medium leading-none">Grow Plan</p><p class="text-xs text-muted-foreground font-normal">Advanced features for growing teams.</p></div><span class="text-muted-foreground text-xs font-normal">$19.00</span></div><button type="button" role="radio" aria-checked="false" data-state="unchecked" value="card-2" class="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="card-2" tabindex="-1" data-radix-collection-item=""></button></label><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex cursor-pointer items-start gap-3 rounded-lg border p-4 shadow-xs transition-all hover:bg-accent has-data-checked:bg-accent" for="card-3"><div class="bg-red-500/10 p-1.5 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gem text-red-500" aria-hidden="true"><path d="M6 3h12l4 6-10 13L2 9Z"></path><path d="M11 3 8 9l4 13 4-13-3-6"></path><path d="M2 9h20"></path></svg></div><div class="w-full flex gap-2 items-start justify-between"><div class="grid gap-1.5"><p class="font-medium leading-none">Scale Plan</p><p class="text-xs text-muted-foreground font-normal">Enterprise power and priority support.</p></div><span class="text-muted-foreground text-xs font-normal">$49.00</span></div><button type="button" role="radio" aria-checked="false" data-state="unchecked" value="card-3" class="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="card-3" tabindex="-1" data-radix-collection-item=""></button></label></div></div></div></div>
```

## Public registry source files

No public registry source files were available.