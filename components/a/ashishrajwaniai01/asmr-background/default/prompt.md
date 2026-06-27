# Build Asmr Background in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Asmr Background screenshot](screenshot.png)

## Component

- Author group: `ashishrajwaniai01`
- Component: `asmr-background`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ashishrajwaniai01
- Component slug: asmr-background
- Demo slug: default
- Title: asmr-background
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative w-full h-screen bg-[#0a0a0c] overflow-hidden cursor-none"><canvas class="absolute inset-0 block w-full h-full" width="992" height="944"></canvas><div class="relative z-10 flex flex-col items-center justify-center h-full pointer-events-none"><div class="px-8 py-4 border border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-sm"><h2 class="text-white/30 font-light tracking-[0.7em] uppercase text-sm md:text-xl">Atmospheric Friction</h2><div class="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-4"></div><p class="text-[10px] text-white/10 tracking-widest text-center">INTERACTIVE KINETIC ENVIRONMENT</p></div></div><div class="fixed top-0 left-0 w-4 h-4 rounded-full border border-white/20 pointer-events-none transition-transform duration-75 ease-out z-50" style="transform: translate(calc(var(--mouse-x, -100px) - 50%), calc(var(--mouse-y, -100px) - 50%));"></div><style>
        :root {
          --mouse-x: -100px;
          --mouse-y: -100px;
        }
      </style><script>
        window.addEventListener('mousemove', e => {
          document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
          document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
        });
      </script></div></div></div></div>
```

## Reference source files

No reference source files were available.
