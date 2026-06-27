# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/jatin-yadav05/quick-look-overlay/default
- Registry URL: https://21st.dev/r/jatin-yadav05/quick-look-overlay
- Author: jatin-yadav05
- Component slug: quick-look-overlay
- Demo slug: default
- Title: quick-look-overlay
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/jatin-yadav05/quick-look-overlay with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/jatin-yadav05__quick-look-overlay__default.html
- Local screenshot file: generated-21st-prompts/screenshots/jatin-yadav05__quick-look-overlay__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><main class="mx-auto max-w-6xl px-4 py-10"><header class="mb-8"><h1 class="text-balance text-2xl font-semibold">Quick Look</h1><p class="mt-2 text-sm text-muted-foreground">Focus an item and press Space to preview. Use ← → to navigate, Esc to close.</p></header><ul class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 list-none p-0 m-0"><li class="m-0"><button type="button" class="group w-full overflow-hidden rounded-lg border border-border bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-ring" aria-label="Preview Alpine Morning"><div class="aspect-[4/3] w-full bg-muted dark:bg-muted flex items-center justify-center"><img alt="Alpine Morning" class="h-full w-full object-cover transition-transform group-hover:scale-[1.02]" src="https://images.pexels.com/photos/34020255/pexels-photo-34020255.jpeg"></div><div class="flex items-center justify-between px-3 py-2"><span class="text-sm font-medium text-pretty">Alpine Morning</span><span class="text-xs text-muted-foreground">Space ▸ Quick Look</span></div></button></li><li class="m-0"><button type="button" class="group w-full overflow-hidden rounded-lg border border-border bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-ring" aria-label="Preview Workspace"><div class="aspect-[4/3] w-full bg-muted dark:bg-muted flex items-center justify-center"><img alt="Workspace" class="h-full w-full object-cover transition-transform group-hover:scale-[1.02]" src="https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg"></div><div class="flex items-center justify-between px-3 py-2"><span class="text-sm font-medium text-pretty">Workspace</span><span class="text-xs text-muted-foreground">Space ▸ Quick Look</span></div></button></li><li class="m-0"><button type="button" class="group w-full overflow-hidden rounded-lg border border-border bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-ring" aria-label="Preview City Sunset"><div class="aspect-[4/3] w-full bg-muted dark:bg-muted flex items-center justify-center"><img alt="City Sunset" class="h-full w-full object-cover transition-transform group-hover:scale-[1.02]" src="https://images.pexels.com/photos/34032149/pexels-photo-34032149.jpeg"></div><div class="flex items-center justify-between px-3 py-2"><span class="text-sm font-medium text-pretty">City Sunset</span><span class="text-xs text-muted-foreground">Space ▸ Quick Look</span></div></button></li><li class="m-0"><button type="button" class="group w-full overflow-hidden rounded-lg border border-border bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-ring" aria-label="Preview Button.tsx"><div class="aspect-[4/3] w-full bg-muted dark:bg-muted flex items-center justify-center"><div class="w-full h-full p-3 text-xs text-left overflow-hidden"><pre class="max-h-full overflow-hidden text-ellipsis"><code>Button.tsx</code></pre></div></div><div class="flex items-center justify-between px-3 py-2"><span class="text-sm font-medium text-pretty">Button.tsx</span><span class="text-xs text-muted-foreground">Space ▸ Quick Look</span></div></button></li><li class="m-0"><button type="button" class="group w-full overflow-hidden rounded-lg border border-border bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-ring" aria-label="Preview Forest Path"><div class="aspect-[4/3] w-full bg-muted dark:bg-muted flex items-center justify-center"><img alt="Forest Path" class="h-full w-full object-cover transition-transform group-hover:scale-[1.02]" src="https://images.pexels.com/photos/213172/pexels-photo-213172.jpeg"></div><div class="flex items-center justify-between px-3 py-2"><span class="text-sm font-medium text-pretty">Forest Path</span><span class="text-xs text-muted-foreground">Space ▸ Quick Look</span></div></button></li><li class="m-0"><button type="button" class="group w-full overflow-hidden rounded-lg border border-border bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-ring" aria-label="Preview Coastal Blue"><div class="aspect-[4/3] w-full bg-muted dark:bg-muted flex items-center justify-center"><img alt="Coastal Blue" class="h-full w-full object-cover transition-transform group-hover:scale-[1.02]" src="https://images.pexels.com/photos/34033513/pexels-photo-34033513.jpeg"></div><div class="flex items-center justify-between px-3 py-2"><span class="text-sm font-medium text-pretty">Coastal Blue</span><span class="text-xs text-muted-foreground">Space ▸ Quick Look</span></div></button></li><li class="m-0"><button type="button" class="group w-full overflow-hidden rounded-lg border border-border bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-ring" aria-label="Preview Product Note"><div class="aspect-[4/3] w-full bg-muted dark:bg-muted flex items-center justify-center"><div class="w-full h-full p-3 text-sm text-pretty leading-relaxed">Product Note</div></div><div class="flex items-center justify-between px-3 py-2"><span class="text-sm font-medium text-pretty">Product Note</span><span class="text-xs text-muted-foreground">Space ▸ Quick Look</span></div></button></li><li class="m-0"><button type="button" class="group w-full overflow-hidden rounded-lg border border-border bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-ring" aria-label="Preview Architectural Lines"><div class="aspect-[4/3] w-full bg-muted dark:bg-muted flex items-center justify-center"><img alt="Architectural Lines" class="h-full w-full object-cover transition-transform group-hover:scale-[1.02]" src="https://images.pexels.com/photos/3605420/pexels-photo-3605420.jpeg"></div><div class="flex items-center justify-between px-3 py-2"><span class="text-sm font-medium text-pretty">Architectural Lines</span><span class="text-xs text-muted-foreground">Space ▸ Quick Look</span></div></button></li></ul></main></div></div></div>
```

## Public registry source files

No public registry source files were available.