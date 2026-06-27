# Build Listbox in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Listbox screenshot](screenshot.png)

## Component

- Author group: `anubra266`
- Component: `listbox`
- Variant: `priority-listbox`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: anubra266
- Component slug: listbox
- Demo slug: priority-listbox
- Title: listbox
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center min-h-32"><div data-scope="listbox" data-part="root" dir="ltr" id="select:«r0»" data-orientation="vertical" class="[--listbox-bg:#ffffff] dark:[--listbox-bg:#111827] [--listbox-border:#e5e7eb] dark:[--listbox-border:#374151]"><label dir="ltr" id="select:«r0»:label" data-scope="listbox" data-part="label" class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Task Priority</label><div dir="ltr" id="select:«r0»:content" role="listbox" data-scope="listbox" data-part="content" data-orientation="vertical" aria-labelledby="select:«r0»:label" tabindex="0" data-layout="list" class="bg-(--listbox-bg) border border-(--listbox-border) rounded-lg px-1 py-2 w-80 shadow-lg" style="--column-count: 1;"><div id="select:«r0»:option:critical" role="option" data-scope="listbox" data-part="item" dir="ltr" data-value="critical" aria-selected="false" data-layout="list" data-state="unchecked" data-orientation="vertical" class="flex items-center justify-between px-3 py-3 mx-1 rounded-md cursor-pointer text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-800 transition-colors"><div class="flex items-center gap-3"><div class="w-8 h-8 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert w-4 h-4" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg></div><div data-scope="listbox" data-part="item-text" data-state="unchecked" class="flex-1"><div class="flex flex-col"><span class="text-gray-900 dark:text-gray-100 font-medium">Critical</span><span class="text-xs text-gray-500 dark:text-gray-400 font-normal">Needs immediate attention</span></div></div></div><div data-scope="listbox" data-part="item-indicator" aria-hidden="true" data-state="unchecked" hidden=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></div><div id="select:«r0»:option:high" role="option" data-scope="listbox" data-part="item" dir="ltr" data-value="high" aria-selected="false" data-layout="list" data-state="unchecked" data-orientation="vertical" class="flex items-center justify-between px-3 py-3 mx-1 rounded-md cursor-pointer text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-800 transition-colors"><div class="flex items-center gap-3"><div class="w-8 h-8 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up w-4 h-4" aria-hidden="true"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg></div><div data-scope="listbox" data-part="item-text" data-state="unchecked" class="flex-1"><div class="flex flex-col"><span class="text-gray-900 dark:text-gray-100 font-medium">High</span><span class="text-xs text-gray-500 dark:text-gray-400 font-normal">Important and urgent</span></div></div></div><div data-scope="listbox" data-part="item-indicator" aria-hidden="true" data-state="unchecked" hidden=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></div><div id="select:«r0»:option:medium" role="option" data-scope="listbox" data-part="item" dir="ltr" data-value="medium" aria-selected="true" data-selected="" data-layout="list" data-state="checked" data-orientation="vertical" class="flex items-center justify-between px-3 py-3 mx-1 rounded-md cursor-pointer text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-800 transition-colors"><div class="flex items-center gap-3"><div class="w-8 h-8 rounded-full flex items-center justify-center text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle w-4 h-4" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle></svg></div><div data-scope="listbox" data-part="item-text" data-state="checked" class="flex-1"><div class="flex flex-col"><span class="text-gray-900 dark:text-gray-100 font-medium">Medium</span><span class="text-xs text-gray-500 dark:text-gray-400 font-normal">Standard priority</span></div></div></div><div data-scope="listbox" data-part="item-indicator" aria-hidden="true" data-state="checked"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></div><div id="select:«r0»:option:low" role="option" data-scope="listbox" data-part="item" dir="ltr" data-value="low" aria-selected="false" data-layout="list" data-state="unchecked" data-orientation="vertical" class="flex items-center justify-between px-3 py-3 mx-1 rounded-md cursor-pointer text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-800 transition-colors"><div class="flex items-center gap-3"><div class="w-8 h-8 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down w-4 h-4" aria-hidden="true"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg></div><div data-scope="listbox" data-part="item-text" data-state="unchecked" class="flex-1"><div class="flex flex-col"><span class="text-gray-900 dark:text-gray-100 font-medium">Low</span><span class="text-xs text-gray-500 dark:text-gray-400 font-normal">Can be done later</span></div></div></div><div data-scope="listbox" data-part="item-indicator" aria-hidden="true" data-state="unchecked" hidden=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
