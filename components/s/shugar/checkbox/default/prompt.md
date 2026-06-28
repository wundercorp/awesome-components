# Build Checkbox in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Checkbox screenshot](screenshot.png)

## Component

- Author group: `shugar`
- Component: `checkbox`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: shugar
- Component slug: checkbox
- Demo slug: default
- Title: checkbox
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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="absolute z-10 top-4 right-14 flex flex-col items-end gap-1"><button type="button" role="combobox" aria-controls="radix-:r0:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" class="flex w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 gap-2 h-8"><span style="pointer-events: none;">Demo</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></div><div class="flex w-full justify-center relative"><div class="flex flex-col gap-8"><div class="flex flex-col gap-2"><div class="font-bold text-xl dark:text-white">Default</div><div class="flex items-center cursor-pointer text-[13px] font-sans group text-gray-1000"><input class="absolute w-[1px] h-[1px] p-0 overflow-hidden whitespace-nowrap border-none" type="checkbox"><span class="relative border w-4 h-4 duration-200 rounded inline-flex items-center justify-center bg-background-100 border-gray-700 group-hover:bg-gray-200 fill-background-100 stroke-background-100 group-hover:stroke-gray-200 group-hover:fill-gray-200"><svg class="shrink-0" height="16" viewBox="0 0 20 20" width="16"><path d="M14 7L8.5 12.5L6 10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></span><span class="ml-2">Option 1</span></div></div><div class="flex flex-col gap-2"><div class="font-bold text-xl dark:text-white">Disabled</div><div class="flex items-center cursor-pointer text-[13px] font-sans group text-gray-500"><input disabled="" class="absolute w-[1px] h-[1px] p-0 overflow-hidden whitespace-nowrap border-none" type="checkbox"><span class="relative border w-4 h-4 duration-200 rounded inline-flex items-center justify-center bg-gray-100 border-gray-500 fill-gray-100 stroke-gray-100"><svg class="shrink-0" height="16" viewBox="0 0 20 20" width="16"><path d="M14 7L8.5 12.5L6 10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></span><span class="ml-2">Disabled</span></div><div class="flex items-center cursor-pointer text-[13px] font-sans group text-gray-500"><input disabled="" class="absolute w-[1px] h-[1px] p-0 overflow-hidden whitespace-nowrap border-none" type="checkbox" checked=""><span class="relative border w-4 h-4 duration-200 rounded inline-flex items-center justify-center bg-gray-600 border-gray-600 fill-gray-600 stroke-gray-100"><svg class="shrink-0" height="16" viewBox="0 0 20 20" width="16"><path d="M14 7L8.5 12.5L6 10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></span><span class="ml-2">Disabled Checked</span></div><div class="flex items-center cursor-pointer text-[13px] font-sans group text-gray-500"><input disabled="" class="absolute w-[1px] h-[1px] p-0 overflow-hidden whitespace-nowrap border-none" type="checkbox"><span class="relative border w-4 h-4 duration-200 rounded inline-flex items-center justify-center bg-gray-100 border-gray-500 stroke-gray-500"><svg class="shrink-0" height="16" viewBox="0 0 20 20" width="16"><line stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5" x2="15" y1="10" y2="10"></line></svg></span><span class="ml-2">Disabled Indeterminate</span></div></div><div class="flex flex-col gap-2"><div class="font-bold text-xl dark:text-white">Indeterminate</div><div class="flex items-center cursor-pointer text-[13px] font-sans group text-gray-1000"><input class="absolute w-[1px] h-[1px] p-0 overflow-hidden whitespace-nowrap border-none" type="checkbox"><span class="relative border w-4 h-4 duration-200 rounded inline-flex items-center justify-center bg-background-100 border-gray-700 group-hover:bg-gray-200 stroke-gray-700"><svg class="shrink-0" height="16" viewBox="0 0 20 20" width="16"><line stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5" x2="15" y1="10" y2="10"></line></svg></span><span class="ml-2">Option 1</span></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
