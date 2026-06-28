# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/shadcn/item/image
- Registry URL: https://21st.dev/r/shadcn/item
- Author: shadcn
- Component slug: item
- Demo slug: image
- Title: item
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/shadcn/item with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/shadcn__item__image.html
- Local screenshot file: generated-21st-prompts/screenshots/shadcn__item__image.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex w-full max-w-md flex-col gap-6"><div role="list" data-slot="item-group" class="group/item-group flex flex-col gap-4"><a href="#" data-slot="item" data-variant="outline" data-size="default" class="group/item flex items-center border text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border-border p-4 gap-4" role="listitem"><div data-slot="item-media" data-variant="image" class="flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&amp;_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5 size-10 rounded-sm overflow-hidden [&amp;_img]:size-full [&amp;_img]:object-cover"><img alt="Midnight City Lights" width="32" height="32" class="object-cover grayscale" src="https://avatar.vercel.sh/Midnight City Lights"></div><div data-slot="item-content" class="flex flex-1 flex-col gap-1 [&amp;+[data-slot=item-content]]:flex-none"><div data-slot="item-title" class="w-fit items-center gap-2 text-sm leading-snug font-medium line-clamp-1">Midnight City Lights - <span class="text-muted-foreground">Electric Nights</span></div><p data-slot="item-description" class="text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance [&amp;&gt;a:hover]:text-primary [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4">Neon Dreams</p></div><div data-slot="item-content" class="flex flex-col gap-1 [&amp;+[data-slot=item-content]]:flex-none flex-none text-center"><p data-slot="item-description" class="text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance [&amp;&gt;a:hover]:text-primary [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4">3:45</p></div></a><a href="#" data-slot="item" data-variant="outline" data-size="default" class="group/item flex items-center border text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border-border p-4 gap-4" role="listitem"><div data-slot="item-media" data-variant="image" class="flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&amp;_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5 size-10 rounded-sm overflow-hidden [&amp;_img]:size-full [&amp;_img]:object-cover"><img alt="Coffee Shop Conversations" width="32" height="32" class="object-cover grayscale" src="https://avatar.vercel.sh/Coffee Shop Conversations"></div><div data-slot="item-content" class="flex flex-1 flex-col gap-1 [&amp;+[data-slot=item-content]]:flex-none"><div data-slot="item-title" class="w-fit items-center gap-2 text-sm leading-snug font-medium line-clamp-1">Coffee Shop Conversations - <span class="text-muted-foreground">Urban Stories</span></div><p data-slot="item-description" class="text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance [&amp;&gt;a:hover]:text-primary [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4">The Morning Brew</p></div><div data-slot="item-content" class="flex flex-col gap-1 [&amp;+[data-slot=item-content]]:flex-none flex-none text-center"><p data-slot="item-description" class="text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance [&amp;&gt;a:hover]:text-primary [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4">4:05</p></div></a><a href="#" data-slot="item" data-variant="outline" data-size="default" class="group/item flex items-center border text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border-border p-4 gap-4" role="listitem"><div data-slot="item-media" data-variant="image" class="flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&amp;_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5 size-10 rounded-sm overflow-hidden [&amp;_img]:size-full [&amp;_img]:object-cover"><img alt="Digital Rain" width="32" height="32" class="object-cover grayscale" src="https://avatar.vercel.sh/Digital Rain"></div><div data-slot="item-content" class="flex flex-1 flex-col gap-1 [&amp;+[data-slot=item-content]]:flex-none"><div data-slot="item-title" class="w-fit items-center gap-2 text-sm leading-snug font-medium line-clamp-1">Digital Rain - <span class="text-muted-foreground">Binary Beats</span></div><p data-slot="item-description" class="text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance [&amp;&gt;a:hover]:text-primary [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4">Cyber Symphony</p></div><div data-slot="item-content" class="flex flex-col gap-1 [&amp;+[data-slot=item-content]]:flex-none flex-none text-center"><p data-slot="item-description" class="text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance [&amp;&gt;a:hover]:text-primary [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4">3:30</p></div></a></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.