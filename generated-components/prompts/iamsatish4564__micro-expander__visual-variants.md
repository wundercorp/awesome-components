# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/iamsatish4564/micro-expander/visual-variants
- Registry URL: https://21st.dev/r/iamsatish4564/micro-expander
- Author: iamsatish4564
- Component slug: micro-expander
- Demo slug: visual-variants
- Title: micro-expander
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/iamsatish4564/micro-expander with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/iamsatish4564__micro-expander__visual-variants.html
- Local screenshot file: generated-21st-prompts/screenshots/iamsatish4564__micro-expander__visual-variants.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full min-h-[200px] grid grid-cols-1 @md:grid-cols-2 @lg:grid-cols-4 gap-8 place-items-center p-4"><button class="relative flex h-12 items-center overflow-hidden rounded-full whitespace-nowrap font-medium text-sm uppercase tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground border border-primary" aria-label="Create New" style="width: 48px;"><div class="grid h-12 w-12 place-items-center shrink-0 z-10"><div style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-5 h-5" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></div></div><div class="pr-6 pl-1" style="opacity: 0; transform: translateX(-10px);">Create New</div></button><button class="relative flex h-12 items-center overflow-hidden rounded-full whitespace-nowrap font-medium text-sm uppercase tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-transparent border border-input text-foreground hover:border-primary" aria-label="View Details" style="width: 48px;"><div class="grid h-12 w-12 place-items-center shrink-0 z-10"><div style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye w-5 h-5" aria-hidden="true"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg></div></div><div class="pr-6 pl-1" style="opacity: 0; transform: translateX(-10px);">View Details</div></button><button class="relative flex h-12 items-center overflow-hidden rounded-full whitespace-nowrap font-medium text-sm uppercase tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-accent/50 border border-transparent text-accent-foreground hover:bg-accent" aria-label="Settings" style="width: 48px;"><div class="grid h-12 w-12 place-items-center shrink-0 z-10"><div style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings w-5 h-5" aria-hidden="true"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg></div></div><div class="pr-6 pl-1" style="opacity: 0; transform: translateX(-10px);">Settings</div></button><button class="relative flex h-12 items-center overflow-hidden rounded-full whitespace-nowrap font-medium text-sm uppercase tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-destructive text-destructive-foreground border border-destructive hover:bg-destructive/90" aria-label="Delete Item" style="width: 48px;"><div class="grid h-12 w-12 place-items-center shrink-0 z-10"><div style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2 lucide-trash-2 w-5 h-5" aria-hidden="true"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg></div></div><div class="pr-6 pl-1" style="opacity: 0; transform: translateX(-10px);">Delete Item</div></button></div></div></div></div>
```

## Public registry source files

No public registry source files were available.