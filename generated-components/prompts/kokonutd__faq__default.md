# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/kokonutd/faq/default
- Registry URL: https://21st.dev/r/kokonutd/faq
- Author: kokonutd
- Component slug: faq
- Demo slug: default
- Title: faq
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/kokonutd/faq with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/kokonutd__faq__default.html
- Local screenshot file: generated-21st-prompts/screenshots/kokonutd__faq__default.png

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
<div id="root"><div class="bg-background text-foreground"><div class="w-full"><section class="py-16 w-full bg-gradient-to-b from-transparent via-muted/50 to-transparent"><div class="container"><div class="max-w-2xl mx-auto text-center mb-12" style="opacity: 1; transform: none;"><h2 class="text-3xl font-semibold mb-3 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">Frequently Asked Questions</h2><p class="text-sm text-muted-foreground">Everything you need to know about our platform</p></div><div class="max-w-2xl mx-auto space-y-2"><div class="group rounded-lg transition-all duration-200 ease-in-out border border-border/50 hover:bg-muted/50" style="opacity: 1; transform: none;"><button class="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground w-full px-6 py-4 h-auto justify-between hover:bg-transparent"><h3 class="text-base font-medium transition-colors duration-200 text-left text-foreground/70">What makes your platform unique?</h3><div class="p-0.5 rounded-full flex-shrink-0 transition-colors duration-200 text-muted-foreground" style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></button></div><div class="group rounded-lg transition-all duration-200 ease-in-out border border-border/50 hover:bg-muted/50" style="opacity: 1; transform: none;"><button class="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground w-full px-6 py-4 h-auto justify-between hover:bg-transparent"><h3 class="text-base font-medium transition-colors duration-200 text-left text-foreground/70">How does the pricing structure work?</h3><div class="p-0.5 rounded-full flex-shrink-0 transition-colors duration-200 text-muted-foreground" style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></button></div><div class="group rounded-lg transition-all duration-200 ease-in-out border border-border/50 hover:bg-muted/50" style="opacity: 1; transform: none;"><button class="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground w-full px-6 py-4 h-auto justify-between hover:bg-transparent"><h3 class="text-base font-medium transition-colors duration-200 text-left text-foreground/70">What kind of support do you offer?</h3><div class="p-0.5 rounded-full flex-shrink-0 transition-colors duration-200 text-muted-foreground" style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></button></div></div><div class="max-w-md mx-auto mt-12 p-6 rounded-lg text-center" style="opacity: 1; transform: none;"><div class="inline-flex items-center justify-center p-1.5 rounded-full mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-4 w-4" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg></div><p class="text-sm font-medium text-foreground mb-1">Still have questions?</p><p class="text-xs text-muted-foreground mb-4">We're here to help you</p><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">Contact Support</button></div></div></section></div></div></div>
```

## Public registry source files

No public registry source files were available.