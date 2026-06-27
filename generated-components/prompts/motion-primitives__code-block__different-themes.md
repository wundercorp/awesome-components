# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/motion-primitives/code-block/different-themes
- Registry URL: https://21st.dev/r/motion-primitives/code-block
- Author: motion-primitives
- Component slug: code-block
- Demo slug: different-themes
- Title: code-block
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/motion-primitives/code-block with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/motion-primitives__code-block__different-themes.html
- Local screenshot file: generated-21st-prompts/screenshots/motion-primitives__code-block__different-themes.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="w-full max-w-[450px]"><div class="not-prose flex w-full flex-col overflow-clip border border-border bg-card text-card-foreground rounded-xl"><div class="flex items-center justify-between border-border border-b px-4 py-2"><div class="flex items-center gap-2"><div class="bg-primary/10 text-primary rounded px-2 py-1 text-xs font-medium">JavaScript</div><span class="text-muted-foreground text-sm">GitHub Dark Theme</span></div><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy h-4 w-4" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg></button></div><div class="w-full overflow-x-auto text-[13px] [&amp;&gt;pre]:px-4 [&amp;&gt;pre]:py-4"><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#F97583">function</span><span style="color:#B392F0"> calculateTotal</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">items</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#F97583">  return</span><span style="color:#E1E4E8"> items</span></span>
<span class="line"><span style="color:#E1E4E8">    .</span><span style="color:#B392F0">filter</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">item</span><span style="color:#F97583"> =&gt;</span><span style="color:#E1E4E8"> item.price </span><span style="color:#F97583">&gt;</span><span style="color:#79B8FF"> 0</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#E1E4E8">    .</span><span style="color:#B392F0">reduce</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">total</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">item</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=&gt;</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#F97583">      return</span><span style="color:#E1E4E8"> total </span><span style="color:#F97583">+</span><span style="color:#E1E4E8"> item.price </span><span style="color:#F97583">*</span><span style="color:#E1E4E8"> item.quantity;</span></span>
<span class="line"><span style="color:#E1E4E8">    }, </span><span style="color:#79B8FF">0</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span></code></pre></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.