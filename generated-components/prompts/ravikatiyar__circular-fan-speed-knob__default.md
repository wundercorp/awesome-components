# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ravikatiyar/circular-fan-speed-knob/default
- Registry URL: https://21st.dev/r/ravikatiyar/circular-fan-speed-knob
- Author: ravikatiyar
- Component slug: circular-fan-speed-knob
- Demo slug: default
- Title: circular-fan-speed-knob
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ravikatiyar/circular-fan-speed-knob with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ravikatiyar__circular-fan-speed-knob__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ravikatiyar__circular-fan-speed-knob__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col items-center justify-center gap-6 p-4"><div class="relative w-60 h-60 rounded-full bg-background select-none flex items-center justify-center shadow-inner-lg dark:shadow-inner-xl border-4 border-muted" role="radiogroup"><div class="absolute w-[92%] h-[92%] rounded-full bg-muted shadow-lg"></div><div class="absolute w-[60%] h-[60%] rounded-full bg-background border-2 border-border shadow-inner-md"></div><div class="absolute w-[50%] h-[50%] rounded-full bg-accent"></div><div class="absolute top-1/2 left-1/2 w-1/2 h-2.5 -translate-y-1/2 origin-left transition-transform duration-500 ease-in-out" style="transform: rotate(0deg);"><div class="absolute left-4 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary"></div></div><label class="absolute top-1/2 left-1/2 w-1/2 h-20 -translate-y-1/2 origin-left flex items-center" style="transform: rotate(0deg);"><input class="sr-only" type="radio" value="off" checked="" name="fan-speed"><span class="absolute right-4 text-sm font-medium cursor-pointer text-muted-foreground transition-colors hover:text-foreground" style="transform: rotate(0deg);">OFF</span></label><label class="absolute top-1/2 left-1/2 w-1/2 h-20 -translate-y-1/2 origin-left flex items-center" style="transform: rotate(60deg);"><input class="sr-only" type="radio" value="1" name="fan-speed"><span class="absolute right-4 text-sm font-medium cursor-pointer text-muted-foreground transition-colors hover:text-foreground" style="transform: rotate(-60deg);">1</span></label><label class="absolute top-1/2 left-1/2 w-1/2 h-20 -translate-y-1/2 origin-left flex items-center" style="transform: rotate(120deg);"><input class="sr-only" type="radio" value="2" name="fan-speed"><span class="absolute right-4 text-sm font-medium cursor-pointer text-muted-foreground transition-colors hover:text-foreground" style="transform: rotate(-120deg);">2</span></label><label class="absolute top-1/2 left-1/2 w-1/2 h-20 -translate-y-1/2 origin-left flex items-center" style="transform: rotate(180deg);"><input class="sr-only" type="radio" value="3" name="fan-speed"><span class="absolute right-4 text-sm font-medium cursor-pointer text-muted-foreground transition-colors hover:text-foreground" style="transform: rotate(-180deg);">3</span></label><label class="absolute top-1/2 left-1/2 w-1/2 h-20 -translate-y-1/2 origin-left flex items-center" style="transform: rotate(240deg);"><input class="sr-only" type="radio" value="4" name="fan-speed"><span class="absolute right-4 text-sm font-medium cursor-pointer text-muted-foreground transition-colors hover:text-foreground" style="transform: rotate(-240deg);">4</span></label><label class="absolute top-1/2 left-1/2 w-1/2 h-20 -translate-y-1/2 origin-left flex items-center" style="transform: rotate(300deg);"><input class="sr-only" type="radio" value="5" name="fan-speed"><span class="absolute right-4 text-sm font-medium cursor-pointer text-muted-foreground transition-colors hover:text-foreground" style="transform: rotate(-300deg);">5</span></label></div><p class="text-sm text-muted-foreground">Current Fan Speed: <span class="font-bold text-foreground">off</span></p></div></div></div></div>
```

## Public registry source files

No public registry source files were available.