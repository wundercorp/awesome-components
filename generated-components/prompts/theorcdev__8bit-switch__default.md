# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/theorcdev/8bit-switch/default
- Registry URL: https://21st.dev/r/theorcdev/8bit-switch
- Author: theorcdev
- Component slug: 8bit-switch
- Demo slug: default
- Title: 8bit-switch
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/theorcdev/8bit-switch with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/theorcdev__8bit-switch__default.html
- Local screenshot file: generated-21st-prompts/screenshots/theorcdev__8bit-switch__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex w-full min-h-screen items-center justify-center bg-background p-8 overflow-hidden"><div class="flex items-center gap-4"><span class="text-sm font-pixel">Off</span><button type="button" role="switch" aria-checked="true" data-state="checked" data-slot="switch" class="relative peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-4 w-8 shrink-0 items-center border border-transparent shadow-xs transition-all outline-none border-none disabled:cursor-not-allowed disabled:opacity-50"><span data-slot="switch-thumb" data-state="checked" class="bg-primary data-[state=checked]:bg-primary-foreground dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground pointer-events-none block size-4 data-[state=checked]:border-l data-[state=unchecked]:border-r border-foreground dark:border-ring ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%)] data-[state=unchecked]:translate-x-0"></span><span class="absolute inset-0 border-y-4 -my-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></span><span class="absolute inset-0 border-x-4 -mx-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></span></button><span class="text-sm font-pixel">On</span></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.