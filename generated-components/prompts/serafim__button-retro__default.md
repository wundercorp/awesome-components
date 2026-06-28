# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/serafim/button-retro/default
- Registry URL: https://21st.dev/r/serafim/button-retro
- Author: serafim
- Component slug: button-retro
- Demo slug: default
- Title: button-retro
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/serafim/button-retro with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/serafim__button-retro__default.html
- Local screenshot file: generated-21st-prompts/screenshots/serafim__button-retro__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen flex items-center justify-center"><div class="flex flex-wrap justify-center items-center max-w-[26em] gap-4"><button class="relative inline-flex items-center justify-center w-24 border-2 border-transparent rounded-[2px] bg-[#010101] shadow-[1px_1px_1px_rgba(255,255,255,0.6)] text-white [--bg-color:theme(colors.orange.500)] [--bg-color-active:theme(colors.orange.600)] [--shadow-light:theme(colors.orange.300)] [--shadow-dark:theme(colors.orange.700)]"><span class="inline-block w-full rounded-[9px] px-3 py-2 uppercase tracking-wider text-center bg-[var(--bg-color)] transition-all duration-200 shadow-[inset_1px_1px_1px_var(--shadow-light),inset_-1px_-1px_1px_var(--shadow-dark),2px_2px_4px_#000] active:scale-[0.98] active:bg-[var(--bg-color-active)] active:shadow-[inset_0_0_4px_#000,inset_1px_1px_1px_transparent,inset_-1px_-1px_1px_transparent,2px_2px_4px_transparent]">Record</span></button><button class="relative inline-flex items-center justify-center w-24 border-2 border-transparent rounded-[2px] bg-[#010101] shadow-[1px_1px_1px_rgba(255,255,255,0.6)] text-white [--bg-color:theme(colors.neutral.700)] [--bg-color-active:theme(colors.neutral.800)] [--shadow-light:theme(colors.neutral.400)] [--shadow-dark:theme(colors.neutral.900)]"><span class="inline-block w-full rounded-[9px] px-3 py-2 uppercase tracking-wider text-center bg-[var(--bg-color)] transition-all duration-200 shadow-[inset_1px_1px_1px_var(--shadow-light),inset_-1px_-1px_1px_var(--shadow-dark),2px_2px_4px_#000] active:scale-[0.98] active:bg-[var(--bg-color-active)] active:shadow-[inset_0_0_4px_#000,inset_1px_1px_1px_transparent,inset_-1px_-1px_1px_transparent,2px_2px_4px_transparent]">Sound</span></button><button class="relative inline-flex items-center justify-center w-24 border-2 border-transparent rounded-[2px] bg-[#010101] shadow-[1px_1px_1px_rgba(255,255,255,0.6)] text-black [--bg-color:theme(colors.neutral.200)] [--bg-color-active:theme(colors.neutral.300)] [--shadow-light:theme(colors.white)] [--shadow-dark:theme(colors.neutral.500)]"><span class="inline-block w-full rounded-[9px] px-3 py-2 uppercase tracking-wider text-center bg-[var(--bg-color)] transition-all duration-200 shadow-[inset_1px_1px_1px_var(--shadow-light),inset_-1px_-1px_1px_var(--shadow-dark),2px_2px_4px_#000] active:scale-[0.98] active:bg-[var(--bg-color-active)] active:shadow-[inset_0_0_4px_#000,inset_1px_1px_1px_transparent,inset_-1px_-1px_1px_transparent,2px_2px_4px_transparent]">Erase</span></button><button class="relative inline-flex items-center justify-center w-24 border-2 border-transparent rounded-[2px] bg-[#010101] shadow-[1px_1px_1px_rgba(255,255,255,0.6)] text-white [--bg-color:theme(colors.neutral.400)] [--bg-color-active:theme(colors.neutral.500)] [--shadow-light:theme(colors.neutral.200)] [--shadow-dark:theme(colors.neutral.600)]"><span class="inline-block w-full rounded-[9px] px-3 py-2 uppercase tracking-wider text-center bg-[var(--bg-color)] transition-all duration-200 shadow-[inset_1px_1px_1px_var(--shadow-light),inset_-1px_-1px_1px_var(--shadow-dark),2px_2px_4px_#000] active:scale-[0.98] active:bg-[var(--bg-color-active)] active:shadow-[inset_0_0_4px_#000,inset_1px_1px_1px_transparent,inset_-1px_-1px_1px_transparent,2px_2px_4px_transparent]">Shift</span></button><button class="relative inline-flex items-center justify-center w-24 border-2 border-transparent rounded-[2px] bg-[#010101] shadow-[1px_1px_1px_rgba(255,255,255,0.6)] text-white [--bg-color:theme(colors.neutral.600)] [--bg-color-active:theme(colors.neutral.700)] [--shadow-light:theme(colors.neutral.400)] [--shadow-dark:theme(colors.neutral.800)]"><span class="inline-block w-full rounded-[9px] px-3 py-2 uppercase tracking-wider text-center bg-[var(--bg-color)] transition-all duration-200 shadow-[inset_1px_1px_1px_var(--shadow-light),inset_-1px_-1px_1px_var(--shadow-dark),2px_2px_4px_#000] active:scale-[0.98] active:bg-[var(--bg-color-active)] active:shadow-[inset_0_0_4px_#000,inset_1px_1px_1px_transparent,inset_-1px_-1px_1px_transparent,2px_2px_4px_transparent]">Play</span></button></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.