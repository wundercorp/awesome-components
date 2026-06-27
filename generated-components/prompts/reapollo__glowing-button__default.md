# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/reapollo/glowing-button/default
- Registry URL: https://21st.dev/r/reapollo/glowing-button
- Author: reapollo
- Component slug: glowing-button
- Demo slug: default
- Title: glowing-button
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/reapollo/glowing-button with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/reapollo__glowing-button__default.html
- Local screenshot file: generated-21st-prompts/screenshots/reapollo__glowing-button__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col gap-4"><button class="whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 px-4 py-2 relative flex h-10 w-min items-center justify-center overflow-hidden rounded-md border border-r-0 bg-gradient-to-t !px-5 text-sm transition-colors duration-200 border-zinc-100 from-white to-neutral-100 text-black hover:text-black/80 dark:border-zinc-800 dark:from-zinc-900 dark:to-neutral-800 dark:text-white dark:hover:text-white/80 after:absolute after:inset-0 after:rounded-[inherit] after:bg-gradient-to-r after:from-transparent after:from-40% after:via-[var(--glow-color-via)] after:via-70% after:to-[var(--glow-color-to)] after:shadow-[rgba(255,_255,_255,_0.15)_0px_1px_0px_inset] z-10 before:absolute before:right-0 before:h-[60%] before:w-[5px] before:rounded-l before:bg-[var(--glow-color)] before:shadow-[-2px_0_10px_var(--glow-color)] before:transition-all before:duration-200 hover:before:translate-x-full" style="--glow-color: rgba(163, 230, 53, 1); --glow-color-via: rgba(163, 230, 53, 0.075); --glow-color-to: rgba(163, 230, 53, 0.2);">Hover me</button><button class="whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 px-4 py-2 relative flex h-10 w-min items-center justify-center overflow-hidden rounded-md border border-r-0 bg-gradient-to-t !px-5 text-sm transition-colors duration-200 border-zinc-100 from-white to-neutral-100 text-black hover:text-black/80 dark:border-zinc-800 dark:from-zinc-900 dark:to-neutral-800 dark:text-white dark:hover:text-white/80 after:absolute after:inset-0 after:rounded-[inherit] after:bg-gradient-to-r after:from-transparent after:from-40% after:via-[var(--glow-color-via)] after:via-70% after:to-[var(--glow-color-to)] after:shadow-[rgba(255,_255,_255,_0.15)_0px_1px_0px_inset] z-10 before:absolute before:right-0 before:h-[60%] before:w-[5px] before:rounded-l before:bg-[var(--glow-color)] before:shadow-[-2px_0_10px_var(--glow-color)] before:transition-all before:duration-200 hover:before:translate-x-full" style="--glow-color: rgba(236, 72, 153, 1); --glow-color-via: rgba(236, 72, 153, 0.075); --glow-color-to: rgba(236, 72, 153, 0.2);">Hover Me</button><button class="whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 px-4 py-2 relative flex h-10 w-min items-center justify-center overflow-hidden rounded-md border border-r-0 bg-gradient-to-t !px-5 text-sm transition-colors duration-200 border-zinc-100 from-white to-neutral-100 text-black hover:text-black/80 dark:border-zinc-800 dark:from-zinc-900 dark:to-neutral-800 dark:text-white dark:hover:text-white/80 after:absolute after:inset-0 after:rounded-[inherit] after:bg-gradient-to-r after:from-transparent after:from-40% after:via-[var(--glow-color-via)] after:via-70% after:to-[var(--glow-color-to)] after:shadow-[rgba(255,_255,_255,_0.15)_0px_1px_0px_inset] z-10 before:absolute before:right-0 before:h-[60%] before:w-[5px] before:rounded-l before:bg-[var(--glow-color)] before:shadow-[-2px_0_10px_var(--glow-color)] before:transition-all before:duration-200 hover:before:translate-x-full" style="--glow-color: rgba(34, 211, 238, 1); --glow-color-via: rgba(34, 211, 238, 0.075); --glow-color-to: rgba(34, 211, 238, 0.2);">Hover Me</button></div></div></div></div>
```

## Public registry source files

No public registry source files were available.