# Build Editable Components in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Editable Components screenshot](screenshot.png)

## Component

- Author group: `anubra266`
- Component: `editable-components`
- Variant: `profile-field-editable`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: anubra266
- Component slug: editable-components
- Demo slug: profile-field-editable
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-md space-y-4"><div class="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700"><div class="flex items-center space-x-3 mb-4"><div class="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user h-6 w-6 text-gray-600 dark:text-gray-400" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div><div><h3 class="text-lg font-semibold text-gray-900 dark:text-white">Profile Settings</h3><p class="text-sm text-gray-500 dark:text-gray-400">Update your account information</p></div></div><div data-scope="editable" data-part="root" id="editable:«r0»" dir="ltr"><label data-scope="editable" data-part="label" id="editable:«r0»:label" dir="ltr" for="editable:«r0»:input" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label><div class="flex items-center space-x-2"><div data-scope="editable" data-part="area" id="editable:«r0»:area" dir="ltr" class="flex-1"><input data-scope="editable" data-part="input" dir="ltr" aria-label="editable input" id="editable:«r0»:input" hidden="" placeholder="Enter your email..." class="w-full px-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 transition-colors min-h-10 border-gray-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-400" value="johndoe@example.com"><span id="editable:«r0»:preview" data-scope="editable" data-part="preview" dir="ltr" aria-label="edit" tabindex="0" class="w-full px-3 py-2 text-sm border border-transparent rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white hover:border-gray-300 dark:hover:border-gray-600 cursor-text transition-colors min-h-10 ">johndoe@example.com</span></div><div id="editable:«r0»:control" data-scope="editable" data-part="control" dir="ltr" class="flex items-center space-x-1"></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
