# Build Button Ui in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Button Ui screenshot](screenshot.png)

## Component

- Author group: `prebuiltui`
- Component: `button-ui`
- Variant: `button-with-dual-border-animation`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: prebuiltui
- Component slug: button-ui
- Demo slug: button-with-dual-border-animation
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><style>
                .button-wrapper::before {
                    animation: spin-gradient 4s linear infinite;
                }
            
                @keyframes spin-gradient {
                    from {
                        transform: rotate(0deg);
                    }
            
                    to {
                        transform: rotate(360deg);
                    }
                }
            </style><div class="relative inline-block p-0.5 rounded-full overflow-hidden hover:scale-105 transition duration-300 active:scale-100 before:content-[''] before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,_#00F5FF,_#00F5FF30,_#00F5FF)] button-wrapper"><button class="relative z-10 bg-gray-800 text-white rounded-full px-8 py-3 font-medium text-sm">Click Me</button></div></div></div></div>
```

## Reference source files

No reference source files were available.
