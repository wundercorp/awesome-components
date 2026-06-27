# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/coss.com/checkbox-group/parent-checkbox
- Registry URL: https://21st.dev/r/coss.com/checkbox-group
- Author: coss.com
- Component slug: checkbox-group
- Demo slug: parent-checkbox
- Title: checkbox-group
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/coss.com/checkbox-group with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/coss.com__checkbox-group__parent-checkbox.html
- Local screenshot file: generated-21st-prompts/screenshots/coss.com__checkbox-group__parent-checkbox.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="default.tsx_CheckboxGroupParent">default.tsx</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center w-full min-h-screen bg-background"><div role="group" aria-labelledby="frameworks-caption" class="flex flex-col items-start gap-3"><label class="inline-flex items-center gap-2 font-medium text-base/4.5 text-foreground sm:text-sm/4" data-slot="label" id="frameworks-caption"><span data-unchecked="" role="checkbox" tabindex="0" id="base-ui-«r0»" aria-checked="false" data-parent="" data-slot="checkbox" aria-controls="base-ui-«r0»-next base-ui-«r0»-vite base-ui-«r0»-astro" class="relative inline-flex size-4.5 shrink-0 items-center justify-center rounded-[.25rem] border border-input bg-background shadow-xs/5 outline-none ring-ring transition-shadow focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background data-disabled:opacity-64 sm:size-4 dark:not-data-checked:bg-input/32" aria-labelledby="frameworks-caption"></span><input id="base-ui-«r3»" tabindex="-1" aria-hidden="true" type="checkbox" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;">Frameworks</label><label class="inline-flex items-center gap-2 font-medium text-base/4.5 text-foreground sm:text-sm/4 ms-4" data-slot="label" id="base-ui-«r0»-next-label"><span data-unchecked="" role="checkbox" tabindex="0" id="base-ui-«r5»" aria-checked="false" data-slot="checkbox" class="relative inline-flex size-4.5 shrink-0 items-center justify-center rounded-[.25rem] border border-input bg-background shadow-xs/5 outline-none ring-ring transition-shadow focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background data-disabled:opacity-64 sm:size-4 dark:not-data-checked:bg-input/32" aria-labelledby="base-ui-«r0»-next-label"></span><input id="base-ui-«r0»-next" tabindex="-1" aria-hidden="true" type="checkbox" value="" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;">Next.js</label><label class="inline-flex items-center gap-2 font-medium text-base/4.5 text-foreground sm:text-sm/4 ms-4" data-slot="label" id="base-ui-«r0»-vite-label"><span data-unchecked="" role="checkbox" tabindex="0" id="base-ui-«r8»" aria-checked="false" data-slot="checkbox" class="relative inline-flex size-4.5 shrink-0 items-center justify-center rounded-[.25rem] border border-input bg-background shadow-xs/5 outline-none ring-ring transition-shadow focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background data-disabled:opacity-64 sm:size-4 dark:not-data-checked:bg-input/32" aria-labelledby="base-ui-«r0»-vite-label"></span><input id="base-ui-«r0»-vite" tabindex="-1" aria-hidden="true" type="checkbox" value="" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;">Vite</label><label class="inline-flex items-center gap-2 font-medium text-base/4.5 text-foreground sm:text-sm/4 ms-4" data-slot="label" id="base-ui-«r0»-astro-label"><span data-unchecked="" role="checkbox" tabindex="0" id="base-ui-«rb»" aria-checked="false" data-slot="checkbox" class="relative inline-flex size-4.5 shrink-0 items-center justify-center rounded-[.25rem] border border-input bg-background shadow-xs/5 outline-none ring-ring transition-shadow focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background data-disabled:opacity-64 sm:size-4 dark:not-data-checked:bg-input/32" aria-labelledby="base-ui-«r0»-astro-label"></span><input id="base-ui-«r0»-astro" tabindex="-1" aria-hidden="true" type="checkbox" value="" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;">Astro</label></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.