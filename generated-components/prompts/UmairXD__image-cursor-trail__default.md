# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/UmairXD/image-cursor-trail/default
- Registry URL: https://21st.dev/r/UmairXD/image-cursor-trail
- Author: UmairXD
- Component slug: image-cursor-trail
- Demo slug: default
- Title: image-cursor-trail
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/UmairXD/image-cursor-trail with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/UmairXD__image-cursor-trail__default.html
- Local screenshot file: generated-21st-prompts/screenshots/UmairXD__image-cursor-trail__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><section class="mx-auto w-full max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-t-[44px]"><div class="relative mx-auto flex w-full flex-col rounded-[24px] border border-black/5 bg-neutral-800/5 shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px]"><section class="relative grid h-[600px] w-full place-content-center overflow-hidden rounded-lg max-w-4xl rounded-3xl"><img class="opacity:0 data-[status='active']:ease-out-expo absolute -translate-x-[50%] -translate-y-[50%] scale-0 rounded-3xl object-cover transition-transform duration-300 data-[status='active']:scale-100 data-[status='active']:opacity-100 data-[status='active']:duration-500 sm:w-40 w-28 sm:h-48 h-36" data-index="0" data-status="inactive" alt="image-0" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&amp;w=1200&amp;auto=format"><img class="opacity:0 data-[status='active']:ease-out-expo absolute -translate-x-[50%] -translate-y-[50%] scale-0 rounded-3xl object-cover transition-transform duration-300 data-[status='active']:scale-100 data-[status='active']:opacity-100 data-[status='active']:duration-500 sm:w-40 w-28 sm:h-48 h-36" data-index="1" data-status="inactive" alt="image-1" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&amp;w=1200&amp;auto=format"><img class="opacity:0 data-[status='active']:ease-out-expo absolute -translate-x-[50%] -translate-y-[50%] scale-0 rounded-3xl object-cover transition-transform duration-300 data-[status='active']:scale-100 data-[status='active']:opacity-100 data-[status='active']:duration-500 sm:w-40 w-28 sm:h-48 h-36" data-index="2" data-status="inactive" alt="image-2" src="https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&amp;w=1200&amp;auto=format"><img class="opacity:0 data-[status='active']:ease-out-expo absolute -translate-x-[50%] -translate-y-[50%] scale-0 rounded-3xl object-cover transition-transform duration-300 data-[status='active']:scale-100 data-[status='active']:opacity-100 data-[status='active']:duration-500 sm:w-40 w-28 sm:h-48 h-36" data-index="3" data-status="inactive" alt="image-3" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&amp;w=1200&amp;auto=format"><img class="opacity:0 data-[status='active']:ease-out-expo absolute -translate-x-[50%] -translate-y-[50%] scale-0 rounded-3xl object-cover transition-transform duration-300 data-[status='active']:scale-100 data-[status='active']:opacity-100 data-[status='active']:duration-500 sm:w-40 w-28 sm:h-48 h-36" data-index="4" data-status="inactive" alt="image-4" src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&amp;w=1200&amp;auto=format"><img class="opacity:0 data-[status='active']:ease-out-expo absolute -translate-x-[50%] -translate-y-[50%] scale-0 rounded-3xl object-cover transition-transform duration-300 data-[status='active']:scale-100 data-[status='active']:opacity-100 data-[status='active']:duration-500 sm:w-40 w-28 sm:h-48 h-36" data-index="5" data-status="inactive" alt="image-5" src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&amp;w=1200&amp;auto=format"><img class="opacity:0 data-[status='active']:ease-out-expo absolute -translate-x-[50%] -translate-y-[50%] scale-0 rounded-3xl object-cover transition-transform duration-300 data-[status='active']:scale-100 data-[status='active']:opacity-100 data-[status='active']:duration-500 sm:w-40 w-28 sm:h-48 h-36" data-index="6" data-status="inactive" alt="image-6" src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&amp;w=1200&amp;auto=format"><img class="opacity:0 data-[status='active']:ease-out-expo absolute -translate-x-[50%] -translate-y-[50%] scale-0 rounded-3xl object-cover transition-transform duration-300 data-[status='active']:scale-100 data-[status='active']:opacity-100 data-[status='active']:duration-500 sm:w-40 w-28 sm:h-48 h-36" data-index="7" data-status="inactive" alt="image-7" src="https://images.unsplash.com/photo-1465101162946-4377e57745c3?q=80&amp;w=1200&amp;auto=format"><img class="opacity:0 data-[status='active']:ease-out-expo absolute -translate-x-[50%] -translate-y-[50%] scale-0 rounded-3xl object-cover transition-transform duration-300 data-[status='active']:scale-100 data-[status='active']:opacity-100 data-[status='active']:duration-500 sm:w-40 w-28 sm:h-48 h-36" data-index="8" data-status="inactive" alt="image-8" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1200&amp;auto=format"></section></div></section></div></div></div>
```

## Public registry source files

No public registry source files were available.