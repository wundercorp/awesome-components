# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/reapollo/heroui-color-picker/with-swatches
- Registry URL: https://21st.dev/r/reapollo/heroui-color-picker
- Author: reapollo
- Component slug: heroui-color-picker
- Demo slug: with-swatches
- Title: heroui-color-picker
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/reapollo/heroui-color-picker with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/reapollo__heroui-color-picker__with-swatches.html
- Local screenshot file: generated-21st-prompts/screenshots/reapollo__heroui-color-picker__with-swatches.png

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
<div id="root"><div class="flex min-h-screen w-full items-center justify-center overflow-hidden bg-background p-8"><style>
      .color-picker{position:relative;display:inline-flex}
      .color-picker__trigger{display:inline-flex;align-items:center;gap:.75rem;border-radius:.5rem;color:hsl(var(--foreground,240 10% 3.9%));font-size:.875rem;line-height:1.25rem;outline:none;transition:background-color 150ms cubic-bezier(.4,0,.2,1),box-shadow 150ms ease-out;cursor:pointer}
      .color-picker__trigger[data-focus-visible=true]{box-shadow:0 0 0 2px hsl(var(--ring,240 5% 65%) / .55)}
      .color-picker__popover{position:absolute;left:50%;top:calc(100% + .5rem);z-index:50;display:flex;min-width:15.5rem;max-width:15.5rem;flex-direction:column;gap:.75rem;overflow:hidden;border-radius:min(32px,1.25rem);background:hsl(var(--popover,0 0% 100%));padding:.5rem .5rem .75rem;box-shadow:0 18px 55px rgba(0,0,0,.18),0 4px 18px rgba(0,0,0,.08);transform:translateX(-50%);transform-origin:top center;animation:color-picker-in 150ms cubic-bezier(.16,1,.3,1)}
      @keyframes color-picker-in{from{opacity:0;transform:translate(-50%,-4px) scale(.95)}to{opacity:1;transform:translate(-50%,0) scale(1)}}
      .dark .color-picker__popover{background:hsl(var(--popover,240 10% 3.9%));box-shadow:0 18px 55px rgba(0,0,0,.48),0 4px 18px rgba(0,0,0,.22)}
      .color-swatch{display:inline-block;flex:none;border:1px solid rgba(0,0,0,.12);background:var(--swatch-color);box-shadow:inset 0 0 0 1px rgba(255,255,255,.26)}
      .color-swatch--xs{width:1rem;height:1rem}.color-swatch--sm{width:1.5rem;height:1.5rem}.color-swatch--lg{width:2rem;height:2rem}
      .color-area{position:relative;width:100%;aspect-ratio:1/1;border-radius:1rem;background:var(--area-bg);box-shadow:inset 0 0 0 1px rgba(0,0,0,.10);touch-action:none;outline:none}
      .color-area__thumb{position:absolute;left:calc(var(--x)*1%);top:calc(var(--top)*1%);width:1rem;height:1rem;transform:translate(-50%,-50%);border:3px solid white;border-radius:.75rem;background:var(--thumb-color);box-shadow:0 0 0 1px rgba(0,0,0,.14),inset 0 0 0 1px rgba(0,0,0,.12);transition:width 150ms ease-out,height 150ms ease-out}
      .color-area__thumb[data-dragging=true]{width:1.25rem;height:1.25rem}
      .color-area__thumb[data-focus-visible=true],.color-slider__thumb[data-focus-visible=true]{outline:2px solid hsl(var(--ring,240 5% 65%));outline-offset:2px}
      .color-slider{display:grid;grid-template-columns:1fr auto;gap:.25rem .5rem;align-items:center;color:hsl(var(--foreground,240 10% 3.9%));font-size:.875rem}
      .color-slider__output{color:hsl(var(--muted-foreground,240 3.8% 46.1%));font-size:.875rem}
      .color-slider__track{grid-column:1/-1;position:relative;height:.75rem;border-radius:9999px;background:var(--track-bg);box-shadow:inset 0 0 0 1px rgba(0,0,0,.1);touch-action:none}
      .color-slider__thumb{position:absolute;left:calc(var(--percent)*1%);top:50%;width:1rem;height:1rem;transform:translate(-50%,-50%);border:3px solid white;border-radius:9999px;background:var(--thumb-color);box-shadow:0 0 0 1px rgba(0,0,0,.14),inset 0 0 0 1px rgba(0,0,0,.12);outline:none;transition:width 150ms ease-out,height 150ms ease-out}
      .color-slider__thumb[data-dragging=true]{width:1.25rem;height:1.25rem}
      .label{font-size:.875rem;line-height:1.25rem;font-weight:500;color:hsl(var(--foreground,240 10% 3.9%))}
      .text-muted{color:hsl(var(--muted-foreground,240 3.8% 46.1%))}
      .color-field__group{display:flex;height:2.5rem;align-items:center;overflow:hidden;border:1px solid hsl(var(--border,240 5.9% 90%));border-radius:.75rem;background:hsl(var(--background,0 0% 100%));box-shadow:0 1px 2px rgba(0,0,0,.04)}
      .color-field__prefix{display:flex;align-items:center;padding-left:.75rem}.color-field__input{min-width:0;width:100%;height:100%;border:0;background:transparent;padding:0 .75rem;color:hsl(var(--foreground,240 10% 3.9%));font-size:.875rem;outline:none}
      .swatch-picker{display:flex;flex-wrap:wrap;gap:.375rem}.swatch-picker__item{display:inline-flex;border:0;background:transparent;padding:.125rem;border-radius:.5rem;cursor:pointer;outline:none}.swatch-picker__item[data-selected=true]{box-shadow:0 0 0 2px hsl(var(--ring,240 5% 65%) / .55)}
      .select{position:relative}.select__trigger{display:flex;width:100%;height:2.5rem;align-items:center;justify-content:space-between;border:1px solid hsl(var(--border,240 5.9% 90%));border-radius:.75rem;background:hsl(var(--background,0 0% 100%));padding:0 .75rem;color:hsl(var(--foreground,240 10% 3.9%));font-size:.875rem;box-shadow:0 1px 2px rgba(0,0,0,.04);cursor:pointer}.select__popover{position:absolute;left:0;right:0;top:calc(100% + .25rem);z-index:80;border-radius:.75rem;background:hsl(var(--popover,0 0% 100%));padding:.25rem;box-shadow:0 14px 35px rgba(0,0,0,.16)}.listbox__item{display:flex;align-items:center;justify-content:space-between;border-radius:.5rem;padding:.45rem .6rem;font-size:.875rem;cursor:pointer}.listbox__item:hover{background:hsl(var(--muted,240 4.8% 95.9%))}
      .icon-button{display:inline-flex;width:2rem;height:2rem;align-items:center;justify-content:center;border:0;border-radius:.65rem;background:hsl(var(--muted,240 4.8% 95.9%));color:hsl(var(--foreground,240 10% 3.9%));cursor:pointer;transition:transform 120ms ease,background-color 150ms ease}.icon-button:active{transform:scale(.96)}
      .dark .label,.dark .color-picker__trigger,.dark .color-slider,.dark .color-field__input,.dark .select__trigger,.dark .icon-button{color:hsl(var(--foreground,0 0% 98%))}
      .dark .text-muted,.dark .color-slider__output{color:hsl(var(--muted-foreground,240 5% 64.9%))}
      .dark .color-field__group,.dark .select__trigger{border-color:hsl(var(--border,240 3.7% 15.9%));background:hsl(var(--background,240 10% 3.9%))}
      .dark .select__popover{background:hsl(var(--popover,240 10% 3.9%))}.dark .listbox__item:hover,.dark .icon-button{background:hsl(var(--muted,240 3.7% 15.9%))}
    </style><div class="color-picker" data-slot="color-picker"><button type="button" class="color-picker__trigger" aria-expanded="true" data-slot="color-picker-trigger"><span class="color-swatch color-swatch--lg" data-slot="color-swatch" style="--swatch-color: rgb(244, 63, 94); border-radius: 0.6rem;"></span><label class="label" data-slot="label">Brand Color</label></button><div class="color-picker__popover" data-slot="color-picker-popover"><div role="slider" tabindex="0" aria-label="Color area" aria-valuenow="74" class="color-area max-w-full" data-slot="color-area" style="--area-bg: linear-gradient(to top, black, transparent), linear-gradient(to right, white, hsl(349.72375690607737 100% 50%)); --x: 74.18032786885246; --top: 4.313725490196077;"><div class="color-area__thumb" data-slot="color-area-thumb" style="--thumb-color: rgb(244, 63, 94);"></div></div><div class="color-slider gap-1 px-1" data-slot="color-slider" aria-label="Hue slider"><label class="label" data-slot="label">Hue</label><span class="color-slider__output text-muted">350°</span><div class="color-slider__track" data-slot="color-slider-track" style="--track-bg: linear-gradient(to right, rgb(255,0,0), rgb(255,255,0), rgb(0,255,0), rgb(0,255,255), rgb(0,0,255), rgb(255,0,255), rgb(255,0,0)); --percent: 97.14548802946594;"><div role="slider" tabindex="0" aria-label="hue" aria-valuemin="0" aria-valuemax="360" aria-valuenow="350" class="color-slider__thumb" data-slot="color-slider-thumb" style="--percent: 97.14548802946594; --thumb-color: rgb(244, 63, 94);"></div></div></div><div class="swatch-picker justify-center px-1" data-slot="color-swatch-picker"><button type="button" class="swatch-picker__item"><span class="color-swatch color-swatch--xs" data-slot="color-swatch" style="--swatch-color: rgb(239, 68, 68); border-radius: 0.375rem;"></span></button><button type="button" class="swatch-picker__item"><span class="color-swatch color-swatch--xs" data-slot="color-swatch" style="--swatch-color: rgb(249, 115, 22); border-radius: 0.375rem;"></span></button><button type="button" class="swatch-picker__item"><span class="color-swatch color-swatch--xs" data-slot="color-swatch" style="--swatch-color: rgb(234, 179, 8); border-radius: 0.375rem;"></span></button><button type="button" class="swatch-picker__item"><span class="color-swatch color-swatch--xs" data-slot="color-swatch" style="--swatch-color: rgb(34, 197, 94); border-radius: 0.375rem;"></span></button><button type="button" class="swatch-picker__item"><span class="color-swatch color-swatch--xs" data-slot="color-swatch" style="--swatch-color: rgb(6, 182, 212); border-radius: 0.375rem;"></span></button><button type="button" class="swatch-picker__item"><span class="color-swatch color-swatch--xs" data-slot="color-swatch" style="--swatch-color: rgb(59, 130, 246); border-radius: 0.375rem;"></span></button><button type="button" class="swatch-picker__item"><span class="color-swatch color-swatch--xs" data-slot="color-swatch" style="--swatch-color: rgb(139, 92, 246); border-radius: 0.375rem;"></span></button><button type="button" class="swatch-picker__item"><span class="color-swatch color-swatch--xs" data-slot="color-swatch" style="--swatch-color: rgb(236, 72, 153); border-radius: 0.375rem;"></span></button><button type="button" class="swatch-picker__item" data-selected="true"><span class="color-swatch color-swatch--xs" data-slot="color-swatch" style="--swatch-color: rgb(244, 63, 94); border-radius: 0.375rem;"></span></button></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.