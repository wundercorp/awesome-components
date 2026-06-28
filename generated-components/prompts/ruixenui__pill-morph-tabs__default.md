# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ruixenui/pill-morph-tabs/default
- Registry URL: https://21st.dev/r/ruixenui/pill-morph-tabs
- Author: ruixenui
- Component slug: pill-morph-tabs
- Demo slug: default
- Title: pill-morph-tabs
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ruixenui/pill-morph-tabs with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ruixenui__pill-morph-tabs__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ruixenui__pill-morph-tabs__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex h-screen w-full items-center justify-center bg-background"><div class="w-full max-w-md"><div dir="ltr" data-orientation="horizontal"><div class="relative inline-flex items-center gap-2 p-1 rounded-full bg-white/6 dark:bg-white/3 backdrop-blur-sm border border-white/6 dark:border-white/6" style="background: linear-gradient(rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0));"><div class="absolute pointer-events-none top-1 bottom-1 rounded-full" style="background: linear-gradient(90deg, rgba(124, 58, 237, 0.18), rgba(6, 182, 212, 0.14)); border: 1px solid rgba(255, 255, 255, 0.04); left: 9px; width: 93.6719px; border-radius: 999px; transform: none; box-shadow: rgba(16, 24, 40, 0.08) 0px 6px 20px;"></div><div class="absolute pointer-events-none top-0 bottom-0 rounded-full filter blur-2xl opacity-40" style="background: linear-gradient(90deg, rgb(124, 58, 237), rgb(6, 182, 212)); mix-blend-mode: screen; left: 9px; width: 93.6719px;"></div><div role="tablist" aria-orientation="horizontal" class="items-center justify-center rounded-lg bg-muted text-muted-foreground/70 relative flex gap-1 p-1" tabindex="0" data-orientation="horizontal" style="outline: none;"><button type="button" role="tab" aria-selected="true" aria-controls="radix-«r0»-content-overview" data-state="active" id="radix-«r0»-trigger-overview" class="inline-flex items-center justify-center whitespace-nowrap outline-offset-2 hover:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:shadow-black/5 relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-colors text-white" tabindex="-1" data-orientation="horizontal" data-radix-collection-item="">Overview</button><button type="button" role="tab" aria-selected="false" aria-controls="radix-«r0»-content-features" data-state="inactive" id="radix-«r0»-trigger-features" class="inline-flex items-center justify-center whitespace-nowrap outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:shadow-black/5 relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-colors text-foreground/80 hover:text-foreground" tabindex="-1" data-orientation="horizontal" data-radix-collection-item="">Features</button><button type="button" role="tab" aria-selected="false" aria-controls="radix-«r0»-content-pricing" data-state="inactive" id="radix-«r0»-trigger-pricing" class="inline-flex items-center justify-center whitespace-nowrap outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:shadow-black/5 relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-colors text-foreground/80 hover:text-foreground" tabindex="-1" data-orientation="horizontal" data-radix-collection-item="">Pricing</button><button type="button" role="tab" aria-selected="false" aria-controls="radix-«r0»-content-faq" data-state="inactive" id="radix-«r0»-trigger-faq" class="inline-flex items-center justify-center whitespace-nowrap outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:shadow-black/5 relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-colors text-foreground/80 hover:text-foreground" tabindex="-1" data-orientation="horizontal" data-radix-collection-item="">FAQ</button></div></div><div class="mt-4"><div data-state="active" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-overview" id="radix-«r0»-content-overview" tabindex="0" class="mt-2 outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 p-2" style=""><div class="p-4 text-left"><h2 class="text-lg font-semibold">Overview</h2><p class="text-sm text-muted-foreground">This is the overview section of your app.</p></div></div><div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-features" hidden="" id="radix-«r0»-content-features" tabindex="0" class="mt-2 outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 p-2"></div><div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-pricing" hidden="" id="radix-«r0»-content-pricing" tabindex="0" class="mt-2 outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 p-2"></div><div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-«r0»-trigger-faq" hidden="" id="radix-«r0»-content-faq" tabindex="0" class="mt-2 outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 p-2"></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.