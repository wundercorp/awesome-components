# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/reui/tabs/default
- Registry URL: https://21st.dev/r/reui/tabs
- Author: reui
- Component slug: tabs
- Demo slug: default
- Title: tabs
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/reui/tabs with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/reui__tabs__default.html
- Local screenshot file: generated-21st-prompts/screenshots/reui__tabs__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div dir="ltr" data-orientation="horizontal" data-slot="tabs" class="w-[375px] text-sm text-muted-foreground"><div role="tablist" aria-orientation="horizontal" data-slot="tabs-list" class="items-center shrink-0 bg-accent p-1 gap-2 rounded-lg grid w-full grid-cols-2" tabindex="0" data-orientation="horizontal" style="outline: none;"><button type="button" role="tab" aria-selected="true" aria-controls="radix-«r0»-content-profile" data-state="active" id="radix-«r0»-trigger-profile" data-slot="tabs-trigger" class="shrink-0 cursor-pointer whitespace-nowrap inline-flex justify-center items-center font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-disabled:pointer-events-none data-disabled:opacity-50 [&amp;_svg]:shrink-0 [&amp;_svg]:text-muted-foreground [&amp;:hover_svg]:text-primary [&amp;[data-state=active]_svg]:text-primary text-muted-foreground data-[state=active]:bg-background hover:text-foreground data-[state=active]:text-foreground data-[state=active]:shadow-xs data-[state=active]:shadow-black/5 gap-2 [&amp;_svg]:size-4 text-sm py-1.5 px-3 rounded-md" tabindex="-1" data-orientation="horizontal" data-radix-collection-item="">Profile</button><button type="button" role="tab" aria-selected="false" aria-controls="radix-«r0»-content-notifications" data-state="inactive" id="radix-«r0»-trigger-notifications" data-slot="tabs-trigger" class="shrink-0 cursor-pointer whitespace-nowrap inline-flex justify-center items-center font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-disabled:pointer-events-none data-disabled:opacity-50 [&amp;_svg]:shrink-0 [&amp;_svg]:text-muted-foreground [&amp;:hover_svg]:text-primary [&amp;[data-state=active]_svg]:text-primary text-muted-foreground data-[state=active]:bg-background hover:text-foreground data-[state=active]:text-foreground data-[state=active]:shadow-xs data-[state=active]:shadow-black/5 gap-2 [&amp;_svg]:size-4 text-sm py-1.5 px-3 rounded-md" tabindex="-1" data-orientation="horizontal" data-radix-collection-item="">Notifications</button></div><div data-state="active" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-profile" id="radix-«r0»-content-profile" tabindex="0" data-slot="tabs-content" class="mt-2.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" style="animation-duration: 0s;">Content for Profile</div><div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-notifications" hidden="" id="radix-«r0»-content-notifications" tabindex="0" data-slot="tabs-content" class="mt-2.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.