# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/shuding/cobe-globe-interactive/default
- Registry URL: https://21st.dev/r/shuding/cobe-globe-interactive
- Author: shuding
- Component slug: cobe-globe-interactive
- Demo slug: default
- Title: cobe-globe-interactive
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/shuding/cobe-globe-interactive with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/shuding__cobe-globe-interactive__default.html
- Local screenshot file: generated-21st-prompts/screenshots/shuding__cobe-globe-interactive__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="default.tsx_GlobeInteractiveDemo">default.tsx</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center w-full min-h-screen bg-white p-8 overflow-hidden"><div class="w-full max-w-lg"><div class="relative aspect-square select-none "><style>
        @keyframes fade-slide-in {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 0.8; transform: translateY(0); }
        }
      </style><div style="position: relative; width: 100%; height: 100%;"><canvas width="512" height="512" style="width: 100%; height: 100%; cursor: grab; opacity: 1; transition: opacity 1.2s; border-radius: 50%; touch-action: none;"></canvas><div style="position: absolute; width: 1px; height: 1px; pointer-events: none; anchor-name: --cobe-hq; left: 76.182%; top: 29.5036%;"></div><div style="position: absolute; width: 1px; height: 1px; pointer-events: none; anchor-name: --cobe-eu; left: 45.0393%; top: 14.1561%;"></div><div style="position: absolute; width: 1px; height: 1px; pointer-events: none; anchor-name: --cobe-asia; left: 28.259%; top: 31.9318%;"></div><div style="position: absolute; width: 1px; height: 1px; pointer-events: none; anchor-name: --cobe-latam; left: 77.3695%; top: 60.8153%;"></div><div style="position: absolute; width: 1px; height: 1px; pointer-events: none; anchor-name: --cobe-mena; left: 20.8609%; top: 29.0434%;"></div><div style="position: absolute; width: 1px; height: 1px; pointer-events: none; anchor-name: --cobe-oceania; left: 33.1736%; top: 77.5368%;"></div></div><div style="position: absolute; position-anchor: --cobe-hq; bottom: anchor(top); left: anchor(center); translate: -50%; margin-bottom: 6px; display: flex; flex-direction: column; align-items: center; padding: 0.3rem 0.5rem; background: rgb(26, 26, 46); color: rgb(255, 255, 255); border-radius: 3px; cursor: pointer; box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px; opacity: var(--cobe-visible-hq, 0); filter: blur(calc((1 - var(--cobe-visible-hq, 0)) * 8px)); transition: opacity 0.4s, filter 0.4s, transform 0.2s, padding 0.2s; zoom: 1;"><span style="font-family: monospace; font-size: 0.6rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;">HQ</span></div><div style="position: absolute; position-anchor: --cobe-eu; bottom: anchor(top); left: anchor(center); translate: -50%; margin-bottom: 6px; display: flex; flex-direction: column; align-items: center; padding: 0.3rem 0.5rem; background: rgb(26, 26, 46); color: rgb(255, 255, 255); border-radius: 3px; cursor: pointer; box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px; opacity: var(--cobe-visible-eu, 0); filter: blur(calc((1 - var(--cobe-visible-eu, 0)) * 8px)); transition: opacity 0.4s, filter 0.4s, transform 0.2s, padding 0.2s; zoom: 1;"><span style="font-family: monospace; font-size: 0.6rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;">EU</span></div><div style="position: absolute; position-anchor: --cobe-asia; bottom: anchor(top); left: anchor(center); translate: -50%; margin-bottom: 6px; display: flex; flex-direction: column; align-items: center; padding: 0.3rem 0.5rem; background: rgb(26, 26, 46); color: rgb(255, 255, 255); border-radius: 3px; cursor: pointer; box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px; opacity: var(--cobe-visible-asia, 0); filter: blur(calc((1 - var(--cobe-visible-asia, 0)) * 8px)); transition: opacity 0.4s, filter 0.4s, transform 0.2s, padding 0.2s; zoom: 1;"><span style="font-family: monospace; font-size: 0.6rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;">Asia</span></div><div style="position: absolute; position-anchor: --cobe-latam; bottom: anchor(top); left: anchor(center); translate: -50%; margin-bottom: 6px; display: flex; flex-direction: column; align-items: center; padding: 0.3rem 0.5rem; background: rgb(26, 26, 46); color: rgb(255, 255, 255); border-radius: 3px; cursor: pointer; box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px; opacity: var(--cobe-visible-latam, 0); filter: blur(calc((1 - var(--cobe-visible-latam, 0)) * 8px)); transition: opacity 0.4s, filter 0.4s, transform 0.2s, padding 0.2s; zoom: 1;"><span style="font-family: monospace; font-size: 0.6rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;">LATAM</span></div><div style="position: absolute; position-anchor: --cobe-mena; bottom: anchor(top); left: anchor(center); translate: -50%; margin-bottom: 6px; display: flex; flex-direction: column; align-items: center; padding: 0.3rem 0.5rem; background: rgb(26, 26, 46); color: rgb(255, 255, 255); border-radius: 3px; cursor: pointer; box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px; opacity: var(--cobe-visible-mena, 0); filter: blur(calc((1 - var(--cobe-visible-mena, 0)) * 8px)); transition: opacity 0.4s, filter 0.4s, transform 0.2s, padding 0.2s; zoom: 1;"><span style="font-family: monospace; font-size: 0.6rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;">MENA</span></div><div style="position: absolute; position-anchor: --cobe-oceania; bottom: anchor(top); left: anchor(center); translate: -50%; margin-bottom: 6px; display: flex; flex-direction: column; align-items: center; padding: 0.3rem 0.5rem; background: rgb(26, 26, 46); color: rgb(255, 255, 255); border-radius: 3px; cursor: pointer; box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px; opacity: var(--cobe-visible-oceania, 0); filter: blur(calc((1 - var(--cobe-visible-oceania, 0)) * 8px)); transition: opacity 0.4s, filter 0.4s, transform 0.2s, padding 0.2s; zoom: 1;"><span style="font-family: monospace; font-size: 0.6rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;">APAC</span></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.