# Build Input in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Input screenshot](screenshot.png)

## Component

- Author group: `kokonutd`
- Component: `input`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: kokonutd
- Component slug: input
- Demo slug: default
- Title: input
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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="w-full max-w-sm space-y-8"><div class="space-y-2"><h3 class="text-sm font-medium">Default Input</h3><div class="w-full space-y-1.5"><label class="text-sm font-medium text-foreground/90">Label</label><div class="relative"><input class="w-full px-3 py-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed" placeholder="Type something..." value=""></div></div></div><div class="space-y-2"><h3 class="text-sm font-medium">Error State</h3><div class="w-full space-y-1.5"><label class="text-sm font-medium text-foreground/90">Label</label><div class="relative"><input class="w-full px-3 py-2 rounded-lg bg-white dark:bg-zinc-900 border dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 transition-all duration-200 focus:outline-none focus:ring-2 border-destructive focus:ring-destructive/20 disabled:opacity-50 disabled:cursor-not-allowed" placeholder="Type something..." value=""><div class="absolute -right-6 top-1/2 -translate-y-1/2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-4 w-4 text-destructive"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></div></div><p class="text-sm text-destructive">This field is required</p></div></div><div class="space-y-2"><h3 class="text-sm font-medium">Success State</h3><div class="w-full space-y-1.5"><label class="text-sm font-medium text-foreground/90">Label</label><div class="relative"><input class="w-full px-3 py-2 rounded-lg bg-white dark:bg-zinc-900 border dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 transition-all duration-200 focus:outline-none focus:ring-2 border-success focus:ring-success/20 disabled:opacity-50 disabled:cursor-not-allowed" placeholder="Type something..." value="Valid input"><button type="button" class="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md text-muted-foreground hover:text-foreground transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-4 w-4"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button><div class="absolute -right-6 top-1/2 -translate-y-1/2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-4 w-4 text-success"><path d="M20 6 9 17l-5-5"></path></svg></div></div><p class="text-sm text-success">Looks good!</p></div></div><div class="space-y-2"><h3 class="text-sm font-medium">With Clear Button</h3><div class="w-full space-y-1.5"><label class="text-sm font-medium text-foreground/90">Label</label><div class="relative"><input class="w-full px-3 py-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed" placeholder="Type something..." value="Clearable input"><button type="button" class="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md text-muted-foreground hover:text-foreground transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-4 w-4"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button></div></div></div><div class="space-y-2"><h3 class="text-sm font-medium">Disabled</h3><div class="w-full space-y-1.5"><label class="text-sm font-medium text-foreground/90">Label</label><div class="relative"><input class="w-full px-3 py-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed" placeholder="Type something..." disabled="" value="Disabled input"><button type="button" class="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md text-muted-foreground hover:text-foreground transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-4 w-4"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
