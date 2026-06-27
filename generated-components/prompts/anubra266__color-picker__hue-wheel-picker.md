# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/color-picker/hue-wheel-picker
- Registry URL: https://21st.dev/r/anubra266/color-picker
- Author: anubra266
- Component slug: color-picker
- Demo slug: hue-wheel-picker
- Title: color-picker
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/color-picker with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__color-picker__hue-wheel-picker.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__color-picker__hue-wheel-picker.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-sm mx-auto"><div class="space-y-6"><div class="flex items-center gap-3"><input readonly="" class="flex-1 px-4 py-3 text-sm font-mono border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-xs" type="text" value="hsl(329, 100%, 50%) • #FF0084"><div class="w-14 h-12 rounded-lg border border-gray-200 dark:border-gray-700 shadow-xs" style="background-color: rgb(255, 0, 132);"></div></div><div class="flex justify-center py-4"><div data-scope="angle-slider" data-part="root" id="angle-slider:«r0»" class="relative flex items-center justify-center" style="--value: 329; --angle: 329deg;"><div data-scope="angle-slider" data-part="control" role="presentation" id="angle-slider:«r0»:control" class="w-56 h-56 rounded-full relative cursor-pointer [mask:radial-gradient(circle,transparent_52%,transparent_53%,black_53%,black_62%)]" style="touch-action: none; user-select: none; background: conic-gradient(rgb(255, 0, 0) 0deg, rgb(255, 128, 0) 30deg, rgb(255, 255, 0) 60deg, rgb(128, 255, 0) 90deg, rgb(0, 255, 0) 120deg, rgb(0, 255, 128) 150deg, rgb(0, 255, 255) 180deg, rgb(0, 128, 255) 210deg, rgb(0, 0, 255) 240deg, rgb(128, 0, 255) 270deg, rgb(255, 0, 255) 300deg, rgb(255, 0, 128) 330deg, rgb(255, 0, 0) 360deg);"><div data-scope="angle-slider" data-part="thumb" id="angle-slider:«r0»:thumb" role="slider" aria-valuemax="360" aria-valuemin="0" aria-valuenow="329" tabindex="0" class="absolute top-0 right-0 bottom-0 left-[calc(50%-1.5px)] pointer-events-none h-full w-[3px] flex items-start outline-hidden" style="rotate: var(--angle);"><span class="border-2 border-white size-5 rounded-full shrink-0 shadow-gray-600 shadow-xs m-1.5"></span></div></div><input id="angle-slider:«r0»:input" type="hidden" value="329"></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.