# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/arunjdass/file-upload/default
- Registry URL: https://21st.dev/r/arunjdass/file-upload
- Author: arunjdass
- Component slug: file-upload
- Demo slug: default
- Title: file-upload
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/arunjdass/file-upload with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/arunjdass__file-upload__default.html
- Local screenshot file: generated-21st-prompts/screenshots/arunjdass__file-upload__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-md p-6 mx-auto bg-card dark:bg-card text-card-foreground rounded-xl shadow-sm border border-border font-sans transition-colors duration-200"><div class="text-center mb-6"><h2 class="text-xl font-semibold text-foreground">Upload your files</h2><p class="text-sm text-muted-foreground mt-1">PNG, JPG, PDF up to 10MB</p></div><form class="relative"><input multiple="" class="hidden" type="file"><div class="flex flex-col items-center justify-center w-full h-48 rounded-lg border-2 border-dashed transition-colors duration-200 ease-in-out cursor-pointer
            border-border bg-muted/50 hover:bg-muted dark:bg-muted/10 dark:hover:bg-muted/20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-upload w-10 h-10 mb-3 text-muted-foreground" aria-hidden="true"><path d="M12 13v8"></path><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17 4-4 4 4"></path></svg><p class="text-sm text-foreground font-medium">Drag &amp; drop files or <span class="text-primary hover:text-primary/80 transition-colors">Browse</span></p></div></form></div></div></div></div>
```

## Public registry source files

No public registry source files were available.