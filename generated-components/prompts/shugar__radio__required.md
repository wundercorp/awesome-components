# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/shugar/radio/required
- Registry URL: https://21st.dev/r/shugar/radio
- Author: shugar
- Component slug: radio
- Demo slug: required
- Title: radio
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/shugar/radio with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/shugar__radio__required.html
- Local screenshot file: generated-21st-prompts/screenshots/shugar__radio__required.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><form class="flex flex-col gap-6 items-start"><span class="sr-only">Required Radio Example</span><div class="flex flex-col gap-4"><label class="flex items-center gap-2 cursor-pointer font-sans text-[13px] text-gray-1000 leading-3 group"><input class="absolute w-4 h-4 opacity-0" required="" type="radio" value="one" name="radio-group"><span class="w-4 h-4 bg-background-100 relative border rounded-full duration-200 after:duration-200 flex items-center justify-center after:absolute after:top-1/2 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:rounded-full after:bg-gray-1000 border-gray-700 after:w-0 after:h-0 group-hover:bg-gray-200 group-hover:border-gray-900" aria-hidden="true"></span>Option 1</label><label class="flex items-center gap-2 cursor-pointer font-sans text-[13px] text-gray-1000 leading-3 group"><input class="absolute w-4 h-4 opacity-0" required="" type="radio" value="two" name="radio-group"><span class="w-4 h-4 bg-background-100 relative border rounded-full duration-200 after:duration-200 flex items-center justify-center after:absolute after:top-1/2 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:rounded-full after:bg-gray-1000 border-gray-700 after:w-0 after:h-0 group-hover:bg-gray-200 group-hover:border-gray-900" aria-hidden="true"></span>Option 2</label></div><button type="submit">Submit</button></form></div></div></div>
```

## Public registry source files

No public registry source files were available.