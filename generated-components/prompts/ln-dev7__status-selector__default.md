# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ln-dev7/status-selector/default
- Registry URL: https://21st.dev/r/ln-dev7/status-selector
- Author: ln-dev7
- Component slug: status-selector
- Demo slug: default
- Title: status-selector
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ln-dev7/status-selector with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ln-dev7__status-selector__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ln-dev7__status-selector__default.png

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
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="named_DemoOne_StatusSelectorDemo">StatusSelectorDemo</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex w-full flex-col items-center justify-center gap-10 p-4"><div class="flex flex-col items-center gap-2"><h2 class="text-lg font-semibold">Status Selector Demo</h2><p class="text-sm text-muted-foreground">Click the icon to change the current status.</p></div><div class=""><button type="submit" tabindex="0" class="flex size-7 items-center justify-center" id="«r0»" variant="ghost" role="combobox" aria-expanded="false" aria-haspopup="dialog" aria-controls="radix-«r1»" data-state="closed"><span class="overflow-hidden whitespace-nowrap overflow-ellipsis font-sans px-1.5"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="none" stroke="#e2e2e2" stroke-width="2" stroke-dasharray="3.14 0" stroke-dashoffset="-0.7"></circle><circle cx="7" cy="7" r="2" fill="none" stroke="#e2e2e2" stroke-width="4" transform="rotate(-90 7 7)"></circle></svg></span></button></div><div class="flex w-full max-w-xs flex-col items-center gap-3 rounded-lg border bg-background p-6 shadow-sm"><h3 class="text-base font-medium text-muted-foreground">Current Status</h3><div class="flex items-center gap-2.5 text-lg font-semibold" style="color: rgb(249, 115, 22);"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" class="size-5"><circle cx="7" cy="7" r="6" fill="none" stroke="#e2e2e2" stroke-width="2" stroke-dasharray="3.14 0" stroke-dashoffset="-0.7"></circle><circle cx="7" cy="7" r="2" fill="none" stroke="#e2e2e2" stroke-width="4" transform="rotate(-90 7 7)"></circle></svg><span>Todo</span></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.