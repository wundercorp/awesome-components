# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/tahermaxse/scroll-legend/default
- Registry URL: https://21st.dev/r/tahermaxse/scroll-legend
- Author: tahermaxse
- Component slug: scroll-legend
- Demo slug: default
- Title: scroll-legend
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/tahermaxse/scroll-legend with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/tahermaxse__scroll-legend__default.html
- Local screenshot file: generated-21st-prompts/screenshots/tahermaxse__scroll-legend__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen bg-background"><div class="fixed left-4 top-1/2 -translate-y-1/2 z-50"><div class="flex flex-col space-y-3"><div class="relative flex items-center cursor-pointer group"><div class="h-0.5 transition-all duration-200 w-4 bg-gray-400 dark:bg-gray-600 group-hover:bg-gray-600 dark:group-hover:bg-gray-400"></div><span class="ml-4 text-sm font-medium transition-all duration-200 whitespace-nowrap text-gray-300 dark:text-gray-400 opacity-0 -translate-x-2 pointer-events-none">AI Chat</span></div><div class="relative flex items-center cursor-pointer group"><div class="h-0.5 transition-all duration-200 w-4 bg-gray-400 dark:bg-gray-600 group-hover:bg-gray-600 dark:group-hover:bg-gray-400"></div><span class="ml-4 text-sm font-medium transition-all duration-200 whitespace-nowrap text-gray-300 dark:text-gray-400 opacity-0 -translate-x-2 pointer-events-none">Quick AI</span></div><div class="relative flex items-center cursor-pointer group"><div class="h-0.5 transition-all duration-200 w-4 bg-gray-400 dark:bg-gray-600 group-hover:bg-gray-600 dark:group-hover:bg-gray-400"></div><span class="ml-4 text-sm font-medium transition-all duration-200 whitespace-nowrap text-gray-300 dark:text-gray-400 opacity-0 -translate-x-2 pointer-events-none">AI Extensions</span></div><div class="relative flex items-center cursor-pointer group"><div class="h-0.5 transition-all duration-200 w-4 bg-gray-400 dark:bg-gray-600 group-hover:bg-gray-600 dark:group-hover:bg-gray-400"></div><span class="ml-4 text-sm font-medium transition-all duration-200 whitespace-nowrap text-gray-300 dark:text-gray-400 opacity-0 -translate-x-2 pointer-events-none">AI Commands</span></div><div class="relative flex items-center cursor-pointer group"><div class="h-0.5 transition-all duration-200 w-4 bg-gray-400 dark:bg-gray-600 group-hover:bg-gray-600 dark:group-hover:bg-gray-400"></div><span class="ml-4 text-sm font-medium transition-all duration-200 whitespace-nowrap text-gray-300 dark:text-gray-400 opacity-0 -translate-x-2 pointer-events-none">Models</span></div><div class="relative flex items-center cursor-pointer group"><div class="h-0.5 transition-all duration-200 w-4 bg-gray-400 dark:bg-gray-600 group-hover:bg-gray-600 dark:group-hover:bg-gray-400"></div><span class="ml-4 text-sm font-medium transition-all duration-200 whitespace-nowrap text-gray-300 dark:text-gray-400 opacity-0 -translate-x-2 pointer-events-none">Privacy</span></div><div class="relative flex items-center cursor-pointer group"><div class="h-0.5 transition-all duration-200 w-4 bg-gray-400 dark:bg-gray-600 group-hover:bg-gray-600 dark:group-hover:bg-gray-400"></div><span class="ml-4 text-sm font-medium transition-all duration-200 whitespace-nowrap text-gray-300 dark:text-gray-400 opacity-0 -translate-x-2 pointer-events-none">Pricing</span></div><div class="relative flex items-center cursor-pointer group"><div class="h-0.5 transition-all duration-200 w-4 bg-gray-400 dark:bg-gray-600 group-hover:bg-gray-600 dark:group-hover:bg-gray-400"></div><span class="ml-4 text-sm font-medium transition-all duration-200 whitespace-nowrap text-gray-300 dark:text-gray-400 opacity-0 -translate-x-2 pointer-events-none">FAQs</span></div></div></div><section class="h-screen flex items-center justify-center"><div class="text-center"><h1 class="text-6xl font-bold text-gray-900 dark:text-white mb-4">Scroll Legend</h1><p class="text-xl text-gray-600 dark:text-gray-300">Scroll down to explore our features</p></div></section><section id="ai-chat" class="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900"><div class="max-w-4xl mx-auto px-6 text-center"><h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">AI Chat</h2></div></section><section id="quick-ai" class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800"><div class="max-w-4xl mx-auto px-6 text-center"><h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">Quick AI</h2></div></section><section id="ai-extensions" class="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900"><div class="max-w-4xl mx-auto px-6 text-center"><h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">AI Extensions</h2></div></section><section id="ai-commands" class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800"><div class="max-w-4xl mx-auto px-6 text-center"><h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">AI Commands</h2></div></section><section id="models" class="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900"><div class="max-w-4xl mx-auto px-6 text-center"><h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">Models</h2></div></section><section id="privacy" class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800"><div class="max-w-4xl mx-auto px-6 text-center"><h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">Privacy</h2></div></section><section id="pricing" class="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900"><div class="max-w-4xl mx-auto px-6 text-center"><h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">Pricing</h2></div></section><section id="faqs" class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800"><div class="max-w-4xl mx-auto px-6"><h2 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">FAQs</h2></div></section></div></div></div></div>
```

## Public registry source files

No public registry source files were available.