# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hihahihahoho/circle-progress/countdown
- Registry URL: https://21st.dev/r/hihahihahoho/circle-progress
- Author: hihahihahoho
- Component slug: circle-progress
- Demo slug: countdown
- Title: circle-progress
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hihahihahoho/circle-progress with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hihahihahoho__circle-progress__countdown.html
- Local screenshot file: generated-21st-prompts/screenshots/hihahihahoho__circle-progress__countdown.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="flex flex-col items-center gap-6"><div class="relative"><div class="" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="60" aria-valuetext="60 out of 60, 100% complete"><svg width="160" height="160" viewBox="0 0 160 160" class="duration-300"><circle cx="80" cy="80" r="76" class="fill-transparent stroke-gray-200 dark:stroke-gray-700" stroke-width="8"></circle><circle cx="80" cy="80" r="76" class="fill-transparent transition-colors stroke-emerald-500" stroke-width="8" stroke-dasharray="477.5220833456485" stroke-dashoffset="0" transform="rotate(-90 80 80)" stroke-linecap="round"></circle></svg></div><div class="absolute inset-0 flex items-center justify-center"><div class="text-center"><div class="text-3xl font-bold">1:00</div><div class="text-sm text-gray-500">Ready</div></div></div></div><div class="flex gap-3"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow-sm shadow-black/5 hover:bg-primary/90 h-9 px-4 py-2">Start</button><button class="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm shadow-black/5 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">Reset</button></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.