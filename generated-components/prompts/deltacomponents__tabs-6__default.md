# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/deltacomponents/tabs-6/default
- Registry URL: https://21st.dev/r/deltacomponents/tabs-6
- Author: deltacomponents
- Component slug: tabs-6
- Demo slug: default
- Title: tabs-6
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/deltacomponents/tabs-6 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/deltacomponents__tabs-6__default.html
- Local screenshot file: generated-21st-prompts/screenshots/deltacomponents__tabs-6__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="tabs-container w-full"><div class="relative" role="tablist" aria-label="Tabs"><div class="relative"><style>
          .x-scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
          .x-scrollbar-hide::-webkit-scrollbar { display: none; }
        </style><div class="overflow-x-auto overflow-y-hidden whitespace-nowrap x-scrollbar-hide" role="group" aria-label="Horizontal scroll area"><div class="relative pb-px"><div class="absolute bottom-0 left-0 right-0 h-px bg-border dark:bg-border"></div><div class="absolute transition-all duration-300 ease-out flex items-center z-0 h-[32px] text-sm bg-muted dark:bg-muted rounded-[6px]" aria-hidden="true" style="opacity: 0; transition: 300ms ease-out;"></div><div class="relative flex items-center space-x-[6px]"><div class="px-3 py-2 sm:mb-1.5 mb-2 cursor-pointer transition-colors duration-300 h-[32px] text-sm text-foreground dark:text-foreground" role="tab" aria-selected="true" aria-controls="tabpanel-account" id="tab-account" tabindex="0"><div class="whitespace-nowrap flex items-center justify-center h-full"><div>Account</div></div></div><div class="px-3 py-2 sm:mb-1.5 mb-2 cursor-pointer transition-colors duration-300 h-[32px] text-sm text-muted-foreground dark:text-muted-foreground" role="tab" aria-selected="false" aria-controls="tabpanel-password" id="tab-password" tabindex="-1"><div class="whitespace-nowrap flex items-center justify-center h-full"><div>Password</div></div></div><div class="px-3 py-2 sm:mb-1.5 mb-2 cursor-pointer transition-colors duration-300 h-[32px] text-sm text-muted-foreground dark:text-muted-foreground" role="tab" aria-selected="false" aria-controls="tabpanel-notifications" id="tab-notifications" tabindex="-1"><div class="whitespace-nowrap flex items-center justify-center h-full"><div>Notifications</div></div></div></div><div class="absolute transition-all duration-300 ease-out z-10 h-[4px] bg-primary dark:bg-primary bottom-[-1px]" aria-hidden="true" style="left: 0px; width: 77px; bottom: 0px;"></div></div></div></div></div><div role="tabpanel" id="tabpanel-account" aria-labelledby="tab-account"><div class="p-4 rounded-lg border border-border my-4"><h3 class="text-lg font-medium">Account Settings</h3><p class="text-sm text-muted-foreground">Manage your account settings and preferences.</p></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.