# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/dhmnpunit/mac-os-dock/default
- Registry URL: https://21st.dev/r/dhmnpunit/mac-os-dock
- Author: dhmnpunit
- Component slug: mac-os-dock
- Demo slug: default
- Title: mac-os-dock
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/dhmnpunit/mac-os-dock with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/dhmnpunit__mac-os-dock__default.html
- Local screenshot file: generated-21st-prompts/screenshots/dhmnpunit__mac-os-dock__default.png

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
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="default_DockDemo">DockDemo</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div style="height: 100vh; width: 100vw; display: flex; align-items: center; justify-content: center; overflow: hidden;"><div class="backdrop-blur-md " style="width: 562.01px; background: rgba(45, 45, 45, 0.75); border-radius: 22.656px; border: 1px solid rgba(255, 255, 255, 0.15); box-shadow: rgba(0, 0, 0, 0.4) 0px 5.664px 22.656px, rgba(0, 0, 0, 0.3) 0px 2.832px 11.328px, rgba(255, 255, 255, 0.15) 0px 1px 0px inset, rgba(0, 0, 0, 0.2) 0px -1px 0px inset; padding: 8px;"><div class="relative" style="height: 56.64px; width: 100%;"><div class="absolute cursor-pointer flex flex-col items-center justify-end" title="Finder" style="left: 0px; bottom: 0px; width: 56.64px; height: 56.64px; transform-origin: center bottom; z-index: 10;"><img alt="Finder" width="56.64" height="56.64" class="object-contain" src="https://cdn.jim-nielsen.com/macos/1024/finder-2021-09-10.png?rf=1024" style="filter: drop-shadow(rgba(0, 0, 0, 0.2) 0px 1.6992px 3.3984px);"><div class="absolute" style="bottom: -2px; left: 50%; transform: translateX(-50%); width: 3.3984px; height: 3.3984px; border-radius: 50%; background-color: rgba(255, 255, 255, 0.8); box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 4px;"></div></div><div class="absolute cursor-pointer flex flex-col items-center justify-end" title="Calculator" style="left: 61.1712px; bottom: 0px; width: 56.64px; height: 56.64px; transform-origin: center bottom; z-index: 10;"><img alt="Calculator" width="56.64" height="56.64" class="object-contain" src="https://cdn.jim-nielsen.com/macos/1024/calculator-2021-04-29.png?rf=1024" style="filter: drop-shadow(rgba(0, 0, 0, 0.2) 0px 1.6992px 3.3984px);"></div><div class="absolute cursor-pointer flex flex-col items-center justify-end" title="Terminal" style="left: 122.342px; bottom: 0px; width: 56.64px; height: 56.64px; transform-origin: center bottom; z-index: 10;"><img alt="Terminal" width="56.64" height="56.64" class="object-contain" src="https://cdn.jim-nielsen.com/macos/1024/terminal-2021-06-03.png?rf=1024" style="filter: drop-shadow(rgba(0, 0, 0, 0.2) 0px 1.6992px 3.3984px);"></div><div class="absolute cursor-pointer flex flex-col items-center justify-end" title="Mail" style="left: 183.514px; bottom: 0px; width: 56.64px; height: 56.64px; transform-origin: center bottom; z-index: 10;"><img alt="Mail" width="56.64" height="56.64" class="object-contain" src="https://cdn.jim-nielsen.com/macos/1024/mail-2021-05-25.png?rf=1024" style="filter: drop-shadow(rgba(0, 0, 0, 0.2) 0px 1.6992px 3.3984px);"></div><div class="absolute cursor-pointer flex flex-col items-center justify-end" title="Notes" style="left: 244.685px; bottom: 0px; width: 56.64px; height: 56.64px; transform-origin: center bottom; z-index: 10;"><img alt="Notes" width="56.64" height="56.64" class="object-contain" src="https://cdn.jim-nielsen.com/macos/1024/notes-2021-05-25.png?rf=1024" style="filter: drop-shadow(rgba(0, 0, 0, 0.2) 0px 1.6992px 3.3984px);"></div><div class="absolute cursor-pointer flex flex-col items-center justify-end" title="Safari" style="left: 305.856px; bottom: 0px; width: 56.64px; height: 56.64px; transform-origin: center bottom; z-index: 10;"><img alt="Safari" width="56.64" height="56.64" class="object-contain" src="https://cdn.jim-nielsen.com/macos/1024/safari-2021-06-02.png?rf=1024" style="filter: drop-shadow(rgba(0, 0, 0, 0.2) 0px 1.6992px 3.3984px);"><div class="absolute" style="bottom: -2px; left: 50%; transform: translateX(-50%); width: 3.3984px; height: 3.3984px; border-radius: 50%; background-color: rgba(255, 255, 255, 0.8); box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 4px;"></div></div><div class="absolute cursor-pointer flex flex-col items-center justify-end" title="Photos" style="left: 367.027px; bottom: 0px; width: 56.64px; height: 56.64px; transform-origin: center bottom; z-index: 10;"><img alt="Photos" width="56.64" height="56.64" class="object-contain" src="https://cdn.jim-nielsen.com/macos/1024/photos-2021-05-28.png?rf=1024" style="filter: drop-shadow(rgba(0, 0, 0, 0.2) 0px 1.6992px 3.3984px);"></div><div class="absolute cursor-pointer flex flex-col items-center justify-end" title="Music" style="left: 428.198px; bottom: 0px; width: 56.64px; height: 56.64px; transform-origin: center bottom; z-index: 10;"><img alt="Music" width="56.64" height="56.64" class="object-contain" src="https://cdn.jim-nielsen.com/macos/1024/music-2021-05-25.png?rf=1024" style="filter: drop-shadow(rgba(0, 0, 0, 0.2) 0px 1.6992px 3.3984px);"></div><div class="absolute cursor-pointer flex flex-col items-center justify-end" title="Calendar" style="left: 489.37px; bottom: 0px; width: 56.64px; height: 56.64px; transform-origin: center bottom; z-index: 10;"><img alt="Calendar" width="56.64" height="56.64" class="object-contain" src="https://cdn.jim-nielsen.com/macos/1024/calendar-2021-04-29.png?rf=1024" style="filter: drop-shadow(rgba(0, 0, 0, 0.2) 0px 1.6992px 3.3984px);"></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.