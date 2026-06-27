# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ravikatiyar/ride-booking-form/default
- Registry URL: https://21st.dev/r/ravikatiyar/ride-booking-form
- Author: ravikatiyar
- Component slug: ride-booking-form
- Demo slug: default
- Title: ride-booking-form
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ravikatiyar/ride-booking-form with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ravikatiyar__ride-booking-form__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ravikatiyar__ride-booking-form__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center w-full min-h-screen bg-muted"><div class="w-full max-w-6xl mx-auto p-4 lg:p-8 my-8"><div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-background rounded-lg overflow-hidden"><div class="p-4 sm:p-8" style="opacity: 1;"><div class="mb-6" style="opacity: 1; transform: none;"><span class="text-sm text-muted-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin inline-block h-4 w-4 mr-2" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>Chandigarh, IN<a href="#" class="ml-2 text-sm font-medium text-primary hover:underline">Change city</a></span></div><h1 class="text-4xl sm:text-5xl font-bold text-foreground mb-8" style="opacity: 1; transform: none;">Go anywhere with Uber</h1><form class="space-y-4"><div class="relative bg-muted/40 p-4 rounded-lg" style="opacity: 1; transform: none;"><div class="absolute left-6 top-9 bottom-9 w-px bg-border border-l border-dashed"></div><div class="relative flex items-center mb-2"><div class="z-10 bg-background p-1 rounded-full border"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin h-4 w-4 text-foreground" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></div><input placeholder="Pickup location" class="w-full pl-4 pr-10 py-2 bg-transparent text-foreground focus:outline-none" aria-label="Pickup location" type="text" value=""><button type="button" class="absolute right-2 p-1 text-muted-foreground hover:text-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send h-5 w-5" aria-hidden="true"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg></button></div><hr class="border-border mx-12"><div class="relative flex items-center mt-2"><div class="z-10 bg-background p-1 rounded-full border"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus h-4 w-4 text-foreground" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></div><input placeholder="Dropoff location" class="w-full pl-4 py-2 bg-transparent text-foreground focus:outline-none" aria-label="Dropoff location" type="text" value=""></div></div><div class="grid grid-cols-2 gap-4" style="opacity: 1; transform: none;"><div class="flex items-center bg-muted/40 rounded-lg px-4 py-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar h-5 w-5 text-muted-foreground" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg><span class="ml-3 text-foreground">Today</span></div><div class="flex items-center bg-muted/40 rounded-lg px-4 py-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock h-5 w-5 text-muted-foreground" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><span class="ml-3 text-foreground">Now</span><select aria-label="Select time" class="absolute opacity-0 inset-0 w-full h-full cursor-pointer"></select></div></div><div class="flex items-center space-x-4 pt-4" style="opacity: 1; transform: none;"><button type="submit" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8">See prices</button><a href="#" class="text-sm text-muted-foreground hover:text-foreground transition-colors group">Log in to see your recent activity<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right inline-block h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a></div></form></div><div class="hidden lg:block w-full h-full p-8" style="opacity: 1; transform: none;"><img alt="Illustration of a person getting into a car in a city" class="w-full h-full object-cover rounded-lg" src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=1344/height=896/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9hM2NmODU2NC1lMmE2LTQxOGMtYjliMC02NWRkMjg1YzEwMGIuanBn"></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.