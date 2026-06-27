# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/base-ui/input-1/form
- Registry URL: https://21st.dev/r/base-ui/input-1
- Author: base-ui
- Component slug: input-1
- Demo slug: form
- Title: input-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/base-ui/input-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/base-ui__input-1__form.html
- Local screenshot file: generated-21st-prompts/screenshots/base-ui__input-1__form.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><form novalidate="" class="flex w-full max-w-64 flex-col gap-4"><div class="flex flex-col items-start gap-1" data-filled=""><label class="text-sm font-medium text-gray-900" data-filled="" for="base-ui-«r1»" id="base-ui-«r0»">Homepage</label><input id="base-ui-«r1»" required="" placeholder="https://example.com" pattern="https?://.*" class="h-10 w-full rounded-md border border-gray-200 pl-3.5 text-base text-gray-900 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800" type="url" value="https://example.com" name="url" data-filled="" aria-labelledby="base-ui-«r0»"></div><button type="submit" class="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400">Submit</button></form></div></div></div>
```

## Public registry source files

No public registry source files were available.