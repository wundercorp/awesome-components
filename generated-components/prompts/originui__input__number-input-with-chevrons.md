# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/originui/input/number-input-with-chevrons
- Registry URL: https://21st.dev/r/originui/input
- Author: originui
- Component slug: input
- Demo slug: number-input-with-chevrons
- Title: input
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/originui/input with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/originui__input__number-input-with-chevrons.html
- Local screenshot file: generated-21st-prompts/screenshots/originui__input__number-input-with-chevrons.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="max-w-[300px]" data-rac=""><div class="min-w-[300px] space-y-2"><label class="text-sm font-medium text-foreground" id="react-aria5416507855-«r2»" for="react-aria5416507855-«r0»">Number input with chevrons</label><div role="group" class="relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-input text-sm shadow-sm shadow-black/5 transition-shadow data-[focus-within]:border-ring data-[disabled]:opacity-50 data-[focus-within]:outline-none data-[focus-within]:ring-[3px] data-[focus-within]:ring-ring/20" data-rac=""><input aria-labelledby="react-aria5416507855-«r2»" id="react-aria5416507855-«r0»" autocomplete="off" inputmode="numeric" autocorrect="off" spellcheck="false" tabindex="0" aria-roledescription="Number field" class="flex-1 bg-background px-3 py-2 tabular-nums text-foreground focus:outline-none" data-rac="" type="text" value="€99.00" title=""><div class="flex h-[calc(100%+2px)] flex-col"><button id="react-aria5416507855-«r6»" class="-me-px flex h-1/2 w-6 flex-1 items-center justify-center border border-input bg-background text-sm text-muted-foreground/80 transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50" data-rac="" type="button" tabindex="-1" data-react-aria-pressable="true" aria-label="Increase" aria-labelledby="react-aria5416507855-«r6» react-aria5416507855-«r2»" aria-controls="react-aria5416507855-«r0»" slot="increment"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up" aria-hidden="true"><path d="m18 15-6-6-6 6"></path></svg></button><button id="react-aria5416507855-«r7»" class="-me-px -mt-px flex h-1/2 w-6 flex-1 items-center justify-center border border-input bg-background text-sm text-muted-foreground/80 transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50" data-rac="" type="button" tabindex="-1" data-react-aria-pressable="true" aria-label="Decrease" aria-labelledby="react-aria5416507855-«r7» react-aria5416507855-«r2»" aria-controls="react-aria5416507855-«r0»" slot="decrement"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></div></div></div><p class="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">Built with <a class="underline hover:text-foreground" href="https://react-spectrum.adobe.com/react-aria/DateField.html" target="_blank" rel="noopener nofollow">React Aria</a></p></div></div></div></div>
```

## Public registry source files

No public registry source files were available.