# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/originui/multiselect/default
- Registry URL: https://21st.dev/r/originui/multiselect
- Author: originui
- Component slug: multiselect
- Demo slug: default
- Title: multiselect
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/originui/multiselect with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/originui__multiselect__default.html
- Local screenshot file: generated-21st-prompts/screenshots/originui__multiselect__default.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="*:not-first:mt-2"><label class="text-sm font-medium leading-4 text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Multiselect</label><div tabindex="-1" class="flex w-full flex-col rounded-md text-popover-foreground h-auto overflow-visible bg-transparent" cmdk-root=""><label cmdk-label="" for="radix-_r_3_" id="radix-_r_2_" style="position: absolute; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;">Select frameworks</label><div class="relative min-h-[38px] rounded-lg border border-input text-sm transition-shadow focus-within:border-ring focus-within:outline-none focus-within:ring-[3px] focus-within:ring-ring/20 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 p-1 cursor-text"><div class="flex flex-wrap gap-1"><div class="animate-fadeIn relative inline-flex h-7 cursor-default items-center rounded-md border border-solid bg-background pe-7 pl-2 ps-2 text-xs font-medium text-secondary-foreground transition-all hover:bg-background disabled:cursor-not-allowed disabled:opacity-50 data-[fixed]:pe-2">Next.js<button class="absolute -inset-y-px -end-px flex size-7 items-center justify-center rounded-e-lg border border-transparent p-0 text-muted-foreground/80 outline-0 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70" aria-label="Remove"><svg width="14" height="14" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2" aria-hidden="true"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></button></div><div class="animate-fadeIn relative inline-flex h-7 cursor-default items-center rounded-md border border-solid bg-background pe-7 pl-2 ps-2 text-xs font-medium text-secondary-foreground transition-all hover:bg-background disabled:cursor-not-allowed disabled:opacity-50 data-[fixed]:pe-2">SvelteKit<button class="absolute -inset-y-px -end-px flex size-7 items-center justify-center rounded-e-lg border border-transparent p-0 text-muted-foreground/80 outline-0 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70" aria-label="Remove"><svg width="14" height="14" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2" aria-hidden="true"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></button></div><input placeholder="" class="flex-1 bg-transparent outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed w-full ml-1" cmdk-input="" autocomplete="off" autocorrect="off" spellcheck="false" aria-autocomplete="list" role="combobox" aria-expanded="true" aria-controls="radix-_r_1_" aria-labelledby="radix-_r_2_" id="radix-_r_3_" type="text" value=""><button type="button" class="absolute end-0 top-0 size-9 items-center justify-center rounded-lg border border-transparent text-muted-foreground/80 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring/70 hidden" aria-label="Clear all"><svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2" aria-hidden="true"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></button></div></div><div class="relative"><div class="absolute top-2 z-10 w-full overflow-hidden rounded-lg border border-input data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 hidden" data-state="closed"></div></div></div><p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">Inspired by <a class="hover:text-foreground underline" href="https://shadcnui-expansions.typeart.cc/docs/multiple-selector" target="_blank" rel="noopener nofollow">shadcn/ui expansions</a></p></div></div></div></div>
```

## Public registry source files

No public registry source files were available.