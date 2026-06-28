# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/retalkbot/color-picker/default
- Registry URL: https://21st.dev/r/retalkbot/color-picker
- Author: retalkbot
- Component slug: color-picker
- Demo slug: default
- Title: color-picker
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/retalkbot/color-picker with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/retalkbot__color-picker__default.html
- Local screenshot file: generated-21st-prompts/screenshots/retalkbot__color-picker__default.png

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
<div id="root"><div class="p-20 flex flex-col"><div class="flex flex-col bg-slate-100 rounded-xl p-3 self-start relative"><svg class="absolute inset-0 h-full w-full [mask-image:radial-gradient(200px_circle_at_center,white,transparent)] z-10" aria-hidden="true"><defs><pattern id="dotPattern" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="5" cy="5" r="1" class="fill-gray-500/20"></circle></pattern></defs><rect width="100%" height="100%" fill="url(#dotPattern)"></rect></svg><div><div class="select-none relative" style="width: 280px; height: 280px;"><canvas width="280" height="280" class="rounded-full opacity-0"></canvas><div class="absolute rounded-full border-2 border-white/80 shadow pointer-events-none opacity-90 z-20" style="left: 179.616px; top: 61.3165px; width: 28.8px; height: 28.8px; background: rgb(255, 66, 224);"></div><div class="absolute rounded-full border-3 border-white/90 shadow cursor-grab touch-none z-30" style="left: 116px; top: 32px; width: 48px; height: 48px; background: rgb(255, 66, 255);"></div><div class="absolute rounded-full border-2 border-white/80 shadow pointer-events-none opacity-90 z-20" style="left: 72.1492px; top: 61.3165px; width: 28.8px; height: 28.8px; background: rgb(255, 97, 255);"></div></div></div><div class="flex gap-2 justify-center items-center py-2 relative z-20"><button class="text-muted-foreground size-7 rounded text-2xl hover:bg-slate-200 transition-all cursor-pointer flex items-center justify-center">-</button><button class="text-muted-foreground size-7 rounded text-2xl hover:bg-slate-200 transition-all cursor-pointer flex items-center justify-center">+</button></div></div><div class="flex gap-4 mt-4"><div class="px-3 py-1.5 rounded-lg bg-white shadow-sm border text-sm">#ff42e0</div><div class="px-3 py-1.5 rounded-lg bg-white shadow-sm border text-sm">#ff42ff</div><div class="px-3 py-1.5 rounded-lg bg-white shadow-sm border text-sm">#ff61ff</div></div><div class="w-full h-12 rounded mt-4" style="background: linear-gradient(90deg, rgb(255, 66, 224) 0%, rgb(255, 66, 255) 50%, rgb(255, 97, 255) 100%);"></div></div></div>
```

## Public registry source files

No public registry source files were available.