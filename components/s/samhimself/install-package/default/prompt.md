# Build Install Package in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Install Package screenshot](screenshot.png)

## Component

- Author group: `samhimself`
- Component: `install-package`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: samhimself
- Component slug: install-package
- Demo slug: default
- Title: install-package
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-2xl rounded-xl overflow-hidden bg-white/40 dark:bg-white/10 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-lg"><div class="px-4 py-3 text-lg font-semibold text-gray-800 dark:text-white">Install the Package</div><div class="flex border-b border-black/10 dark:border-white/10 overflow-x-auto text-sm"><button class="flex-shrink-0 px-4 py-2 whitespace-nowrap transition-colors text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400">Using npm</button><button class="flex-shrink-0 px-4 py-2 whitespace-nowrap transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">Using pnpm</button><button class="flex-shrink-0 px-4 py-2 whitespace-nowrap transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">Using bun</button></div><div class="relative font-mono px-4 py-6 text-sm rounded-lg m-4 bg-white/70 dark:bg-white/10 backdrop-blur-md ring-1 ring-black/10 dark:ring-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-colors"><pre class="whitespace-pre-wrap leading-relaxed"><code class="text-green-700 dark:text-green-400"># Install with npm</code>
<code class="text-orange-700 dark:text-orange-300">npm install your-package</code></pre><button class="absolute top-3 right-3 rounded-md p-2 bg-black/5 hover:bg-black/10 text-gray-800 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white backdrop-blur-sm shadow-sm transition-colors" aria-label="Copy code"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard w-4 h-4" aria-hidden="true"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path></svg></button></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
