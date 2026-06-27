# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/meenic/chat-preview/default
- Registry URL: https://21st.dev/r/meenic/chat-preview
- Author: meenic
- Component slug: chat-preview
- Demo slug: default
- Title: chat-preview
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/meenic/chat-preview with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/meenic__chat-preview__default.html
- Local screenshot file: generated-21st-prompts/screenshots/meenic__chat-preview__default.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="absolute z-10 top-4 right-14 flex flex-col items-end gap-1"><button type="button" role="combobox" aria-controls="radix-«r0»" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" class="flex w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 gap-2 h-8"><span style="pointer-events: none;">Default Chat Preview</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></div><div class="flex w-full justify-center relative"><div class="relative flex-1 w-full max-w-[500px]"><div class="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-75"></div><div class="relative rounded-2xl overflow-hidden backdrop-blur-xl flex flex-col shadow-2xl border border-foreground/10 bg-background/50"><div class="border-b px-3 py-2.5 sm:px-4 sm:py-3"><div class="flex items-center gap-2"><span class="font-medium text-[13px] sm:text-sm">#creative-writing</span><span class="text-muted-foreground">|</span><span class="text-muted-foreground truncate flex-1 text-[13px] sm:text-sm">Share your verses and artistic expressions.</span></div></div><div class="p-2.5 pt-0 sm:p-4 sm:pt-0 flex flex-col justify-end relative h-[calc(64px*3+16px)] sm:h-[calc(52px*3+24px)]"><div class="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-background/50 to-transparent pointer-events-none"></div><div class="flex flex-col justify-end gap-2 sm:gap-3 overflow-hidden"><div class="flex items-start gap-2 sm:gap-3"><div class="rounded-full flex-shrink-0 relative overflow-hidden w-7 h-7 sm:w-8 sm:h-8 bg-blue-500/30"></div><div class="min-w-0 flex-1"><div class="flex items-center gap-2"><span class="font-medium text-[13px] sm:text-sm text-blue-400">TechPoet</span><span class="text-muted-foreground shrink-0 text-[11px] sm:text-xs">just now</span></div><p class="text-foreground/90 text-[13px] sm:text-sm">In the realm of web, where Next.js shines bright,</p></div></div><div class="flex items-start gap-2 sm:gap-3 animate-message-appear"><div class="rounded-full flex-shrink-0 relative overflow-hidden w-7 h-7 sm:w-8 sm:h-8 bg-red-500/30"></div><div class="min-w-0 flex-1"><div class="flex items-center gap-2"><span class="font-medium text-[13px] sm:text-sm text-pink-400">ReactBard</span><span class="text-muted-foreground shrink-0 text-[11px] sm:text-xs">just now</span></div><p class="text-foreground/90 text-[13px] sm:text-sm">React components dance in the night,</p></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.