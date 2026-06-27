# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hero_ui/heroui-alert/statuses
- Registry URL: https://21st.dev/r/hero_ui/heroui-alert
- Author: hero_ui
- Component slug: heroui-alert
- Demo slug: statuses
- Title: heroui-alert
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hero_ui/heroui-alert with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hero_ui__heroui-alert__statuses.html
- Local screenshot file: generated-21st-prompts/screenshots/hero_ui__heroui-alert__statuses.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="grid w-full max-w-xl gap-3"><div class="alert alert--default" data-slot="alert-root"><div class="alert__indicator" data-slot="alert-indicator"><svg aria-hidden="true" aria-label="Info icon" fill="none" height="16" role="presentation" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" data-slot="alert-default-icon"><path clip-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1-9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-.25 3a.75.75 0 0 0-1.5 0V11a.75.75 0 0 0 1.5 0z" fill="currentColor" fill-rule="evenodd"></path></svg></div><div class="alert__content" data-slot="alert-content"><p class="alert__title" data-slot="alert-title">Heads up</p><span class="alert__description" data-slot="alert-description">General product information for your team.</span></div></div><div class="alert alert--accent" data-slot="alert-root"><div class="alert__indicator" data-slot="alert-indicator"><svg aria-hidden="true" aria-label="Info icon" fill="none" height="16" role="presentation" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" data-slot="alert-default-icon"><path clip-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1-9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-.25 3a.75.75 0 0 0-1.5 0V11a.75.75 0 0 0 1.5 0z" fill="currentColor" fill-rule="evenodd"></path></svg></div><div class="alert__content" data-slot="alert-content"><p class="alert__title" data-slot="alert-title">Update available</p><span class="alert__description" data-slot="alert-description">Refresh to get the latest features and fixes.</span></div></div><div class="alert alert--success" data-slot="alert-root"><div class="alert__indicator" data-slot="alert-indicator"><svg aria-hidden="true" aria-label="Success icon" fill="none" height="16" role="presentation" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" data-slot="alert-default-icon"><path clip-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-3.9-1.55a.75.75 0 1 0-1.2-.9L7.419 8.858L6.03 7.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.13-.08z" fill="currentColor" fill-rule="evenodd"></path></svg></div><div class="alert__content" data-slot="alert-content"><p class="alert__title" data-slot="alert-title">Profile saved</p><span class="alert__description" data-slot="alert-description">Your changes were synced successfully.</span></div></div><div class="alert alert--warning" data-slot="alert-root"><div class="alert__indicator" data-slot="alert-indicator"><svg aria-hidden="true" aria-label="Warning icon" fill="none" height="16" role="presentation" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" data-slot="alert-default-icon"><path clip-rule="evenodd" d="M7.134 2.994L2.217 11.5a1 1 0 0 0 .866 1.5h9.834a1 1 0 0 0 .866-1.5L8.866 2.993a1 1 0 0 0-1.732 0m3.03-.75c-.962-1.665-3.366-1.665-4.329 0L.918 10.749c-.963 1.666.24 3.751 2.165 3.751h9.834c1.925 0 3.128-2.085 2.164-3.751zM8 5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 8 5m1 5.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0" fill="currentColor" fill-rule="evenodd"></path></svg></div><div class="alert__content" data-slot="alert-content"><p class="alert__title" data-slot="alert-title">Storage almost full</p><span class="alert__description" data-slot="alert-description">Archive unused files before uploads stop.</span></div></div><div class="alert alert--danger" data-slot="alert-root"><div class="alert__indicator" data-slot="alert-indicator"><svg aria-hidden="true" aria-label="Danger icon" fill="none" height="16" role="presentation" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" data-slot="alert-default-icon"><path clip-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1-4.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M8.75 5a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0z" fill="currentColor" fill-rule="evenodd"></path></svg></div><div class="alert__content" data-slot="alert-content"><p class="alert__title" data-slot="alert-title">Payment failed</p><span class="alert__description" data-slot="alert-description">Update your billing method to keep access.</span></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.