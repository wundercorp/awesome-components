# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/reapollo/feedback-widget/default
- Registry URL: https://21st.dev/r/reapollo/feedback-widget
- Author: reapollo
- Component slug: feedback-widget
- Demo slug: default
- Title: feedback-widget
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/reapollo/feedback-widget with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/reapollo__feedback-widget__default.html
- Local screenshot file: generated-21st-prompts/screenshots/reapollo__feedback-widget__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center min-h-screen bg-background p-8"><div class="flex items-center justify-center p-4"><div class="overflow-hidden border border-zinc-200 bg-white text-zinc-900 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)] rounded-full"><div class="px-4 py-2 md:px-5 md:py-2.5"><div class="flex items-center justify-between gap-6"><span class="ml-2 cursor-default select-none whitespace-nowrap font-medium text-[14px] text-zinc-600 dark:text-zinc-400">Was this helpful?</span><div role="group" dir="ltr" class="flex items-center gap-1.5" tabindex="0" style="outline: none;"><button title="Terrible" class="relative rounded-full p-2 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 dark:text-zinc-500 dark:hover:bg-white/5 dark:hover:text-zinc-300" type="button" data-state="off" role="radio" aria-checked="false" tabindex="-1" data-radix-collection-item=""><div class="relative z-10 flex h-5 w-5 scale-110 items-center justify-center transition-transform active:scale-90"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><path d="M9 9h.01"></path><path d="M15 9h.01"></path><path d="M9 13v2" stroke="#3b82f6"></path><path d="M15 13v2" stroke="#3b82f6"></path></svg></div></button><button title="Bad" class="relative rounded-full p-2 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 dark:text-zinc-500 dark:hover:bg-white/5 dark:hover:text-zinc-300" type="button" data-state="off" role="radio" aria-checked="false" tabindex="-1" data-radix-collection-item=""><div class="relative z-10 flex h-5 w-5 scale-110 items-center justify-center transition-transform active:scale-90"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg></div></button><button title="Okay" class="relative rounded-full p-2 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 dark:text-zinc-500 dark:hover:bg-white/5 dark:hover:text-zinc-300" type="button" data-state="off" role="radio" aria-checked="false" tabindex="-1" data-radix-collection-item=""><div class="relative z-10 flex h-5 w-5 scale-110 items-center justify-center transition-transform active:scale-90"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 13s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg></div></button><button title="Amazing" class="relative rounded-full p-2 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 dark:text-zinc-500 dark:hover:bg-white/5 dark:hover:text-zinc-300" type="button" data-state="off" role="radio" aria-checked="false" tabindex="-1" data-radix-collection-item=""><div class="relative z-10 flex h-5 w-5 scale-110 items-center justify-center transition-transform active:scale-90"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 13s1.5 2 4 2 4-2 4-2"></path><path d="M9 9l.5 1.5l1.5 .5l-1.5 .5l-.5 1.5l-.5-1.5l-1.5-.5l1.5-.5z" fill="#f97316" stroke="none"></path><path d="M15 9l.5 1.5l1.5 .5l-1.5 .5l-.5 1.5l-.5-1.5l-1.5-.5l1.5-.5z" fill="#f97316" stroke="none"></path></svg></div></button></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.