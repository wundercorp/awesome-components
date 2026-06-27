# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ravikatiyar/community-hub-card/default
- Registry URL: https://21st.dev/r/ravikatiyar/community-hub-card
- Author: ravikatiyar
- Component slug: community-hub-card
- Demo slug: default
- Title: community-hub-card
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ravikatiyar/community-hub-card with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ravikatiyar__community-hub-card__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ravikatiyar__community-hub-card__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center bg-background p-4 md:p-8 min-h-screen"><div class="w-full max-w-2xl mx-auto" style="opacity: 1; transform: none;"><div class="rounded-lg bg-card text-card-foreground shadow-sm overflow-hidden border-2"><div class="flex flex-col space-y-1.5 text-center p-6"><h1 class="text-2xl font-bold tracking-tight" style="opacity: 1; transform: none;">Readers Unite</h1><p class="text-sm text-muted-foreground" style="opacity: 1; transform: none;">Your gateway to literary adventures</p><div class="flex justify-center -space-x-2 my-4" style="opacity: 1; transform: none;"><span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-background"><img class="aspect-square h-full w-full" alt="Member 1" src="https://i.pravatar.cc/150?img=1"></span><span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-background"><img class="aspect-square h-full w-full" alt="Member 2" src="https://i.pravatar.cc/150?img=2"></span><span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-background"><img class="aspect-square h-full w-full" alt="Member 3" src="https://i.pravatar.cc/150?img=3"></span><span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-background"><img class="aspect-square h-full w-full" alt="Member 4" src="https://i.pravatar.cc/150?img=4"></span></div><p class="text-sm font-medium" style="opacity: 1; transform: none;">Current Members: 1,234</p></div><div class="p-6 space-y-6"><div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full"></div><div class="space-y-3" style="opacity: 1; transform: none;"><h2 class="font-semibold">Expand Your Bookshelf</h2><p class="text-sm text-muted-foreground">Invite bibliophiles to join our book club and discover new worlds together!</p><div class="flex flex-col sm:flex-row gap-2"><input class="flex h-9 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50 flex-grow" readonly="" aria-label="Invite Link" value="https://readersunite.com/invite/Bk7LA3G"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy mr-2 h-4 w-4" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>Copy Invite Link</button></div><p class="text-xs text-muted-foreground">Get a free bestseller for every friend who joins!</p></div><div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full"></div><div class="space-y-3" style="opacity: 1; transform: none;"><h2 class="font-semibold">Current Book Progress</h2><div class="relative w-full"><div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" class="relative w-full overflow-hidden rounded-full bg-secondary h-2"><div data-state="indeterminate" data-max="100" class="h-full w-full flex-1 bg-primary transition-all" style="transform: translateX(-35%);"></div></div><div class="absolute top-0 h-2 rounded-full bg-primary" style="width: 65%;"></div></div><div class="flex justify-between text-sm"><span class="font-medium text-foreground">The Great Gatsby</span><span class="text-muted-foreground">Club average: 65% complete</span></div></div><div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full"></div><div class="space-y-4" style="opacity: 1; transform: none;"><h2 class="font-semibold">Upcoming Books</h2><ul class="space-y-3"><li class="flex items-center gap-3 text-sm" style="opacity: 1; transform: none;"><div class="p-1.5 bg-muted rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book h-4 w-4 text-muted-foreground" aria-hidden="true"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path></svg></div><span><span class="font-medium text-foreground">"To Kill a Mockingbird"</span> by Harper Lee</span></li><li class="flex items-center gap-3 text-sm" style="opacity: 1; transform: none;"><div class="p-1.5 bg-muted rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book h-4 w-4 text-muted-foreground" aria-hidden="true"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path></svg></div><span><span class="font-medium text-foreground">"1984"</span> by George Orwell</span></li><li class="flex items-center gap-3 text-sm" style="opacity: 1; transform: none;"><div class="p-1.5 bg-muted rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book h-4 w-4 text-muted-foreground" aria-hidden="true"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path></svg></div><span><span class="font-medium text-foreground">"Pride and Prejudice"</span> by Jane Austen</span></li></ul></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.