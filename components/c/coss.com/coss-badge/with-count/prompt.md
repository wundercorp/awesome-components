# Build Coss Badge in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Coss Badge screenshot](screenshot.png)

## Component

- Author group: `coss.com`
- Component: `coss-badge`
- Variant: `with-count`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: coss.com
- Component slug: coss-badge
- Demo slug: with-count
- Title: coss-badge
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="default.tsx_BadgeWithCount">default.tsx</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center w-full min-h-screen bg-background"><div class="flex flex-wrap gap-3 items-center justify-center"><span class="relative inline-flex shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-sm border border-transparent font-medium outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64 [&amp;_svg:not([class*='opacity-'])]:opacity-80 [&amp;_svg:not([class*='size-'])]:size-3.5 sm:[&amp;_svg:not([class*='size-'])]:size-3 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [button&amp;,a&amp;]:cursor-pointer [button&amp;,a&amp;]:pointer-coarse:after:absolute [button&amp;,a&amp;]:pointer-coarse:after:size-full [button&amp;,a&amp;]:pointer-coarse:after:min-h-11 [button&amp;,a&amp;]:pointer-coarse:after:min-w-11 h-5.5 min-w-5.5 px-[calc(--spacing(1)-1px)] text-sm sm:h-4.5 sm:min-w-4.5 sm:text-xs bg-primary text-primary-foreground [button&amp;,a&amp;]:hover:bg-primary/90" data-slot="badge">1</span><span class="relative inline-flex shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-sm border border-transparent font-medium outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64 [&amp;_svg:not([class*='opacity-'])]:opacity-80 [&amp;_svg:not([class*='size-'])]:size-3.5 sm:[&amp;_svg:not([class*='size-'])]:size-3 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [button&amp;,a&amp;]:cursor-pointer [button&amp;,a&amp;]:pointer-coarse:after:absolute [button&amp;,a&amp;]:pointer-coarse:after:size-full [button&amp;,a&amp;]:pointer-coarse:after:min-h-11 [button&amp;,a&amp;]:pointer-coarse:after:min-w-11 h-5.5 min-w-5.5 px-[calc(--spacing(1)-1px)] text-sm sm:h-4.5 sm:min-w-4.5 sm:text-xs bg-secondary text-secondary-foreground [button&amp;,a&amp;]:hover:bg-secondary/90" data-slot="badge">24</span><span class="relative inline-flex shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-sm border font-medium outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64 [&amp;_svg:not([class*='opacity-'])]:opacity-80 [&amp;_svg:not([class*='size-'])]:size-3.5 sm:[&amp;_svg:not([class*='size-'])]:size-3 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [button&amp;,a&amp;]:cursor-pointer [button&amp;,a&amp;]:pointer-coarse:after:absolute [button&amp;,a&amp;]:pointer-coarse:after:size-full [button&amp;,a&amp;]:pointer-coarse:after:min-h-11 [button&amp;,a&amp;]:pointer-coarse:after:min-w-11 h-5.5 min-w-5.5 px-[calc(--spacing(1)-1px)] text-sm sm:h-4.5 sm:min-w-4.5 sm:text-xs border-input bg-background text-foreground dark:bg-input/32 [button&amp;,a&amp;]:hover:bg-accent/50 dark:[button&amp;,a&amp;]:hover:bg-input/48" data-slot="badge">99+</span><span class="relative inline-flex shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-sm border border-transparent font-medium outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64 [&amp;_svg:not([class*='opacity-'])]:opacity-80 [&amp;_svg:not([class*='size-'])]:size-3.5 sm:[&amp;_svg:not([class*='size-'])]:size-3 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [button&amp;,a&amp;]:cursor-pointer [button&amp;,a&amp;]:pointer-coarse:after:absolute [button&amp;,a&amp;]:pointer-coarse:after:size-full [button&amp;,a&amp;]:pointer-coarse:after:min-h-11 [button&amp;,a&amp;]:pointer-coarse:after:min-w-11 h-5.5 min-w-5.5 px-[calc(--spacing(1)-1px)] text-sm sm:h-4.5 sm:min-w-4.5 sm:text-xs bg-destructive text-white [button&amp;,a&amp;]:hover:bg-destructive/90" data-slot="badge">!</span></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
