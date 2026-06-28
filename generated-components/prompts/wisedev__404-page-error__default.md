# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/wisedev/404-page-error/default
- Registry URL: https://21st.dev/r/wisedev/404-page-error
- Author: wisedev
- Component slug: 404-page-error
- Demo slug: default
- Title: 404-page-error
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/wisedev/404-page-error with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/wisedev__404-page-error__default.html
- Local screenshot file: generated-21st-prompts/screenshots/wisedev__404-page-error__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8 relative"><div class="absolute top-4 right-4 sm:top-6 sm:right-6 z-10"><button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 w-10 h-10" aria-label="Toggle theme"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon h-4 w-4" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg><span class="sr-only">Toggle theme</span></button></div><div class="w-full max-w-4xl mx-auto text-center"><div class="animate-fade-in-up space-y-6 sm:space-y-8"><div class="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto animate-bounce-in"><div class="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center border-2 border-primary/10"><span class="text-6xl sm:text-7xl lg:text-8xl font-bold text-primary/60">404</span></div></div><h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground animate-fade-in-up" style="animation-delay: 0.2s;">Oops! Page Not Found</h1><p class="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-md sm:max-w-lg lg:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0 animate-fade-in-up" style="animation-delay: 0.4s;">The page you're looking for seems to have wandered off into the digital wilderness. Don’t worry, it happens to the best of us!</p><div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0 animate-fade-in-up" style="animation-delay: 0.6s;"><button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 group w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98] min-h-[48px] sm:min-h-[44px]" aria-label="Go to home"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house w-5 h-5 mr-2 transition-transform duration-200 group-hover:scale-105" aria-hidden="true"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>Take Me Home</button><button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 group w-full sm:w-auto transition-all duration-200 hover:scale-[1.02] hover:shadow-sm active:scale-[0.98] hover:bg-accent/50 min-h-[48px] sm:min-h-[44px]" aria-label="Go back"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left w-5 h-5 mr-2 transition-transform duration-200 group-hover:-translate-x-0.5" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>Go Back</button></div><p class="text-xs sm:text-sm text-muted-foreground px-4 sm:px-0 animate-fade-in-up" style="animation-delay: 0.8s;">If you think this is a mistake, please <a href="mailto:support@example.com" class="text-foreground/70 hover:text-foreground hover:underline transition-colors duration-200 font-medium">contact our support team</a></p></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.