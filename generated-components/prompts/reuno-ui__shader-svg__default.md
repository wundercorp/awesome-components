# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/reuno-ui/shader-svg/default
- Registry URL: https://21st.dev/r/reuno-ui/shader-svg
- Author: reuno-ui
- Component slug: shader-svg
- Demo slug: default
- Title: shader-svg
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/reuno-ui/shader-svg with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/reuno-ui__shader-svg__default.html
- Local screenshot file: generated-21st-prompts/screenshots/reuno-ui__shader-svg__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative w-full max-w-sm mx-auto p-8 rounded-lg" style="transform-origin: center top; transform: translateY(-3.76282px) scaleY(1.03763);"><svg xmlns="http://www.w3.org/2000/svg" width="231" height="289" viewBox="0 0 231 289" class="w-full h-auto"><defs><clipPath id="shapeClip"><path d="M230.809 115.385V249.411C230.809 269.923 214.985 287.282 194.495 288.411C184.544 288.949 175.364 285.718 168.26 280C159.746 273.154 147.769 273.461 139.178 280.23C132.638 285.384 124.381 288.462 115.379 288.462C106.377 288.462 98.1451 285.384 91.6055 280.23C82.912 273.385 70.9353 273.385 62.2415 280.23C55.7532 285.334 47.598 288.411 38.7246 288.462C17.4132 288.615 0 270.667 0 249.359V115.385C0 51.6667 51.6756 0 115.404 0C179.134 0 230.809 51.6667 230.809 115.385Z"></path></clipPath></defs><foreignObject width="231" height="289" clip-path="url(#shapeClip)"><div class="w-full h-full"><div class="w-full h-full" data-paper-shader=""><canvas width="671" height="839"></canvas></div></div></foreignObject><ellipse rx="20" ry="30" fill="currentColor" class="animate-blink" cx="72" cy="112"></ellipse><ellipse rx="20" ry="30" fill="currentColor" class="animate-blink" cx="142" cy="112"></ellipse></svg><style>
        .animate-blink {
          animation: blink 3s infinite ease-in-out;
        }

        @keyframes blink {
          0%,
          90%,
          100% {
            ry: 30;
          }
          95% {
            ry: 3;
          }
        }
      </style></div></div></div></div>
```

## Public registry source files

No public registry source files were available.