# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/arhamkhnz/playful-todolist/default
- Registry URL: https://21st.dev/r/arhamkhnz/playful-todolist
- Author: arhamkhnz
- Component slug: playful-todolist
- Demo slug: default
- Title: playful-todolist
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/arhamkhnz/playful-todolist with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/arhamkhnz__playful-todolist__default.html
- Local screenshot file: generated-21st-prompts/screenshots/arhamkhnz__playful-todolist__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-6 space-y-6"><div class="space-y-6"><div class="flex items-center space-x-2"><button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground transition-colors duration-300" id="checkbox-1"></button><div class="relative inline-block"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="checkbox-1"> Code in Assembly 💾 </label><svg width="340" height="32" viewBox="0 0 340 32" class="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none z-20 w-full h-10"><path d="M 10 16.91 s 79.8 -11.36 98.1 -11.34 c 22.2 0.02 -47.82 14.25 -33.39 22.02 c 12.61 6.77 124.18 -27.98 133.31 -17.28 c 7.52 8.38 -26.8 20.02 4.61 22.05 c 24.55 1.93 113.37 -20.36 113.37 -20.36" vector-effect="non-scaling-stroke" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" fill="none" class="stroke-neutral-900 dark:stroke-neutral-100" opacity="0" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="0px 1px"></path></svg></div></div><div class="border-t border-neutral-300 dark:border-neutral-700"></div></div><div class="space-y-6"><div class="flex items-center space-x-2"><button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground transition-colors duration-300" id="checkbox-2"></button><div class="relative inline-block"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="checkbox-2"> Present a bug as a feature 🪲 </label><svg width="340" height="32" viewBox="0 0 340 32" class="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none z-20 w-full h-10"><path d="M 10 16.91 s 79.8 -11.36 98.1 -11.34 c 22.2 0.02 -47.82 14.25 -33.39 22.02 c 12.61 6.77 124.18 -27.98 133.31 -17.28 c 7.52 8.38 -26.8 20.02 4.61 22.05 c 24.55 1.93 113.37 -20.36 113.37 -20.36" vector-effect="non-scaling-stroke" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" fill="none" class="stroke-neutral-900 dark:stroke-neutral-100" opacity="0" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="0px 1px"></path></svg></div></div><div class="border-t border-neutral-300 dark:border-neutral-700"></div></div><div class="space-y-6"><div class="flex items-center space-x-2"><button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground transition-colors duration-300" id="checkbox-3"></button><div class="relative inline-block"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="checkbox-3"> Push to prod on a Friday 🚀 </label><svg width="340" height="32" viewBox="0 0 340 32" class="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none z-20 w-full h-10"><path d="M 10 16.91 s 79.8 -11.36 98.1 -11.34 c 22.2 0.02 -47.82 14.25 -33.39 22.02 c 12.61 6.77 124.18 -27.98 133.31 -17.28 c 7.52 8.38 -26.8 20.02 4.61 22.05 c 24.55 1.93 113.37 -20.36 113.37 -20.36" vector-effect="non-scaling-stroke" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" fill="none" class="stroke-neutral-900 dark:stroke-neutral-100" opacity="0" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="0px 1px"></path></svg></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.