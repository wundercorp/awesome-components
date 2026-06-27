# Build Shimmering Text in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Shimmering Text screenshot](screenshot.png)

## Component

- Author group: `elevenlabs`
- Component: `shimmering-text`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ElevenLabs
- Component slug: shimmering-text
- Demo slug: default
- Title: shimmering-text
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center min-h-screen bg-background p-6"><div class="w-full max-w-lg bg-card rounded-2xl border p-8 shadow-lg"><div class="mb-6 text-center"><h3 class="text-xl font-semibold">Text Shimmer Effect</h3><p class="text-muted-foreground text-sm">Animated gradient text with automatic cycling</p></div><div class="flex items-center justify-center rounded-lg bg-muted/10 py-10"><div style="opacity: 1; transform: none;"><span class="relative inline-block bg-[length:250%_100%,auto] bg-clip-text text-transparent [--base-color:var(--muted-foreground)] [--shimmer-color:var(--foreground)] [background-repeat:no-repeat,padding-box] [--shimmer-bg:linear-gradient(90deg,transparent_calc(50%-var(--spread)),var(--shimmer-color),transparent_calc(50%+var(--spread)))] dark:[--base-color:var(--muted-foreground)] dark:[--shimmer-color:var(--foreground)]" style="--spread: 52px; background-image: var(--shimmer-bg), linear-gradient(var(--base-color), var(--base-color)); background-position: 14.25% center; opacity: 1;">Processing your request...</span></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
