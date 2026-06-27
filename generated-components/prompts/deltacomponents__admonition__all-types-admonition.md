# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/deltacomponents/admonition/all-types-admonition
- Registry URL: https://21st.dev/r/deltacomponents/admonition
- Author: deltacomponents
- Component slug: admonition
- Demo slug: all-types-admonition
- Title: admonition
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/deltacomponents/admonition with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/deltacomponents__admonition__all-types-admonition.html
- Local screenshot file: generated-21st-prompts/screenshots/deltacomponents__admonition__all-types-admonition.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-2xl mx-auto space-y-4 p-4"><div class="bg-blue-50 dark:bg-blue-950/30
        border-blue-200 dark:border-blue-800
        border
        rounded-lg
        p-4"><div class="flex gap-3"><div class="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info w-5 h-5" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></div><div class="flex-1 min-w-0"><div class="text-blue-700 dark:text-blue-300 font-semibold text-sm mb-1">Note</div><div class="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">This is a note admonition for general information.</div></div></div></div><div class="bg-cyan-50 dark:bg-cyan-950/30
        border-cyan-200 dark:border-cyan-800
        border
        rounded-lg
        p-4"><div class="flex gap-3"><div class="text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info w-5 h-5" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></div><div class="flex-1 min-w-0"><div class="text-cyan-700 dark:text-cyan-300 font-semibold text-sm mb-1">Info</div><div class="text-cyan-700 dark:text-cyan-300 text-sm leading-relaxed">This is an info admonition for informational content.</div></div></div></div><div class="bg-green-50 dark:bg-green-950/30
        border-green-200 dark:border-green-800
        border
        rounded-lg
        p-4"><div class="flex gap-3"><div class="text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb w-5 h-5" aria-hidden="true"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg></div><div class="flex-1 min-w-0"><div class="text-green-700 dark:text-green-300 font-semibold text-sm mb-1">Tip</div><div class="text-green-700 dark:text-green-300 text-sm leading-relaxed">This is a tip admonition for helpful suggestions.</div></div></div></div><div class="bg-emerald-50 dark:bg-emerald-950/30
        border-emerald-200 dark:border-emerald-800
        border
        rounded-lg
        p-4"><div class="flex gap-3"><div class="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big w-5 h-5" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg></div><div class="flex-1 min-w-0"><div class="text-emerald-700 dark:text-emerald-300 font-semibold text-sm mb-1">Success</div><div class="text-emerald-700 dark:text-emerald-300 text-sm leading-relaxed">This is a success admonition for positive outcomes.</div></div></div></div><div class="bg-amber-50 dark:bg-amber-950/30
        border-amber-200 dark:border-amber-700
        border
        rounded-lg
        p-4"><div class="flex gap-3"><div class="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert w-5 h-5" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg></div><div class="flex-1 min-w-0"><div class="text-amber-700 dark:text-amber-300 font-semibold text-sm mb-1">Warning</div><div class="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">This is a warning admonition for cautionary information.</div></div></div></div><div class="bg-orange-50 dark:bg-orange-950/30
        border-orange-200 dark:border-orange-700
        border
        rounded-lg
        p-4"><div class="flex gap-3"><div class="text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert w-5 h-5" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg></div><div class="flex-1 min-w-0"><div class="text-orange-700 dark:text-orange-300 font-semibold text-sm mb-1">Caution</div><div class="text-orange-700 dark:text-orange-300 text-sm leading-relaxed">This is a caution admonition for important warnings.</div></div></div></div><div class="bg-red-50 dark:bg-red-950/30
        border-red-200 dark:border-red-800
        border
        rounded-lg
        p-4"><div class="flex gap-3"><div class="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x w-5 h-5" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg></div><div class="flex-1 min-w-0"><div class="text-red-700 dark:text-red-300 font-semibold text-sm mb-1">Danger</div><div class="text-red-700 dark:text-red-300 text-sm leading-relaxed">This is a danger admonition for critical alerts.</div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.