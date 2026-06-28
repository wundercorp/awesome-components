# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ruixenui/animated-theme-toggler/default
- Registry URL: https://21st.dev/r/ruixenui/animated-theme-toggler
- Author: ruixenui
- Component slug: animated-theme-toggler
- Demo slug: default
- Title: animated-theme-toggler
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ruixenui/animated-theme-toggler with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ruixenui__animated-theme-toggler__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ruixenui__animated-theme-toggler__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-[200px] w-full items-center justify-center"><style>
        .att-btn{--at-ink:rgba(0,0,0,0.82)}
        .dark .att-btn,[data-theme="dark"] .att-btn{--at-ink:rgba(255,255,255,0.82)}
      </style><button class="att-btn" aria-label="Toggle theme" tabindex="0" style="background: none; border-width: medium; border-style: none; border-color: currentcolor; border-image: initial; cursor: pointer; padding: 6px; display: flex; align-items: center; justify-content: center; color: var(--at-ink); border-radius: 8px; outline: none; -webkit-tap-highlight-color: transparent;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="overflow: visible; transform: none;"><mask id="att«r0»"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect><circle r="9" fill="black" cx="33" cy="0"></circle></mask><circle cx="12" cy="12" fill="currentColor" stroke="none" mask="url(#att«r0»)" r="5"></circle><g opacity="1" style="transform-origin: 50% 50%; transform: none; transform-box: fill-box;"><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="5.64" y1="5.64" x2="4.22" y2="4.22"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line><line x1="5.64" y1="18.36" x2="4.22" y2="19.78"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line></g></svg></button></div></div></div></div>
```

## Public registry source files

No public registry source files were available.