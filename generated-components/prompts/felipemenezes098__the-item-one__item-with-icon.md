# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/felipemenezes098/the-item-one/item-with-icon
- Registry URL: https://21st.dev/r/felipemenezes098/the-item-one
- Author: felipemenezes098
- Component slug: the-item-one
- Demo slug: item-with-icon
- Title: the-item-one
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/felipemenezes098/the-item-one with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/felipemenezes098__the-item-one__item-with-icon.html
- Local screenshot file: generated-21st-prompts/screenshots/felipemenezes098__the-item-one__item-with-icon.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div data-slot="item" data-variant="outline" data-size="default" class="group/item flex items-center border text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border-border p-4 gap-4 w-full max-w-md"><div data-slot="item-media" data-variant="icon" class="flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&amp;_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5 size-8 border rounded-sm bg-muted [&amp;_svg:not([class*='size-'])]:size-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell" aria-hidden="true"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg></div><div data-slot="item-content" class="flex flex-1 flex-col gap-1 [&amp;+[data-slot=item-content]]:flex-none"><div data-slot="item-title" class="flex w-fit items-center gap-2 text-sm leading-snug font-medium">Notifications</div><p data-slot="item-description" class="text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance [&amp;&gt;a:hover]:text-primary [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4">Manage how and when you get notified.</p></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.