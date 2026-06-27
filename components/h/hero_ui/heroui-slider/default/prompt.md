# Build Heroui Slider in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Heroui Slider screenshot](screenshot.png)

## Component

- Author group: `hero_ui`
- Component: `heroui-slider`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: hero_ui
- Component slug: heroui-slider
- Demo slug: default
- Title: heroui-slider
- Description: 

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

No reference metadata available.

## Rendered DOM snapshot

This is the rendered demo HTML extracted from the live preview. Use it to verify structure, class names, visible content, and layout.

```html
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div data-slot="slider" class="slider w-full max-w-xs" data-rac="" role="group" id="react-aria3312951176-«r0»" aria-labelledby="react-aria3312951176-«r1»" data-orientation="horizontal" style="--accent: #0485f7; --accent-hover: #0473d4; --accent-foreground: #ffffff;"><label class="label" id="react-aria3312951176-«r1»" data-slot="label">Volume</label><output for="react-aria3312951176-«r1»-0" aria-live="off" data-slot="slider-output" class="slider__output" data-rac="" data-orientation="horizontal">30</output><div class="slider__track" data-slot="slider-track" data-fill-start="true" data-rac="" data-orientation="horizontal" style="position: relative; touch-action: none;"><div class="slider__fill" data-slot="slider-fill" style="left: 0%; width: 30%;"></div><div data-slot="slider-thumb" class="slider__thumb" data-rac="" style="position: absolute; left: 30%; transform: translate(-50%, -50%); touch-action: none;"><div style="border: 0px; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(50%); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap;"><input tabindex="0" id="react-aria3312951176-«r1»-0" aria-labelledby="react-aria3312951176-«r1»" min="0" max="100" step="1" aria-orientation="horizontal" aria-valuetext="30" aria-describedby="" aria-details="" type="range" value="30"></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
