# Build Field Components in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Field Components screenshot](screenshot.png)

## Component

- Author group: `anubra266`
- Component: `field-components`
- Variant: `label-animation-input`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: anubra266
- Component slug: field-components
- Demo slug: label-animation-input
- Title: field-components
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"><div data-scope="field" data-part="root" id="field::«r0»" role="group" class="relative max-w-sm w-full group"><input id="«r0»" data-scope="field" data-part="input" placeholder=" " class="block w-full rounded-lg bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 outline-none peer"><label data-scope="field" data-part="label" id="field::«r0»::label" for="«r0»" class="absolute left-[9px] top-px text-sm text-gray-500 dark:text-gray-400 transition-all duration-300 px-1 transform -translate-y-1/2 pointer-events-none peer-placeholder-shown:top-1/2 group-focus-within:top-px! group-focus-within:text-gray-900 dark:group-focus-within:text-gray-100">Animated label</label><fieldset data-scope="fieldset" data-part="root" aria-labelledby="fieldset::«r1»::legend" class="inset-0 absolute border border-gray-300 dark:border-gray-600 rounded-lg pointer-events-none mt-[-9px] invisible peer-placeholder-shown:visible group-focus-within:border-gray-700 dark:group-focus-within:border-gray-100 group-focus-within:border-2"><div id="fieldset::«r1»::legend" data-scope="fieldset" data-part="legend" class="ml-2 px-0 text-sm transition-all duration-300 invisible max-w-[0.01px] group-focus-within:max-w-full group-focus-within:px-1 whitespace-nowrap">Animated label</div></fieldset></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
