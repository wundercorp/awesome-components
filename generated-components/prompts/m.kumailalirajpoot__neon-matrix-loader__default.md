# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/m.kumailalirajpoot/neon-matrix-loader/default
- Registry URL: https://21st.dev/r/m.kumailalirajpoot/neon-matrix-loader
- Author: m.kumailalirajpoot
- Component slug: neon-matrix-loader
- Demo slug: default
- Title: neon-matrix-loader
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/m.kumailalirajpoot/neon-matrix-loader with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/m.kumailalirajpoot__neon-matrix-loader__default.html
- Local screenshot file: generated-21st-prompts/screenshots/m.kumailalirajpoot__neon-matrix-loader__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col items-center justify-center gap-6 p-8"><div class="relative w-10 h-10"><div class="grid grid-cols-3 gap-2 w-full h-full"><div class="square-item relative" style="animation-delay: 0s;"><div class="w-full h-full rounded-md bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 shadow-lg shadow-blue-500/50"></div></div><div class="square-item relative" style="animation-delay: 0.1s;"><div class="w-full h-full rounded-md bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 shadow-lg shadow-blue-500/50"></div></div><div class="square-item relative" style="animation-delay: 0.2s;"><div class="w-full h-full rounded-md bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 shadow-lg shadow-blue-500/50"></div></div><div class="square-item relative" style="animation-delay: 0.3s;"><div class="w-full h-full rounded-md bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 shadow-lg shadow-blue-500/50"></div></div><div class="square-item relative" style="animation-delay: 0.4s;"><div class="w-full h-full rounded-md bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 shadow-lg shadow-blue-500/50"></div></div><div class="square-item relative" style="animation-delay: 0.5s;"><div class="w-full h-full rounded-md bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 shadow-lg shadow-blue-500/50"></div></div><div class="square-item relative" style="animation-delay: 0.6s;"><div class="w-full h-full rounded-md bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 shadow-lg shadow-blue-500/50"></div></div><div class="square-item relative" style="animation-delay: 0.7s;"><div class="w-full h-full rounded-md bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 shadow-lg shadow-blue-500/50"></div></div><div class="square-item relative" style="animation-delay: 0.8s;"><div class="w-full h-full rounded-md bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 shadow-lg shadow-blue-500/50"></div></div></div><div class="absolute inset-0 flex items-center justify-center pointer-events-none"><div class="w-16 h-16 bg-blue-500/30 rounded-full blur-xl animate-pulse"></div></div></div><div class="flex flex-col items-center gap-2"><p class="text-sm font-semibold bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent animate-pulse">Loading</p><div class="flex gap-1"><div class="w-1.5 h-1.5 rounded-full bg-blue-500" style="animation: 2s ease-in-out 0s infinite normal none running bounce;"></div><div class="w-1.5 h-1.5 rounded-full bg-blue-500" style="animation: 2s ease-in-out 0.2s infinite normal none running bounce;"></div><div class="w-1.5 h-1.5 rounded-full bg-blue-500" style="animation: 2s ease-in-out 0.4s infinite normal none running bounce;"></div></div></div><style>
        @keyframes rotateSquare {
          0%, 100% {
            transform: perspective(400px) rotateY(0deg) rotateX(0deg);
          }
          25% {
            transform: perspective(400px) rotateY(180deg) rotateX(0deg);
          }
          50% {
            transform: perspective(400px) rotateY(180deg) rotateX(180deg);
          }
          75% {
            transform: perspective(400px) rotateY(0deg) rotateX(180deg);
          }
        }

        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
            opacity: 0.5;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .square-item {
          animation: rotateSquare 3.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
          transform-style: preserve-3d;
        }

        .square-item:nth-child(1) { animation-delay: 0s; }
        .square-item:nth-child(2) { animation-delay: 0.1s; }
        .square-item:nth-child(3) { animation-delay: 0.2s; }
        .square-item:nth-child(4) { animation-delay: 0.1s; }
        .square-item:nth-child(5) { animation-delay: 0.2s; }
        .square-item:nth-child(6) { animation-delay: 0.3s; }
        .square-item:nth-child(7) { animation-delay: 0.2s; }
        .square-item:nth-child(8) { animation-delay: 0.3s; }
        .square-item:nth-child(9) { animation-delay: 0.4s; }
      </style></div></div></div></div>
```

## Public registry source files

No public registry source files were available.