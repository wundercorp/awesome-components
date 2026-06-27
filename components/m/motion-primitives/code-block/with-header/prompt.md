# Build Code Block in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Code Block screenshot](screenshot.png)

## Component

- Author group: `motion-primitives`
- Component: `code-block`
- Variant: `with-header`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: motion-primitives
- Component slug: code-block
- Demo slug: with-header
- Title: code-block
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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="w-full max-w-[450px]"><div class="not-prose flex w-full flex-col overflow-clip border border-border bg-card text-card-foreground rounded-xl"><div class="flex items-center justify-between border-border border-b py-2 pr-2 pl-4"><div class="flex items-center gap-2"><div class="bg-primary/10 text-primary rounded px-2 py-1 text-xs font-medium">React</div><span class="text-muted-foreground text-sm">counter.tsx</span></div><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy h-4 w-4" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg></button></div><div class="w-full overflow-x-auto text-[13px] [&amp;&gt;pre]:px-4 [&amp;&gt;pre]:py-4"><pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">import</span><span style="color:#24292E"> { useState } </span><span style="color:#D73A49">from</span><span style="color:#032F62"> 'react'</span><span style="color:#24292E">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">function</span><span style="color:#6F42C1"> Counter</span><span style="color:#24292E">() {</span></span>
<span class="line"><span style="color:#D73A49">  const</span><span style="color:#24292E"> [</span><span style="color:#005CC5">count</span><span style="color:#24292E">, </span><span style="color:#005CC5">setCount</span><span style="color:#24292E">] </span><span style="color:#D73A49">=</span><span style="color:#6F42C1"> useState</span><span style="color:#24292E">(</span><span style="color:#005CC5">0</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">  </span></span>
<span class="line"><span style="color:#D73A49">  return</span><span style="color:#24292E"> (</span></span>
<span class="line"><span style="color:#24292E">    &lt;</span><span style="color:#22863A">div</span><span style="color:#24292E">&gt;</span></span>
<span class="line"><span style="color:#24292E">      &lt;</span><span style="color:#22863A">p</span><span style="color:#24292E">&gt;You clicked {count} times&lt;/</span><span style="color:#22863A">p</span><span style="color:#24292E">&gt;</span></span>
<span class="line"><span style="color:#24292E">      &lt;</span><span style="color:#22863A">button</span><span style="color:#6F42C1"> onClick</span><span style="color:#D73A49">=</span><span style="color:#24292E">{() </span><span style="color:#D73A49">=&gt;</span><span style="color:#6F42C1"> setCount</span><span style="color:#24292E">(count </span><span style="color:#D73A49">+</span><span style="color:#005CC5"> 1</span><span style="color:#24292E">)}&gt;</span></span>
<span class="line"><span style="color:#24292E">        Click me</span></span>
<span class="line"><span style="color:#24292E">      &lt;/</span><span style="color:#22863A">button</span><span style="color:#24292E">&gt;</span></span>
<span class="line"><span style="color:#24292E">    &lt;/</span><span style="color:#22863A">div</span><span style="color:#24292E">&gt;</span></span>
<span class="line"><span style="color:#24292E">  );</span></span>
<span class="line"><span style="color:#24292E">}</span></span></code></pre></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
