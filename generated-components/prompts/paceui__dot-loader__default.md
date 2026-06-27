# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/paceui/dot-loader/default
- Registry URL: https://21st.dev/r/paceui/dot-loader
- Author: paceui
- Component slug: dot-loader
- Demo slug: default
- Title: dot-loader
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/paceui/dot-loader with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/paceui__dot-loader__default.html
- Local screenshot file: generated-21st-prompts/screenshots/paceui__dot-loader__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center gap-5 rounded bg-black px-4 py-3 text-white"><div class=""><div class="grid w-fit grid-cols-7 gap-0.5"><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5 active"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5 active"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5 active"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5 active"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5 active"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5 active"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5 active"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div><div class="rounded-sm bg-white/15 [&amp;.active]:bg-white size-1.5"></div></div></div><p class="font-medium">Playing</p></div></div></div></div>
```

## Public registry source files

No public registry source files were available.