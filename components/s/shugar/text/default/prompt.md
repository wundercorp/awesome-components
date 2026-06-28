# Build Text in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Text screenshot](screenshot.png)

## Component

- Author group: `shugar`
- Component: `text`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: shugar
- Component slug: text
- Demo slug: default
- Title: text
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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="absolute z-10 top-4 right-14 flex flex-col items-end gap-1"><button type="button" role="combobox" aria-controls="radix-«r0»" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" class="flex w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 gap-2 h-8"><span style="pointer-events: none;">Sizes</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></div><div class="flex w-full justify-center relative"><div class="flex flex-col gap-2"><div class="font-bold text-xl dark:text-white">Sizes</div><p class="font-sans font-bold leading-[3.5rem]" style="color: var(--ds-gray-1000); font-size: 48px;">The Evil Rabbit jumps.</p><p class="font-sans font-semibold leading-10" style="color: var(--ds-gray-1000); font-size: 32px;">The Evil Rabbit jumps.</p><p class="font-sans font-semibold leading-8" style="color: var(--ds-gray-1000); font-size: 24px;">The Evil Rabbit jumps.</p><p class="font-sans font-semibold leading-6" style="color: var(--ds-gray-1000); font-size: 20px;">The Evil Rabbit jumps.</p><p class="font-sans leading-6" style="color: var(--ds-gray-1000); font-size: 16px;">The Evil Rabbit jumps.</p><p class="font-sans leading-5" style="color: var(--ds-gray-1000); font-size: 14px;">The Evil Rabbit jumps.</p><p class="font-sans leading-4" style="color: var(--ds-gray-1000); font-size: 12px;">The Evil Rabbit jumps.</p><p class="font-sans leading-3" style="color: var(--ds-gray-1000); font-size: 10px;">The Evil Rabbit jumps.</p></div></div></div></div>
```

## Reference source files

No reference source files were available.
