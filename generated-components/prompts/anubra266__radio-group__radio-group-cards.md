# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/radio-group/radio-group-cards
- Registry URL: https://21st.dev/r/anubra266/radio-group
- Author: anubra266
- Component slug: radio-group
- Demo slug: radio-group-cards
- Title: radio-group
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/radio-group with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__radio-group__radio-group-cards.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__radio-group__radio-group-cards.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div data-scope="radio-group" data-part="root" role="radiogroup" id="radio-group:«r0»" aria-labelledby="radio-group:«r0»:label" data-orientation="vertical" aria-orientation="vertical" dir="ltr" class="flex flex-col space-y-3" style="position: relative;"><label data-scope="radio-group" data-part="item" dir="ltr" id="radio-group:«r0»:radio:mastercard" for="radio-group:«r0»:radio:input:mastercard" data-state="unchecked" data-orientation="vertical" class="flex items-start gap-3 p-4 bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gray-300 hover:bg-gray-50 data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-50 dark:bg-gray-800 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-700 dark:data-[state=checked]:border-blue-500 dark:data-[state=checked]:bg-blue-950/50 transition-all duration-200"><div class="w-8 h-6 bg-linear-to-r from-red-500 to-orange-500 rounded-sm flex items-center justify-center"><div class="w-3 h-3 bg-red-600 rounded-full opacity-80"></div><div class="w-3 h-3 bg-orange-400 rounded-full -ml-1.5 opacity-80"></div></div><div class="flex-1"><span data-scope="radio-group" data-part="item-text" dir="ltr" id="radio-group:«r0»:radio:label:mastercard" data-state="unchecked" data-orientation="vertical" class="text-sm font-medium text-gray-900 dark:text-gray-100">Mastercard <span class="text-gray-500 dark:text-gray-400 font-normal">(••••4242)</span></span><p class="text-xs text-gray-600 dark:text-gray-400 mt-1">You can use this card with a label and a description.</p></div><div data-scope="radio-group" data-part="item-control" dir="ltr" id="radio-group:«r0»:radio:control:mastercard" aria-hidden="true" data-state="unchecked" data-orientation="vertical" class="group size-4 bg-white border-2 border-gray-300 rounded-full data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-hover:border-gray-400 dark:bg-gray-900 dark:border-gray-600 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500 dark:data-hover:border-gray-400 data-focus:ring-2 data-focus:ring-blue-500/50 transition-all duration-200 flex items-center justify-center text-white mt-0.5"><svg width="6" height="6" viewBox="0 0 6 6" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" class="opacity-0 group-data-[state=checked]:opacity-100 transition-opacity"><circle cx="3" cy="3" r="3"></circle></svg></div><input data-ownedby="radio-group:«r0»" id="radio-group:«r0»:radio:input:mastercard" type="radio" value="mastercard" name="«r0»" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; overflow-wrap: normal;"></label><label data-scope="radio-group" data-part="item" dir="ltr" id="radio-group:«r0»:radio:visa" for="radio-group:«r0»:radio:input:visa" data-state="checked" data-orientation="vertical" class="flex items-start gap-3 p-4 bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gray-300 hover:bg-gray-50 data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-50 dark:bg-gray-800 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-700 dark:data-[state=checked]:border-blue-500 dark:data-[state=checked]:bg-blue-950/50 transition-all duration-200"><div class="w-8 h-6 bg-blue-600 rounded-sm flex items-center justify-center text-white text-xs font-bold">VISA</div><div class="flex-1"><span data-scope="radio-group" data-part="item-text" dir="ltr" id="radio-group:«r0»:radio:label:visa" data-state="checked" data-orientation="vertical" class="text-sm font-medium text-gray-900 dark:text-gray-100">Visa <span class="text-gray-500 dark:text-gray-400 font-normal">(••••8888)</span></span><p class="text-xs text-gray-600 dark:text-gray-400 mt-1">You can use this card with a label and a description.</p></div><div data-scope="radio-group" data-part="item-control" dir="ltr" id="radio-group:«r0»:radio:control:visa" aria-hidden="true" data-state="checked" data-orientation="vertical" class="group size-4 bg-white border-2 border-gray-300 rounded-full data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-hover:border-gray-400 dark:bg-gray-900 dark:border-gray-600 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500 dark:data-hover:border-gray-400 data-focus:ring-2 data-focus:ring-blue-500/50 transition-all duration-200 flex items-center justify-center text-white mt-0.5"><svg width="6" height="6" viewBox="0 0 6 6" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" class="opacity-0 group-data-[state=checked]:opacity-100 transition-opacity"><circle cx="3" cy="3" r="3"></circle></svg></div><input data-ownedby="radio-group:«r0»" id="radio-group:«r0»:radio:input:visa" type="radio" value="visa" checked="" name="«r0»" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; overflow-wrap: normal;"></label></div></div></div></div>
```

## Public registry source files

No public registry source files were available.