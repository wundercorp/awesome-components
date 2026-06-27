# Build Search Tool in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Search Tool screenshot](screenshot.png)

## Component

- Author group: `community`
- Component: `search-tool`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: BuilderStudio
- Component slug: search-tool
- Demo slug: default
- Title: search-tool
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
<div id="root"><div class="flex items-center justify-center w-full min-h-screen bg-background p-8 overflow-hidden"><div class="w-full max-w-md"><div class="flex flex-col gap-2 w-full"><button type="button" aria-expanded="true" class="group flex items-center max-w-full select-none gap-1 bg-transparent border-0 p-0 m-0 text-left cursor-pointer"><div class="flex items-center gap-2 min-w-0 text-sm text-neutral-500 dark:text-neutral-400"><span class="font-[450] whitespace-nowrap shrink-0">Found 3 results</span></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-chevron-right shrink-0 text-neutral-500 dark:text-neutral-400 transition-transform duration-150 ease-out size-3 rotate-90"><path d="M9 6l6 6l-6 6"></path></svg></button><div class="rounded-[10px] overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"><div class="flex items-center px-2.5 py-0 border-b border-neutral-200 dark:border-neutral-800 h-7 text-xs gap-1"><span class="text-neutral-900 dark:text-neutral-100 font-medium">Searched for</span> <span class="text-neutral-500 dark:text-neutral-400 truncate">“best flights to Tokyo”</span></div><div class="max-h-[200px] overflow-y-auto bg-white dark:bg-neutral-950"><div class="flex flex-col gap-1 p-1"><div class="flex items-center gap-2 px-2 py-1 rounded-[6px] cursor-default hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50"><div class="flex items-center justify-center w-4 h-4 shrink-0 text-neutral-500 dark:text-neutral-400"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-file-text w-4 h-4"><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path><path d="M9 9l1 0"></path><path d="M9 13l6 0"></path><path d="M9 17l6 0"></path></svg></div><span class="text-sm text-neutral-900 dark:text-neutral-100 truncate flex-1 min-w-0">United UA837 SFO→NRT · $1,105 economy</span><span class="text-xs text-neutral-500 dark:text-neutral-400 shrink-0 whitespace-nowrap">google.com/flights</span></div><div class="flex items-center gap-2 px-2 py-1 rounded-[6px] cursor-default hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50"><div class="flex items-center justify-center w-4 h-4 shrink-0 text-neutral-500 dark:text-neutral-400"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-file-text w-4 h-4"><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path><path d="M9 9l1 0"></path><path d="M9 13l6 0"></path><path d="M9 17l6 0"></path></svg></div><span class="text-sm text-neutral-900 dark:text-neutral-100 truncate flex-1 min-w-0">SFO–Tokyo · 14 results from $1,089</span><span class="text-xs text-neutral-500 dark:text-neutral-400 shrink-0 whitespace-nowrap">expedia.com</span></div><div class="flex items-center gap-2 px-2 py-1 rounded-[6px] cursor-default hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50"><div class="flex items-center justify-center w-4 h-4 shrink-0 text-neutral-500 dark:text-neutral-400"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-file-text w-4 h-4"><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path><path d="M9 9l1 0"></path><path d="M9 13l6 0"></path><path d="M9 17l6 0"></path></svg></div><span class="text-sm text-neutral-900 dark:text-neutral-100 truncate flex-1 min-w-0">ANA NH7 Direct SFO→NRT · $1,240 rt</span><span class="text-xs text-neutral-500 dark:text-neutral-400 shrink-0 whitespace-nowrap">google.com/flights</span></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
