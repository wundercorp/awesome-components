# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ElevenLabs/shimmering-text/default
- Registry URL: https://21st.dev/r/ElevenLabs/shimmering-text
- Author: ElevenLabs
- Component slug: shimmering-text
- Demo slug: default
- Title: shimmering-text
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ElevenLabs/shimmering-text with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ElevenLabs__shimmering-text__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ElevenLabs__shimmering-text__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center min-h-screen bg-background p-6"><div class="w-full max-w-lg bg-card rounded-2xl border p-8 shadow-lg"><div class="mb-6 text-center"><h3 class="text-xl font-semibold">Text Shimmer Effect</h3><p class="text-muted-foreground text-sm">Animated gradient text with automatic cycling</p></div><div class="flex items-center justify-center rounded-lg bg-muted/10 py-10"><div style="opacity: 1; transform: none;"><span class="relative inline-block bg-[length:250%_100%,auto] bg-clip-text text-transparent [--base-color:var(--muted-foreground)] [--shimmer-color:var(--foreground)] [background-repeat:no-repeat,padding-box] [--shimmer-bg:linear-gradient(90deg,transparent_calc(50%-var(--spread)),var(--shimmer-color),transparent_calc(50%+var(--spread)))] dark:[--base-color:var(--muted-foreground)] dark:[--shimmer-color:var(--foreground)]" style="--spread: 52px; background-image: var(--shimmer-bg), linear-gradient(var(--base-color), var(--base-color)); background-position: 14.25% center; opacity: 1;">Processing your request...</span></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.