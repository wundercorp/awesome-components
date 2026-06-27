# Build Editable Components in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Editable Components screenshot](screenshot.png)

## Component

- Author group: `anubra266`
- Component: `editable-components`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: anubra266
- Component slug: editable-components
- Demo slug: default
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-sm space-y-3"><div data-scope="editable" data-part="root" id="editable:«r0»" dir="ltr"><label data-scope="editable" data-part="label" id="editable:«r0»:label" dir="ltr" for="editable:«r0»:input" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Basic Editable</label><div data-scope="editable" data-part="area" id="editable:«r0»:area" dir="ltr" class="relative"><input data-scope="editable" data-part="input" dir="ltr" aria-label="editable input" id="editable:«r0»:input" hidden="" placeholder="Enter some text..." class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors min-h-10" value="Click to edit"><span id="editable:«r0»:preview" data-scope="editable" data-part="preview" dir="ltr" aria-label="edit" tabindex="0" class="w-full px-3 py-2 text-sm border border-transparent rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white hover:border-gray-300 dark:hover:border-gray-600 cursor-text transition-colors min-h-10">Click to edit</span></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
