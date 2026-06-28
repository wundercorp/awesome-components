# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/tonyzebastian/image-spotlight/default
- Registry URL: https://21st.dev/r/tonyzebastian/image-spotlight
- Author: tonyzebastian
- Component slug: image-spotlight
- Demo slug: default
- Title: image-spotlight
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/tonyzebastian/image-spotlight with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/tonyzebastian__image-spotlight__default.html
- Local screenshot file: generated-21st-prompts/screenshots/tonyzebastian__image-spotlight__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><main class="w-full p-6"><div class="flex justify-center gap-2"><div class="flex items-center justify-center"><div class="relative overflow-hidden cursor-none rounded-lg shadow-md border" role="img" aria-label="Portrait image with spotlight effect" aria-describedby="spotlight-instructions" tabindex="0" style="width: 300px; height: 400px; max-width: 100%; --mouse-x: 50%; --mouse-y: 50%; --spotlight-size: 80px; --overlay-opacity: 0.6; transform: perspective(1000px) rotateX(0deg) rotateY(0deg); transform-style: preserve-3d; transition: transform 0.2s ease-out;"><div id="spotlight-instructions" class="sr-only">Interactive image with mouse spotlight effect. Move your mouse over the image to reveal different areas.</div><img alt="Portrait image with spotlight effect" class="absolute inset-0 w-full h-full object-cover" draggable="false" src="https://res.cloudinary.com/dctgknnt7/image/upload/v1758731403/1_d8uozd.jpg" style="filter: blur(5px);"><img alt="" class="absolute inset-0 w-full h-full object-cover" draggable="false" src="https://res.cloudinary.com/dctgknnt7/image/upload/v1758731403/1_d8uozd.jpg" style="mask-image: radial-gradient(
              circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
              black 32px,
              transparent 128px
            ); z-index: 2;"><div class="absolute inset-0 bg-black will-change-[mask-position] transition-all duration-100 ease-out" style="opacity: 0.6; mask-image: radial-gradient(
              circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
              transparent 32px,
              black 128px
            ); z-index: 10;"></div></div></div><div class="flex items-center justify-center"><div class="relative overflow-hidden cursor-none rounded-lg shadow-md border" role="img" aria-label="Portrait image with spotlight effect" aria-describedby="spotlight-instructions" tabindex="0" style="width: 300px; height: 400px; max-width: 100%; --mouse-x: 50%; --mouse-y: 50%; --spotlight-size: 80px; --overlay-opacity: 0.6; transform: perspective(1000px) rotateX(0deg) rotateY(0deg); transform-style: preserve-3d; transition: transform 0.2s ease-out;"><div id="spotlight-instructions" class="sr-only">Interactive image with mouse spotlight effect. Move your mouse over the image to reveal different areas.</div><img alt="Portrait image with spotlight effect" class="absolute inset-0 w-full h-full object-cover" draggable="false" src="https://res.cloudinary.com/dctgknnt7/image/upload/v1758731402/2_hme6yu.jpg" style="filter: blur(5px);"><img alt="" class="absolute inset-0 w-full h-full object-cover" draggable="false" src="https://res.cloudinary.com/dctgknnt7/image/upload/v1758731402/2_hme6yu.jpg" style="mask-image: radial-gradient(
              circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
              black 32px,
              transparent 128px
            ); z-index: 2;"><div class="absolute inset-0 bg-black will-change-[mask-position] transition-all duration-100 ease-out" style="opacity: 0.6; mask-image: radial-gradient(
              circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
              transparent 32px,
              black 128px
            ); z-index: 10;"></div></div></div><div class="flex items-center justify-center"><div class="relative overflow-hidden cursor-none rounded-lg shadow-md border" role="img" aria-label="Portrait image with spotlight effect" aria-describedby="spotlight-instructions" tabindex="0" style="width: 300px; height: 400px; max-width: 100%; --mouse-x: 50%; --mouse-y: 50%; --spotlight-size: 80px; --overlay-opacity: 0.6; transform: perspective(1000px) rotateX(0deg) rotateY(0deg); transform-style: preserve-3d; transition: transform 0.2s ease-out;"><div id="spotlight-instructions" class="sr-only">Interactive image with mouse spotlight effect. Move your mouse over the image to reveal different areas.</div><img alt="Portrait image with spotlight effect" class="absolute inset-0 w-full h-full object-cover" draggable="false" src="https://res.cloudinary.com/dctgknnt7/image/upload/v1758731402/3_nfdtim.jpg" style="filter: blur(5px);"><img alt="" class="absolute inset-0 w-full h-full object-cover" draggable="false" src="https://res.cloudinary.com/dctgknnt7/image/upload/v1758731402/3_nfdtim.jpg" style="mask-image: radial-gradient(
              circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
              black 32px,
              transparent 128px
            ); z-index: 2;"><div class="absolute inset-0 bg-black will-change-[mask-position] transition-all duration-100 ease-out" style="opacity: 0.6; mask-image: radial-gradient(
              circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
              transparent 32px,
              black 128px
            ); z-index: 10;"></div></div></div></div></main></div></div></div>
```

## Public registry source files

No public registry source files were available.