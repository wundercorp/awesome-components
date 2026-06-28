# Build Arc Gallery Hero Component in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Arc Gallery Hero Component screenshot](screenshot.png)

## Component

- Author group: `thanh`
- Component: `arc-gallery-hero-component`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: thanh
- Component slug: arc-gallery-hero-component
- Demo slug: default
- Title: arc-gallery-hero-component
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-full"><section class="relative overflow-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col "><div class="relative mx-auto" style="width: 100%; height: 432px;"><div class="absolute left-1/2 bottom-0 -translate-x-1/2"><div class="absolute opacity-0 animate-fade-in-up" style="width: 100px; height: 100px; left: calc(50% + 338.289px); bottom: 123.127px; transform: translate(-50%, 50%); animation-delay: 0ms; animation-fill-mode: forwards; z-index: 12;"><div class="rounded-2xl shadow-xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 bg-white dark:bg-gray-800 transition-transform hover:scale-105 w-full h-full" style="transform: rotate(5deg);"><img alt="Memory 1" class="block w-full h-full object-cover" draggable="false" src="https://images.unsplash.com/photo-1755004609214-c252674df1ca?q=80&amp;w=400&amp;auto=format&amp;fit=crop"></div></div><div class="absolute opacity-0 animate-fade-in-up" style="width: 100px; height: 100px; left: calc(50% + 302.851px); bottom: 194.631px; transform: translate(-50%, 50%); animation-delay: 100ms; animation-fill-mode: forwards; z-index: 11;"><div class="rounded-2xl shadow-xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 bg-white dark:bg-gray-800 transition-transform hover:scale-105 w-full h-full" style="transform: rotate(8.18182deg);"><img alt="Memory 2" class="block w-full h-full object-cover" draggable="false" src="https://images.unsplash.com/photo-1750218537952-0ae056c7f53a?q=80&amp;w=400&amp;auto=format&amp;fit=crop"></div></div><div class="absolute opacity-0 animate-fade-in-up" style="width: 100px; height: 100px; left: calc(50% + 252.531px); bottom: 256.57px; transform: translate(-50%, 50%); animation-delay: 200ms; animation-fill-mode: forwards; z-index: 10;"><div class="rounded-2xl shadow-xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 bg-white dark:bg-gray-800 transition-transform hover:scale-105 w-full h-full" style="transform: rotate(11.3636deg);"><img alt="Memory 3" class="block w-full h-full object-cover" draggable="false" src="https://images.unsplash.com/photo-1755038995605-038a7345658f?q=80&amp;w=400&amp;auto=format&amp;fit=crop"></div></div><div class="absolute opacity-0 animate-fade-in-up" style="width: 100px; height: 100px; left: calc(50% + 189.801px); bottom: 305.901px; transform: translate(-50%, 50%); animation-delay: 300ms; animation-fill-mode: forwards; z-index: 9;"><div class="rounded-2xl shadow-xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 bg-white dark:bg-gray-800 transition-transform hover:scale-105 w-full h-full" style="transform: rotate(14.5455deg);"><img alt="Memory 4" class="block w-full h-full object-cover" draggable="false" src="https://images.unsplash.com/photo-1546238232-20216dec9f72?q=80&amp;w=400&amp;auto=format&amp;fit=crop"></div></div><div class="absolute opacity-0 animate-fade-in-up" style="width: 100px; height: 100px; left: calc(50% + 117.744px); bottom: 340.2px; transform: translate(-50%, 50%); animation-delay: 400ms; animation-fill-mode: forwards; z-index: 8;"><div class="rounded-2xl shadow-xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 bg-white dark:bg-gray-800 transition-transform hover:scale-105 w-full h-full" style="transform: rotate(17.7273deg);"><img alt="Memory 5" class="block w-full h-full object-cover" draggable="false" src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&amp;w=400&amp;auto=format&amp;fit=crop"></div></div><div class="absolute opacity-0 animate-fade-in-up" style="width: 100px; height: 100px; left: calc(50% + 39.9018px); bottom: 357.782px; transform: translate(-50%, 50%); animation-delay: 500ms; animation-fill-mode: forwards; z-index: 7;"><div class="rounded-2xl shadow-xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 bg-white dark:bg-gray-800 transition-transform hover:scale-105 w-full h-full" style="transform: rotate(20.9091deg);"><img alt="Memory 6" class="block w-full h-full object-cover" draggable="false" src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&amp;w=400&amp;auto=format&amp;fit=crop"></div></div><div class="absolute opacity-0 animate-fade-in-up" style="width: 100px; height: 100px; left: calc(50% - 39.9018px); bottom: 357.782px; transform: translate(-50%, 50%); animation-delay: 600ms; animation-fill-mode: forwards; z-index: 6;"><div class="rounded-2xl shadow-xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 bg-white dark:bg-gray-800 transition-transform hover:scale-105 w-full h-full" style="transform: rotate(24.0909deg);"><img alt="Memory 7" class="block w-full h-full object-cover" draggable="false" src="https://images.unsplash.com/photo-1753724223372-9a1df8eb5212?q=80&amp;w=400&amp;auto=format&amp;fit=crop"></div></div><div class="absolute opacity-0 animate-fade-in-up" style="width: 100px; height: 100px; left: calc(50% - 117.744px); bottom: 340.2px; transform: translate(-50%, 50%); animation-delay: 700ms; animation-fill-mode: forwards; z-index: 5;"><div class="rounded-2xl shadow-xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 bg-white dark:bg-gray-800 transition-transform hover:scale-105 w-full h-full" style="transform: rotate(27.2727deg);"><img alt="Memory 8" class="block w-full h-full object-cover" draggable="false" src="https://images.unsplash.com/photo-1754079132860-5b37dab49daa?q=80&amp;w=400&amp;auto=format&amp;fit=crop"></div></div><div class="absolute opacity-0 animate-fade-in-up" style="width: 100px; height: 100px; left: calc(50% - 189.801px); bottom: 305.901px; transform: translate(-50%, 50%); animation-delay: 800ms; animation-fill-mode: forwards; z-index: 4;"><div class="rounded-2xl shadow-xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 bg-white dark:bg-gray-800 transition-transform hover:scale-105 w-full h-full" style="transform: rotate(30.4545deg);"><img alt="Memory 9" class="block w-full h-full object-cover" draggable="false" src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&amp;w=400&amp;auto=format&amp;fit=crop"></div></div><div class="absolute opacity-0 animate-fade-in-up" style="width: 100px; height: 100px; left: calc(50% - 252.531px); bottom: 256.57px; transform: translate(-50%, 50%); animation-delay: 900ms; animation-fill-mode: forwards; z-index: 3;"><div class="rounded-2xl shadow-xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 bg-white dark:bg-gray-800 transition-transform hover:scale-105 w-full h-full" style="transform: rotate(33.6364deg);"><img alt="Memory 10" class="block w-full h-full object-cover" draggable="false" src="https://images.unsplash.com/photo-1754079132962-2f6c62f14d33?q=80&amp;w=400&amp;auto=format&amp;fit=crop"></div></div><div class="absolute opacity-0 animate-fade-in-up" style="width: 100px; height: 100px; left: calc(50% - 302.851px); bottom: 194.631px; transform: translate(-50%, 50%); animation-delay: 1000ms; animation-fill-mode: forwards; z-index: 2;"><div class="rounded-2xl shadow-xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 bg-white dark:bg-gray-800 transition-transform hover:scale-105 w-full h-full" style="transform: rotate(36.8182deg);"><img alt="Memory 11" class="block w-full h-full object-cover" draggable="false" src="https://images.unsplash.com/photo-1754764987594-2236e7736115?q=80&amp;w=400&amp;auto=format&amp;fit=crop"></div></div><div class="absolute opacity-0 animate-fade-in-up" style="width: 100px; height: 100px; left: calc(50% - 338.289px); bottom: 123.127px; transform: translate(-50%, 50%); animation-delay: 1100ms; animation-fill-mode: forwards; z-index: 1;"><div class="rounded-2xl shadow-xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 bg-white dark:bg-gray-800 transition-transform hover:scale-105 w-full h-full" style="transform: rotate(40deg);"><img alt="Memory 12" class="block w-full h-full object-cover" draggable="false" src="https://images.unsplash.com/photo-1755048796967-75a82d214846?q=80&amp;w=400&amp;auto=format&amp;fit=crop"></div></div></div></div><div class="relative z-10 flex-1 flex items-center justify-center px-6 -mt-40 md:-mt-52 lg:-mt-64"><div class="text-center max-w-2xl px-6 opacity-0 animate-fade-in" style="animation-delay: 800ms; animation-fill-mode: forwards;"><h1 class="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">Rediscover Your Memories with AI</h1><p class="mt-4 text-lg text-gray-600 dark:text-gray-300">Our intelligent platform finds, organizes, and brings your most cherished moments back to life.</p><div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"><button class="w-full sm:w-auto px-6 py-3 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-400 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">Explore Your Past</button><button class="w-full sm:w-auto px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white transition-all duration-200">How It Works</button></div></div></div><style>
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translate(-50%, 60%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 50%);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation-name: fade-in-up;
          animation-duration: 0.8s;
          animation-timing-function: ease-out;
        }
        .animate-fade-in {
          animation-name: fade-in;
          animation-duration: 0.8s;
          animation-timing-function: ease-out;
        }
      </style></section></div></div></div></div>
```

## Reference source files

No reference source files were available.
