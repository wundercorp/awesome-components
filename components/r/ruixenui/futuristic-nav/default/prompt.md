# Build Futuristic Nav in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Futuristic Nav screenshot](screenshot.png)

## Component

- Author group: `ruixenui`
- Component: `futuristic-nav`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ruixenui
- Component slug: futuristic-nav
- Demo slug: default
- Title: futuristic-nav
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"><div class="relative flex items-center justify-center gap-6 bg-white/20 dark:bg-black/20 backdrop-blur-2xl rounded-full px-6 py-3 shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"><div class="absolute w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl -z-10" style="opacity: 1; left: calc(8.33333%); transform: translateX(-50%);"></div><div class="relative flex flex-col items-center group"><button class="flex items-center justify-center w-14 h-14 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 relative z-10" style="transform: scale(1.4);"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house" aria-hidden="true"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg></button><span class="absolute bottom-full mb-2 px-2 py-1 text-xs rounded-md bg-gray-500 text-white dark:bg-gray-200 dark:text-black opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Home</span></div><div class="relative flex flex-col items-center group"><button class="flex items-center justify-center w-14 h-14 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 relative z-10" style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg></button><span class="absolute bottom-full mb-2 px-2 py-1 text-xs rounded-md bg-gray-500 text-white dark:bg-gray-200 dark:text-black opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Search</span></div><div class="relative flex flex-col items-center group"><button class="flex items-center justify-center w-14 h-14 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 relative z-10" style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell" aria-hidden="true"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg></button><span class="absolute bottom-full mb-2 px-2 py-1 text-xs rounded-md bg-gray-500 text-white dark:bg-gray-200 dark:text-black opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Alerts</span></div><div class="relative flex flex-col items-center group"><button class="flex items-center justify-center w-14 h-14 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 relative z-10" style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></button><span class="absolute bottom-full mb-2 px-2 py-1 text-xs rounded-md bg-gray-500 text-white dark:bg-gray-200 dark:text-black opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Profile</span></div><div class="relative flex flex-col items-center group"><button class="flex items-center justify-center w-14 h-14 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 relative z-10" style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark" aria-hidden="true"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg></button><span class="absolute bottom-full mb-2 px-2 py-1 text-xs rounded-md bg-gray-500 text-white dark:bg-gray-200 dark:text-black opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Saved</span></div><div class="relative flex flex-col items-center group"><button class="flex items-center justify-center w-14 h-14 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 relative z-10" style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings" aria-hidden="true"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg></button><span class="absolute bottom-full mb-2 px-2 py-1 text-xs rounded-md bg-gray-500 text-white dark:bg-gray-200 dark:text-black opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Settings</span></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
