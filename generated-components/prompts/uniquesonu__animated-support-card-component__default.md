# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/uniquesonu/animated-support-card-component/default
- Registry URL: https://21st.dev/r/uniquesonu/animated-support-card-component
- Author: uniquesonu
- Component slug: animated-support-card-component
- Demo slug: default
- Title: animated-support-card-component
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/uniquesonu/animated-support-card-component with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/uniquesonu__animated-support-card-component__default.html
- Local screenshot file: generated-21st-prompts/screenshots/uniquesonu__animated-support-card-component__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center bg-background px-8 py-24 text-foreground"><div class="w-full max-w-xl space-y-6"><div><p class="mb-1.5 text-sm font-light uppercase">/ Support</p><hr class="border-neutral-700"></div><p class="max-w-lg text-xl leading-relaxed"><strong>Have questions?</strong> We'd love to help! Contact support for any issue you may face.</p><div><p class="mb-2.5 text-sm font-light uppercase"><span class="inline-block size-2 bg-neutral-950"></span><span class="ml-3">EXAMPLE: <span class="relative" style="opacity: 1;"><span style="opacity: 1;">D</span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;">o</span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;">e</span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;">s</span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;"> </span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;">y</span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;">o</span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;">u</span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;">r</span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;"> </span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;">p</span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;">r</span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;">o</span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;">d</span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;">u</span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;">c</span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;">t</span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;"> </span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;">w</span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;">o</span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;">r</span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;">k</span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;"> </span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;">f</span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;">o</span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;">r</span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;"> </span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;">S</span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;">M</span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;">B</span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;">s</span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span><span class="relative" style="opacity: 1;"><span style="opacity: 1;">?</span><span class="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" style="opacity: 0;"></span></span></span></p><hr class="border-neutral-300"></div><button class="w-full rounded-full border border-neutral-950 py-2 text-sm font-medium transition-colors hover:bg-neutral-950 hover:text-neutral-100">Contact Support</button></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.