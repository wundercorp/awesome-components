# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hero_ui/heroui-accordion/custom-styles
- Registry URL: https://21st.dev/r/hero_ui/heroui-accordion
- Author: hero_ui
- Component slug: heroui-accordion
- Demo slug: custom-styles
- Title: heroui-accordion
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hero_ui/heroui-accordion with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hero_ui__heroui-accordion__custom-styles.html
- Local screenshot file: generated-21st-prompts/screenshots/hero_ui__heroui-accordion__custom-styles.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex min-h-screen w-full items-center justify-center p-8"><div data-slot="accordion" class="accordion accordion--surface w-full max-w-md rounded-2xl" data-rac=""><div data-slot="accordion-item" class="accordion__item group/item" data-rac=""><h3 data-slot="accordion-heading" class="accordion__heading"><button id="react-aria6507298276-«r1»" data-slot="accordion-trigger" class="accordion__trigger group flex items-center gap-2" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" aria-expanded="false" aria-controls="react-aria6507298276-«r2»" slot="trigger"><img alt="Set Up Notifications" class="h-11 w-11 transition-[scale,rotate] duration-300 ease-out group-hover/item:scale-110 group-hover/item:-rotate-6 group-hover/item:drop-shadow-lg" src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/3dicons/bell-small.png"><div class="flex flex-col gap-0 text-left"><span class="font-medium leading-5">Set Up Notifications</span><span class="font-normal leading-6 text-muted/80">Receive account activity updates</span></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down accordion__indicator text-muted/50 [&amp;&gt;svg]:size-4" aria-hidden="true" data-slot="accordion-indicator"><path d="m6 9 6 6 6-6"></path></svg></button></h3><div data-slot="accordion-panel" class="accordion__panel" data-rac="" id="react-aria6507298276-«r2»" role="group" aria-labelledby="react-aria6507298276-«r1»" aria-hidden="true" hidden="until-found" style="--disclosure-panel-width: 0px; --disclosure-panel-height: 0px;"><div class="accordion__body" data-slot="accordion-body"><div class="accordion__body-inner text-muted/80">Stay informed about your account activity with real-time notifications.</div></div></div></div><div data-slot="accordion-item" class="accordion__item group/item" data-rac=""><h3 data-slot="accordion-heading" class="accordion__heading"><button id="react-aria6507298276-«r6»" data-slot="accordion-trigger" class="accordion__trigger group flex items-center gap-2" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" aria-expanded="false" aria-controls="react-aria6507298276-«r7»" slot="trigger"><img alt="Set up Browser Extension" class="h-11 w-11 transition-[scale,rotate] duration-300 ease-out group-hover/item:scale-110 group-hover/item:-rotate-6 group-hover/item:drop-shadow-lg" src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/3dicons/compass-small.png"><div class="flex flex-col gap-0 text-left"><span class="font-medium leading-5">Set up Browser Extension</span><span class="font-normal leading-6 text-muted/80">Connect your browser to your account</span></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down accordion__indicator text-muted/50 [&amp;&gt;svg]:size-4" aria-hidden="true" data-slot="accordion-indicator"><path d="m6 9 6 6 6-6"></path></svg></button></h3><div data-slot="accordion-panel" class="accordion__panel" data-rac="" id="react-aria6507298276-«r7»" role="group" aria-labelledby="react-aria6507298276-«r6»" aria-hidden="true" hidden="until-found" style="--disclosure-panel-width: 0px; --disclosure-panel-height: 0px;"><div class="accordion__body" data-slot="accordion-body"><div class="accordion__body-inner text-muted/80">Enhance your browsing experience by installing our official browser extension.</div></div></div></div><div data-slot="accordion-item" class="accordion__item group/item" data-rac=""><h3 data-slot="accordion-heading" class="accordion__heading"><button id="react-aria6507298276-«rb»" data-slot="accordion-trigger" class="accordion__trigger group flex items-center gap-2" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" aria-expanded="false" aria-controls="react-aria6507298276-«rc»" slot="trigger"><img alt="Mint Collectible" class="h-11 w-11 transition-[scale,rotate] duration-300 ease-out group-hover/item:scale-110 group-hover/item:-rotate-6 group-hover/item:drop-shadow-lg" src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/3dicons/mint-collective-small.png"><div class="flex flex-col gap-0 text-left"><span class="font-medium leading-5">Mint Collectible</span><span class="font-normal leading-6 text-muted/80">Create your first collectible</span></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down accordion__indicator text-muted/50 [&amp;&gt;svg]:size-4" aria-hidden="true" data-slot="accordion-indicator"><path d="m6 9 6 6 6-6"></path></svg></button></h3><div data-slot="accordion-panel" class="accordion__panel" data-rac="" id="react-aria6507298276-«rc»" role="group" aria-labelledby="react-aria6507298276-«rb»" aria-hidden="true" hidden="until-found" style="--disclosure-panel-width: 0px; --disclosure-panel-height: 0px;"><div class="accordion__body" data-slot="accordion-body"><div class="accordion__body-inner text-muted/80">Begin your journey into the world of digital collectibles by creating your first NFT.</div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.