# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/thanh/flip-gallery/default
- Registry URL: https://21st.dev/r/thanh/flip-gallery
- Author: thanh
- Component slug: flip-gallery
- Demo slug: default
- Title: flip-gallery
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/thanh/flip-gallery with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/thanh__flip-gallery__default.html
- Local screenshot file: generated-21st-prompts/screenshots/thanh__flip-gallery__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full"><div class="min-h-screen flex items-center justify-center bg-black font-sans"><div class="relative bg-white/10 border border-white/25 p-2" style="--gallery-bg-color: rgba(255 255 255 / 0.075);"><div id="flip-gallery" class="relative w-[240px] h-[400px] md:w-[300px] md:h-[500px] text-center" data-title="Joshua Hibbert" style="perspective: 800px; --title-y: 0; --title-opacity: 1;"><div class="top unite bg-cover bg-no-repeat" style="background-image: url(&quot;https://picsum.photos/id/870/600/1000&quot;);"></div><div class="bottom unite bg-cover bg-no-repeat" style="background-image: url(&quot;https://picsum.photos/id/870/600/1000&quot;);"></div><div class="overlay-top unite bg-cover bg-no-repeat" style="background-image: url(&quot;https://picsum.photos/id/870/600/1000&quot;);"></div><div class="overlay-bottom unite bg-cover bg-no-repeat" style="background-image: url(&quot;https://picsum.photos/id/870/600/1000&quot;);"></div></div><div class="absolute top-full right-0 mt-2 flex gap-2"><button type="button" title="Previous" class="text-white opacity-75 hover:opacity-100 hover:scale-125 transition"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></button><button type="button" title="Next" class="text-white opacity-75 hover:opacity-100 hover:scale-125 transition"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button></div></div><style>
        #flip-gallery::after {
          content: '';
          position: absolute;
          background-color: black;
          width: 100%;
          height: 4px;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }

        #flip-gallery::before {
          content: attr(data-title);
          color: rgba(255 255 255 / 0.75);
          font-size: 0.75rem;
          left: -0.5rem;
          position: absolute;
          top: calc(100% + 1rem);
          line-height: 2;
          opacity: var(--title-opacity, 0);
          transform: translateY(var(--title-y, 0));
          transition: opacity 500ms ease-in-out, transform 500ms ease-in-out;
        }

        #flip-gallery > * {
          position: absolute;
          width: 100%;
          height: 50%;
          overflow: hidden;
          background-size: 240px 400px;
        }

        @media (min-width: 600px) {
          #flip-gallery > * {
            background-size: 300px 500px;
          }
        }

        .top,
        .overlay-top {
          top: 0;
          transform-origin: bottom;
          background-position: top;
        }

        .bottom,
        .overlay-bottom {
          bottom: 0;
          transform-origin: top;
          background-position: bottom;
        }
      </style></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.