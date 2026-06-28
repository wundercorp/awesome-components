# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/theorcdev/8bit-xp-bar/default
- Registry URL: https://21st.dev/r/theorcdev/8bit-xp-bar
- Author: theorcdev
- Component slug: 8bit-xp-bar
- Demo slug: default
- Title: 8bit-xp-bar
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/theorcdev/8bit-xp-bar with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/theorcdev__8bit-xp-bar__default.html
- Local screenshot file: generated-21st-prompts/screenshots/theorcdev__8bit-xp-bar__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><style>
        @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
        .retro, .retro * { font-family: "Press Start 2P", system-ui, sans-serif !important; }
      </style><div class="flex w-full min-h-screen items-center justify-center bg-background p-8 retro"><div class="md:min-w-[300px] min-w-[200px] flex flex-col gap-8"><div><p class="text-sm text-muted-foreground mb-2">Default XP bar</p><div class="flex justify-between text-sm mb-2"><span>XP</span><span>65%</span></div><div class="relative"><div class="relative w-full"><div aria-valuemax="100" aria-valuemin="0" aria-valuenow="65" aria-valuetext="65%" role="progressbar" data-state="loading" data-value="65" data-max="100" data-slot="progress" class="bg-primary/20 relative w-full overflow-hidden h-2 retro"><div data-state="loading" data-value="65" data-max="100" data-slot="progress-indicator" class="h-full transition-all w-full flex-1 bg-yellow-500" style="transform: translateX(-35%);"></div></div><div class="absolute inset-0 border-y-4 -my-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div><div class="absolute inset-0 border-x-4 -mx-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div></div><style>
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      </style></div></div><div><p class="text-sm text-muted-foreground mb-2">Retro XP bar</p><div class="flex justify-between text-sm mb-2"><span>XP</span><span>45%</span></div><div class="relative"><div class="relative w-full"><div aria-valuemax="100" aria-valuemin="0" aria-valuenow="45" aria-valuetext="45%" role="progressbar" data-state="loading" data-value="45" data-max="100" data-slot="progress" class="bg-primary/20 relative w-full overflow-hidden h-2 retro"><div data-state="loading" data-value="45" data-max="100" data-slot="progress-indicator" class="h-full transition-all flex w-full"><div class="flex w-full"><div class="flex-1 h-full mx-[1px] bg-yellow-500"></div><div class="flex-1 h-full mx-[1px] bg-yellow-500"></div><div class="flex-1 h-full mx-[1px] bg-yellow-500"></div><div class="flex-1 h-full mx-[1px] bg-yellow-500"></div><div class="flex-1 h-full mx-[1px] bg-yellow-500"></div><div class="flex-1 h-full mx-[1px] bg-yellow-500"></div><div class="flex-1 h-full mx-[1px] bg-yellow-500"></div><div class="flex-1 h-full mx-[1px] bg-yellow-500"></div><div class="flex-1 h-full mx-[1px] bg-yellow-500"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div><div class="flex-1 h-full mx-[1px] bg-transparent"></div></div></div></div><div class="absolute inset-0 border-y-4 -my-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div><div class="absolute inset-0 border-x-4 -mx-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div></div><style>
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      </style></div></div><div><p class="text-sm text-muted-foreground mb-2">Level Up! (100%)</p><div class="flex justify-between text-sm mb-2"><span>XP</span><span>100%</span></div><div class="relative"><div class="relative w-full animate-pulse"><div aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" data-state="complete" data-value="100" data-max="100" data-slot="progress" class="bg-primary/20 relative w-full overflow-hidden h-2 retro"><div data-state="complete" data-value="100" data-max="100" data-slot="progress-indicator" class="h-full transition-all w-full flex-1 bg-yellow-500" style="transform: translateX(0%);"></div></div><div class="absolute inset-0 border-y-4 -my-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div><div class="absolute inset-0 border-x-4 -mx-1 border-foreground dark:border-ring pointer-events-none" aria-hidden="true"></div></div><div class="retro absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.625rem] text-black pointer-events-none whitespace-nowrap z-10 drop-shadow-[1px_1px_0_#fff] [text-shadow:1px_1px_0_#fff,-1px_-1px_0_#fff,1px_-1px_0_#fff,-1px_1px_0_#fff] animate-[blink_0.5s_step-end_infinite]">LEVEL UP!</div><style>
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      </style></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.