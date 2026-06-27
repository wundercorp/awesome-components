# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/originui/image-crop/image-cropper-2
- Registry URL: https://21st.dev/r/originui/image-crop
- Author: originui
- Component slug: image-crop
- Demo slug: image-cropper-2
- Title: image-crop
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/originui/image-crop with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/originui__image-crop__image-cropper-2.html
- Local screenshot file: generated-21st-prompts/screenshots/originui__image-crop__image-cropper-2.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-background p-8"><div class="relative flex cursor-move touch-none items-center justify-center overflow-hidden focus:outline-none h-96 w-full max-w-2xl" tabindex="0" role="application" aria-label="Interactive image cropper" aria-describedby="«r0»" aria-valuemin="1" aria-valuemax="3" aria-valuenow="1" aria-valuetext="Zoom: 100%" data-slot="cropper"><div id="«r0»" class="sr-only" data-slot="cropper-description">Use mouse wheel or pinch gesture to zoom. Drag with mouse or touch, or use arrow keys to pan the image within the crop area.</div><div style="width: 501px; height: 334px; transform: translate3d(0px, 0px, 0px) scale(1); position: absolute; left: calc(50% - 250.5px); top: calc(50% - 167px); will-change: transform;"><img alt="Image being cropped" draggable="false" aria-hidden="true" class="pointer-events-none h-full w-full object-cover" data-slot="cropper-image" src="https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/cropper-03_uym8r0.jpg"></div><div aria-hidden="true" class="pointer-events-none absolute border-3 shadow-[0_0_0_9999px_rgba(0,0,0,0.3)] in-[[data-slot=cropper]:focus-visible]:ring-[3px] in-[[data-slot=cropper]:focus-visible]:ring-white/50 border-blue-500" data-slot="cropper-crop-area" style="width: 334px; height: 334px;"></div></div><p aria-live="polite" role="region" class="text-muted-foreground mt-2 text-xs">Cropper with custom crop area color ∙ <a href="https://github.com/origin-space/image-cropper" class="hover:text-foreground underline" target="_blank">API</a></p></div></div></div></div>
```

## Public registry source files

No public registry source files were available.