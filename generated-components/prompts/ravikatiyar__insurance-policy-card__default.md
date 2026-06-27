# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ravikatiyar/insurance-policy-card/default
- Registry URL: https://21st.dev/r/ravikatiyar/insurance-policy-card
- Author: ravikatiyar
- Component slug: insurance-policy-card
- Demo slug: default
- Title: insurance-policy-card
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ravikatiyar/insurance-policy-card with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ravikatiyar__insurance-policy-card__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ravikatiyar__insurance-policy-card__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex h-screen w-full items-center justify-center bg-background p-4"><div class="w-full max-w-md rounded-2xl border bg-card p-6 text-card-foreground shadow-lg" style="opacity: 1; transform: none;"><div class="flex items-start justify-between"><div class="flex items-center gap-4"><span class="relative flex shrink-0 overflow-hidden rounded-full h-14 w-14 border-2 border-border"><img class="aspect-square h-full w-full" alt="Jeremy Allen White" src="https://i.pravatar.cc/150"></span><div><div class="flex items-center gap-2 text-sm text-muted-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock h-4 w-4" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><span>Expire Date</span></div><p class="mt-1 font-semibold text-card-foreground">21 Sep 2025</p><p class="text-xs text-muted-foreground">(2 years)</p></div></div><img alt="Policy QR Code" class="h-16 w-16 rounded-md" src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&amp;data=policy-NPX47208716"></div><div class="my-6 grid grid-cols-2 gap-x-4 gap-y-5 border-y border-border py-6"><div class="flex flex-col"><span class="text-xs text-muted-foreground">Client Name</span><span class="mt-1 flex items-center gap-2 text-sm font-medium text-card-foreground">Jeremy Allen White</span></div><div class="flex flex-col"><span class="text-xs text-muted-foreground">Date of Birth</span><span class="mt-1 flex items-center gap-2 text-sm font-medium text-card-foreground">09 Jan 1992</span></div><div class="flex flex-col"><span class="text-xs text-muted-foreground">City of Residence</span><span class="mt-1 flex items-center gap-2 text-sm font-medium text-card-foreground">Los Angeles, CA</span></div><div class="flex flex-col"><span class="text-xs text-muted-foreground">ID Number</span><span class="mt-1 flex items-center gap-2 text-sm font-medium text-card-foreground">756872004</span></div><div class="flex flex-col"><span class="text-xs text-muted-foreground">Policy Number</span><span class="mt-1 flex items-center gap-2 text-sm font-medium text-card-foreground">NPX 47208716<button aria-label="Copy policy number" class="cursor-pointer text-muted-foreground transition-colors hover:text-foreground" data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy h-4 w-4" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg></button></span></div><div class="flex flex-col"><span class="text-xs text-muted-foreground">Type of Insurance</span><span class="mt-1 flex items-center gap-2 text-sm font-medium text-card-foreground">Car Insurance</span></div><div class="flex flex-col"><span class="text-xs text-muted-foreground">Vehicle Information</span><span class="mt-1 flex items-center gap-2 text-sm font-medium text-card-foreground">Bentley Bentayga, 2019</span></div></div><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full">Update a Policy</button></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.