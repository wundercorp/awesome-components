# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hextaui/phone-input/default
- Registry URL: https://21st.dev/r/hextaui/phone-input
- Author: hextaui
- Component slug: phone-input
- Demo slug: default
- Title: phone-input
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hextaui/phone-input with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hextaui__phone-input__default.html
- Local screenshot file: generated-21st-prompts/screenshots/hextaui__phone-input__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div><div class="flex w-full items-center gap-2 bg-transparent font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 h-8 sm:h-9 px-2 sm:px-3 text-xs sm:text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg><div class="flex items-center gap-1 shrink-0"><button type="button" role="combobox" aria-controls="radix-«r0»" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" class="group flex w-full items-center justify-between rounded-ele text-sm transition-all placeholder:text-muted-foreground focus:outline-none focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 border border-border hover:bg-accent hover:text-accent-foreground gap-3 h-auto border-none bg-transparent p-0 shadow-none focus:ring-0 focus-visible:ring-transparent focus-visible:border-transparent focus-visible:outline-transparent active:ring-transparent active:border-transparent active:outline-transparent focus:ring-transparent focus:border-transparent focus:outline-transparent"><div class="flex items-center gap-2 flex-1 min-w-0"><span class="truncate"><span style="pointer-events: none;"><div class="flex items-center gap-1"><span class="text-xs text-muted-foreground">+1</span></div></span></span></div> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down opacity-50 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></div><div class="relative w-full"><input class="flex w-full rounded-ele border text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all border-border h-9 border-none bg-transparent p-0 shadow-none focus-visible:ring-transparent focus-visible:border-transparent focus-visible:outline-transparent" placeholder="(555) 123-4567" maxlength="14" type="tel" value=""></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.