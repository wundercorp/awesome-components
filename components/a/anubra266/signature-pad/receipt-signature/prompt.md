# Build Signature Pad in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Signature Pad screenshot](screenshot.png)

## Component

- Author group: `anubra266`
- Component: `signature-pad`
- Variant: `receipt-signature`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: anubra266
- Component slug: signature-pad
- Demo slug: receipt-signature
- Title: signature-pad
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"><div class="max-w-sm w-full"><div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm"><div class="border-b border-gray-200 dark:border-gray-700 p-4"><div class="flex items-center justify-between"><div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-receipt w-5 h-5 text-gray-600 dark:text-gray-400" aria-hidden="true"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg><span class="font-semibold text-gray-900 dark:text-gray-100">Store Receipt</span></div><span class="text-sm text-gray-500 dark:text-gray-400">#12345</span></div><div class="mt-2 text-xs text-gray-500 dark:text-gray-400">Date: 6/27/2026</div></div><div class="p-4 space-y-2"><div class="flex justify-between text-sm"><span class="text-gray-600 dark:text-gray-400">Coffee</span><span class="text-gray-900 dark:text-gray-100">$4.50</span></div><div class="flex justify-between text-sm"><span class="text-gray-600 dark:text-gray-400">Sandwich</span><span class="text-gray-900 dark:text-gray-100">$8.75</span></div><div class="flex justify-between text-sm"><span class="text-gray-600 dark:text-gray-400">Tax</span><span class="text-gray-900 dark:text-gray-100">$1.06</span></div><div class="border-t border-gray-200 dark:border-gray-700 pt-2 flex justify-between font-semibold"><span class="text-gray-900 dark:text-gray-100">Total</span><span class="text-gray-900 dark:text-gray-100">$14.31</span></div></div><div class="border-t border-gray-200 dark:border-gray-700 p-4 space-y-3"><div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg><span class="text-sm text-gray-600 dark:text-gray-400">Payment: Visa ending in 1234</span></div><div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg><span class="text-sm text-gray-600 dark:text-gray-400">Cashier: John Smith</span></div></div><div class="border-t border-gray-200 dark:border-gray-700 p-4 space-y-3"><div class="text-center"><span class="text-sm font-medium text-gray-900 dark:text-gray-100">Customer Signature</span></div><div data-scope="signature-pad" data-part="root" id="signature-«r0»"><div data-scope="signature-pad" data-part="control" tabindex="0" id="signature-control-«r0»" role="application" aria-roledescription="signature pad" aria-label="signature pad" class="relative w-full h-24 bg-gray-50 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-600" style="position: relative; touch-action: none; user-select: none;"><svg data-scope="signature-pad" data-part="segment" class="w-full h-full stroke-gray-900 dark:stroke-gray-100 fill-gray-900 dark:fill-gray-100" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; pointer-events: none;"><title>Signature</title></svg><button data-scope="signature-pad" data-part="clear-trigger" type="button" aria-label="clear signature" hidden="" class="absolute top-1 right-1 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-xs">Clear</button><div data-scope="signature-pad" data-part="guide" class="absolute bottom-3 left-2 right-2 border-b border-dashed border-gray-400 dark:border-gray-500"></div></div></div><div class="text-center"><span class="text-xs text-gray-500 dark:text-gray-400">Please sign above</span></div></div><div class="border-t border-gray-200 dark:border-gray-700 p-4 text-center"><p class="text-xs text-gray-500 dark:text-gray-400">Thank you for your purchase!</p><p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Keep this receipt for your records</p></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
