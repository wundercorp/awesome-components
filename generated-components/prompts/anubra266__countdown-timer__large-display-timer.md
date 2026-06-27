# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/countdown-timer/large-display-timer
- Registry URL: https://21st.dev/r/anubra266/countdown-timer
- Author: anubra266
- Component slug: countdown-timer
- Demo slug: large-display-timer
- Title: countdown-timer
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/countdown-timer with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__countdown-timer__large-display-timer.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__countdown-timer__large-display-timer.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center"><div id="timer:«r0»:root" data-scope="timer" data-part="root" class="flex flex-col items-center gap-6"><div role="timer" id="timer:«r0»:area" aria-label="0 days 00:00:00" aria-atomic="true" data-scope="timer" data-part="area" class="flex items-center gap-2 text-6xl font-mono font-bold text-gray-900 dark:text-gray-100"><div data-scope="timer" data-part="item" data-type="hours" class="min-w-[2ch] text-center" style="--value: 0;">00</div><div aria-hidden="true" data-scope="timer" data-part="separator" class="text-gray-400">:</div><div data-scope="timer" data-part="item" data-type="minutes" class="min-w-[2ch] text-center" style="--value: 0;">00</div><div aria-hidden="true" data-scope="timer" data-part="separator" class="text-gray-400">:</div><div data-scope="timer" data-part="item" data-type="seconds" class="min-w-[2ch] text-center" style="--value: 0;">00</div></div><div data-scope="timer" data-part="control" class="flex gap-3"><button data-scope="timer" data-part="action-trigger" type="button" class="flex items-center gap-3 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play w-5 h-5" aria-hidden="true"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>Start Timer</button><button data-scope="timer" data-part="action-trigger" hidden="" type="button" class="flex items-center gap-3 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pause w-5 h-5" aria-hidden="true"><rect x="14" y="4" width="4" height="16" rx="1"></rect><rect x="6" y="4" width="4" height="16" rx="1"></rect></svg>Pause</button></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.