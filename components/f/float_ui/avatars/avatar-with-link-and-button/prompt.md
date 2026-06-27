# Build Avatars in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Avatars screenshot](screenshot.png)

## Component

- Author group: `float_ui`
- Component: `avatars`
- Variant: `avatar-with-link-and-button`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: float_ui
- Component slug: avatars
- Demo slug: avatar-with-link-and-button
- Title: avatars
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center gap-x-10"><div class="flex items-center gap-3"><span class="w-12 h-12 rounded-full overflow-hidden"><img alt="Nikita Andrew" class="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/79.jpg"></span><div><span class="text-gray-700 text-sm font-medium">Nikita Andrew</span><a href="#" class="block text-indigo-600 hover:text-indigo-500 text-xs">View profile</a></div></div><button class="flex items-center gap-3"><span class="w-12 h-12 rounded-full overflow-hidden"><img alt="User" class="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/79.jpg"></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-gray-400"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg></button></div></div></div></div>
```

## Reference source files

No reference source files were available.
