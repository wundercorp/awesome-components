# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hero_ui/heroui-alert/danger-steps
- Registry URL: https://21st.dev/r/hero_ui/heroui-alert
- Author: hero_ui
- Component slug: heroui-alert
- Demo slug: danger-steps
- Title: heroui-alert
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hero_ui/heroui-alert with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hero_ui__heroui-alert__danger-steps.html
- Local screenshot file: generated-21st-prompts/screenshots/hero_ui__heroui-alert__danger-steps.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-xl"><div class="alert alert--danger" data-slot="alert-root"><div class="alert__indicator" data-slot="alert-indicator"><svg aria-hidden="true" aria-label="Danger icon" fill="none" height="16" role="presentation" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" data-slot="alert-default-icon"><path clip-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1-4.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M8.75 5a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0z" fill="currentColor" fill-rule="evenodd"></path></svg></div><div class="alert__content" data-slot="alert-content"><p class="alert__title" data-slot="alert-title">Unable to connect to server</p><span class="alert__description" data-slot="alert-description">We're experiencing connection issues. Please try the following:<ul class="mt-2 list-inside list-disc space-y-1 text-sm"><li>Check your internet connection</li><li>Refresh the page</li><li>Clear your browser cache</li></ul></span><button data-slot="button" class="button button--sm button--danger mt-2 sm:hidden" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" id="react-aria9636025553-«r0»">Retry</button></div><button data-slot="button" class="button button--sm button--danger hidden sm:block" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" id="react-aria9636025553-«r2»">Retry</button></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.