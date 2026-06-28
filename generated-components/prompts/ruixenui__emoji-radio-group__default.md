# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ruixenui/emoji-radio-group/default
- Registry URL: https://21st.dev/r/ruixenui/emoji-radio-group
- Author: ruixenui
- Component slug: emoji-radio-group
- Demo slug: default
- Title: emoji-radio-group
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ruixenui/emoji-radio-group with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ruixenui__emoji-radio-group__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ruixenui__emoji-radio-group__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="max-w-sm space-y-6"><h2 class="text-lg font-semibold">How was your experience?</h2><p class="text-sm text-muted-foreground">Select the emoji that best describes your feeling.</p><div role="radiogroup" aria-required="false" dir="ltr" class="flex gap-3" tabindex="0" style="outline: none;"><button type="button" role="radio" aria-checked="false" data-state="unchecked" value="angry" class="relative flex size-14 cursor-pointer flex-col items-center justify-center rounded-lg border border-input bg-background text-lg shadow-sm transition-all hover:scale-105 hover:border-primary/70 focus-visible:outline-2 focus-visible:outline-ring/70 data-[state=checked]:border-primary data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-50" tabindex="-1" data-radix-collection-item=""><span>😡</span><span class="text-[10px] font-medium">Angry</span></button><button type="button" role="radio" aria-checked="false" data-state="unchecked" value="neutral" class="relative flex size-14 cursor-pointer flex-col items-center justify-center rounded-lg border border-input bg-background text-lg shadow-sm transition-all hover:scale-105 hover:border-primary/70 focus-visible:outline-2 focus-visible:outline-ring/70 data-[state=checked]:border-primary data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-50" tabindex="-1" data-radix-collection-item=""><span>😐</span><span class="text-[10px] font-medium">Neutral</span></button><button type="button" role="radio" aria-checked="true" data-state="checked" value="happy" class="relative flex size-14 cursor-pointer flex-col items-center justify-center rounded-lg border border-input bg-background text-lg shadow-sm transition-all hover:scale-105 hover:border-primary/70 focus-visible:outline-2 focus-visible:outline-ring/70 data-[state=checked]:border-primary data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-50" tabindex="-1" data-radix-collection-item=""><span>😊</span><span class="text-[10px] font-medium">Happy</span></button><button type="button" role="radio" aria-checked="false" data-state="unchecked" value="love" class="relative flex size-14 cursor-pointer flex-col items-center justify-center rounded-lg border border-input bg-background text-lg shadow-sm transition-all hover:scale-105 hover:border-primary/70 focus-visible:outline-2 focus-visible:outline-ring/70 data-[state=checked]:border-primary data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-50" tabindex="-1" data-radix-collection-item=""><span>😍</span><span class="text-[10px] font-medium">Loved it</span></button></div><div class="mt-4 text-xs text-center text-muted-foreground">Minimal design • Made by <a href="https://www.ruixen.com" target="_blank" class="underline">ruixen.com</a></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.