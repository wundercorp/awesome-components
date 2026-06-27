# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/originui/input/number-input-with-plus-minus-buttons
- Registry URL: https://21st.dev/r/originui/input
- Author: originui
- Component slug: input
- Demo slug: number-input-with-plus-minus-buttons
- Title: input
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/originui/input with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/originui__input__number-input-with-plus-minus-buttons.html
- Local screenshot file: generated-21st-prompts/screenshots/originui__input__number-input-with-plus-minus-buttons.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="max-w-[300px]" data-rac=""><div class="space-y-2"><label class="text-sm font-medium text-foreground" id="react-aria4403536803-«r2»" for="react-aria4403536803-«r0»">Number input with plus/minus buttons</label><div role="group" class="relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-input text-sm shadow-sm shadow-black/5 transition-shadow data-[focus-within]:border-ring data-[disabled]:opacity-50 data-[focus-within]:outline-none data-[focus-within]:ring-[3px] data-[focus-within]:ring-ring/20" data-rac=""><button id="react-aria4403536803-«r7»" class="-ms-px flex aspect-square h-[inherit] items-center justify-center rounded-s-lg border border-input bg-background text-sm text-muted-foreground/80 transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50" data-rac="" type="button" tabindex="-1" data-react-aria-pressable="true" aria-label="Decrease" aria-labelledby="react-aria4403536803-«r7» react-aria4403536803-«r2»" aria-controls="react-aria4403536803-«r0»" slot="decrement"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus" aria-hidden="true"><path d="M5 12h14"></path></svg></button><input aria-labelledby="react-aria4403536803-«r2»" id="react-aria4403536803-«r0»" autocomplete="off" inputmode="numeric" autocorrect="off" spellcheck="false" tabindex="0" aria-roledescription="Number field" class="w-full grow bg-background px-3 py-2 text-center tabular-nums text-foreground focus:outline-none" data-rac="" type="text" value="2,048" title=""><button id="react-aria4403536803-«r6»" class="-me-px flex aspect-square h-[inherit] items-center justify-center rounded-e-lg border border-input bg-background text-sm text-muted-foreground/80 transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50" data-rac="" type="button" tabindex="-1" data-react-aria-pressable="true" aria-label="Increase" aria-labelledby="react-aria4403536803-«r6» react-aria4403536803-«r2»" aria-controls="react-aria4403536803-«r0»" slot="increment"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button></div></div><p class="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">Built with <a class="underline hover:text-foreground" href="https://react-spectrum.adobe.com/react-aria/DateField.html" target="_blank" rel="noopener nofollow">React Aria</a></p></div></div></div></div>
```

## Public registry source files

No public registry source files were available.