# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/kavikatiyar/order-history/default
- Registry URL: https://21st.dev/r/kavikatiyar/order-history
- Author: kavikatiyar
- Component slug: order-history
- Demo slug: default
- Title: order-history
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/kavikatiyar/order-history with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/kavikatiyar__order-history__default.html
- Local screenshot file: generated-21st-prompts/screenshots/kavikatiyar__order-history__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex h-full w-full items-center justify-center bg-background p-10"><div class="w-full max-w-md rounded-lg border bg-card p-6 shadow-sm"><h2 class="mb-6 text-xl font-bold text-card-foreground">Order History</h2><ol class="relative border-l border-border/50 ml-4" style="opacity: 1;"><li class="mb-8 ml-8" style="opacity: 1; transform: none;"><span class="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-background bg-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-check h-4 w-4 text-white" aria-hidden="true"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg></span><div class="flex flex-col"><h3 class="font-semibold text-primary">Order Placed</h3><time class="text-sm text-muted-foreground">20 Jun 2024, 08:45</time></div></li><li class="mb-8 ml-8" style="opacity: 1; transform: none;"><span class="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-background bg-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package h-4 w-4 text-white" aria-hidden="true"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg></span><div class="flex flex-col"><h3 class="font-semibold text-primary">Order Processed</h3><time class="text-sm text-muted-foreground">21 Jun 2024, 02:30</time></div></li><li class="mb-8 ml-8" style="opacity: 1; transform: none;"><span class="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-background bg-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-warehouse h-4 w-4 text-white" aria-hidden="true"><path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"></path><path d="M6 18h12"></path><path d="M6 14h12"></path><rect width="12" height="12" x="6" y="10"></rect></svg></span><div class="flex flex-col"><h3 class="font-semibold text-primary">Pick up</h3><time class="text-sm text-muted-foreground">22 Jun 2024, 12:34</time></div></li><li class="mb-8 ml-8" aria-current="step" style="opacity: 1; transform: none;"><span class="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-background bg-primary/20"><span class="absolute h-full w-full animate-ping rounded-full bg-primary/50 opacity-75"></span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ship h-4 w-4 text-primary" aria-hidden="true"><path d="M12 10.189V14"></path><path d="M12 2v3"></path><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"></path><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg></span><div class="flex flex-col"><h3 class="font-semibold text-primary">Out for shipment</h3><time class="text-sm font-medium text-foreground/80">Today</time></div></li><li class="mb-8 ml-8" style="opacity: 1; transform: none;"><span class="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-background bg-muted"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package-check h-4 w-4 text-muted-foreground/50" aria-hidden="true"><path d="m16 16 2 2 4-4"></path><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path><path d="m7.5 4.27 9 5.15"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line></svg></span><div class="flex flex-col"><h3 class="font-semibold text-muted-foreground">Out for Delivery</h3><time class="text-sm text-muted-foreground">24 Jun 2024</time></div></li><li class="mb-8 ml-8" style="opacity: 1; transform: none;"><span class="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-background bg-muted"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house h-4 w-4 text-muted-foreground/50" aria-hidden="true"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg></span><div class="flex flex-col"><h3 class="font-semibold text-muted-foreground">Delivered</h3><time class="text-sm text-muted-foreground">24 Jun 2024</time></div></li></ol></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.