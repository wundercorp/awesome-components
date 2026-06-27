# Build Button Ui in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Button Ui screenshot](screenshot.png)

## Component

- Author group: `prebuiltui`
- Component: `button-ui`
- Variant: `glowing-button-with-hover-effect`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: prebuiltui
- Component slug: button-ui
- Demo slug: glowing-button-with-hover-effect
- Title: button-ui
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative group overflow-hidden bg-white/20 p-0.5 h-9 w-20 rounded-md active:scale-100 hover:scale-105 transition-all duration-300"><button class="text-white text-sm bg-gradient-to-t from-black/50 to-black h-full w-full rounded">Button</button><div class="absolute -bottom-12 group-hover:-bottom-10 transition-all duration-200 left-1/2 -z-10 -translate-x-1/2 blur size-14 rounded-full bg-white"></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
