# Build Image Uploader in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Image Uploader screenshot](screenshot.png)

## Component

- Author group: `lavikatiyar`
- Component: `image-uploader`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: lavikatiyar
- Component slug: image-uploader
- Demo slug: default
- Title: image-uploader
- Description: 

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

No reference metadata available.

## Rendered DOM snapshot

This is the rendered demo HTML extracted from the live preview. Use it to verify structure, class names, visible content, and layout.

```html
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-2xl mx-auto p-4 sm:p-6 lg:p-8"><div class="space-y-2 mb-6"><h1 class="text-2xl font-bold tracking-tight">Image Uploader</h1><p class="text-muted-foreground">A component to upload and preview images with animations.</p></div><div class="space-y-4"><div class="border-2 border-dashed rounded-lg p-8 text-center transition-colors duration-300 border-muted-foreground/30 bg-transparent" role="button" aria-label="Image uploader dropzone" tabindex="0"><input multiple="" accept="image/jpeg, image/png, image/webp" class="hidden" type="file"><div class="flex flex-col items-center gap-4"><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-14 w-14 rounded-full" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload h-6 w-6" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg></button><div><p class="font-medium">Choose images or drag &amp; drop it here</p><p class="text-sm text-muted-foreground">JPG, JPEG, PNG and WEBP. Max 4MB.</p></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
