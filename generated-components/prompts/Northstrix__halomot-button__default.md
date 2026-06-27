# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/Northstrix/halomot-button/default
- Registry URL: https://21st.dev/r/Northstrix/halomot-button
- Author: Northstrix
- Component slug: halomot-button
- Demo slug: default
- Title: halomot-button
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/Northstrix/halomot-button with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/Northstrix__halomot-button__default.html
- Local screenshot file: generated-21st-prompts/screenshots/Northstrix__halomot-button__default.png

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
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="named_HalomotButtonDemo_HalomotButtonDemo">HalomotButtonDemo</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><section><div style="display: flex; flex-wrap: wrap; gap: 36px; justify-content: center; align-items: center; border-radius: 8px; min-height: 300px;"><button type="button" style="margin: auto; padding: 1px; background: linear-gradient(135deg, rgb(71, 118, 203), rgb(161, 159, 229), rgb(108, 198, 6)); border: 0px; border-radius: 6.34px; color: var(--halomot-button-foreground); font-weight: bold; display: flex; justify-content: center; align-items: center; text-decoration: none; user-select: none; white-space: nowrap; transition: 0.3s; width: fit-content; flex-direction: row; box-sizing: border-box;"><span style="background: var(--halomot-button-background); padding: 1rem 4rem; border: 0px; border-radius: 6px; width: 100%; height: 100%; transition: color 0.3s, background 300ms; display: flex; align-items: center; justify-content: center; font-weight: bold; color: var(--halomot-button-foreground); white-space: nowrap; font-family: inherit; font-size: 1rem; gap: 0px; flex-direction: row; box-sizing: border-box; cursor: pointer;">חלומות</span></button><button type="button" style="margin: auto; padding: 3px; background: linear-gradient(135deg, rgb(161, 35, 244), rgb(96, 61, 236)); border: 0px; border-radius: 33px; color: var(--halomot-button-foreground); font-weight: bold; display: flex; justify-content: center; align-items: center; text-decoration: none; user-select: none; white-space: nowrap; transition: 0.3s; width: fit-content; flex-direction: row; box-sizing: border-box;"><span style="background: var(--halomot-button-background); padding: 1rem 4rem; border: 0px; border-radius: 32px; width: 100%; height: 100%; transition: color 0.3s, background 300ms; display: flex; align-items: center; justify-content: center; font-weight: bold; color: var(--halomot-button-foreground); white-space: nowrap; font-family: inherit; font-size: 1rem; gap: 0px; flex-direction: row; box-sizing: border-box; cursor: pointer;">עוד אחד</span></button><div style="width: 200px; display: inline-block;"><button type="button" style="margin: 0px; padding: 1px; background: linear-gradient(135deg, rgb(71, 118, 203), rgb(161, 159, 229), rgb(108, 198, 6)); border: 0px; border-radius: 6.34px; color: var(--halomot-button-foreground); font-weight: bold; display: flex; justify-content: center; align-items: center; text-decoration: none; user-select: none; white-space: nowrap; transition: 0.3s; width: 100%; flex-direction: row; box-sizing: border-box;"><span style="background: var(--halomot-button-background); padding: 46px 24px; border: 0px; border-radius: 6px; width: 100%; height: 100%; transition: color 0.3s, background 300ms; display: flex; align-items: center; justify-content: center; font-weight: bold; color: var(--halomot-button-foreground); white-space: nowrap; font-family: inherit; font-size: 1rem; gap: 0px; flex-direction: row; box-sizing: border-box; cursor: pointer;">Custom padding</span></button></div><a href="https://www.github.com/Northstrix" style="margin: auto; padding: 4px; background: linear-gradient(90deg, rgb(250, 204, 21) 0%, rgb(244, 114, 182) 100%); border: 0px; border-radius: 8px; color: var(--halomot-button-foreground); font-weight: bold; display: flex; justify-content: center; align-items: center; text-decoration: none; user-select: none; white-space: nowrap; transition: 0.3s; width: fit-content; flex-direction: row; box-sizing: border-box;"><span style="background: var(--halomot-button-background); padding: 1.25rem 2.5rem; border: 0px; border-radius: 30px; width: 100%; height: 100%; transition: color 0.3s, background 300ms; display: flex; align-items: center; justify-content: center; font-weight: bold; color: var(--halomot-button-foreground); white-space: nowrap; font-family: inherit; font-size: 1rem; gap: 0.5em; flex-direction: row; box-sizing: border-box; cursor: pointer;"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="display: inline-flex; align-items: center; height: 1em; width: 1em; font-size: 1.1em; vertical-align: middle; flex-shrink: 0;"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"></path></svg>That one has an icon and an href</span></a></div></section></div></div>
```

## Public registry source files

No public registry source files were available.