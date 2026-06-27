# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/jshguo/interfaces-button/destructive
- Registry URL: https://21st.dev/r/jshguo/interfaces-button
- Author: jshguo
- Component slug: interfaces-button
- Demo slug: destructive
- Title: interfaces-button
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/jshguo/interfaces-button with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/jshguo__interfaces-button__destructive.html
- Local screenshot file: generated-21st-prompts/screenshots/jshguo__interfaces-button__destructive.png

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

No registry metadata available.

## Rendered DOM snapshot

This is the rendered demo HTML extracted from the live preview. Use it to verify structure, class names, visible content, and layout.

```html
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="destructive.tsx_ButtonDestructiveDemo">destructive.tsx</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex w-full min-h-screen items-center justify-center overflow-hidden bg-background p-8"><div class="grid w-full max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3"><div class="flex min-h-36 flex-col rounded-xl border bg-card p-4 shadow-sm"><p class="text-xs font-medium text-muted-foreground">Destructive · Sm</p><div class="flex flex-1 items-center justify-center pt-3"><button data-slot="button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/25 dark:aria-invalid:ring-destructive/50 aria-invalid:border-destructive cursor-pointer bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/50 h-8 rounded-md px-3 py-2">Button</button></div></div><div class="flex min-h-36 flex-col rounded-xl border bg-card p-4 shadow-sm"><p class="text-xs font-medium text-muted-foreground">Destructive · Default</p><div class="flex flex-1 items-center justify-center pt-3"><button data-slot="button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/25 dark:aria-invalid:ring-destructive/50 aria-invalid:border-destructive cursor-pointer bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/50 h-10 px-4 py-2">Button</button></div></div><div class="flex min-h-36 flex-col rounded-xl border bg-card p-4 shadow-sm"><p class="text-xs font-medium text-muted-foreground">Destructive · Lg</p><div class="flex flex-1 items-center justify-center pt-3"><button data-slot="button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/25 dark:aria-invalid:ring-destructive/50 aria-invalid:border-destructive cursor-pointer bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/50 h-12 rounded-md px-6 py-4 text-base">Button</button></div></div><div class="flex min-h-36 flex-col rounded-xl border bg-card p-4 shadow-sm"><p class="text-xs font-medium text-muted-foreground">Destructive · Icon Sm</p><div class="flex flex-1 items-center justify-center pt-3"><button data-slot="button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/25 dark:aria-invalid:ring-destructive/50 aria-invalid:border-destructive cursor-pointer bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/50 size-8" aria-label="destructive · icon sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus size-4" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button></div></div><div class="flex min-h-36 flex-col rounded-xl border bg-card p-4 shadow-sm"><p class="text-xs font-medium text-muted-foreground">Destructive · Icon</p><div class="flex flex-1 items-center justify-center pt-3"><button data-slot="button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/25 dark:aria-invalid:ring-destructive/50 aria-invalid:border-destructive cursor-pointer bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/50 size-10" aria-label="destructive · icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus size-4" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button></div></div><div class="flex min-h-36 flex-col rounded-xl border bg-card p-4 shadow-sm"><p class="text-xs font-medium text-muted-foreground">Destructive · Icon Lg</p><div class="flex flex-1 items-center justify-center pt-3"><button data-slot="button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/25 dark:aria-invalid:ring-destructive/50 aria-invalid:border-destructive cursor-pointer bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/50 size-12 [&amp;_svg]:size-5" aria-label="destructive · icon lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus size-4" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.