# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/reuno-ui/steps/default
- Registry URL: https://21st.dev/r/reuno-ui/steps
- Author: reuno-ui
- Component slug: steps
- Demo slug: default
- Title: steps
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/reuno-ui/steps with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/reuno-ui__steps__default.html
- Local screenshot file: generated-21st-prompts/screenshots/reuno-ui__steps__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div><div class="relative max-w-xl my-10 mx-auto px-3"><div class="relative"><div class="absolute top-0 left-4 w-1 bg-zinc-300 dark:bg-zinc-900 h-full z-10"></div><div class="flex flex-col space-y-8 relative z-20"><div class="relative flex flex-col space-y-4"><div class="relative w-8 h-8 rounded-full flex items-center justify-center text-black dark:text-white bg-gradient-to-b from-zinc-200 to-zinc-300 dark:from-zinc-900 dark:to-zinc-800 shadow-lg" style="z-index: 20;">1</div><div class="ml-12 flex-1"><h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-200">Title</h3><p class="mt-1 text-zinc-600 dark:text-zinc-400">Description</p><div class="relative mt-3 bg-zinc-100 dark:bg-zinc-900/70 backdrop-blur-lg p-4 rounded-md shadow-lg overflow-x-auto border border-zinc-300 dark:border-zinc-700"><pre class="text-black dark:text-white"><code><div class="py-1 px-2 bg-transparent whitespace-pre">Your code</div></code></pre><button class="absolute top-3 right-2 bg-white dark:bg-[#111113] text-black dark:text-white py-2 px-3 rounded flex items-center justify-center shadow-md transition-colors duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800" aria-label="Copy code for Title"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 3.75h-7.5a2.25 2.25 0 0 0-2.25 2.25v12a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-12a2.25 2.25 0 0 0-2.25-2.25z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75v-.75a2.25 2.25 0 0 1 2.25-2.25h1.5A2.25 2.25 0 0 1 15 3v.75"></path></svg></button></div></div></div><div class="relative flex flex-col space-y-4"><div class="relative w-8 h-8 rounded-full flex items-center justify-center text-black dark:text-white bg-gradient-to-b from-zinc-200 to-zinc-300 dark:from-zinc-900 dark:to-zinc-800 shadow-lg" style="z-index: 20;">2</div><div class="ml-12 flex-1"><h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-200">Highlight Code</h3><p class="mt-1 text-zinc-600 dark:text-zinc-400">Highlighting specific lines in your code</p><div class="relative mt-3 bg-zinc-100 dark:bg-zinc-900/70 backdrop-blur-lg p-4 rounded-md shadow-lg overflow-x-auto border border-zinc-300 dark:border-zinc-700"><pre class="text-black dark:text-white"><code><div class="py-1 px-2 bg-transparent whitespace-pre">import React from 'react';</div><div class="py-1 px-2 bg-zinc-200 dark:bg-zinc-800 whitespace-pre">import Component from './components/ComponentName';</div><div class="py-1 px-2 bg-transparent whitespace-pre"></div><div class="py-1 px-2 bg-transparent whitespace-pre">function App() {</div><div class="py-1 px-2 bg-transparent whitespace-pre">  return (</div><div class="py-1 px-2 bg-transparent whitespace-pre">    &lt;div&gt;</div><div class="py-1 px-2 bg-zinc-200 dark:bg-zinc-800 whitespace-pre">      &lt;Component/&gt;</div><div class="py-1 px-2 bg-transparent whitespace-pre">    &lt;/div&gt;</div><div class="py-1 px-2 bg-transparent whitespace-pre">  );</div><div class="py-1 px-2 bg-transparent whitespace-pre">}</div><div class="py-1 px-2 bg-transparent whitespace-pre"></div><div class="py-1 px-2 bg-transparent whitespace-pre">export default App;</div></code></pre><button class="absolute top-3 right-2 bg-white dark:bg-[#111113] text-black dark:text-white py-2 px-3 rounded flex items-center justify-center shadow-md transition-colors duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800" aria-label="Copy code for Highlight Code"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 3.75h-7.5a2.25 2.25 0 0 0-2.25 2.25v12a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-12a2.25 2.25 0 0 0-2.25-2.25z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75v-.75a2.25 2.25 0 0 1 2.25-2.25h1.5A2.25 2.25 0 0 1 15 3v.75"></path></svg></button></div></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.