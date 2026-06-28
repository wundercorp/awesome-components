# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/trophyso/leaderboard-rankings/default
- Registry URL: https://21st.dev/r/trophyso/leaderboard-rankings
- Author: trophyso
- Component slug: leaderboard-rankings
- Demo slug: default
- Title: leaderboard-rankings
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/trophyso/leaderboard-rankings with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/trophyso__leaderboard-rankings__default.html
- Local screenshot file: generated-21st-prompts/screenshots/trophyso__leaderboard-rankings__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full px-6"><div class="bg-card w-full rounded-xl border"><div role="list" aria-label="Leaderboard rankings" class="divide-border divide-y"><div role="listitem" class="flex items-center gap-2 px-4 py-2"><div class="flex w-12 items-center gap-1"><span class="w-4 text-sm font-semibold tabular-nums">1</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-crown h-5 w-5 text-rank-1" aria-hidden="true"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg></div><img alt="Ava Elizabeth Turner avatar" class="h-10 w-10 rounded-full object-cover" src="https://i.pravatar.cc/96?img=32"><div class="min-w-0 flex-1"><p class="text-foreground truncate font-medium">Ava Elizabeth Turner</p><p class="text-muted-foreground truncate text-sm">Level 42 – Diamond</p></div><div class="flex items-center gap-2 text-right"><p class="leading-none font-semibold tabular-nums">289.4k</p></div></div><div role="listitem" class="flex items-center gap-2 px-4 py-2"><div class="flex w-12 items-center gap-1"><span class="w-4 text-sm font-semibold tabular-nums">2</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-crown h-5 w-5 text-rank-2" aria-hidden="true"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg></div><img alt="Leo Harrison avatar" class="h-10 w-10 rounded-full object-cover" src="https://i.pravatar.cc/96?img=12"><div class="min-w-0 flex-1"><p class="text-foreground truncate font-medium">Leo Harrison</p><p class="text-muted-foreground truncate text-sm">Level 39 – Platinum</p></div><div class="flex items-center gap-2 text-right"><p class="leading-none font-semibold tabular-nums">251.8k</p></div></div><div role="listitem" class="flex items-center gap-2 px-4 py-2"><div class="flex w-12 items-center gap-1"><span class="w-4 text-sm font-semibold tabular-nums">3</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-crown h-5 w-5 text-rank-3" aria-hidden="true"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg></div><img alt="Rowan Elijah avatar" class="h-10 w-10 rounded-full object-cover" src="https://i.pravatar.cc/96?img=15"><div class="min-w-0 flex-1"><p class="text-foreground truncate font-medium">Rowan Elijah</p><p class="text-muted-foreground truncate text-sm">Level 37 – Platinum</p></div><div class="flex items-center gap-2 text-right"><p class="leading-none font-semibold tabular-nums">238.3k</p></div></div><div role="listitem" class="flex items-center gap-2 px-4 py-2"><div class="flex w-12 items-center gap-1"><span class="w-4 text-sm font-semibold tabular-nums">4</span></div><img alt="Mia Sophia Bennett avatar" class="h-10 w-10 rounded-full object-cover" src="https://i.pravatar.cc/96?img=44"><div class="min-w-0 flex-1"><p class="text-foreground truncate font-medium">Mia Sophia Bennett</p><p class="text-muted-foreground truncate text-sm">Level 34 – Gold</p></div><div class="flex items-center gap-2 text-right"><p class="leading-none font-semibold tabular-nums">221.7k</p></div></div><div role="listitem" class="flex items-center gap-2 px-4 py-2"><div class="flex w-12 items-center gap-1"><span class="w-4 text-sm font-semibold tabular-nums">5</span></div><img alt="William Turner avatar" class="h-10 w-10 rounded-full object-cover" src="https://i.pravatar.cc/96?img=53"><div class="min-w-0 flex-1"><p class="text-foreground truncate font-medium">William Turner</p><p class="text-muted-foreground truncate text-sm">Level 33 – Gold</p></div><div class="flex items-center gap-2 text-right"><p class="leading-none font-semibold tabular-nums">199.5k</p></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.