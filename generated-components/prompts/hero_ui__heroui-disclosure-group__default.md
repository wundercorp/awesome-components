# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hero_ui/heroui-disclosure-group/default
- Registry URL: https://21st.dev/r/hero_ui/heroui-disclosure-group
- Author: hero_ui
- Component slug: heroui-disclosure-group
- Demo slug: default
- Title: heroui-disclosure-group
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hero_ui/heroui-disclosure-group with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hero_ui__heroui-disclosure-group__default.html
- Local screenshot file: generated-21st-prompts/screenshots/hero_ui__heroui-disclosure-group__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="heroui-disclosure-demo w-full max-w-md" style="--accent: oklch(62.04% 0.195 253.83); --accent-hover: oklch(55.6% 0.205 253.83); --accent-foreground: oklch(99.11% 0 0); --heroui-disclosure-muted: oklch(55.2% 0.016 285.938); --heroui-disclosure-border: oklch(89.4% 0.004 286.32); --heroui-disclosure-surface: oklch(100% 0 0);"><div class="flex flex-col gap-4 bg-transparent p-4"><div data-slot="disclosure-group" class="disclosure-group" data-rac=""><div data-slot="disclosure" class="disclosure" data-rac="" data-expanded="true"><h3 data-slot="disclosure-heading" class="disclosure__heading"><button id="react-aria7927225257-«r1»" data-slot="button" class="button button--md button--secondary w-full border-none" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" aria-expanded="true" aria-controls="react-aria7927225257-«r2»" slot="trigger"><div class="flex w-full items-center justify-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-qr-code size-4" aria-hidden="true"><rect width="5" height="5" x="3" y="3" rx="1"></rect><rect width="5" height="5" x="16" y="3" rx="1"></rect><rect width="5" height="5" x="3" y="16" rx="1"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg>Preview HeroUI Native</div><svg aria-hidden="true" aria-label="Chevron down icon" fill="none" height="16" role="presentation" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" class="disclosure__indicator" data-expanded="true" data-slot="disclosure-indicator" style="color: oklch(0.452 0.016 285.938);"><path clip-rule="evenodd" d="M2.97 5.47a.75.75 0 0 1 1.06 0L8 9.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06" fill="currentColor" fill-rule="evenodd"></path></svg></button></h3><div data-expanded="true" data-slot="disclosure-content" class="disclosure__content" data-rac="" id="react-aria7927225257-«r2»" role="group" aria-labelledby="react-aria7927225257-«r1»" aria-hidden="false" style="--disclosure-panel-width: auto; --disclosure-panel-height: auto;"><div class="disclosure__body" data-slot="disclosure-body"><div class="disclosure__body-inner mx-2 flex flex-col items-center gap-2 p-4 text-center"><p class="text-sm" style="color: oklch(0.452 0.016 285.938);">Scan this QR code with your camera app to preview the HeroUI native components.</p><img alt="Expo Go QR Code" class="aspect-square w-full max-w-54 object-cover" src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/images/qr-code-native.png"><p class="text-sm" style="color: oklch(0.452 0.016 285.938);">Expo must be installed on your device.</p><button data-slot="button" class="button button--md button--primary mt-4" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" id="react-aria7927225257-«r5»">Preview on Expo Go</button></div></div></div></div><hr data-orientation="horizontal" data-slot="separator" role="separator" class="separator separator--horizontal separator--default my-2"><div data-slot="disclosure" class="disclosure" data-rac=""><h3 data-slot="disclosure-heading" aria-label="Download HeroUI Native" class="disclosure__heading"><button id="react-aria7927225257-«r8»" data-slot="button" class="button button--md button--tertiary w-full border-none bg-transparent" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" aria-expanded="false" aria-controls="react-aria7927225257-«r9»" slot="trigger"><div class="flex w-full items-center justify-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-apple size-4" aria-hidden="true"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path><path d="M10 2c1 .5 2 2 2 5"></path></svg>Download App</div><svg aria-hidden="true" aria-label="Chevron down icon" fill="none" height="16" role="presentation" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" class="disclosure__indicator" data-slot="disclosure-indicator" style="color: oklch(0.452 0.016 285.938);"><path clip-rule="evenodd" d="M2.97 5.47a.75.75 0 0 1 1.06 0L8 9.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06" fill="currentColor" fill-rule="evenodd"></path></svg></button></h3><div data-slot="disclosure-content" class="disclosure__content" data-rac="" id="react-aria7927225257-«r9»" role="group" aria-labelledby="react-aria7927225257-«r8»" aria-hidden="true" hidden="until-found" style="--disclosure-panel-width: 0px; --disclosure-panel-height: 0px;"><div class="disclosure__body" data-slot="disclosure-body"><div class="disclosure__body-inner mx-2 flex flex-col items-center gap-2 p-4 text-center"><p class="text-sm" style="color: oklch(0.452 0.016 285.938);">Download the HeroUI native app to explore our mobile components directly on your device.</p><img alt="App Store QR Code" class="aspect-square w-full max-w-54 object-cover" src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/images/qr-code-native.png"><p class="text-sm" style="color: oklch(0.452 0.016 285.938);">Available on iOS and Android devices.</p><button data-slot="button" class="button button--md button--primary mt-4" data-rac="" type="button" tabindex="0" data-react-aria-pressable="true" id="react-aria7927225257-«rc»"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-apple size-4" aria-hidden="true"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path><path d="M10 2c1 .5 2 2 2 5"></path></svg>Download on App Store</button></div></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.