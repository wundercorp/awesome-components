# Build Glow Menu in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Glow Menu screenshot](screenshot.png)

## Component

- Author group: `spoonyvu`
- Component: `glow-menu`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: spoonyvu
- Component slug: glow-menu
- Demo slug: default
- Title: glow-menu
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
<div id="root"><div class="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground"><div class="absolute lab-bg inset-0 size-full"><div class="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div></div><div class="flex w-full justify-center relative"><nav class="p-2 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-border/40 shadow-lg relative overflow-hidden"><div class="absolute -inset-2 bg-gradient-radial from-transparent via-blue-400/20 via-30% via-purple-400/20 via-60% via-red-400/20 via-90% to-transparent rounded-3xl z-0 pointer-events-none" style="opacity: 0;"></div><ul class="flex items-center gap-2 relative z-10"><li class="relative"><button class="block w-full"><div class="block rounded-xl overflow-visible group relative" style="perspective: 600px;"><div class="absolute inset-0 z-0 pointer-events-none" style="background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(37, 99, 235, 0.06) 50%, rgba(29, 78, 216, 0) 100%); opacity: 1; border-radius: 16px; transform: scale(2);"></div><div class="flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent transition-colors rounded-xl text-foreground" style="transform-style: preserve-3d; transform-origin: center bottom; opacity: 1; transform: none;"><span class="transition-colors duration-300 text-blue-500 group-hover:text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house h-5 w-5" aria-hidden="true"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg></span><span>Home</span></div><div class="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent transition-colors rounded-xl text-foreground" style="transform-style: preserve-3d; transform-origin: center top; opacity: 0; transform: rotateX(90deg);"><span class="transition-colors duration-300 text-blue-500 group-hover:text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house h-5 w-5" aria-hidden="true"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg></span><span>Home</span></div></div></button></li><li class="relative"><button class="block w-full"><div class="block rounded-xl overflow-visible group relative" style="perspective: 600px;"><div class="absolute inset-0 z-0 pointer-events-none" style="background: radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, rgba(234, 88, 12, 0.06) 50%, rgba(194, 65, 12, 0) 100%); opacity: 0; border-radius: 16px; transform: scale(0.8);"></div><div class="flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent transition-colors rounded-xl text-muted-foreground group-hover:text-foreground" style="transform-style: preserve-3d; transform-origin: center bottom; opacity: 1; transform: none;"><span class="transition-colors duration-300 text-foreground group-hover:text-orange-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell h-5 w-5" aria-hidden="true"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg></span><span>Notifications</span></div><div class="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent transition-colors rounded-xl text-muted-foreground group-hover:text-foreground" style="transform-style: preserve-3d; transform-origin: center top; opacity: 0; transform: rotateX(90deg);"><span class="transition-colors duration-300 text-foreground group-hover:text-orange-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell h-5 w-5" aria-hidden="true"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg></span><span>Notifications</span></div></div></button></li><li class="relative"><button class="block w-full"><div class="block rounded-xl overflow-visible group relative" style="perspective: 600px;"><div class="absolute inset-0 z-0 pointer-events-none" style="background: radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, rgba(22, 163, 74, 0.06) 50%, rgba(21, 128, 61, 0) 100%); opacity: 0; border-radius: 16px; transform: scale(0.8);"></div><div class="flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent transition-colors rounded-xl text-muted-foreground group-hover:text-foreground" style="transform-style: preserve-3d; transform-origin: center bottom; opacity: 1; transform: none;"><span class="transition-colors duration-300 text-foreground group-hover:text-green-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings h-5 w-5" aria-hidden="true"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg></span><span>Settings</span></div><div class="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent transition-colors rounded-xl text-muted-foreground group-hover:text-foreground" style="transform-style: preserve-3d; transform-origin: center top; opacity: 0; transform: rotateX(90deg);"><span class="transition-colors duration-300 text-foreground group-hover:text-green-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings h-5 w-5" aria-hidden="true"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg></span><span>Settings</span></div></div></button></li><li class="relative"><button class="block w-full"><div class="block rounded-xl overflow-visible group relative" style="perspective: 600px;"><div class="absolute inset-0 z-0 pointer-events-none" style="background: radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, rgba(220, 38, 38, 0.06) 50%, rgba(185, 28, 28, 0) 100%); opacity: 0; border-radius: 16px; transform: scale(0.8);"></div><div class="flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent transition-colors rounded-xl text-muted-foreground group-hover:text-foreground" style="transform-style: preserve-3d; transform-origin: center bottom; opacity: 1; transform: none;"><span class="transition-colors duration-300 text-foreground group-hover:text-red-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user h-5 w-5" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span><span>Profile</span></div><div class="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent transition-colors rounded-xl text-muted-foreground group-hover:text-foreground" style="transform-style: preserve-3d; transform-origin: center top; opacity: 0; transform: rotateX(90deg);"><span class="transition-colors duration-300 text-foreground group-hover:text-red-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user h-5 w-5" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span><span>Profile</span></div></div></button></li></ul></nav></div></div></div>
```

## Reference source files

No reference source files were available.
