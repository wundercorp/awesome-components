# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hero_ui/heroui-slider/range
- Registry URL: https://21st.dev/r/hero_ui/heroui-slider
- Author: hero_ui
- Component slug: heroui-slider
- Demo slug: range
- Title: heroui-slider
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hero_ui/heroui-slider with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hero_ui__heroui-slider__range.html
- Local screenshot file: generated-21st-prompts/screenshots/hero_ui__heroui-slider__range.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div data-slot="slider" class="slider w-full max-w-xs" data-rac="" role="group" id="react-aria3984144031-«r0»" aria-labelledby="react-aria3984144031-«r1»" data-orientation="horizontal" style="--accent: #0485f7; --accent-hover: #0473d4; --accent-foreground: #ffffff;"><label class="label" id="react-aria3984144031-«r1»" data-slot="label">Price Range</label><output for="react-aria3984144031-«r1»-0 react-aria3984144031-«r1»-1" aria-live="off" data-slot="slider-output" class="slider__output" data-rac="" data-orientation="horizontal">$100.00 – $500.00</output><div class="slider__track" data-slot="slider-track" data-rac="" data-orientation="horizontal" style="position: relative; touch-action: none;"><div class="slider__fill" data-slot="slider-fill" style="left: 10%; width: 40%;"></div><div data-slot="slider-thumb" class="slider__thumb" data-rac="" style="position: absolute; left: 10%; transform: translate(-50%, -50%); touch-action: none;"><div style="border: 0px; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(50%); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap;"><input tabindex="0" id="react-aria3984144031-«r1»-0" aria-labelledby="react-aria3984144031-«r1»" min="0" max="500" step="50" aria-orientation="horizontal" aria-valuetext="$100.00" aria-describedby="" aria-details="" type="range" value="100"></div></div><div data-slot="slider-thumb" class="slider__thumb" data-rac="" style="position: absolute; left: 50%; transform: translate(-50%, -50%); touch-action: none;"><div style="border: 0px; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(50%); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap;"><input tabindex="0" id="react-aria3984144031-«r1»-1" aria-labelledby="react-aria3984144031-«r1»" min="100" max="1000" step="50" aria-orientation="horizontal" aria-valuetext="$500.00" aria-describedby="" aria-details="" type="range" value="500"></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.