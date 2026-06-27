# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/coss.com/tabs/vertical
- Registry URL: https://21st.dev/r/coss.com/tabs
- Author: coss.com
- Component slug: tabs
- Demo slug: vertical
- Title: tabs
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/coss.com/tabs with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/coss.com__tabs__vertical.html
- Local screenshot file: generated-21st-prompts/screenshots/coss.com__tabs__vertical.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="default.tsx_Particle">default.tsx</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center w-full min-h-screen bg-background p-8"><div data-orientation="vertical" data-activation-direction="none" data-slot="tabs" class="flex flex-col gap-2 data-[orientation=vertical]:flex-row w-full"><div data-orientation="vertical" data-activation-direction="none" aria-orientation="vertical" role="tablist" data-slot="tabs-list" class="relative z-0 flex w-fit items-center justify-center gap-x-0.5 data-[orientation=vertical]:flex-col rounded-lg bg-muted p-0.5 text-muted-foreground/72"><button type="button" data-active="" data-orientation="vertical" aria-disabled="false" tabindex="0" role="tab" aria-selected="true" id="base-ui-«r0»" data-composite-item-active="" data-slot="tabs-tab" class="relative flex h-9 shrink-0 grow cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-transparent px-[calc(--spacing(2.5)-1px)] font-medium text-base outline-none transition-[color,background-color,box-shadow] hover:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring data-disabled:pointer-events-none data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start data-active:text-foreground data-disabled:opacity-64 sm:h-8 sm:text-sm [&amp;_svg:not([class*='size-'])]:size-4.5 sm:[&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:pointer-events-none [&amp;_svg]:-mx-0.5 [&amp;_svg]:shrink-0" aria-controls="base-ui-«r3»">Tab 1</button><button type="button" data-orientation="vertical" aria-disabled="false" tabindex="-1" role="tab" aria-selected="false" id="base-ui-«r1»" data-slot="tabs-tab" class="relative flex h-9 shrink-0 grow cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-transparent px-[calc(--spacing(2.5)-1px)] font-medium text-base outline-none transition-[color,background-color,box-shadow] hover:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring data-disabled:pointer-events-none data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start data-active:text-foreground data-disabled:opacity-64 sm:h-8 sm:text-sm [&amp;_svg:not([class*='size-'])]:size-4.5 sm:[&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:pointer-events-none [&amp;_svg]:-mx-0.5 [&amp;_svg]:shrink-0">Tab 2</button><button type="button" data-orientation="vertical" aria-disabled="false" tabindex="-1" role="tab" aria-selected="false" id="base-ui-«r2»" data-slot="tabs-tab" class="relative flex h-9 shrink-0 grow cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-transparent px-[calc(--spacing(2.5)-1px)] font-medium text-base outline-none transition-[color,background-color,box-shadow] hover:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring data-disabled:pointer-events-none data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start data-active:text-foreground data-disabled:opacity-64 sm:h-8 sm:text-sm [&amp;_svg:not([class*='size-'])]:size-4.5 sm:[&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:pointer-events-none [&amp;_svg]:-mx-0.5 [&amp;_svg]:shrink-0">Tab 3</button><span data-orientation="vertical" data-activation-direction="none" role="presentation" data-slot="tab-indicator" class="absolute bottom-0 left-0 h-(--active-tab-height) w-(--active-tab-width) translate-x-(--active-tab-left) -translate-y-(--active-tab-bottom) transition-[width,translate] duration-200 ease-in-out -z-1 rounded-md bg-background shadow-sm/5 dark:bg-input" style="--active-tab-left: 2.0000016571724495px; --active-tab-right: 1.656198342827551px; --active-tab-top: 2px; --active-tab-bottom: 66px; --active-tab-width: 56.3438px; --active-tab-height: 32px;"></span></div><div data-orientation="vertical" data-activation-direction="none" id="base-ui-«r3»" role="tabpanel" tabindex="0" data-index="0" data-slot="tabs-content" class="flex-1 outline-none" aria-labelledby="base-ui-«r0»"><p class="p-4 text-center text-muted-foreground text-xs">Tab 1 content</p></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.