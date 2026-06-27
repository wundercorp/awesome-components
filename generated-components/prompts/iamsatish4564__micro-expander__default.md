# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/iamsatish4564/micro-expander/default
- Registry URL: https://21st.dev/r/iamsatish4564/micro-expander
- Author: iamsatish4564
- Component slug: micro-expander
- Demo slug: default
- Title: micro-expander
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/iamsatish4564/micro-expander with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/iamsatish4564__micro-expander__default.html
- Local screenshot file: generated-21st-prompts/screenshots/iamsatish4564__micro-expander__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full min-h-[200px] flex items-center justify-center p-4 bg-muted/30 rounded-lg"><div class="flex flex-wrap items-center justify-center gap-3 p-3 bg-background border rounded-full shadow-sm"><button class="relative flex h-12 items-center overflow-hidden rounded-full whitespace-nowrap font-medium text-sm uppercase tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-accent/50 border border-transparent text-accent-foreground hover:text-red-500 hover:bg-red-50" aria-label="Like" style="width: 48px;"><div class="grid h-12 w-12 place-items-center shrink-0 z-10"><div style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart w-5 h-5" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg></div></div><div class="pr-6 pl-1" style="opacity: 0; transform: translateX(-10px);">Like</div></button><button class="relative flex h-12 items-center overflow-hidden rounded-full whitespace-nowrap font-medium text-sm uppercase tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-accent/50 border border-transparent text-accent-foreground hover:text-blue-500 hover:bg-blue-50" aria-label="Reply" style="width: 48px;"><div class="grid h-12 w-12 place-items-center shrink-0 z-10"><div style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle w-5 h-5" aria-hidden="true"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg></div></div><div class="pr-6 pl-1" style="opacity: 0; transform: translateX(-10px);">Reply</div></button><button class="relative flex h-12 items-center overflow-hidden rounded-full whitespace-nowrap font-medium text-sm uppercase tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-accent/50 border border-transparent text-accent-foreground hover:text-green-500 hover:bg-green-50" aria-label="Repost" style="width: 48px;"><div class="grid h-12 w-12 place-items-center shrink-0 z-10"><div style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-repeat2 lucide-repeat-2 w-5 h-5" aria-hidden="true"><path d="m2 9 3-3 3 3"></path><path d="M13 18H7a2 2 0 0 1-2-2V6"></path><path d="m22 15-3 3-3-3"></path><path d="M11 6h6a2 2 0 0 1 2 2v10"></path></svg></div></div><div class="pr-6 pl-1" style="opacity: 0; transform: translateX(-10px);">Repost</div></button><button class="relative flex h-12 items-center overflow-hidden rounded-full whitespace-nowrap font-medium text-sm uppercase tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-accent/50 border border-transparent text-accent-foreground hover:bg-accent" aria-label="Share" style="width: 48px;"><div class="grid h-12 w-12 place-items-center shrink-0 z-10"><div style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share2 lucide-share-2 w-5 h-5" aria-hidden="true"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg></div></div><div class="pr-6 pl-1" style="opacity: 0; transform: translateX(-10px);">Share</div></button></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.