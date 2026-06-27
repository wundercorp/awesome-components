# Build Basic Tags Input in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Basic Tags Input screenshot](screenshot.png)

## Component

- Author group: `anubra266`
- Component: `basic-tags-input`
- Variant: `tags-with-combobox`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: anubra266
- Component slug: basic-tags-input
- Demo slug: tags-with-combobox
- Title: basic-tags-input
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center"><div dir="ltr" data-scope="tags-input" data-part="root" id="tags-input:«r0»" class="w-full max-w-md"><div data-scope="combobox" data-part="root" dir="ltr" id="combobox:«r1»"><label data-scope="tags-input" data-part="label" id="tags-input:«r0»:label" dir="ltr" for="tags-input:«r0»:input" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Frameworks</label><div data-scope="combobox" data-part="control" dir="ltr" id="combobox:«r1»:control" data-state="closed" class="relative"><div id="tags-input:«r0»:control" data-scope="tags-input" data-part="control" dir="ltr" class="flex flex-wrap gap-1 p-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-md shadow-xs bg-white dark:bg-gray-800 min-h-10 focus-within:outline-hidden focus-within:ring-2 focus-within:ring-blue-500/50 dark:focus-within:ring-blue-400/50 focus-within:border-blue-500 dark:focus-within:border-blue-400"><div data-scope="tags-input" data-part="item" dir="ltr" data-value="React" class="flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-800 rounded text-xs dark:bg-gray-700 dark:text-gray-200"><div data-scope="tags-input" data-part="item-preview" id="tags-input:«r0»:tag:React:0" dir="ltr" data-value="React" class="flex items-center gap-1"><span data-scope="tags-input" data-part="item-text" dir="ltr">React</span><button data-scope="tags-input" data-part="item-delete-trigger" dir="ltr" id="tags-input:«r0»:tag:React:0:delete-btn" type="button" aria-label="Delete tag React" tabindex="-1" class="flex items-center justify-center w-3 h-3 hover:bg-gray-200 rounded transition-colors dark:hover:bg-gray-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x w-2 h-2" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button></div><input data-scope="tags-input" data-part="item-input" dir="ltr" aria-label="Editing tag React. Press enter to save or escape to cancel." id="tags-input:«r0»:tag:React:0:input" tabindex="-1" hidden="" class="bg-transparent border-none outline-none text-xs" value=""></div><input data-scope="combobox" data-part="input" dir="ltr" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" placeholder="Add framework..." id="combobox:«r1»:input" role="combobox" aria-autocomplete="list" aria-controls="combobox:«r1»:content" aria-expanded="false" data-state="closed" class="flex-1 min-w-[80px] bg-transparent border-none outline-none text-sm text-gray-900 placeholder-gray-500 dark:text-gray-100 dark:placeholder-gray-400" type="text" value=""></div><button data-scope="combobox" data-part="trigger" dir="ltr" id="combobox:«r1»:toggle-btn" aria-haspopup="listbox" type="button" tabindex="-1" aria-label="Toggle suggestions" aria-expanded="false" data-state="closed" class="px-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors absolute inset-y-0 right-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></div><button data-scope="tags-input" data-part="clear-trigger" dir="ltr" id="tags-input:«r0»:clear-btn" type="button" aria-label="Clear all tags" class="mt-2 text-sm text-gray-500 hover:text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-gray-200">Clear all</button></div><input hidden="" id="tags-input:«r0»:hidden-input" type="text" value="React"></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
