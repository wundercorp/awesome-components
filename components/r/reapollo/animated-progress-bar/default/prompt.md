# Build Animated Progress Bar in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Animated Progress Bar screenshot](screenshot.png)

## Component

- Author group: `reapollo`
- Component: `animated-progress-bar`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: reapollo
- Component slug: animated-progress-bar
- Demo slug: default
- Title: animated-progress-bar
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative max-w-xs space-y-6"><div class="w-full "><div class="mb-1 text-sm font-medium ">Progress: 40%</div><div class="bg-background relative h-3 w-full overflow-hidden rounded border"><div class="bg-background h-full rounded " style="background-color: rgb(99, 102, 241); width: 40%;"></div></div></div><div class="w-full "><div class="mb-1 text-sm font-medium ">Custom Color</div><div class="bg-background relative h-3 w-full overflow-hidden rounded border"><div class="bg-background h-full rounded " style="background-color: rgb(34, 211, 238); width: 40%;"></div></div></div><div class="mt-4 flex gap-2"><button class="bg-background text-foreground rounded border px-4 py-2">Increase</button></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
