# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ruixenui/correct-number-input/default
- Registry URL: https://21st.dev/r/ruixenui/correct-number-input
- Author: ruixenui
- Component slug: correct-number-input
- Demo slug: default
- Title: correct-number-input
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ruixenui/correct-number-input with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ruixenui__correct-number-input__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ruixenui__correct-number-input__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-xs mx-auto"><div class="relative"><input id="«r0»" inputmode="numeric" pattern="[0-9]*" class="peer w-full h-12 pl-4 pr-12 text-black dark:text-white bg-transparent border border-black/30 dark:border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/40 dark:focus:ring-white/40 transition-all" placeholder=" " type="text" value=""><label for="«r0»" class="absolute left-4 top-1 -translate-y-1/2 text-black/50 dark:text-white/50 text-sm transition-all duration-200 pointer-events-none peer-placeholder-shown:translate-y-1/2">Amount</label><div class="absolute right-1 top-1/2 -translate-y-1/2 flex flex-col h-10 justify-between"><button type="button" class="flex items-center justify-center w-8 h-5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors rounded"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up text-black dark:text-white" aria-hidden="true"><path d="m18 15-6-6-6 6"></path></svg></button><button type="button" class="flex items-center justify-center w-8 h-5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors rounded"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down text-black dark:text-white" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></div></div><p class="mt-1 text-xs text-black/50 dark:text-white/50">Use the arrows or type a number. Value 0 is shown as empty to avoid overlap.</p></div></div></div></div>
```

## Public registry source files

No public registry source files were available.