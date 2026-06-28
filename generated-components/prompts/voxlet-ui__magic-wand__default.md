# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/voxlet-ui/magic-wand/default
- Registry URL: https://21st.dev/r/voxlet-ui/magic-wand
- Author: voxlet-ui
- Component slug: magic-wand
- Demo slug: default
- Title: magic-wand
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/voxlet-ui/magic-wand with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/voxlet-ui__magic-wand__default.html
- Local screenshot file: generated-21st-prompts/screenshots/voxlet-ui__magic-wand__default.png

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
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="default_MagicWandDemo">MagicWandDemo</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-[rgb(2,6,23)] h-screen overflow-hidden grid place-items-center"><div class="flex"><div class="w-[10vmin] aspect-[1/10] absolute left-[5%] top-[20%] -translate-x-1/2 z-[100] rounded-[3vmin] shadow-[0vmin_1vmin_4vmin_rgba(0,0,0,0.8)] overflow-hidden pointer-events-none" style="background: linear-gradient(to right, rgb(26, 24, 28) 10%, rgb(42, 40, 44) 45%, rgb(42, 40, 44) 55%, rgb(26, 24, 28) 90%); transform: none;"><div class="h-[20%] w-full" style="background: linear-gradient(to right, rgb(212, 221, 236) 10%, rgb(255, 255, 255) 45%, rgb(255, 255, 255) 55%, rgb(212, 221, 236) 90%);"></div></div><div class="tile grid place-items-center w-[38vmin] aspect-square bg-[rgb(31,41,55)] rounded-[6vmin] shadow-[0vmin_3vmin_6vmin_rgba(0,0,0,0.25),inset_0vmin_0.5vmin_1vmin_rgba(255,255,255,0.15)] relative overflow-hidden rotate-3 z-[3]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera text-[20vmin] text-white/20" aria-hidden="true"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg><img alt="Tile image" class="h-full aspect-square absolute left-0 top-0 object-cover" src="https://images.pexels.com/photos/27073784/pexels-photo-27073784/free-photo-of-bumblebee-on-a-sunflower.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" style="opacity: 0; filter: blur(10px);"></div><div class="tile grid place-items-center w-[38vmin] aspect-square bg-[rgb(31,41,55)] rounded-[6vmin] shadow-[0vmin_3vmin_6vmin_rgba(0,0,0,0.25),inset_0vmin_0.5vmin_1vmin_rgba(255,255,255,0.15)] relative overflow-hidden -rotate-2 z-[2] -ml-[10vmin]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-image text-[12vmin] text-white/15" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><circle cx="10" cy="12" r="2"></circle><path d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"></path></svg><img alt="Tile image" class="h-full aspect-square absolute left-0 top-0 object-cover" src="https://images.pexels.com/photos/19087694/pexels-photo-19087694/free-photo-of-ice-cream-with-cookies-and-chocolate.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" style="opacity: 0; filter: blur(10px);"></div><div class="tile grid place-items-center w-[38vmin] aspect-square bg-[rgb(31,41,55)] rounded-[6vmin] shadow-[0vmin_3vmin_6vmin_rgba(0,0,0,0.25),inset_0vmin_0.5vmin_1vmin_rgba(255,255,255,0.15)] relative overflow-hidden rotate-5 z-[1] -ml-[10vmin]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image text-[20vmin] text-white/20" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg><img alt="Tile image" class="h-full aspect-square absolute left-0 top-0 object-cover" src="https://images.pexels.com/photos/638341/pexels-photo-638341.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" style="opacity: 0; filter: blur(10px);"></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.