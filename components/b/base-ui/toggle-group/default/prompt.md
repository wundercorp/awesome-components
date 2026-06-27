# Build Toggle Group in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Toggle Group screenshot](screenshot.png)

## Component

- Author group: `base-ui`
- Component: `toggle-group`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: base-ui
- Component slug: toggle-group
- Demo slug: default
- Title: toggle-group
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div data-orientation="horizontal" role="group" class="flex gap-px rounded-md border border-gray-200 bg-gray-50 p-0.5"><button type="button" data-pressed="" aria-disabled="false" aria-pressed="true" aria-label="Align left" class="flex size-8 items-center justify-center rounded-sm text-gray-600 select-none hover:bg-gray-100 focus-visible:bg-none focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-200 data-[pressed]:bg-gray-100 data-[pressed]:text-gray-900" tabindex="0"><svg width="16" height="16" viewBox="0 0 16 16" stroke="currentcolor" stroke-linecap="round" class="size-4"><path d="M2.5 3.5H13.5"></path><path d="M2.5 9.5H13.5"></path><path d="M2.5 6.5H10.5"></path><path d="M2.5 12.5H10.5"></path></svg></button><button type="button" aria-disabled="false" aria-pressed="false" aria-label="Align center" class="flex size-8 items-center justify-center rounded-sm text-gray-600 select-none hover:bg-gray-100 focus-visible:bg-none focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-200 data-[pressed]:bg-gray-100 data-[pressed]:text-gray-900" tabindex="-1"><svg width="16" height="16" viewBox="0 0 16 16" stroke="currentcolor" stroke-linecap="round" class="size-4"><path d="M3 3.5H14"></path><path d="M3 9.5H14"></path><path d="M4.5 6.5H12.5"></path><path d="M4.5 12.5H12.5"></path></svg></button><button type="button" aria-disabled="false" aria-pressed="false" aria-label="Align right" class="flex size-8 items-center justify-center rounded-sm text-gray-600 select-none hover:bg-gray-100 focus-visible:bg-none focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-200 data-[pressed]:bg-gray-100 data-[pressed]:text-gray-900" tabindex="-1"><svg width="16" height="16" viewBox="0 0 16 16" stroke="currentcolor" stroke-linecap="round" class="size-4"><path d="M2.5 3.5H13.5"></path><path d="M2.5 9.5H13.5"></path><path d="M5.5 6.5H13.5"></path><path d="M5.5 12.5H13.5"></path></svg></button></div></div></div></div>
```

## Reference source files

No reference source files were available.
