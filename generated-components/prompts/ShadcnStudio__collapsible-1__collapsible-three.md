# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ShadcnStudio/collapsible-1/collapsible-three
- Registry URL: https://21st.dev/r/ShadcnStudio/collapsible-1
- Author: ShadcnStudio
- Component slug: collapsible-1
- Demo slug: collapsible-three
- Title: collapsible-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ShadcnStudio/collapsible-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ShadcnStudio__collapsible-1__collapsible-three.html
- Local screenshot file: generated-21st-prompts/screenshots/ShadcnStudio__collapsible-1__collapsible-three.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div data-state="closed" class="flex w-full max-w-[350px] flex-col items-start gap-4"><div class="font-medium">Today's task completion</div><ul class="flex w-full flex-col gap-2"><li class="flex items-start gap-4"><span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"><img class="aspect-square h-full w-full" alt="Howard Lloyd" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png"></span><div class="flex flex-1 flex-col"><div class="text-sm font-medium">Howard Lloyd</div><p class="text-muted-foreground text-xs">Product Manager</p></div><span class="text-muted-foreground text-sm">90%</span></li><li class="flex items-start gap-4"><span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"><img class="aspect-square h-full w-full" alt="Olivia Sparks" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png"></span><div class="flex flex-1 flex-col"><div class="text-sm font-medium">Olivia Sparks</div><p class="text-muted-foreground text-xs">Software Engineer</p></div><span class="text-muted-foreground text-sm">60%</span></li><div data-state="closed" id="radix-«r0»" hidden="" class="flex flex-col gap-2" style=""></div></ul><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3" type="button" aria-controls="radix-«r0»" aria-expanded="false" data-state="closed"><span class="[[data-state=open]&gt;&amp;]:hidden">Show more</span><span class="[[data-state=closed]&gt;&amp;]:hidden">Show less</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up [[data-state=closed]&gt;&amp;]:rotate-180" aria-hidden="true"><path d="m18 15-6-6-6 6"></path></svg></button></div></div></div></div>
```

## Public registry source files

No public registry source files were available.