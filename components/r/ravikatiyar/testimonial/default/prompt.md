# Build Testimonial in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Testimonial screenshot](screenshot.png)

## Component

- Author group: `ravikatiyar`
- Component: `testimonial`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: ravikatiyar
- Component slug: testimonial
- Demo slug: default
- Title: testimonial
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950"><style>
                @keyframes animate-grid {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 100% 50%; }
                }
                .animated-grid {
                    width: 200%;
                    height: 200%;
                    /* Grid color for light and dark mode */
                    background-image: 
                        linear-gradient(to right, #e2e8f0 1px, transparent 1px), 
                        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px);
                    background-size: 3rem 3rem;
                    animation: animate-grid 40s linear infinite alternate;
                }
                .dark .animated-grid {
                    background-image: 
                        linear-gradient(to right, #1e293b 1px, transparent 1px), 
                        linear-gradient(to bottom, #1e293b 1px, transparent 1px);
                }
            </style><div class="animated-grid absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"></div><div class="z-10"><div class="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12"><div class="relative grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-20"><div class="flex items-center justify-center"><div class="relative h-80 w-full max-w-xs"><div class="absolute inset-0 origin-bottom" style="perspective: 1000px; opacity: 1; transform: none; z-index: 5;"><img alt="Priya Sharma" width="500" height="500" draggable="false" class="h-full w-full rounded-3xl object-cover shadow-2xl" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=1888&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div><div class="absolute inset-0 origin-bottom" style="perspective: 1000px; opacity: 0.5; transform: translateY(20px) scale(0.9) rotate(-2deg); z-index: 4;"><img alt="Marcus Johnson" width="500" height="500" draggable="false" class="h-full w-full rounded-3xl object-cover shadow-2xl" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div><div class="absolute inset-0 origin-bottom" style="perspective: 1000px; opacity: 0.5; transform: translateY(20px) scale(0.9) rotate(-5deg); z-index: 3;"><img alt="Isabella Rossi" width="500" height="500" draggable="false" class="h-full w-full rounded-3xl object-cover shadow-2xl" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1888&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div><div class="absolute inset-0 origin-bottom" style="perspective: 1000px; opacity: 0.5; transform: translateY(20px) scale(0.9) rotate(-7deg); z-index: 2;"><img alt="Kenji Tanaka" width="500" height="500" draggable="false" class="h-full w-full rounded-3xl object-cover shadow-2xl" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&amp;w=1887&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D"></div><div class="absolute inset-0 origin-bottom" style="perspective: 1000px; opacity: 0.5; transform: translateY(20px) scale(0.9) rotate(3deg); z-index: 1;"><img alt="Fatima Al-Jamil" width="500" height="500" draggable="false" class="h-full w-full rounded-3xl object-cover shadow-2xl" src="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&amp;w=1887&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D"></div></div></div><div class="flex flex-col justify-center py-4"><div class="flex flex-col justify-between" style="opacity: 1; transform: none;"><div><h3 class="text-2xl font-bold text-slate-900 dark:text-slate-50">Priya Sharma</h3><p class="text-sm text-slate-600 dark:text-slate-400">Data Scientist at QuantumLeap</p><p class="mt-8 text-lg text-slate-700 dark:text-slate-300">"This platform revolutionized our data analysis process. The speed and accuracy are unparalleled. A must-have for any data-driven team."</p></div></div><div class="flex gap-4 pt-12"><button aria-label="Previous testimonial" class="group flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:bg-slate-800 dark:hover:bg-slate-700 dark:focus:ring-slate-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left h-5 w-5 text-slate-800 transition-transform duration-300 group-hover:-translate-x-1 dark:text-slate-300" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></button><button aria-label="Next testimonial" class="group flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:bg-slate-800 dark:hover:bg-slate-700 dark:focus:ring-slate-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-5 w-5 text-slate-800 transition-transform duration-300 group-hover:translate-x-1 dark:text-slate-300" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button></div></div></div></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
