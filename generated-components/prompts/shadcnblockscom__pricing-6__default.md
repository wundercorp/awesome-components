# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/shadcnblockscom/pricing-6/default
- Registry URL: https://21st.dev/r/shadcnblockscom/pricing-6
- Author: shadcnblockscom
- Component slug: pricing-6
- Demo slug: default
- Title: pricing-6
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/shadcnblockscom/pricing-6 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/shadcnblockscom__pricing-6__default.html
- Local screenshot file: generated-21st-prompts/screenshots/shadcnblockscom__pricing-6__default.png

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
<div id="root"><section class="py-32"><div class="container"><div class="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center"><h2 class="text-4xl font-semibold text-pretty lg:text-6xl">Pricing</h2><p class="max-w-md text-muted-foreground lg:text-xl">Simple pricing with a free 7 day trial.</p><div class="mx-auto flex w-full flex-col rounded-lg border p-6 sm:w-fit sm:min-w-80"><div class="flex justify-center"><span class="text-lg font-semibold">$</span><span class="text-6xl font-semibold">29</span><span class="self-end text-muted-foreground">/mo</span></div><div class="my-6"><div><ul class="flex flex-col gap-3"><li class="flex items-center justify-between gap-2 text-sm font-medium">Unlimited <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check inline size-4 shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></li><li class="flex items-center justify-between gap-2 text-sm font-medium">Integrations <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check inline size-4 shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></li><li class="flex items-center justify-between gap-2 text-sm font-medium">24/7 support <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check inline size-4 shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></li></ul><div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full my-6"></div></div><div><ul class="flex flex-col gap-3"><li class="flex items-center justify-between gap-2 text-sm font-medium">Live collaborations <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check inline size-4 shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></li><li class="flex items-center justify-between gap-2 text-sm font-medium">Unlimited storage <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check inline size-4 shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></li><li class="flex items-center justify-between gap-2 text-sm font-medium">30-day money back <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check inline size-4 shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></li></ul><div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full my-6"></div></div><div><ul class="flex flex-col gap-3"><li class="flex items-center justify-between gap-2 text-sm font-medium">Unlimited members <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check inline size-4 shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></li><li class="flex items-center justify-between gap-2 text-sm font-medium">Customization <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check inline size-4 shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></li><li class="flex items-center justify-between gap-2 text-sm font-medium">Unlimited users <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check inline size-4 shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></li></ul></div></div><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Start free trial</button></div></div></div></section></div>
```

## Public registry source files

No public registry source files were available.