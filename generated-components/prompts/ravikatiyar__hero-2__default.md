# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ravikatiyar/hero-2/default
- Registry URL: https://21st.dev/r/ravikatiyar/hero-2
- Author: ravikatiyar
- Component slug: hero-2
- Demo slug: default
- Title: hero-2
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ravikatiyar/hero-2 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ravikatiyar__hero-2__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ravikatiyar__hero-2__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="h-full w-full"><style>
      @keyframes aurora-1 {
        0% { transform: translate(0%, 0%) scale(1); }
        25% { transform: translate(20%, -20%) scale(1.2); }
        50% { transform: translate(-20%, 20%) scale(0.8); }
        75% { transform: translate(10%, -10%) scale(1.1); }
        100% { transform: translate(0%, 0%) scale(1); }
      }
      @keyframes aurora-2 {
        0% { transform: translate(0%, 0%) scale(1); }
        25% { transform: translate(-20%, 20%) scale(1.1); }
        50% { transform: translate(20%, -20%) scale(0.9); }
        75% { transform: translate(-10%, 10%) scale(1.2); }
        100% { transform: translate(0%, 0%) scale(1); }
      }
    </style><div class="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-md bg-background antialiased"><div class="absolute inset-0 z-0"><div class="absolute -top-1/4 left-1/4 h-96 w-96 animate-[aurora-1_20s_ease-in-out_infinite] rounded-full bg-primary/30 opacity-20 blur-3xl filter dark:opacity-50"></div><div class="absolute -bottom-1/4 right-1/4 h-96 w-96 animate-[aurora-2_20s_ease-in-out_infinite] rounded-full bg-muted-foreground/30 opacity-10 blur-3xl filter dark:opacity-30"></div></div><div class="relative z-10"><h1 class="bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-6xl" style="opacity: 1; transform: none;">Experience the Aurora</h1><p class="mx-auto mt-4 max-w-lg text-center text-base text-muted-foreground" style="opacity: 1; transform: none;">A stunning, animated background that brings your hero sections to life, adapting beautifully to both light and dark themes.</p></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.