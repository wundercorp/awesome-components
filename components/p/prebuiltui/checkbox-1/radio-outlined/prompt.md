# Build Checkbox 1 in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Checkbox 1 screenshot](screenshot.png)

## Component

- Author group: `prebuiltui`
- Component: `checkbox-1`
- Variant: `radio-outlined`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: prebuiltui
- Component slug: checkbox-1
- Demo slug: radio-outlined
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-wrap items-center justify-center gap-6 md:gap-14"><label class="flex gap-3 items-center cursor-pointer"><input class="hidden peer" type="checkbox"><span class="w-5 h-5 border border-blue-600 rounded-full relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-blue-600 peer-checked:border-blue-600 peer-checked:after:rounded-full peer-checked:after:absolute"></span><span class="text-gray-700 select-none">Enable Feature</span></label><label class="flex gap-3 items-center cursor-pointer"><input class="hidden peer" type="checkbox" checked=""><span class="w-5 h-5 border border-blue-600 rounded-full relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-blue-600 peer-checked:border-blue-600 peer-checked:after:rounded-full peer-checked:after:absolute"></span><span class="text-gray-700 select-none">Feature Enabled</span></label></div></div></div></div>
```

## Reference source files

No reference source files were available.
