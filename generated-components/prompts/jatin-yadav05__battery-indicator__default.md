# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/jatin-yadav05/battery-indicator/default
- Registry URL: https://21st.dev/r/jatin-yadav05/battery-indicator
- Author: jatin-yadav05
- Component slug: battery-indicator
- Demo slug: default
- Title: battery-indicator
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/jatin-yadav05/battery-indicator with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/jatin-yadav05__battery-indicator__default.html
- Local screenshot file: generated-21st-prompts/screenshots/jatin-yadav05__battery-indicator__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen flex items-center w-full p-8 transition-colors duration-300"><div class="max-w-4xl mx-auto space-y-8"><div class="rounded-lg border text-card-foreground shadow-sm bg-white dark:bg-neutral-900 border-gray-400 dark:border-neutral-700"><div class="p-6 space-y-6 pt-6"><div class="flex justify-center p-8 bg-gray-50 dark:bg-neutral-950 rounded-lg"><style>
      @keyframes lowBatteryPulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.4; }
      }
    </style><svg width="200" height="200" viewBox="0 0 68 34" class="text-gray-600 dark:text-gray-300" style="transition: 800ms; filter: drop-shadow(rgba(0, 0, 0, 0.2) 0px 1px 3px); stroke-width: 1.5;"><rect x="2" y="2" width="60" height="30" rx="4" ry="4" fill="transparent" stroke="currentColor" stroke-width="1.5" class="text-gray-400 dark:text-gray-500"></rect><rect x="62" y="11" width="4" height="12" rx="2" ry="2" fill="currentColor" class="text-gray-400 dark:text-gray-500"></rect><rect x="4" y="4" width="36.4" height="26" rx="3" ry="3" fill="#10b981" class="" style="transition: width 800ms;"></rect><text x="32" y="17" text-anchor="middle" dominant-baseline="middle" fill="#ffffff" font-size="10" font-weight="600" class="text-gray-900 dark:text-white">65</text></svg></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="space-y-4"><div><label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-gray-700 dark:text-gray-300" for="level-slider">Battery Level: 65%</label><input id="level-slider" min="0" max="100" class="w-full h-2 mt-2 bg-neutral-200 dark:bg-neutral-600 rounded-lg appearance-none cursor-pointer" type="range" value="65"></div><div class="flex gap-2 flex-wrap"><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 dark:border-neutral-600 dark:hover:bg-neutral-800 dark:text-gray-300">5%</button><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 dark:border-neutral-600 dark:hover:bg-neutral-800 dark:text-gray-300">25%</button><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 dark:border-neutral-600 dark:hover:bg-neutral-800 dark:text-gray-300">50%</button><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 dark:border-neutral-600 dark:hover:bg-neutral-800 dark:text-gray-300">75%</button><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 dark:border-neutral-600 dark:hover:bg-neutral-800 dark:text-gray-300">100%</button></div></div><div class="space-y-4"><div class="flex items-center space-x-2"><button type="button" role="switch" aria-checked="true" data-state="checked" value="on" class="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" id="percentage"><span data-state="checked" class="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"></span></button><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 dark:text-gray-300" for="percentage">Show Percentage</label></div><div><label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium mb-2 block text-gray-700 dark:text-gray-300">Theme</label><div class="grid grid-cols-2 gap-2"><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 capitalize dark:border-neutral-600 dark:hover:bg-neutral-800 dark:text-neutral-900 dark:hover:text-neutral-300">default</button><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 capitalize dark:border-neutral-600 dark:hover:bg-neutral-800 dark:text-gray-300">minimal</button><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 capitalize dark:border-neutral-600 dark:hover:bg-neutral-800 dark:text-gray-300">neon</button><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 capitalize dark:border-neutral-600 dark:hover:bg-neutral-800 dark:text-gray-300">glass</button></div></div></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.