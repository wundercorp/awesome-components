# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/voxlet-ui/flip-coin-button/default
- Registry URL: https://21st.dev/r/voxlet-ui/flip-coin-button
- Author: voxlet-ui
- Component slug: flip-coin-button
- Demo slug: default
- Title: flip-coin-button
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/voxlet-ui/flip-coin-button with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/voxlet-ui__flip-coin-button__default.html
- Local screenshot file: generated-21st-prompts/screenshots/voxlet-ui__flip-coin-button__default.png

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
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="default_FlipCoinButtonDemo">FlipCoinButtonDemo</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-[10rem] flex-col items-center justify-center p-4 relative"><p class="text-muted-foreground absolute top-2">Click to flip the coin</p><button class="flipCoinButton"><span class="buttonText">Support Us</span><div class="coinWrapper"><div class="coin"><div class="coinMiddle"></div><div class="coinBack"></div><div class="coinFront"></div></div></div></button></div></div></div>
```

## Public registry source files

No public registry source files were available.