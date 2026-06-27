# Build Accordion 1 in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Accordion 1 screenshot](screenshot.png)

## Component

- Author group: `anubra266`
- Component: `accordion-1`
- Variant: `accordion-table-w-chevron`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: anubra266
- Component slug: accordion-1
- Demo slug: accordion-table-w-chevron
- Title: accordion-1
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div data-scope="accordion" data-part="root" dir="ltr" id="accordion:«r0»" data-orientation="vertical" class="w-full max-w-md mx-auto border border-gray-300/50 dark:border-gray-700/50 rounded-lg overflow-hidden bg-linear-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-xs"><div data-scope="accordion" data-part="item" data-state="closed" dir="ltr" id="collapsible:accordion:«r0»:item:music-production" data-orientation="vertical" class="group"><button data-scope="accordion" data-part="item-trigger" type="button" dir="ltr" id="accordion:«r0»:trigger:music-production" aria-controls="accordion:«r0»:content:music-production" aria-expanded="false" data-orientation="vertical" aria-disabled="false" data-state="closed" data-ownedby="accordion:«r0»" class="w-full px-4 py-4 flex items-center justify-between text-left hover:bg-linear-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200 border-b border-gray-200/50 dark:border-gray-700/50"><span class="font-medium text-gray-900 dark:text-white text-sm">Explore modern music production</span><div data-scope="accordion" data-part="item-indicator" dir="ltr" aria-hidden="true" data-state="closed" data-orientation="vertical" class="ml-2 transition-transform duration-200 data-[state=open]:rotate-180"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-4 h-4 text-gray-600 dark:text-gray-400" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></button><div data-scope="accordion" data-part="item-content" data-collapsible="" data-state="closed" id="accordion:«r0»:content:music-production" hidden="" dir="ltr" role="region" aria-labelledby="accordion:«r0»:trigger:music-production" data-orientation="vertical" class="px-4 py-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed bg-linear-to-r from-transparent via-gray-50/30 dark:via-gray-800/30 to-transparent border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0" style="--height: 0px; --width: 0px;">Create professional-quality tracks using digital audio workstations, synthesizers, and mixing techniques that bring your musical ideas to life.</div></div><div data-scope="accordion" data-part="item" data-state="closed" dir="ltr" id="collapsible:accordion:«r0»:item:visual-graphics" data-orientation="vertical" class="group"><button data-scope="accordion" data-part="item-trigger" type="button" dir="ltr" id="accordion:«r0»:trigger:visual-graphics" aria-controls="accordion:«r0»:content:visual-graphics" aria-expanded="false" data-orientation="vertical" aria-disabled="false" data-state="closed" data-ownedby="accordion:«r0»" class="w-full px-4 py-4 flex items-center justify-between text-left hover:bg-linear-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200 border-b border-gray-200/50 dark:border-gray-700/50"><span class="font-medium text-gray-900 dark:text-white text-sm">Design stunning visual graphics</span><div data-scope="accordion" data-part="item-indicator" dir="ltr" aria-hidden="true" data-state="closed" data-orientation="vertical" class="ml-2 transition-transform duration-200 data-[state=open]:rotate-180"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-4 h-4 text-gray-600 dark:text-gray-400" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></button><div data-scope="accordion" data-part="item-content" data-collapsible="" data-state="closed" id="accordion:«r0»:content:visual-graphics" hidden="" dir="ltr" role="region" aria-labelledby="accordion:«r0»:trigger:visual-graphics" data-orientation="vertical" class="px-4 py-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed bg-linear-to-r from-transparent via-gray-50/30 dark:via-gray-800/30 to-transparent border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0" style="--height: 0px; --width: 0px;">Master color theory, typography, and composition principles to create compelling visuals that communicate effectively and inspire audiences.</div></div><div data-scope="accordion" data-part="item" data-state="open" dir="ltr" id="collapsible:accordion:«r0»:item:financial-planning" data-orientation="vertical" class="group"><button data-scope="accordion" data-part="item-trigger" type="button" dir="ltr" id="accordion:«r0»:trigger:financial-planning" aria-controls="accordion:«r0»:content:financial-planning" aria-expanded="true" data-orientation="vertical" aria-disabled="false" data-state="open" data-ownedby="accordion:«r0»" class="w-full px-4 py-4 flex items-center justify-between text-left hover:bg-linear-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200 border-b border-gray-200/50 dark:border-gray-700/50"><span class="font-medium text-gray-900 dark:text-white text-sm">Master financial planning basics</span><div data-scope="accordion" data-part="item-indicator" dir="ltr" aria-hidden="true" data-state="open" data-orientation="vertical" class="ml-2 transition-transform duration-200 data-[state=open]:rotate-180"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-4 h-4 text-gray-600 dark:text-gray-400" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></button><div data-scope="accordion" data-part="item-content" data-collapsible="" id="accordion:«r0»:content:financial-planning" dir="ltr" role="region" aria-labelledby="accordion:«r0»:trigger:financial-planning" data-orientation="vertical" class="px-4 py-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed bg-linear-to-r from-transparent via-gray-50/30 dark:via-gray-800/30 to-transparent border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0" style="--height: 0px; --width: 0px;">Build a secure financial future through budgeting, investing, and strategic planning that grows your wealth and protects your assets.</div></div><div data-scope="accordion" data-part="item" data-state="closed" dir="ltr" id="collapsible:accordion:«r0»:item:foreign-language" data-orientation="vertical" class="group"><button data-scope="accordion" data-part="item-trigger" type="button" dir="ltr" id="accordion:«r0»:trigger:foreign-language" aria-controls="accordion:«r0»:content:foreign-language" aria-expanded="false" data-orientation="vertical" aria-disabled="false" data-state="closed" data-ownedby="accordion:«r0»" class="w-full px-4 py-4 flex items-center justify-between text-left hover:bg-linear-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200 border-b border-gray-200/50 dark:border-gray-700/50"><span class="font-medium text-gray-900 dark:text-white text-sm">Learn foreign language fluency</span><div data-scope="accordion" data-part="item-indicator" dir="ltr" aria-hidden="true" data-state="closed" data-orientation="vertical" class="ml-2 transition-transform duration-200 data-[state=open]:rotate-180"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-4 h-4 text-gray-600 dark:text-gray-400" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></button><div data-scope="accordion" data-part="item-content" data-collapsible="" data-state="closed" id="accordion:«r0»:content:foreign-language" hidden="" dir="ltr" role="region" aria-labelledby="accordion:«r0»:trigger:foreign-language" data-orientation="vertical" class="px-4 py-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed bg-linear-to-r from-transparent via-gray-50/30 dark:via-gray-800/30 to-transparent border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0" style="--height: 0px; --width: 0px;">Achieve conversational fluency through immersive practice, cultural understanding, and proven language learning techniques that stick.</div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
