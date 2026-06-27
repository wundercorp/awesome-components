# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ElevenLabs/response/default
- Registry URL: https://21st.dev/r/ElevenLabs/response
- Author: ElevenLabs
- Component slug: response
- Demo slug: default
- Title: response
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ElevenLabs/response with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ElevenLabs__response__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ElevenLabs__response__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="p-10 prose prose-invert max-w-none"><h3>Welcome</h3>
<p>This is a <strong>rich markdown</strong> showcase with multiple features.</p>
<hr>
<h2>Data Table</h2>
<table><thead><tr><th>Name</th><th>Role</th><th>Status</th></tr></thead><tbody><tr><td>Alice</td><td>Engineer</td><td>Active</td></tr><tr><td>Bob</td><td>Designer</td><td>Active</td></tr><tr><td>Carol</td><td>PM</td><td>Active</td></tr></tbody></table>
<h2>Inspiration</h2>
<blockquote>
<p><em>Simplicity is the ultimate sophistication.</em>
— Leonardo da Vinci</p>
</blockquote>
<h2>Inline and Block Code</h2>
<p>Use <code>let total = items.length</code> to count elements.</p>
<pre><code class="hljs language-python"><span class="hljs-keyword">def</span> <span class="hljs-title function_">greet</span>(<span class="hljs-params">name</span>):
    <span class="hljs-keyword">return</span> <span class="hljs-string">f"Hello, <span class="hljs-subst">{name}</span>!"</span>
<span class="hljs-built_in">print</span>(greet(<span class="hljs-string">"World"</span>))
</code></pre>
<h2>Math</h2>
<p>Inline math: $a^2 + b^2 = c^2$.</p>
<p>Displayed equation:</p>
<p>$$\int_0^1 x^2\,dx = \frac{1}{3}$$</p></div></div></div></div>
```

## Public registry source files

No public registry source files were available.