# Build Heroui Tabs in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Heroui Tabs screenshot](screenshot.png)

## Component

- Author group: `reapollo`
- Component: `heroui-tabs`
- Variant: `custom-styles`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: reapollo
- Component slug: heroui-tabs
- Demo slug: custom-styles
- Title: heroui-tabs
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-[320px] w-full items-center justify-center p-8"><template><div class="tabs__list-container" data-slot="tabs-list-container"></div></template><div data-slot="tabs" class="tabs w-full max-w-lg text-center" data-rac="" data-orientation="horizontal"><div class="tabs__list-container" data-slot="tabs-list-container"><div data-slot="tabs-list" class="tabs__list w-fit *:h-6 *:w-fit *:px-3 *:text-sm *:font-normal *:data-[selected=true]:text-accent-foreground" data-rac="" data-collection="react-aria2267765336-«r0»" id="react-aria2267765336-«r1»" aria-label="Options" role="tablist" aria-orientation="horizontal" data-orientation="horizontal"><div data-slot="tabs-tab" class="tabs__tab" data-rac="" tabindex="0" data-collection="react-aria2267765336-«r0»" data-key="daily" data-react-aria-pressable="true" id="react-aria2267765336-«r1»-tab-daily" aria-selected="true" role="tab" aria-controls="react-aria2267765336-«r1»-tabpanel-daily" data-selected="true">Daily<div data-slot="tabs-indicator" class="tabs__indicator bg-accent" data-rac=""></div></div><div data-slot="tabs-tab" class="tabs__tab" data-rac="" tabindex="-1" data-collection="react-aria2267765336-«r0»" data-key="weekly" data-react-aria-pressable="true" id="react-aria2267765336-«r1»-tab-weekly" aria-selected="false" role="tab">Weekly</div><div data-slot="tabs-tab" class="tabs__tab" data-rac="" tabindex="-1" data-collection="react-aria2267765336-«r0»" data-key="bi-weekly" data-react-aria-pressable="true" id="react-aria2267765336-«r1»-tab-bi-weekly" aria-selected="false" role="tab">Bi-Weekly</div><div data-slot="tabs-tab" class="tabs__tab" data-rac="" tabindex="-1" data-collection="react-aria2267765336-«r0»" data-key="monthly" data-react-aria-pressable="true" id="react-aria2267765336-«r1»-tab-monthly" aria-selected="false" role="tab">Monthly</div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
