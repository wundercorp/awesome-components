# Build Theme Toggle in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Theme Toggle screenshot](screenshot.png)

## Component

- Author group: `edwinvakayil`
- Component: `theme-toggle`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: edwinvakayil
- Component slug: theme-toggle
- Demo slug: default
- Title: theme-toggle
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col items-center justify-center gap-4"><p class="text-center text-muted-foreground text-sm">Click the toggle to switch between light and dark mode.</p><button aria-label="Toggle theme" class="relative cursor-pointer rounded-full border-2 transition-colors duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] h-8 w-14 border-[#e8d5b7] bg-[#fef3c7]" type="button"><div class="absolute top-1/2 grid -translate-y-1/2 place-items-center rounded-full transition-[left,background-color] duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] h-6 w-6 left-0.5 bg-[#ff9500] text-white"><svg aria-hidden="true" class="block shrink-0 col-start-1 row-start-1 origin-center transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] rotate-0 scale-100 opacity-100" fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="currentColor" r="3.25"></circle><g stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M12 2.5v2.5"></path><path d="M12 19v2.5"></path><path d="M4.22 4.22l1.77 1.77"></path><path d="M18.01 18.01l1.77 1.77"></path><path d="M2.5 12h2.5"></path><path d="M19 12h2.5"></path><path d="M4.22 19.78l1.77-1.77"></path><path d="M18.01 5.99l1.77-1.77"></path></g></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon col-start-1 row-start-1 block shrink-0 origin-center transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] -rotate-90 scale-50 opacity-0" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg></div></button></div></div></div></div>
```

## Reference source files

No reference source files were available.
