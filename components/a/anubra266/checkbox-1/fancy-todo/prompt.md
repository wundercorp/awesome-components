# Build Checkbox 1 in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Checkbox 1 screenshot](screenshot.png)

## Component

- Author group: `anubra266`
- Component: `checkbox-1`
- Variant: `fancy-todo`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: anubra266
- Component slug: checkbox-1
- Demo slug: fancy-todo
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="max-w-md"><label data-scope="checkbox" data-part="root" data-state="checked" dir="ltr" id="checkbox:«r0»" for="checkbox:«r0»:input" class="flex items-center gap-3 cursor-pointer"><div data-scope="checkbox" data-part="control" data-state="checked" dir="ltr" id="checkbox:«r0»:control" aria-hidden="true" class="w-5 h-5 bg-white border-2 border-gray-300 rounded-full data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600 data-hover:border-gray-400 dark:bg-gray-900 dark:border-gray-600 dark:data-[state=checked]:bg-green-400 dark:data-[state=checked]:border-green-400 dark:data-hover:border-gray-400 transition-all duration-200 flex items-center justify-center"><div data-scope="checkbox" data-part="indicator" data-state="checked" dir="ltr"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check w-3.5 h-3.5 text-white dark:text-green-800" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></div><span data-scope="checkbox" data-part="label" data-state="checked" dir="ltr" id="checkbox:«r0»:label" class="text-base cursor-pointer transition-all duration-200 text-gray-400 line-through dark:text-gray-500">Fancy todo item</span><input id="checkbox:«r0»:input" aria-labelledby="checkbox:«r0»:label" type="checkbox" value="on" checked="" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; overflow-wrap: normal;"></label></div></div></div></div>
```

## Reference source files

No reference source files were available.
