# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hero_ui/heroui-alert/custom-styles
- Registry URL: https://21st.dev/r/hero_ui/heroui-alert
- Author: hero_ui
- Component slug: heroui-alert
- Demo slug: custom-styles
- Title: heroui-alert
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hero_ui/heroui-alert with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hero_ui__heroui-alert__custom-styles.html
- Local screenshot file: generated-21st-prompts/screenshots/hero_ui__heroui-alert__custom-styles.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-xl"><div class="alert alert--accent rounded-2xl border-2 border-blue-500 bg-blue-50/70 shadow-lg dark:bg-blue-950/30" data-slot="alert-root"><div class="alert__indicator text-blue-600 dark:text-blue-300" data-slot="alert-indicator"><svg aria-hidden="true" aria-label="Info icon" fill="none" height="16" role="presentation" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" data-slot="alert-default-icon"><path clip-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1-9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-.25 3a.75.75 0 0 0-1.5 0V11a.75.75 0 0 0 1.5 0z" fill="currentColor" fill-rule="evenodd"></path></svg></div><div class="alert__content gap-1" data-slot="alert-content"><p class="alert__title text-lg font-bold" data-slot="alert-title">Custom Alert</p><span class="alert__description text-sm opacity-80" data-slot="alert-description">Tailwind classes can be passed to the alert parts, while HeroUI keeps the underlying BEM structure available for component-level overrides.</span></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.