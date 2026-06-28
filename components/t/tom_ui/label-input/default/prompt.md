# Build Label Input in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Label Input screenshot](screenshot.png)

## Component

- Author group: `tom_ui`
- Component: `label-input`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: tom_ui
- Component slug: label-input
- Demo slug: default
- Title: label-input
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col items-center justify-center min-h-[400px] gap-4 p-8"><label class="flex flex-col gap-2 w-full max-w-sm"><span class="text-sm font-medium text-muted-foreground">Try typing something...</span><input placeholder="Type here..." class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" type="text"><div class="group relative w-full"><input class="block outline-none peer text-primary w-full px-3.5 h-10 text-sm rounded-lg border focus:ring-2 dark:bg-neutral-950 dark:border-neutral-700/75 autofill:shadow-[inset_0_0_0px_1000px_var(--color-background)] focus:ring-muted" placeholder="" type="text"><label class="absolute block inset-y-0 px-2 bg-white dark:bg-neutral-950 text-sm left-[7px] h-fit text-nowrap my-auto -translate-y-[19px] peer-focus:-translate-y-[19px] text-muted-foreground pointer-events-none transition-transform will duration-200 scale-[.8] origin-top-left peer-placeholder-shown:scale-100 peer-focus:scale-[.8] peer-placeholder-shown:translate-y-0"></label></div></label></div></div></div></div>
```

## Reference source files

No reference source files were available.
