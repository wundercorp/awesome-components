# Build Animated Toggle Layout Container in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Animated Toggle Layout Container screenshot](screenshot.png)

## Component

- Author group: `youcefbnm`
- Component: `animated-toggle-layout-container`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: YoucefBnm
- Component slug: animated-toggle-layout-container
- Demo slug: default
- Title: animated-toggle-layout-container
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
<div id="root"><div class="bg-background text-foreground"><div class="w-full"><div class="p-12 md:px-8"><div><div class="mb-6 flex w-fit rounded-sm border border-current"><div class="relative"><button class="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-3 relative rounded-none bg-transparent text-xs hover:bg-slate-900/20 hover:text-white text-inherit">list view</button></div><div class="relative"><button class="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-3 relative rounded-none bg-transparent text-xs hover:bg-slate-900/20 hover:text-white border-x border-current text-inherit">2 column view</button></div><div class="relative"><div class="rounded-inherit absolute inset-0 bg-gray-900" style="opacity: 1;"></div><button class="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-3 relative rounded-none bg-transparent text-xs hover:bg-slate-900/20 hover:text-white cursor-not-allowed opacity-50 md:cursor-pointer md:opacity-100 text-white">4 column view</button></div></div><div class="grid grid-cols-2 md:grid-cols-4 gap-4"><div class="cursor-pointer space-y-4 overflow-hidden rounded-sm bg-white pb-6 shadow" style="opacity: 1; transform: none;"><div class="relative pb-8 pt-16"><img alt="adidas" class="mx-auto h-auto max-h-full max-w-[75%]" src="https://m.media-amazon.com/images/I/61uSf-0MJzL._AC_SY695_.jpg"><div class="absolute inset-0 z-10 bg-slate-950/5"></div></div><div class="flex items-center justify-between px-4"><h3 class="text-sm font-semibold capitalize tracking-tight">adidas</h3><p class="text-xs tabular-nums leading-none tracking-tight text-slate-700">$120</p></div></div><div class="cursor-pointer space-y-4 overflow-hidden rounded-sm bg-white pb-6 shadow" style="opacity: 1; transform: none;"><div class="relative pb-8 pt-16"><img alt="nike" class="mx-auto h-auto max-h-full max-w-[75%]" src="https://m.media-amazon.com/images/I/81YBp7gNeHL._AC_SX695_.jpg"><div class="absolute inset-0 z-10 bg-slate-950/5"></div></div><div class="flex items-center justify-between px-4"><h3 class="text-sm font-semibold capitalize tracking-tight">nike</h3><p class="text-xs tabular-nums leading-none tracking-tight text-slate-700">$120</p></div></div><div class="cursor-pointer space-y-4 overflow-hidden rounded-sm bg-white pb-6 shadow" style="opacity: 1; transform: none;"><div class="relative pb-8 pt-16"><img alt="brooks" class="mx-auto h-auto max-h-full max-w-[75%]" src="https://m.media-amazon.com/images/I/81s8buboliL._AC_SY695_.jpg"><div class="absolute inset-0 z-10 bg-slate-950/5"></div></div><div class="flex items-center justify-between px-4"><h3 class="text-sm font-semibold capitalize tracking-tight">brooks</h3><p class="text-xs tabular-nums leading-none tracking-tight text-slate-700">$95</p></div></div><div class="cursor-pointer space-y-4 overflow-hidden rounded-sm bg-white pb-6 shadow" style="opacity: 1; transform: none;"><div class="relative pb-8 pt-16"><img alt="nike" class="mx-auto h-auto max-h-full max-w-[75%]" src="https://m.media-amazon.com/images/I/81hPhqRGDIL._AC_SX695_.jpg"><div class="absolute inset-0 z-10 bg-slate-950/5"></div></div><div class="flex items-center justify-between px-4"><h3 class="text-sm font-semibold capitalize tracking-tight">nike</h3><p class="text-xs tabular-nums leading-none tracking-tight text-slate-700">$79.95</p></div></div><div class="cursor-pointer space-y-4 overflow-hidden rounded-sm bg-white pb-6 shadow" style="opacity: 1; transform: none;"><div class="relative pb-8 pt-16"><img alt="salomon" class="mx-auto h-auto max-h-full max-w-[75%]" src="https://m.media-amazon.com/images/I/71NRA5y7qIL._AC_SX695_.jpg"><div class="absolute inset-0 z-10 bg-slate-950/5"></div></div><div class="flex items-center justify-between px-4"><h3 class="text-sm font-semibold capitalize tracking-tight">salomon</h3><p class="text-xs tabular-nums leading-none tracking-tight text-slate-700">$89.99</p></div></div><div class="cursor-pointer space-y-4 overflow-hidden rounded-sm bg-white pb-6 shadow" style="opacity: 1; transform: none;"><div class="relative pb-8 pt-16"><img alt="brooks" class="mx-auto h-auto max-h-full max-w-[75%]" src="https://m.media-amazon.com/images/I/81gwJjH+E9L._AC_SY695_.jpg"><div class="absolute inset-0 z-10 bg-slate-950/5"></div></div><div class="flex items-center justify-between px-4"><h3 class="text-sm font-semibold capitalize tracking-tight">brooks</h3><p class="text-xs tabular-nums leading-none tracking-tight text-slate-700">$88</p></div></div><div class="cursor-pointer space-y-4 overflow-hidden rounded-sm bg-white pb-6 shadow" style="opacity: 1; transform: none;"><div class="relative pb-8 pt-16"><img alt="nike" class="mx-auto h-auto max-h-full max-w-[75%]" src="https://m.media-amazon.com/images/I/81IaVB-vw7L._AC_SX695_.jpg"><div class="absolute inset-0 z-10 bg-slate-950/5"></div></div><div class="flex items-center justify-between px-4"><h3 class="text-sm font-semibold capitalize tracking-tight">nike</h3><p class="text-xs tabular-nums leading-none tracking-tight text-slate-700">$199.99</p></div></div><div class="cursor-pointer space-y-4 overflow-hidden rounded-sm bg-white pb-6 shadow" style="opacity: 1; transform: none;"><div class="relative pb-8 pt-16"><img alt="new balance" class="mx-auto h-auto max-h-full max-w-[75%]" src="https://m.media-amazon.com/images/I/61LGqMZ5UXL._AC_SY695_.jpg"><div class="absolute inset-0 z-10 bg-slate-950/5"></div></div><div class="flex items-center justify-between px-4"><h3 class="text-sm font-semibold capitalize tracking-tight">new balance</h3><p class="text-xs tabular-nums leading-none tracking-tight text-slate-700">$70</p></div></div><div class="cursor-pointer space-y-4 overflow-hidden rounded-sm bg-white pb-6 shadow" style="opacity: 1; transform: none;"><div class="relative pb-8 pt-16"><img alt="under armour" class="mx-auto h-auto max-h-full max-w-[75%]" src="https://m.media-amazon.com/images/I/61P3L82SruL._AC_SY695_.jpg"><div class="absolute inset-0 z-10 bg-slate-950/5"></div></div><div class="flex items-center justify-between px-4"><h3 class="text-sm font-semibold capitalize tracking-tight">under armour</h3><p class="text-xs tabular-nums leading-none tracking-tight text-slate-700">$85.99</p></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
