# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/jatin-yadav05/shimmer-bg-text/default
- Registry URL: https://21st.dev/r/jatin-yadav05/shimmer-bg-text
- Author: jatin-yadav05
- Component slug: shimmer-bg-text
- Demo slug: default
- Title: shimmer-bg-text
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/jatin-yadav05/shimmer-bg-text with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/jatin-yadav05__shimmer-bg-text__default.html
- Local screenshot file: generated-21st-prompts/screenshots/jatin-yadav05__shimmer-bg-text__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="h-screen w-full flex justify-center items-center bg-gradient-to-br from-white to-slate-200 dark:from-black/90 dark:to-black transition-colors duration-500"><div class="relative group cursor-pointer select-none px-2 py-1" style="perspective: 800px;"><span class="
                        text-6xl font-bold tracking-tight text-transparent bg-clip-text
                        bg-gradient-to-r from-black via-slate-700 to-black
                        dark:from-white dark:via-slate-300 dark:to-white
                        transition-all duration-700 ease-out
                        inline-block
                    ">Hover Me</span><span class="
                        pointer-events-none absolute inset-0 rounded
                        bg-gradient-to-r from-black/0 via-black/20 to-black/0
                        dark:from-white/0 dark:via-white/20 dark:to-white/0
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-700
                        animate-shimmer
                    " style="mix-blend-mode: overlay;"></span><style>
                    @keyframes shimmer {
                        0% {
                            background-position: -200% 0;
                        }
                        100% {
                            background-position: 200% 0;
                        }
                    }
                    .animate-shimmer {
                        background-size: 200% 100%;
                        animation: shimmer 2.2s linear infinite;
                    }
                </style></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.