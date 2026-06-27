# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/nextjsshop/icon-accordion/default
- Registry URL: https://21st.dev/r/nextjsshop/icon-accordion
- Author: nextjsshop
- Component slug: icon-accordion
- Demo slug: default
- Title: icon-accordion
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/nextjsshop/icon-accordion with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/nextjsshop__icon-accordion__default.html
- Local screenshot file: generated-21st-prompts/screenshots/nextjsshop__icon-accordion__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full rounded-lg border border-border bg-card p-6 shadow-sm"><h1 class="text-3xl font-bold mb-2 text-foreground">The Accordion</h1><p class="text-muted-foreground mb-8">The accordion is a graphical control element comprising a vertical stacked list of items, such as labels or thumbnails. Each item can be "expanded" or "collapsed" to reveal the content associated with that item.</p><div class="space-y-4"><div class="border border-border rounded-lg overflow-hidden"><div class="flex items-center justify-between p-4 cursor-pointer"><div class="flex items-center gap-4"><div class="w-10 h-10 rounded-lg flex items-center justify-center bg-yellow-100 dark:bg-yellow-900"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg></div><div><h3 class="font-medium text-foreground">Views</h3><p class="text-sm text-muted-foreground">Save time by creating and saving filtered views</p></div></div><div class="w-8 h-8 rounded-full border border-border flex items-center justify-center" style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-4 h-4 text-muted-foreground" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></div></div></div><div class="border border-border rounded-lg overflow-hidden"><div class="flex items-center justify-between p-4 cursor-pointer"><div class="flex items-center gap-4"><div class="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-100 dark:bg-blue-900"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg></div><div><h3 class="font-medium text-foreground">Alerts</h3><p class="text-sm text-muted-foreground">Save information about your system's activity</p></div></div><div class="w-8 h-8 rounded-full border border-border flex items-center justify-center" style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-4 h-4 text-muted-foreground" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></div></div></div><div class="border border-border rounded-lg overflow-hidden"><div class="flex items-center justify-between p-4 cursor-pointer"><div class="flex items-center gap-4"><div class="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-100 dark:bg-purple-900"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-column w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg></div><div><h3 class="font-medium text-foreground">Boards &amp; Graphs</h3><p class="text-sm text-muted-foreground">Identify trends in your system's activity</p></div></div><div class="w-8 h-8 rounded-full border border-border flex items-center justify-center" style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-4 h-4 text-muted-foreground" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></div></div></div><div class="border border-border rounded-lg overflow-hidden"><div class="flex items-center justify-between p-4 cursor-pointer"><div class="flex items-center gap-4"><div class="w-10 h-10 rounded-lg flex items-center justify-center bg-green-100 dark:bg-green-900"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg></div><div><h3 class="font-medium text-foreground">Screen</h3><p class="text-sm text-muted-foreground">Display daily log activity from all your systems</p></div></div><div class="w-8 h-8 rounded-full border border-border flex items-center justify-center" style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-4 h-4 text-muted-foreground" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.