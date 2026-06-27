# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hero_ui/heroui-checkbox/with-label
- Registry URL: https://21st.dev/r/hero_ui/heroui-checkbox
- Author: hero_ui
- Component slug: heroui-checkbox
- Demo slug: with-label
- Title: heroui-checkbox
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hero_ui/heroui-checkbox with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hero_ui__heroui-checkbox__with-label.html
- Local screenshot file: generated-21st-prompts/screenshots/hero_ui__heroui-checkbox__with-label.png

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
      [data-slot="checkbox-control"] [data-slot="checkbox-border"] {
        position: absolute;
        inset: 0;
        z-index: 1;
        border: 2px solid #d4d4d8;
        border-radius: inherit;
        pointer-events: none;
        transition: border-color 200ms linear, background-color 200ms linear;
      }
      .dark [data-slot="checkbox-control"] [data-slot="checkbox-border"] { border-color: #52525b; }
      [data-slot="checkbox-control"][data-selected="true"] [data-slot="checkbox-border"] {
        border-color: var(--checkbox-selected-bg);
      }
      [data-slot="checkbox-control"] [data-slot="checkbox-fill"] {
        position: absolute;
        inset: 0;
        z-index: 0;
        border-radius: inherit;
        background: var(--checkbox-selected-bg);
        opacity: 0;
        transform: scale(.5);
        transform-origin: center;
        transition: transform 200ms linear, opacity 200ms linear;
      }
      [data-slot="checkbox-control"][data-selected="true"] [data-slot="checkbox-fill"] {
        opacity: 1;
        transform: scale(1);
      }
      [data-slot="checkbox-indicator"] {
        opacity: 0;
        transform: scale(.72);
        transition: transform 200ms ease, opacity 200ms ease;
      }
      [data-slot="checkbox-indicator"][data-visible="true"] {
        opacity: 1;
        transform: scale(1);
      }
      [data-slot="checkbox-control"]:active,
      .group:active [data-slot="checkbox-control"] {
        transform: scale(.95);
      }
      @media (prefers-reduced-motion: reduce) {
        [data-slot="checkbox-control"],
        [data-slot="checkbox-control"] [data-slot="checkbox-fill"],
        [data-slot="checkbox-indicator"] { transition: none; }
      }
    </style><label data-selected="false" data-disabled="false" data-invalid="false" class="group relative inline-flex max-w-fit cursor-pointer select-none items-center justify-start gap-2 p-2 -m-2 text-foreground"><input id="label-marketing" aria-checked="false" class="sr-only" type="checkbox"><span data-slot="checkbox-control" data-selected="false" data-disabled="false" data-invalid="false" class="relative inline-flex size-5 shrink-0 items-center justify-center overflow-hidden rounded-md text-white transition-transform duration-200 active:scale-95 before:absolute before:inset-0 before:z-0 before:bg-zinc-100/70 before:opacity-0 before:transition-colors hover:before:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 dark:before:bg-white/10 data-[invalid=true]:border-rose-500 data-[disabled=true]:opacity-50 size-5 rounded-md data-[selected=true]:border-violet-600 data-[selected=true]:text-white data-[selected=true]:after:bg-violet-600" style="--checkbox-selected-bg: #7c3aed;"><span aria-hidden="true" data-slot="checkbox-fill"></span><span aria-hidden="true" data-slot="checkbox-border"></span><span data-slot="checkbox-indicator" data-visible="false" class="relative z-10 inline-flex items-center justify-center"><svg aria-hidden="true" viewBox="0 0 17 18" class="h-3 w-4"><polyline points="3.6 9.2 7.1 12.7 13.8 5.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4"></polyline></svg></span></span><span class="relative inline-flex flex-col justify-center gap-1 leading-none text-zinc-900 transition-colors dark:text-zinc-100 text-sm">Send me marketing emails</span></label></div></div>
```

## Public registry source files

No public registry source files were available.