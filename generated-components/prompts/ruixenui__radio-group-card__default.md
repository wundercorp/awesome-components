# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ruixenui/radio-group-card/default
- Registry URL: https://21st.dev/r/ruixenui/radio-group-card
- Author: ruixenui
- Component slug: radio-group-card
- Demo slug: default
- Title: radio-group-card
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ruixenui/radio-group-card with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ruixenui__radio-group-card__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ruixenui__radio-group-card__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="max-w-md space-y-6"><p class="text-sm text-muted-foreground">Select the theme that best matches your environment.</p><div role="radiogroup" aria-required="false" dir="ltr" class="grid gap-4 sm:grid-cols-2" tabindex="0" style="outline: none;"><button type="button" role="radio" aria-checked="false" data-state="unchecked" value="light" class="relative flex flex-col items-start gap-2 rounded-xl border p-4 text-left shadow-sm transition-all hover:shadow-md focus-visible:outline-2 focus-visible:outline-ring/70 data-[state=checked]:border-gray-400 data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-50" tabindex="-1" data-radix-collection-item=""><div class="flex items-center gap-3"><span class="text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-medium" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 3v1"></path><path d="M12 20v1"></path><path d="M3 12h1"></path><path d="M20 12h1"></path><path d="m18.364 5.636-.707.707"></path><path d="m6.343 17.657-.707.707"></path><path d="m5.636 5.636.707.707"></path><path d="m17.657 17.657.707.707"></path></svg></span><span class="font-semibold">Light Mode</span></div><p class="text-sm text-muted-foreground">Bright and clean layout with light backgrounds.</p></button><button type="button" role="radio" aria-checked="false" data-state="unchecked" value="dark" class="relative flex flex-col items-start gap-2 rounded-xl border p-4 text-left shadow-sm transition-all hover:shadow-md focus-visible:outline-2 focus-visible:outline-ring/70 data-[state=checked]:border-gray-400 data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-50" tabindex="-1" data-radix-collection-item=""><div class="flex items-center gap-3"><span class="text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg></span><span class="font-semibold">Dark Mode</span></div><p class="text-sm text-muted-foreground">Dimmed layout that’s easy on the eyes at night.</p></button><button type="button" role="radio" aria-checked="true" data-state="checked" value="system" class="relative flex flex-col items-start gap-2 rounded-xl border p-4 text-left shadow-sm transition-all hover:shadow-md focus-visible:outline-2 focus-visible:outline-ring/70 data-[state=checked]:border-gray-400 data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-50" tabindex="-1" data-radix-collection-item=""><div class="flex items-center gap-3"><span class="text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-laptop" aria-hidden="true"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path></svg></span><span class="font-semibold">System</span></div><p class="text-sm text-muted-foreground">Automatically adapts to your device’s settings.</p><span data-state="checked" class="absolute top-3 right-3"><span class="relative flex size-3"><span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span><span class="relative inline-flex size-3 rounded-full bg-green-500 shadow-[0_0_6px_2px_rgba(34,197,94,0.6)]"></span></span></span></button></div><div class="mt-4 text-xs text-center text-muted-foreground">Minimal design • made by <a href="https://www.ruixen.com" target="_blank" class="underline">ruixen.com</a></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.