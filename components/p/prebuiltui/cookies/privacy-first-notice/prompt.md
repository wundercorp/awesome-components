# Build Cookies in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Cookies screenshot](screenshot.png)

## Component

- Author group: `prebuiltui`
- Component: `cookies`
- Variant: `privacy-first-notice`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: prebuiltui
- Component slug: cookies
- Demo slug: privacy-first-notice
- Title: cookies
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col items-center w-96 bg-white text-gray-500 text-center p-6 rounded-lg border border-gray-500/30 text-sm"><img class="w-14 h-14" alt="cookieImage1" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/cookies/cookieImage1.svg"><h2 class="text-gray-800 text-xl font-medium pb-3 mt-2">We care about your privacy</h2><p class="w-11/12">This website uses cookies for functionality, analytics, and marketing. By accepting, you agree to our <a href="#" class="font-medium underline">Cookie Policy</a>.</p><div class="flex items-center justify-center mt-6 gap-4 w-full"><button type="button" class="font-medium px-8 border border-gray-500/30 py-2 rounded hover:bg-blue-500/10 active:scale-95 transition">Decline</button><button type="button" class="bg-indigo-600 px-8 py-2 rounded text-white font-medium active:scale-95 transition">Accept</button></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
