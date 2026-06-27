# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/itsankitverma/animated-menu-bar/default
- Registry URL: https://21st.dev/r/itsankitverma/animated-menu-bar
- Author: itsankitverma
- Component slug: animated-menu-bar
- Demo slug: default
- Title: animated-menu-bar
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/itsankitverma/animated-menu-bar with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/itsankitverma__animated-menu-bar__default.html
- Local screenshot file: generated-21st-prompts/screenshots/itsankitverma__animated-menu-bar__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><nav class="flex items-center gap-2 bg-white dark:bg-zinc-950 p-2 rounded-2xl border border-zinc-200 dark:border-zinc-800 w-fit mx-auto transition-all duration-300"><button type="button" aria-label="Dashboard" class="flex items-center rounded-xl border transition-colors focus:outline-none relative overflow-visible
        border-zinc-400 dark:border-zinc-400 bg-zinc-900 dark:bg-zinc-900 text-white dark:text-white font-semibold
        duration-300
        w-11 sm:w-auto
        px-0 sm:px-4
        justify-center sm:justify-start
        bg-white dark:bg-zinc-950
      " style="min-width: 44px; min-height: 44px; transition: background 0.2s, border 0.2s; padding-top: 8px; padding-bottom: 8px;"><span class="sm:hidden absolute -top-7 left-1/2 -translate-x-1/2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs rounded px-2 py-1 shadow transition-opacity duration-200 pointer-events-none z-20
          opacity-0">Dashboard</span><span class="flex items-center justify-center w-11 h-11"><svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M3 9.5L12 4l9 5.5v7.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.5z"></path><path d="M9 22V12h6v10"></path></svg></span><span class="text-sm transition-all duration-300 whitespace-nowrap pointer-events-none ml-2
          hidden sm:inline
          opacity-100 w-auto" style="transition: opacity 0.3s, width 0.35s cubic-bezier(0.4, 0, 0.2, 1), margin 0.3s; width: 81px;">Dashboard</span></button><div class="w-px h-6 bg-zinc-200 dark:bg-zinc-800 mx-2"></div><button type="button" aria-label="Notifications" class="flex items-center rounded-xl border transition-colors focus:outline-none relative overflow-visible
        border-zinc-300 dark:border-transparent text-zinc-700 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900/60
        duration-300
        w-11 sm:w-auto
        px-0 sm:px-4
        justify-center sm:justify-start
        bg-white dark:bg-zinc-950
      " style="min-width: 44px; min-height: 44px; transition: background 0.2s, border 0.2s; padding-top: 8px; padding-bottom: 8px;"><span class="sm:hidden absolute -top-7 left-1/2 -translate-x-1/2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs rounded px-2 py-1 shadow transition-opacity duration-200 pointer-events-none z-20
          opacity-0">Notifications</span><span class="flex items-center justify-center w-11 h-11"><svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M18 16v-5a6 6 0 1 0-12 0v5l-2 2v1h16v-1l-2-2z"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg></span><span class="text-sm transition-all duration-300 whitespace-nowrap pointer-events-none ml-2
          hidden sm:inline
          opacity-0 w-0" style="transition: opacity 0.3s, width 0.35s cubic-bezier(0.4, 0, 0.2, 1), margin 0.3s; width: 0px;">Notifications</span></button><button type="button" aria-label="Settings" class="flex items-center rounded-xl border transition-colors focus:outline-none relative overflow-visible
        border-zinc-300 dark:border-transparent text-zinc-700 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900/60
        duration-300
        w-11 sm:w-auto
        px-0 sm:px-4
        justify-center sm:justify-start
        bg-white dark:bg-zinc-950
      " style="min-width: 44px; min-height: 44px; transition: background 0.2s, border 0.2s; padding-top: 8px; padding-bottom: 8px;"><span class="sm:hidden absolute -top-7 left-1/2 -translate-x-1/2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs rounded px-2 py-1 shadow transition-opacity duration-200 pointer-events-none z-20
          opacity-0">Settings</span><span class="flex items-center justify-center w-11 h-11"><svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></span><span class="text-sm transition-all duration-300 whitespace-nowrap pointer-events-none ml-2
          hidden sm:inline
          opacity-0 w-0" style="transition: opacity 0.3s, width 0.35s cubic-bezier(0.4, 0, 0.2, 1), margin 0.3s; width: 0px;">Settings</span></button><button type="button" aria-label="Help" class="flex items-center rounded-xl border transition-colors focus:outline-none relative overflow-visible
        border-zinc-300 dark:border-transparent text-zinc-700 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900/60
        duration-300
        w-11 sm:w-auto
        px-0 sm:px-4
        justify-center sm:justify-start
        bg-white dark:bg-zinc-950
      " style="min-width: 44px; min-height: 44px; transition: background 0.2s, border 0.2s; padding-top: 8px; padding-bottom: 8px;"><span class="sm:hidden absolute -top-7 left-1/2 -translate-x-1/2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs rounded px-2 py-1 shadow transition-opacity duration-200 pointer-events-none z-20
          opacity-0">Help</span><span class="flex items-center justify-center w-11 h-11"><svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 1 1 5.82 1c0 2-3 3-3 3"></path><circle cx="12" cy="17" r="1"></circle></svg></span><span class="text-sm transition-all duration-300 whitespace-nowrap pointer-events-none ml-2
          hidden sm:inline
          opacity-0 w-0" style="transition: opacity 0.3s, width 0.35s cubic-bezier(0.4, 0, 0.2, 1), margin 0.3s; width: 0px;">Help</span></button><button type="button" aria-label="Security" class="flex items-center rounded-xl border transition-colors focus:outline-none relative overflow-visible
        border-zinc-300 dark:border-transparent text-zinc-700 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900/60
        duration-300
        w-11 sm:w-auto
        px-0 sm:px-4
        justify-center sm:justify-start
        bg-white dark:bg-zinc-950
      " style="min-width: 44px; min-height: 44px; transition: background 0.2s, border 0.2s; padding-top: 8px; padding-bottom: 8px;"><span class="sm:hidden absolute -top-7 left-1/2 -translate-x-1/2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs rounded px-2 py-1 shadow transition-opacity duration-200 pointer-events-none z-20
          opacity-0">Security</span><span class="flex items-center justify-center w-11 h-11"><svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span><span class="text-sm transition-all duration-300 whitespace-nowrap pointer-events-none ml-2
          hidden sm:inline
          opacity-0 w-0" style="transition: opacity 0.3s, width 0.35s cubic-bezier(0.4, 0, 0.2, 1), margin 0.3s; width: 0px;">Security</span></button></nav></div></div></div>
```

## Public registry source files

No public registry source files were available.