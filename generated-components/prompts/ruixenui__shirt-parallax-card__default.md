# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ruixenui/shirt-parallax-card/default
- Registry URL: https://21st.dev/r/ruixenui/shirt-parallax-card
- Author: ruixenui
- Component slug: shirt-parallax-card
- Demo slug: default
- Title: shirt-parallax-card
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ruixenui/shirt-parallax-card with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ruixenui__shirt-parallax-card__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ruixenui__shirt-parallax-card__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex h-screen w-full items-center justify-center bg-muted/10 p-8"><style>
@keyframes bounceFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.bounce {
  animation: bounceFloat 3s ease-in-out infinite;
}
</style><div class="relative w-96 cursor-pointer rounded-2xl" style="transform-style: preserve-3d; transform: none;"><div class="text-card-foreground shadow-sm relative z-10 rounded-2xl border bg-card p-4"><div class="flex flex-col space-y-1.5 p-0"><h3 class="tracking-tight text-xl font-bold">Premium Cotton Shirt</h3></div><div class="p-0 max-w-[280px]"><p class="text-sm text-muted-foreground">Soft-touch fabric with a tailored fit — perfect for work and casual wear.</p><p class="mt-3 text-lg font-semibold text-primary">$39.99</p><button class="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow-sm shadow-black/5 hover:bg-primary/90 h-9 px-4 py-2 mt-4 w-full">Buy Now</button></div></div><img alt="Premium Cotton Shirt" class="absolute -top-12 -right-20 h-48 w-auto object-contain pointer-events-none z-20 bounce" src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/ruixen_shirt_product.png"></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.