# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/uniquesonu/glass-ui/default
- Registry URL: https://21st.dev/r/uniquesonu/glass-ui
- Author: uniquesonu
- Component slug: glass-ui
- Demo slug: default
- Title: glass-ui
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/uniquesonu/glass-ui with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/uniquesonu__glass-ui__default.html
- Local screenshot file: generated-21st-prompts/screenshots/uniquesonu__glass-ui__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="fixed inset-0 bg-cover bg-center bg-no-repeat overflow-hidden" style="background-image: url(&quot;https://512pixels.net/wp-content/uploads/2025/06/11-0-Color-Day-thumbnails.jpg&quot;);"><div class="absolute w-[25vmin] h-[25vmin] rounded-full overflow-hidden shadow-[0.1vw_0.1vw_0_rgba(255,255,255,0.2)] animate-glass-move"><div class="absolute inset-[5%] rounded-full bg-cover bg-center bg-no-repeat bg-fixed blur-[2.5vmin]" style="background-image: url(&quot;https://512pixels.net/wp-content/uploads/2025/06/11-0-Color-Day-thumbnails.jpg&quot;);"></div><div class="absolute -inset-1/4 backdrop-blur-[2.5vmin] backdrop-contrast-[500%]"></div></div><div class="absolute w-[25vmin] h-[25vmin] rounded-full overflow-hidden shadow-[0.1vw_0.1vw_0_rgba(255,255,255,0.2)] animate-glass-move-delay-1"><div class="absolute inset-[5%] rounded-full bg-cover bg-center bg-no-repeat bg-fixed blur-[2.5vmin]" style="background-image: url(&quot;https://512pixels.net/wp-content/uploads/2025/06/11-0-Color-Day-thumbnails.jpg&quot;);"></div><div class="absolute -inset-1/4 backdrop-blur-[2.5vmin] backdrop-contrast-[500%]"></div></div><div class="absolute w-[25vmin] h-[25vmin] rounded-full overflow-hidden shadow-[0.1vw_0.1vw_0_rgba(255,255,255,0.2)] animate-glass-move-delay-2"><div class="absolute inset-[5%] rounded-full bg-cover bg-center bg-no-repeat bg-fixed blur-[2.5vmin]" style="background-image: url(&quot;https://512pixels.net/wp-content/uploads/2025/06/11-0-Color-Day-thumbnails.jpg&quot;);"></div><div class="absolute -inset-1/4 backdrop-blur-[2.5vmin] backdrop-contrast-[500%]"></div></div><div class="absolute w-[25vmin] h-[25vmin] rounded-full overflow-hidden shadow-[0.1vw_0.1vw_0_rgba(255,255,255,0.2)] animate-glass-move-delay-3"><div class="absolute inset-[5%] rounded-full bg-cover bg-center bg-no-repeat bg-fixed blur-[2.5vmin]" style="background-image: url(&quot;https://512pixels.net/wp-content/uploads/2025/06/11-0-Color-Day-thumbnails.jpg&quot;);"></div><div class="absolute -inset-1/4 backdrop-blur-[2.5vmin] backdrop-contrast-[500%]"></div></div><style>
        @keyframes glass-move {
          0% { top: 10%; left: 10%; }
          25% { top: 10%; left: calc(90% - 25vmin); }
          50% { top: calc(90% - 25vmin); left: calc(90% - 25vmin); }
          75% { top: calc(90% - 25vmin); left: 10%; }
          100% { top: 10%; left: 10%; }
        }

        .animate-glass-move {
          animation: glass-move 4s cubic-bezier(0.6, 0, 0.4, 1) infinite;
        }

        .animate-glass-move-delay-1 {
          animation: glass-move 4s cubic-bezier(0.6, 0, 0.4, 1) infinite;
          animation-delay: -3s;
        }

        .animate-glass-move-delay-2 {
          animation: glass-move 4s cubic-bezier(0.6, 0, 0.4, 1) infinite;
          animation-delay: -2s;
        }

        .animate-glass-move-delay-3 {
          animation: glass-move 4s cubic-bezier(0.6, 0, 0.4, 1) infinite;
          animation-delay: -1s;
        }
      </style></div></div></div></div>
```

## Public registry source files

No public registry source files were available.