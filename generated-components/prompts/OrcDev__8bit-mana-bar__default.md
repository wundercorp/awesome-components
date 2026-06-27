# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/OrcDev/8bit-mana-bar/default
- Registry URL: https://21st.dev/r/OrcDev/8bit-mana-bar
- Author: OrcDev
- Component slug: 8bit-mana-bar
- Demo slug: default
- Title: 8bit-mana-bar
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/OrcDev/8bit-mana-bar with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/OrcDev__8bit-mana-bar__default.html
- Local screenshot file: generated-21st-prompts/screenshots/OrcDev__8bit-mana-bar__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex w-full min-h-screen items-center justify-center bg-background p-8 retro"><div class="md:min-w-[300px] min-w-[200px] flex flex-col gap-8"><div><p class="text-sm text-muted-foreground mb-2">Default mana bar</p><div class="flex justify-between text-sm mb-2 retro"><span>Mana</span><span>75%</span></div><div class="relative w-full"><div data-slot="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="75" class="bg-primary/20 relative w-full overflow-hidden h-2 retro"><div data-slot="progress-indicator" class="h-full transition-all w-full flex-1 bg-blue-500" style="transform: translateX(-25%);"></div></div><div class="absolute inset-0 border-y-4 -my-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div><div class="absolute inset-0 border-x-4 -mx-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div></div></div><div><p class="text-sm text-muted-foreground mb-2">Retro mana bar</p><div class="flex justify-between text-sm mb-2 retro"><span>Mana</span><span>45%</span></div><div class="relative w-full"><div data-slot="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="45" class="bg-primary/20 relative w-full overflow-hidden h-2 retro"><div data-slot="progress-indicator" class="h-full transition-all flex w-full"><div class="flex w-full"><div class="flex-1 h-full mx-[1px] bg-blue-500"></div><div class="flex-1 h-full mx-[1px] bg-blue-500"></div><div class="flex-1 h-full mx-[1px] bg-blue-500"></div><div class="flex-1 h-full mx-[1px] bg-blue-500"></div><div class="flex-1 h-full mx-[1px] bg-blue-500"></div><div class="flex-1 h-full mx-[1px] bg-blue-500"></div><div class="flex-1 h-full mx-[1px] bg-blue-500"></div><div class="flex-1 h-full mx-[1px] bg-blue-500"></div><div class="flex-1 h-full mx-[1px] bg-blue-500"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div></div></div></div><div class="absolute inset-0 border-y-4 -my-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div><div class="absolute inset-0 border-x-4 -mx-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.