# Build Radio Group in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Radio Group screenshot](screenshot.png)

## Component

- Author group: `anubra266`
- Component: `radio-group`
- Variant: `radio-group-feedback`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: anubra266
- Component slug: radio-group
- Demo slug: radio-group-feedback
- Title: radio-group
- Description: 

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

No reference metadata available.

## Rendered DOM snapshot

This is the rendered demo HTML extracted from the live preview. Use it to verify structure, class names, visible content, and layout.

```html
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="space-y-4"><h3 class="text-sm font-medium text-gray-900 dark:text-gray-100">How do you feel about this product?</h3><div data-scope="radio-group" data-part="root" role="radiogroup" id="radio-group:«r0»" aria-labelledby="radio-group:«r0»:label" data-orientation="vertical" aria-orientation="vertical" dir="ltr" class="flex gap-2" style="position: relative;"><label data-scope="radio-group" data-part="item" dir="ltr" id="radio-group:«r0»:radio:very-bad" for="radio-group:«r0»:radio:input:very-bad" data-state="unchecked" data-orientation="vertical" class="flex flex-col items-center gap-2 cursor-pointer group"><div data-scope="radio-group" data-part="item-control" dir="ltr" id="radio-group:«r0»:radio:control:very-bad" aria-hidden="true" data-state="unchecked" data-orientation="vertical" class="size-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-md opacity-60 data-[state=checked]:opacity-100 data-[state=checked]:border-blue-500 hover:opacity-80 hover:border-gray-400 dark:border-gray-600 dark:data-[state=checked]:border-blue-500 dark:hover:border-gray-500 transition-all duration-200">😠<input data-ownedby="radio-group:«r0»" id="radio-group:«r0»:radio:input:very-bad" type="radio" value="very-bad" name="«r0»" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; overflow-wrap: normal;"></div><span data-scope="radio-group" data-part="item-text" dir="ltr" id="radio-group:«r0»:radio:label:very-bad" data-state="unchecked" data-orientation="vertical" class="text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 data-[state=checked]:opacity-100 transition-opacity">Very Bad</span></label><label data-scope="radio-group" data-part="item" dir="ltr" id="radio-group:«r0»:radio:bad" for="radio-group:«r0»:radio:input:bad" data-state="unchecked" data-orientation="vertical" class="flex flex-col items-center gap-2 cursor-pointer group"><div data-scope="radio-group" data-part="item-control" dir="ltr" id="radio-group:«r0»:radio:control:bad" aria-hidden="true" data-state="unchecked" data-orientation="vertical" class="size-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-md opacity-60 data-[state=checked]:opacity-100 data-[state=checked]:border-blue-500 hover:opacity-80 hover:border-gray-400 dark:border-gray-600 dark:data-[state=checked]:border-blue-500 dark:hover:border-gray-500 transition-all duration-200">🙁<input data-ownedby="radio-group:«r0»" id="radio-group:«r0»:radio:input:bad" type="radio" value="bad" name="«r0»" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; overflow-wrap: normal;"></div><span data-scope="radio-group" data-part="item-text" dir="ltr" id="radio-group:«r0»:radio:label:bad" data-state="unchecked" data-orientation="vertical" class="text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 data-[state=checked]:opacity-100 transition-opacity">Bad</span></label><label data-scope="radio-group" data-part="item" dir="ltr" id="radio-group:«r0»:radio:neutral" for="radio-group:«r0»:radio:input:neutral" data-state="unchecked" data-orientation="vertical" class="flex flex-col items-center gap-2 cursor-pointer group"><div data-scope="radio-group" data-part="item-control" dir="ltr" id="radio-group:«r0»:radio:control:neutral" aria-hidden="true" data-state="unchecked" data-orientation="vertical" class="size-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-md opacity-60 data-[state=checked]:opacity-100 data-[state=checked]:border-blue-500 hover:opacity-80 hover:border-gray-400 dark:border-gray-600 dark:data-[state=checked]:border-blue-500 dark:hover:border-gray-500 transition-all duration-200">😐<input data-ownedby="radio-group:«r0»" id="radio-group:«r0»:radio:input:neutral" type="radio" value="neutral" name="«r0»" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; overflow-wrap: normal;"></div><span data-scope="radio-group" data-part="item-text" dir="ltr" id="radio-group:«r0»:radio:label:neutral" data-state="unchecked" data-orientation="vertical" class="text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 data-[state=checked]:opacity-100 transition-opacity">Neutral</span></label><label data-scope="radio-group" data-part="item" dir="ltr" id="radio-group:«r0»:radio:good" for="radio-group:«r0»:radio:input:good" data-state="unchecked" data-orientation="vertical" class="flex flex-col items-center gap-2 cursor-pointer group"><div data-scope="radio-group" data-part="item-control" dir="ltr" id="radio-group:«r0»:radio:control:good" aria-hidden="true" data-state="unchecked" data-orientation="vertical" class="size-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-md opacity-60 data-[state=checked]:opacity-100 data-[state=checked]:border-blue-500 hover:opacity-80 hover:border-gray-400 dark:border-gray-600 dark:data-[state=checked]:border-blue-500 dark:hover:border-gray-500 transition-all duration-200">🙂<input data-ownedby="radio-group:«r0»" id="radio-group:«r0»:radio:input:good" type="radio" value="good" name="«r0»" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; overflow-wrap: normal;"></div><span data-scope="radio-group" data-part="item-text" dir="ltr" id="radio-group:«r0»:radio:label:good" data-state="unchecked" data-orientation="vertical" class="text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 data-[state=checked]:opacity-100 transition-opacity">Good</span></label><label data-scope="radio-group" data-part="item" dir="ltr" id="radio-group:«r0»:radio:very-good" for="radio-group:«r0»:radio:input:very-good" data-state="unchecked" data-orientation="vertical" class="flex flex-col items-center gap-2 cursor-pointer group"><div data-scope="radio-group" data-part="item-control" dir="ltr" id="radio-group:«r0»:radio:control:very-good" aria-hidden="true" data-state="unchecked" data-orientation="vertical" class="size-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-md opacity-60 data-[state=checked]:opacity-100 data-[state=checked]:border-blue-500 hover:opacity-80 hover:border-gray-400 dark:border-gray-600 dark:data-[state=checked]:border-blue-500 dark:hover:border-gray-500 transition-all duration-200">😄<input data-ownedby="radio-group:«r0»" id="radio-group:«r0»:radio:input:very-good" type="radio" value="very-good" name="«r0»" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; overflow-wrap: normal;"></div><span data-scope="radio-group" data-part="item-text" dir="ltr" id="radio-group:«r0»:radio:label:very-good" data-state="unchecked" data-orientation="vertical" class="text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 data-[state=checked]:opacity-100 transition-opacity">Very Good</span></label></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
