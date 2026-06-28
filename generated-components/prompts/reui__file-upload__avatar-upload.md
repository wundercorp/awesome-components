# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/reui/file-upload/avatar-upload
- Registry URL: https://21st.dev/r/reui/file-upload
- Author: reui
- Component slug: file-upload
- Demo slug: avatar-upload
- Title: file-upload
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/reui/file-upload with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/reui__file-upload__avatar-upload.html
- Local screenshot file: generated-21st-prompts/screenshots/reui__file-upload__avatar-upload.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col items-center gap-4"><div class="relative"><div class="group/avatar relative h-24 w-24 cursor-pointer overflow-hidden rounded-full border border-dashed transition-colors border-muted-foreground/25 hover:border-muted-foreground/20"><input accept="image/*" class="sr-only" type="file"><div class="flex h-full w-full items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user size-6 text-muted-foreground" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div></div></div><div class="text-center space-y-0.5"><p class="text-sm font-medium">Upload avatar</p><p class="text-xs text-muted-foreground">PNG, JPG up to 2 MB</p></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.