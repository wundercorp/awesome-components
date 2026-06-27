# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/badtzx0/border-beam/default
- Registry URL: https://21st.dev/r/badtzx0/border-beam
- Author: badtzx0
- Component slug: border-beam
- Demo slug: default
- Title: border-beam
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/badtzx0/border-beam with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/badtzx0__border-beam__default.html
- Local screenshot file: generated-21st-prompts/screenshots/badtzx0__border-beam__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative overflow-hidden rounded-lg shadow-sm"><div class="absolute z-0 h-full w-full rounded-[inherit] after:absolute after:inset-[var(--border-width)] after:rounded-[inherit] after:content-[''] border-[length:var(--border-width)] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(red,red)] before:absolute before:inset-0 before:z-[-1] before:rounded-[inherit] before:border-[length:var(--border-width)] before:border-black/10 dark:before:border-white/10" style="--duration: 8; --border-width: 1px; --path: path(&quot;M 0 0 H 288 V 132 H 0 V 0&quot;);"><div class="absolute inset-0 aspect-square bg-[radial-gradient(ellipse_at_center,var(--light-color),transparent,transparent)]" style="--light-color: #FF2056; --light-width: 350px; width: var(--light-width); offset-path: var(--path); offset-distance: 63.825%;"></div></div><div class="h-full w-full max-w-72 space-y-2 px-6 py-4"><h3 class="font-gilroy text-2xl">Border Beam</h3><p class="text-sm">This card showcases a dynamic border beam effect, adding a subtle, animated glow around the edges.</p></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.