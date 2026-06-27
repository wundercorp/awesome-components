# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/kokonutd/x-gradient-card/default
- Registry URL: https://21st.dev/r/kokonutd/x-gradient-card
- Author: kokonutd
- Component slug: x-gradient-card
- Demo slug: default
- Title: x-gradient-card
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/kokonutd/x-gradient-card with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/kokonutd__x-gradient-card__default.html
- Local screenshot file: generated-21st-prompts/screenshots/kokonutd__x-gradient-card__default.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="absolute z-10 top-4 right-14 flex flex-col items-end gap-1"><button type="button" role="combobox" aria-controls="radix-«r0»" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" class="flex w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 gap-2 h-8"><span style="pointer-events: none;">X Card Demo Default</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></div><div class="flex w-full justify-center relative"><a href="https://x.com/dorian_baffier/status/1880291036410572934" target="_blank"><div class="w-full min-w-[400px] md:min-w-[500px] max-w-xl p-1.5 rounded-2xl relative isolate overflow-hidden dark:bg-black/90 bg-gradient-to-br from-black/5 to-black/[0.02] dark:from-white/5 dark:to-white/[0.02] backdrop-blur-xl backdrop-saturate-[180%] border border-black/10 dark:border-white/10 shadow-[0_8px_16px_rgb(0_0_0_/_0.15)] dark:shadow-[0_8px_16px_rgb(0_0_0_/_0.25)] will-change-transform translate-z-0"><div class="w-full p-5 rounded-xl relative bg-gradient-to-br from-black/[0.05] to-transparent dark:from-white/[0.08] dark:to-transparent backdrop-blur-md backdrop-saturate-150 border border-black/[0.05] dark:border-white/[0.08] text-black/90 dark:text-white shadow-sm will-change-transform translate-z-0 before:absolute before:inset-0 before:bg-gradient-to-br before:from-black/[0.02] before:to-black/[0.01] dark:before:from-white/[0.03] dark:before:to-white/[0.01] before:opacity-0 before:transition-opacity before:pointer-events-none hover:before:opacity-100"><div class="flex gap-3"><div class="flex-shrink-0"><div class="h-10 w-10 rounded-full overflow-hidden"><img alt="Dorian" class="h-full w-full object-cover" src="https://pbs.twimg.com/profile_images/1854916060807675904/KtBJsyWr_400x400.jpg"></div></div><div class="flex-1"><div class="flex justify-between items-start"><div class="flex flex-col"><div class="flex items-center gap-1"><span class="font-semibold text-black dark:text-white/90 hover:underline cursor-pointer">Dorian</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check h-4 w-4 text-blue-400" aria-hidden="true"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg></div><span class="text-black dark:text-white/60 text-sm">@dorian_baffier</span></div><button type="button" class="h-8 w-8 text-black dark:text-white/80 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-lg p-1 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1227" fill="none" viewBox="0 0 1200 1227" class="w-4 h-4"><title>X</title><path fill="currentColor" d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"></path></svg></button></div></div></div><div class="mt-2"><p class="text-black dark:text-white/90 text-base">All components from KokonutUI can now be open in @v0 🎉</p><p class="text-black dark:text-white/90 text-base">1. Click on 'Open in V0'</p><p class="text-black dark:text-white/90 text-base">2. Customize with prompts</p><p class="text-black dark:text-white/90 text-base">3. Deploy to your app</p><span class="text-black dark:text-white/50 text-sm mt-2 block">Jan 18, 2025</span></div><div class="mt-4 pt-4 border-t border-black/[0.08] dark:border-white/[0.08]"><div class="flex gap-3"><div class="flex-shrink-0"><div class="h-10 w-10 rounded-full overflow-hidden"><img alt="shadcn" class="h-full w-full object-cover" src="https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg"></div></div><div class="flex-1"><div class="flex items-center gap-1"><span class="font-semibold text-black dark:text-white/90 hover:underline cursor-pointer">shadcn</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check h-4 w-4 text-blue-400" aria-hidden="true"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg><span class="text-black dark:text-white/60 text-sm">@shadcn</span><span class="text-black dark:text-white/60 text-sm">·</span><span class="text-black dark:text-white/60 text-sm">Jan 18</span></div><p class="text-black dark:text-white/80 text-sm mt-1">Awesome.</p></div></div></div></div></div></a></div></div></div>
```

## Public registry source files

No public registry source files were available.