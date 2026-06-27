# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ncdai/theme-switcher-1/default
- Registry URL: https://21st.dev/r/ncdai/theme-switcher-1
- Author: ncdai
- Component slug: theme-switcher-1
- Demo slug: default
- Title: theme-switcher-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ncdai/theme-switcher-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ncdai__theme-switcher-1__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ncdai__theme-switcher-1__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="inline-flex items-center overflow-hidden rounded-full bg-white ring-1 ring-zinc-200 ring-inset dark:bg-zinc-950 dark:ring-zinc-700" role="radiogroup" style="opacity: 1;"><button class="relative flex size-8 cursor-default items-center justify-center rounded-full transition-all [&amp;_svg]:size-4 text-zinc-400 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-50" role="radio" aria-checked="false" aria-label="Switch to system theme"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor" aria-hidden="true"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg></button><button class="relative flex size-8 cursor-default items-center justify-center rounded-full transition-all [&amp;_svg]:size-4 text-zinc-950 dark:text-zinc-50" role="radio" aria-checked="true" aria-label="Switch to light theme"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg><div class="absolute inset-0 rounded-full border border-zinc-200 dark:border-zinc-700" style="opacity: 1;"></div></button><button class="relative flex size-8 cursor-default items-center justify-center rounded-full transition-all [&amp;_svg]:size-4 text-zinc-400 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-50" role="radio" aria-checked="false" aria-label="Switch to dark theme"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-star" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path></svg></button></div></div></div></div>
```

## Public registry source files

No public registry source files were available.