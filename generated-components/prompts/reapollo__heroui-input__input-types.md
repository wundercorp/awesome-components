# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/reapollo/heroui-input/input-types
- Registry URL: https://21st.dev/r/reapollo/heroui-input
- Author: reapollo
- Component slug: heroui-input
- Demo slug: input-types
- Title: heroui-input
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/reapollo/heroui-input with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/reapollo__heroui-input__input-types.html
- Local screenshot file: generated-21st-prompts/screenshots/reapollo__heroui-input__input-types.png

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
<div id="root"><div class="w-screen heroui-preview-shell flex justify-center items-center"><div class="w-screen heroui-preview-shell flex justify-center items-center"><div class="flex w-80 flex-col gap-4"><div class="flex flex-col gap-1"><label class="label" data-slot="label" for="input-type-email">Email</label><input class="input input--primary" data-slot="input" id="input-type-email" placeholder="jane@example.com" data-rac="" type="email"></div><div class="flex flex-col gap-1"><label class="label" data-slot="label" for="input-type-number">Age</label><input class="input input--primary" data-slot="input" id="input-type-number" min="0" placeholder="30" data-rac="" type="number"></div><div class="flex flex-col gap-1"><label class="label" data-slot="label" for="input-type-password">Password</label><input class="input input--primary" data-slot="input" id="input-type-password" placeholder="••••••••" data-rac="" type="password"></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.