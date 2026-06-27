# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/originui/image-crop/image-cropper-6
- Registry URL: https://21st.dev/r/originui/image-crop
- Author: originui
- Component slug: image-crop
- Demo slug: image-cropper-6
- Title: image-crop
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/originui/image-crop with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/originui__image-crop__image-cropper-6.html
- Local screenshot file: generated-21st-prompts/screenshots/originui__image-crop__image-cropper-6.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-background p-8"><div class="flex w-full flex-col gap-4"><div class="relative flex cursor-move touch-none items-center justify-center overflow-hidden focus:outline-none h-96 w-full max-w-2xl" tabindex="0" role="application" aria-label="Interactive image cropper" aria-describedby="«r0»" aria-valuemin="1" aria-valuemax="3" aria-valuenow="1" aria-valuetext="Zoom: 100%" data-slot="cropper"><div id="«r0»" class="sr-only" data-slot="cropper-description">Use mouse wheel or pinch gesture to zoom. Drag with mouse or touch, or use arrow keys to pan the image within the crop area.</div><div style="width: 500.942px; height: 334px; transform: translate3d(0px, 0px, 0px) scale(1); position: absolute; left: calc(50% - 250.471px); top: calc(50% - 167px); will-change: transform;"><img alt="Image being cropped" draggable="false" aria-hidden="true" class="pointer-events-none h-full w-full object-cover" data-slot="cropper-image" src="https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/cropper-07_scsejv.jpg"></div><div aria-hidden="true" class="pointer-events-none absolute border-3 border-white shadow-[0_0_0_9999px_rgba(0,0,0,0.3)] in-[[data-slot=cropper]:focus-visible]:ring-[3px] in-[[data-slot=cropper]:focus-visible]:ring-white/50" data-slot="cropper-crop-area" style="width: 334px; height: 334px;"></div></div><div class="mx-auto flex w-full max-w-80 items-center gap-1"><span dir="ltr" data-orientation="horizontal" aria-disabled="false" class="relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col data-[disabled]:opacity-50" aria-label="Zoom slider" style="--radix-slider-thumb-transform: translateX(-50%);"><span data-orientation="horizontal" class="relative grow overflow-hidden rounded-full bg-secondary data-[orientation=horizontal]:h-2 data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-2"><span data-orientation="horizontal" class="absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full" style="left: 0%; right: 100%;"></span></span><span style="transform: var(--radix-slider-thumb-transform); position: absolute; left: calc(0% + 10px);"><span role="slider" aria-valuemin="1" aria-valuemax="3" aria-orientation="horizontal" data-orientation="horizontal" tabindex="0" class="block h-5 w-5 rounded-full border-2 border-primary bg-background transition-colors focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-ring/40 data-[disabled]:cursor-not-allowed" data-radix-collection-item="" aria-valuenow="1" style=""></span></span></span><output class="block w-10 shrink-0 text-right text-sm font-medium tabular-nums">1x</output></div></div><p aria-live="polite" role="region" class="text-muted-foreground mt-2 text-xs">Cropper with zoom slider ∙ <a href="https://github.com/origin-space/image-cropper" class="hover:text-foreground underline" target="_blank">API</a></p></div></div></div></div>
```

## Public registry source files

No public registry source files were available.