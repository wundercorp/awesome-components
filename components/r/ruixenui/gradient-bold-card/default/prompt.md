# Build Gradient Bold Card in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Gradient Bold Card screenshot](screenshot.png)

## Component

- Author group: `ruixenui`
- Component: `gradient-bold-card`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ruixenui
- Component slug: gradient-bold-card
- Demo slug: default
- Title: gradient-bold-card
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center min-h-screen"><div class="relative w-[200px] h-[250px] rounded-[14px] flex flex-col items-center justify-center
                      shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] dark:shadow-[20px_20px_60px_#111,-20px_-20px_60px_#222]
                      overflow-hidden"><div class="absolute top-[5px] left-[5px] w-[190px] h-[240px] bg-white/95 dark:bg-black/70 backdrop-blur-[24px]
                        rounded-[10px] outline outline-2 outline-white dark:outline-gray-700 z-10"></div><div class="absolute top-1/2 left-1/2 w-[150px] h-[150px] rounded-full opacity-100
                        filter blur-[12px] z-0 animate-blob 
                        bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div><style>
            @keyframes blob {
              0% {
                transform: translate(-100%, -100%);
              }
              25% {
                transform: translate(0%, -100%);
              }
              50% {
                transform: translate(0%, 0%);
              }
              75% {
                transform: translate(-100%, 0%);
              }
              100% {
                transform: translate(-100%, -100%);
              }
            }

            .animate-blob {
              animation: blob 5s linear infinite;
            }
          </style></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
