# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ruixenui/checkout-form/default
- Registry URL: https://21st.dev/r/ruixenui/checkout-form
- Author: ruixenui
- Component slug: checkout-form
- Demo slug: default
- Title: checkout-form
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ruixenui/checkout-form with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ruixenui__checkout-form__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ruixenui__checkout-form__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex flex-col items-center justify-center min-h-screen bg-background p-6"><div class="bg-card text-card-foreground w-full max-w-md shadow-xl border rounded-2xl"><div class="flex flex-col space-y-1.5 p-6"><h3 class="text-lg font-semibold tracking-tight">Order Summary</h3></div><div class="p-6 pt-0 space-y-6"><div><div class="flex items-center gap-2 mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin h-4 w-4 text-muted-foreground" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg><span class="text-sm font-medium">Delivery Address</span></div><p class="text-sm text-muted-foreground">742 Evergreen Terrace</p><p class="text-sm text-muted-foreground">Springfield, USA</p></div><div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full"></div><div><div class="flex items-center gap-2 mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card h-4 w-4 text-muted-foreground" aria-hidden="true"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg><span class="text-sm font-medium">Billing Method</span></div><p class="text-sm text-muted-foreground">Mastercard</p><p class="text-sm text-muted-foreground">**** **** **** 1234</p></div><div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full"></div><div><div class="flex items-center gap-2 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tag h-4 w-4 text-muted-foreground" aria-hidden="true"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle></svg><span class="text-sm font-medium">Apply Discount Code</span></div><div class="flex gap-2"><input class="flex h-9 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50 flex-1" placeholder="Enter discount code"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 bg-secondary text-secondary-foreground shadow-sm shadow-black/5 hover:bg-secondary/80 h-9 px-4 py-2">Redeem</button></div></div><div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full"></div><div><span class="text-sm font-medium">Order Total</span><div class="grid grid-cols-2 gap-y-2 text-sm mt-2"><span class="text-muted-foreground">Item Total:</span><span class="text-right font-medium">$180.00</span><span class="text-muted-foreground">Delivery Fee:</span><span class="text-right font-medium">$15.00</span><span class="text-muted-foreground">Taxes:</span><span class="text-right font-medium">$25.00</span></div></div></div></div><div class="w-full max-w-md mt-4 flex items-center justify-between rounded-xl border px-4 py-3 bg-card shadow-lg"><span class="text-lg font-bold">$220.00</span><button class="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow-sm shadow-black/5 hover:bg-primary/90 h-9 py-2 px-6">Place Order</button></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.