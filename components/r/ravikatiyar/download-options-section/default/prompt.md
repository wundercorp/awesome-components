# Build Download Options Section in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Download Options Section screenshot](screenshot.png)

## Component

- Author group: `ravikatiyar`
- Component: `download-options-section`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ravikatiyar
- Component slug: download-options-section
- Demo slug: default
- Title: download-options-section
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><style>
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        </style><div class="relative p-6 lg:p-8"><div class="flex flex-col items-center gap-8"><h2 class="max-w-md text-center text-3xl font-semibold text-foreground">Use The Experience Anywhere You Ask Questions</h2><div class="grid w-full grid-cols-1 gap-6 md:grid-cols-3"><div class="group relative flex w-full flex-col justify-between gap-4 overflow-hidden rounded-xl border bg-transparent p-6 transition-all duration-300 hover:border-primary/50"><div class="pointer-events-none absolute inset-0 z-0"><img alt="background gradient light" class="h-full w-full object-cover opacity-50 transition-all duration-300 group-hover:scale-105 dark:hidden" src="https://img.freepik.com/free-vector/abstract-background-with-squares_23-2148995948.jpg?w=740"><img alt="background gradient dark" class="hidden h-full w-full object-cover opacity-50 transition-all duration-300 group-hover:scale-105 dark:block" src="https://ik.imagekit.io/fpxbgsota/image%2012-modified.png?updatedAt=1753515589830"></div><div class="relative z-10 flex flex-col items-center text-center"><h3 class="mb-1 text-lg font-medium text-foreground">Desktop App</h3><p class="text-sm text-muted-foreground">Search on your desktop</p></div><img alt="Desktop App mockup" class="animate-float relative z-10 mx-auto aspect-square w-full max-w-[200px] rounded-lg object-contain transition-transform duration-300 group-hover:scale-105" src="https://ik.imagekit.io/fpxbgsota/image.png?updatedAt=1753515680365"><div class="relative z-10 flex w-full flex-col gap-2"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 bg-secondary text-secondary-foreground shadow-sm shadow-black/5 hover:bg-secondary/80 h-9 px-4 py-2 w-full"><span class="mr-2 h-4 w-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-apple h-4 w-4" aria-hidden="true"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path><path d="M10 2c1 .5 2 2 2 5"></path></svg></span>Download on Mac</button><button class="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 bg-secondary text-secondary-foreground shadow-sm shadow-black/5 hover:bg-secondary/80 h-9 px-4 py-2 w-full"><span class="mr-2 h-4 w-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grid2x2 lucide-grid-2x2 h-4 w-4" aria-hidden="true"><path d="M12 3v18"></path><path d="M3 12h18"></path><rect x="3" y="3" width="18" height="18" rx="2"></rect></svg></span>Download on Windows</button></div></div><div class="group relative flex w-full flex-col justify-between gap-4 overflow-hidden rounded-xl border bg-transparent p-6 transition-all duration-300 hover:border-primary/50"><div class="pointer-events-none absolute inset-0 z-0"><img alt="background gradient light" class="h-full w-full object-cover opacity-50 transition-all duration-300 group-hover:scale-105 dark:hidden" src="https://img.freepik.com/free-vector/abstract-background-with-squares_23-2148995948.jpg?w=740"><img alt="background gradient dark" class="hidden h-full w-full object-cover opacity-50 transition-all duration-300 group-hover:scale-105 dark:block" src="https://ik.imagekit.io/fpxbgsota/image%2012-modified.png?updatedAt=1753515589830"></div><div class="relative z-10 flex flex-col items-center text-center"><h3 class="mb-1 text-lg font-medium text-foreground">iOS &amp; Android App</h3><p class="text-sm text-muted-foreground">Take the experience on the go</p></div><img alt="iOS &amp; Android App mockup" class="animate-float relative z-10 mx-auto aspect-square w-full max-w-[200px] rounded-lg object-contain transition-transform duration-300 group-hover:scale-105" src="https://www.perplexity.ai/static/images/onboarding/download-mobile.webp"><div class="relative z-10 flex w-full flex-col gap-2"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 bg-secondary text-secondary-foreground shadow-sm shadow-black/5 hover:bg-secondary/80 h-9 px-4 py-2 w-full"><span class="mr-2 h-4 w-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone h-4 w-4" aria-hidden="true"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg></span>Download on Mobile</button></div></div><div class="group relative flex w-full flex-col justify-between gap-4 overflow-hidden rounded-xl border bg-transparent p-6 transition-all duration-300 hover:border-primary/50"><div class="pointer-events-none absolute inset-0 z-0"><img alt="background gradient light" class="h-full w-full object-cover opacity-50 transition-all duration-300 group-hover:scale-105 dark:hidden" src="https://img.freepik.com/free-vector/abstract-background-with-squares_23-2148995948.jpg?w=740"><img alt="background gradient dark" class="hidden h-full w-full object-cover opacity-50 transition-all duration-300 group-hover:scale-105 dark:block" src="https://ik.imagekit.io/fpxbgsota/image%2012-modified.png?updatedAt=1753515589830"></div><div class="relative z-10 flex flex-col items-center text-center"><h3 class="mb-1 text-lg font-medium text-foreground">Browser Extension</h3><p class="text-sm text-muted-foreground">Integrate directly into your browser</p></div><img alt="Browser Extension mockup" class="animate-float relative z-10 mx-auto aspect-square w-full max-w-[200px] rounded-lg object-contain transition-transform duration-300 group-hover:scale-105" src="https://www.perplexity.ai/static/images/onboarding/download-extension.webp"><div class="relative z-10 flex w-full flex-col gap-2"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 bg-secondary text-secondary-foreground shadow-sm shadow-black/5 hover:bg-secondary/80 h-9 px-4 py-2 w-full">Join the waitlist</button></div></div></div><button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow-sm shadow-black/5 hover:bg-primary/90 h-10 rounded-lg px-8 w-full max-w-xs">Continue</button></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
