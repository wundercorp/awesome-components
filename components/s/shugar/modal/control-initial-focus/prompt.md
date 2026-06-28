# Build Modal in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Modal screenshot](screenshot.png)

## Component

- Author group: `shugar`
- Component: `modal`
- Variant: `control-initial-focus`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: shugar
- Component slug: modal
- Demo slug: control-initial-focus
- Title: modal
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div><button type="submit" tabindex="0" class="flex justify-center items-center gap-0.5 duration-150 px-1.5 h-8 text-sm bg-gray-1000 hover:bg-gray-1000-h text-background-100 fill-background-100 rounded-md focus:shadow-focus-ring focus:outline-0"><span class="relative overflow-hidden whitespace-nowrap overflow-ellipsis font-sans px-1.5">Open Modal</span></button><div class="fixed inset-0 flex items-center justify-center z-[99999] duration-300 bg-transparent pointer-events-none"><div class="bg-background-100 rounded-xl shadow-modal flex flex-col font-sans text-gray-1000 w-[540px] max-h-[min(800px,_80vh)] overflow-y-auto duration-300 opacity-0 scale-95 pointer-events-none"><div class="overflow-y-auto text-sm p-6"><header class="mb-6 rounded-t-xl"><h2 class="mb-6 text-2xl font-semibold tracking-[-0.029375rem]">Initial Focus</h2><p class="text-base">This Modal.Modal is set up to programmatically move the focus onto the Submit button, making it possible to promptly continue with the Enter key.</p></header></div><footer class="sticky bottom-0 p-4 flex justify-between shrink-0 bg-background-200 inset-0 border-t border-gray-alpha-400 rounded-b-xl"><button type="submit" tabindex="0" class="flex justify-center items-center gap-0.5 duration-150 px-2.5 h-10 text-sm bg-background-100 hover:bg-gray-alpha-200 text-gray-1000 fill-gray-1000 border border-gray-alpha-400 rounded-md focus:shadow-focus-ring focus:outline-0"><span class="relative overflow-hidden whitespace-nowrap overflow-ellipsis font-sans px-1.5">Cancel</span></button><button type="submit" tabindex="0" class="flex justify-center items-center gap-0.5 duration-150 px-2.5 h-10 text-sm bg-gray-1000 hover:bg-gray-1000-h text-background-100 fill-background-100 rounded-md focus:shadow-focus-ring focus:outline-0"><span class="relative overflow-hidden whitespace-nowrap overflow-ellipsis font-sans px-1.5">Submit</span></button></footer></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
