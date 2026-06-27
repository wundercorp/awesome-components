# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/aliimam/gooey-marquee/default
- Registry URL: https://21st.dev/r/aliimam/gooey-marquee
- Author: aliimam
- Component slug: gooey-marquee
- Demo slug: default
- Title: gooey-marquee
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/aliimam/gooey-marquee with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/aliimam__gooey-marquee__default.html
- Local screenshot file: generated-21st-prompts/screenshots/aliimam__gooey-marquee__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen flex items-center"><div class="max-w-2xl mx-auto px-4 py-12"><div class="relative w-full h-32 text-8xl flex items-center justify-center overflow-hidden "><div class="absolute inset-0 hidden dark:flex items-center justify-center" style="background-color: black; background-image: linear-gradient(to right, white, 1rem, transparent 50%), linear-gradient(to left, white, 1rem, transparent 50%); filter: contrast(15);"><p class="absolute min-w-full whitespace-nowrap animate-marquee" style="filter: blur(0.07em); animation: 16s linear 0s infinite normal none running marquee;">Design creates culture.</p></div><div class="absolute dark:hidden inset-0 flex items-center justify-center" style="background-color: white; background-image: linear-gradient(to right, black, 1rem, transparent 50%), linear-gradient(to left, black, 1rem, transparent 50%); filter: contrast(15);"><p class="absolute min-w-full whitespace-nowrap animate-marquee" style="filter: blur(0.07em); animation: 16s linear 0s infinite normal none running marquee;">Design creates culture.</p></div><div class="absolute inset-0 flex items-center justify-center"><p class="absolute min-w-full whitespace-nowrap animate-marquee" style="animation: 16s linear 0s infinite normal none running marquee;">Design creates culture.</p></div><style>
        @keyframes marquee {
          from { transform: translateX(70%); }
          to { transform: translateX(-70%); }
        }
        .animate-marquee {
          animation: marquee 16s infinite linear;
        }
      </style></div><p class="text-xl mt-8 text-primary/60">The component uses two text layers - a blurred background layer with high contrast filtering and linear gradients for the gooey effect, and a clean foreground layer for readability.</p></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.