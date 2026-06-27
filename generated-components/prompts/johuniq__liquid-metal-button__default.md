# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/johuniq/liquid-metal-button/default
- Registry URL: https://21st.dev/r/johuniq/liquid-metal-button
- Author: johuniq
- Component slug: liquid-metal-button
- Demo slug: default
- Title: liquid-metal-button
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/johuniq/liquid-metal-button with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/johuniq__liquid-metal-button__default.html
- Local screenshot file: generated-21st-prompts/screenshots/johuniq__liquid-metal-button__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col items-center justify-center gap-8 p-8"><div class="flex items-center gap-8"><div class="relative inline-block"><div style="perspective: 1000px; perspective-origin: 50% 50%;"><div style="position: relative; width: 142px; height: 46px; transform-style: preserve-3d; transition: 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s, height 0.4s; transform: none;"><div style="position: absolute; top: 0px; left: 0px; width: 142px; height: 46px; display: flex; align-items: center; justify-content: center; gap: 6px; transform-style: preserve-3d; transition: 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s, height 0.4s, gap 0.4s; transform: translateZ(20px); z-index: 30; pointer-events: none;"><span style="font-size: 14px; color: rgb(102, 102, 102); font-weight: 400; text-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px; transition: 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); transform: scale(1); white-space: nowrap;">Get Started</span></div><div style="position: absolute; top: 0px; left: 0px; width: 142px; height: 46px; transform-style: preserve-3d; transition: 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s, height 0.4s; transform: translateZ(10px) translateY(0px) scale(1); z-index: 20;"><div style="width: 138px; height: 42px; margin: 2px; border-radius: 100px; background: linear-gradient(rgb(32, 32, 32) 0%, rgb(0, 0, 0) 100%); box-shadow: none; transition: 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s, height 0.4s, box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);"></div></div><div style="position: absolute; top: 0px; left: 0px; width: 142px; height: 46px; transform-style: preserve-3d; transition: 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s, height 0.4s; transform: translateZ(0px) translateY(0px) scale(1); z-index: 10;"><div style="height: 46px; width: 142px; border-radius: 100px; box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 0px 1px, rgba(0, 0, 0, 0.02) 0px 36px 14px 0px, rgba(0, 0, 0, 0.08) 0px 20px 12px 0px, rgba(0, 0, 0, 0.12) 0px 9px 9px 0px, rgba(0, 0, 0, 0.15) 0px 2px 5px 0px; transition: 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s, height 0.4s, box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1); background: rgba(0, 0, 0, 0);"><div class="shader-container-exploded" data-paper-shader="" style="border-radius: 100px; overflow: hidden; position: relative; width: 142px; max-width: 142px; height: 46px; transition: width 0.4s, height 0.4s;"><canvas width="284" height="92"></canvas></div></div></div><button aria-label="Get Started" style="position: absolute; top: 0px; left: 0px; width: 142px; height: 46px; background: transparent; border-width: medium; border-style: none; border-color: currentcolor; border-image: initial; cursor: pointer; outline: none; z-index: 40; transform-style: preserve-3d; transform: translateZ(25px); transition: 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s, height 0.4s; overflow: hidden; border-radius: 100px;"></button></div></div></div><div class="relative inline-block"><div style="perspective: 1000px; perspective-origin: 50% 50%;"><div style="position: relative; width: 46px; height: 46px; transform-style: preserve-3d; transition: 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s, height 0.4s; transform: none;"><div style="position: absolute; top: 0px; left: 0px; width: 46px; height: 46px; display: flex; align-items: center; justify-content: center; gap: 6px; transform-style: preserve-3d; transition: 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s, height 0.4s, gap 0.4s; transform: translateZ(20px); z-index: 30; pointer-events: none;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles" aria-hidden="true" style="color: rgb(102, 102, 102); filter: drop-shadow(rgba(0, 0, 0, 0.5) 0px 1px 2px); transition: 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); transform: scale(1);"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg></div><div style="position: absolute; top: 0px; left: 0px; width: 46px; height: 46px; transform-style: preserve-3d; transition: 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s, height 0.4s; transform: translateZ(10px) translateY(0px) scale(1); z-index: 20;"><div style="width: 42px; height: 42px; margin: 2px; border-radius: 100px; background: linear-gradient(rgb(32, 32, 32) 0%, rgb(0, 0, 0) 100%); box-shadow: none; transition: 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s, height 0.4s, box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);"></div></div><div style="position: absolute; top: 0px; left: 0px; width: 46px; height: 46px; transform-style: preserve-3d; transition: 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s, height 0.4s; transform: translateZ(0px) translateY(0px) scale(1); z-index: 10;"><div style="height: 46px; width: 46px; border-radius: 100px; box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 0px 1px, rgba(0, 0, 0, 0.02) 0px 36px 14px 0px, rgba(0, 0, 0, 0.08) 0px 20px 12px 0px, rgba(0, 0, 0, 0.12) 0px 9px 9px 0px, rgba(0, 0, 0, 0.15) 0px 2px 5px 0px; transition: 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s, height 0.4s, box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1); background: rgba(0, 0, 0, 0);"><div class="shader-container-exploded" data-paper-shader="" style="border-radius: 100px; overflow: hidden; position: relative; width: 46px; max-width: 46px; height: 46px; transition: width 0.4s, height 0.4s;"><canvas width="92" height="92"></canvas></div></div></div><button aria-label="Get Started" style="position: absolute; top: 0px; left: 0px; width: 46px; height: 46px; background: transparent; border-width: medium; border-style: none; border-color: currentcolor; border-image: initial; cursor: pointer; outline: none; z-index: 40; transform-style: preserve-3d; transform: translateZ(25px); transition: 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s, height 0.4s; overflow: hidden; border-radius: 100px;"></button></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.