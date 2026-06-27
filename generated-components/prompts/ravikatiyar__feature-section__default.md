# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ravikatiyar/feature-section/default
- Registry URL: https://21st.dev/r/ravikatiyar/feature-section
- Author: ravikatiyar
- Component slug: feature-section
- Demo slug: default
- Title: feature-section
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ravikatiyar/feature-section with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ravikatiyar__feature-section__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ravikatiyar__feature-section__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="bg-background w-full"><section class="w-full max-w-6xl mx-auto py-12 md:py-20 px-4"><div class="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12"><div class="text-center lg:text-left"><h2 class="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Designed <span class="relative inline-block">for you<svg viewBox="0 0 120 6" class="absolute left-0 bottom-0 -mb-1 w-full" aria-hidden="true"><path d="M1 4.5C25.46 1.63 78.43 1.39 119 4.5" stroke="#f472b6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg></span></h2><p class="mt-4 text-lg text-muted-foreground max-w-xl">Start from scratch or explore templates created by our community.</p></div><div class="flex-shrink-0"><img alt="Feature illustration" class="w-48 h-auto" src="https://tally.so/images/demo/v2/designed-for-you.png"></div></div><div class="rounded-xl border bg-card text-card-foreground p-6 md:p-8" style="opacity: 1;"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10"><div class="flex flex-col items-start" style="opacity: 1; transform: none;"><div class="mb-3 text-pink-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette" aria-hidden="true"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle></svg></div><h3 class="font-semibold text-foreground mb-2">Creators</h3><ul class="space-y-1.5 text-muted-foreground"><li><span>Sell products online</span></li><li><span>Grow your newsletter</span></li><li><span>Receive contact form messages</span></li></ul></div><div class="flex flex-col items-start" style="opacity: 1; transform: none;"><div class="mb-3 text-pink-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flask-conical" aria-hidden="true"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg></div><h3 class="font-semibold text-foreground mb-2">Product</h3><ul class="space-y-1.5 text-muted-foreground"><li><span>Gather audience feedback</span></li><li><span>Receive feature requests</span></li><li><a href="#" class="hover:text-primary hover:underline underline-offset-2 transition-colors">Conduct user research</a></li></ul></div><div class="flex flex-col items-start" style="opacity: 1; transform: none;"><div class="mb-3 text-pink-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-megaphone" aria-hidden="true"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg></div><h3 class="font-semibold text-foreground mb-2">Marketing</h3><ul class="space-y-1.5 text-muted-foreground"><li><span>Generate leads</span></li><li><span>Register users</span></li><li><span>Measure customer satisfaction</span></li></ul></div><div class="flex flex-col items-start" style="opacity: 1; transform: none;"><div class="mb-3 text-pink-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div><h3 class="font-semibold text-foreground mb-2">HR</h3><ul class="space-y-1.5 text-muted-foreground"><li><span>Evaluate employee engagement</span></li><li><span>Receive job applications</span></li><li><span>Create exit surveys</span></li></ul></div><div class="flex flex-col items-start" style="opacity: 1; transform: none;"><div class="mb-3 text-pink-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building" aria-hidden="true"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg></div><h3 class="font-semibold text-foreground mb-2">Office</h3><ul class="space-y-1.5 text-muted-foreground"><li><span>Organize team events</span></li><li><span>Receive help desk tickets</span></li><li><span>Collect internal suggestions</span></li></ul></div><div class="flex flex-col items-start" style="opacity: 1; transform: none;"><div class="mb-3 text-pink-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div><h3 class="font-semibold text-foreground mb-2">Personal</h3><ul class="space-y-1.5 text-muted-foreground"><li><span>Create an online quiz</span></li><li><span>Send an RSVP form</span></li><li><span>Organize a volunteer signup</span></li></ul></div></div><div class="mt-12" style="opacity: 1; transform: none;"><a href="#" class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-6">Browse templates</a></div></div></section></div></div></div></div>
```

## Public registry source files

No public registry source files were available.