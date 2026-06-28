# Build Sign In Card in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Sign In Card screenshot](screenshot.png)

## Component

- Author group: `ruixenui`
- Component: `sign-in-card`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ruixenui
- Component slug: sign-in-card
- Demo slug: default
- Title: sign-in-card
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center min-h-screen"><div class="border text-card-foreground w-full min-w-md rounded-xl shadow-md bg-white dark:bg-gray-800"><div class="flex flex-col space-y-1.5 p-6"><div class="flex items-center gap-2"><img alt="Microsoft Logo" width="20" height="20" src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"><span class="text-lg font-semibold text-gray-900 dark:text-gray-100">Microsoft</span></div><h3 class="tracking-tight text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-4">Sign in</h3></div><div class="p-6 pt-0"><input class="flex h-9 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50 mt-2 dark:bg-gray-700 dark:text-gray-100" placeholder="E-mail, phone, or Skype" type="text" value=""><div class="mt-4 text-sm"><p class="text-gray-600 dark:text-gray-400">No account? <a href="#" class="text-blue-600 hover:underline dark:text-blue-400">Create one!</a></p><p class="mt-1"><a href="#" class="text-blue-600 hover:underline dark:text-blue-400">Can’t access your account?</a></p></div></div><div class="items-center p-6 pt-0 flex justify-end gap-2"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 shadow-sm shadow-black/5 h-9 px-4 py-2 bg-gray-300 text-gray-800 hover:bg-gray-400 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500">Back</button><button class="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 shadow-sm shadow-black/5 h-9 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white">Next</button></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
