# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ruixenui/modern-card-input/default
- Registry URL: https://21st.dev/r/ruixenui/modern-card-input
- Author: ruixenui
- Component slug: modern-card-input
- Demo slug: default
- Title: modern-card-input
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ruixenui/modern-card-input with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ruixenui__modern-card-input__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ruixenui__modern-card-input__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-md space-y-3"><label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium">Card Information</label><div class="relative rounded-xl border bg-background p-4 shadow-md flex flex-col gap-3 transition-all ring-0"><div class="relative"><input class="flex h-9 w-full border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50 peer rounded-xl pr-12" id="cardNumber" placeholder="Card number" aria-label="Card number" autocomplete="cc-number" type="tel" name="cardNumber"><div class="absolute inset-y-0 end-0 flex items-center justify-center pr-3 pointer-events-none text-muted-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card" aria-hidden="true"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg></div></div><div class="flex gap-2"><input class="flex h-9 w-full border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50 flex-1 rounded-xl" id="expiryDate" placeholder="MM/YY" aria-label="Expiry date in format MM YY" autocomplete="cc-exp" type="tel" name="expiryDate"><input class="flex h-9 w-full border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50 flex-1 rounded-xl" id="cvc" placeholder="CVC" aria-label="CVC" autocomplete="cc-csc" type="tel" name="cvc"></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.