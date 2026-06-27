# Build Coss Avatar in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Coss Avatar screenshot](screenshot.png)

## Component

- Author group: `coss.com`
- Component: `coss-avatar`
- Variant: `radius`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: coss.com
- Component slug: coss-avatar
- Demo slug: radius
- Title: coss-avatar
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="default.tsx_AvatarRadiusDemo">default.tsx</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center w-full min-h-screen bg-background p-8"><div class="flex flex-col gap-8"><div class="flex items-center gap-6"><div class="flex flex-col items-center gap-2"><span data-slot="avatar" class="inline-flex shrink-0 select-none items-center justify-center overflow-hidden bg-background align-middle font-medium text-xs size-12 rounded-full"><img alt="User avatar" data-slot="avatar-image" class="size-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&amp;h=96&amp;fit=crop&amp;crop=faces"></span><span class="text-xs text-muted-foreground">Circle</span></div><div class="flex flex-col items-center gap-2"><span data-slot="avatar" class="inline-flex shrink-0 select-none items-center justify-center overflow-hidden bg-background align-middle font-medium text-xs size-12 rounded-xl"><img alt="User avatar" data-slot="avatar-image" class="size-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&amp;h=96&amp;fit=crop&amp;crop=faces"></span><span class="text-xs text-muted-foreground">Rounded</span></div><div class="flex flex-col items-center gap-2"><span data-slot="avatar" class="inline-flex shrink-0 select-none items-center justify-center overflow-hidden bg-background align-middle font-medium text-xs size-12 rounded-md"><img alt="User avatar" data-slot="avatar-image" class="size-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&amp;h=96&amp;fit=crop&amp;crop=faces"></span><span class="text-xs text-muted-foreground">Square</span></div><div class="flex flex-col items-center gap-2"><span data-slot="avatar" class="inline-flex shrink-0 select-none items-center justify-center overflow-hidden bg-background align-middle font-medium text-xs size-12 rounded-none"><img alt="User avatar" data-slot="avatar-image" class="size-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&amp;h=96&amp;fit=crop&amp;crop=faces"></span><span class="text-xs text-muted-foreground">None</span></div></div><div class="flex items-center gap-6"><div class="flex flex-col items-center gap-2"><span data-slot="avatar" class="inline-flex shrink-0 select-none items-center justify-center overflow-hidden bg-background align-middle font-medium text-xs size-12 rounded-full"><span data-slot="avatar-fallback" class="flex size-full items-center justify-center bg-muted rounded-full">JD</span></span><span class="text-xs text-muted-foreground">Circle</span></div><div class="flex flex-col items-center gap-2"><span data-slot="avatar" class="inline-flex shrink-0 select-none items-center justify-center overflow-hidden bg-background align-middle font-medium text-xs size-12 rounded-xl"><span data-slot="avatar-fallback" class="flex size-full items-center justify-center bg-muted rounded-xl">JD</span></span><span class="text-xs text-muted-foreground">Rounded</span></div><div class="flex flex-col items-center gap-2"><span data-slot="avatar" class="inline-flex shrink-0 select-none items-center justify-center overflow-hidden bg-background align-middle font-medium text-xs size-12 rounded-md"><span data-slot="avatar-fallback" class="flex size-full items-center justify-center bg-muted rounded-md">JD</span></span><span class="text-xs text-muted-foreground">Square</span></div><div class="flex flex-col items-center gap-2"><span data-slot="avatar" class="inline-flex shrink-0 select-none items-center justify-center overflow-hidden bg-background align-middle font-medium text-xs size-12 rounded-none"><span data-slot="avatar-fallback" class="flex size-full items-center justify-center bg-muted rounded-none">JD</span></span><span class="text-xs text-muted-foreground">None</span></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
