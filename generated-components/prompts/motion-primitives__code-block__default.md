# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/motion-primitives/code-block/default
- Registry URL: https://21st.dev/r/motion-primitives/code-block
- Author: motion-primitives
- Component slug: code-block
- Demo slug: default
- Title: code-block
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/motion-primitives/code-block with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/motion-primitives__code-block__default.html
- Local screenshot file: generated-21st-prompts/screenshots/motion-primitives__code-block__default.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><div class="w-full max-w-[400px]"><div class="not-prose flex w-full flex-col overflow-clip border border-border bg-card text-card-foreground rounded-xl"><div class="w-full overflow-x-auto text-[13px] [&amp;&gt;pre]:px-4 [&amp;&gt;pre]:py-4"><pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">function</span><span style="color:#6F42C1"> greet</span><span style="color:#24292E">(</span><span style="color:#E36209">name</span><span style="color:#24292E">) {</span></span>
<span class="line"><span style="color:#D73A49">  return</span><span style="color:#032F62"> `Hello, ${</span><span style="color:#24292E">name</span><span style="color:#032F62">}!`</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// Call the function</span></span>
<span class="line"><span style="color:#6F42C1">greet</span><span style="color:#24292E">(</span><span style="color:#032F62">"World"</span><span style="color:#24292E">);</span></span></code></pre></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.