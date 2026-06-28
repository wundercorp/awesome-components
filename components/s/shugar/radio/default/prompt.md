# Build Radio in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Radio screenshot](screenshot.png)

## Component

- Author group: `shugar`
- Component: `radio`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: shugar
- Component slug: radio
- Demo slug: default
- Title: radio
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><span class="sr-only">Default Radio Example</span><div class="flex flex-col gap-6"><label class="flex items-center gap-2 cursor-pointer font-sans text-[13px] text-gray-1000 leading-3 group"><input class="absolute w-4 h-4 opacity-0" type="radio" value="one" checked="" name="radio-group"><span class="w-4 h-4 bg-background-100 relative border rounded-full duration-200 after:duration-200 flex items-center justify-center after:absolute after:top-1/2 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:rounded-full after:bg-gray-1000 border-gray-1000 after:w-2 after:h-2" aria-hidden="true"></span>Option 1</label><label class="flex items-center gap-2 cursor-pointer font-sans text-[13px] text-gray-1000 leading-3 group"><input class="absolute w-4 h-4 opacity-0" type="radio" value="two" name="radio-group"><span class="w-4 h-4 bg-background-100 relative border rounded-full duration-200 after:duration-200 flex items-center justify-center after:absolute after:top-1/2 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:rounded-full after:bg-gray-1000 border-gray-700 after:w-0 after:h-0 group-hover:bg-gray-200 group-hover:border-gray-900" aria-hidden="true"></span>Option 2</label></div></div></div></div>
```

## Reference source files

No reference source files were available.
