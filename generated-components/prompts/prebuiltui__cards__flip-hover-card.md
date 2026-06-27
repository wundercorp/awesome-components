# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/prebuiltui/cards/flip-hover-card
- Registry URL: https://21st.dev/r/prebuiltui/cards
- Author: prebuiltui
- Component slug: cards
- Demo slug: flip-hover-card
- Title: cards
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/prebuiltui/cards with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/prebuiltui__cards__flip-hover-card.html
- Local screenshot file: generated-21st-prompts/screenshots/prebuiltui__cards__flip-hover-card.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="group w-52 h-64 mx-auto [perspective:1000px] cursor-pointer"><div class="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"><div class="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-md bg-white border border-gray-200">Front Side</div><div class="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-md bg-indigo-600 text-white [transform:rotateY(180deg)]">Back Side</div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.