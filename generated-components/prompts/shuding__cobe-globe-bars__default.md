# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/shuding/cobe-globe-bars/default
- Registry URL: https://21st.dev/r/shuding/cobe-globe-bars
- Author: shuding
- Component slug: cobe-globe-bars
- Demo slug: default
- Title: cobe-globe-bars
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/shuding/cobe-globe-bars with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/shuding__cobe-globe-bars__default.html
- Local screenshot file: generated-21st-prompts/screenshots/shuding__cobe-globe-bars__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="default.tsx_GlobeBarsDemo">default.tsx</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center w-full min-h-screen bg-white p-8 overflow-hidden"><div class="w-full max-w-lg"><div class="relative aspect-square select-none "><style>
        @keyframes bar-fill { from { width: 0; } to { width: var(--value, 0%); } }
      </style><div style="position: relative; width: 100%; height: 100%;"><canvas width="512" height="512" style="width: 100%; height: 100%; cursor: grab; opacity: 1; transition: opacity 1.2s; border-radius: 50%; touch-action: none;"></canvas><div style="position: absolute; width: 1px; height: 1px; pointer-events: none; anchor-name: --cobe-bar-1; left: 77.2854%; top: 21.8037%;"></div><div style="position: absolute; width: 1px; height: 1px; pointer-events: none; anchor-name: --cobe-bar-2; left: 45.7898%; top: 14.4408%;"></div><div style="position: absolute; width: 1px; height: 1px; pointer-events: none; anchor-name: --cobe-bar-3; left: 33.5174%; top: 32.6976%;"></div><div style="position: absolute; width: 1px; height: 1px; pointer-events: none; anchor-name: --cobe-bar-4; left: 13.3799%; top: 52.268%;"></div></div><div style="position: absolute; position-anchor: --cobe-bar-1; bottom: anchor(top); left: anchor(center); translate: -50%; margin-bottom: 8px; display: flex; flex-direction: column; align-items: center; gap: 0.2rem; padding: 0.35rem 0.5rem; background: rgb(255, 255, 255); border: 1.5px solid rgb(26, 26, 46); border-radius: 3px; min-width: 60px; pointer-events: none; box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px; opacity: var(--cobe-visible-bar-1, 0); filter: blur(calc((1 - var(--cobe-visible-bar-1, 0)) * 8px)); transition: opacity 0.4s, filter 0.4s;"><span style="font-family: monospace; font-size: 0.5rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: rgb(136, 136, 136);">NYC</span><span style="width: 100%; height: 6px; background: rgb(238, 238, 238); border-radius: 3px; overflow: hidden;"><span style="display: block; height: 100%; width: 85%; background: rgb(26, 26, 46); border-radius: 3px; animation: 1s ease-out 0s 1 normal forwards running bar-fill; --value: 85%;"></span></span><span style="font-family: monospace; font-size: 0.65rem; font-weight: 600; color: rgb(26, 26, 46);">85%</span></div><div style="position: absolute; position-anchor: --cobe-bar-2; bottom: anchor(top); left: anchor(center); translate: -50%; margin-bottom: 8px; display: flex; flex-direction: column; align-items: center; gap: 0.2rem; padding: 0.35rem 0.5rem; background: rgb(255, 255, 255); border: 1.5px solid rgb(26, 26, 46); border-radius: 3px; min-width: 60px; pointer-events: none; box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px; opacity: var(--cobe-visible-bar-2, 0); filter: blur(calc((1 - var(--cobe-visible-bar-2, 0)) * 8px)); transition: opacity 0.4s, filter 0.4s;"><span style="font-family: monospace; font-size: 0.5rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: rgb(136, 136, 136);">London</span><span style="width: 100%; height: 6px; background: rgb(238, 238, 238); border-radius: 3px; overflow: hidden;"><span style="display: block; height: 100%; width: 62%; background: rgb(26, 26, 46); border-radius: 3px; animation: 1s ease-out 0s 1 normal forwards running bar-fill; --value: 62%;"></span></span><span style="font-family: monospace; font-size: 0.65rem; font-weight: 600; color: rgb(26, 26, 46);">62%</span></div><div style="position: absolute; position-anchor: --cobe-bar-3; bottom: anchor(top); left: anchor(center); translate: -50%; margin-bottom: 8px; display: flex; flex-direction: column; align-items: center; gap: 0.2rem; padding: 0.35rem 0.5rem; background: rgb(255, 255, 255); border: 1.5px solid rgb(26, 26, 46); border-radius: 3px; min-width: 60px; pointer-events: none; box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px; opacity: var(--cobe-visible-bar-3, 0); filter: blur(calc((1 - var(--cobe-visible-bar-3, 0)) * 8px)); transition: opacity 0.4s, filter 0.4s;"><span style="font-family: monospace; font-size: 0.5rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: rgb(136, 136, 136);">Tokyo</span><span style="width: 100%; height: 6px; background: rgb(238, 238, 238); border-radius: 3px; overflow: hidden;"><span style="display: block; height: 100%; width: 94%; background: rgb(26, 26, 46); border-radius: 3px; animation: 1s ease-out 0s 1 normal forwards running bar-fill; --value: 94%;"></span></span><span style="font-family: monospace; font-size: 0.65rem; font-weight: 600; color: rgb(26, 26, 46);">94%</span></div><div style="position: absolute; position-anchor: --cobe-bar-4; bottom: anchor(top); left: anchor(center); translate: -50%; margin-bottom: 8px; display: flex; flex-direction: column; align-items: center; gap: 0.2rem; padding: 0.35rem 0.5rem; background: rgb(255, 255, 255); border: 1.5px solid rgb(26, 26, 46); border-radius: 3px; min-width: 60px; pointer-events: none; box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px; opacity: var(--cobe-visible-bar-4, 0); filter: blur(calc((1 - var(--cobe-visible-bar-4, 0)) * 8px)); transition: opacity 0.4s, filter 0.4s;"><span style="font-family: monospace; font-size: 0.5rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: rgb(136, 136, 136);">Singapore</span><span style="width: 100%; height: 6px; background: rgb(238, 238, 238); border-radius: 3px; overflow: hidden;"><span style="display: block; height: 100%; width: 78%; background: rgb(26, 26, 46); border-radius: 3px; animation: 1s ease-out 0s 1 normal forwards running bar-fill; --value: 78%;"></span></span><span style="font-family: monospace; font-size: 0.65rem; font-weight: 600; color: rgb(26, 26, 46);">78%</span></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.