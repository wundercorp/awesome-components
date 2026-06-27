# Build Editable Components in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Editable Components screenshot](screenshot.png)

## Component

- Author group: `anubra266`
- Component: `editable-components`
- Variant: `title-editor`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: anubra266
- Component slug: editable-components
- Demo slug: title-editor
- Title: editable-components
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-2xl space-y-4"><div class="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6"><div class="flex items-center space-x-3 mb-6"><div class="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-type h-5 w-5 text-blue-600 dark:text-blue-400" aria-hidden="true"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" x2="15" y1="20" y2="20"></line><line x1="12" x2="12" y1="4" y2="20"></line></svg></div><div><h3 class="text-lg font-semibold text-gray-900 dark:text-white">Article Title</h3><p class="text-sm text-gray-500 dark:text-gray-400">Create an engaging title for your content</p></div></div><div data-scope="editable" data-part="root" id="editable:«r0»" dir="ltr"><div class="flex items-center justify-between mb-3"><label data-scope="editable" data-part="label" id="editable:«r0»:label" dir="ltr" for="editable:«r0»:input" class="text-sm font-medium text-gray-700 dark:text-gray-300">Title</label><div class="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400"><span class="">46 characters remaining</span><div id="editable:«r0»:control" data-scope="editable" data-part="control" dir="ltr" class="flex items-center space-x-1"><button data-scope="editable" data-part="edit-trigger" id="editable:«r0»:edit" dir="ltr" aria-label="edit" type="button" class="p-1 text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-line h-3 w-3" aria-hidden="true"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path></svg></button></div></div></div><div data-scope="editable" data-part="area" id="editable:«r0»:area" dir="ltr" style="display: inline-grid;"><input data-scope="editable" data-part="input" dir="ltr" aria-label="editable input" id="editable:«r0»:input" placeholder="Enter your article title..." maxlength="100" data-autoresize="" size="1" class="w-full px-4 py-3 text-xl font-bold border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors resize-none min-h-14" value="The Future of Web Development: Trends and Technologies" style="grid-area: 1 / 1; visibility: hidden;"><span id="editable:«r0»:preview" data-scope="editable" data-part="preview" dir="ltr" aria-label="edit" data-autoresize="" tabindex="0" class="w-full px-4 py-3 text-xl font-bold border border-transparent rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white hover:border-gray-300 dark:hover:border-gray-600 cursor-text transition-colors min-h-14 flex items-center" style="white-space: pre; user-select: none; grid-area: 1 / 1; overflow: hidden; text-overflow: ellipsis;">The Future of Web Development: Trends and Technologies</span></div><div class="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"><h4 class="text-sm font-medium text-gray-900 dark:text-white mb-2">Title Preview</h4><div class="text-lg font-semibold text-gray-700 dark:text-gray-300 leading-relaxed">The Future of Web Development: Trends and Technologies</div></div><div class="mt-4 text-xs text-gray-500 dark:text-gray-400">💡 Click the title above to edit • Use a compelling title to engage your readers</div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
