# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/reui/tabs/line
- Registry URL: https://21st.dev/r/reui/tabs
- Author: reui
- Component slug: tabs
- Demo slug: line
- Title: tabs
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/reui/tabs with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/reui__tabs__line.html
- Local screenshot file: generated-21st-prompts/screenshots/reui__tabs__line.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div dir="ltr" data-orientation="horizontal" data-slot="tabs" class="text-sm text-muted-foreground"><div role="tablist" aria-orientation="horizontal" data-slot="tabs-list" class="flex items-center shrink-0 border-b border-border gap-8" tabindex="0" data-orientation="horizontal" style="outline: none;"><button type="button" role="tab" aria-selected="true" aria-controls="radix-«r0»-content-profile" data-state="active" id="radix-«r0»-trigger-profile" data-slot="tabs-trigger" class="shrink-0 cursor-pointer whitespace-nowrap inline-flex justify-center items-center font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-disabled:pointer-events-none data-disabled:opacity-50 [&amp;_svg]:shrink-0 [&amp;_svg]:text-muted-foreground [&amp;:hover_svg]:text-primary [&amp;[data-state=active]_svg]:text-primary border-b-2 text-muted-foreground border-transparent hover:text-primary data-[state=active]:border-primary data-[state=active]:text-primary gap-2 [&amp;_svg]:size-4 text-sm py-2.5" tabindex="-1" data-orientation="horizontal" data-radix-collection-item=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round" aria-hidden="true"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg> Profile</button><button type="button" role="tab" aria-selected="false" aria-controls="radix-«r0»-content-security" data-state="inactive" id="radix-«r0»-trigger-security" data-slot="tabs-trigger" class="shrink-0 cursor-pointer whitespace-nowrap inline-flex justify-center items-center font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-disabled:pointer-events-none data-disabled:opacity-50 [&amp;_svg]:shrink-0 [&amp;_svg]:text-muted-foreground [&amp;:hover_svg]:text-primary [&amp;[data-state=active]_svg]:text-primary border-b-2 text-muted-foreground border-transparent hover:text-primary data-[state=active]:border-primary data-[state=active]:text-primary gap-2 [&amp;_svg]:size-4 text-sm py-2.5" tabindex="-1" data-orientation="horizontal" data-radix-collection-item=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Security</button><button type="button" role="tab" aria-selected="false" aria-controls="radix-«r0»-content-notifications" data-state="inactive" id="radix-«r0»-trigger-notifications" data-slot="tabs-trigger" class="shrink-0 cursor-pointer whitespace-nowrap inline-flex justify-center items-center font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-disabled:pointer-events-none data-disabled:opacity-50 [&amp;_svg]:shrink-0 [&amp;_svg]:text-muted-foreground [&amp;:hover_svg]:text-primary [&amp;[data-state=active]_svg]:text-primary border-b-2 text-muted-foreground border-transparent hover:text-primary data-[state=active]:border-primary data-[state=active]:text-primary gap-2 [&amp;_svg]:size-4 text-sm py-2.5" tabindex="-1" data-orientation="horizontal" data-radix-collection-item=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell" aria-hidden="true"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>Notifications<span data-slot="badge" class="inline-flex items-center justify-center border border-transparent font-medium focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 [&amp;_svg]:-ms-px [&amp;_svg]:shrink-0 bg-destructive text-destructive-foreground px-[0.25rem] h-4 min-w-4 gap-1 text-[0.625rem] leading-[0.5rem] [&amp;_svg]:size-3 rounded-full">5</span></button></div><div data-state="active" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-profile" id="radix-«r0»-content-profile" tabindex="0" data-slot="tabs-content" class="mt-2.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" style="animation-duration: 0s;">Content for Profile</div><div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-security" hidden="" id="radix-«r0»-content-security" tabindex="0" data-slot="tabs-content" class="mt-2.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"></div><div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-notifications" hidden="" id="radix-«r0»-content-notifications" tabindex="0" data-slot="tabs-content" class="mt-2.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.