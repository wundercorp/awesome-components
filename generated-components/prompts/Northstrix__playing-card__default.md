# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/Northstrix/playing-card/default
- Registry URL: https://21st.dev/r/Northstrix/playing-card
- Author: Northstrix
- Component slug: playing-card
- Demo slug: default
- Title: playing-card
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/Northstrix/playing-card with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/Northstrix__playing-card__default.html
- Local screenshot file: generated-21st-prompts/screenshots/Northstrix__playing-card__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div style="max-width: 440px; margin: 0px auto;"><div style="color: var(--playingcard-bg); font-size: 1rem; font-family: system-ui, sans-serif; opacity: 0.8; margin-bottom: 1.5rem; text-align: center; letter-spacing: 0.01em; font-weight: 400; transition: color 0.3s;">Click on the card to show/hide dynamic background</div><div data-component-id="card-1" style="max-width: 412px; width: 100%;"><div style="border-radius: 18px; padding: 1px; background: var(--playingcard-outline-color); display: inline-block; width: 100%; aspect-ratio: 3 / 4; transition: background 2s ease-in-out 0.7s; position: relative;"><div style="background-color: var(--playingcard-bg); border-radius: 18px; width: 100%; height: 100%; display: flex; flex-direction: column; color: var(--playingcard-fg); position: relative; overflow: hidden; padding: 0px;"><div id="card-1-text" style="position: absolute; top: 20px; left: 20px; display: flex; flex-direction: column; z-index: 2; color: var(--playingcard-inscription-color); font-weight: bold; font-size: 23.28px; transition: color 2.4s ease-in-out 1s; pointer-events: none;"><div style="transform: none; margin-bottom: 0px; letter-spacing: -2px;">洪</div><div style="transform: translateY(-2px); margin-bottom: 0px; letter-spacing: -2px;">秀</div><div style="transform: translateY(-4px); margin-bottom: 0px; letter-spacing: -2px;">全</div></div><div id="card-1-mirror" style="position: absolute; bottom: 20px; right: 20px; display: flex; flex-direction: column; transform: scale(-1); z-index: 2; color: var(--playingcard-inscription-color); font-weight: bold; font-size: 23.28px; transition: color 2.4s ease-in-out 1s; pointer-events: none;"><div style="transform: none; margin-bottom: 0px; letter-spacing: -2px;">洪</div><div style="transform: translateY(-2px); margin-bottom: 0px; letter-spacing: -2px;">秀</div><div style="transform: translateY(-4px); margin-bottom: 0px; letter-spacing: -2px;">全</div></div><div style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; z-index: 2; pointer-events: none;"><div style="height: 36%; aspect-ratio: 1 / 1; width: auto; display: flex; align-items: center; justify-content: center;"><img alt="" sizes="412px 3 4" draggable="false" src="https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/playground-card-image.webp" style="object-fit: contain; object-position: center center; pointer-events: none;"></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.