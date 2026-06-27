# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/fahadyaseen001/weather-widget/weather-widget-demo
- Registry URL: https://21st.dev/r/fahadyaseen001/weather-widget
- Author: fahadyaseen001
- Component slug: weather-widget
- Demo slug: weather-widget-demo
- Title: weather-widget
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/fahadyaseen001/weather-widget with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/fahadyaseen001__weather-widget__weather-widget-demo.html
- Local screenshot file: generated-21st-prompts/screenshots/fahadyaseen001__weather-widget__weather-widget-demo.png

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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="absolute z-10 top-4 right-14 flex flex-col items-end gap-1"><button type="button" role="combobox" aria-controls="radix-_r_0_" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" class="flex w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 gap-2 h-8"><span style="pointer-events: none;">Basic Demo</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></div><div class="flex w-full justify-center relative"><div class="flex justify-center p-8"><div class="border text-card-foreground overflow-hidden rounded-xl border-none bg-gradient-to-br from-background/90 to-muted/90 backdrop-blur shadow-md" role="region" aria-live="polite" aria-atomic="true" aria-label="Weather information" style="width: 16rem;"><div id="weather-update-announcement" class="sr-only" aria-live="assertive"></div><div class="p-4 text-foreground"><div class="p-4 text-center" role="alert" style="opacity: 1;"><p class="text-sm text-destructive mb-2">Click 'Get Weather' to access your location</p><button class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-8 px-3 py-2" aria-label="Allow location access">Get Weather</button></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.