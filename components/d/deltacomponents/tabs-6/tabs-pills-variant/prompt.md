# Build Tabs 6 in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Tabs 6 screenshot](screenshot.png)

## Component

- Author group: `deltacomponents`
- Component: `tabs-6`
- Variant: `tabs-pills-variant`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: deltacomponents
- Component slug: tabs-6
- Demo slug: tabs-pills-variant
- Title: tabs-6
- Description: 

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

No reference metadata available.

## Rendered DOM snapshot

This is the rendered demo HTML extracted from the live preview. Use it to verify structure, class names, visible content, and layout.

```html
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-2xl mx-auto space-y-8"><div class="space-y-4"><h3 class="text-lg font-semibold">Pills Variant</h3><div class="tabs-container"><div class="relative w-fit" role="tablist" aria-label="Tabs"><div class="relative"><style>
          .x-scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
          .x-scrollbar-hide::-webkit-scrollbar { display: none; }
        </style><div class="overflow-x-auto overflow-y-hidden whitespace-nowrap x-scrollbar-hide" role="group" aria-label="Horizontal scroll area"><div class="relative"><div class="absolute transition-all duration-300 ease-out flex items-center z-0 h-[32px] text-sm bg-muted dark:bg-muted rounded-full" aria-hidden="true" style="opacity: 0; transition: 300ms ease-out;"></div><div class="relative flex items-center space-x-[2px]"><div class="px-3 py-2 sm:mb-1.5 mb-2 cursor-pointer transition-colors duration-300 h-[32px] text-sm bg-[#0e0f1114] dark:bg-[#ffffff1a] text-foreground dark:text-foreground rounded-full" role="tab" aria-selected="true" aria-controls="tabpanel-overview" id="tab-overview" tabindex="0"><div class="whitespace-nowrap flex items-center justify-center h-full"><div>Overview</div></div></div><div class="px-3 py-2 sm:mb-1.5 mb-2 cursor-pointer transition-colors duration-300 h-[32px] text-sm text-muted-foreground dark:text-muted-foreground rounded-full" role="tab" aria-selected="false" aria-controls="tabpanel-analytics" id="tab-analytics" tabindex="-1"><div class="whitespace-nowrap flex items-center justify-center h-full"><div>Analytics</div></div></div><div class="px-3 py-2 sm:mb-1.5 mb-2 cursor-pointer transition-colors duration-300 h-[32px] text-sm text-muted-foreground dark:text-muted-foreground rounded-full" role="tab" aria-selected="false" aria-controls="tabpanel-reports" id="tab-reports" tabindex="-1"><div class="whitespace-nowrap flex items-center justify-center h-full"><div>Reports</div></div></div><div class="px-3 py-2 sm:mb-1.5 mb-2 cursor-pointer transition-colors duration-300 h-[32px] text-sm text-muted-foreground dark:text-muted-foreground rounded-full" role="tab" aria-selected="false" aria-controls="tabpanel-settings" id="tab-settings" tabindex="-1"><div class="whitespace-nowrap flex items-center justify-center h-full"><div>Settings</div></div></div></div></div></div></div></div><div class="mt-6"></div></div></div><div class="space-y-4"><h3 class="text-lg font-semibold">Pills with Icons</h3><div class="tabs-container"><div class="relative w-fit" role="tablist" aria-label="Tabs"><div class="relative"><style>
          .x-scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
          .x-scrollbar-hide::-webkit-scrollbar { display: none; }
        </style><div class="overflow-x-auto overflow-y-hidden whitespace-nowrap x-scrollbar-hide" role="group" aria-label="Horizontal scroll area"><div class="relative"><div class="absolute transition-all duration-300 ease-out flex items-center z-0 h-[32px] text-sm bg-muted dark:bg-muted rounded-full" aria-hidden="true" style="opacity: 0; transition: 300ms ease-out;"></div><div class="relative flex items-center space-x-[2px]"><div class="px-3 py-2 sm:mb-1.5 mb-2 cursor-pointer transition-colors duration-300 h-[32px] text-sm bg-[#0e0f1114] dark:bg-[#ffffff1a] text-foreground dark:text-foreground rounded-full flex items-center gap-2" role="tab" aria-selected="true" aria-controls="tabpanel-profile" id="tab-profile" tabindex="0"><div class="whitespace-nowrap flex items-center justify-center h-full"><div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>Profile</div></div></div><div class="px-3 py-2 sm:mb-1.5 mb-2 cursor-pointer transition-colors duration-300 h-[32px] text-sm text-muted-foreground dark:text-muted-foreground rounded-full flex items-center gap-2" role="tab" aria-selected="false" aria-controls="tabpanel-notifications" id="tab-notifications" tabindex="-1"><div class="whitespace-nowrap flex items-center justify-center h-full"><div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell" aria-hidden="true"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>Notifications</div></div></div><div class="px-3 py-2 sm:mb-1.5 mb-2 cursor-pointer transition-colors duration-300 h-[32px] text-sm text-muted-foreground dark:text-muted-foreground rounded-full flex items-center gap-2" role="tab" aria-selected="false" aria-controls="tabpanel-preferences" id="tab-preferences" tabindex="-1"><div class="whitespace-nowrap flex items-center justify-center h-full"><div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings" aria-hidden="true"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>Preferences</div></div></div></div></div></div></div></div><div class="mt-6"></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
