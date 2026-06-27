# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/originui/input/input-with-inset-label
- Registry URL: https://21st.dev/r/originui/input
- Author: originui
- Component slug: input
- Demo slug: input-with-inset-label
- Title: input
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/originui/input with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/originui__input__input-with-inset-label.html
- Local screenshot file: generated-21st-prompts/screenshots/originui__input__input-with-inset-label.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="relative min-w-[300px] rounded-lg border border-input bg-background shadow-sm shadow-black/5 transition-shadow focus-within:border-ring focus-within:outline-none focus-within:ring-[3px] focus-within:ring-ring/20 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 [&amp;:has(input:is(:disabled))_*]:pointer-events-none"><label for="«r0»" class="block px-3 pt-2 text-xs font-medium text-foreground">Input with inset label</label><input id="«r0»" class="flex h-10 w-full bg-transparent px-3 pb-2 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none" placeholder="Email" type="email"></div></div></div></div>
```

## Public registry source files

No public registry source files were available.