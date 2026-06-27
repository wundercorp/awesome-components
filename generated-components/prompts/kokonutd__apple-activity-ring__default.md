# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/kokonutd/apple-activity-ring/default
- Registry URL: https://21st.dev/r/kokonutd/apple-activity-ring
- Author: kokonutd
- Component slug: apple-activity-ring
- Demo slug: default
- Title: apple-activity-ring
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/kokonutd/apple-activity-ring with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/kokonutd__apple-activity-ring__default.html
- Local screenshot file: generated-21st-prompts/screenshots/kokonutd__apple-activity-ring__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative w-full max-w-3xl mx-auto p-8 rounded-3xl text-zinc-900 dark:text-white"><div class="flex flex-col items-center gap-8"><h2 class="text-2xl font-medium text-zinc-900 dark:text-white" style="opacity: 1; transform: none;">Activity Rings</h2><div class="flex items-center"><div class="relative w-[180px] h-[180px]"><div class="absolute inset-0 flex items-center justify-center" style="opacity: 1; transform: none;"><div class="relative"><svg width="200" height="200" viewBox="0 0 200 200" class="transform -rotate-90" aria-label="MOVE Activity Progress - 85%"><title>MOVE Activity Progress - 85%</title><defs><linearGradient id="gradient-move" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color: rgb(255, 45, 85); stop-opacity: 1;"></stop><stop offset="100%" style="stop-color: rgb(255, 107, 139); stop-opacity: 1;"></stop></linearGradient></defs><circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" stroke-width="16" class="text-zinc-200/50 dark:text-zinc-800/50"></circle><circle cx="100" cy="100" r="92" fill="none" stroke="url(#gradient-move)" stroke-width="16" stroke-dasharray="578.0530482605219" stroke-linecap="round" stroke-dashoffset="86.70795723907828" style="filter: drop-shadow(rgba(0, 0, 0, 0.15) 0px 0px 6px);"></circle></svg></div></div><div class="absolute inset-0 flex items-center justify-center" style="opacity: 1; transform: none;"><div class="relative"><svg width="160" height="160" viewBox="0 0 160 160" class="transform -rotate-90" aria-label="EXERCISE Activity Progress - 60%"><title>EXERCISE Activity Progress - 60%</title><defs><linearGradient id="gradient-exercise" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color: rgb(163, 249, 0); stop-opacity: 1;"></stop><stop offset="100%" style="stop-color: rgb(197, 255, 77); stop-opacity: 1;"></stop></linearGradient></defs><circle cx="80" cy="80" r="72" fill="none" stroke="currentColor" stroke-width="16" class="text-zinc-200/50 dark:text-zinc-800/50"></circle><circle cx="80" cy="80" r="72" fill="none" stroke="url(#gradient-exercise)" stroke-width="16" stroke-dasharray="452.3893421169302" stroke-linecap="round" stroke-dashoffset="180.95573684677208" style="filter: drop-shadow(rgba(0, 0, 0, 0.15) 0px 0px 6px);"></circle></svg></div></div><div class="absolute inset-0 flex items-center justify-center" style="opacity: 1; transform: none;"><div class="relative"><svg width="120" height="120" viewBox="0 0 120 120" class="transform -rotate-90" aria-label="STAND Activity Progress - 30%"><title>STAND Activity Progress - 30%</title><defs><linearGradient id="gradient-stand" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color: rgb(4, 199, 221); stop-opacity: 1;"></stop><stop offset="100%" style="stop-color: rgb(77, 223, 237); stop-opacity: 1;"></stop></linearGradient></defs><circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" stroke-width="16" class="text-zinc-200/50 dark:text-zinc-800/50"></circle><circle cx="60" cy="60" r="52" fill="none" stroke="url(#gradient-stand)" stroke-width="16" stroke-dasharray="326.7256359733385" stroke-linecap="round" stroke-dashoffset="228.70794518133695" style="filter: drop-shadow(rgba(0, 0, 0, 0.15) 0px 0px 6px);"></circle></svg></div></div></div><div class="flex flex-col gap-6 ml-8" style="opacity: 1; transform: none;"><div class="flex flex-col"><span class="text-sm font-medium text-zinc-600 dark:text-zinc-400">MOVE</span><span class="text-2xl font-semibold" style="color: rgb(255, 45, 85);">479/800<span class="text-base ml-1 text-zinc-600 dark:text-zinc-400">CAL</span></span></div><div class="flex flex-col"><span class="text-sm font-medium text-zinc-600 dark:text-zinc-400">EXERCISE</span><span class="text-2xl font-semibold" style="color: rgb(163, 249, 0);">24/30<span class="text-base ml-1 text-zinc-600 dark:text-zinc-400">MIN</span></span></div><div class="flex flex-col"><span class="text-sm font-medium text-zinc-600 dark:text-zinc-400">STAND</span><span class="text-2xl font-semibold" style="color: rgb(4, 199, 221);">6/12<span class="text-base ml-1 text-zinc-600 dark:text-zinc-400">HR</span></span></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.