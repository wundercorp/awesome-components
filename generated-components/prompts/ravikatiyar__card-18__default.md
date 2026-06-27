# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/ravikatiyar/card-18/default
- Registry URL: https://21st.dev/r/ravikatiyar/card-18
- Author: ravikatiyar
- Component slug: card-18
- Demo slug: default
- Title: card-18
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/ravikatiyar/card-18 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/ravikatiyar__card-18__default.html
- Local screenshot file: generated-21st-prompts/screenshots/ravikatiyar__card-18__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full max-w-6xl mx-auto p-4 md:p-8"><div class="mb-8 md:mb-12" style="opacity: 1; transform: none;"><div class="group relative flex overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 ease-in-out hover:shadow-md flex-col md:flex-row"><a href="#" class="absolute inset-0 z-10" aria-label="Read more about From Concept to Clicks: How Strategy Fuels Great Web Design"><span class="sr-only">Read More</span></a><div class="relative z-0 flex h-full w-full flex-col md:flex-row"><div class="relative w-full overflow-hidden md:w-1/2 lg:w-3/5"><img alt="From Concept to Clicks: How Strategy Fuels Great Web Design" class="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"></div><div class="flex flex-1 flex-col justify-between p-6 md:p-8"><div><div class="mb-4 flex items-center gap-4 text-xs font-semibold uppercase text-muted-foreground"><span class="rounded-full bg-primary/10 px-3 py-1 text-primary">Trends</span><span>ON JUL 13, 2025</span></div><h3 class="mb-3 text-xl font-bold leading-tight text-foreground lg:text-2xl"><span class="bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">From Concept to Clicks: How Strategy Fuels Great Web Design</span></h3><p class="text-muted-foreground">Discover how a well-defined digital strategy transforms creative ideas into high-performing websites that engage users and drive traffic.</p></div><div class="mt-8"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 group/button">Read the full article<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button></div></div></div></div></div><div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"><div style="opacity: 1; transform: none;"><div class="group relative flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 ease-in-out hover:shadow-md p-6"><a href="#" class="absolute inset-0 z-10" aria-label="Read more about The Art of Digital Transformation: Turning Vision into Value"><span class="sr-only">Read More</span></a><div class="relative z-0 flex h-full w-full flex-col md:flex-row"><div class="flex flex-1 flex-col justify-between p-6 md:p-8"><div><div class="mb-4 flex items-center gap-4 text-xs font-semibold uppercase text-muted-foreground"><span class="rounded-full bg-primary/10 px-3 py-1 text-primary">Trends</span><span>ON MAY 4, 2025</span></div><h3 class="mb-3 text-xl font-bold leading-tight text-foreground lg:text-2xl"><span class="bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">The Art of Digital Transformation: Turning Vision into Value</span></h3><p class="text-muted-foreground">Explore real-world examples of businesses that reimagined their digital presence and achieved success.</p></div></div></div></div></div><div style="opacity: 1; transform: none;"><div class="group relative flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 ease-in-out hover:shadow-md p-6"><a href="#" class="absolute inset-0 z-10" aria-label="Read more about Collaboration that Converts: Why the Right Agency Partnership Matters"><span class="sr-only">Read More</span></a><div class="relative z-0 flex h-full w-full flex-col md:flex-row"><div class="flex flex-1 flex-col justify-between p-6 md:p-8"><div><div class="mb-4 flex items-center gap-4 text-xs font-semibold uppercase text-muted-foreground"><span class="rounded-full bg-primary/10 px-3 py-1 text-primary">Trends</span><span>ON MAY 4, 2025</span></div><h3 class="mb-3 text-xl font-bold leading-tight text-foreground lg:text-2xl"><span class="bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">Collaboration that Converts: Why the Right Agency Partnership Matters</span></h3><p class="text-muted-foreground">Learn why aligning with the right creative partner can make or break your online success story.</p></div></div></div></div></div><div style="opacity: 1; transform: none;"><div class="group relative flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 ease-in-out hover:shadow-md p-6"><a href="#" class="absolute inset-0 z-10" aria-label="Read more about User-Centered, Strategy-Driven: Designing for Impact in 2025"><span class="sr-only">Read More</span></a><div class="relative z-0 flex h-full w-full flex-col md:flex-row"><div class="flex flex-1 flex-col justify-between p-6 md:p-8"><div><div class="mb-4 flex items-center gap-4 text-xs font-semibold uppercase text-muted-foreground"><span class="rounded-full bg-primary/10 px-3 py-1 text-primary">Trends</span><span>ON JUN 17, 2025</span></div><h3 class="mb-3 text-xl font-bold leading-tight text-foreground lg:text-2xl"><span class="bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">User-Centered, Strategy-Driven: Designing for Impact in 2025</span></h3><p class="text-muted-foreground">Unpack the latest trends in UX, SEO, and responsive design that are helping forward-thinking brands win.</p></div></div></div></div></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.