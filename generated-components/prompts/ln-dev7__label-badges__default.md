# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ln-dev7/label-badges/default
- Registry URL: https://21st.dev/r/ln-dev7/label-badges
- Author: ln-dev7
- Component slug: label-badges
- Demo slug: default
- Title: label-badges
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ln-dev7/label-badges with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ln-dev7__label-badges__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ln-dev7__label-badges__default.png

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
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="named_DemoOne_LabelBadgeDemo">LabelBadgeDemo</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex w-full flex-col items-center justify-center gap-10 p-4"><div class="flex flex-col items-center gap-2 text-center"><h2 class="text-lg font-semibold">Label Badges</h2><p class="text-sm text-muted-foreground">Demonstrating how labels can be displayed on items.</p></div><div class="w-full max-w-md space-y-4"><div class="flex flex-col gap-3 rounded-lg border bg-card p-4 text-card-foreground"><div class="flex items-start justify-between"><p class="font-medium">Fix authentication flow redirect</p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bug size-5 shrink-0 text-red-500" aria-hidden="true"><path d="m8 2 1.88 1.88"></path><path d="M14.12 3.88 16 2"></path><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"></path><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"></path><path d="M12 20v-9"></path><path d="M6.53 9C4.6 8.8 3 7.1 3 5"></path><path d="M6 13H2"></path><path d="M3 21c0-2.1 1.7-3.9 3.8-4"></path><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"></path><path d="M22 13h-4"></path><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"></path></svg></div><div class="flex flex-wrap gap-2"><div class="inline-flex items-center justify-center px-1.5 text-xs font-medium leading-normal transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 gap-1.5 rounded-full border bg-background text-foreground"><span class="size-2 rounded-full" aria-hidden="true" style="background-color: rgb(215, 58, 74);"></span>Bug</div><div class="inline-flex items-center justify-center px-1.5 text-xs font-medium leading-normal transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 gap-1.5 rounded-full border bg-background text-foreground"><span class="size-2 rounded-full" aria-hidden="true" style="background-color: rgb(106, 115, 125);"></span>Security</div></div></div><div class="flex flex-col gap-3 rounded-lg border bg-card p-4 text-card-foreground"><div class="flex items-start justify-between"><p class="font-medium">Implement new dashboard design</p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles size-5 shrink-0 text-blue-500" aria-hidden="true"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg></div><div class="flex flex-wrap gap-2"><div class="inline-flex items-center justify-center px-1.5 text-xs font-medium leading-normal transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 gap-1.5 rounded-full border bg-background text-foreground"><span class="size-2 rounded-full" aria-hidden="true" style="background-color: rgb(14, 138, 22);"></span>Feature</div><div class="inline-flex items-center justify-center px-1.5 text-xs font-medium leading-normal transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 gap-1.5 rounded-full border bg-background text-foreground"><span class="size-2 rounded-full" aria-hidden="true" style="background-color: rgb(162, 238, 239);"></span>UI Enhancement</div><div class="inline-flex items-center justify-center px-1.5 text-xs font-medium leading-normal transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 gap-1.5 rounded-full border bg-background text-foreground"><span class="size-2 rounded-full" aria-hidden="true" style="background-color: rgb(216, 118, 227);"></span>Design</div></div></div><div class="flex flex-col gap-3 rounded-lg border bg-card p-4 text-card-foreground"><div class="flex items-start justify-between"><p class="font-medium">Update contribution guidelines</p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open size-5 shrink-0 text-green-500" aria-hidden="true"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg></div><div class="flex flex-wrap gap-2"><div class="inline-flex items-center justify-center px-1.5 text-xs font-medium leading-normal transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 gap-1.5 rounded-full border bg-background text-foreground"><span class="size-2 rounded-full" aria-hidden="true" style="background-color: rgb(83, 76, 179);"></span>Documentation</div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.