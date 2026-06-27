# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/countdown-timer/timer-w-labels
- Registry URL: https://21st.dev/r/anubra266/countdown-timer
- Author: anubra266
- Component slug: countdown-timer
- Demo slug: timer-w-labels
- Title: countdown-timer
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/countdown-timer with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__countdown-timer__timer-w-labels.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__countdown-timer__timer-w-labels.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center"><div id="timer:«r0»:root" data-scope="timer" data-part="root" class="flex flex-col items-center gap-4"><h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">Study Session</h3><div role="timer" id="timer:«r0»:area" aria-label="0 days 00:00:00" aria-atomic="true" data-scope="timer" data-part="area" class="flex items-center gap-4 text-gray-900 dark:text-gray-100"><div class="flex flex-col items-center"><div data-scope="timer" data-part="item" data-type="hours" class="text-2xl font-mono min-w-[2ch] text-center" style="--value: 0;">00</div><span class="text-xs text-gray-500 dark:text-gray-400 mt-1">Hours</span></div><div class="flex flex-col items-center"><div data-scope="timer" data-part="item" data-type="minutes" class="text-2xl font-mono min-w-[2ch] text-center" style="--value: 0;">00</div><span class="text-xs text-gray-500 dark:text-gray-400 mt-1">Minutes</span></div><div class="flex flex-col items-center"><div data-scope="timer" data-part="item" data-type="seconds" class="text-2xl font-mono min-w-[2ch] text-center" style="--value: 0;">00</div><span class="text-xs text-gray-500 dark:text-gray-400 mt-1">Seconds</span></div></div><div data-scope="timer" data-part="control" class="flex gap-2"><button data-scope="timer" data-part="action-trigger" type="button" class="flex items-center gap-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play w-4 h-4" aria-hidden="true"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>Start</button><button data-scope="timer" data-part="action-trigger" hidden="" type="button" class="flex items-center gap-1 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square w-4 h-4" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"></rect></svg>Stop</button></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.