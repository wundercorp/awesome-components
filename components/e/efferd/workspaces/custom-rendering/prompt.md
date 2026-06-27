# Build Workspaces in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Workspaces screenshot](screenshot.png)

## Component

- Author group: `efferd`
- Component: `workspaces`
- Variant: `custom-rendering`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: efferd
- Component slug: workspaces
- Demo slug: custom-rendering
- Title: workspaces
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-screen items-start justify-center gap-8 px-4 py-18"><button data-state="closed" class="border-input bg-background ring-offset-background flex h-12 w-full max-w-72 items-center justify-between rounded-md px-3 py-2 text-sm placeholder:text-muted-foreground focus:ring-ring focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 hover:bg-accent hover:text-accent-foreground min-w-72 border-2 border-dashed" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-«r0»"><div class="flex min-w-0 flex-1 items-center gap-2"><span class="relative flex shrink-0 overflow-hidden rounded-full h-6 w-6"><img class="aspect-square h-full w-full" alt="Asme Inc." src="https://avatar.vercel.sh/asme"></span><span class="truncate">Asme Inc.</span></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-up-down h-4 w-4 shrink-0 opacity-50" aria-hidden="true"><path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path></svg></button></div></div></div></div>
```

## Reference source files

No reference source files were available.
