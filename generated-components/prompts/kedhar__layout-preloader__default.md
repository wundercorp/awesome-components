# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/kedhar/layout-preloader/default
- Registry URL: https://21st.dev/r/kedhar/layout-preloader
- Author: kedhar
- Component slug: layout-preloader
- Demo slug: default
- Title: layout-preloader
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/kedhar/layout-preloader with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/kedhar__layout-preloader__default.html
- Local screenshot file: generated-21st-prompts/screenshots/kedhar__layout-preloader__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><button class="restart-btn" style="pointer-events: auto; opacity: 1;"><div class="dot-container"><div class="dot"></div><div class="dot"></div><div class="dot"></div><div class="dot"></div></div></button><header class="header"><div class="header-inner"><div class="header-left" style="translate: none; rotate: none; scale: none; transform: translate3d(0px, 0px, 0px); opacity: 1; left: 13.1094px; position: absolute;">SPICE MERIDIAN</div><div class="header-middle" style="translate: none; rotate: none; scale: none; transform: translate3d(0px, 0px, 0px); opacity: 1; left: 499.25px; position: absolute;"><a href="#" class="nav-link">VOYAGES</a><a href="#" class="nav-link">ARCHIVES</a></div><div class="header-right" style="right: 13.1094px; position: absolute;"><div class="social-links" style="translate: none; rotate: none; scale: none; transform: translate3d(0px, 0px, 0px); opacity: 1;"><a href="#">IG</a><a href="#">IN</a></div></div></div></header><div class="text-element" id="text-ve" style="translate: none; rotate: none; scale: none; transform: translate(0%, -50%) translate3d(0px, 0px, 0px); top: 50%; font-size: 3rem; left: 13px;">VE</div><div class="preloader-container" style="overflow: visible; position: relative; height: 300px; width: 400px;"><div class="image-wrapper" style="visibility: visible; clip-path: inset(0% 0px 0px); position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"><img alt="Image 1" src="https://cdn.cosmos.so/5f8d5539-943c-4df5-bae8-8e714633ddd0.jpeg" style="translate: none; rotate: none; scale: none; transform-origin: 50% 50%; transform: translate3d(0px, 0px, 0px) scale(1.2, 1.2);"></div><div class="image-wrapper" style="visibility: visible; clip-path: inset(0% 0px 0px); position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"><img alt="Image 2" src="https://cdn.cosmos.so/0098a074-f8a2-4821-bcb0-433c093ae255.jpeg" style="translate: none; rotate: none; scale: none; transform-origin: 50% 50%; transform: translate3d(0px, 0px, 0px) scale(1.2, 1.2);"></div><div class="image-wrapper" style="visibility: visible; clip-path: inset(0% 0px 0px); position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"><img alt="Image 3" src="https://cdn.cosmos.so/ce9f9fd7-a2a5-476d-9757-481ca01b5861.jpeg" style="translate: none; rotate: none; scale: none; transform-origin: 50% 50%; transform: translate3d(0px, 0px, 0px) scale(1.2, 1.2);"></div><div class="image-wrapper" id="final-image" data-flip-id="auto-2" style="visibility: visible; clip-path: inset(0% 0px 0px); position: fixed; top: 50%; left: 50%; width: 100dvw; height: 100dvh; translate: none; rotate: none; scale: none; transform: translate(-50%, -50%) translate3d(0px, 0px, 0px);"><img alt="Image 4" src="https://cdn.cosmos.so/94579ea4-daee-43f9-b778-84156b731361.jpeg" style="translate: none; rotate: none; scale: none; transform-origin: 50% 50%; transform: translate3d(0px, 0px, 0px);"></div></div><div class="text-element" id="text-la" data-flip-id="auto-1" style="translate: none; rotate: none; scale: none; transform: translate(0%, -50%) translate3d(0px, 0px, 0px); top: 50%; font-size: 3rem; left: auto; right: 13px;">LA</div><div class="big-title" style="opacity: 1;"><div class="title-line"><span style="translate: none; rotate: none; scale: none; transform: translate3d(0px, 0%, 0px);">CELESTIAL</span></div><div class="title-line"><span style="translate: none; rotate: none; scale: none; transform: translate3d(0px, 0%, 0px);">SANDS OF</span></div><div class="title-line"><span style="translate: none; rotate: none; scale: none; transform: translate3d(0px, 0%, 0px);">ETERNITY</span></div></div><div class="grid-overlay" style="opacity: 1;"><div class="grid-overlay-inner"><div class="grid-column" style="border-right-color: rgba(255, 255, 255, 0.2); border-left-color: rgba(255, 255, 255, 0.2);"></div><div class="grid-column" style="border-right-color: rgba(255, 255, 255, 0.2); border-left-color: rgba(255, 255, 255, 0.2);"></div><div class="grid-column" style="border-right-color: rgba(255, 255, 255, 0.2); border-left-color: rgba(255, 255, 255, 0.2);"></div><div class="grid-column" style="border-right-color: rgba(255, 255, 255, 0.2); border-left-color: rgba(255, 255, 255, 0.2);"></div><div class="grid-column" style="border-right-color: rgba(255, 255, 255, 0.2); border-left-color: rgba(255, 255, 255, 0.2);"></div><div class="grid-column" style="border-right-color: rgba(255, 255, 255, 0.2); border-left-color: rgba(255, 255, 255, 0.2);"></div><div class="grid-column" style="border-right-color: rgba(255, 255, 255, 0.2); border-left-color: rgba(255, 255, 255, 0.2);"></div><div class="grid-column" style="border-right-color: rgba(255, 255, 255, 0.2); border-left-color: rgba(255, 255, 255, 0.2);"></div><div class="grid-column" style="border-right-color: rgba(255, 255, 255, 0.2); border-left-color: rgba(255, 255, 255, 0.2);"></div><div class="grid-column" style="border-right-color: rgba(255, 255, 255, 0.2); border-left-color: rgba(255, 255, 255, 0.2);"></div><div class="grid-column" style="border-right-color: rgba(255, 255, 255, 0.2); border-left-color: rgba(255, 255, 255, 0.2);"></div><div class="grid-column" style="border-right-color: rgba(255, 255, 255, 0.2); border-left-color: rgba(255, 255, 255, 0.2);"></div></div></div><footer class="footer" style="translate: none; rotate: none; scale: none; transform: translate3d(0px, 0px, 0px);"><div class="coordinates">51.5074° N, 0.1278° W</div></footer></div></div>
```

## Public registry source files

No public registry source files were available.