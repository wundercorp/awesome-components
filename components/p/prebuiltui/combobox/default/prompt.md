# Build Combobox in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Combobox screenshot](screenshot.png)

## Component

- Author group: `prebuiltui`
- Component: `combobox`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: prebuiltui
- Component slug: combobox
- Demo slug: default
- Title: combobox
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative flex flex-col gap-1 text-sm leading-5 font-medium text-gray-900"><label for="«r0»">Choose a fruit</label><input placeholder="e.g. Apple" id="«r0»" class="h-10 w-64 rounded-md font-normal border border-gray-200 pl-3.5 text-base text-gray-900 bg-[canvas] focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800" type="text" value="" autocomplete="off" spellcheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list"><div class="absolute right-2 bottom-0 flex h-10 items-center justify-center text-gray-600"><button type="button" tabindex="-1" aria-expanded="false" aria-haspopup="listbox" aria-label="Open popup" class="flex h-10 w-6 items-center justify-center rounded bg-transparent p-0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M6 9l6 6 6-6"></path></svg></button></div></div><input id="base-ui-«r1»" tabindex="-1" aria-hidden="true" value="" style="clip: rect(0px, 0px, 0px, 0px); overflow: hidden; white-space: nowrap; position: fixed; top: 0px; left: 0px; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px;"></div></div></div>
```

## Reference source files

No reference source files were available.
