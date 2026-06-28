# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ruixenui/sliding-tabs/default
- Registry URL: https://21st.dev/r/ruixenui/sliding-tabs
- Author: ruixenui
- Component slug: sliding-tabs
- Demo slug: default
- Title: sliding-tabs
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ruixenui/sliding-tabs with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ruixenui__sliding-tabs__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ruixenui__sliding-tabs__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center h-screen bg-background"><div class="w-full mx-auto"><div role="tablist" aria-label="Sliding tabs" class="relative inline-flex items-center gap-2 p-1 rounded-2xl bg-background/50 backdrop-blur-sm border border-border"><div class="absolute pointer-events-none rounded-lg" style="top: 6px; height: calc(100% - 12px); left: 5px; width: 85.6719px;"><div class="absolute inset-0 rounded-lg filter blur-2xl" style="background: linear-gradient(90deg, rgb(124, 58, 237), rgb(6, 182, 212), rgb(16, 185, 129)); opacity: 0.28;"></div></div><div class="absolute pointer-events-none rounded-md" style="top: 8px; height: calc(100% - 16px); background: linear-gradient(90deg, rgb(124, 58, 237), rgb(6, 182, 212), rgb(16, 185, 129)); mix-blend-mode: screen; opacity: 0.96; left: 5px; width: 85.6719px;"></div><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 relative z-10 px-3 py-2 rounded-lg transition-colors hover:bg-transparent text-white" role="tab" aria-selected="true" tabindex="0"><span class="text-sm font-medium">Overview</span></button><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 relative z-10 px-3 py-2 rounded-lg transition-colors hover:bg-transparent text-foreground/80" role="tab" aria-selected="false" tabindex="-1"><span class="text-sm font-medium">Activity</span></button><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 relative z-10 px-3 py-2 rounded-lg transition-colors hover:bg-transparent text-foreground/80" role="tab" aria-selected="false" tabindex="-1"><span class="text-sm font-medium">Settings</span></button><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 relative z-10 px-3 py-2 rounded-lg transition-colors hover:bg-transparent text-foreground/80" role="tab" aria-selected="false" tabindex="-1"><span class="text-sm font-medium">Profile</span></button></div><div class="mt-4"><div role="tabpanel" aria-hidden="false" class="p-2"><div> Overview content goes here</div></div><div role="tabpanel" aria-hidden="true" hidden="" class="p-2"><div> Recent activity details here</div></div><div role="tabpanel" aria-hidden="true" hidden="" class="p-2"><div> Settings configuration options</div></div><div role="tabpanel" aria-hidden="true" hidden="" class="p-2"><div> Profile info and preferences</div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.