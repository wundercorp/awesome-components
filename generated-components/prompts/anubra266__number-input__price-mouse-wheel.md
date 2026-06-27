# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/number-input/price-mouse-wheel
- Registry URL: https://21st.dev/r/anubra266/number-input
- Author: anubra266
- Component slug: number-input
- Demo slug: price-mouse-wheel
- Title: number-input
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/number-input with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__number-input__price-mouse-wheel.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__number-input__price-mouse-wheel.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center min-h-32"><div id="number-input:«r0»" data-scope="number-input" data-part="root" dir="ltr" class="w-64"><label data-scope="number-input" data-part="label" dir="ltr" id="number-input:«r0»:label" for="number-input:«r0»:input" class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Volume Level</label><div data-scope="number-input" data-part="control" dir="ltr" role="group" aria-disabled="false" class="border border-gray-200 dark:border-gray-700 rounded-lg h-9 overflow-hidden grid grid-cols-[1fr_24px] grid-rows-2 focus-within:ring-2 focus-within:ring-blue-500/50 dark:focus-within:ring-blue-400/50 focus-within:border-blue-500 dark:focus-within:border-blue-400 transition-all"><input data-scope="number-input" data-part="input" dir="ltr" id="number-input:«r0»:input" role="spinbutton" pattern="-?[0-9]*(.[0-9]+)?" inputmode="decimal" autocomplete="off" autocorrect="off" spellcheck="false" aria-roledescription="numberfield" aria-valuemin="0" aria-valuemax="1000" aria-valuenow="100" class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-medium px-3 py-1 row-span-2 border-none outline-hidden focus:outline-hidden focus-visible:outline-hidden" type="text" value="100"><button data-scope="number-input" data-part="increment-trigger" dir="ltr" id="number-input:«r0»:inc" aria-label="increment value" type="button" tabindex="-1" aria-controls="number-input:«r0»:input" class="flex items-center justify-center bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer border-l border-gray-200 dark:border-gray-700"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up w-3 h-3" aria-hidden="true"><path d="m18 15-6-6-6 6"></path></svg></button><button data-scope="number-input" data-part="decrement-trigger" dir="ltr" id="number-input:«r0»:dec" aria-label="decrease value" type="button" tabindex="-1" aria-controls="number-input:«r0»:input" class="flex items-center justify-center bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer border-l border-t border-gray-200 dark:border-gray-700"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-3 h-3" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></div><div class="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-3 gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mouse-pointer w-3 h-3" aria-hidden="true"><path d="M12.586 12.586 19 19"></path><path d="M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"></path></svg><span>Focus and use mouse wheel to change</span></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.