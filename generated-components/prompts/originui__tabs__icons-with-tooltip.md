# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/originui/tabs/icons-with-tooltip
- Registry URL: https://21st.dev/r/originui/tabs
- Author: originui
- Component slug: tabs
- Demo slug: icons-with-tooltip
- Title: tabs
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/originui/tabs with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/originui__tabs__icons-with-tooltip.html
- Local screenshot file: generated-21st-prompts/screenshots/originui__tabs__icons-with-tooltip.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div dir="ltr" data-orientation="horizontal"><div role="tablist" aria-orientation="horizontal" class="inline-flex items-center justify-center rounded-lg bg-muted p-0.5 text-muted-foreground/70" tabindex="0" data-orientation="horizontal" style="outline: none;"><span data-state="closed"><button type="button" role="tab" aria-selected="true" aria-controls="radix-«r0»-content-tab-1" data-state="active" id="radix-«r0»-trigger-tab-1" class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 text-sm font-medium outline-offset-2 transition-all hover:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:shadow-black/5 py-3" tabindex="-1" data-orientation="horizontal" data-radix-collection-item=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house" aria-hidden="true"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg></button></span><span data-state="closed"><button type="button" role="tab" aria-selected="false" aria-controls="radix-«r0»-content-tab-2" data-state="inactive" id="radix-«r0»-trigger-tab-2" class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 text-sm font-medium outline-offset-2 transition-all hover:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:shadow-black/5 group py-3" tabindex="-1" data-orientation="horizontal" data-radix-collection-item=""><span class="relative"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panels-top-left" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg><div class="inline-flex items-center justify-center rounded-full border font-medium outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 bg-primary text-primary-foreground absolute -top-2.5 left-full min-w-4 -translate-x-1.5 border-background px-0.5 text-[10px]/[.875rem] transition-opacity group-data-[state=inactive]:opacity-50">3</div></span></button></span><span data-state="closed"><button type="button" role="tab" aria-selected="false" aria-controls="radix-«r0»-content-tab-3" data-state="inactive" id="radix-«r0»-trigger-tab-3" class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 text-sm font-medium outline-offset-2 transition-all hover:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:shadow-black/5 py-3" tabindex="-1" data-orientation="horizontal" data-radix-collection-item=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box" aria-hidden="true"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg></button></span></div><div data-state="active" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-tab-1" id="radix-«r0»-content-tab-1" tabindex="0" class="mt-2 outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70" style="animation-duration: 0s;"><p class="p-4 text-center text-xs text-muted-foreground">Content for Tab 1</p></div><div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-tab-2" hidden="" id="radix-«r0»-content-tab-2" tabindex="0" class="mt-2 outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70"></div><div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-tab-3" hidden="" id="radix-«r0»-content-tab-3" tabindex="0" class="mt-2 outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70"></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.