# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/easemize/hero-with-video/default
- Registry URL: https://21st.dev/r/easemize/hero-with-video
- Author: easemize
- Component slug: hero-with-video
- Demo slug: default
- Title: hero-with-video
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/easemize/hero-with-video with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/easemize__hero-with-video__default.html
- Local screenshot file: generated-21st-prompts/screenshots/easemize__hero-with-video__default.png

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
<div id="root"><div class="fixed top-4 left-4 z-10"><select class="appearance-none h-8 max-w-[200px] text-sm leading-tight rounded-lg pl-3 pr-7 py-0 border bg-background focus:outline-none focus:ring-0"><option value="named_DemoOne_DemoOne">DemoOne</option></select><div class="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.534-1.39.534-1.923 0l-3.734-3.705c-.408-.418-.436-1.17 0-1.615z"></path></svg></div></div><div class="w-screen min-h-screen flex justify-center items-center"><main class="absolute inset-0 bg-background overflow-y-auto"><div class="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8"><div class="py-2 relative z-20 flex items-center justify-between gap-4"><div class="flex items-center gap-6"><a href="#" class="font-bold text-2xl pb-1 text-foreground cursor-pointer flex-shrink-0">TechFlow</a><nav class="hidden lg:flex text-muted-foreground font-medium"><ul class="flex items-center space-x-2"><li><a href="#" class="hover:text-foreground px-3 py-2 text-sm transition-colors rounded-lg">About</a></li><li class="relative"><button class="flex items-center hover:text-foreground px-3 py-2 text-sm transition-colors rounded-lg">Resources<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 ml-1 transition-transform" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></li><li><a href="#" class="hover:text-foreground px-3 py-2 text-sm transition-colors rounded-lg">Blog</a></li><li class="relative"><button class="flex items-center hover:text-foreground px-3 py-2 text-sm transition-colors rounded-lg">Plans &amp; Pricing<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 ml-1 transition-transform" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></li></ul></nav></div><div class="flex items-center gap-3"><div class="hidden lg:flex items-center gap-3"><a href="#" class="text-foreground hover:text-muted-foreground cursor-pointer py-2 px-4 text-sm capitalize font-medium transition-colors rounded-xl">Login</a><button class="bg-foreground hover:bg-muted-foreground text-background py-2.5 px-5 text-sm rounded-xl capitalize font-medium transition-colors flex items-center gap-2">Get Started<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button></div><button class="bg-muted hover:bg-border flex-shrink-0 p-2.5 rounded-full transition-colors" aria-label="Toggle theme"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon h-5 w-5 text-foreground" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg></button><div class="lg:hidden relative"><button class="bg-transparent hover:bg-muted border-none p-2 rounded-xl transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu h-6 w-6" aria-hidden="true"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg></button></div></div></div><div class="pt-4 pb-10 sm:pt-6 sm:pb-12 text-center"><div class="max-w-2xl mx-auto"><h1 class="text-3xl sm:text-5xl md:text-5xl text-foreground font-bold tracking-tight">Innovation Meets Simplicity</h1><p class="mt-6 text-lg text-muted-foreground">Discover cutting-edge solutions designed for the modern digital landscape.</p><div class="mt-8 flex items-center justify-center gap-3 sm:gap-4 flex-wrap"><div class="relative"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg><input placeholder="enter@email.com" class="w-full max-w-xs bg-muted border-border text-foreground placeholder-muted-foreground font-medium pl-10 pr-4 py-2 text-sm sm:pl-11 sm:py-3 sm:text-base rounded-full focus:outline-none focus:ring-2 focus:ring-ring" type="email" value=""></div><button class="bg-foreground hover:bg-muted-foreground text-background px-5 py-2 text-sm sm:px-6 sm:py-3 sm:text-base rounded-full normal-case font-medium transition-colors flex items-center gap-2">Join Now<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button></div></div></div><header class="relative w-full aspect-video rounded-3xl overflow-hidden"><img alt="Earth from space at night" class="w-full h-full absolute inset-0 object-cover transition-opacity duration-500 opacity-100" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2072&amp;q=80"><video src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" class="w-full h-full absolute inset-0 object-cover transition-opacity duration-500 opacity-0" playsinline=""></video><div class="absolute bottom-5 right-5 z-10"><button class="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-200 shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play h-7 w-7 text-white fill-white ml-1" aria-hidden="true"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg></button></div></header></div></main></div></div>
```

## Public registry source files

No public registry source files were available.