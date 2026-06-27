# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/originui/tabs/vertical-tabs-with-icons
- Registry URL: https://21st.dev/r/originui/tabs
- Author: originui
- Component slug: tabs
- Demo slug: vertical-tabs-with-icons
- Title: tabs
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/originui/tabs with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/originui__tabs__vertical-tabs-with-icons.html
- Local screenshot file: generated-21st-prompts/screenshots/originui__tabs__vertical-tabs-with-icons.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div dir="ltr" data-orientation="vertical" class="flex w-full gap-2"><div role="tablist" aria-orientation="vertical" class="inline-flex items-center justify-center p-0.5 flex-col gap-1 rounded-none bg-transparent px-1 py-0 text-foreground" tabindex="0" data-orientation="vertical" style="outline: none;"><button type="button" role="tab" aria-selected="true" aria-controls="radix-«r0»-content-tab-1" data-state="active" id="radix-«r0»-trigger-tab-1" class="inline-flex items-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium outline-offset-2 transition-all focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground data-[state=active]:shadow-black/5 relative w-full justify-start after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent" tabindex="-1" data-orientation="vertical" data-radix-collection-item=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house -ms-0.5 me-1.5 opacity-60" aria-hidden="true"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>Overview</button><button type="button" role="tab" aria-selected="false" aria-controls="radix-«r0»-content-tab-2" data-state="inactive" id="radix-«r0»-trigger-tab-2" class="inline-flex items-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium outline-offset-2 transition-all focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground data-[state=active]:shadow-black/5 relative w-full justify-start after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent" tabindex="-1" data-orientation="vertical" data-radix-collection-item=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panels-top-left -ms-0.5 me-1.5 opacity-60" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>Projects</button><button type="button" role="tab" aria-selected="false" aria-controls="radix-«r0»-content-tab-3" data-state="inactive" id="radix-«r0»-trigger-tab-3" class="inline-flex items-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium outline-offset-2 transition-all focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground data-[state=active]:shadow-black/5 relative w-full justify-start after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent" tabindex="-1" data-orientation="vertical" data-radix-collection-item=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box -ms-0.5 me-1.5 opacity-60" aria-hidden="true"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>Packages</button></div><div class="grow rounded-lg border border-border text-start"><div data-state="active" data-orientation="vertical" role="tabpanel" aria-labelledby="radix-«r0»-trigger-tab-1" id="radix-«r0»-content-tab-1" tabindex="0" class="mt-2 outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70" style="animation-duration: 0s;"><p class="px-4 py-1.5 text-xs text-muted-foreground">Content for Tab 1</p></div><div data-state="inactive" data-orientation="vertical" role="tabpanel" aria-labelledby="radix-«r0»-trigger-tab-2" hidden="" id="radix-«r0»-content-tab-2" tabindex="0" class="mt-2 outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70"></div><div data-state="inactive" data-orientation="vertical" role="tabpanel" aria-labelledby="radix-«r0»-trigger-tab-3" hidden="" id="radix-«r0»-content-tab-3" tabindex="0" class="mt-2 outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70"></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.