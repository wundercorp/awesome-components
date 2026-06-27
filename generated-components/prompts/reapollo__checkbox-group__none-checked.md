# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/reapollo/checkbox-group/none-checked
- Registry URL: https://21st.dev/r/reapollo/checkbox-group
- Author: reapollo
- Component slug: checkbox-group
- Demo slug: none-checked
- Title: checkbox-group
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/reapollo/checkbox-group with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/reapollo__checkbox-group__none-checked.html
- Local screenshot file: generated-21st-prompts/screenshots/reapollo__checkbox-group__none-checked.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center min-h-screen bg-background"><div role="group" class="relative flex flex-col gap-0.5 max-w-full select-none w-80"><div data-proximity-index="0" tabindex="0" role="checkbox" aria-checked="false" aria-label="Email notifications" class="relative z-10 flex items-center gap-2.5 rounded-[20px] px-3 py-2 cursor-pointer outline-none"><button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" tabindex="-1" aria-hidden="true" class="relative w-[18px] h-[18px] shrink-0 appearance-none bg-transparent p-0 border-0 outline-none cursor-pointer"><div class="absolute inset-0 rounded-[5px] border-solid transition-all duration-80 border-[1.5px] border-border"></div></button><span class="inline-grid text-[13px]"><span class="col-start-1 row-start-1 invisible" aria-hidden="true" style="font-variation-settings: &quot;wght&quot; 550;">Email notifications</span><span class="col-start-1 row-start-1 transition-[color,font-variation-settings] duration-80 text-muted-foreground" style="font-variation-settings: &quot;wght&quot; 400;">Email notifications</span></span></div><div data-proximity-index="1" tabindex="0" role="checkbox" aria-checked="false" aria-label="Push notifications" class="relative z-10 flex items-center gap-2.5 rounded-[20px] px-3 py-2 cursor-pointer outline-none"><button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" tabindex="-1" aria-hidden="true" class="relative w-[18px] h-[18px] shrink-0 appearance-none bg-transparent p-0 border-0 outline-none cursor-pointer"><div class="absolute inset-0 rounded-[5px] border-solid transition-all duration-80 border-[1.5px] border-border"></div></button><span class="inline-grid text-[13px]"><span class="col-start-1 row-start-1 invisible" aria-hidden="true" style="font-variation-settings: &quot;wght&quot; 550;">Push notifications</span><span class="col-start-1 row-start-1 transition-[color,font-variation-settings] duration-80 text-muted-foreground" style="font-variation-settings: &quot;wght&quot; 400;">Push notifications</span></span></div><div data-proximity-index="2" tabindex="0" role="checkbox" aria-checked="false" aria-label="SMS alerts" class="relative z-10 flex items-center gap-2.5 rounded-[20px] px-3 py-2 cursor-pointer outline-none"><button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" tabindex="-1" aria-hidden="true" class="relative w-[18px] h-[18px] shrink-0 appearance-none bg-transparent p-0 border-0 outline-none cursor-pointer"><div class="absolute inset-0 rounded-[5px] border-solid transition-all duration-80 border-[1.5px] border-border"></div></button><span class="inline-grid text-[13px]"><span class="col-start-1 row-start-1 invisible" aria-hidden="true" style="font-variation-settings: &quot;wght&quot; 550;">SMS alerts</span><span class="col-start-1 row-start-1 transition-[color,font-variation-settings] duration-80 text-muted-foreground" style="font-variation-settings: &quot;wght&quot; 400;">SMS alerts</span></span></div><div data-proximity-index="3" tabindex="0" role="checkbox" aria-checked="false" aria-label="Weekly digest" class="relative z-10 flex items-center gap-2.5 rounded-[20px] px-3 py-2 cursor-pointer outline-none"><button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" tabindex="-1" aria-hidden="true" class="relative w-[18px] h-[18px] shrink-0 appearance-none bg-transparent p-0 border-0 outline-none cursor-pointer"><div class="absolute inset-0 rounded-[5px] border-solid transition-all duration-80 border-[1.5px] border-border"></div></button><span class="inline-grid text-[13px]"><span class="col-start-1 row-start-1 invisible" aria-hidden="true" style="font-variation-settings: &quot;wght&quot; 550;">Weekly digest</span><span class="col-start-1 row-start-1 transition-[color,font-variation-settings] duration-80 text-muted-foreground" style="font-variation-settings: &quot;wght&quot; 400;">Weekly digest</span></span></div><div data-proximity-index="4" tabindex="0" role="checkbox" aria-checked="false" aria-label="Monthly report" class="relative z-10 flex items-center gap-2.5 rounded-[20px] px-3 py-2 cursor-pointer outline-none"><button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" tabindex="-1" aria-hidden="true" class="relative w-[18px] h-[18px] shrink-0 appearance-none bg-transparent p-0 border-0 outline-none cursor-pointer"><div class="absolute inset-0 rounded-[5px] border-solid transition-all duration-80 border-[1.5px] border-border"></div></button><span class="inline-grid text-[13px]"><span class="col-start-1 row-start-1 invisible" aria-hidden="true" style="font-variation-settings: &quot;wght&quot; 550;">Monthly report</span><span class="col-start-1 row-start-1 transition-[color,font-variation-settings] duration-80 text-muted-foreground" style="font-variation-settings: &quot;wght&quot; 400;">Monthly report</span></span></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.