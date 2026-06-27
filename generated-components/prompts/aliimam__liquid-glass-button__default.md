# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/aliimam/liquid-glass-button/default
- Registry URL: https://21st.dev/r/aliimam/liquid-glass-button
- Author: aliimam
- Component slug: liquid-glass-button
- Demo slug: default
- Title: liquid-glass-button
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/aliimam/liquid-glass-button with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/aliimam__liquid-glass-button__default.html
- Local screenshot file: generated-21st-prompts/screenshots/aliimam__liquid-glass-button__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative h-[200px] w-[800px]"><button data-slot="button" class="inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-transparent hover:scale-105 duration-300 transition text-primary h-14 rounded-md px-10 has-[&gt;svg]:px-8 absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"><div class="absolute top-0 left-0 z-0 h-full w-full rounded-full 
            shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] 
        transition-all 
        dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]"></div><div class="absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-md" style="backdrop-filter: url(&quot;#container-glass&quot;);"></div><div class="pointer-events-none z-10 ">Liquid Glass</div><svg class="hidden"><defs><filter id="container-glass" x="0%" y="0%" width="100%" height="100%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.05 0.05" numOctaves="1" seed="1" result="turbulence"></feTurbulence><feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise"></feGaussianBlur><feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="70" xChannelSelector="R" yChannelSelector="B" result="displaced"></feDisplacementMap><feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur"></feGaussianBlur><feComposite in="finalBlur" in2="finalBlur" operator="over"></feComposite></filter></defs></svg></button></div></div></div></div>
```

## Public registry source files

No public registry source files were available.