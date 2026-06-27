# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hextaui/radio/default
- Registry URL: https://21st.dev/r/hextaui/radio
- Author: hextaui
- Component slug: radio
- Demo slug: default
- Title: radio
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hextaui/radio with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hextaui__radio__default.html
- Local screenshot file: generated-21st-prompts/screenshots/hextaui__radio__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="max-w-sm w-full mx-auto flex items-center justify-center"><div class="flex flex-col gap-4"><div class="grid gap-1.5"><label for="«r0»" class="text-sm  leading-none">Select your comfort level</label><p class="text-xs text-muted-foreground">Choose the option that best fits your needs</p></div><div role="radiogroup" aria-required="false" dir="ltr" id="«r0»" class="grid gap-2 grid-cols-1" tabindex="0" style="outline: none;"><div class="flex flex-col gap-1"><div class="flex items-start gap-2"><button type="button" role="radio" aria-checked="true" data-state="checked" value="comfortable" id="«r1»" class="aspect-square rounded-full border border-border text-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary shadow-sm/2 h-4 w-4" tabindex="-1" data-radix-collection-item=""><div class="flex items-center justify-center w-full h-full" data-state="checked"><div class="rounded-full bg-primary" style="width: 6px; height: 6px; opacity: 1; transform: none;"></div></div></button><div class="grid gap-1.5 leading-none"><label for="«r1»" class="text-sm  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">Comfortable</label><p class="text-xs text-muted-foreground peer-disabled:opacity-70">A relaxed and easy-going approach</p></div></div></div><div class="flex flex-col gap-1"><div class="flex items-start gap-2"><button type="button" role="radio" aria-checked="false" data-state="unchecked" value="compact" id="«r4»" class="aspect-square rounded-full border border-border text-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary shadow-sm/2 h-4 w-4" tabindex="-1" data-radix-collection-item=""></button><div class="grid gap-1.5 leading-none"><label for="«r4»" class="text-sm  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">Compact</label><p class="text-xs text-muted-foreground peer-disabled:opacity-70">Minimal space with essential features</p></div></div></div><div class="flex flex-col gap-1"><div class="flex items-start gap-2"><button type="button" role="radio" aria-checked="false" data-state="unchecked" value="spacious" id="«r6»" class="aspect-square rounded-full border border-border text-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary shadow-sm/2 h-4 w-4" tabindex="-1" data-radix-collection-item=""></button><div class="grid gap-1.5 leading-none"><label for="«r6»" class="text-sm  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">Spacious</label><p class="text-xs text-muted-foreground peer-disabled:opacity-70">Plenty of room with all amenities</p></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.