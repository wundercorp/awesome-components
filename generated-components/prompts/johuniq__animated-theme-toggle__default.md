# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/johuniq/animated-theme-toggle/default
- Registry URL: https://21st.dev/r/johuniq/animated-theme-toggle
- Author: johuniq
- Component slug: animated-theme-toggle
- Demo slug: default
- Title: animated-theme-toggle
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/johuniq/animated-theme-toggle with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/johuniq__animated-theme-toggle__default.html
- Local screenshot file: generated-21st-prompts/screenshots/johuniq__animated-theme-toggle__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center min-h-screen bg-background p-8"><button class="inline-flex items-center justify-center rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-2.5" aria-label="Switch to light mode"><div><svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4058 17.7625C15.1672 17.7625 17.4058 15.5239 17.4058 12.7625C17.4058 10.0011 15.1672 7.76251 12.4058 7.76251C9.64434 7.76251 7.40576 10.0011 7.40576 12.7625C7.40576 15.5239 9.64434 17.7625 12.4058 17.7625Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dashoffset="0" stroke-dasharray="0 1" style="transform: scale(0); transform-origin: 50% 50%; transform-box: fill-box;"></path><path d="M12.4058 1.76251V3.76251" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dashoffset="0" stroke-dasharray="0 1" style="transform: scale(0); transform-origin: 50% 50%; transform-box: fill-box;"></path><path d="M12.4058 21.7625V23.7625" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dashoffset="0" stroke-dasharray="0 1" style="transform: scale(0); transform-origin: 50% 50%; transform-box: fill-box;"></path><path d="M4.62598 4.98248L6.04598 6.40248" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dashoffset="0" stroke-dasharray="0 1" style="transform: scale(0); transform-origin: 50% 50%; transform-box: fill-box;"></path><path d="M18.7656 19.1225L20.1856 20.5425" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dashoffset="0" stroke-dasharray="0 1" style="transform: scale(0); transform-origin: 50% 50%; transform-box: fill-box;"></path><path d="M1.40576 12.7625H3.40576" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dashoffset="0" stroke-dasharray="0 1" style="transform: scale(0); transform-origin: 50% 50%; transform-box: fill-box;"></path><path d="M21.4058 12.7625H23.4058" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dashoffset="0" stroke-dasharray="0 1" style="transform: scale(0); transform-origin: 50% 50%; transform-box: fill-box;"></path><path d="M4.62598 20.5425L6.04598 19.1225" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dashoffset="0" stroke-dasharray="0 1" style="transform: scale(0); transform-origin: 50% 50%; transform-box: fill-box;"></path><path d="M18.7656 6.40248L20.1856 4.98248" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dashoffset="0" stroke-dasharray="0 1" style="transform: scale(0); transform-origin: 50% 50%; transform-box: fill-box;"></path><path d="M21.1918 13.2013C21.0345 14.9035 20.3957 16.5257 19.35 17.8781C18.3044 19.2305 16.8953 20.2571 15.2875 20.8379C13.6797 21.4186 11.9398 21.5294 10.2713 21.1574C8.60281 20.7854 7.07479 19.9459 5.86602 18.7371C4.65725 17.5283 3.81774 16.0003 3.4457 14.3318C3.07367 12.6633 3.18451 10.9234 3.76526 9.31561C4.346 7.70783 5.37263 6.29868 6.72501 5.25307C8.07739 4.20746 9.69959 3.56862 11.4018 3.41132C10.4052 4.75958 9.92564 6.42077 10.0503 8.09273C10.175 9.76469 10.8957 11.3364 12.0812 12.5219C13.2667 13.7075 14.8384 14.4281 16.5104 14.5528C18.1823 14.6775 19.8435 14.1979 21.1918 13.2013Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dashoffset="0" stroke-dasharray="1 1" style="transform: none; transform-origin: 50% 50%; transform-box: fill-box;"></path></svg></div></button></div></div></div></div>
```

## Public registry source files

No public registry source files were available.