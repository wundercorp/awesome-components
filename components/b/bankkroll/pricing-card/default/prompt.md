# Build Pricing Card in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Pricing Card screenshot](screenshot.png)

## Component

- Author group: `bankkroll`
- Component: `pricing-card`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: bankkroll
- Component slug: pricing-card
- Demo slug: default
- Title: pricing-card
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
<div id="root"><div class="bg-background text-foreground"><div class="w-full"><section class="container py-12 md:py-24" style="opacity: 1;"><div class="rounded-lg border bg-card text-card-foreground shadow-sm relative mx-auto w-full max-w-6xl overflow-hidden"><div class="flex flex-col lg:flex-row"><div class="flex flex-col justify-between p-6 lg:w-2/5 lg:p-10" style="opacity: 1; transform: none;"><div><div class="flex flex-col space-y-1.5 p-0"><div class="flex items-start justify-between"><div><h3 class="tracking-tight text-3xl font-bold">Ultimate Plan</h3><p class="text-sm text-muted-foreground mt-2">Access everything you need to grow your business.</p></div></div></div><div class="mt-6 space-y-4" style="opacity: 1; transform: none;"><div class="flex items-baseline"><span class="text-5xl font-extrabold">$99</span><span class="ml-2 text-xl text-muted-foreground line-through">$199</span></div><span class="block text-sm text-muted-foreground">one-time payment</span></div></div><div class="mt-8" style="opacity: 1; transform: none;"><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full">Get Started</button></div></div><div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full lg:my-6 lg:hidden"></div><div class="bg-muted/50 p-6 lg:w-3/5 lg:p-10" style="opacity: 1; transform: none;"><div class="space-y-6"><div><h3 class="mb-4 text-lg font-semibold">Features:</h3><ul class="grid grid-cols-1 gap-3 md:grid-cols-2"><li class="flex items-center" style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check mr-2 h-4 w-4 text-primary" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg><span class="text-sm">Unlimited Projects</span></li><li class="flex items-center" style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check mr-2 h-4 w-4 text-primary" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg><span class="text-sm">Advanced Analytics</span></li><li class="flex items-center" style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check mr-2 h-4 w-4 text-primary" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg><span class="text-sm">Team Collaboration</span></li><li class="flex items-center" style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check mr-2 h-4 w-4 text-primary" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg><span class="text-sm">Custom Branding</span></li></ul><div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full my-6"></div></div><div><h3 class="mb-4 text-lg font-semibold">Perks:</h3><ul class="grid grid-cols-1 gap-3 md:grid-cols-2"><li class="flex items-center" style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check mr-2 h-4 w-4 text-primary" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg><span class="text-sm">24/7 Support</span></li><li class="flex items-center" style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check mr-2 h-4 w-4 text-primary" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg><span class="text-sm">Priority Assistance</span></li><li class="flex items-center" style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check mr-2 h-4 w-4 text-primary" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg><span class="text-sm">Exclusive Webinars</span></li><li class="flex items-center" style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check mr-2 h-4 w-4 text-primary" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg><span class="text-sm">Early Feature Access</span></li></ul></div></div></div></div></div></section></div></div></div>
```

## Reference source files

No reference source files were available.
