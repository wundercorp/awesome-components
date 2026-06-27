# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/molecule-ui/discussion/default
- Registry URL: https://21st.dev/r/molecule-ui/discussion
- Author: molecule-ui
- Component slug: discussion
- Demo slug: default
- Title: discussion
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/molecule-ui/discussion with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/molecule-ui__discussion__default.html
- Local screenshot file: generated-21st-prompts/screenshots/molecule-ui__discussion__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-3/4"><div data-slot="accordion" class="w-full" data-orientation="vertical"><div data-state="open" data-orientation="vertical" class="relative pl-4 mt-2 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-border before:via-border/60 before:to-border/40"><h3 data-orientation="vertical" data-state="open" class="flex gap-2"><div class="flex flex-col gap-2"><div class="flex flex-col gap-1"><div class="font-semibold text-sm flex gap-2 items-center"><div>Jane Smith</div><div class="text-muted-foreground text-xs ">@janesmith</div><span class="text-muted-foreground text-xs">•</span><div class="text-muted-foreground text-xs ">1 hour ago</div></div><div class="text-sm leading-relaxed">This is a great article! Thanks for sharing your insights. I particularly enjoyed the section about accessibility best practices.</div></div><button type="button" aria-controls="radix-«r1»" aria-expanded="true" data-state="open" data-orientation="vertical" id="radix-«r0»" class="flex flex-1 items-center gap-1 text-muted-foreground text-xs font-medium transition-all hover:underline text-left [&amp;[data-state=open]&gt;svg]:rotate-180" data-radix-collection-item="">Show Replies<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></div></h3><div data-state="open" id="radix-«r1»" role="region" aria-labelledby="radix-«r0»" data-orientation="vertical" class="pl-10 overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width); transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 133.5px; --radix-collapsible-content-width: 728px;"><div data-state="closed" data-orientation="vertical" class="relative pl-4 mt-2 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-border before:via-border/60 before:to-border/40"><h3 data-orientation="vertical" data-state="closed" class="flex gap-2"><div class="flex flex-col gap-2"><div class="flex flex-col gap-1"><div class="font-semibold text-sm flex gap-2 items-center"><div>Liam Patel</div><div class="text-muted-foreground text-xs ">@liampatel</div><span class="text-muted-foreground text-xs">•</span><div class="text-muted-foreground text-xs ">34 minutes ago</div></div><div class="text-sm leading-relaxed">I agree! The examples were particularly helpful. Do you have any recommendations for further reading?</div></div><button type="button" aria-controls="radix-«r3»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«r2»" class="flex flex-1 items-center gap-1 text-muted-foreground text-xs font-medium transition-all hover:underline text-left [&amp;[data-state=open]&gt;svg]:rotate-180" data-radix-collection-item="">Show Replies<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></div></h3><div data-state="closed" id="radix-«r3»" hidden="" role="region" aria-labelledby="radix-«r2»" data-orientation="vertical" class="pl-10 overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);"></div></div><div data-state="closed" data-orientation="vertical" class="relative pl-4 mt-2 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-border before:via-border/60 before:to-border/40"><h3 data-orientation="vertical" data-state="closed" class="flex gap-2"><div class="flex flex-col gap-2"><div class="flex flex-col gap-1"><div class="font-semibold text-sm flex gap-2 items-center"><div>Sarah Wilson</div><div class="text-muted-foreground text-xs ">@sarahwilson</div><span class="text-muted-foreground text-xs">•</span><div class="text-muted-foreground text-xs ">14 minutes ago</div></div><div class="text-sm leading-relaxed">Thanks for the detailed explanation! This will definitely help with my current project.</div></div></div></h3></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.