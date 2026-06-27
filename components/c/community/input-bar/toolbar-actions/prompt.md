# Build Input Bar in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Input Bar screenshot](screenshot.png)

## Component

- Author group: `community`
- Component: `input-bar`
- Variant: `toolbar-actions`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: BuilderStudio
- Component slug: input-bar
- Demo slug: toolbar-actions
- Title: input-bar
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
<div id="root"><div class="min-h-screen w-full flex items-center justify-center p-6 bg-white dark:bg-neutral-950"><div class="w-full max-w-md"><div class="shrink-0 px-3 pb-3 w-full"><div class="mx-auto max-w-[420px]"><div class="relative cursor-text rounded-[16px] bg-white dark:bg-neutral-900 shadow-sm ring-1 ring-neutral-200 dark:ring-neutral-800"><div class="grid transition-[grid-template-rows] duration-200 ease-out grid-rows-[0fr]"><div class="overflow-hidden"></div></div><div class="pt-3 pb-0 pr-3 pl-3.5 min-h-[44px]"><textarea placeholder="Send a message..." rows="1" class="w-full resize-none bg-transparent border-0 outline-none text-[14px] leading-[1.6] text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 overflow-hidden" style="height: 22px; overflow-y: hidden;"></textarea></div><div class="flex items-center justify-between gap-3 px-2 pt-1 pb-2"><div class="flex items-center gap-1 min-w-0"><button type="button" aria-label="Select mode" class="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path></svg><span>Agent</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-60"><polyline points="6 9 12 15 18 9"></polyline></svg></button><button type="button" aria-label="Select model" class="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"><span>Sonnet</span><span class="text-neutral-400 dark:text-neutral-500">4.6</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-60"><polyline points="6 9 12 15 18 9"></polyline></svg></button></div><div class="flex items-center gap-1"><button type="button" aria-label="Send" class="inline-flex items-center justify-center w-8 h-8 rounded-full transition-all duration-150 bg-neutral-200 text-neutral-400 dark:bg-neutral-800 dark:text-neutral-600"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[14px] h-[14px]"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg></button></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
