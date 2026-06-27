# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/badtzx0/cloud-orbit/default
- Registry URL: https://21st.dev/r/badtzx0/cloud-orbit
- Author: badtzx0
- Component slug: cloud-orbit
- Demo slug: default
- Title: cloud-orbit
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/badtzx0/cloud-orbit with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/badtzx0__cloud-orbit__default.html
- Local screenshot file: generated-21st-prompts/screenshots/badtzx0__cloud-orbit__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative flex h-full w-full items-center justify-center rounded-full select-none" style="--size: 160px;"><img alt="Charlie Avatar" class="absolute z-10 rounded-[inherit] border border-gray-100 bg-gradient-to-t from-neutral-100 to-white inset-shadow-sm inset-shadow-black/2 dark:border-zinc-900 dark:from-zinc-900 dark:to-zinc-800 dark:inset-shadow-white/7" src="https://cdn.badtz-ui.com/images/components/cloud-orbit/avatar-1.webp" style="width: 160px; height: 160px; opacity: 1; transform: none;"><div class="absolute z-[5] flex transform-gpu items-center justify-center rounded-full p-[5%]" style="width: 53px; height: 53px; position: absolute; left: 50%; top: 50%; margin-left: -26.5px; margin-top: -26.5px;"><div class="rounded-full border border-gray-100 bg-gradient-to-t from-neutral-100 to-white p-[15%] inset-shadow-sm inset-shadow-black/2 dark:border-zinc-900 dark:from-zinc-900 dark:to-zinc-800 dark:inset-shadow-white/7" style="width: 53px; height: 53px; position: absolute; opacity: 1; transform: none;"><img alt="Deepseek Logo" class="flex h-full w-full items-center justify-center rounded-full object-contain" src="https://cdn.badtz-ui.com/images/components/cloud-orbit/deepseek-logo.webp"></div></div><div class="absolute z-[5] flex transform-gpu items-center justify-center rounded-full p-[5%]" style="width: 85px; height: 85px; position: absolute; left: 50%; top: 50%; margin-left: -42.5px; margin-top: -42.5px;"><div class="rounded-full border border-gray-100 bg-gradient-to-t from-neutral-100 to-white p-[15%] inset-shadow-sm inset-shadow-black/2 dark:border-zinc-900 dark:from-zinc-900 dark:to-zinc-800 dark:inset-shadow-white/7" style="width: 85px; height: 85px; position: absolute; opacity: 1; transform: none;"><img alt="Motion Logo" class="flex h-full w-full items-center justify-center rounded-full object-contain" src="https://cdn.badtz-ui.com/images/components/cloud-orbit/motion-logo.webp"></div></div><div class="absolute z-[5] flex transform-gpu items-center justify-center rounded-full p-[5%]" style="width: 73px; height: 73px; position: absolute; left: 50%; top: 50%; margin-left: -36.5px; margin-top: -36.5px;"><div class="rounded-full border border-gray-100 bg-gradient-to-t from-neutral-100 to-white p-[15%] inset-shadow-sm inset-shadow-black/2 dark:border-zinc-900 dark:from-zinc-900 dark:to-zinc-800 dark:inset-shadow-white/7" style="width: 73px; height: 73px; position: absolute; opacity: 1; transform: none;"><img alt="Tailwind Logo" class="flex h-full w-full items-center justify-center rounded-full object-contain" src="https://cdn.badtz-ui.com/images/components/cloud-orbit/tailwindcss-logo.webp"></div></div><div class="absolute z-[5] flex transform-gpu items-center justify-center rounded-full p-[5%]" style="width: 49px; height: 49px; position: absolute; left: 50%; top: 50%; margin-left: -24.5px; margin-top: -24.5px;"><div class="rounded-full border border-gray-100 bg-gradient-to-t from-neutral-100 to-white p-[15%] inset-shadow-sm inset-shadow-black/2 dark:border-zinc-900 dark:from-zinc-900 dark:to-zinc-800 dark:inset-shadow-white/7" style="width: 49px; height: 49px; position: absolute; opacity: 1; transform: none;"><img alt="Edge Logo" class="flex h-full w-full items-center justify-center rounded-full object-contain" src="https://cdn.badtz-ui.com/images/components/cloud-orbit/edge-logo.webp"></div></div><div class="absolute z-[5] flex transform-gpu items-center justify-center rounded-full p-[5%]" style="width: 40px; height: 40px; position: absolute; left: 50%; top: 50%; margin-left: -20px; margin-top: -20px;"><div class="rounded-full border border-gray-100 bg-gradient-to-t from-neutral-100 to-white p-[15%] inset-shadow-sm inset-shadow-black/2 dark:border-zinc-900 dark:from-zinc-900 dark:to-zinc-800 dark:inset-shadow-white/7" style="width: 40px; height: 40px; position: absolute; opacity: 1; transform: none;"><img alt="Linear Logo" class="flex h-full w-full items-center justify-center rounded-full object-contain" src="https://cdn.badtz-ui.com/images/components/cloud-orbit/linear-logo.webp"></div></div><div class="absolute z-[5] flex transform-gpu items-center justify-center rounded-full p-[5%]" style="width: 87px; height: 87px; position: absolute; left: 50%; top: 50%; margin-left: -43.5px; margin-top: -43.5px;"><div class="rounded-full border border-gray-100 bg-gradient-to-t from-neutral-100 to-white p-[15%] inset-shadow-sm inset-shadow-black/2 dark:border-zinc-900 dark:from-zinc-900 dark:to-zinc-800 dark:inset-shadow-white/7" style="width: 87px; height: 87px; position: absolute; opacity: 1; transform: none;"><img alt="React Logo" class="flex h-full w-full items-center justify-center rounded-full object-contain" src="https://cdn.badtz-ui.com/images/components/cloud-orbit/react-logo.webp"></div></div><div class="absolute z-[5] flex transform-gpu items-center justify-center rounded-full p-[5%]" style="width: 73px; height: 73px; position: absolute; left: 50%; top: 50%; margin-left: -36.5px; margin-top: -36.5px;"><div class="rounded-full border border-gray-100 bg-gradient-to-t from-neutral-100 to-white p-[15%] inset-shadow-sm inset-shadow-black/2 dark:border-zinc-900 dark:from-zinc-900 dark:to-zinc-800 dark:inset-shadow-white/7" style="width: 73px; height: 73px; position: absolute; opacity: 1; transform: none;"><img alt="Drizzle ORM Logo" class="flex h-full w-full items-center justify-center rounded-full object-contain" src="https://cdn.badtz-ui.com/images/components/cloud-orbit/drizzle-orm-logo.webp"></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.