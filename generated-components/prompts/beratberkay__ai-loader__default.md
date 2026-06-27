# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/beratberkay/ai-loader/default
- Registry URL: https://21st.dev/r/beratberkay/ai-loader
- Author: beratberkay
- Component slug: ai-loader
- Demo slug: default
- Title: ai-loader
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/beratberkay/ai-loader with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/beratberkay__ai-loader__default.html
- Local screenshot file: generated-21st-prompts/screenshots/beratberkay__ai-loader__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#1a3379] via-[#0f172a] to-black dark:from-gray-100 dark:via-gray-200 dark:to-gray-300"><div class="relative flex items-center justify-center font-inter select-none" style="width: 180px; height: 180px;"><span class="inline-block text-white dark:text-gray-800 opacity-40 animate-loaderLetter" style="animation-delay: 0s;">G</span><span class="inline-block text-white dark:text-gray-800 opacity-40 animate-loaderLetter" style="animation-delay: 0.1s;">e</span><span class="inline-block text-white dark:text-gray-800 opacity-40 animate-loaderLetter" style="animation-delay: 0.2s;">n</span><span class="inline-block text-white dark:text-gray-800 opacity-40 animate-loaderLetter" style="animation-delay: 0.3s;">e</span><span class="inline-block text-white dark:text-gray-800 opacity-40 animate-loaderLetter" style="animation-delay: 0.4s;">r</span><span class="inline-block text-white dark:text-gray-800 opacity-40 animate-loaderLetter" style="animation-delay: 0.5s;">a</span><span class="inline-block text-white dark:text-gray-800 opacity-40 animate-loaderLetter" style="animation-delay: 0.6s;">t</span><span class="inline-block text-white dark:text-gray-800 opacity-40 animate-loaderLetter" style="animation-delay: 0.7s;">i</span><span class="inline-block text-white dark:text-gray-800 opacity-40 animate-loaderLetter" style="animation-delay: 0.8s;">n</span><span class="inline-block text-white dark:text-gray-800 opacity-40 animate-loaderLetter" style="animation-delay: 0.9s;">g</span><div class="absolute inset-0 rounded-full animate-loaderCircle"></div></div><style>
        @keyframes loaderCircle {
          0% {
            transform: rotate(90deg);
            box-shadow:
              0 6px 12px 0 #38bdf8 inset,
              0 12px 18px 0 #005dff inset,
              0 36px 36px 0 #1e40af inset,
              0 0 3px 1.2px rgba(56, 189, 248, 0.3),
              0 0 6px 1.8px rgba(0, 93, 255, 0.2);
          }
          50% {
            transform: rotate(270deg);
            box-shadow:
              0 6px 12px 0 #60a5fa inset,
              0 12px 6px 0 #0284c7 inset,
              0 24px 36px 0 #005dff inset,
              0 0 3px 1.2px rgba(56, 189, 248, 0.3),
              0 0 6px 1.8px rgba(0, 93, 255, 0.2);
          }
          100% {
            transform: rotate(450deg);
            box-shadow:
              0 6px 12px 0 #4dc8fd inset,
              0 12px 18px 0 #005dff inset,
              0 36px 36px 0 #1e40af inset,
              0 0 3px 1.2px rgba(56, 189, 248, 0.3),
              0 0 6px 1.8px rgba(0, 93, 255, 0.2);
          }
        }

        @keyframes loaderLetter {
          0%,
          100% {
            opacity: 0.4;
            transform: translateY(0);
          }
          20% {
            opacity: 1;
            transform: scale(1.15);
          }
          40% {
            opacity: 0.7;
            transform: translateY(0);
          }
        }

        .animate-loaderCircle {
          animation: loaderCircle 5s linear infinite;
        }

        .animate-loaderLetter {
          animation: loaderLetter 3s infinite;
        }

       
        @media (prefers-color-scheme: dark) {
          .animate-loaderCircle {
            box-shadow:
              0 6px 12px 0 #4b5563 inset,
              0 12px 18px 0 #6b7280 inset,
              0 36px 36px 0 #9ca3af inset,
              0 0 3px 1.2px rgba(107, 114, 128, 0.3),
              0 0 6px 1.8px rgba(156, 163, 175, 0.2);
          }
        }
      </style></div></div></div></div>
```

## Public registry source files

No public registry source files were available.