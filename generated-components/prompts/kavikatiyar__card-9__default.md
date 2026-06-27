# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/kavikatiyar/card-9/default
- Registry URL: https://21st.dev/r/kavikatiyar/card-9
- Author: kavikatiyar
- Component slug: card-9
- Demo slug: default
- Title: card-9
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/kavikatiyar/card-9 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/kavikatiyar__card-9__default.html
- Local screenshot file: generated-21st-prompts/screenshots/kavikatiyar__card-9__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-[450px] w-full flex-col items-center justify-center gap-4 bg-background p-4"><div class="relative w-full max-w-md overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-lg" aria-labelledby="promo-card-title" role="dialog" aria-modal="true" style="opacity: 1; transform: none;"><style>
      @keyframes promo-card-loader-pulse {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
      }
    </style><svg class="pointer-events-none absolute -z-10 h-0 w-0" aria-hidden="true"><filter id="grainy"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"></feTurbulence></filter></svg><div class="absolute inset-0 z-0 opacity-[0.03]" style="filter: url(&quot;#grainy&quot;);"></div><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground absolute right-4 top-4 z-20 h-8 w-8 rounded-full" aria-label="Close promotion"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-4 w-4" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button><div class="relative z-10 flex h-full flex-col p-8"><div class="absolute left-6 top-6 flex items-center space-x-1"><span class="h-1.5 w-4 rounded-full bg-muted-foreground" style="animation: 1.5s ease 0s infinite normal none running promo-card-loader-pulse;"></span><span class="h-1.5 w-1.5 rounded-full bg-muted-foreground" style="animation: 1.5s ease 0.2s infinite normal none running promo-card-loader-pulse;"></span><span class="h-1.5 w-1.5 rounded-full bg-muted-foreground" style="animation: 1.5s ease 0.4s infinite normal none running promo-card-loader-pulse;"></span></div><div class="mt-8 flex-grow"><p class="mb-2 text-sm font-medium text-muted-foreground">Join VeloMark Pro!</p><h2 id="promo-card-title" class="text-3xl font-bold tracking-tight text-foreground">Ready to boost <br> your performance?</h2></div><div class="mt-8 flex-shrink-0"><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 rounded-md px-8 w-full sm:w-auto">Get Started</button></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.