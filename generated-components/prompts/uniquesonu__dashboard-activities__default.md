# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/uniquesonu/dashboard-activities/default
- Registry URL: https://21st.dev/r/uniquesonu/dashboard-activities
- Author: uniquesonu
- Component slug: dashboard-activities
- Demo slug: default
- Title: dashboard-activities
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/uniquesonu/dashboard-activities with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/uniquesonu__dashboard-activities__default.html
- Local screenshot file: generated-21st-prompts/screenshots/uniquesonu__dashboard-activities__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="p-8 bg-background border rounded-lg max-w-lg mx-auto shadow-md"><h3 class="text-xl font-semibold text-foreground mb-4">Admin Dashboard Activities</h3><div class="rounded-lg border bg-card text-card-foreground shadow-sm h-full"><div class="flex flex-col space-y-1.5 p-6"><h3 class="tracking-tight text-xl font-semibold text-foreground">Recent Activity</h3></div><div class="p-0"><div class="divide-y divide-border" style="transform: none; transform-origin: 50% 50% 0px;"><div class="flex items-start gap-3 p-4 hover:bg-muted/30 transition-colors duration-200" style="opacity: 1; transform: none; transform-origin: 50% 50% 0px;"><div class="flex-shrink-0 p-1 rounded-full text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/50"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell h-4 w-4" aria-hidden="true"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg></div><div class="flex-grow flex flex-col"><p class="text-sm font-medium text-foreground leading-tight">New support ticket #1234 assigned.</p><p class="text-xs text-muted-foreground mt-0.5">Just now</p></div></div><div class="flex items-start gap-3 p-4 hover:bg-muted/30 transition-colors duration-200" style="opacity: 1; transform: none; transform-origin: 50% 50% 0px;"><div class="flex-shrink-0 p-1 rounded-full text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-plus h-4 w-4" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg></div><div class="flex-grow flex flex-col"><p class="text-sm font-medium text-foreground leading-tight">New user <span class="font-bold text-foreground">John Doe</span> registered.</p><p class="text-xs text-muted-foreground mt-0.5">Just now</p></div></div><div class="flex items-start gap-3 p-4 hover:bg-muted/30 transition-colors duration-200" style="opacity: 1; transform: none; transform-origin: 50% 50% 0px;"><div class="flex-shrink-0 p-1 rounded-full text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/50"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings h-4 w-4" aria-hidden="true"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg></div><div class="flex-grow flex flex-col"><p class="text-sm font-medium text-foreground leading-tight">System configuration updated by Admin.</p><p class="text-xs text-muted-foreground mt-0.5">5 minutes ago</p></div></div><div class="flex items-start gap-3 p-4 hover:bg-muted/30 transition-colors duration-200" style="opacity: 1; transform: none; transform-origin: 50% 50% 0px;"><div class="flex-shrink-0 p-1 rounded-full text-muted-foreground bg-muted"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text h-4 w-4" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></div><div class="flex-grow flex flex-col"><p class="text-sm font-medium text-foreground leading-tight">Report <span class="font-bold text-foreground">'Monthly Sales'</span> generated.</p><p class="text-xs text-muted-foreground mt-0.5">1 hour ago</p></div></div><div class="flex items-start gap-3 p-4 hover:bg-muted/30 transition-colors duration-200" style="opacity: 1; transform: none; transform-origin: 50% 50% 0px;"><div class="flex-shrink-0 p-1 rounded-full text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/50"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload h-4 w-4" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg></div><div class="flex-grow flex flex-col"><p class="text-sm font-medium text-foreground leading-tight">Data import from CRM completed successfully.</p><p class="text-xs text-muted-foreground mt-0.5">3 hours ago</p></div></div></div></div></div><p class="mt-4 text-sm text-muted-foreground">(New activity will appear at the top in 3 seconds; an old one will disappear in 6 seconds.)</p></div></div></div></div>
```

## Public registry source files

No public registry source files were available.