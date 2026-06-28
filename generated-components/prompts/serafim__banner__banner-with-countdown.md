# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/serafim/banner/banner-with-countdown
- Registry URL: https://21st.dev/r/serafim/banner
- Author: serafim
- Component slug: banner
- Demo slug: banner-with-countdown
- Title: banner
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/serafim/banner with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/serafim__banner__banner-with-countdown.html
- Local screenshot file: generated-21st-prompts/screenshots/serafim__banner__banner-with-countdown.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="relative w-full dark bg-muted px-4 py-3 dark text-foreground"><div class="flex gap-2"><div class="flex grow items-center justify-between gap-3"><div class="flex w-full gap-2 md:items-center"><div class="flex grow gap-3 md:items-center"><div class="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 max-md:mt-0.5" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ticket-percent opacity-80" aria-hidden="true"><path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M9 9h.01"></path><path d="m15 9-6 6"></path><path d="M15 15h.01"></path></svg></div><div class="flex grow flex-col justify-between gap-3 md:flex-row md:items-center"><div class="space-y-0.5"><p class="text-sm font-medium">Black Friday Sale!</p><p class="text-sm text-muted-foreground">It kicks off today and is available for just 24 hours—don‘t miss out!</p></div><div class="flex gap-3 max-md:flex-wrap"><div class="flex items-center divide-x divide-primary-foreground rounded-lg bg-primary/15 text-sm tabular-nums"><span class="flex h-8 items-center justify-center p-2">09<span class="text-muted-foreground">h</span></span><span class="flex h-8 items-center justify-center p-2">45<span class="text-muted-foreground">m</span></span><span class="flex h-8 items-center justify-center p-2">19<span class="text-muted-foreground">s</span></span></div><button class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow-sm shadow-black/5 hover:bg-primary/90 h-8 rounded-lg px-3 text-sm">Buy now</button></div></div></div><button class="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 hover:text-accent-foreground group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent" aria-label="Close banner"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x opacity-60 transition-opacity group-hover:opacity-100" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.