# Build Toggle Basic in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Toggle Basic screenshot](screenshot.png)

## Component

- Author group: `anubra266`
- Component: `toggle-basic`
- Variant: `toggle-disabled`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: anubra266
- Component slug: toggle-basic
- Demo slug: toggle-disabled
- Title: toggle-basic
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center space-y-8"><div class="flex flex-col items-center gap-2"><label class="text-xs font-medium text-gray-600 dark:text-gray-400">Disabled (Off)</label><button type="button" data-scope="toggle" data-part="root" disabled="" aria-pressed="false" data-state="off" data-disabled="" class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed opacity-50 text-sm font-medium"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bold w-4 h-4" aria-hidden="true"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"></path></svg>Bold</button></div><div class="flex flex-col items-center gap-2"><label class="text-xs font-medium text-gray-600 dark:text-gray-400">Disabled (On)</label><button type="button" data-scope="toggle" data-part="root" disabled="" aria-pressed="true" data-state="on" data-pressed="" data-disabled="" class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-blue-300 dark:border-blue-600 bg-blue-100 dark:bg-blue-900/30 text-blue-400 dark:text-blue-400 cursor-not-allowed opacity-50 text-sm font-medium"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-italic w-4 h-4" aria-hidden="true"><line x1="19" x2="10" y1="4" y2="4"></line><line x1="14" x2="5" y1="20" y2="20"></line><line x1="15" x2="9" y1="4" y2="20"></line></svg>Italic</button></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
