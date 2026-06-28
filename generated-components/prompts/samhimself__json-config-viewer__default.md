# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/samhimself/json-config-viewer/default
- Registry URL: https://21st.dev/r/samhimself/json-config-viewer
- Author: samhimself
- Component slug: json-config-viewer
- Demo slug: default
- Title: json-config-viewer
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/samhimself/json-config-viewer with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/samhimself__json-config-viewer__default.html
- Local screenshot file: generated-21st-prompts/screenshots/samhimself__json-config-viewer__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-3xl rounded-xl overflow-hidden bg-white/40 dark:bg-white/10 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-lg"><div class="px-4 py-3 text-lg font-semibold text-gray-800 dark:text-white">Configure Your Thing</div><div class="flex border-b border-black/10 dark:border-white/10 text-sm"><button class="flex-shrink-0 px-4 py-2 whitespace-nowrap text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400">Using thing 1</button><button class="flex-shrink-0 px-4 py-2 whitespace-nowrap text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">Using thing 2</button><button class="flex-shrink-0 px-4 py-2 whitespace-nowrap text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">Using thing 3</button></div><div class="relative font-mono px-4 py-6 text-sm rounded-lg m-4 bg-white/70 dark:bg-white/10 backdrop-blur-md ring-1 ring-black/10 dark:ring-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"><pre class="whitespace-pre leading-relaxed overflow-x-auto text-gray-800 dark:text-gray-100"><span></span><span>{</span><span>
  </span><span class="text-amber-600 dark:text-amber-300">"mcpServers"</span><span></span><span>:</span><span> </span><span>{</span><span>
    </span><span class="text-amber-600 dark:text-amber-300">"yourThing"</span><span></span><span>:</span><span> </span><span>{</span><span>
      </span><span class="text-amber-600 dark:text-amber-300">"command"</span><span></span><span>:</span><span> </span><span class="text-amber-600 dark:text-amber-300">"npm"</span><span></span><span>,</span><span>
      </span><span class="text-amber-600 dark:text-amber-300">"args"</span><span></span><span>:</span><span> </span><span>[</span><span></span><span class="text-amber-600 dark:text-amber-300">"install"</span><span></span><span>,</span><span> </span><span class="text-amber-600 dark:text-amber-300">"your-package"</span><span></span><span>]</span><span></span><span>,</span><span>
      </span><span class="text-amber-600 dark:text-amber-300">"env"</span><span></span><span>:</span><span> </span><span>{</span><span>
        </span><span class="text-amber-600 dark:text-amber-300">"API_KEY"</span><span></span><span>:</span><span> </span><span class="text-amber-600 dark:text-amber-300">"YOUR_API_KEY"</span><span></span><span>,</span><span>
        </span><span class="text-amber-600 dark:text-amber-300">"API_URL"</span><span></span><span>:</span><span> </span><span class="text-amber-600 dark:text-amber-300">"https://api.yourthing.ai/"</span><span>
      </span><span>}</span><span>
    </span><span>}</span><span>
  </span><span>}</span><span>
</span><span>}</span><span></span></pre><button class="absolute top-3 right-3 rounded-md p-2 bg-black/5 dark:bg-white/10 backdrop-blur-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard w-4 h-4 text-gray-700 dark:text-white" aria-hidden="true"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path></svg></button></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.