# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/erikx/animated-comman-menu/default
- Registry URL: https://21st.dev/r/erikx/animated-comman-menu
- Author: erikx
- Component slug: animated-comman-menu
- Demo slug: default
- Title: animated-comman-menu
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/erikx/animated-comman-menu with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/erikx__animated-comman-menu__default.html
- Local screenshot file: generated-21st-prompts/screenshots/erikx__animated-comman-menu__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative w-[90%] max-w-[480px] h-[60px] bg-white dark:bg-neutral-900 rounded-xl shadow-lg overflow-hidden"><div class="absolute inset-x-0 top-0 h-[60px] flex items-center justify-between px-4 z-10"><div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search text-neutral-400" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg><input placeholder="Search files or run a command..." class="bg-transparent text-sm placeholder:text-neutral-400 focus:outline-none" type="text"></div><button class="text-xs font-semibold text-neutral-500 bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-300 px-2 py-1 rounded-md">Open</button></div><div class="absolute inset-x-0 top-[60px] p-2 space-y-1"><div class="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg" style="translate: none; rotate: none; scale: none; opacity: 0; transform: translate(0px, 30px);"><div class="flex items-center gap-2.5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file text-neutral-400" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></svg><span class="text-sm font-medium">File</span><span class="text-sm text-neutral-500">- marketing-brief.pdf</span></div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right text-neutral-400" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div><div class="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg" style="translate: none; rotate: none; scale: none; opacity: 0; transform: translate(0px, 30px);"><div class="flex items-center gap-2.5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file text-neutral-400" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></svg><span class="text-sm font-medium">File</span><span class="text-sm text-neutral-500">- q3-financials.xlsx</span></div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right text-neutral-400" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div><div class="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg" style="translate: none; rotate: none; scale: none; opacity: 0; transform: translate(0px, 30px);"><div class="flex items-center gap-2.5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap text-neutral-400" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg><span class="text-sm font-medium">Action</span><span class="text-sm text-neutral-500">Deploy to Production</span></div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right text-neutral-400" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div><div class="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg" style="translate: none; rotate: none; scale: none; opacity: 0; transform: translate(0px, 30px);"><div class="flex items-center gap-2.5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap text-neutral-400" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg><span class="text-sm font-medium">Action</span><span class="text-sm text-neutral-500">Run Lint Checks</span></div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right text-neutral-400" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.