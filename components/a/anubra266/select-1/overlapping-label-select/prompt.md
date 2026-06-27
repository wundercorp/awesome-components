# Build Select 1 in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Select 1 screenshot](screenshot.png)

## Component

- Author group: `anubra266`
- Component: `select-1`
- Variant: `overlapping-label-select`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: anubra266
- Component slug: select-1
- Demo slug: overlapping-label-select
- Title: select-1
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"><div class="relative max-w-sm w-full group"><div data-scope="select" data-part="root" dir="ltr" id="select:«r0»"><div data-scope="select" data-part="control" dir="ltr" id="select:«r0»:control" data-state="closed"><button id="select:«r0»:trigger" dir="ltr" type="button" role="combobox" aria-controls="select:«r0»:content" aria-expanded="false" aria-haspopup="listbox" data-state="closed" aria-labelledby="select:«r0»:label" data-scope="select" data-part="trigger" data-placeholder-shown="" class="flex h-10 w-full items-center justify-between rounded-lg bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 outline-none peer"><span data-scope="select" data-part="value-text" dir="ltr">Select a Framework</span><div data-scope="select" data-part="indicator" dir="ltr" aria-hidden="true" data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></button></div><div class="absolute left-[9px] top-px text-sm text-gray-500 dark:text-gray-400 group-focus-within:text-gray-900 dark:group-focus-within:text-gray-100 transition-all duration-300 px-1 transform -translate-y-1/2 pointer-events-none">Select with overlapping label</div><fieldset data-scope="fieldset" data-part="root" aria-labelledby="fieldset::«r1»::legend" class="inset-0 absolute border border-gray-300 dark:border-gray-600 rounded-lg pointer-events-none mt-[-9px] visible group-focus-within:border-gray-700 dark:group-focus-within:border-gray-100 group-focus-within:border-2"><div id="fieldset::«r1»::legend" data-scope="fieldset" data-part="legend" class="ml-2 text-sm invisible px-1 max-w-full whitespace-nowrap">Select with overlapping label</div></fieldset><select aria-hidden="true" id="select:«r0»:select" tabindex="-1" aria-labelledby="select:«r0»:label" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; overflow-wrap: normal;"><option value=""></option><option value="React">React</option><option value="Solid">Solid</option><option value="Vue">Vue</option><option value="Svelte">Svelte</option></select></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
