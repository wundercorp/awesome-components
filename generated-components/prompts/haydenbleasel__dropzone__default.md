# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/haydenbleasel/dropzone/default
- Registry URL: https://21st.dev/r/haydenbleasel/dropzone
- Author: haydenbleasel
- Component slug: dropzone
- Demo slug: default
- Title: dropzone
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/haydenbleasel/dropzone with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/haydenbleasel__dropzone__default.html
- Local screenshot file: generated-21st-prompts/screenshots/haydenbleasel__dropzone__default.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="flex h-screen w-full max-w-[500px] items-center justify-center p-8"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground relative h-auto w-full flex-col overflow-hidden p-8" type="button" role="presentation" tabindex="0"><input accept="image/*" multiple="" tabindex="-1" type="file" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(50%); height: 1px; margin: 0px -1px -1px 0px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap;"><div class="flex size-8 items-center justify-center rounded-md bg-muted text-muted-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload" aria-hidden="true"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg></div><p class="my-2 w-full truncate font-medium text-sm">Upload files</p><p class="w-full truncate text-muted-foreground text-xs">Drag and drop or click to upload</p><p class="text-muted-foreground text-xs">Accepts image/* between 1.00KB and 10.00MB.</p></button></div></div></div></div>
```

## Public registry source files

No public registry source files were available.