# Build Collapsible 1 in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Collapsible 1 screenshot](screenshot.png)

## Component

- Author group: `anubra266`
- Component: `collapsible-1`
- Variant: `collapsible-styled`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: anubra266
- Component slug: collapsible-1
- Demo slug: collapsible-styled
- Title: collapsible-1
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-md"><div data-scope="collapsible" data-part="root" data-state="closed" dir="ltr" id="collapsible:«r0»"><button data-scope="collapsible" data-part="trigger" id="collapsible:«r0»:trigger" dir="ltr" type="button" data-state="closed" aria-controls="collapsible:«r0»:content" aria-expanded="false" class="group w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-white bg-linear-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"><span>Expand to see features</span><div data-scope="collapsible" data-part="indicator" dir="ltr" data-state="closed" class="transition-transform duration-300 group-hover:scale-110 data-[state=open]:rotate-180"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-5 h-5" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></button><div data-scope="collapsible" data-part="content" data-collapsible="" data-state="closed" id="collapsible:«r0»:content" hidden="" class="overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1" style="--height: 0px; --width: 0px;"><div class="bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-x border-b border-gray-200 dark:border-gray-700 rounded-b-lg p-6"><ul class="space-y-3"><li class="flex items-center gap-3"><div class="w-2 h-2 bg-green-500 rounded-full"></div><span class="text-sm text-gray-700 dark:text-gray-300">Smooth animations</span></li><li class="flex items-center gap-3"><div class="w-2 h-2 bg-blue-500 rounded-full"></div><span class="text-sm text-gray-700 dark:text-gray-300">Accessible by default</span></li><li class="flex items-center gap-3"><div class="w-2 h-2 bg-purple-500 rounded-full"></div><span class="text-sm text-gray-700 dark:text-gray-300">Customizable styling</span></li><li class="flex items-center gap-3"><div class="w-2 h-2 bg-orange-500 rounded-full"></div><span class="text-sm text-gray-700 dark:text-gray-300">TypeScript support</span></li></ul></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
