# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hero_ui/heroui-accordion/without-separator
- Registry URL: https://21st.dev/r/hero_ui/heroui-accordion
- Author: hero_ui
- Component slug: heroui-accordion
- Demo slug: without-separator
- Title: heroui-accordion
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hero_ui/heroui-accordion with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hero_ui__heroui-accordion__without-separator.html
- Local screenshot file: generated-21st-prompts/screenshots/hero_ui__heroui-accordion__without-separator.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-screen w-full items-center justify-center p-8"><div data-slot="accordion" class="accordion w-full max-w-md" data-rac=""><div data-hide-separator="true" data-slot="accordion-item" class="accordion__item" data-rac=""><h3 data-slot="accordion-heading" class="accordion__heading"><button id="react-aria2493052150-«r1»" data-slot="accordion-trigger" class="accordion__trigger" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" aria-expanded="false" aria-controls="react-aria2493052150-«r2»" slot="trigger"><span class="mr-3 size-4 shrink-0 text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg></span>How do I place an order?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down accordion__indicator" aria-hidden="true" data-slot="accordion-indicator"><path d="m6 9 6 6 6-6"></path></svg></button></h3><div data-slot="accordion-panel" class="accordion__panel" data-rac="" id="react-aria2493052150-«r2»" role="group" aria-labelledby="react-aria2493052150-«r1»" aria-hidden="true" hidden="until-found" style="--disclosure-panel-width: 0px; --disclosure-panel-height: 0px;"><div class="accordion__body" data-slot="accordion-body"><div class="accordion__body-inner">Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.</div></div></div></div><div data-hide-separator="true" data-slot="accordion-item" class="accordion__item" data-rac=""><h3 data-slot="accordion-heading" class="accordion__heading"><button id="react-aria2493052150-«r6»" data-slot="accordion-trigger" class="accordion__trigger" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" aria-expanded="false" aria-controls="react-aria2493052150-«r7»" slot="trigger"><span class="mr-3 size-4 shrink-0 text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-receipt" aria-hidden="true"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg></span>Can I modify or cancel my order?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down accordion__indicator" aria-hidden="true" data-slot="accordion-indicator"><path d="m6 9 6 6 6-6"></path></svg></button></h3><div data-slot="accordion-panel" class="accordion__panel" data-rac="" id="react-aria2493052150-«r7»" role="group" aria-labelledby="react-aria2493052150-«r6»" aria-hidden="true" hidden="until-found" style="--disclosure-panel-width: 0px; --disclosure-panel-height: 0px;"><div class="accordion__body" data-slot="accordion-body"><div class="accordion__body-inner">Yes, you can modify or cancel your order before it's shipped. Once your order is processed, you can't make changes.</div></div></div></div><div data-hide-separator="true" data-slot="accordion-item" class="accordion__item" data-rac=""><h3 data-slot="accordion-heading" class="accordion__heading"><button id="react-aria2493052150-«rb»" data-slot="accordion-trigger" class="accordion__trigger" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" aria-expanded="false" aria-controls="react-aria2493052150-«rc»" slot="trigger"><span class="mr-3 size-4 shrink-0 text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card" aria-hidden="true"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg></span>What payment methods do you accept?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down accordion__indicator" aria-hidden="true" data-slot="accordion-indicator"><path d="m6 9 6 6 6-6"></path></svg></button></h3><div data-slot="accordion-panel" class="accordion__panel" data-rac="" id="react-aria2493052150-«rc»" role="group" aria-labelledby="react-aria2493052150-«rb»" aria-hidden="true" hidden="until-found" style="--disclosure-panel-width: 0px; --disclosure-panel-height: 0px;"><div class="accordion__body" data-slot="accordion-body"><div class="accordion__body-inner">We accept all major credit cards, including Visa, Mastercard, and American Express.</div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.