# Build Toggle 1 in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Toggle 1 screenshot](screenshot.png)

## Component

- Author group: `shugar`
- Component: `toggle-1`
- Variant: `custom-color`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: shugar
- Component slug: toggle-1
- Demo slug: custom-color
- Title: toggle-1
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col gap-2 w-3/4"><label class="relative inline-flex gap-2 items-center py-[3px] text-xs text-geist-secondary select-none" aria-label="Enable Firewall"><input class="absolute w-0 h-0 appearance-none" type="checkbox" checked=""><span class="rounded-[14px] inline-block relative duration-150 h-3.5 w-7 bg-gray-100&quot; fill-amber-1000 dark:fill-amber-100 border border-gray-alpha-400 cursor-pointer"><div class="rounded-[50%] border border-transparent absolute top-1/2 -translate-y-1/2 shadow-toggle duration-150 flex items-center justify-center h-3 w-3 left-3.5 bg-background-100 dark:bg-gray-1000"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 6V7H6.5V6C6.5 5.17157 7.17157 4.5 8 4.5C8.82843 4.5 9.5 5.17157 9.5 6ZM5 7V6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6V7H12V11.5C12 12.3284 11.3284 13 10.5 13H5.5C4.67157 13 4 12.3284 4 11.5V7H5Z"></path></svg></div></span></label><label class="relative inline-flex gap-2 items-center py-[3px] text-xs text-geist-secondary select-none" aria-label="Enable Firewall"><input class="absolute w-0 h-0 appearance-none" type="checkbox" checked=""><span class="rounded-[14px] inline-block relative duration-150 h-3.5 w-7 bg-gray-100&quot; fill-red-1000 dark:fill-red-100 border border-gray-alpha-400 cursor-pointer"><div class="rounded-[50%] border border-transparent absolute top-1/2 -translate-y-1/2 shadow-toggle duration-150 flex items-center justify-center h-3 w-3 left-3.5 bg-background-100 dark:bg-gray-1000"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 6V7H6.5V6C6.5 5.17157 7.17157 4.5 8 4.5C8.82843 4.5 9.5 5.17157 9.5 6ZM5 7V6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6V7H12V11.5C12 12.3284 11.3284 13 10.5 13H5.5C4.67157 13 4 12.3284 4 11.5V7H5Z"></path></svg></div></span></label><label class="relative inline-flex gap-2 items-center py-[3px] text-xs text-geist-secondary select-none" aria-label="Enable Firewall"><input class="absolute w-0 h-0 appearance-none" type="checkbox" checked=""><span class="rounded-[14px] inline-block relative duration-150 h-6 w-10 bg-gray-100&quot; fill-amber-1000 dark:fill-amber-100 border border-gray-alpha-400 cursor-pointer"><div class="rounded-[50%] border border-transparent absolute top-1/2 -translate-y-1/2 shadow-toggle duration-150 flex items-center justify-center h-[22px] w-[22px] left-4 bg-background-100 dark:bg-gray-1000"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 6V7H6.5V6C6.5 5.17157 7.17157 4.5 8 4.5C8.82843 4.5 9.5 5.17157 9.5 6ZM5 7V6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6V7H12V11.5C12 12.3284 11.3284 13 10.5 13H5.5C4.67157 13 4 12.3284 4 11.5V7H5Z"></path></svg></div></span></label><label class="relative inline-flex gap-2 items-center py-[3px] text-xs text-geist-secondary select-none" aria-label="Enable Firewall"><input class="absolute w-0 h-0 appearance-none" type="checkbox" checked=""><span class="rounded-[14px] inline-block relative duration-150 h-6 w-10 bg-gray-100&quot; fill-red-1000 dark:fill-red-100 border border-gray-alpha-400 cursor-pointer"><div class="rounded-[50%] border border-transparent absolute top-1/2 -translate-y-1/2 shadow-toggle duration-150 flex items-center justify-center h-[22px] w-[22px] left-4 bg-background-100 dark:bg-gray-1000"><svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 6V7H6.5V6C6.5 5.17157 7.17157 4.5 8 4.5C8.82843 4.5 9.5 5.17157 9.5 6ZM5 7V6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6V7H12V11.5C12 12.3284 11.3284 13 10.5 13H5.5C4.67157 13 4 12.3284 4 11.5V7H5Z"></path></svg></div></span></label></div></div></div></div>
```

## Reference source files

No reference source files were available.
