# Build Combobox in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Combobox screenshot](screenshot.png)

## Component

- Author group: `prebuiltui`
- Component: `combobox`
- Variant: `input-inside-popup-combobox`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: prebuiltui
- Component slug: combobox
- Demo slug: input-inside-popup-combobox
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><button type="button" tabindex="0" aria-expanded="false" aria-haspopup="dialog" class="flex bg-[canvas] h-10 min-w-[12rem] items-center justify-between gap-3 rounded-md border border-gray-200 pr-3 pl-3.5 text-base text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 data-[popup-open]:bg-gray-100 cursor-default">Select country<span aria-hidden="true" class="flex"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" stroke="currentcolor" stroke-width="1.5"><path d="M0.5 4.5L4 1.5L7.5 4.5"></path><path d="M0.5 7.5L4 10.5L7.5 7.5"></path></svg></span></button><input id="base-ui-«r0»" tabindex="-1" aria-hidden="true" value="" style="clip: rect(0px, 0px, 0px, 0px); overflow: hidden; white-space: nowrap; position: fixed; top: 0px; left: 0px; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px;"></div></div></div>
```

## Reference source files

No reference source files were available.
