# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/kokonutd/numeric-input/default
- Registry URL: https://21st.dev/r/kokonutd/numeric-input
- Author: kokonutd
- Component slug: numeric-input
- Demo slug: default
- Title: numeric-input
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/kokonutd/numeric-input with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/kokonutd__numeric-input__default.html
- Local screenshot file: generated-21st-prompts/screenshots/kokonutd__numeric-input__default.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="block min-w-[300px]"><div class="w-full max-w-xs"><div class="relative"><div class="flex items-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black/5"><button type="button" class="px-3 py-2 hover:bg-zinc-100 
                        dark:hover:bg-zinc-800
                        text-zinc-500 dark:text-zinc-400 transition-colors" aria-label="Decrement button">-</button><input min="0" max="100" step="1" class="w-full text-center border-none bg-transparent focus:outline-none 
                        [-moz-appearance:textfield] [&amp;::-webkit-outer-spin-button]:appearance-none 
                        [&amp;::-webkit-inner-spin-button]:appearance-none
                        text-zinc-900 dark:text-zinc-100" type="number" value="50"><button type="button" class="px-3 py-2 hover:bg-zinc-100 
                        dark:hover:bg-zinc-800
                        text-zinc-500 dark:text-zinc-400 transition-colors" aria-label="Increment button">+</button></div><div class="mt-2 h-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden"><div class="h-full bg-zinc-300 dark:bg-zinc-600 transition-all duration-200" style="width: 50%;"></div></div><div class="mt-1 flex justify-between text-xs text-zinc-400 dark:text-zinc-500"><span>0</span><span>100</span></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.