# Build Markdown in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Markdown screenshot](screenshot.png)

## Component

- Author group: `community`
- Component: `markdown`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: BuilderStudio
- Component slug: markdown
- Demo slug: default
- Title: markdown
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
<div id="root"><div class="min-h-screen w-full flex items-center justify-center p-6 bg-white dark:bg-neutral-950"><div class="w-full max-w-md"><div class="an-markdown break-words"><h1 class="text-base font-semibold mt-3 mb-1.5 text-neutral-900 dark:text-neutral-50" node="[object Object]">Release notes</h1>
<ul class="list-disc list-outside space-y-0.5 text-sm mb-2 pl-4 text-neutral-700 dark:text-neutral-300" node="[object Object]">
<li class="text-sm pl-0.5 text-neutral-700 dark:text-neutral-300" node="[object Object]">Added streaming markdown</li>
<li class="text-sm pl-0.5 text-neutral-700 dark:text-neutral-300" node="[object Object]">Improved tool rendering</li>
</ul>
<h2 class="text-base font-semibold mt-3 mb-1.5 text-neutral-900 dark:text-neutral-50" node="[object Object]">Example</h2>
<p class="text-sm leading-relaxed mb-2 text-neutral-700 dark:text-neutral-300" node="[object Object]">Use "Markdown" to render assistant text as it streams.</p>
<pre class="my-3 p-3 rounded-[10px] border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 overflow-x-auto text-xs font-mono text-neutral-800 dark:text-neutral-200" node="[object Object]"><code class="language-ts" node="[object Object]">console.log("Hello from markdown");
</code></pre></div></div></div></div>
```

## Reference source files

No reference source files were available.
