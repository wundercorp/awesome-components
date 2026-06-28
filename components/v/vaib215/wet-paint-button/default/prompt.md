# Build Wet Paint Button in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Wet Paint Button screenshot](screenshot.png)

## Component

- Author group: `vaib215`
- Component: `wet-paint-button`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: vaib215
- Component slug: wet-paint-button
- Demo slug: default
- Title: wet-paint-button
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><button class="group relative rounded bg-indigo-500 px-4 py-2.5 font-semibold text-white transition-colors hover:bg-indigo-600">Wet Paint Button<div class="absolute top-[99%] origin-top" style="left: 10%; transform: scaleY(0.887889);"><div class="w-2 rounded-b-full bg-indigo-500 transition-colors group-hover:bg-indigo-600" style="height: 24px;"></div><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-full top-0"><g clip-path="url(#clip0_1077_28)"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z" class="fill-indigo-500 transition-colors group-hover:fill-indigo-600"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z" class="fill-indigo-500 transition-colors group-hover:fill-indigo-600"></path></g><defs><clipPath id="clip0_1077_28"><rect width="6" height="6" fill="white"></rect></clipPath></defs></svg><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute right-full top-0 rotate-90"><g clip-path="url(#clip0_1077_28)"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z" class="fill-indigo-500 transition-colors group-hover:fill-indigo-600"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z" class="fill-indigo-500 transition-colors group-hover:fill-indigo-600"></path></g><defs><clipPath id="clip0_1077_28"><rect width="6" height="6" fill="white"></rect></clipPath></defs></svg><div class="absolute top-full h-2 w-2 rounded-full bg-indigo-500 transition-colors group-hover:bg-indigo-600" style="opacity: 0.429531; transform: translateY(25.0872px);"></div></div><div class="absolute top-[99%] origin-top" style="left: 30%; transform: scaleY(0.75);"><div class="w-2 rounded-b-full bg-indigo-500 transition-colors group-hover:bg-indigo-600" style="height: 20px;"></div><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-full top-0"><g clip-path="url(#clip0_1077_28)"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z" class="fill-indigo-500 transition-colors group-hover:fill-indigo-600"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z" class="fill-indigo-500 transition-colors group-hover:fill-indigo-600"></path></g><defs><clipPath id="clip0_1077_28"><rect width="6" height="6" fill="white"></rect></clipPath></defs></svg><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute right-full top-0 rotate-90"><g clip-path="url(#clip0_1077_28)"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z" class="fill-indigo-500 transition-colors group-hover:fill-indigo-600"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z" class="fill-indigo-500 transition-colors group-hover:fill-indigo-600"></path></g><defs><clipPath id="clip0_1077_28"><rect width="6" height="6" fill="white"></rect></clipPath></defs></svg><div class="absolute top-full h-2 w-2 rounded-full bg-indigo-500 transition-colors group-hover:bg-indigo-600" style="opacity: 0; transform: translateY(50px);"></div></div><div class="absolute top-[99%] origin-top" style="left: 57%; transform: scaleY(0.83316);"><div class="w-2 rounded-b-full bg-indigo-500 transition-colors group-hover:bg-indigo-600" style="height: 10px;"></div><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-full top-0"><g clip-path="url(#clip0_1077_28)"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z" class="fill-indigo-500 transition-colors group-hover:fill-indigo-600"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z" class="fill-indigo-500 transition-colors group-hover:fill-indigo-600"></path></g><defs><clipPath id="clip0_1077_28"><rect width="6" height="6" fill="white"></rect></clipPath></defs></svg><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute right-full top-0 rotate-90"><g clip-path="url(#clip0_1077_28)"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z" class="fill-indigo-500 transition-colors group-hover:fill-indigo-600"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z" class="fill-indigo-500 transition-colors group-hover:fill-indigo-600"></path></g><defs><clipPath id="clip0_1077_28"><rect width="6" height="6" fill="white"></rect></clipPath></defs></svg><div class="absolute top-full h-2 w-2 rounded-full bg-indigo-500 transition-colors group-hover:bg-indigo-600" style="opacity: 0.255254; transform: translateY(35.1953px);"></div></div><div class="absolute top-[99%] origin-top" style="left: 85%; transform: scaleY(0.940357);"><div class="w-2 rounded-b-full bg-indigo-500 transition-colors group-hover:bg-indigo-600" style="height: 16px;"></div><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-full top-0"><g clip-path="url(#clip0_1077_28)"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z" class="fill-indigo-500 transition-colors group-hover:fill-indigo-600"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z" class="fill-indigo-500 transition-colors group-hover:fill-indigo-600"></path></g><defs><clipPath id="clip0_1077_28"><rect width="6" height="6" fill="white"></rect></clipPath></defs></svg><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute right-full top-0 rotate-90"><g clip-path="url(#clip0_1077_28)"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z" class="fill-indigo-500 transition-colors group-hover:fill-indigo-600"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z" class="fill-indigo-500 transition-colors group-hover:fill-indigo-600"></path></g><defs><clipPath id="clip0_1077_28"><rect width="6" height="6" fill="white"></rect></clipPath></defs></svg><div class="absolute top-full h-2 w-2 rounded-full bg-indigo-500 transition-colors group-hover:bg-indigo-600" style="opacity: 0.930674; transform: translateY(-3.97908px);"></div></div></button></div></div></div>
```

## Reference source files

No reference source files were available.
