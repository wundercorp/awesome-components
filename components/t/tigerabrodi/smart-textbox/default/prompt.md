# Build Smart Textbox in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Smart Textbox screenshot](screenshot.png)

## Component

- Author group: `tigerabrodi`
- Component: `smart-textbox`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: tigerabrodi
- Component slug: smart-textbox
- Demo slug: default
- Title: smart-textbox
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col items-center justify-center min-h-[400px] gap-6 p-8 w-full max-w-xl mx-auto"><div class="w-full space-y-3"><label class="text-sm font-medium text-neutral-400">Try typing @ to mention a file, then keep typing for autocomplete</label><div class="w-full"><div style="position: relative; overflow: hidden;"><div contenteditable="true" role="textbox" class="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2.5 text-sm text-neutral-100 outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-colors" style="outline: none; white-space: nowrap; overflow-x: auto;"></div><div aria-hidden="true" class="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2.5 text-sm text-neutral-100 outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-colors" style="position: absolute; inset: 0px; pointer-events: none; opacity: 0.5; outline: none; white-space: nowrap; overflow-x: auto;">Type @ to mention, or start typing...</div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
