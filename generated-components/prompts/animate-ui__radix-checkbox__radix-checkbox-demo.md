# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/animate-ui/radix-checkbox/radix-checkbox-demo
- Registry URL: https://21st.dev/r/animate-ui/radix-checkbox
- Author: animate-ui
- Component slug: radix-checkbox
- Demo slug: radix-checkbox-demo
- Title: radix-checkbox
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/animate-ui/radix-checkbox with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/animate-ui__radix-checkbox__radix-checkbox-demo.html
- Local screenshot file: generated-21st-prompts/screenshots/animate-ui__radix-checkbox__radix-checkbox-demo.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="flex items-center space-x-2"><button class="peer size-5 flex items-center justify-center shrink-0 rounded-sm bg-muted transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" type="button" role="checkbox" aria-checked="true" data-state="checked" value="on" id="terms" tabindex="0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" stroke="currentColor" class="size-3.5" data-state="checked" style="pointer-events: none;"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" opacity="1" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path></svg></button><label for="terms" class="text-sm leading-none font-medium select-none">Accept terms and conditions</label></div></div></div></div>
```

## Public registry source files

No public registry source files were available.