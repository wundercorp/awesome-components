# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hero_ui/heroui-accordion/default-expanded
- Registry URL: https://21st.dev/r/hero_ui/heroui-accordion
- Author: hero_ui
- Component slug: heroui-accordion
- Demo slug: default-expanded
- Title: heroui-accordion
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hero_ui/heroui-accordion with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hero_ui__heroui-accordion__default-expanded.html
- Local screenshot file: generated-21st-prompts/screenshots/hero_ui__heroui-accordion__default-expanded.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-screen w-full items-center justify-center p-8"><div data-slot="accordion" class="accordion w-full max-w-md" data-rac=""><div data-slot="accordion-item" class="accordion__item" data-rac="" data-expanded="true"><h3 data-slot="accordion-heading" class="accordion__heading"><button id="react-aria574485408-«r1»" data-slot="accordion-trigger" class="accordion__trigger" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" aria-expanded="true" aria-controls="react-aria574485408-«r2»" slot="trigger">How do I place an order?<svg aria-hidden="true" aria-label="Chevron down icon" fill="none" height="16" role="presentation" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" class="accordion__indicator" data-expanded="true" data-slot="accordion-indicator"><path clip-rule="evenodd" d="M2.97 5.47a.75.75 0 0 1 1.06 0L8 9.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06" fill="currentColor" fill-rule="evenodd"></path></svg></button></h3><div data-expanded="true" data-slot="accordion-panel" class="accordion__panel" data-rac="" id="react-aria574485408-«r2»" role="group" aria-labelledby="react-aria574485408-«r1»" aria-hidden="false" style="--disclosure-panel-width: auto; --disclosure-panel-height: auto;"><div class="accordion__body" data-slot="accordion-body"><div class="accordion__body-inner">Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.</div></div></div></div><div data-slot="accordion-item" class="accordion__item" data-rac=""><h3 data-slot="accordion-heading" class="accordion__heading"><button id="react-aria574485408-«r6»" data-slot="accordion-trigger" class="accordion__trigger" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" aria-expanded="false" aria-controls="react-aria574485408-«r7»" slot="trigger">Can I modify or cancel my order?<svg aria-hidden="true" aria-label="Chevron down icon" fill="none" height="16" role="presentation" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" class="accordion__indicator" data-slot="accordion-indicator"><path clip-rule="evenodd" d="M2.97 5.47a.75.75 0 0 1 1.06 0L8 9.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06" fill="currentColor" fill-rule="evenodd"></path></svg></button></h3><div data-slot="accordion-panel" class="accordion__panel" data-rac="" id="react-aria574485408-«r7»" role="group" aria-labelledby="react-aria574485408-«r6»" aria-hidden="true" hidden="until-found" style="--disclosure-panel-width: 0px; --disclosure-panel-height: 0px;"><div class="accordion__body" data-slot="accordion-body"><div class="accordion__body-inner">Yes, you can modify or cancel your order before it's shipped. Once your order is processed, you can't make changes.</div></div></div></div><div data-slot="accordion-item" class="accordion__item" data-rac=""><h3 data-slot="accordion-heading" class="accordion__heading"><button id="react-aria574485408-«rb»" data-slot="accordion-trigger" class="accordion__trigger" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" aria-expanded="false" aria-controls="react-aria574485408-«rc»" slot="trigger">What payment methods do you accept?<svg aria-hidden="true" aria-label="Chevron down icon" fill="none" height="16" role="presentation" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" class="accordion__indicator" data-slot="accordion-indicator"><path clip-rule="evenodd" d="M2.97 5.47a.75.75 0 0 1 1.06 0L8 9.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06" fill="currentColor" fill-rule="evenodd"></path></svg></button></h3><div data-slot="accordion-panel" class="accordion__panel" data-rac="" id="react-aria574485408-«rc»" role="group" aria-labelledby="react-aria574485408-«rb»" aria-hidden="true" hidden="until-found" style="--disclosure-panel-width: 0px; --disclosure-panel-height: 0px;"><div class="accordion__body" data-slot="accordion-body"><div class="accordion__body-inner">We accept all major credit cards, including Visa, Mastercard, and American Express.</div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.