# Build Parallax Motion in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Parallax Motion screenshot](screenshot.png)

## Component

- Author group: `avanishverma4`
- Component: `parallax-motion`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: avanishverma4
- Component slug: parallax-motion
- Demo slug: default
- Title: parallax-motion
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div id="example"><section class="img-container"><div><img alt="A London Cityscape" src="https://cdn.pixabay.com/photo/2019/08/25/18/07/london-4430030_1280.jpg"></div><h2 style="visibility: visible; transform: none;">#001</h2></section><section class="img-container"><div><img alt="A London Cityscape" src="https://cdn.pixabay.com/photo/2019/08/25/18/07/london-4430030_1280.jpg"></div><h2 style="visibility: visible; transform: translateY(200px);">#002</h2></section><section class="img-container"><div><img alt="A London Cityscape" src="https://cdn.pixabay.com/photo/2019/08/25/18/07/london-4430030_1280.jpg"></div><h2 style="visibility: visible; transform: translateY(200px);">#003</h2></section><section class="img-container"><div><img alt="A London Cityscape" src="https://cdn.pixabay.com/photo/2019/08/25/18/07/london-4430030_1280.jpg"></div><h2 style="visibility: visible; transform: translateY(200px);">#004</h2></section><section class="img-container"><div><img alt="A London Cityscape" src="https://cdn.pixabay.com/photo/2019/08/25/18/07/london-4430030_1280.jpg"></div><h2 style="visibility: visible; transform: translateY(200px);">#005</h2></section><div class="progress" style="transform: scaleX(0);"></div><style>
        html {
            scroll-snap-type: y mandatory;
        }

        .img-container {
            height: 100vh;
            scroll-snap-align: start;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .img-container > div {
            width: 300px;
            height: 400px;
            margin: 20px;
            background: #f5f5f5;
            overflow: hidden;
        }

        .img-container img {
            width: 300px;
            height: 400px;
        }

        @media (max-width: 500px) {
            .img-container > div {
                width: 150px;
                height: 200px;
            }

            .img-container img {
                width: 150px;
                height: 200px;
            }
        }

        .img-container h2 {
            color: #8df0cc;
            margin: 0;
            font-family: "Azeret Mono", monospace;
            font-size: 50px;
            font-weight: 700;
            letter-spacing: -3px;
            line-height: 1.2;
            position: absolute;
            display: inline-block;
            top: calc(50% - 25px);
            left: calc(50% + 120px);
        }

        .progress {
            position: fixed;
            left: 0;
            right: 0;
            height: 5px;
            background: #8df0cc;
            bottom: 50px;
            transform: scaleX(0);
        }
    </style></div></div></div></div>
```

## Reference source files

No reference source files were available.
