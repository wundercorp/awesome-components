# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/magicui/progressive-blur/default
- Registry URL: https://21st.dev/r/magicui/progressive-blur
- Author: magicui
- Component slug: progressive-blur
- Demo slug: default
- Title: progressive-blur
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/magicui/progressive-blur with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/magicui__progressive-blur__default.html
- Local screenshot file: generated-21st-prompts/screenshots/magicui__progressive-blur__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative w-full border rounded-xl"><div dir="ltr" class="relative h-[400px] overflow-hidden" style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"><style>[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}</style><div data-radix-scroll-area-viewport="" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;"><div style="min-width: 100%; display: table;"><div class="flex flex-col gap-2 p-4"><div class="flex h-20 w-full items-center justify-center rounded-xl bg-card border">0</div><div class="flex h-20 w-full items-center justify-center rounded-xl bg-card border">1</div><div class="flex h-20 w-full items-center justify-center rounded-xl bg-card border">2</div><div class="flex h-20 w-full items-center justify-center rounded-xl bg-card border">3</div><div class="flex h-20 w-full items-center justify-center rounded-xl bg-card border">4</div><div class="flex h-20 w-full items-center justify-center rounded-xl bg-card border">5</div><div class="flex h-20 w-full items-center justify-center rounded-xl bg-card border">6</div><div class="flex h-20 w-full items-center justify-center rounded-xl bg-card border">7</div><div class="flex h-20 w-full items-center justify-center rounded-xl bg-card border">8</div><div class="flex h-20 w-full items-center justify-center rounded-xl bg-card border">9</div><div class="flex h-20 w-full items-center justify-center rounded-xl bg-card border">10</div><div class="flex h-20 w-full items-center justify-center rounded-xl bg-card border">11</div><div class="flex h-20 w-full items-center justify-center rounded-xl bg-card border">12</div><div class="flex h-20 w-full items-center justify-center rounded-xl bg-card border">13</div><div class="flex h-20 w-full items-center justify-center rounded-xl bg-card border">14</div><div class="flex h-20 w-full items-center justify-center rounded-xl bg-card border">15</div><div class="flex h-20 w-full items-center justify-center rounded-xl bg-card border">16</div><div class="flex h-20 w-full items-center justify-center rounded-xl bg-card border">17</div><div class="flex h-20 w-full items-center justify-center rounded-xl bg-card border">18</div><div class="flex h-20 w-full items-center justify-center rounded-xl bg-card border">19</div></div><div class="gradient-blur pointer-events-none absolute z-10 inset-x-0 bottom-0" style="height: 40%;"><div class="absolute inset-0" style="z-index: 1; backdrop-filter: blur(0.5px); mask-image: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0) 37.5%);"></div><div class="absolute inset-0" style="z-index: 2; backdrop-filter: blur(1px); mask-image: linear-gradient(rgba(0, 0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgba(0, 0, 0, 0) 50%);"></div><div class="absolute inset-0" style="z-index: 3; backdrop-filter: blur(2px); mask-image: linear-gradient(rgba(0, 0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 62.5%);"></div><div class="absolute inset-0" style="z-index: 4; backdrop-filter: blur(4px); mask-image: linear-gradient(rgba(0, 0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgba(0, 0, 0, 0) 75%);"></div><div class="absolute inset-0" style="z-index: 5; backdrop-filter: blur(8px); mask-image: linear-gradient(rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 87.5%);"></div><div class="absolute inset-0" style="z-index: 6; backdrop-filter: blur(16px); mask-image: linear-gradient(rgba(0, 0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%);"></div><div class="absolute inset-0" style="z-index: 7; backdrop-filter: blur(32px); mask-image: linear-gradient(rgba(0, 0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgb(0, 0, 0) 100%, rgba(0, 0, 0, 0) 112.5%);"></div><div class="absolute inset-0" style="z-index: 8; backdrop-filter: blur(64px); mask-image: linear-gradient(rgba(0, 0, 0, 0) 87.5%, rgb(0, 0, 0) 100%);"></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.