# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hero_ui/heroui-drawer/controlled-state
- Registry URL: https://21st.dev/r/hero_ui/heroui-drawer
- Author: hero_ui
- Component slug: heroui-drawer
- Demo slug: controlled-state
- Title: heroui-drawer
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hero_ui/heroui-drawer with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hero_ui__heroui-drawer__controlled-state.html
- Local screenshot file: generated-21st-prompts/screenshots/hero_ui__heroui-drawer__controlled-state.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex max-w-md flex-col gap-8"><div class="flex flex-col gap-3"><h3 class="text-lg font-semibold text-foreground">With React.useState()</h3><p class="text-sm leading-relaxed text-pretty text-muted-foreground">Control the drawer using React's <code class="text-foreground">useState</code> hook for simple state management.</p><div class="flex flex-col items-start gap-3 rounded-2xl bg-surface p-4 shadow-sm"><div class="flex w-full items-center justify-between"><p class="text-xs text-muted-foreground">Status: <span class="font-mono font-medium text-foreground">closed</span></p></div><div class="flex gap-2"><button data-slot="button" class="button button--sm button--secondary" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" id="react-aria3258765654-«r0»">Open Drawer</button><button data-slot="button" class="button button--sm button--tertiary" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" id="react-aria3258765654-«r2»">Toggle</button></div></div></div><div class="flex flex-col gap-3"><h3 class="text-lg font-semibold text-foreground">With useOverlayState()</h3><p class="text-sm leading-relaxed text-pretty text-muted-foreground">Use the <code class="text-foreground">useOverlayState</code> hook for a cleaner API with convenient methods like <code>open()</code>, <code>close()</code>, and <code>toggle()</code>.</p><div class="flex flex-col items-start gap-3 rounded-2xl bg-surface p-4 shadow-sm"><div class="flex w-full items-center justify-between"><p class="text-xs text-muted-foreground">Status: <span class="font-mono font-medium text-foreground">closed</span></p></div><div class="flex gap-2"><button data-slot="button" class="button button--sm button--secondary" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" id="react-aria3258765654-«r4»">Open Drawer</button><button data-slot="button" class="button button--sm button--tertiary" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" id="react-aria3258765654-«r6»">Toggle</button></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.