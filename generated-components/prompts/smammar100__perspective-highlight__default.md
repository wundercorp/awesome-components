# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/smammar100/perspective-highlight/default
- Registry URL: https://21st.dev/r/smammar100/perspective-highlight
- Author: smammar100
- Component slug: perspective-highlight
- Demo slug: default
- Title: perspective-highlight
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/smammar100/perspective-highlight with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/smammar100__perspective-highlight__default.html
- Local screenshot file: generated-21st-prompts/screenshots/smammar100__perspective-highlight__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-screen w-full items-center justify-center bg-background"><div class="[perspective:1200px] motion-safe:animate-perspective-blur-in" style="--rx: 0.00deg; --ry: 0.00deg; --lift: 0.000;"><div class="[transform-style:preserve-3d]"><div class="max-w-[480px] p-10 will-change-transform" style="transform: rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));"><article class="text-[15px] leading-[1.75] text-muted-foreground"><p class="mb-[1.1em]"><span class="inline-block rounded-[3px] px-1 text-white will-change-[transform,box-shadow]" style="background: var(--perspective-red-bg); transform: translate(calc(-8px * var(--lift, 0)), calc(-6px * var(--lift, 0))); box-shadow: rgba(var(--perspective-red-ring), calc(0.8 * var(--lift, 0))) 2px 1.5px 0px 0.75px, rgba(var(--perspective-red-ring), calc(0.3 * var(--lift, 0))) 8px 4px 4px 0px;">Three nested wrappers</span>, each with one job. Strip any of them out and the whole illusion collapses back into a flat rectangle on a page.</p><p class="mb-[1.1em]"><span class="inline-block rounded-[3px] px-1 text-white will-change-[transform,box-shadow]" style="background: var(--perspective-purple-bg); transform: translate(calc(-8px * var(--lift, 0)), calc(-6px * var(--lift, 0))); box-shadow: rgba(var(--perspective-purple-ring), calc(0.8 * var(--lift, 0))) 2px 1.5px 0px 0.75px, rgba(var(--perspective-purple-ring), calc(0.3 * var(--lift, 0))) 8px 4px 4px 0px;">The whole effect rides on CSS's perspective property.</span> The outer wrapper defines the 3D space, the middle one preserves it, and only the inner card actually rotates. Three transforms standing on each other's shoulders.</p><p><span class="inline-block rounded-[3px] px-1 text-white will-change-[transform,box-shadow]" style="background: var(--perspective-green-bg); transform: translate(calc(-8px * var(--lift, 0)), calc(-6px * var(--lift, 0))); box-shadow: rgba(var(--perspective-green-ring), calc(0.8 * var(--lift, 0))) 2px 1.5px 0px 0.75px, rgba(var(--perspective-green-ring), calc(0.3 * var(--lift, 0))) 8px 4px 4px 0px;">The card tilts toward wherever your cursor goes.</span> Move closer and it leans in; pull away and it settles flat. As it turns, the highlights drift forward — a translate going one direction and a shadow going the other, fooling your eye into reading depth.</p><p class="mt-[10px] text-[20 px] text-foreground" style="font-family: cursive;">Syed Mohammad Ammar</p></article></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.