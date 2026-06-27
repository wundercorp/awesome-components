# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ravikatiyar/onboarding-checklist/default
- Registry URL: https://21st.dev/r/ravikatiyar/onboarding-checklist
- Author: ravikatiyar
- Component slug: onboarding-checklist
- Demo slug: default
- Title: onboarding-checklist
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ravikatiyar/onboarding-checklist with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ravikatiyar__onboarding-checklist__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ravikatiyar__onboarding-checklist__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full bg-background flex items-center justify-center p-4"><div class="w-full max-w-4xl mx-auto bg-card text-card-foreground border rounded-2xl shadow-sm p-8 overflow-hidden" style="opacity: 1; transform: none;"><div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"><div class="flex flex-col"><h2 class="text-2xl font-bold tracking-tight">Get Started - It only takes 10 minutes</h2><p class="mt-2 text-muted-foreground">Please keep these documents and details ready for a smooth sign-up</p><ul class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4"><li class="flex flex-col" style="opacity: 1; transform: none;"><div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="ml-3 text-sm font-medium">PAN card</span></div></li><li class="flex flex-col" style="opacity: 1; transform: none;"><div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="ml-3 text-sm font-medium">GST number, if applicable</span></div></li><li class="flex flex-col" style="opacity: 1; transform: none;"><div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="ml-3 text-sm font-medium">FSSAI license</span></div><div class="ml-8 mt-1 text-xs text-muted-foreground">Don't have a FSSAI license? <a href="#" class="text-primary underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm">Apply here</a></div></li><li class="flex flex-col" style="opacity: 1; transform: none;"><div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="ml-3 text-sm font-medium">Menu &amp; profile food image</span></div><div class="ml-8 mt-1 text-xs text-muted-foreground">What is profile food image? <a href="#" class="text-primary underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm">Refer here</a></div></li><li class="flex flex-col" style="opacity: 1; transform: none;"><div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="ml-3 text-sm font-medium">Bank account details</span></div></li></ul></div><div class="relative group rounded-lg overflow-hidden cursor-pointer w-full aspect-video" style="opacity: 1; transform: none;"><div type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-«r0»" data-state="closed"><img alt="Video guide thumbnail" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://i.ytimg.com/vi/3yBgLxgwS1U/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLA9pydkJZGVZZ9Nrkz0I5ZO8F0Rsg"><div class="absolute inset-0 bg-black/30 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-play h-16 w-16 text-white/80 transform transition-all duration-300 group-hover:scale-110 group-hover:text-white" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.