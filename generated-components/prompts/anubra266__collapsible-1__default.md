# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/collapsible-1/default
- Registry URL: https://21st.dev/r/anubra266/collapsible-1
- Author: anubra266
- Component slug: collapsible-1
- Demo slug: default
- Title: collapsible-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/collapsible-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__collapsible-1__default.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__collapsible-1__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div data-scope="collapsible" data-part="root" data-state="closed" dir="ltr" id="collapsible:«r0»" class="w-full max-w-sm h-40"><button data-scope="collapsible" data-part="trigger" id="collapsible:«r0»:trigger" dir="ltr" type="button" data-state="closed" aria-controls="collapsible:«r0»:content" aria-expanded="false" class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200">Toggle<div data-scope="collapsible" data-part="indicator" dir="ltr" data-state="closed" class="transition-transform duration-200 data-[state=open]:rotate-180"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-4 h-4" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></button><div data-scope="collapsible" data-part="content" data-collapsible="" data-state="closed" id="collapsible:«r0»:content" hidden="" class="overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1" style="--height: 0px; --width: 0px;"><div class="mt-2 p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md"><p class="text-sm text-gray-700 dark:text-gray-300">Content</p></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.