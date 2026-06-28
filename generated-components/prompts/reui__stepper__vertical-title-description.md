# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/reui/stepper/vertical-title-description
- Registry URL: https://21st.dev/r/reui/stepper
- Author: reui
- Component slug: stepper
- Demo slug: vertical-title-description
- Title: stepper
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/reui/stepper with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/reui__stepper__vertical-title-description.html
- Local screenshot file: generated-21st-prompts/screenshots/reui__stepper__vertical-title-description.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center"><div role="tablist" aria-orientation="vertical" data-slot="stepper" class="w-full flex flex-col items-center justify-center gap-10" data-orientation="vertical"><nav data-slot="stepper-nav" data-state="2" data-orientation="vertical" class="group/stepper-nav inline-flex data-[orientation=horizontal]:w-full data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col"><div data-slot="stepper-item" class="group/step flex justify-center group-data-[orientation=horizontal]/stepper-nav:flex-row group-data-[orientation=vertical]/stepper-nav:flex-col relative items-start not-last:flex-1" data-state="completed"><button role="tab" id="stepper-tab-1" aria-selected="false" aria-controls="stepper-panel-1" tabindex="-1" data-slot="stepper-trigger" data-state="completed" data-loading="false" class="cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 inline-flex rounded-full outline-none focus-visible:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-60 items-start pb-12 last:pb-0 gap-2.5"><div data-slot="stepper-indicator" data-state="completed" class="relative flex items-center overflow-hidden justify-center size-6 shrink-0 border-background bg-accent text-accent-foreground rounded-full text-xs data-[state=completed]:bg-green-500 data-[state=completed]:text-white data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:text-gray-500"><div class="absolute"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check size-4" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></div><div class="mt-0.5 text-left"><h3 data-slot="stepper-title" data-state="completed" class="text-sm font-medium leading-none">Step 1</h3><div data-slot="stepper-description" data-state="completed" class="text-sm text-muted-foreground">Desc for Step 1</div></div></button><div data-slot="stepper-separator" data-state="completed" class="rounded-full bg-muted group-data-[orientation=vertical]/stepper-nav:w-0.5 group-data-[orientation=horizontal]/stepper-nav:h-0.5 group-data-[orientation=horizontal]/stepper-nav:flex-1 absolute inset-y-0 top-7 left-3 -order-1 m-0 -translate-x-1/2 group-data-[orientation=vertical]/stepper-nav:h-[calc(100%-2rem)] group-data-[state=completed]/step:bg-green-500"></div></div><div data-slot="stepper-item" class="group/step flex justify-center group-data-[orientation=horizontal]/stepper-nav:flex-row group-data-[orientation=vertical]/stepper-nav:flex-col relative items-start not-last:flex-1" data-state="active"><button role="tab" id="stepper-tab-2" aria-selected="true" aria-controls="stepper-panel-2" tabindex="0" data-slot="stepper-trigger" data-state="active" data-loading="false" class="cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 inline-flex rounded-full outline-none focus-visible:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-60 items-start pb-12 last:pb-0 gap-2.5"><div data-slot="stepper-indicator" data-state="active" class="relative flex items-center overflow-hidden justify-center size-6 shrink-0 border-background bg-accent text-accent-foreground rounded-full text-xs data-[state=completed]:bg-green-500 data-[state=completed]:text-white data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:text-gray-500"><div class="absolute">2</div></div><div class="mt-0.5 text-left"><h3 data-slot="stepper-title" data-state="active" class="text-sm font-medium leading-none">Step 2</h3><div data-slot="stepper-description" data-state="active" class="text-sm text-muted-foreground">Desc for Step 2</div></div></button><div data-slot="stepper-separator" data-state="active" class="rounded-full bg-muted group-data-[orientation=vertical]/stepper-nav:w-0.5 group-data-[orientation=horizontal]/stepper-nav:h-0.5 group-data-[orientation=horizontal]/stepper-nav:flex-1 absolute inset-y-0 top-7 left-3 -order-1 m-0 -translate-x-1/2 group-data-[orientation=vertical]/stepper-nav:h-[calc(100%-2rem)] group-data-[state=completed]/step:bg-green-500"></div></div><div data-slot="stepper-item" class="group/step flex justify-center group-data-[orientation=horizontal]/stepper-nav:flex-row group-data-[orientation=vertical]/stepper-nav:flex-col relative items-start not-last:flex-1" data-state="inactive"><button role="tab" id="stepper-tab-3" aria-selected="false" aria-controls="stepper-panel-3" tabindex="-1" data-slot="stepper-trigger" data-state="inactive" data-loading="false" class="cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 inline-flex rounded-full outline-none focus-visible:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-60 items-start pb-12 last:pb-0 gap-2.5"><div data-slot="stepper-indicator" data-state="inactive" class="relative flex items-center overflow-hidden justify-center size-6 shrink-0 border-background bg-accent text-accent-foreground rounded-full text-xs data-[state=completed]:bg-green-500 data-[state=completed]:text-white data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:text-gray-500"><div class="absolute">3</div></div><div class="mt-0.5 text-left"><h3 data-slot="stepper-title" data-state="inactive" class="text-sm font-medium leading-none">Step 3</h3><div data-slot="stepper-description" data-state="inactive" class="text-sm text-muted-foreground">Desc for Step 3</div></div></button></div></nav><div data-slot="stepper-panel" data-state="2" class="text-sm w-56 text-center"><div data-slot="stepper-content" data-state="2" class="w-full">Step Step 2 content</div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.