# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hextaui/file-upload/default
- Registry URL: https://21st.dev/r/hextaui/file-upload
- Author: hextaui
- Component slug: file-upload
- Demo slug: default
- Title: file-upload
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hextaui/file-upload with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hextaui__file-upload__default.html
- Local screenshot file: generated-21st-prompts/screenshots/hextaui__file-upload__default.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><main class="min-h-screen flex items-center justify-center p-4"><div class="w-full max-w-3xl mx-auto p-4 md:p-6"><div class="relative rounded-2xl p-8 md:p-12 text-center cursor-pointer bg-secondary/50 border border-primary/10 shadow-sm hover:shadow-md backdrop-blur group" style="border-color: rgba(255, 255, 255, 0.063); transform: none;"><div class="flex flex-col items-center gap-5"><div class="relative" style="transform: none;"><div class="absolute -inset-4 bg-blue-400/10 rounded-full blur-md" style="display: none; transform: none; opacity: 1;"></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-upload w-16 h-16 md:w-20 md:h-20 drop-shadow-sm text-zinc-700 dark:text-zinc-300 group-hover:text-blue-500 transition-colors duration-300" aria-hidden="true"><path d="M12 13v8"></path><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17 4-4 4 4"></path></svg></div><div class="space-y-2"><h3 class="text-xl md:text-2xl font-semibold text-zinc-800 dark:text-zinc-100">Upload your files</h3><p class="text-zinc-600 dark:text-zinc-300 md:text-lg max-w-md mx-auto">Drag &amp; drop files here, or <span class="text-blue-500 font-medium">browse</span></p><p class="text-sm text-zinc-500 dark:text-zinc-400">Supports images, documents, videos, and more</p></div><input multiple="" hidden="" accept="image/*,application/pdf,video/*,audio/*,text/*,application/zip" type="file"></div></div><div class="mt-8"><div class="flex flex-col gap-3 overflow-y-auto pr-2"></div></div></div></main></div></div></div>
```

## Public registry source files

No public registry source files were available.