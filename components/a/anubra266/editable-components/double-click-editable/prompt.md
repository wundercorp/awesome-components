# Build Editable Components in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Editable Components screenshot](screenshot.png)

## Component

- Author group: `anubra266`
- Component: `editable-components`
- Variant: `double-click-editable`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: anubra266
- Component slug: editable-components
- Demo slug: double-click-editable
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-sm space-y-3"><div data-scope="editable" data-part="root" id="editable:«r0»" dir="ltr"><div class="flex items-center space-x-2 mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mouse-pointer2 lucide-mouse-pointer-2 h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true"><path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path></svg><label data-scope="editable" data-part="label" id="editable:«r0»:label" dir="ltr" for="editable:«r0»:input" class="text-sm font-medium text-gray-700 dark:text-gray-300">Double-Click to Edit</label></div><div data-scope="editable" data-part="area" id="editable:«r0»:area" dir="ltr" class="relative"><input data-scope="editable" data-part="input" dir="ltr" aria-label="editable input" id="editable:«r0»:input" hidden="" placeholder="Double-click to edit..." class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors min-h-10" value="Double-click me to edit"><span id="editable:«r0»:preview" data-scope="editable" data-part="preview" dir="ltr" aria-label="edit" tabindex="0" class="w-full px-3 py-2 text-sm border border-dashed border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white hover:border-blue-400 dark:hover:border-blue-500 cursor-pointer transition-colors min-h-10">Double-click me to edit</span></div><p class="text-xs text-gray-500 dark:text-gray-400 mt-2">💡 Double-click the text above to start editing</p></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
