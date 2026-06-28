# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/tom_ui/kbd/default
- Registry URL: https://21st.dev/r/tom_ui/kbd
- Author: tom_ui
- Component slug: kbd
- Demo slug: default
- Title: kbd
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/tom_ui/kbd with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/tom_ui__kbd__default.html
- Local screenshot file: generated-21st-prompts/screenshots/tom_ui__kbd__default.png

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
<div id="root"><div class="flex min-h-[400px] items-center justify-center gap-3 p-8 text-2xl"><kbd class="box-border align-text-top whitespace-nowrap select-none cursor-default tracking-tight rounded-[0.35em] min-w-[1.75em] shrink-0 justify-center items-center pb-[0.05em] px-[0.5em] text-[0.75em] font-normal leading-[1.7em] inline-flex relative -top-[0.03em] transition-all duration-100 bg-background text-foreground shadow-[inset_0_-0.05em_0.5em_rgba(0,0,0,0.034),inset_0_0.05em_rgba(255,255,255,0.95),inset_0_0.25em_0.5em_rgba(0,0,0,0.034),inset_0_-0.05em_rgba(0,0,0,0.172),0_0_0_0.05em_rgba(0,0,0,0.134),0_0.08em_0.17em_rgba(0,0,0,0.231)] dark:shadow-[inset_0_-0.05em_0.5em_rgba(255,255,255,0.034),inset_0_0.05em_rgba(255,255,255,0.1),inset_0_0.25em_0.5em_rgba(255,255,255,0.034),inset_0_-0.05em_rgba(255,255,255,0.172),0_0_0_0.05em_rgba(255,255,255,0.134),0_0.08em_0.17em_rgba(255,255,255,0.231)]"><span class="">⌥</span></kbd><kbd class="box-border align-text-top whitespace-nowrap select-none cursor-default tracking-tight rounded-[0.35em] min-w-[1.75em] shrink-0 justify-center items-center pb-[0.05em] px-[0.5em] text-[0.75em] font-normal leading-[1.7em] inline-flex relative -top-[0.03em] transition-all duration-100 bg-background text-foreground shadow-[inset_0_-0.05em_0.5em_rgba(0,0,0,0.034),inset_0_0.05em_rgba(255,255,255,0.95),inset_0_0.25em_0.5em_rgba(0,0,0,0.034),inset_0_-0.05em_rgba(0,0,0,0.172),0_0_0_0.05em_rgba(0,0,0,0.134),0_0.08em_0.17em_rgba(0,0,0,0.231)] dark:shadow-[inset_0_-0.05em_0.5em_rgba(255,255,255,0.034),inset_0_0.05em_rgba(255,255,255,0.1),inset_0_0.25em_0.5em_rgba(255,255,255,0.034),inset_0_-0.05em_rgba(255,255,255,0.172),0_0_0_0.05em_rgba(255,255,255,0.134),0_0.08em_0.17em_rgba(255,255,255,0.231)]"><span class="">ENTER</span></kbd><kbd class="box-border align-text-top whitespace-nowrap select-none cursor-default tracking-tight rounded-[0.35em] min-w-[1.75em] shrink-0 justify-center items-center pb-[0.05em] px-[0.5em] text-[0.75em] font-normal leading-[1.7em] inline-flex relative -top-[0.03em] transition-all duration-100 bg-background text-foreground shadow-[inset_0_-0.05em_0.5em_rgba(0,0,0,0.034),inset_0_0.05em_rgba(255,255,255,0.95),inset_0_0.25em_0.5em_rgba(0,0,0,0.034),inset_0_-0.05em_rgba(0,0,0,0.172),0_0_0_0.05em_rgba(0,0,0,0.134),0_0.08em_0.17em_rgba(0,0,0,0.231)] dark:shadow-[inset_0_-0.05em_0.5em_rgba(255,255,255,0.034),inset_0_0.05em_rgba(255,255,255,0.1),inset_0_0.25em_0.5em_rgba(255,255,255,0.034),inset_0_-0.05em_rgba(255,255,255,0.172),0_0_0_0.05em_rgba(255,255,255,0.134),0_0.08em_0.17em_rgba(255,255,255,0.231)]"><span class="">␣</span></kbd><kbd class="box-border align-text-top whitespace-nowrap select-none cursor-default tracking-tight rounded-[0.35em] min-w-[1.75em] shrink-0 justify-center items-center pb-[0.05em] px-[0.5em] text-[0.75em] font-normal leading-[1.7em] inline-flex relative -top-[0.03em] transition-all duration-100 bg-background text-foreground shadow-[inset_0_-0.05em_0.5em_rgba(0,0,0,0.034),inset_0_0.05em_rgba(255,255,255,0.95),inset_0_0.25em_0.5em_rgba(0,0,0,0.034),inset_0_-0.05em_rgba(0,0,0,0.172),0_0_0_0.05em_rgba(0,0,0,0.134),0_0.08em_0.17em_rgba(0,0,0,0.231)] dark:shadow-[inset_0_-0.05em_0.5em_rgba(255,255,255,0.034),inset_0_0.05em_rgba(255,255,255,0.1),inset_0_0.25em_0.5em_rgba(255,255,255,0.034),inset_0_-0.05em_rgba(255,255,255,0.172),0_0_0_0.05em_rgba(255,255,255,0.134),0_0.08em_0.17em_rgba(255,255,255,0.231)]"><span class="">⌃</span><span class="ml-0.5">J</span></kbd><kbd class="box-border align-text-top whitespace-nowrap select-none cursor-default tracking-tight rounded-[0.35em] min-w-[1.75em] shrink-0 justify-center items-center pb-[0.05em] px-[0.5em] text-[0.75em] font-normal leading-[1.7em] inline-flex relative -top-[0.03em] transition-all duration-100 bg-background text-foreground translate-y-[0.05em] shadow-[inset_0_0.05em_rgba(255,255,255,0.95),inset_0_0.05em_0.2em_rgba(0,0,0,0.1),0_0_0_0.05em_rgba(0,0,0,0.134)] dark:shadow-[inset_0_0.05em_0.2em_rgba(0,0,0,0.3),0_0_0_0.05em_rgba(255,255,255,0.134)]"><span class="">HOLD</span></kbd><kbd class="box-border align-text-top whitespace-nowrap select-none cursor-default tracking-tight rounded-[0.35em] min-w-[1.75em] shrink-0 justify-center items-center pb-[0.05em] px-[0.5em] text-[0.75em] font-normal leading-[1.7em] inline-flex relative -top-[0.03em] transition-all duration-100 bg-background text-foreground shadow-[inset_0_-0.05em_0.5em_rgba(0,0,0,0.034),inset_0_0.05em_rgba(255,255,255,0.95),inset_0_0.25em_0.5em_rgba(0,0,0,0.034),inset_0_-0.05em_rgba(0,0,0,0.172),0_0_0_0.05em_rgba(0,0,0,0.134),0_0.08em_0.17em_rgba(0,0,0,0.231)] dark:shadow-[inset_0_-0.05em_0.5em_rgba(255,255,255,0.034),inset_0_0.05em_rgba(255,255,255,0.1),inset_0_0.25em_0.5em_rgba(255,255,255,0.034),inset_0_-0.05em_rgba(255,255,255,0.172),0_0_0_0.05em_rgba(255,255,255,0.134),0_0.08em_0.17em_rgba(255,255,255,0.231)]"><span class="">↑</span></kbd></div></div>
```

## Public registry source files

No public registry source files were available.