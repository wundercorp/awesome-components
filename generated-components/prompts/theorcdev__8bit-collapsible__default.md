# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/theorcdev/8bit-collapsible/default
- Registry URL: https://21st.dev/r/theorcdev/8bit-collapsible
- Author: theorcdev
- Component slug: 8bit-collapsible
- Demo slug: default
- Title: 8bit-collapsible
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/theorcdev/8bit-collapsible with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/theorcdev__8bit-collapsible__default.html
- Local screenshot file: generated-21st-prompts/screenshots/theorcdev__8bit-collapsible__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex w-full min-h-screen items-center justify-center bg-background p-8 overflow-hidden"><div class="relative w-full max-w-sm space-y-2"><div data-slot="collapsible" data-state="closed" class="w-full max-w-sm space-y-2 retro"><div class="flex items-center justify-between border-2 border-foreground p-3"><span class="text-sm font-pixel">Secret Stash</span><button type="button" data-slot="collapsible-trigger" data-state="closed" aria-expanded="false" class="text-xs font-pixel underline">Toggle</button></div><div data-slot="collapsible-content" data-state="closed" class="overflow-hidden transition-all max-h-0 space-y-2"><div class="border-2 border-foreground p-3 font-pixel text-sm">Gold ×999</div><div class="border-2 border-foreground p-3 font-pixel text-sm">Phoenix Down ×3</div><div class="border-2 border-foreground p-3 font-pixel text-sm">Megalixir ×1</div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.