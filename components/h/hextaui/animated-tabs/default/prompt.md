# Build Animated Tabs in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Animated Tabs screenshot](screenshot.png)

## Component

- Author group: `hextaui`
- Component: `animated-tabs`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: hextaui
- Component slug: animated-tabs
- Demo slug: default
- Title: animated-tabs
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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="relative bg-secondary/50 border border-primary/10 mx-auto flex w-fit flex-col items-center rounded-full py-2 px-4"><div class="absolute z-10 w-full overflow-hidden [clip-path:inset(0px_75%_0px_0%_round_17px)] [transition:clip-path_0.25s_ease]" style="clip-path: inset(0px 80% 0px 4% round 17px);"><div class="relative flex w-full justify-center bg-primary"><button class="flex h-8 items-center rounded-full p-3 text-sm font-medium text-primary-foreground" tabindex="-1">Home</button><button class="flex h-8 items-center rounded-full p-3 text-sm font-medium text-primary-foreground" tabindex="-1">About</button><button class="flex h-8 items-center rounded-full p-3 text-sm font-medium text-primary-foreground" tabindex="-1">Resources</button><button class="flex h-8 items-center rounded-full p-3 text-sm font-medium text-primary-foreground" tabindex="-1">Docs</button><button class="flex h-8 items-center rounded-full p-3 text-sm font-medium text-primary-foreground" tabindex="-1">Support</button></div></div><div class="relative flex w-full justify-center"><button class="flex h-8 items-center cursor-pointer rounded-full p-3 text-sm font-medium text-muted-foreground">Home</button><button class="flex h-8 items-center cursor-pointer rounded-full p-3 text-sm font-medium text-muted-foreground">About</button><button class="flex h-8 items-center cursor-pointer rounded-full p-3 text-sm font-medium text-muted-foreground">Resources</button><button class="flex h-8 items-center cursor-pointer rounded-full p-3 text-sm font-medium text-muted-foreground">Docs</button><button class="flex h-8 items-center cursor-pointer rounded-full p-3 text-sm font-medium text-muted-foreground">Support</button></div></div>;</div></div></div>
```

## Reference source files

No reference source files were available.
