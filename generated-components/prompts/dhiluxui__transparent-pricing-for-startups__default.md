# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/dhiluxui/transparent-pricing-for-startups/default
- Registry URL: https://21st.dev/r/dhiluxui/transparent-pricing-for-startups
- Author: dhiluxui
- Component slug: transparent-pricing-for-startups
- Demo slug: default
- Title: transparent-pricing-for-startups
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/dhiluxui/transparent-pricing-for-startups with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/dhiluxui__transparent-pricing-for-startups__default.html
- Local screenshot file: generated-21st-prompts/screenshots/dhiluxui__transparent-pricing-for-startups__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="App bg"><div class="relative min-h-screen w-full flex flex-col items-center justify-center p-4 overflow-hidden app-container"><div class="shape shape-1"></div><div class="shape shape-2"></div><main class="relative z-10 flex flex-col items-center w-full max-w-5xl"><header class="text-center mb-16"><h1 class="text-4xl md:text-5xl font-bold tracking-tight" style="color: var(--text-primary);">Simple Transparent Pricing for Startups</h1><div role="radiogroup" aria-labelledby="pricing-toggle-label" class="mt-6 flex justify-center items-center gap-4 font-medium" style="color: var(--text-secondary);"><span id="pricing-toggle-label" class="sr-only">Pricing Mode</span><label for="toggle" class="">Design &amp; Dev</label><div class="relative"><input id="toggle" class="sr-only" role="switch" aria-checked="false" type="checkbox"><label for="toggle" class="flex items-center cursor-pointer w-14 h-8 rounded-full p-1 transition-colors duration-300"><div class="w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300"></div></label></div><label for="toggle" class="opacity-70">Design Only</label></div></header><div class="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl"><section class="pricing-card-wrapper" aria-labelledby="card-title-landing" style="--angle: 0deg; --color-1: #4f46e5; --color-2: #3b82f6;"><div class="pricing-card"><div class="p-8 flex flex-col items-center h-full" style="color: var(--card-text-primary);"><h2 id="card-title-landing" class="text-sm font-bold rounded-full px-4 py-2 inline-flex items-center gap-2 self-center" style="background-color: var(--card-feature-bg);"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>LANDING PAGE</h2><p class="text-7xl lg:text-8xl font-black my-4" aria-label="Price: $2500">$2500</p><p class="text-sm font-medium tracking-widest" style="color: var(--card-text-secondary);">FIXED PRICE</p><div class="card-details mt-8 flex flex-col flex-grow w-full "><p class="text-center text-sm" style="color: var(--card-text-secondary);">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><ul class="flex flex-wrap justify-center gap-2 my-8" aria-label="Features included in this plan"><li class="text-xs font-medium px-3 py-1 rounded-full" style="background-color: var(--card-feature-bg);">Wireframes</li><li class="text-xs font-medium px-3 py-1 rounded-full" style="background-color: var(--card-feature-bg);">Full copywriting</li><li class="text-xs font-medium px-3 py-1 rounded-full" style="background-color: var(--card-feature-bg);">Figma Design</li><li class="text-xs font-medium px-3 py-1 rounded-full" style="background-color: var(--card-feature-bg);">Unlimited 3D models</li><li class="text-xs font-medium px-3 py-1 rounded-full" style="background-color: var(--card-feature-bg);">Framer development</li><li class="text-xs font-medium px-3 py-1 rounded-full" style="background-color: var(--card-feature-bg);">Three rounds of revisions</li><li class="text-xs font-medium px-3 py-1 rounded-full" style="background-color: var(--card-feature-bg);">1 month of free support</li></ul><button class="mt-auto w-full font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2" aria-label="Book a twenty minute call" style="background-color: var(--card-button-bg);"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>Book a 20-min call</button></div></div></div></section><section class="pricing-card-wrapper" aria-labelledby="card-title-multipage" style="--angle: 0deg; --color-1: #16a34a; --color-2: #22c55e;"><div class="pricing-card"><div class="p-8 flex flex-col items-center h-full" style="color: var(--card-text-primary);"><h2 id="card-title-multipage" class="text-sm font-bold rounded-full px-4 py-2 inline-flex items-center gap-2 self-center" style="background-color: var(--card-feature-bg);"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"></circle></svg>MULTIPAGE WEBSITE</h2><p class="text-7xl lg:text-8xl font-black my-4" aria-label="Price: $5000">$5000</p><p class="text-sm font-medium tracking-widest" style="color: var(--card-text-secondary);">PRICE MAY CHANGE</p><div class="card-details mt-8 flex flex-col flex-grow w-full "><p class="text-center text-sm" style="color: var(--card-text-secondary);">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><ul class="flex flex-wrap justify-center gap-2 my-8" aria-label="Features included in this plan"><li class="text-xs font-medium px-3 py-1 rounded-full" style="background-color: var(--card-feature-bg);">Wireframes</li><li class="text-xs font-medium px-3 py-1 rounded-full" style="background-color: var(--card-feature-bg);">Full copywriting</li><li class="text-xs font-medium px-3 py-1 rounded-full" style="background-color: var(--card-feature-bg);">Figma Design</li><li class="text-xs font-medium px-3 py-1 rounded-full" style="background-color: var(--card-feature-bg);">Unlimited 3D models</li><li class="text-xs font-medium px-3 py-1 rounded-full" style="background-color: var(--card-feature-bg);">Framer development</li><li class="text-xs font-medium px-3 py-1 rounded-full" style="background-color: var(--card-feature-bg);">Three rounds of revisions</li><li class="text-xs font-medium px-3 py-1 rounded-full" style="background-color: var(--card-feature-bg);">1 month of free support</li></ul><button class="mt-auto w-full font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2" aria-label="Book a twenty minute call" style="background-color: var(--card-button-bg);"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>Book a 20-min call</button></div></div></div></section></div></main></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.