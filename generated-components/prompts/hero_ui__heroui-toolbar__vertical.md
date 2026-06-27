# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hero_ui/heroui-toolbar/vertical
- Registry URL: https://21st.dev/r/hero_ui/heroui-toolbar
- Author: hero_ui
- Component slug: heroui-toolbar
- Demo slug: vertical
- Title: heroui-toolbar
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hero_ui/heroui-toolbar with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hero_ui__heroui-toolbar__vertical.html
- Local screenshot file: generated-21st-prompts/screenshots/hero_ui__heroui-toolbar__vertical.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div data-slot="toolbar" class="toolbar toolbar--vertical" data-rac="" aria-label="Tools" role="toolbar" aria-orientation="vertical" data-orientation="vertical"><div data-slot="toggle-button-group" class="toggle-button-group toggle-button-group--vertical" data-rac="" aria-label="Text style" role="group" aria-orientation="vertical" data-orientation="vertical"><button data-slot="toggle-button" class="toggle-button toggle-button--icon-only toggle-button--md toggle-button--default" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" aria-label="Bold" aria-pressed="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bold size-4" aria-hidden="true"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"></path></svg></button><button data-slot="toggle-button" class="toggle-button toggle-button--icon-only toggle-button--md toggle-button--default" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" aria-label="Italic" aria-pressed="false"><span aria-hidden="true" class="toggle-button-group__separator" data-slot="toggle-button-group-separator"></span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-italic size-4" aria-hidden="true"><line x1="19" x2="10" y1="4" y2="4"></line><line x1="14" x2="5" y1="20" y2="20"></line><line x1="15" x2="9" y1="4" y2="20"></line></svg></button><button data-slot="toggle-button" class="toggle-button toggle-button--icon-only toggle-button--md toggle-button--default" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" aria-label="Underline" aria-pressed="false"><span aria-hidden="true" class="toggle-button-group__separator" data-slot="toggle-button-group-separator"></span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-underline size-4" aria-hidden="true"><path d="M6 4v6a6 6 0 0 0 12 0V4"></path><line x1="4" x2="20" y1="20" y2="20"></line></svg></button></div><hr data-orientation="horizontal" data-slot="separator" role="separator" class="separator separator--horizontal separator--default"><div class="button-group button-group--vertical" data-slot="button-group" data-rac="" role="group"><button data-slot="button" class="button button--icon-only button--md button--secondary" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" aria-label="Undo" id="react-aria3338107656-«r0»"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-undo2 lucide-undo-2 size-4" aria-hidden="true"><path d="M9 14 4 9l5-5"></path><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path></svg></button><span aria-hidden="true" class="button-group__separator" data-slot="button-group-separator"></span><button data-slot="button" class="button button--icon-only button--md button--secondary" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" aria-label="Redo" id="react-aria3338107656-«r2»"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-redo2 lucide-redo-2 size-4" aria-hidden="true"><path d="m15 14 5-5-5-5"></path><path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"></path></svg></button></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.