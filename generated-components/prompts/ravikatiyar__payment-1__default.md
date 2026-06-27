# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ravikatiyar/payment-1/default
- Registry URL: https://21st.dev/r/ravikatiyar/payment-1
- Author: ravikatiyar
- Component slug: payment-1
- Demo slug: default
- Title: payment-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ravikatiyar/payment-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ravikatiyar__payment-1__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ravikatiyar__payment-1__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-[450px] w-full items-center justify-center bg-muted/30 p-4"><div class="w-full max-w-md rounded-xl border bg-card text-card-foreground shadow-sm p-6 "><div class="flex items-center justify-between mb-6"><h3 class="text-xl font-semibold leading-none tracking-tight">Choose how to pay</h3><button class="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"><svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>Add new method</button></div><div class="space-y-4" role="radiogroup" style="opacity: 1;"><div class="flex items-center p-4 rounded-lg border cursor-pointer transition-all duration-300 hover:bg-muted/50" role="radio" aria-checked="true" tabindex="0" style="border-color: hsl(var(--primary)); box-shadow: 0 0 0 2px hsl(var(--primary)); opacity: 1; transform: none;"><div class="flex-shrink-0"><img alt="Visa" class="h-8 w-12 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"></div><div class="ml-4 flex-grow"><p class="font-medium text-card-foreground">Visa **** 0912</p><p class="text-sm text-muted-foreground">Pay with your Visa card</p></div><div class="ml-4 flex h-6 w-6 items-center justify-center rounded-full border-2" style="border-color: hsl(var(--primary));"><div class="h-3 w-3 rounded-full bg-primary" style="transform: none;"></div></div></div><div class="flex items-center p-4 rounded-lg border cursor-pointer transition-all duration-300 hover:bg-muted/50" role="radio" aria-checked="false" tabindex="0" style="border-color: hsl(var(--border)); box-shadow: none; opacity: 1; transform: none;"><div class="flex-shrink-0"><img alt="Mastercard" class="h-8 w-12 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png"></div><div class="ml-4 flex-grow"><p class="font-medium text-card-foreground">Mastercard **** 0912</p><p class="text-sm text-muted-foreground">Pay with your Mastercard</p></div><div class="ml-4 flex h-6 w-6 items-center justify-center rounded-full border-2" style="border-color: hsl(var(--border));"></div></div><div class="flex items-center p-4 rounded-lg border cursor-pointer transition-all duration-300 hover:bg-muted/50" role="radio" aria-checked="false" tabindex="0" style="border-color: hsl(var(--border)); box-shadow: none; opacity: 1; transform: none;"><div class="flex-shrink-0"><img alt="Paypal" class="h-8 w-12 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/b/b7/PayPal_Logo_Icon_2014.svg"></div><div class="ml-4 flex-grow"><p class="font-medium text-card-foreground">Pay with Paypal</p><p class="text-sm text-muted-foreground">Split into 4 interest-free payments</p></div><div class="ml-4 flex h-6 w-6 items-center justify-center rounded-full border-2" style="border-color: hsl(var(--border));"></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.