# Build Modal in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Modal screenshot](screenshot.png)

## Component

- Author group: `shugar`
- Component: `modal`
- Variant: `sticky`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: shugar
- Component slug: modal
- Demo slug: sticky
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div><button type="submit" tabindex="0" class="flex justify-center items-center gap-0.5 duration-150 px-1.5 h-8 text-sm bg-gray-1000 hover:bg-gray-1000-h text-background-100 fill-background-100 rounded-md focus:shadow-focus-ring focus:outline-0"><span class="relative overflow-hidden whitespace-nowrap overflow-ellipsis font-sans px-1.5">Open Modal</span></button><div class="fixed inset-0 flex items-center justify-center z-[99999] duration-300 bg-transparent pointer-events-none"><div class="bg-background-100 rounded-xl shadow-modal flex flex-col font-sans text-gray-1000 w-[540px] max-h-[min(800px,_80vh)] overflow-y-auto duration-300 opacity-0 scale-95 pointer-events-none"><div class="overflow-y-auto text-sm px-6 pb-6"><header class="mb-6 rounded-t-xl sticky top-0 bg-background-200 border-b border-gray-alpha-400 pt-5 px-6 -mx-6"><h2 class="mb-6 text-2xl font-semibold tracking-[-0.029375rem]">Create Token</h2></header><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div><div class="font-sans text-sm text-[#171717] dark:text-[#ededed]">Some content contained within the modal.</div></div><footer class="sticky bottom-0 p-4 flex justify-between shrink-0 bg-background-200 inset-0 border-t border-gray-alpha-400 rounded-b-xl"><div class="flex gap-4"><button type="submit" tabindex="0" class="flex justify-center items-center gap-0.5 duration-150 px-2.5 h-10 text-sm bg-background-100 hover:bg-gray-alpha-200 text-gray-1000 fill-gray-1000 border border-gray-alpha-400 rounded-md focus:shadow-focus-ring focus:outline-0"><span class="relative overflow-hidden whitespace-nowrap overflow-ellipsis font-sans px-1.5">Cancel</span></button><button type="submit" tabindex="0" class="flex justify-center items-center gap-0.5 duration-150 px-2.5 h-10 text-sm bg-background-100 hover:bg-gray-alpha-200 text-gray-1000 fill-gray-1000 border border-gray-alpha-400 rounded-md focus:shadow-focus-ring focus:outline-0"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.46966 13.7803L6.99999 14.3107L8.06065 13.25L7.53032 12.7197L3.56065 8.75001H14.25H15V7.25001H14.25H3.56065L7.53032 3.28034L8.06065 2.75001L6.99999 1.68935L6.46966 2.21968L1.39644 7.2929C1.00592 7.68342 1.00592 8.31659 1.39644 8.70711L6.46966 13.7803Z"></path></svg><span class="relative overflow-hidden whitespace-nowrap overflow-ellipsis font-sans px-1.5">Previous</span></button></div><button type="submit" tabindex="0" class="flex justify-center items-center gap-0.5 duration-150 px-2.5 h-10 text-sm bg-gray-1000 hover:bg-gray-1000-h text-background-100 fill-background-100 rounded-md focus:shadow-focus-ring focus:outline-0"><span class="relative overflow-hidden whitespace-nowrap overflow-ellipsis font-sans px-1.5">Submit</span></button></footer></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
