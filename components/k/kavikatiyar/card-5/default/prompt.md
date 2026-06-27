# Build Card 5 in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Card 5 screenshot](screenshot.png)

## Component

- Author group: `kavikatiyar`
- Component: `card-5`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: kavikatiyar
- Component slug: card-5
- Demo slug: default
- Title: card-5
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex h-full min-h-[600px] w-full items-center justify-center bg-background p-4"><div class="w-full max-w-sm rounded-3xl bg-card p-6 shadow-lg sm:p-8 flex flex-col space-y-6 border"><div class="text-center"><p class="text-sm text-muted-foreground">Amount</p><p class="mt-1 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">IDR 535,000</p><p class="mt-2 text-sm text-muted-foreground">Available balance IDR 785,000</p></div><div class="flex-grow"><p class="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Choose Account</p><div role="radiogroup" aria-label="Choose an account" class="space-y-3"><div role="radio" aria-checked="true" tabindex="0" class="relative flex cursor-pointer items-center space-x-4 rounded-xl p-4 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background bg-primary text-primary-foreground"><div class="absolute inset-0 z-0 rounded-xl bg-primary" style="opacity: 1;"></div><div class="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-background/20 text-sm font-bold"><span class="text-primary-foreground">BA</span></div><div class="relative z-10 flex-grow"><p class="font-semibold">Bank Account</p><p class="text-sm text-primary-foreground/80">**** - **** - 0945</p></div><div class="relative z-10 h-6 w-6"><div class="flex h-full w-full items-center justify-center rounded-full bg-primary-foreground text-primary" style="opacity: 1; transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-4 w-4" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></div></div><div role="radio" aria-checked="false" tabindex="0" class="relative flex cursor-pointer items-center space-x-4 rounded-xl p-4 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background bg-muted/50 hover:bg-muted"><div class="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-background/20 text-sm font-bold"><span class="text-foreground">CC</span></div><div class="relative z-10 flex-grow"><p class="font-semibold">Credit Card</p><p class="text-sm text-muted-foreground">**** - **** - 3289</p></div><div class="relative z-10 h-6 w-6"><div class="h-6 w-6 rounded-full border-2 border-muted-foreground/30"></div></div></div></div></div><button class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 w-full rounded-xl py-6 text-base font-bold" aria-label="Withdraw amount">WITHDRAW</button></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
