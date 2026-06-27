# Build Tabs in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Tabs screenshot](screenshot.png)

## Component

- Author group: `fuma-nama`
- Component: `tabs`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: fuma-nama
- Component slug: tabs
- Demo slug: default
- Title: tabs
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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="flex w-full max-w-[500px] h-[300px] flex-col p-4"><div class="w-full"><div dir="ltr" data-orientation="horizontal" class="flex flex-col overflow-hidden rounded-xl border bg-card border-muted/50 w-full"><div role="tablist" aria-orientation="horizontal" class="flex flex-row items-end gap-4 overflow-x-auto bg-muted/50 px-4 text-muted-foreground w-full justify-start" tabindex="0" data-orientation="horizontal" style="outline: none;"><button type="button" role="tab" aria-selected="true" aria-controls="radix-«r0»-content-javascript" data-state="active" id="radix-«r0»-trigger-javascript" class="whitespace-nowrap border-b-2 border-transparent py-2 text-sm font-medium transition-colors hover:text-foreground/90 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-primary data-[state=active]:text-primary" tabindex="-1" data-orientation="horizontal" data-radix-collection-item="">JavaScript</button><button type="button" role="tab" aria-selected="false" aria-controls="radix-«r0»-content-rust" data-state="inactive" id="radix-«r0»-trigger-rust" class="whitespace-nowrap border-b-2 border-transparent py-2 text-sm font-medium transition-colors hover:text-foreground/90 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-primary data-[state=active]:text-primary" tabindex="-1" data-orientation="horizontal" data-radix-collection-item="">Rust</button><button type="button" role="tab" aria-selected="false" aria-controls="radix-«r0»-content-typescript" data-state="inactive" id="radix-«r0»-trigger-typescript" class="whitespace-nowrap border-b-2 border-transparent py-2 text-sm font-medium transition-colors hover:text-foreground/90 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-primary data-[state=active]:text-primary" tabindex="-1" data-orientation="horizontal" data-radix-collection-item="">TypeScript</button></div><div data-state="active" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-javascript" id="radix-«r0»-content-javascript" tabindex="0" class="p-4 text-sm text-muted-foreground" style="animation-duration: 0s;">Hello World from JavaScript!</div><div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-rust" hidden="" id="radix-«r0»-content-rust" tabindex="0" class="p-4 text-sm text-muted-foreground"></div><div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-typescript" hidden="" id="radix-«r0»-content-typescript" tabindex="0" class="p-4 text-sm text-muted-foreground"></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
