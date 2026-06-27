# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/hextaui/hero-2-1/default
- Registry URL: https://21st.dev/r/hextaui/hero-2-1
- Author: hextaui
- Component slug: hero-2-1
- Demo slug: default
- Title: hero-2-1
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/hextaui/hero-2-1 with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/hextaui__hero-2-1__default.html
- Local screenshot file: generated-21st-prompts/screenshots/hextaui__hero-2-1__default.png

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
<div id="root"><div><div class="relative min-h-screen overflow-hidden bg-black"><div class="flex flex-col items-end absolute -right-60 -top-10 blur-xl z-0 "><div class="h-[10rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[6rem] from-purple-600 to-sky-600"></div><div class="h-[10rem] rounded-full w-[90rem] z-1 bg-gradient-to-b blur-[6rem] from-pink-900 to-yellow-400"></div><div class="h-[10rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[6rem] from-yellow-600 to-sky-500"></div></div><div class="absolute inset-0 z-0 bg-noise opacity-30"></div><div class="relative z-10"><nav class="container mx-auto flex items-center justify-between px-4 py-4 mt-6"><div class="flex items-center"><div class="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black"><span class="font-bold">⚡</span></div><span class="ml-2 text-xl font-bold text-white">LeadGenie</span></div><div class="hidden md:flex items-center space-x-6"><div class="flex items-center space-x-6"><div class="flex items-center text-sm text-gray-300 hover:text-white"><span>Use Cases</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><path d="m6 9 6 6 6-6"></path></svg></div><div class="flex items-center text-sm text-gray-300 hover:text-white"><span>Products</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><path d="m6 9 6 6 6-6"></path></svg></div><div class="flex items-center text-sm text-gray-300 hover:text-white"><span>Resources</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><path d="m6 9 6 6 6-6"></path></svg></div><div class="flex items-center text-sm text-gray-300 hover:text-white"><span>Pricing</span></div></div><div class="flex items-center space-x-3"><button class="h-12 rounded-full bg-white px-8 text-base font-medium text-black hover:bg-white/90">Login</button></div></div><button class="md:hidden"><span class="sr-only">Toggle menu</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu h-6 w-6 text-white" aria-hidden="true"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg></button></nav><div class="mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm"><span class="text-sm font-medium text-white">Join the revolution today!</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4 text-white" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div><div class="container mx-auto mt-12 px-4 text-center"><h1 class="mx-auto max-w-4xl text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">Unbeatable Pricing for Dynamic Email Tools</h1><p class="mx-auto mt-6 max-w-2xl text-lg text-gray-300">Delivering unmatched email campaigns every day at unbeatable rates. Our tool redefines cost-effectiveness. Now!!!</p><div class="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"><button class="h-12 rounded-full bg-white px-8 text-base font-medium text-black hover:bg-white/90">Start Your 7 Day Free Trial</button><button class="h-12 rounded-full border border-gray-600 px-8 text-base font-medium text-white hover:bg-white/10">Watch Demo</button></div><div class="relative mx-auto my-20 w-full max-w-6xl"><div class="absolute inset-0 rounded shadow-lg bg-white blur-[10rem] bg-grainy opacity-20"></div><img alt="Hero Image" class="relative w-full h-auto shadow-md grayscale-100 rounded" src="https://kikxai.netlify.app/_next/image?url=%2Fassets%2Fhero-image.png&amp;w=1920&amp;q=75"></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.