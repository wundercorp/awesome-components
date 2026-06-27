# Build Scroll Velocity in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Scroll Velocity screenshot](screenshot.png)

## Component

- Author group: `edil-ozi`
- Component: `scroll-velocity`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: Edil-ozi
- Component slug: scroll-velocity
- Demo slug: default
- Title: scroll-velocity
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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="w-full"><div class="flex flex-col space-y-5 py-10"><div class="relative m-0 flex flex-nowrap overflow-hidden whitespace-nowrap leading-[0.8] tracking-[-2px]"><div class="flex flex-row flex-nowrap whitespace-nowrap text-xl font-semibold uppercase *:mr-6 *:block md:text-2xl xl:text-4xl" style="transform: translateX(-37.8837%);"><div class="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"><img alt="Moonbeam" class="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=40&amp;w=640"></div><div class="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"><img alt="Cursor" class="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=40&amp;w=640"></div><div class="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"><img alt="Rogue" class="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=40&amp;w=640"></div><div class="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"><img alt="Editorially" class="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?q=80&amp;w=640"></div><div class="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"><img alt="Editrix AI" class="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&amp;w=640"></div><div class="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"><img alt="Moonbeam 2" class="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=40&amp;w=640"></div><div class="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"><img alt="Cursor 2" class="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=40&amp;w=640"></div><div class="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"><img alt="Rogue 2" class="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=40&amp;w=640"></div><div class="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"><img alt="Editorially 2" class="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?q=80&amp;w=640"></div><div class="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"><img alt="Editrix AI 2" class="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&amp;w=640"></div></div></div><div class="relative m-0 flex flex-nowrap overflow-hidden whitespace-nowrap leading-[0.8] tracking-[-2px]"><div class="flex flex-row flex-nowrap whitespace-nowrap text-xl font-semibold uppercase *:mr-6 *:block md:text-2xl xl:text-4xl" style="transform: translateX(-12.1163%);"><div class="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"><img alt="Moonbeam" class="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=40&amp;w=640"></div><div class="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"><img alt="Cursor" class="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=40&amp;w=640"></div><div class="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"><img alt="Rogue" class="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=40&amp;w=640"></div><div class="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"><img alt="Editorially" class="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?q=80&amp;w=640"></div><div class="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"><img alt="Editrix AI" class="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&amp;w=640"></div><div class="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"><img alt="Moonbeam 2" class="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=40&amp;w=640"></div><div class="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"><img alt="Cursor 2" class="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=40&amp;w=640"></div><div class="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"><img alt="Rogue 2" class="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=40&amp;w=640"></div><div class="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"><img alt="Editorially 2" class="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?q=80&amp;w=640"></div><div class="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"><img alt="Editrix AI 2" class="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&amp;w=640"></div></div></div><div class="relative m-0 flex flex-nowrap overflow-hidden whitespace-nowrap leading-[0.8] tracking-[-2px]"><div class="flex flex-row flex-nowrap whitespace-nowrap text-xl font-semibold uppercase *:mr-6 *:block md:text-2xl xl:text-4xl" style="transform: translateX(-29.8062%);"><span>You can also use a text!</span><span>You can also use a text!</span><span>You can also use a text!</span><span>You can also use a text!</span><span>You can also use a text!</span></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
