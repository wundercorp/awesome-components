# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/qredence/animated-loading-svg-text-shimmer/default
- Registry URL: https://21st.dev/r/qredence/animated-loading-svg-text-shimmer
- Author: qredence
- Component slug: animated-loading-svg-text-shimmer
- Demo slug: default
- Title: animated-loading-svg-text-shimmer
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/qredence/animated-loading-svg-text-shimmer with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/qredence__animated-loading-svg-text-shimmer__default.html
- Local screenshot file: generated-21st-prompts/screenshots/qredence__animated-loading-svg-text-shimmer__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-screen items-center justify-center font-sans p-8"><div class="fixed top-4 right-4"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg><span class="sr-only">Toggle theme</span></button></div><style>
        @keyframes textShimmer {
          0% { 
            background-position: -100% center;
          }
          100% { 
            background-position: 100% center;
          }
        }
      </style><div class="flex items-center gap-2 text-[15px] font-medium tracking-wide"><svg role="status" aria-label="Loading..." viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="text-zinc-600 dark:text-zinc-200"><path d="M4.43431 2.42415C-0.789139 6.90104 1.21472 15.2022 8.434 15.9242C15.5762 16.6384 18.8649 9.23035 15.9332 4.5183C14.1316 1.62255 8.43695 0.0528911 7.51841 3.33733C6.48107 7.04659 15.2699 15.0195 17.4343 16.9241" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="transition-opacity duration-300 opacity-100 animate-[drawStroke_2.5s_infinite]" style="stroke-dasharray: 62.7113; --path-length: 62.7113037109375;"></path></svg><span class="bg-clip-text text-transparent shimmer-text" style="background-size: 200%; animation: 2s ease-in-out 0s infinite normal none running textShimmer;">Cooking</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-zinc-400 dark:text-zinc-500" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></div><style>
        .shimmer-text {
          background-image: linear-gradient(
            90deg,
            rgb(113 113 122) 0%,
            rgb(113 113 122) 40%,
            rgb(24 24 27) 50%,
            rgb(113 113 122) 60%,
            rgb(113 113 122) 100%
          );
        }
        .dark .shimmer-text {
          background-image: linear-gradient(
            90deg,
            rgb(161 161 170) 0%,
            rgb(161 161 170) 40%,
            rgb(255 255 255) 50%,
            rgb(161 161 170) 60%,
            rgb(161 161 170) 100%
          );
        }
      </style></div></div></div></div>
```

## Public registry source files

No public registry source files were available.