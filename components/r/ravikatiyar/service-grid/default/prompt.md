# Build Service Grid in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Service Grid screenshot](screenshot.png)

## Component

- Author group: `ravikatiyar`
- Component: `service-grid`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ravikatiyar
- Component slug: service-grid
- Demo slug: default
- Title: service-grid
- Description: 

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

No reference metadata available.

## Rendered DOM snapshot

This is the rendered demo HTML extracted from the live preview. Use it to verify structure, class names, visible content, and layout.

```html
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full bg-background"><section class="w-full py-12 md:py-16 lg:py-20"><div class="container mx-auto px-4 md:px-6"><div class="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12"><div class="space-y-2"><h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">A world of experts, at your service</h2><p class="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Choose from thousands of services in 260 cities—provided by trusted pros.</p></div></div><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8" style="opacity: 1;"><a href="#" class="group flex flex-col items-center justify-start gap-3 text-center" style="opacity: 1; transform: none;"><div class="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28"><img alt="Chefs service icon" width="100" height="100" class="object-contain transition-transform duration-300 group-hover:scale-110" src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-5pHkFAOH2PdoeZ65oD86FZ0ikKXAvV.png&amp;w=320&amp;q=75"></div><span class="text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-primary">Chefs</span></a><a href="#" class="group flex flex-col items-center justify-start gap-3 text-center" style="opacity: 1; transform: none;"><div class="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28"><img alt="Prepared meals service icon" width="100" height="100" class="object-contain transition-transform duration-300 group-hover:scale-110" src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-cmFCjM4wAXdV4xpW6gHOyY8kbJo6B9.png&amp;w=320&amp;q=75"></div><span class="text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-primary">Prepared meals</span></a><a href="#" class="group flex flex-col items-center justify-start gap-3 text-center" style="opacity: 1; transform: none;"><div class="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28"><img alt="Catering service icon" width="100" height="100" class="object-contain transition-transform duration-300 group-hover:scale-110" src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-HbCnYirZv0o05ffcBstUMZcPgOwlWQ.png&amp;w=320&amp;q=75"></div><span class="text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-primary">Catering</span></a><a href="#" class="group flex flex-col items-center justify-start gap-3 text-center" style="opacity: 1; transform: none;"><div class="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28"><img alt="Photography service icon" width="100" height="100" class="object-contain transition-transform duration-300 group-hover:scale-110" src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-wnpD2WiW7gwjbHcIAcPhCbEuj7JNwY.png&amp;w=320&amp;q=75"></div><span class="text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-primary">Photography</span></a><a href="#" class="group flex flex-col items-center justify-start gap-3 text-center" style="opacity: 1; transform: none;"><div class="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28"><img alt="Personal training service icon" width="100" height="100" class="object-contain transition-transform duration-300 group-hover:scale-110" src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-oOxheUAwi87JIuaG4ebMbN4RqB9P8S.png&amp;w=320&amp;q=75"></div><span class="text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-primary">Personal training</span></a><a href="#" class="group flex flex-col items-center justify-start gap-3 text-center" style="opacity: 1; transform: none;"><div class="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28"><img alt="Massage service icon" width="100" height="100" class="object-contain transition-transform duration-300 group-hover:scale-110" src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-ZlnEb5GHMXqPR4L7WVSlbGZ6czxGrv.png&amp;w=320&amp;q=75"></div><span class="text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-primary">Massage</span></a><a href="#" class="group flex flex-col items-center justify-start gap-3 text-center" style="opacity: 1; transform: none;"><div class="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28"><img alt="Spa treatments service icon" width="100" height="100" class="object-contain transition-transform duration-300 group-hover:scale-110" src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-bkdUNYIhdtrWnm5wKkRmKHaRfiGOAx.png&amp;w=320&amp;q=75"></div><span class="text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-primary">Spa treatments</span></a><a href="#" class="group flex flex-col items-center justify-start gap-3 text-center" style="opacity: 1; transform: none;"><div class="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28"><img alt="Hair styling service icon" width="100" height="100" class="object-contain transition-transform duration-300 group-hover:scale-110" src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-d0GAO5ycNDeZ700WGF58zQs6P3yEAi.png&amp;w=320&amp;q=75"></div><span class="text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-primary">Hair styling</span></a><a href="#" class="group flex flex-col items-center justify-start gap-3 text-center" style="opacity: 1; transform: none;"><div class="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28"><img alt="Makeup service icon" width="100" height="100" class="object-contain transition-transform duration-300 group-hover:scale-110" src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-n8G31Cqh3JyKkxXgC4UC1NDwW6tD3A.png&amp;w=320&amp;q=75"></div><span class="text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-primary">Makeup</span></a><a href="#" class="group flex flex-col items-center justify-start gap-3 text-center" style="opacity: 1; transform: none;"><div class="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28"><img alt="Nails service icon" width="100" height="100" class="object-contain transition-transform duration-300 group-hover:scale-110" src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-FxF3nHvIyj3ximtxnyw76Q8BaiscEM.png&amp;w=320&amp;q=75"></div><span class="text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-primary">Nails</span></a></div></div></section></div></div></div></div>
```

## Reference source files

No reference source files were available.
