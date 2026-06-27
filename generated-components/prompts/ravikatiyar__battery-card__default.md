# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ravikatiyar/battery-card/default
- Registry URL: https://21st.dev/r/ravikatiyar/battery-card
- Author: ravikatiyar
- Component slug: battery-card
- Demo slug: default
- Title: battery-card
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ravikatiyar/battery-card with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ravikatiyar__battery-card__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ravikatiyar__battery-card__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center bg-background p-10"><div class="w-full max-w-sm rounded-2xl border bg-card p-6 text-card-foreground shadow-sm transition-all duration-300 ease-in-out"><div class="flex items-center justify-between"><div class="flex items-center gap-2 text-sm font-medium text-muted-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-laptop h-4 w-4" aria-hidden="true"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path></svg><span>Josh MacBook</span></div></div><div class="mt-4 grid grid-cols-3 items-center gap-4"><div class="relative col-span-1 h-32 w-full overflow-hidden rounded-lg bg-muted/40"><div class="absolute bottom-0 w-[2000px] transition-all duration-500 ease-in-out" style="height: 59%;"><svg class="absolute -bottom-1 h-4 w-[2000px] animate-[wave-animation_7s_linear_infinite]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 88.6" style="fill: hsl(var(--battery-wave));"><path d="M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.7h800v-.2-31.4z"></path></svg><svg class="absolute -bottom-1 h-5 w-[2000px] animate-[wave-animation_10s_linear_infinite]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 88.6" style="fill: hsl(var(--battery-wave)); opacity: 0.5;"><path d="M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.7h800v-.2-31.4z"></path></svg></div><div class="absolute inset-0 flex flex-col items-center justify-center gap-1 text-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap h-5 w-5" aria-hidden="true" style="color: hsl(var(--battery-wave-foreground));"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg><span class="text-xl font-bold" style="color: hsl(var(--battery-wave-foreground));">59%</span></div></div><div class="col-span-2 flex flex-col items-start justify-center"><p class="text-4xl font-bold tracking-tight text-foreground">1h 2m</p><p class="text-sm text-muted-foreground">Time to full charge</p></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.