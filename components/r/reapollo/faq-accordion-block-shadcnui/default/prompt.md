# Build Faq Accordion Block Shadcnui in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Faq Accordion Block Shadcnui screenshot](screenshot.png)

## Component

- Author group: `reapollo`
- Component: `faq-accordion-block-shadcnui`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: reapollo
- Component slug: faq-accordion-block-shadcnui
- Demo slug: default
- Title: faq-accordion-block-shadcnui
- Description: 

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

No reference metadata available.

## Rendered DOM snapshot

This is the rendered demo HTML extracted from the live preview. Use it to verify structure, class names, visible content, and layout.

```html
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-screen items-center justify-center bg-background p-8"><section class="w-full bg-gradient-to-b from-background to-muted/30 px-4 py-16 md:py-24"><div class="mx-auto max-w-4xl"><div class="mb-12 text-center md:mb-16" style="opacity: 1; transform: none;"><div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-help mr-1 h-3 w-3" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>FAQ</div><h2 class="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Frequently Asked Questions</h2><p class="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">Have a question? We've got answers. If you don't find what you're looking for, feel free to contact us.</p></div><div class="space-y-4"><div style="opacity: 1; transform: none;"><div class="rounded-xl border text-card-foreground shadow overflow-hidden border-border/50 bg-card transition-all hover:border-primary/50 hover:shadow-md"><button class="flex w-full items-center justify-between p-4 text-left md:p-6"><span class="pr-4 text-base font-semibold md:text-lg">What is included in the free plan?</span><div class="flex-shrink-0" style="transform: rotate(180deg);"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-5 w-5 text-muted-foreground" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></button><div class="overflow-hidden" style="height: auto; opacity: 1;"><div class="border-t border-border/50 p-4 md:p-6"><p class="text-sm text-muted-foreground md:text-base" style="transform: none;">The free plan includes access to basic components, up to 5 projects, community support, and regular updates. It's perfect for individuals and small projects to get started.</p></div></div></div></div><div style="opacity: 1; transform: none;"><div class="rounded-xl border text-card-foreground shadow overflow-hidden border-border/50 bg-card transition-all hover:border-primary/50 hover:shadow-md"><button class="flex w-full items-center justify-between p-4 text-left md:p-6"><span class="pr-4 text-base font-semibold md:text-lg">Can I upgrade or downgrade my plan at any time?</span><div class="flex-shrink-0" style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-5 w-5 text-muted-foreground" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></button></div></div><div style="opacity: 1; transform: none;"><div class="rounded-xl border text-card-foreground shadow overflow-hidden border-border/50 bg-card transition-all hover:border-primary/50 hover:shadow-md"><button class="flex w-full items-center justify-between p-4 text-left md:p-6"><span class="pr-4 text-base font-semibold md:text-lg">What payment methods do you accept?</span><div class="flex-shrink-0" style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-5 w-5 text-muted-foreground" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></button></div></div><div style="opacity: 1; transform: none;"><div class="rounded-xl border text-card-foreground shadow overflow-hidden border-border/50 bg-card transition-all hover:border-primary/50 hover:shadow-md"><button class="flex w-full items-center justify-between p-4 text-left md:p-6"><span class="pr-4 text-base font-semibold md:text-lg">Is there a setup fee or contract required?</span><div class="flex-shrink-0" style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-5 w-5 text-muted-foreground" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></button></div></div><div style="opacity: 1; transform: none;"><div class="rounded-xl border text-card-foreground shadow overflow-hidden border-border/50 bg-card transition-all hover:border-primary/50 hover:shadow-md"><button class="flex w-full items-center justify-between p-4 text-left md:p-6"><span class="pr-4 text-base font-semibold md:text-lg">Do you offer refunds?</span><div class="flex-shrink-0" style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-5 w-5 text-muted-foreground" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></button></div></div><div style="opacity: 1; transform: none;"><div class="rounded-xl border text-card-foreground shadow overflow-hidden border-border/50 bg-card transition-all hover:border-primary/50 hover:shadow-md"><button class="flex w-full items-center justify-between p-4 text-left md:p-6"><span class="pr-4 text-base font-semibold md:text-lg">How does customer support work?</span><div class="flex-shrink-0" style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-5 w-5 text-muted-foreground" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></div></button></div></div></div><div class="mt-12 text-center md:mt-16" style="opacity: 1; transform: none;"><div class="rounded-xl border text-card-foreground shadow border-border/50 bg-gradient-to-br from-card to-muted/30 p-6 md:p-8"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle mx-auto mb-4 h-12 w-12 text-primary" aria-hidden="true"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg><h3 class="mb-2 text-xl font-bold md:text-2xl">Still have questions?</h3><p class="mb-6 text-sm text-muted-foreground md:text-base">Our team is here to help. Get in touch and we'll respond as soon as possible.</p><div class="flex flex-col justify-center gap-3 sm:flex-row"><button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 rounded-md px-8">Contact Support</button><button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 rounded-md px-8">View Documentation</button></div></div></div></div></section></div></div></div></div>
```

## Reference source files

No reference source files were available.
