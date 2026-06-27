# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/anubra266/progress-1/linear-indeterminate-progress
- Registry URL: https://21st.dev/r/anubra266/progress-1
- Author: anubra266
- Component slug: progress-1
- Demo slug: linear-indeterminate-progress
- Title: progress-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/anubra266/progress-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/anubra266__progress-1__linear-indeterminate-progress.html
- Local screenshot file: generated-21st-prompts/screenshots/anubra266__progress-1__linear-indeterminate-progress.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div dir="ltr" data-scope="progress" data-part="root" id="progress-«r0»" data-max="100" data-state="indeterminate" data-orientation="horizontal" class="w-full max-w-sm mx-auto space-y-2"><label dir="ltr" id="progress-«r0»-label" data-scope="progress" data-part="label" data-orientation="horizontal" class="text-sm font-medium text-gray-700 dark:text-gray-300">Loading...</label><div dir="ltr" id="progress-«r0»-track" data-scope="progress" data-part="track" role="progressbar" aria-label="loading..." data-max="100" aria-valuemin="0" aria-valuemax="100" data-orientation="horizontal" data-state="indeterminate" class="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative"><div dir="ltr" data-scope="progress" data-part="range" data-orientation="horizontal" data-state="indeterminate" class="h-full bg-blue-600 dark:bg-blue-500 rounded-full absolute inset-0 animate-pulse"></div><div class="absolute inset-0 bg-linear-to-r from-transparent via-blue-600/20 to-transparent animate-[shimmer_2s_infinite] transform -translate-x-full"></div></div><style>
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      </style></div></div></div></div>
```

## Public registry source files

No public registry source files were available.