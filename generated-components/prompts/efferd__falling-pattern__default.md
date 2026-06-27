# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/efferd/falling-pattern/default
- Registry URL: https://21st.dev/r/efferd/falling-pattern
- Author: efferd
- Component slug: falling-pattern
- Demo slug: default
- Title: falling-pattern
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/efferd/falling-pattern with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/efferd__falling-pattern__default.html
- Local screenshot file: generated-21st-prompts/screenshots/efferd__falling-pattern__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full relative min-h-screen"><div class="relative w-full p-1 h-screen [mask-image:radial-gradient(ellipse_at_center,transparent,var(--background))]"><div class="size-full" style="opacity: 1;"><div class="relative size-full z-0" style="background-color: var(--background); background-image: radial-gradient(4px 100px at 0px 235px, var(--primary), transparent), radial-gradient(4px 100px at 300px 235px, var(--primary), transparent), radial-gradient(1.5px 1.5px at 150px 117.5px, var(--primary) 100%, transparent 150%), radial-gradient(4px 100px at 0px 252px, var(--primary), transparent), radial-gradient(4px 100px at 300px 252px, var(--primary), transparent), radial-gradient(1.5px 1.5px at 150px 126px, var(--primary) 100%, transparent 150%), radial-gradient(4px 100px at 0px 150px, var(--primary), transparent), radial-gradient(4px 100px at 300px 150px, var(--primary), transparent), radial-gradient(1.5px 1.5px at 150px 75px, var(--primary) 100%, transparent 150%), radial-gradient(4px 100px at 0px 253px, var(--primary), transparent), radial-gradient(4px 100px at 300px 253px, var(--primary), transparent), radial-gradient(1.5px 1.5px at 150px 126.5px, var(--primary) 100%, transparent 150%), radial-gradient(4px 100px at 0px 204px, var(--primary), transparent), radial-gradient(4px 100px at 300px 204px, var(--primary), transparent), radial-gradient(1.5px 1.5px at 150px 102px, var(--primary) 100%, transparent 150%), radial-gradient(4px 100px at 0px 134px, var(--primary), transparent), radial-gradient(4px 100px at 300px 134px, var(--primary), transparent), radial-gradient(1.5px 1.5px at 150px 67px, var(--primary) 100%, transparent 150%), radial-gradient(4px 100px at 0px 179px, var(--primary), transparent), radial-gradient(4px 100px at 300px 179px, var(--primary), transparent), radial-gradient(1.5px 1.5px at 150px 89.5px, var(--primary) 100%, transparent 150%), radial-gradient(4px 100px at 0px 299px, var(--primary), transparent), radial-gradient(4px 100px at 300px 299px, var(--primary), transparent), radial-gradient(1.5px 1.5px at 150px 149.5px, var(--primary) 100%, transparent 150%), radial-gradient(4px 100px at 0px 215px, var(--primary), transparent), radial-gradient(4px 100px at 300px 215px, var(--primary), transparent), radial-gradient(1.5px 1.5px at 150px 107.5px, var(--primary) 100%, transparent 150%), radial-gradient(4px 100px at 0px 281px, var(--primary), transparent), radial-gradient(4px 100px at 300px 281px, var(--primary), transparent), radial-gradient(1.5px 1.5px at 150px 140.5px, var(--primary) 100%, transparent 150%), radial-gradient(4px 100px at 0px 158px, var(--primary), transparent), radial-gradient(4px 100px at 300px 158px, var(--primary), transparent), radial-gradient(1.5px 1.5px at 150px 79px, var(--primary) 100%, transparent 150%), radial-gradient(4px 100px at 0px 210px, var(--primary), transparent), radial-gradient(4px 100px at 300px 210px, var(--primary), transparent), radial-gradient(1.5px 1.5px at 150px 105px, var(--primary) 100%, transparent 150%); background-size: 300px 235px, 300px 235px, 300px 235px, 300px 252px, 300px 252px, 300px 252px, 300px 150px, 300px 150px, 300px 150px, 300px 253px, 300px 253px, 300px 253px, 300px 204px, 300px 204px, 300px 204px, 300px 134px, 300px 134px, 300px 134px, 300px 179px, 300px 179px, 300px 179px, 300px 299px, 300px 299px, 300px 299px, 300px 215px, 300px 215px, 300px 215px, 300px 281px, 300px 281px, 300px 281px, 300px 158px, 300px 158px, 300px 158px, 300px 210px, 300px 210px; background-position: 0px 432.973px, 3px 432.973px, 151.5px 550.473px, 25px 464.446px, 28px 464.446px, 176.5px 590.446px, 50px 190.78px, 53px 190.78px, 201.5px 265.78px, 75px 772.647px, 78px 772.647px, 226.5px 783.031px, 100px 184.07px, 103px 184.07px, 251.5px 286.07px, 125px 388.902px, 128px 388.902px, 276.5px 455.902px, 150px 349.65px, 153px 349.65px, 301.5px 439.15px, 175px 660.816px, 178px 660.816px, 326.5px 810.316px, 200px 594.201px, 203px 594.201px, 351.5px 701.701px, 225px 824.272px, 228px 824.272px, 376.5px 964.772px, 250px 189.646px, 253px 189.646px, 401.5px 268.646px, 275px 278.91px, 278px 278.91px, 426.5px 383.91px;"></div></div><div class="absolute inset-0 z-1 dark:brightness-600" style="backdrop-filter: blur(1em); background-image: radial-gradient(circle at 50% 50%, transparent 0, transparent 2px, var(--background) 2px); background-size: 8px 8px;"></div></div><div class="absolute inset-0 z-10 flex items-center justify-center"><h1 class="font-mono text-7xl font-extrabold tracking-tighter">Falling Pattern</h1></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.