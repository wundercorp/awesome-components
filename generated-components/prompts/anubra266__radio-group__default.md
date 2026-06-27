# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/radio-group/default
- Registry URL: https://21st.dev/r/anubra266/radio-group
- Author: anubra266
- Component slug: radio-group
- Demo slug: default
- Title: radio-group
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/radio-group with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__radio-group__default.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__radio-group__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div data-scope="radio-group" data-part="root" role="radiogroup" id="radio-group:«r0»" aria-labelledby="radio-group:«r0»:label" data-orientation="vertical" aria-orientation="vertical" dir="ltr" class="flex flex-col space-y-2" style="position: relative;"><div id="radio-group:«r0»:indicator" data-scope="radio-group" data-part="indicator" dir="ltr" hidden="" data-orientation="vertical" style="--transition-property: left, top, width, height; position: absolute; will-change: var(--transition-property); transition-property: var(--transition-property); transition-duration: 0ms; transition-timing-function: var(--transition-timing-function); top: var(--top);"></div><label data-scope="radio-group" data-part="item" dir="ltr" id="radio-group:«r0»:radio:Pizza" for="radio-group:«r0»:radio:input:Pizza" data-state="unchecked" data-orientation="vertical" class="flex items-center gap-2 cursor-pointer"><div data-scope="radio-group" data-part="item-control" dir="ltr" id="radio-group:«r0»:radio:control:Pizza" aria-hidden="true" data-state="unchecked" data-orientation="vertical" class="group size-4 bg-white border-2 border-gray-300 rounded-full data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-hover:border-gray-400 dark:bg-gray-900 dark:border-gray-600 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500 dark:data-hover:border-gray-400 data-focus:ring-2 data-focus:ring-blue-500/50 transition-all duration-200 flex items-center justify-center text-white"><svg width="6" height="6" viewBox="0 0 6 6" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" class="opacity-0 group-data-[state=checked]:opacity-100 transition-opacity"><circle cx="3" cy="3" r="3"></circle></svg></div><span data-scope="radio-group" data-part="item-text" dir="ltr" id="radio-group:«r0»:radio:label:Pizza" data-state="unchecked" data-orientation="vertical" class="text-sm font-medium">Pizza</span><input data-ownedby="radio-group:«r0»" id="radio-group:«r0»:radio:input:Pizza" type="radio" value="Pizza" name="«r0»" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; overflow-wrap: normal;"></label><label data-scope="radio-group" data-part="item" dir="ltr" id="radio-group:«r0»:radio:Burger" for="radio-group:«r0»:radio:input:Burger" data-state="unchecked" data-orientation="vertical" class="flex items-center gap-2 cursor-pointer"><div data-scope="radio-group" data-part="item-control" dir="ltr" id="radio-group:«r0»:radio:control:Burger" aria-hidden="true" data-state="unchecked" data-orientation="vertical" class="group size-4 bg-white border-2 border-gray-300 rounded-full data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-hover:border-gray-400 dark:bg-gray-900 dark:border-gray-600 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500 dark:data-hover:border-gray-400 data-focus:ring-2 data-focus:ring-blue-500/50 transition-all duration-200 flex items-center justify-center text-white"><svg width="6" height="6" viewBox="0 0 6 6" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" class="opacity-0 group-data-[state=checked]:opacity-100 transition-opacity"><circle cx="3" cy="3" r="3"></circle></svg></div><span data-scope="radio-group" data-part="item-text" dir="ltr" id="radio-group:«r0»:radio:label:Burger" data-state="unchecked" data-orientation="vertical" class="text-sm font-medium">Burger</span><input data-ownedby="radio-group:«r0»" id="radio-group:«r0»:radio:input:Burger" type="radio" value="Burger" name="«r0»" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; overflow-wrap: normal;"></label><label data-scope="radio-group" data-part="item" dir="ltr" id="radio-group:«r0»:radio:Sushi" for="radio-group:«r0»:radio:input:Sushi" data-state="unchecked" data-orientation="vertical" class="flex items-center gap-2 cursor-pointer"><div data-scope="radio-group" data-part="item-control" dir="ltr" id="radio-group:«r0»:radio:control:Sushi" aria-hidden="true" data-state="unchecked" data-orientation="vertical" class="group size-4 bg-white border-2 border-gray-300 rounded-full data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-hover:border-gray-400 dark:bg-gray-900 dark:border-gray-600 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500 dark:data-hover:border-gray-400 data-focus:ring-2 data-focus:ring-blue-500/50 transition-all duration-200 flex items-center justify-center text-white"><svg width="6" height="6" viewBox="0 0 6 6" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" class="opacity-0 group-data-[state=checked]:opacity-100 transition-opacity"><circle cx="3" cy="3" r="3"></circle></svg></div><span data-scope="radio-group" data-part="item-text" dir="ltr" id="radio-group:«r0»:radio:label:Sushi" data-state="unchecked" data-orientation="vertical" class="text-sm font-medium">Sushi</span><input data-ownedby="radio-group:«r0»" id="radio-group:«r0»:radio:input:Sushi" type="radio" value="Sushi" name="«r0»" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; overflow-wrap: normal;"></label></div></div></div></div>
```

## Public registry source files

No public registry source files were available.