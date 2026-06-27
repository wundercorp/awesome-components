# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/aliimam/navbar/default
- Registry URL: https://21st.dev/r/aliimam/navbar
- Author: aliimam
- Component slug: navbar
- Demo slug: default
- Title: navbar
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/aliimam/navbar with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/aliimam__navbar__default.html
- Local screenshot file: generated-21st-prompts/screenshots/aliimam__navbar__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="mx-auto max-w-5xl flex justify-center"><header><nav data-state="false" class="fixed left-0 w-full z-20 px-2"><div class="mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12"><div class="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 py-2"><div class="flex w-full justify-between lg:w-auto"><a href="/" aria-label="home" class="flex gap-2 items-center"><svg width="24" height="24" viewBox="0 0 392.02 324.6" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill="#fff200" d="M268.08,0c-27.4,0-51.41,4.43-72.07,13.26C175.36,4.43,151.35,0,123.95,0H0v324.6h123.95c27.37,0,51.38-4.58,72.07-13.7,20.69,9.12,44.7,13.7,72.07,13.7h123.95V0h-123.95ZM324.09,268.36h-47.91c-20.25,0-37.3-4.05-51.18-12.15-12.28-7.17-21.94-17.41-28.99-30.7h0s0,0,0,0c0,0,0,0,0,0h0c-7.05,13.29-16.71,23.53-28.99,30.7-13.87,8.1-30.93,12.15-51.18,12.15h-47.91V56.24h47.91c19.8,0,36.67,4.01,50.61,12.04,12.51,7.2,22.35,17.47,29.55,30.77h0s0,0,0,0c0,0,0,0,0,0h0c7.2-13.3,17.04-23.57,29.55-30.77,13.95-8.02,30.82-12.04,50.61-12.04h47.91v212.13Z"></path></svg><p class="font-semibold text-xl tracking-tighter"> Dalim</p></a><button aria-label="Open Menu" class="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-equal in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" aria-hidden="true"><line x1="5" x2="19" y1="9" y2="9"></line><line x1="5" x2="19" y1="15" y2="15"></line></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button></div><div class="absolute inset-0 m-auto hidden size-fit lg:block"><ul class="flex gap-8 text-sm"><li><a href="#link" class="text-muted-foreground hover:text-accent-foreground block duration-150"><span>Products</span></a></li><li><a href="#link" class="text-muted-foreground hover:text-accent-foreground block duration-150"><span>Designs</span></a></li><li><a href="#link" class="text-muted-foreground hover:text-accent-foreground block duration-150"><span>Pricing</span></a></li><li><a href="#link" class="text-muted-foreground hover:text-accent-foreground block duration-150"><span>About</span></a></li></ul></div><div class="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent"><div class="lg:hidden"><ul class="space-y-6 text-base"><li><a href="#link" class="text-muted-foreground hover:text-accent-foreground block duration-150"><span>Products</span></a></li><li><a href="#link" class="text-muted-foreground hover:text-accent-foreground block duration-150"><span>Designs</span></a></li><li><a href="#link" class="text-muted-foreground hover:text-accent-foreground block duration-150"><span>Pricing</span></a></li><li><a href="#link" class="text-muted-foreground hover:text-accent-foreground block duration-150"><span>About</span></a></li></ul></div><div class="flex w-full flex-col space-y-3 sm:flex-row sm:gap-2 sm:space-y-0 md:w-fit"><a href="#" class="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"><span>Login</span></a><a href="#" class="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md px-3 text-xs"><span>Sign Up</span></a><a href="#" class="items-center cursor-pointer justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md px-3 text-xs hidden"><span>Get Started</span></a></div></div></div></div></nav></header></div></div></div></div>
```

## Public registry source files

No public registry source files were available.