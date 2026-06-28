# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ui-layouts/phone-input/default
- Registry URL: https://21st.dev/r/ui-layouts/phone-input
- Author: ui-layouts
- Component slug: phone-input
- Demo slug: default
- Title: phone-input
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ui-layouts/phone-input with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ui-layouts__phone-input__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ui-layouts__phone-input__default.png

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
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="named_DemoOne_PhoneInputDemo">PhoneInputDemo</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col items-center justify-center p-8 min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-50"><div class="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl space-y-8"><h2 class="text-2xl font-semibold text-center">Basic Usage &amp; Validation</h2><form class="flex flex-col items-stretch space-y-4"><div class="flex flex-col space-y-2"><label for="phone-field" class="text-sm font-medium">Phone Number</label><div class="flex border rounded-lg h-10 w-full PhoneInput"><button class="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 flex gap-1 rounded-e-none rounded-s-lg px-3" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-«r0»" data-state="closed"><span class="bg-foreground/20 flex h-4 w-6 overflow-hidden rounded-sm"></span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-up-down -mr-2 h-4 w-4 opacity-100" aria-hidden="true"><path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path></svg></button><input class="rounded-e-lg rounded-s-none px-2 bg-background outline-none PhoneInputInput" autocomplete="tel" id="phone-field" placeholder="Enter a phone number" type="tel" value="" name="phone"></div></div><div class="flex gap-4 justify-end"><button type="button" class="p-2 px-4 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-md text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">Reset</button><button type="submit" class="p-2 px-4 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">Submit</button></div></form></div></div></div></div>
```

## Public registry source files

No public registry source files were available.