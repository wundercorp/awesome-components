# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ravikatiyar/card-12/default
- Registry URL: https://21st.dev/r/ravikatiyar/card-12
- Author: ravikatiyar
- Component slug: card-12
- Demo slug: default
- Title: card-12
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ravikatiyar/card-12 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ravikatiyar__card-12__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ravikatiyar__card-12__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-screen items-center justify-center bg-background p-4"><div class="w-full max-w-sm rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm font-sans" style="opacity: 1; transform: none;"><div class="flex items-center justify-between"><div class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-5 w-5 text-muted-foreground" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg><h2 class="font-semibold text-lg">New Opportunity</h2></div><div class="inline-flex items-center justify-center rounded-full border px-1.5 text-xs font-medium leading-normal transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 border-green-300 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-950 dark:text-green-300">Available</div></div><hr class="my-4 border-border"><div class="flex flex-col gap-4"><div class="flex items-center gap-3"><img alt="Jenifer A." class="h-10 w-10 rounded-full object-cover" src="https://i.pravatar.cc/150?u=jenifer"><div><p class="font-medium">Jenifer A.</p><p class="text-sm text-muted-foreground">Meta — Facebook • California</p></div></div><h3 class="text-3xl font-bold tracking-tight">$35,000 - $45,000</h3><div class="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground"><div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days h-4 w-4" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg><span>14 Oct - 2024</span></div><div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-4 w-4 text-green-500" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="font-medium text-green-500">89.5% Match</span></div></div><div class="flex flex-wrap items-center gap-2"><div class="inline-flex items-center justify-center rounded-full border px-1.5 text-xs font-medium leading-normal transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 border-transparent bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-200 dark:hover:bg-green-800"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star mr-1.5 h-3.5 w-3.5 fill-current" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>4.9</div><div class="inline-flex items-center justify-center rounded-full border px-1.5 text-xs font-medium leading-normal transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 border-transparent text-secondary-foreground bg-muted hover:bg-muted/80">Web Design</div><div class="inline-flex items-center justify-center rounded-full border px-1.5 text-xs font-medium leading-normal transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-200 dark:hover:bg-yellow-800">Responsive</div></div><p class="text-sm leading-relaxed text-muted-foreground">Need Responsive Website showcase product. Modern and visually appealing design.</p></div><div class="mt-6 flex items-center gap-3"><img alt="Robert T." class="h-8 w-8 rounded-full object-cover" src="https://i.pravatar.cc/150?u=robert"><div><p class="text-sm font-medium">Robert T.</p><p class="text-xs text-muted-foreground">Full Cycle Agency • Salt Lake</p></div></div><div class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2"><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow-sm shadow-black/5 hover:bg-primary/90 h-10 rounded-lg px-8 w-full">Accept Project</button><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm shadow-black/5 hover:bg-accent hover:text-accent-foreground h-10 rounded-lg px-8 w-full">Decline Offer</button></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.