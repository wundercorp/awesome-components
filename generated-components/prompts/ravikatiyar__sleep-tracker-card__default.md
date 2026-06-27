# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ravikatiyar/sleep-tracker-card/default
- Registry URL: https://21st.dev/r/ravikatiyar/sleep-tracker-card
- Author: ravikatiyar
- Component slug: sleep-tracker-card
- Demo slug: default
- Title: sleep-tracker-card
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ravikatiyar/sleep-tracker-card with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ravikatiyar__sleep-tracker-card__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ravikatiyar__sleep-tracker-card__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex h-full w-full items-center justify-center bg-background p-4"><div class="w-full max-w-md rounded-2xl border bg-card p-6 text-card-foreground shadow-lg"><div class="mb-6 flex items-center gap-3"><div class="h-5 w-5 text-muted-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bed" aria-hidden="true"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg></div><h2 class="text-lg font-semibold">Sleep</h2></div><div class="mb-6 grid grid-cols-3 gap-4 text-center"><div><p class="text-2xl font-bold">5:44</p><p class="text-xs text-muted-foreground">Time Sleep</p></div><div><p class="text-2xl font-bold">72%</p><p class="text-xs text-muted-foreground">Quality</p></div><div><div class="flex items-center justify-center gap-1 text-green-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up h-4 w-4" aria-hidden="true"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg><p class="text-2xl font-bold">16%</p></div><p class="text-xs text-muted-foreground">than yesterday</p></div></div><div class="rounded-lg bg-muted/50 p-4" aria-label="Sleep stages graph" role="figure"><div class="flex h-24 w-full items-end justify-center gap-px" style="opacity: 1;"><div class="rounded-full bg-blue-500" aria-label="Core sleep for a duration proportion of 10" style="flex-grow: 10; height: 60%; opacity: 1; transform: none;"></div><div class="rounded-full bg-indigo-600" aria-label="Deep sleep for a duration proportion of 5" style="flex-grow: 5; height: 30%; opacity: 1; transform: none;"></div><div class="rounded-full bg-orange-400" aria-label="Awake sleep for a duration proportion of 2" style="flex-grow: 2; height: 75%; opacity: 1; transform: none;"></div><div class="rounded-full bg-sky-400" aria-label="REM sleep for a duration proportion of 8" style="flex-grow: 8; height: 50%; opacity: 1; transform: none;"></div><div class="rounded-full bg-blue-500" aria-label="Core sleep for a duration proportion of 15" style="flex-grow: 15; height: 65%; opacity: 1; transform: none;"></div><div class="rounded-full bg-sky-400" aria-label="REM sleep for a duration proportion of 10" style="flex-grow: 10; height: 55%; opacity: 1; transform: none;"></div><div class="rounded-full bg-blue-500" aria-label="Core sleep for a duration proportion of 20" style="flex-grow: 20; height: 60%; opacity: 1; transform: none;"></div><div class="rounded-full bg-indigo-600" aria-label="Deep sleep for a duration proportion of 8" style="flex-grow: 8; height: 35%; opacity: 1; transform: none;"></div><div class="rounded-full bg-blue-500" aria-label="Core sleep for a duration proportion of 10" style="flex-grow: 10; height: 60%; opacity: 1; transform: none;"></div><div class="rounded-full bg-sky-400" aria-label="REM sleep for a duration proportion of 5" style="flex-grow: 5; height: 50%; opacity: 1; transform: none;"></div><div class="rounded-full bg-orange-400" aria-label="Awake sleep for a duration proportion of 2" style="flex-grow: 2; height: 80%; opacity: 1; transform: none;"></div><div class="rounded-full bg-blue-500" aria-label="Core sleep for a duration proportion of 5" style="flex-grow: 5; height: 60%; opacity: 1; transform: none;"></div></div><div class="mt-2 flex justify-between text-xs text-muted-foreground"><div class="flex items-center gap-1.5"><div class="text-muted-foreground h-4 w-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg></div><span>01:42</span></div><div class="flex items-center gap-1.5"><span>07:26</span><div class="text-muted-foreground h-4 w-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg></div></div></div></div><div class="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4"><div class="flex items-center gap-2"><span class="h-2 w-2 rounded-full bg-orange-400" aria-hidden="true"></span><div><p class="text-sm font-medium">Awake</p><p class="text-xs text-muted-foreground">14min</p></div></div><div class="flex items-center gap-2"><span class="h-2 w-2 rounded-full bg-sky-400" aria-hidden="true"></span><div><p class="text-sm font-medium">REM</p><p class="text-xs text-muted-foreground">1h 4min</p></div></div><div class="flex items-center gap-2"><span class="h-2 w-2 rounded-full bg-blue-500" aria-hidden="true"></span><div><p class="text-sm font-medium">Core</p><p class="text-xs text-muted-foreground">4h 8min</p></div></div><div class="flex items-center gap-2"><span class="h-2 w-2 rounded-full bg-indigo-600" aria-hidden="true"></span><div><p class="text-sm font-medium">Deep</p><p class="text-xs text-muted-foreground">18min</p></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.