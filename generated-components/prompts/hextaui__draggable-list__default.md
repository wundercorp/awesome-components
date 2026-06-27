# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hextaui/draggable-list/default
- Registry URL: https://21st.dev/r/hextaui/draggable-list
- Author: hextaui
- Component slug: draggable-list
- Demo slug: default
- Title: draggable-list
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hextaui/draggable-list with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hextaui__draggable-list__default.html
- Local screenshot file: generated-21st-prompts/screenshots/hextaui__draggable-list__default.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="flex flex-col gap-2 max-w-sm w-full"><div draggable="true" class="cursor-grab rounded-lg border bg-secondary/50 border-primary/10 p-4 shadow-xs transition-colors" style="opacity: 1; transform: none;"><div class="flex items-center gap-2"><div class="text-gray-400">≡</div>First Item</div></div><div draggable="true" class="cursor-grab rounded-lg border bg-secondary/50 border-primary/10 p-4 shadow-xs transition-colors" style="opacity: 1; transform: none;"><div class="flex items-center gap-2"><div class="text-gray-400">≡</div>Second Item</div></div><div draggable="true" class="cursor-grab rounded-lg border bg-secondary/50 border-primary/10 p-4 shadow-xs transition-colors" style="opacity: 1; transform: none;"><div class="flex items-center gap-2"><div class="text-gray-400">≡</div>Third Item</div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.