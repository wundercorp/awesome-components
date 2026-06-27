# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/aliimam/gauge/gauge
- Registry URL: https://21st.dev/r/aliimam/gauge
- Author: aliimam
- Component slug: gauge
- Demo slug: gauge
- Title: gauge
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/aliimam/gauge with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/aliimam__gauge__gauge.html
- Local screenshot file: generated-21st-prompts/screenshots/aliimam__gauge__gauge.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><main class="flex flex-col items-center gap-6"><div class="flex gap-6"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" shape-rendering="crispEdges" width="100" height="100" stroke-width="2" fill="none" class="" style="user-select: none;"><circle cx="50" cy="50" r="45" class="" style="stroke-linecap: round; stroke-linejoin: round; stroke-dashoffset: 0; stroke-width: 10; transition: 1000ms; transform-origin: 50% 50%; shape-rendering: geometricprecision; stroke-dasharray: 118.752, 282.743; transform: rotate(252deg) scaleY(-1); stroke: rgb(156, 163, 175); opacity: 1;"></circle><circle cx="50" cy="50" r="45" class="" style="stroke-linecap: round; stroke-linejoin: round; stroke-dashoffset: 0; stroke-width: 10; transition: 1000ms; transform-origin: 50% 50%; shape-rendering: geometricprecision; stroke-dasharray: 135.717, 282.743; transform: rotate(-90deg); stroke: rgb(34, 197, 94); opacity: 1;"></circle><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" alignment-baseline="central" fill="currentColor" font-size="36" class="font-semibold">48</text></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" shape-rendering="crispEdges" width="100" height="100" stroke-width="2" fill="none" class="" style="user-select: none;"><circle cx="50" cy="50" r="45" class="" style="stroke-linecap: round; stroke-linejoin: round; stroke-dashoffset: 0; stroke-width: 10; transition: 1000ms; transform-origin: 50% 50%; shape-rendering: geometricprecision; stroke-dasharray: 118.752, 282.743; transform: rotate(252deg) scaleY(-1); stroke: rgb(156, 163, 175); opacity: 1;"></circle><circle cx="50" cy="50" r="45" class="" style="stroke-linecap: round; stroke-linejoin: round; stroke-dashoffset: 0; stroke-width: 10; transition: 1000ms; transform-origin: 50% 50%; shape-rendering: geometricprecision; stroke-dasharray: 135.717, 282.743; transform: rotate(-90deg); stroke: rgb(220, 38, 38); opacity: 1;"></circle><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" alignment-baseline="central" fill="currentColor" font-size="36" class="font-semibold">48</text></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" shape-rendering="crispEdges" width="100" height="100" stroke-width="2" fill="none" class="" style="user-select: none;"><circle cx="50" cy="50" r="45" class="" style="stroke-linecap: round; stroke-linejoin: round; stroke-dashoffset: 0; stroke-width: 10; transition: 1000ms; transform-origin: 50% 50%; shape-rendering: geometricprecision; stroke-dasharray: 118.752, 282.743; transform: rotate(252deg) scaleY(-1); stroke: rgb(156, 163, 175); opacity: 1;"></circle><circle cx="50" cy="50" r="45" class="" style="stroke-linecap: round; stroke-linejoin: round; stroke-dashoffset: 0; stroke-width: 10; transition: 1000ms; transform-origin: 50% 50%; shape-rendering: geometricprecision; stroke-dasharray: 135.717, 282.743; transform: rotate(-90deg); stroke: rgb(59, 130, 246); opacity: 1;"></circle><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" alignment-baseline="central" fill="currentColor" font-size="36" class="font-semibold">48</text></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" shape-rendering="crispEdges" width="100" height="100" stroke-width="2" fill="none" class="" style="user-select: none;"><circle cx="50" cy="50" r="45" class="" style="stroke-linecap: round; stroke-linejoin: round; stroke-dashoffset: 0; stroke-width: 10; transition: 1000ms; transform-origin: 50% 50%; shape-rendering: geometricprecision; stroke-dasharray: 118.752, 282.743; transform: rotate(252deg) scaleY(-1); stroke: rgb(156, 163, 175); opacity: 1;"></circle><circle cx="50" cy="50" r="45" class="" style="stroke-linecap: round; stroke-linejoin: round; stroke-dashoffset: 0; stroke-width: 10; transition: 1000ms; transform-origin: 50% 50%; shape-rendering: geometricprecision; stroke-dasharray: 135.717, 282.743; transform: rotate(-90deg); stroke: rgb(245, 158, 11); opacity: 1;"></circle><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" alignment-baseline="central" fill="currentColor" font-size="36" class="font-semibold">48</text></svg></div><input min="0" max="100" class="w-64 h-2 mt-10 bg-gray-300 rounded-lg appearance-none cursor-pointer" type="range" value="48"><span class="text-lg font-semibold">48%</span></main></div></div></div>
```

## Public registry source files

No public registry source files were available.