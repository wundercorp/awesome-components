# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/reapollo/checkbox-group/default
- Registry URL: https://21st.dev/r/reapollo/checkbox-group
- Author: reapollo
- Component slug: checkbox-group
- Demo slug: default
- Title: checkbox-group
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/reapollo/checkbox-group with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/reapollo__checkbox-group__default.html
- Local screenshot file: generated-21st-prompts/screenshots/reapollo__checkbox-group__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center min-h-screen bg-background"><div role="group" class="relative flex flex-col gap-0.5 max-w-full select-none w-80"><div class="absolute rounded-[20px] bg-neutral-200/50 dark:bg-neutral-800/40 pointer-events-none" style="top: 0px; left: 0px; width: 320px; height: 35.5px; opacity: 1;"></div><div class="absolute rounded-[20px] bg-neutral-200/50 dark:bg-neutral-800/40 pointer-events-none" style="top: 75px; left: 0px; width: 320px; height: 35.5px; opacity: 1;"></div><div data-proximity-index="0" tabindex="0" role="checkbox" aria-checked="true" aria-label="Design System" class="relative z-10 flex items-center gap-2.5 rounded-[20px] px-3 py-2 cursor-pointer outline-none"><button type="button" role="checkbox" aria-checked="true" data-state="checked" value="on" tabindex="-1" aria-hidden="true" class="relative w-[18px] h-[18px] shrink-0 appearance-none bg-transparent p-0 border-0 outline-none cursor-pointer"><div class="absolute inset-0 rounded-[5px] border-solid transition-all duration-80 border-[1.5px] border-transparent"></div><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute inset-0 text-foreground" data-state="checked" style="pointer-events: none; opacity: 1;"><path d="M6 12L10 16L18 8" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path></svg></button><span class="inline-grid text-[13px]"><span class="col-start-1 row-start-1 invisible" aria-hidden="true" style="font-variation-settings: &quot;wght&quot; 550;">Design System</span><span class="col-start-1 row-start-1 transition-[color,font-variation-settings] duration-80 text-foreground" style="font-variation-settings: &quot;wght&quot; 550;">Design System</span></span></div><div data-proximity-index="1" tabindex="0" role="checkbox" aria-checked="false" aria-label="Components" class="relative z-10 flex items-center gap-2.5 rounded-[20px] px-3 py-2 cursor-pointer outline-none"><button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" tabindex="-1" aria-hidden="true" class="relative w-[18px] h-[18px] shrink-0 appearance-none bg-transparent p-0 border-0 outline-none cursor-pointer"><div class="absolute inset-0 rounded-[5px] border-solid transition-all duration-80 border-[1.5px] border-border"></div></button><span class="inline-grid text-[13px]"><span class="col-start-1 row-start-1 invisible" aria-hidden="true" style="font-variation-settings: &quot;wght&quot; 550;">Components</span><span class="col-start-1 row-start-1 transition-[color,font-variation-settings] duration-80 text-muted-foreground" style="font-variation-settings: &quot;wght&quot; 400;">Components</span></span></div><div data-proximity-index="2" tabindex="0" role="checkbox" aria-checked="true" aria-label="Animation" class="relative z-10 flex items-center gap-2.5 rounded-[20px] px-3 py-2 cursor-pointer outline-none"><button type="button" role="checkbox" aria-checked="true" data-state="checked" value="on" tabindex="-1" aria-hidden="true" class="relative w-[18px] h-[18px] shrink-0 appearance-none bg-transparent p-0 border-0 outline-none cursor-pointer"><div class="absolute inset-0 rounded-[5px] border-solid transition-all duration-80 border-[1.5px] border-transparent"></div><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute inset-0 text-foreground" data-state="checked" style="pointer-events: none; opacity: 1;"><path d="M6 12L10 16L18 8" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path></svg></button><span class="inline-grid text-[13px]"><span class="col-start-1 row-start-1 invisible" aria-hidden="true" style="font-variation-settings: &quot;wght&quot; 550;">Animation</span><span class="col-start-1 row-start-1 transition-[color,font-variation-settings] duration-80 text-foreground" style="font-variation-settings: &quot;wght&quot; 550;">Animation</span></span></div><div data-proximity-index="3" tabindex="0" role="checkbox" aria-checked="false" aria-label="Accessibility" class="relative z-10 flex items-center gap-2.5 rounded-[20px] px-3 py-2 cursor-pointer outline-none"><button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" tabindex="-1" aria-hidden="true" class="relative w-[18px] h-[18px] shrink-0 appearance-none bg-transparent p-0 border-0 outline-none cursor-pointer"><div class="absolute inset-0 rounded-[5px] border-solid transition-all duration-80 border-[1.5px] border-border"></div></button><span class="inline-grid text-[13px]"><span class="col-start-1 row-start-1 invisible" aria-hidden="true" style="font-variation-settings: &quot;wght&quot; 550;">Accessibility</span><span class="col-start-1 row-start-1 transition-[color,font-variation-settings] duration-80 text-muted-foreground" style="font-variation-settings: &quot;wght&quot; 400;">Accessibility</span></span></div><div data-proximity-index="4" tabindex="0" role="checkbox" aria-checked="false" aria-label="Documentation" class="relative z-10 flex items-center gap-2.5 rounded-[20px] px-3 py-2 cursor-pointer outline-none"><button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" tabindex="-1" aria-hidden="true" class="relative w-[18px] h-[18px] shrink-0 appearance-none bg-transparent p-0 border-0 outline-none cursor-pointer"><div class="absolute inset-0 rounded-[5px] border-solid transition-all duration-80 border-[1.5px] border-border"></div></button><span class="inline-grid text-[13px]"><span class="col-start-1 row-start-1 invisible" aria-hidden="true" style="font-variation-settings: &quot;wght&quot; 550;">Documentation</span><span class="col-start-1 row-start-1 transition-[color,font-variation-settings] duration-80 text-muted-foreground" style="font-variation-settings: &quot;wght&quot; 400;">Documentation</span></span></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.