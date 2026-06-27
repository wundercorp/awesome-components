# Build Animate Checkbox in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Animate Checkbox screenshot](screenshot.png)

## Component

- Author group: `molecule-ui`
- Component: `animate-checkbox`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: molecule-ui
- Component slug: animate-checkbox
- Demo slug: default
- Title: animate-checkbox
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col gap-6"><div class="flex items-center gap-2"><div tabindex="0"><button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" class="flex items-center justify-center border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border transition-all duration-200 outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 hover:shadow-sm hover:border-primary/20"><svg class="h-full w-full" viewBox="0 0 12 12" fill="none" style="opacity: 1; transform: none;"><path d="M2.5 6L4.5 8L9.5 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke-dasharray="0px 1px" opacity="0" pathLength="1" stroke-dashoffset="0px"></path></svg></button></div><div><a class="underline pointer-cursor" target="_blank" href="https://moleculeui.design" variant="link">Checkout Molecule UI</a></div></div><div class="flex items-center gap-2"><div tabindex="0"><button type="button" role="checkbox" aria-checked="true" data-state="checked" value="on" class="flex items-center justify-center border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border transition-all duration-200 outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 hover:shadow-sm hover:border-primary/20"><svg class="h-full w-full" viewBox="0 0 12 12" fill="none" style="opacity: 1; transform: none;"><path d="M2.5 6L4.5 8L9.5 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke-dasharray="1px 1px" opacity="1" pathLength="1" stroke-dashoffset="0px"></path></svg></button></div><div><a class="underline pointer-cursor" target="_blank" href="https://moleculeui.design" variant="link">Checkout Molecule UI</a></div></div><div class="flex items-center gap-2"><div tabindex="0"><button type="button" role="checkbox" aria-checked="true" data-state="checked" value="on" class="flex items-center justify-center border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border transition-all duration-200 outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 hover:shadow-sm hover:border-primary/20 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"><svg class="h-full w-full" viewBox="0 0 12 12" fill="none" style="opacity: 1; transform: none;"><path d="M2.5 6L4.5 8L9.5 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke-dasharray="1px 1px" opacity="1" pathLength="1" stroke-dashoffset="0px"></path></svg></button></div><div>Enable Notification</div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
