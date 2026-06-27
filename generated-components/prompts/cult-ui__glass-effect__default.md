# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/cult-ui/glass-effect/default
- Registry URL: https://21st.dev/r/cult-ui/glass-effect
- Author: cult-ui
- Component slug: glass-effect
- Demo slug: default
- Title: glass-effect
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/cult-ui/glass-effect with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/cult-ui__glass-effect__default.html
- Local screenshot file: generated-21st-prompts/screenshots/cult-ui__glass-effect__default.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="min-h-screen w-full flex items-center justify-center p-4"><div class="relative w-[400px] h-[400px] rounded-xl overflow-hidden"><div class="w-full h-full overflow-auto"><img alt="Background" class="w-full min-h-[800px] object-cover" src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986"></div><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"><div class="fixed md:absolute animate-slide-up top-0 left-1/2 right-1/2 z-50"><div class="flex flex-col items-center justify-center w-full"><div class="relative overflow-hidden rounded-b-2xl w-[360px] lg:w-[900px] h-[40px]"><div class="pointer-events-none absolute bottom-0 z-10 h-full w-[900px] overflow-hidden border border-[#f5f5f51a] rounded-b-2xl"><div class="glass-effect h-full w-full"></div></div><svg><defs><filter id="fractal-noise-glass"><feTurbulence type="fractalNoise" baseFrequency="0.12 0.12" numOctaves="1" result="warp"></feTurbulence><feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warp"></feDisplacementMap></filter></defs></svg></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.