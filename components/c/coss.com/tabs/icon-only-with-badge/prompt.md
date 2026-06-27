# Build Tabs in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Tabs screenshot](screenshot.png)

## Component

- Author group: `coss.com`
- Component: `tabs`
- Variant: `icon-only-with-badge`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: coss.com
- Component slug: tabs
- Demo slug: icon-only-with-badge
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="default.tsx_Particle">default.tsx</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center w-full min-h-screen bg-background p-8"><div data-orientation="horizontal" data-activation-direction="none" data-slot="tabs" class="flex flex-col gap-2 data-[orientation=vertical]:flex-row items-center"><div data-orientation="horizontal" data-activation-direction="none" role="tablist" data-slot="tabs-list" class="relative z-0 flex w-fit items-center justify-center gap-x-0.5 data-[orientation=vertical]:flex-col rounded-lg bg-muted p-0.5 text-muted-foreground/72"><button type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabindex="0" role="tab" aria-selected="true" id="base-ui-«r0»" data-composite-item-active="" data-slot="tabs-tab" aria-label="Overview" class="relative flex h-9 shrink-0 grow cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-transparent px-[calc(--spacing(2.5)-1px)] font-medium text-base outline-none transition-[color,background-color,box-shadow] hover:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring data-disabled:pointer-events-none data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start data-active:text-foreground data-disabled:opacity-64 sm:h-8 sm:text-sm [&amp;_svg:not([class*='size-'])]:size-4.5 sm:[&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:pointer-events-none [&amp;_svg]:-mx-0.5 [&amp;_svg]:shrink-0 size-10!" aria-controls="base-ui-«r3»"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house" aria-hidden="true"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg></button><button type="button" data-orientation="horizontal" aria-disabled="false" tabindex="-1" role="tab" aria-selected="false" id="base-ui-«r1»" data-slot="tabs-tab" aria-label="Inbox" class="relative flex h-9 shrink-0 grow cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-transparent px-[calc(--spacing(2.5)-1px)] font-medium text-base outline-none transition-[color,background-color,box-shadow] hover:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring data-disabled:pointer-events-none data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start data-active:text-foreground data-disabled:opacity-64 sm:h-8 sm:text-sm [&amp;_svg:not([class*='size-'])]:size-4.5 sm:[&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:pointer-events-none [&amp;_svg]:-mx-0.5 [&amp;_svg]:shrink-0 size-10!"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-inbox" aria-hidden="true"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg><span class="inline-flex shrink-0 items-center justify-center gap-1 whitespace-nowrap border border-transparent font-medium outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64 [&amp;_svg:not([class*='opacity-'])]:opacity-80 [&amp;_svg:not([class*='size-'])]:size-3.5 sm:[&amp;_svg:not([class*='size-'])]:size-3 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [button&amp;,a&amp;]:cursor-pointer [button&amp;,a&amp;]:pointer-coarse:after:absolute [button&amp;,a&amp;]:pointer-coarse:after:size-full [button&amp;,a&amp;]:pointer-coarse:after:min-h-11 [button&amp;,a&amp;]:pointer-coarse:after:min-w-11 h-5 min-w-5 px-[calc(--spacing(1)-1px)] text-xs sm:h-4 sm:min-w-4 sm:text-[.625rem] bg-primary text-primary-foreground [button&amp;,a&amp;]:hover:bg-primary/90 absolute end-0 top-0 rounded-full not-in-data-active:opacity-64" data-slot="badge">5</span></button><button type="button" data-orientation="horizontal" aria-disabled="false" tabindex="-1" role="tab" aria-selected="false" id="base-ui-«r2»" data-slot="tabs-tab" aria-label="Settings" class="relative flex h-9 shrink-0 grow cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-transparent px-[calc(--spacing(2.5)-1px)] font-medium text-base outline-none transition-[color,background-color,box-shadow] hover:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring data-disabled:pointer-events-none data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start data-active:text-foreground data-disabled:opacity-64 sm:h-8 sm:text-sm [&amp;_svg:not([class*='size-'])]:size-4.5 sm:[&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:pointer-events-none [&amp;_svg]:-mx-0.5 [&amp;_svg]:shrink-0 size-10!"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings" aria-hidden="true"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg></button><span data-orientation="horizontal" data-activation-direction="none" role="presentation" data-slot="tab-indicator" class="absolute bottom-0 left-0 h-(--active-tab-height) w-(--active-tab-width) translate-x-(--active-tab-left) -translate-y-(--active-tab-bottom) transition-[width,translate] duration-200 ease-in-out -z-1 rounded-md bg-background shadow-sm/5 dark:bg-input" style="--active-tab-left: 2px; --active-tab-right: 86px; --active-tab-top: 2px; --active-tab-bottom: 2px; --active-tab-width: 40px; --active-tab-height: 40px;"></span></div><div data-orientation="horizontal" data-activation-direction="none" id="base-ui-«r3»" role="tabpanel" tabindex="0" data-index="0" data-slot="tabs-content" class="flex-1 outline-none" aria-labelledby="base-ui-«r0»"><p class="p-4 text-center text-muted-foreground text-xs">Overview content</p></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
