# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/shailendrakumar19999/timer/default
- Registry URL: https://21st.dev/r/shailendrakumar19999/timer
- Author: shailendrakumar19999
- Component slug: timer
- Demo slug: default
- Title: timer
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/shailendrakumar19999/timer with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/shailendrakumar19999__timer__default.html
- Local screenshot file: generated-21st-prompts/screenshots/shailendrakumar19999__timer__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex justify-center w-full items-center min-h-screen"><div id="timer:«r0»:root" data-scope="timer" data-part="root" class="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center border"><div role="timer" id="timer:«r0»:area" aria-label="0 days 00:00:00" aria-atomic="true" data-scope="timer" data-part="area" class="flex items-center gap-3 text-2xl font-mono font-bold text-gray-800"><div data-scope="timer" data-part="item" data-type="hours" class="px-3 py-1 rounded-md bg-gray-100 shadow-sm" style="--value: 0;">00</div><div aria-hidden="true" data-scope="timer" data-part="separator">:</div><div data-scope="timer" data-part="item" data-type="minutes" class="px-3 py-1 rounded-md bg-gray-100 shadow-sm" style="--value: 0;">00</div><div aria-hidden="true" data-scope="timer" data-part="separator">:</div><div data-scope="timer" data-part="item" data-type="seconds" class="px-3 py-1 rounded-md bg-gray-100 shadow-sm" style="--value: 0;">00</div></div><div data-scope="timer" data-part="control" class="flex gap-3 mt-4"><button data-scope="timer" data-part="action-trigger" type="button" class="px-4 py-2 rounded-lg bg-green-500 text-white font-medium shadow hover:bg-green-600 transition">▶ Start</button><button data-scope="timer" data-part="action-trigger" hidden="" type="button" class="px-4 py-2 rounded-lg bg-red-500 text-white font-medium shadow hover:bg-red-600 transition">⏸ Pause</button><button data-scope="timer" data-part="action-trigger" hidden="" type="button" class="px-4 py-2 rounded-lg bg-blue-500 text-white font-medium shadow hover:bg-blue-600 transition">⏵ Resume</button></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.