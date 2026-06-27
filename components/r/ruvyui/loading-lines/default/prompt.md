# Build Loading Lines in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Loading Lines screenshot](screenshot.png)

## Component

- Author group: `ruvyui`
- Component: `loading-lines`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: RuvyUI
- Component slug: loading-lines
- Demo slug: default
- Title: loading-lines
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative flex items-center justify-center h-[120px] w-auto m-8 font-poppins text-[1.6em] font-semibold select-none text-white scale-[2]"><span class="relative inline-block opacity-0 z-[2] animate-[letterAnim_4s_linear_infinite] text-black dark:text-white" style="animation-delay: 0.1s;">L</span><span class="relative inline-block opacity-0 z-[2] animate-[letterAnim_4s_linear_infinite] text-black dark:text-white" style="animation-delay: 0.205s;">o</span><span class="relative inline-block opacity-0 z-[2] animate-[letterAnim_4s_linear_infinite] text-black dark:text-white" style="animation-delay: 0.31s;">a</span><span class="relative inline-block opacity-0 z-[2] animate-[letterAnim_4s_linear_infinite] text-black dark:text-white" style="animation-delay: 0.415s;">d</span><span class="relative inline-block opacity-0 z-[2] animate-[letterAnim_4s_linear_infinite] text-black dark:text-white" style="animation-delay: 0.52s;">i</span><span class="relative inline-block opacity-0 z-[2] animate-[letterAnim_4s_linear_infinite] text-black dark:text-white" style="animation-delay: 0.625s;">n</span><span class="relative inline-block opacity-0 z-[2] animate-[letterAnim_4s_linear_infinite] text-black dark:text-white" style="animation-delay: 0.73s;">g</span><div class="absolute top-0 left-0 w-full h-full z-[1] bg-transparent [mask:repeating-linear-gradient(90deg,transparent_0,transparent_6px,black_7px,black_8px)]"><div class="absolute top-0 left-0 w-full h-full 
          [background-image:radial-gradient(circle_at_50%_50%,#ff0_0%,transparent_50%),radial-gradient(circle_at_45%_45%,#f00_0%,transparent_45%),radial-gradient(circle_at_55%_55%,#0ff_0%,transparent_45%),radial-gradient(circle_at_45%_55%,#0f0_0%,transparent_45%),radial-gradient(circle_at_55%_45%,#00f_0%,transparent_45%)]
          [mask:radial-gradient(circle_at_50%_50%,transparent_0%,transparent_10%,black_25%)]
          animate-[transformAnim_2s_infinite_alternate_cubic-bezier(0.6,0.8,0.5,1),opacityAnim_4s_infinite]"></div></div><style>
        @keyframes transformAnim {
          0% {
            transform: translate(-55%);
          }
          100% {
            transform: translate(55%);
          }
        }

        @keyframes opacityAnim {
          0%,
          100% {
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          65% {
            opacity: 0;
          }
        }

        @keyframes letterAnim {
          0% {
            opacity: 0;
          }
          5% {
            opacity: 1;
            text-shadow: 0 0 4px #fff;
            transform: scale(1.1) translateY(-2px);
          }
          20% {
            opacity: 0.2;
          }
          100% {
            opacity: 0;
          }
        }
      </style></div></div></div></div>
```

## Reference source files

No reference source files were available.
