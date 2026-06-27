# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ShadcnStudio/collapsible-1/collapsible-six
- Registry URL: https://21st.dev/r/ShadcnStudio/collapsible-1
- Author: ShadcnStudio
- Component slug: collapsible-1
- Demo slug: collapsible-six
- Title: collapsible-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ShadcnStudio/collapsible-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ShadcnStudio__collapsible-1__collapsible-six.html
- Local screenshot file: generated-21st-prompts/screenshots/ShadcnStudio__collapsible-1__collapsible-six.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-[400px] h-[300px] space-y-4 overflow-auto rounded-md border p-4"><div class="space-y-2"><p class="font-medium">How can I track my order?</p><div data-state="open" class="space-y-2"><div data-state="open" id="radix-«r0»" style="transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 80px; --radix-collapsible-content-width: 366px;"><p class="text-sm">To track your order, simply log in to your account and navigate to the order history section. You'll find detailed information about your order status and tracking number there.</p></div><button type="button" aria-controls="radix-«r0»" aria-expanded="true" data-state="open"><span class="text-muted-foreground text-sm underline">Hide answer</span></button></div></div><div class="space-y-2"><p class="font-medium">Can I cancel my order?</p><div data-state="closed" class="space-y-2"><div data-state="closed" id="radix-«r1»" hidden="" style=""></div><button type="button" aria-controls="radix-«r1»" aria-expanded="false" data-state="closed"><span class="text-muted-foreground text-sm underline">Show answer</span></button></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.