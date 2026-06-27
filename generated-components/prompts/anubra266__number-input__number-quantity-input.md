# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/number-input/number-quantity-input
- Registry URL: https://21st.dev/r/anubra266/number-input
- Author: anubra266
- Component slug: number-input
- Demo slug: number-quantity-input
- Title: number-input
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/number-input with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__number-input__number-quantity-input.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__number-input__number-quantity-input.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center min-h-32"><div id="number-input:«r0»" data-scope="number-input" data-part="root" dir="ltr" class=""><label data-scope="number-input" data-part="label" dir="ltr" id="number-input:«r0»:label" for="number-input:«r0»:input" class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Amount</label><div data-scope="number-input" data-part="control" dir="ltr" role="group" aria-disabled="false" class="relative inline-flex h-9 w-full items-center overflow-hidden rounded-md border border-gray-200 dark:border-gray-700 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-hidden data-disabled:opacity-50 focus-within:ring-[3px] focus-within:ring-blue-500/50 dark:focus-within:ring-blue-400/50 focus-within:border-blue-500 dark:focus-within:border-blue-400"><button data-scope="number-input" data-part="decrement-trigger" dir="ltr" id="number-input:«r0»:dec" aria-label="decrease value" type="button" tabindex="-1" aria-controls="number-input:«r0»:input" class="-ms-px flex aspect-square h-[inherit] items-center justify-center rounded-s-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus w-4 h-4" aria-hidden="true"><path d="M5 12h14"></path></svg></button><input data-scope="number-input" data-part="input" dir="ltr" id="number-input:«r0»:input" role="spinbutton" pattern="-?[0-9]*(.[0-9]+)?" inputmode="decimal" autocomplete="off" autocorrect="off" spellcheck="false" aria-roledescription="numberfield" aria-valuemin="-9007199254740991" aria-valuemax="9007199254740991" class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 w-full grow px-3 py-2 text-center tabular-nums border-none outline-hidden focus:outline-hidden focus-visible:outline-hidden" type="text" value=""><button data-scope="number-input" data-part="increment-trigger" dir="ltr" id="number-input:«r0»:inc" aria-label="increment value" type="button" tabindex="-1" aria-controls="number-input:«r0»:input" class="-me-px flex aspect-square h-[inherit] items-center justify-center rounded-e-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-4 h-4" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button></div><div class="text-xs text-gray-500 dark:text-gray-400 mt-3">Enter number of items</div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.