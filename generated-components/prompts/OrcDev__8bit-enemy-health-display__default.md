# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/OrcDev/8bit-enemy-health-display/default
- Registry URL: https://21st.dev/r/OrcDev/8bit-enemy-health-display
- Author: OrcDev
- Component slug: 8bit-enemy-health-display
- Demo slug: default
- Title: 8bit-enemy-health-display
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/OrcDev/8bit-enemy-health-display with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/OrcDev__8bit-enemy-health-display__default.html
- Local screenshot file: generated-21st-prompts/screenshots/OrcDev__8bit-enemy-health-display__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex w-full min-h-screen items-center justify-center bg-background p-8 retro"><div class="w-full max-w-md space-y-6"><div class="relative w-full space-y-2 retro text-sm text-red-500"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><span class="font-bold text-red-500">Fire Dragon</span><span class="text-muted-foreground">Lv.25</span></div><span class="text-muted-foreground text-[9px]">850/1000</span></div><div class="relative"><div class="relative w-full"><div data-slot="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="85" class="bg-primary/20 relative w-full overflow-hidden h-2 retro" props="[object Object]"><div data-slot="progress-indicator" class="h-full transition-all flex w-full"><div class="flex w-full"><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div></div></div></div><div class="absolute inset-0 border-y-4 -my-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div><div class="absolute inset-0 border-x-4 -mx-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div></div><div class="absolute inset-0 flex items-center justify-center"><span class="text-xs font-bold text-white drop-shadow-lg bg-black/50 px-1">85%</span></div></div></div><div class="relative w-full space-y-2 retro text-sm text-red-500"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><span class="font-bold text-green-500">Goblin Warrior</span><span class="text-muted-foreground">Lv.5</span></div><span class="text-muted-foreground text-[9px]">45/100</span></div><div class="relative"><div class="relative w-full"><div data-slot="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="45" class="bg-primary/20 relative w-full overflow-hidden h-2 retro" props="[object Object]"><div data-slot="progress-indicator" class="h-full transition-all flex w-full"><div class="flex w-full"><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-red-500"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div></div></div></div><div class="absolute inset-0 border-y-4 -my-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div><div class="absolute inset-0 border-x-4 -mx-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div></div><div class="absolute inset-0 flex items-center justify-center"><span class="text-xs font-bold text-white drop-shadow-lg bg-black/50 px-1">45%</span></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.