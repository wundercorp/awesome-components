# Build Stagger Text in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Stagger Text screenshot](screenshot.png)

## Component

- Author group: `youcefbnm`
- Component: `stagger-text`
- Variant: `stagger-text-animation`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: YoucefBnm
- Component slug: stagger-text
- Demo slug: stagger-text-animation
- Title: stagger-text
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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="container mx-auto h-svh place-content-center text-center"><div class="relative text-3xl font-medium"><span class="inline-block text-nowrap align-top"><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">C</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">r</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">e</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">a</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">t</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">e</span></span></span> <span class="inline-block text-nowrap align-top"><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">b</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">e</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">a</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">u</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">t</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">i</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">f</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">u</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">l</span></span></span> <span class="inline-block text-nowrap align-top"><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">s</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">t</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">a</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">g</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">g</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">e</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">r</span></span></span> <span class="inline-block text-nowrap align-top"><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">a</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">n</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">i</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">m</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">a</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">t</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">i</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">o</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">n</span></span></span></div><div class="relative text-3xl font-medium"><span class="inline-block text-nowrap align-top"><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">C</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">r</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">e</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">a</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">t</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">e</span></span></span> <span class="inline-block text-nowrap align-top"><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">b</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">e</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">a</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">u</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">t</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">i</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">f</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">u</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">l</span></span></span> <span class="inline-block text-nowrap align-top"><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">s</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">t</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">a</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">g</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">g</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">e</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">r</span></span></span> <span class="inline-block text-nowrap align-top"><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">a</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">n</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">i</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">m</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">a</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">t</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">i</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">o</span></span><span class="inline-block"><span class="inline-block" style="opacity: 1; transform: none;">n</span></span></span></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
