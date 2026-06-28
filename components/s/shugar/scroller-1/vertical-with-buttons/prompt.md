# Build Scroller 1 in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Scroller 1 screenshot](screenshot.png)

## Component

- Author group: `shugar`
- Component: `scroller-1`
- Variant: `vertical-with-buttons`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: shugar
- Component slug: scroller-1
- Demo slug: vertical-with-buttons
- Title: scroller-1
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center"><div class="relative overflow-hidden flex flex-col gap-2" style="width: 100%; height: 220px;"><div class="flex justify-center gap-2 m-[1px] z-10"><button type="submit" tabindex="0" class="flex justify-center items-center gap-0.5 duration-150 w-8 h-8 text-sm bg-background-100 hover:bg-gray-alpha-200 text-gray-1000 fill-gray-1000 border border-gray-alpha-400 rounded-[100px] focus:shadow-focus-ring focus:outline-0" aria-label="scroll top"><span class="relative overflow-hidden whitespace-nowrap overflow-ellipsis font-sans px-1.5"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.93935 10.5L2.46968 9.96966L7.2929 5.14644C7.68342 4.75592 8.31659 4.75592 8.70711 5.14644L13.5303 9.96966L14.0607 10.5L13 11.5607L12.4697 11.0303L8 6.56065L3.53034 11.0303L3.00001 11.5607L1.93935 10.5Z"></path></svg></span></button><button type="submit" tabindex="0" class="flex justify-center items-center gap-0.5 duration-150 w-8 h-8 text-sm bg-background-100 hover:bg-gray-alpha-200 text-gray-1000 fill-gray-1000 border border-gray-alpha-400 rounded-[100px] focus:shadow-focus-ring focus:outline-0" aria-label="scroll bottom"><span class="relative overflow-hidden whitespace-nowrap overflow-ellipsis font-sans px-1.5"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0607 5.49999L13.5303 6.03032L8.7071 10.8535C8.31658 11.2441 7.68341 11.2441 7.29289 10.8535L2.46966 6.03032L1.93933 5.49999L2.99999 4.43933L3.53032 4.96966L7.99999 9.43933L12.4697 4.96966L13 4.43933L14.0607 5.49999Z"></path></svg></span></button></div><div class="flex relative hide-scrollbar overflow-auto flex-col gap-4"><div><div class="bg-[#171717] dark:bg-[#ededed] dark:text-[#171717] text-[#ededed] h-60 w-96"></div></div><div><div class="bg-[#171717] dark:bg-[#ededed] dark:text-[#171717] text-[#ededed] h-60 w-96"></div></div><div><div class="bg-[#171717] dark:bg-[#ededed] dark:text-[#171717] text-[#ededed] h-60 w-96"></div></div><div><div class="bg-[#171717] dark:bg-[#ededed] dark:text-[#171717] text-[#ededed] h-60 w-96"></div></div></div><div class="absolute left-0 right-0 w-full h-10 bg-gradient-to-b from-white dark:from-black/75 to-white/0 duration-300 -top-10"></div><div class="absolute left-0 right-0 w-full h-10 bg-gradient-to-t from-white dark:from-black/75 to-white/0 duration-300 bottom-0"></div><div class="absolute top-0 bottom-0 w-10 h-full bg-gradient-to-r from-white dark:from-black/75 to-white/0 duration-300 -left-10"></div><div class="absolute top-0 bottom-0 w-10 h-full bg-gradient-to-l from-white dark:from-black/75 to-white/0 duration-300 -right-10"></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
