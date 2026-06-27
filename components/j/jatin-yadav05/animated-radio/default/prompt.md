# Build Animated Radio in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Animated Radio screenshot](screenshot.png)

## Component

- Author group: `jatin-yadav05`
- Component: `animated-radio`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: jatin-yadav05
- Component slug: animated-radio
- Demo slug: default
- Title: animated-radio
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center"><div class="relative flex flex-col pl-3 scale-150"><div class="relative z-20 py-1"><input id="radio-free" class="absolute w-full h-full m-0 opacity-0 cursor-pointer z-30 appearance-none" type="radio" value="free" checked="" name="radio"><label for="radio-free" class="cursor-pointer text-xl py-2 px-1 block transition-all duration-300 ease-in-out text-purple-600 dark:text-purple-300">Free</label></div><div class="relative z-20 py-1"><input id="radio-basic" class="absolute w-full h-full m-0 opacity-0 cursor-pointer z-30 appearance-none" type="radio" value="basic" name="radio"><label for="radio-basic" class="cursor-pointer text-xl py-2 px-1 block transition-all duration-300 ease-in-out text-gray-600 dark:text-gray-500">Basic</label></div><div class="relative z-20 py-1"><input id="radio-premium" class="absolute w-full h-full m-0 opacity-0 cursor-pointer z-30 appearance-none" type="radio" value="premium" name="radio"><label for="radio-premium" class="cursor-pointer text-xl py-2 px-1 block transition-all duration-300 ease-in-out text-gray-600 dark:text-gray-500">Premium</label></div><div class="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-neutral-800 to-transparent"><div class="relative h-1/3 w-full bg-gradient-to-b from-transparent via-purple-600 dark:via-purple-500 to-transparent transition-transform duration-500 ease-[cubic-bezier(0.37,1.95,0.66,0.56)]" style="transform: translateY(0%);"><div class="absolute top-1/2 -translate-y-1/2 h-3/5 w-[300%] bg-purple-600 dark:bg-purple-500 blur-[10px]"></div><div class="absolute left-0 h-full w-36 bg-gradient-to-r from-purple-600/10 dark:from-purple-500/10 to-transparent"></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
