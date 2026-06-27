# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/Kain0127/liquid-radio/default
- Registry URL: https://21st.dev/r/Kain0127/liquid-radio
- Author: Kain0127
- Component slug: liquid-radio
- Demo slug: default
- Title: liquid-radio
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/Kain0127/liquid-radio with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/Kain0127__liquid-radio__default.html
- Local screenshot file: generated-21st-prompts/screenshots/Kain0127__liquid-radio__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="inline-flex h-9 rounded-lg bg-input/50 p-0.5"><div role="radiogroup" aria-required="false" dir="ltr" class="group relative inline-grid grid-cols-[1fr_1fr] items-center gap-0 text-sm font-medium after:absolute after:inset-y-0 after:w-1/2 after:rounded-md after:bg-background/80 after:shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] after:transition-transform after:duration-300 after:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)] has-[:focus-visible]:after:outline-2 has-[:focus-visible]:after:outline-ring/70 data-[state=offline]:after:translate-x-0 data-[state=online]:after:translate-x-full dark:after:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]" data-state="online" tabindex="0" style="outline: none;"><div class="absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-md" style="filter: url(&quot;#radio-glass&quot;);"></div><label class="relative z-10 inline-flex h-full min-w-8 cursor-pointer select-none items-center justify-center whitespace-nowrap px-4 transition-colors text-muted-foreground/70 group-data-[state=online]:text-muted-foreground/70 group-data-[state=offline]:text-foreground">Test<button type="button" role="radio" aria-checked="false" data-state="unchecked" value="offline" class="aspect-square size-4 rounded-full border border-input shadow-sm shadow-black/5 outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground sr-only" id="env-offline" tabindex="-1" data-radix-collection-item=""></button></label><label class="relative z-10 inline-flex h-full min-w-8 cursor-pointer select-none items-center justify-center whitespace-nowrap px-4 transition-colors text-muted-foreground/70 group-data-[state=offline]:text-muted-foreground/70 group-data-[state=online]:text-foreground">Prod<button type="button" role="radio" aria-checked="true" data-state="checked" value="online" class="aspect-square size-4 rounded-full border border-input shadow-sm shadow-black/5 outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground sr-only" id="env-online" tabindex="-1" data-radix-collection-item=""><span data-state="checked" class="flex items-center justify-center text-current"><svg width="6" height="6" viewBox="0 0 6 6" fill="currentcolor" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3" r="3"></circle></svg></span></button></label><svg class="hidden"><defs><filter id="radio-glass" x="0%" y="0%" width="100%" height="100%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.05 0.05" numOctaves="1" seed="1" result="turbulence"></feTurbulence><feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise"></feGaussianBlur><feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="30" xChannelSelector="R" yChannelSelector="B" result="displaced"></feDisplacementMap><feGaussianBlur in="displaced" stdDeviation="2" result="finalBlur"></feGaussianBlur><feComposite in="finalBlur" in2="finalBlur" operator="over"></feComposite></filter></defs></svg></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.