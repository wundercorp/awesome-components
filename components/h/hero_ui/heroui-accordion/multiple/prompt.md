# Build Heroui Accordion in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Heroui Accordion screenshot](screenshot.png)

## Component

- Author group: `hero_ui`
- Component: `heroui-accordion`
- Variant: `multiple`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: hero_ui
- Component slug: heroui-accordion
- Demo slug: multiple
- Title: heroui-accordion
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-screen w-full items-center justify-center p-8"><div data-slot="accordion" class="accordion w-full max-w-md" data-rac=""><div data-slot="accordion-item" class="accordion__item" data-rac=""><h3 data-slot="accordion-heading" class="accordion__heading"><button id="react-aria292807978-«r1»" data-slot="accordion-trigger" class="accordion__trigger" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" aria-expanded="false" aria-controls="react-aria292807978-«r2»" slot="trigger">Getting Started<svg aria-hidden="true" aria-label="Chevron down icon" fill="none" height="16" role="presentation" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" class="accordion__indicator" data-slot="accordion-indicator"><path clip-rule="evenodd" d="M2.97 5.47a.75.75 0 0 1 1.06 0L8 9.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06" fill="currentColor" fill-rule="evenodd"></path></svg></button></h3><div data-slot="accordion-panel" class="accordion__panel" data-rac="" id="react-aria292807978-«r2»" role="group" aria-labelledby="react-aria292807978-«r1»" aria-hidden="true" hidden="until-found" style="--disclosure-panel-width: 0px; --disclosure-panel-height: 0px;"><div class="accordion__body" data-slot="accordion-body"><div class="accordion__body-inner">Learn the basics of HeroUI and how to integrate it into your React project. This section covers installation, setup, and your first component.</div></div></div></div><div data-slot="accordion-item" class="accordion__item" data-rac=""><h3 data-slot="accordion-heading" class="accordion__heading"><button id="react-aria292807978-«r6»" data-slot="accordion-trigger" class="accordion__trigger" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" aria-expanded="false" aria-controls="react-aria292807978-«r7»" slot="trigger">Core Concepts<svg aria-hidden="true" aria-label="Chevron down icon" fill="none" height="16" role="presentation" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" class="accordion__indicator" data-slot="accordion-indicator"><path clip-rule="evenodd" d="M2.97 5.47a.75.75 0 0 1 1.06 0L8 9.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06" fill="currentColor" fill-rule="evenodd"></path></svg></button></h3><div data-slot="accordion-panel" class="accordion__panel" data-rac="" id="react-aria292807978-«r7»" role="group" aria-labelledby="react-aria292807978-«r6»" aria-hidden="true" hidden="until-found" style="--disclosure-panel-width: 0px; --disclosure-panel-height: 0px;"><div class="accordion__body" data-slot="accordion-body"><div class="accordion__body-inner">Understand the core ideas behind HeroUI: variants, slots, theming tokens and accessibility built on React Aria.</div></div></div></div><div data-slot="accordion-item" class="accordion__item" data-rac=""><h3 data-slot="accordion-heading" class="accordion__heading"><button id="react-aria292807978-«rb»" data-slot="accordion-trigger" class="accordion__trigger" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" aria-expanded="false" aria-controls="react-aria292807978-«rc»" slot="trigger">Advanced Usage<svg aria-hidden="true" aria-label="Chevron down icon" fill="none" height="16" role="presentation" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" class="accordion__indicator" data-slot="accordion-indicator"><path clip-rule="evenodd" d="M2.97 5.47a.75.75 0 0 1 1.06 0L8 9.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06" fill="currentColor" fill-rule="evenodd"></path></svg></button></h3><div data-slot="accordion-panel" class="accordion__panel" data-rac="" id="react-aria292807978-«rc»" role="group" aria-labelledby="react-aria292807978-«rb»" aria-hidden="true" hidden="until-found" style="--disclosure-panel-width: 0px; --disclosure-panel-height: 0px;"><div class="accordion__body" data-slot="accordion-body"><div class="accordion__body-inner">Compose components, build custom variants, and integrate HeroUI with your design system.</div></div></div></div><div data-slot="accordion-item" class="accordion__item" data-rac=""><h3 data-slot="accordion-heading" class="accordion__heading"><button id="react-aria292807978-«rg»" data-slot="accordion-trigger" class="accordion__trigger" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" aria-expanded="false" aria-controls="react-aria292807978-«rh»" slot="trigger">Best Practices<svg aria-hidden="true" aria-label="Chevron down icon" fill="none" height="16" role="presentation" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" class="accordion__indicator" data-slot="accordion-indicator"><path clip-rule="evenodd" d="M2.97 5.47a.75.75 0 0 1 1.06 0L8 9.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06" fill="currentColor" fill-rule="evenodd"></path></svg></button></h3><div data-slot="accordion-panel" class="accordion__panel" data-rac="" id="react-aria292807978-«rh»" role="group" aria-labelledby="react-aria292807978-«rg»" aria-hidden="true" hidden="until-found" style="--disclosure-panel-width: 0px; --disclosure-panel-height: 0px;"><div class="accordion__body" data-slot="accordion-body"><div class="accordion__body-inner">Follow recommended patterns for performance, accessibility, and maintainable component composition.</div></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
