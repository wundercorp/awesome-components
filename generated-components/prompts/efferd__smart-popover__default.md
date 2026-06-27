# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/efferd/smart-popover/default
- Registry URL: https://21st.dev/r/efferd/smart-popover
- Author: efferd
- Component slug: smart-popover
- Demo slug: default
- Title: smart-popover
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/efferd/smart-popover with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/efferd__smart-popover__default.html
- Local screenshot file: generated-21st-prompts/screenshots/efferd__smart-popover__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-screen flex-col items-center space-y-12 py-24"><div class="fixed top-4 left-4 z-50"><div class="bg-muted rounded-full border px-3 py-2 text-sm font-medium"><div class="flex items-center gap-2"><div class="h-2 w-2 rounded-full bg-blue-500"></div>Desktop</div></div></div><div class="space-y-3 text-center"><h1 class="text-6xl font-extrabold tracking-tight">Responsive Popover</h1><p class="text-xl font-medium">This popover automatically adapts to your device:</p><div class="flex justify-center gap-8 text-sm"><div class="flex items-center gap-2 rounded-md border p-1"><div class="h-3 w-3 rounded-full bg-blue-500"></div><span class="flex items-center gap-2"><strong class="font-semibold">Desktop:</strong> <code><pre>&lt;Popover /&gt;</pre></code></span></div><div class="flex items-center gap-2 rounded-md border p-1"><div class="h-3 w-3 rounded-full bg-green-500"></div><span class="flex items-center gap-2"><strong class="font-semibold">Mobile:</strong> <code><pre>&lt;Drawer /&gt;</pre></code></span></div></div></div><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-«r0»" data-state="closed" data-slot="popover-trigger">Open Popover</button><p class="text-muted-foreground text-sm">*Try resizing your browser window or opening this on different devices!</p></div></div></div></div>
```

## Public registry source files

No public registry source files were available.