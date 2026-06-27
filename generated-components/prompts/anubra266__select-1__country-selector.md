# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/select-1/country-selector
- Registry URL: https://21st.dev/r/anubra266/select-1
- Author: anubra266
- Component slug: select-1
- Demo slug: country-selector
- Title: select-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/select-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__select-1__country-selector.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__select-1__country-selector.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"><div class="max-w-sm w-full"><div data-scope="select" data-part="root" dir="ltr" id="select:«r0»"><label dir="ltr" id="select:«r0»:label" data-scope="select" data-part="label" for="select:«r0»:select" class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Country</label><div data-scope="select" data-part="control" dir="ltr" id="select:«r0»:control" data-state="closed"><button id="select:«r0»:trigger" dir="ltr" type="button" role="combobox" aria-controls="select:«r0»:content" aria-expanded="false" aria-haspopup="listbox" data-state="closed" aria-labelledby="select:«r0»:label" data-scope="select" data-part="trigger" class="flex h-10 w-full items-center justify-between rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-900 dark:focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-100"><div class="flex items-center gap-2"><span class="text-lg">🇺🇸</span><span data-scope="select" data-part="value-text" dir="ltr">United States</span></div><div data-scope="select" data-part="indicator" dir="ltr" aria-hidden="true" data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></button><button data-scope="select" data-part="clear-trigger" id="select:«r0»:clear-trigger" type="button" aria-label="Clear value" dir="ltr" class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 mt-1">Clear</button></div><select aria-hidden="true" id="select:«r0»:select" tabindex="-1" aria-labelledby="select:«r0»:label" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; overflow-wrap: normal;"><option value="us" selected="">United States</option><option value="uk">United Kingdom</option><option value="ca">Canada</option><option value="de">Germany</option><option value="fr">France</option><option value="jp">Japan</option><option value="au">Australia</option><option value="br">Brazil</option></select></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.