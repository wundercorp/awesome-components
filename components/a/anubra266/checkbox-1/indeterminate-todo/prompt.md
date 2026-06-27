# Build Checkbox 1 in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Checkbox 1 screenshot](screenshot.png)

## Component

- Author group: `anubra266`
- Component: `checkbox-1`
- Variant: `indeterminate-todo`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: anubra266
- Component slug: checkbox-1
- Demo slug: indeterminate-todo
- Title: checkbox-1
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="space-y-4"><label data-scope="checkbox" data-part="root" data-state="indeterminate" dir="ltr" id="checkbox:«r0»" for="checkbox:«r0»:input" class="flex items-center gap-3 cursor-pointer"><div data-scope="checkbox" data-part="control" data-state="indeterminate" dir="ltr" id="checkbox:«r0»:control" aria-hidden="true" class="w-5 h-5 bg-white border-2 border-gray-300 rounded data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-[state=indeterminate]:bg-gray-100 data-[state=indeterminate]:border-gray-400 data-hover:border-gray-400 dark:bg-gray-900 dark:border-gray-600 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500 dark:data-[state=indeterminate]:bg-gray-700 dark:data-[state=indeterminate]:border-gray-500 dark:data-hover:border-gray-400 transition-all duration-200 flex items-center justify-center"><div data-scope="checkbox" data-part="indicator" data-state="indeterminate" dir="ltr" hidden=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check w-3.5 h-3.5 text-white" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div><div data-scope="checkbox" data-part="indicator" data-state="indeterminate" dir="ltr"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus w-3.5 h-3.5 text-gray-600 dark:text-gray-300" aria-hidden="true"><path d="M5 12h14"></path></svg></div></div><span data-scope="checkbox" data-part="label" data-state="indeterminate" dir="ltr" id="checkbox:«r0»:label" class="text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer">Select all features</span><input id="checkbox:«r0»:input" aria-labelledby="checkbox:«r0»:label" type="checkbox" value="on" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; overflow-wrap: normal;"></label><div class="ml-6"><div role="group" class="space-y-3" data-scope="checkbox" data-part="group"><label data-scope="checkbox" data-part="root" data-state="checked" dir="ltr" id="checkbox:«r1»" for="checkbox:«r1»:input" class="flex items-center gap-3 cursor-pointer"><div data-scope="checkbox" data-part="control" data-state="checked" dir="ltr" id="checkbox:«r1»:control" aria-hidden="true" class="w-5 h-5 bg-white border-2 border-gray-300 rounded data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-hover:border-gray-400 dark:bg-gray-900 dark:border-gray-600 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500 dark:data-hover:border-gray-400 transition-all duration-200 flex items-center justify-center"><div data-scope="checkbox" data-part="indicator" data-state="checked" dir="ltr"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check w-3.5 h-3.5 text-white" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></div><span data-scope="checkbox" data-part="label" data-state="checked" dir="ltr" id="checkbox:«r1»:label" class="text-sm text-gray-700 dark:text-gray-200 cursor-pointer">Dark mode</span><input id="checkbox:«r1»:input" aria-labelledby="checkbox:«r1»:label" type="checkbox" value="dark-mode" checked="" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; overflow-wrap: normal;"></label><label data-scope="checkbox" data-part="root" data-state="unchecked" dir="ltr" id="checkbox:«r2»" for="checkbox:«r2»:input" class="flex items-center gap-3 cursor-pointer"><div data-scope="checkbox" data-part="control" data-state="unchecked" dir="ltr" id="checkbox:«r2»:control" aria-hidden="true" class="w-5 h-5 bg-white border-2 border-gray-300 rounded data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-hover:border-gray-400 dark:bg-gray-900 dark:border-gray-600 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500 dark:data-hover:border-gray-400 transition-all duration-200 flex items-center justify-center"><div data-scope="checkbox" data-part="indicator" data-state="unchecked" dir="ltr" hidden=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check w-3.5 h-3.5 text-white" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></div><span data-scope="checkbox" data-part="label" data-state="unchecked" dir="ltr" id="checkbox:«r2»:label" class="text-sm text-gray-700 dark:text-gray-200 cursor-pointer">Notifications</span><input id="checkbox:«r2»:input" aria-labelledby="checkbox:«r2»:label" type="checkbox" value="notifications" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; overflow-wrap: normal;"></label><label data-scope="checkbox" data-part="root" data-state="unchecked" dir="ltr" id="checkbox:«r3»" for="checkbox:«r3»:input" class="flex items-center gap-3 cursor-pointer"><div data-scope="checkbox" data-part="control" data-state="unchecked" dir="ltr" id="checkbox:«r3»:control" aria-hidden="true" class="w-5 h-5 bg-white border-2 border-gray-300 rounded data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-hover:border-gray-400 dark:bg-gray-900 dark:border-gray-600 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500 dark:data-hover:border-gray-400 transition-all duration-200 flex items-center justify-center"><div data-scope="checkbox" data-part="indicator" data-state="unchecked" dir="ltr" hidden=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check w-3.5 h-3.5 text-white" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></div><span data-scope="checkbox" data-part="label" data-state="unchecked" dir="ltr" id="checkbox:«r3»:label" class="text-sm text-gray-700 dark:text-gray-200 cursor-pointer">Analytics</span><input id="checkbox:«r3»:input" aria-labelledby="checkbox:«r3»:label" type="checkbox" value="analytics" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; overflow-wrap: normal;"></label></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
