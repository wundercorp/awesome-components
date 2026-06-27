# Build Heroui Color Slider in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Heroui Color Slider screenshot](screenshot.png)

## Component

- Author group: `reapollo`
- Component: `heroui-color-slider`
- Variant: `rgb-channels`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: reapollo
- Component slug: heroui-color-slider
- Demo slug: rgb-channels
- Title: heroui-color-slider
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
<div id="root"><div class="flex min-h-screen w-full items-center justify-center overflow-hidden bg-background p-8"><div class="flex w-full max-w-xs flex-col gap-4"><style>
      .color-slider{display:grid;width:100%;gap:.25rem;grid-template-areas:"label output" "track track";grid-template-columns:1fr auto;grid-template-rows:auto auto;color:hsl(var(--foreground,0 0% 98%))}
      .color-slider:not(:has([data-slot="label"])):not(:has(.color-slider__output)){grid-template-areas:"track";grid-template-columns:1fr;grid-template-rows:auto;gap:0}
      .color-slider[data-orientation="vertical"]{height:100%;gap:.5rem;grid-template-areas:"output" "track" "label";grid-template-columns:1fr;grid-template-rows:auto 1fr auto;align-items:center;justify-items:center}
      .color-slider [data-slot="label"]{grid-area:label;width:fit-content;font-size:.875rem;line-height:1.25rem;font-weight:500}
      .color-slider__output{grid-area:output;font-size:.875rem;line-height:1.25rem;font-weight:500;font-variant-numeric:tabular-nums}
      .color-slider__track{grid-area:track;position:relative;border-radius:0;box-shadow:inset 0 1px 0 rgba(0,0,0,.1),inset 0 -1px 0 rgba(0,0,0,.1);touch-action:none}
      .color-slider__track::before,.color-slider__track::after{content:"";position:absolute;z-index:0;pointer-events:none}
      .color-slider[data-orientation="horizontal"] .color-slider__track{height:1.25rem;width:calc(100% - 1.25rem);justify-self:center}
      .color-slider[data-orientation="horizontal"] .color-slider__track::before,.color-slider[data-orientation="horizontal"] .color-slider__track::after{top:0;height:100%;width:.625rem}
      .color-slider[data-orientation="horizontal"] .color-slider__track::before{left:-.625rem;border-radius:999px 0 0 999px;background:linear-gradient(var(--track-start-color,transparent)),repeating-conic-gradient(#efefef 0% 25%,#f7f7f7 0% 50%) 50%/16px 16px;box-shadow:inset 1px 0 0 rgba(0,0,0,.1),inset 0 1px 0 rgba(0,0,0,.1),inset 0 -1px 0 rgba(0,0,0,.1)}
      .color-slider[data-orientation="horizontal"] .color-slider__track::after{right:-.625rem;border-radius:0 999px 999px 0;background-color:var(--track-end-color,transparent);box-shadow:inset -1px 0 0 rgba(0,0,0,.1),inset 0 1px 0 rgba(0,0,0,.1),inset 0 -1px 0 rgba(0,0,0,.1)}
      .color-slider[data-orientation="vertical"] .color-slider__track{width:1.25rem;height:calc(100% - 1.25rem);justify-self:center;box-shadow:inset 1px 0 0 rgba(0,0,0,.1),inset -1px 0 0 rgba(0,0,0,.1)}
      .color-slider[data-orientation="vertical"] .color-slider__track::before,.color-slider[data-orientation="vertical"] .color-slider__track::after{left:0;width:100%;height:.625rem}
      .color-slider[data-orientation="vertical"] .color-slider__track::before{bottom:-.625rem;border-radius:0 0 999px 999px;background:linear-gradient(var(--track-start-color,transparent)),repeating-conic-gradient(#efefef 0% 25%,#f7f7f7 0% 50%) 50%/16px 16px;box-shadow:inset 1px 0 0 rgba(0,0,0,.1),inset -1px 0 0 rgba(0,0,0,.1),inset 0 -1px 0 rgba(0,0,0,.1)}
      .color-slider[data-orientation="vertical"] .color-slider__track::after{top:-.625rem;border-radius:999px 999px 0 0;background-color:var(--track-end-color,transparent);box-shadow:inset 1px 0 0 rgba(0,0,0,.1),inset -1px 0 0 rgba(0,0,0,.1),inset 0 1px 0 rgba(0,0,0,.1)}
      .color-slider__thumb{position:absolute;z-index:1;display:flex;align-items:center;justify-content:center;width:1rem;height:1rem;border-radius:999px;border:3px solid white;box-shadow:0 8px 18px rgba(0,0,0,.18),0 1px 2px rgba(0,0,0,.25);cursor:grab;transition:transform 250ms cubic-bezier(.16,1,.3,1),box-shadow 150ms cubic-bezier(.16,1,.3,1)}
      .color-slider__thumb[data-dragging="true"]{cursor:grabbing;transform:translate(var(--thumb-x),var(--thumb-y)) scale(.92)!important}
      .color-slider__thumb[data-focus-visible="true"]{z-index:10;outline:2px solid hsl(212 100% 47%);outline-offset:2px}
      .color-slider__thumb[data-disabled="true"]{cursor:default;background:hsl(0 0% 63%)!important}
      .color-slider[data-disabled="true"],.color-slider[aria-disabled="true"]{opacity:.5;pointer-events:none}
      .color-slider[data-disabled="true"] [data-slot="label"]{opacity:1}
      .color-slider[data-orientation="horizontal"] .color-slider__thumb{top:50%;left:calc(var(--percent)*1%);--thumb-y:-50%;--thumb-x:-50%;transform:translate(var(--thumb-x),var(--thumb-y))}
      .color-slider[data-orientation="vertical"] .color-slider__thumb{left:50%;bottom:calc(var(--percent)*1%);--thumb-x:-50%;--thumb-y:50%;transform:translate(var(--thumb-x),var(--thumb-y))}
      .color-swatch{display:inline-block;flex-shrink:0;border-radius:999px;border:1px solid rgba(0,0,0,.12);box-shadow:inset 0 0 0 1px rgba(255,255,255,.45)}
    </style><div class="color-slider" data-orientation="horizontal" data-rac="" data-slot="color-slider" style="--percent: 100; --track-start-color: rgb(0, 100, 50); --track-end-color: rgb(255, 100, 50);"><label class="label" data-slot="label">Red</label><output class="color-slider__output" data-slot="color-slider-output">255</output><div class="color-slider__track" data-slot="color-slider-track" style="background: linear-gradient(to right, rgb(0, 100, 50), rgb(255, 100, 50)), repeating-conic-gradient(rgb(239, 239, 239) 0%, rgb(239, 239, 239) 25%, rgb(247, 247, 247) 0%, rgb(247, 247, 247) 50%) 50% center / 16px 16px;"><div aria-label="red" aria-valuemax="255" aria-valuemin="0" aria-valuenow="255" aria-valuetext="255" class="color-slider__thumb" data-slot="color-slider-thumb" role="slider" tabindex="0" style="background-color: rgb(255, 100, 50);"></div></div></div><style>
      .color-slider{display:grid;width:100%;gap:.25rem;grid-template-areas:"label output" "track track";grid-template-columns:1fr auto;grid-template-rows:auto auto;color:hsl(var(--foreground,0 0% 98%))}
      .color-slider:not(:has([data-slot="label"])):not(:has(.color-slider__output)){grid-template-areas:"track";grid-template-columns:1fr;grid-template-rows:auto;gap:0}
      .color-slider[data-orientation="vertical"]{height:100%;gap:.5rem;grid-template-areas:"output" "track" "label";grid-template-columns:1fr;grid-template-rows:auto 1fr auto;align-items:center;justify-items:center}
      .color-slider [data-slot="label"]{grid-area:label;width:fit-content;font-size:.875rem;line-height:1.25rem;font-weight:500}
      .color-slider__output{grid-area:output;font-size:.875rem;line-height:1.25rem;font-weight:500;font-variant-numeric:tabular-nums}
      .color-slider__track{grid-area:track;position:relative;border-radius:0;box-shadow:inset 0 1px 0 rgba(0,0,0,.1),inset 0 -1px 0 rgba(0,0,0,.1);touch-action:none}
      .color-slider__track::before,.color-slider__track::after{content:"";position:absolute;z-index:0;pointer-events:none}
      .color-slider[data-orientation="horizontal"] .color-slider__track{height:1.25rem;width:calc(100% - 1.25rem);justify-self:center}
      .color-slider[data-orientation="horizontal"] .color-slider__track::before,.color-slider[data-orientation="horizontal"] .color-slider__track::after{top:0;height:100%;width:.625rem}
      .color-slider[data-orientation="horizontal"] .color-slider__track::before{left:-.625rem;border-radius:999px 0 0 999px;background:linear-gradient(var(--track-start-color,transparent)),repeating-conic-gradient(#efefef 0% 25%,#f7f7f7 0% 50%) 50%/16px 16px;box-shadow:inset 1px 0 0 rgba(0,0,0,.1),inset 0 1px 0 rgba(0,0,0,.1),inset 0 -1px 0 rgba(0,0,0,.1)}
      .color-slider[data-orientation="horizontal"] .color-slider__track::after{right:-.625rem;border-radius:0 999px 999px 0;background-color:var(--track-end-color,transparent);box-shadow:inset -1px 0 0 rgba(0,0,0,.1),inset 0 1px 0 rgba(0,0,0,.1),inset 0 -1px 0 rgba(0,0,0,.1)}
      .color-slider[data-orientation="vertical"] .color-slider__track{width:1.25rem;height:calc(100% - 1.25rem);justify-self:center;box-shadow:inset 1px 0 0 rgba(0,0,0,.1),inset -1px 0 0 rgba(0,0,0,.1)}
      .color-slider[data-orientation="vertical"] .color-slider__track::before,.color-slider[data-orientation="vertical"] .color-slider__track::after{left:0;width:100%;height:.625rem}
      .color-slider[data-orientation="vertical"] .color-slider__track::before{bottom:-.625rem;border-radius:0 0 999px 999px;background:linear-gradient(var(--track-start-color,transparent)),repeating-conic-gradient(#efefef 0% 25%,#f7f7f7 0% 50%) 50%/16px 16px;box-shadow:inset 1px 0 0 rgba(0,0,0,.1),inset -1px 0 0 rgba(0,0,0,.1),inset 0 -1px 0 rgba(0,0,0,.1)}
      .color-slider[data-orientation="vertical"] .color-slider__track::after{top:-.625rem;border-radius:999px 999px 0 0;background-color:var(--track-end-color,transparent);box-shadow:inset 1px 0 0 rgba(0,0,0,.1),inset -1px 0 0 rgba(0,0,0,.1),inset 0 1px 0 rgba(0,0,0,.1)}
      .color-slider__thumb{position:absolute;z-index:1;display:flex;align-items:center;justify-content:center;width:1rem;height:1rem;border-radius:999px;border:3px solid white;box-shadow:0 8px 18px rgba(0,0,0,.18),0 1px 2px rgba(0,0,0,.25);cursor:grab;transition:transform 250ms cubic-bezier(.16,1,.3,1),box-shadow 150ms cubic-bezier(.16,1,.3,1)}
      .color-slider__thumb[data-dragging="true"]{cursor:grabbing;transform:translate(var(--thumb-x),var(--thumb-y)) scale(.92)!important}
      .color-slider__thumb[data-focus-visible="true"]{z-index:10;outline:2px solid hsl(212 100% 47%);outline-offset:2px}
      .color-slider__thumb[data-disabled="true"]{cursor:default;background:hsl(0 0% 63%)!important}
      .color-slider[data-disabled="true"],.color-slider[aria-disabled="true"]{opacity:.5;pointer-events:none}
      .color-slider[data-disabled="true"] [data-slot="label"]{opacity:1}
      .color-slider[data-orientation="horizontal"] .color-slider__thumb{top:50%;left:calc(var(--percent)*1%);--thumb-y:-50%;--thumb-x:-50%;transform:translate(var(--thumb-x),var(--thumb-y))}
      .color-slider[data-orientation="vertical"] .color-slider__thumb{left:50%;bottom:calc(var(--percent)*1%);--thumb-x:-50%;--thumb-y:50%;transform:translate(var(--thumb-x),var(--thumb-y))}
      .color-swatch{display:inline-block;flex-shrink:0;border-radius:999px;border:1px solid rgba(0,0,0,.12);box-shadow:inset 0 0 0 1px rgba(255,255,255,.45)}
    </style><div class="color-slider" data-orientation="horizontal" data-rac="" data-slot="color-slider" style="--percent: 39.21568627450981; --track-start-color: rgb(255, 0, 50); --track-end-color: rgb(255, 255, 50);"><label class="label" data-slot="label">Green</label><output class="color-slider__output" data-slot="color-slider-output">100</output><div class="color-slider__track" data-slot="color-slider-track" style="background: linear-gradient(to right, rgb(255, 0, 50), rgb(255, 255, 50)), repeating-conic-gradient(rgb(239, 239, 239) 0%, rgb(239, 239, 239) 25%, rgb(247, 247, 247) 0%, rgb(247, 247, 247) 50%) 50% center / 16px 16px;"><div aria-label="green" aria-valuemax="255" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100" class="color-slider__thumb" data-slot="color-slider-thumb" role="slider" tabindex="0" style="background-color: rgb(255, 100, 50);"></div></div></div><style>
      .color-slider{display:grid;width:100%;gap:.25rem;grid-template-areas:"label output" "track track";grid-template-columns:1fr auto;grid-template-rows:auto auto;color:hsl(var(--foreground,0 0% 98%))}
      .color-slider:not(:has([data-slot="label"])):not(:has(.color-slider__output)){grid-template-areas:"track";grid-template-columns:1fr;grid-template-rows:auto;gap:0}
      .color-slider[data-orientation="vertical"]{height:100%;gap:.5rem;grid-template-areas:"output" "track" "label";grid-template-columns:1fr;grid-template-rows:auto 1fr auto;align-items:center;justify-items:center}
      .color-slider [data-slot="label"]{grid-area:label;width:fit-content;font-size:.875rem;line-height:1.25rem;font-weight:500}
      .color-slider__output{grid-area:output;font-size:.875rem;line-height:1.25rem;font-weight:500;font-variant-numeric:tabular-nums}
      .color-slider__track{grid-area:track;position:relative;border-radius:0;box-shadow:inset 0 1px 0 rgba(0,0,0,.1),inset 0 -1px 0 rgba(0,0,0,.1);touch-action:none}
      .color-slider__track::before,.color-slider__track::after{content:"";position:absolute;z-index:0;pointer-events:none}
      .color-slider[data-orientation="horizontal"] .color-slider__track{height:1.25rem;width:calc(100% - 1.25rem);justify-self:center}
      .color-slider[data-orientation="horizontal"] .color-slider__track::before,.color-slider[data-orientation="horizontal"] .color-slider__track::after{top:0;height:100%;width:.625rem}
      .color-slider[data-orientation="horizontal"] .color-slider__track::before{left:-.625rem;border-radius:999px 0 0 999px;background:linear-gradient(var(--track-start-color,transparent)),repeating-conic-gradient(#efefef 0% 25%,#f7f7f7 0% 50%) 50%/16px 16px;box-shadow:inset 1px 0 0 rgba(0,0,0,.1),inset 0 1px 0 rgba(0,0,0,.1),inset 0 -1px 0 rgba(0,0,0,.1)}
      .color-slider[data-orientation="horizontal"] .color-slider__track::after{right:-.625rem;border-radius:0 999px 999px 0;background-color:var(--track-end-color,transparent);box-shadow:inset -1px 0 0 rgba(0,0,0,.1),inset 0 1px 0 rgba(0,0,0,.1),inset 0 -1px 0 rgba(0,0,0,.1)}
      .color-slider[data-orientation="vertical"] .color-slider__track{width:1.25rem;height:calc(100% - 1.25rem);justify-self:center;box-shadow:inset 1px 0 0 rgba(0,0,0,.1),inset -1px 0 0 rgba(0,0,0,.1)}
      .color-slider[data-orientation="vertical"] .color-slider__track::before,.color-slider[data-orientation="vertical"] .color-slider__track::after{left:0;width:100%;height:.625rem}
      .color-slider[data-orientation="vertical"] .color-slider__track::before{bottom:-.625rem;border-radius:0 0 999px 999px;background:linear-gradient(var(--track-start-color,transparent)),repeating-conic-gradient(#efefef 0% 25%,#f7f7f7 0% 50%) 50%/16px 16px;box-shadow:inset 1px 0 0 rgba(0,0,0,.1),inset -1px 0 0 rgba(0,0,0,.1),inset 0 -1px 0 rgba(0,0,0,.1)}
      .color-slider[data-orientation="vertical"] .color-slider__track::after{top:-.625rem;border-radius:999px 999px 0 0;background-color:var(--track-end-color,transparent);box-shadow:inset 1px 0 0 rgba(0,0,0,.1),inset -1px 0 0 rgba(0,0,0,.1),inset 0 1px 0 rgba(0,0,0,.1)}
      .color-slider__thumb{position:absolute;z-index:1;display:flex;align-items:center;justify-content:center;width:1rem;height:1rem;border-radius:999px;border:3px solid white;box-shadow:0 8px 18px rgba(0,0,0,.18),0 1px 2px rgba(0,0,0,.25);cursor:grab;transition:transform 250ms cubic-bezier(.16,1,.3,1),box-shadow 150ms cubic-bezier(.16,1,.3,1)}
      .color-slider__thumb[data-dragging="true"]{cursor:grabbing;transform:translate(var(--thumb-x),var(--thumb-y)) scale(.92)!important}
      .color-slider__thumb[data-focus-visible="true"]{z-index:10;outline:2px solid hsl(212 100% 47%);outline-offset:2px}
      .color-slider__thumb[data-disabled="true"]{cursor:default;background:hsl(0 0% 63%)!important}
      .color-slider[data-disabled="true"],.color-slider[aria-disabled="true"]{opacity:.5;pointer-events:none}
      .color-slider[data-disabled="true"] [data-slot="label"]{opacity:1}
      .color-slider[data-orientation="horizontal"] .color-slider__thumb{top:50%;left:calc(var(--percent)*1%);--thumb-y:-50%;--thumb-x:-50%;transform:translate(var(--thumb-x),var(--thumb-y))}
      .color-slider[data-orientation="vertical"] .color-slider__thumb{left:50%;bottom:calc(var(--percent)*1%);--thumb-x:-50%;--thumb-y:50%;transform:translate(var(--thumb-x),var(--thumb-y))}
      .color-swatch{display:inline-block;flex-shrink:0;border-radius:999px;border:1px solid rgba(0,0,0,.12);box-shadow:inset 0 0 0 1px rgba(255,255,255,.45)}
    </style><div class="color-slider" data-orientation="horizontal" data-rac="" data-slot="color-slider" style="--percent: 19.607843137254903; --track-start-color: rgb(255, 100, 0); --track-end-color: rgb(255, 100, 255);"><label class="label" data-slot="label">Blue</label><output class="color-slider__output" data-slot="color-slider-output">50</output><div class="color-slider__track" data-slot="color-slider-track" style="background: linear-gradient(to right, rgb(255, 100, 0), rgb(255, 100, 255)), repeating-conic-gradient(rgb(239, 239, 239) 0%, rgb(239, 239, 239) 25%, rgb(247, 247, 247) 0%, rgb(247, 247, 247) 50%) 50% center / 16px 16px;"><div aria-label="blue" aria-valuemax="255" aria-valuemin="0" aria-valuenow="50" aria-valuetext="50" class="color-slider__thumb" data-slot="color-slider-thumb" role="slider" tabindex="0" style="background-color: rgb(255, 100, 50);"></div></div></div><div class="flex items-center gap-2"><span aria-label="rgb(255, 100, 50)" class="color-swatch" style="background: rgb(255, 100, 50); height: 18px; width: 18px;"></span><p class="text-sm text-muted">Current color: <code class="font-mono">rgb(255, 100, 50)</code></p></div></div></div></div>
```

## Reference source files

No reference source files were available.
