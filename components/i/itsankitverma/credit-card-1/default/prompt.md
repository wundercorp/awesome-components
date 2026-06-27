# Build Credit Card 1 in BuilderStudio

> Build this component in our Agentic IDE: [BuilderStudio](https://builderstudio.dev).
>
> Join the BuilderStudio community on [Discord](https://discord.gg/QdWeSGCqfe) and [Reddit](https://reddit.com/r/builderstudio).

![Credit Card 1 screenshot](screenshot.png)

## Component

- Author group: `itsankitverma`
- Component: `credit-card-1`
- Variant: `default`
- Rendered HTML snapshot: [`rendered.html`](rendered.html)

## BuilderStudio prompt

You are implementing a React component based on a component reference.

## Component identity

- Author: itsankitverma
- Component slug: credit-card-1
- Demo slug: default
- Title: credit-card-1
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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="flex items-center justify-center min-h-screen relative overflow-hidden w-full"><div class="absolute inset-0 bg-gradient-to-br from-slate-100 via-purple-100 to-blue-100 dark:from-slate-900 dark:via-purple-950 dark:to-slate-900"></div><div class="absolute top-20 left-20 w-96 h-96 bg-cyan-300/20 dark:bg-cyan-500/10 rounded-full blur-3xl" style="transform: translateX(49.5939px) translateY(-29.7563px);"></div><div class="absolute bottom-20 right-20 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl" style="transform: translateX(-45.0115px) translateY(27.0069px);"></div><div class="relative"><div class="relative w-96 h-56" style="perspective: 1000px; opacity: 1; transform: none;"><div class="relative w-full h-full cursor-pointer" style="transform-style: preserve-3d; transform: none;"><div class="absolute inset-0 rounded-2xl p-8 shadow-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 backface-hidden" style="backface-visibility: hidden;"><div class="absolute inset-0 rounded-2xl overflow-hidden"><div class="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0" style="transform: translateX(100%);"></div></div><div class="relative h-full flex flex-col justify-between text-white"><div class="flex justify-between items-start"><div class="flex items-center gap-4" style="opacity: 1; transform: none;"><div class="w-12 h-9 rounded bg-gradient-to-br from-amber-600 to-yellow-700 shadow-inner"></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wifi w-6 h-6 rotate-90" aria-hidden="true"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg></div><button class="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors" tabindex="0" style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye w-4 h-4" aria-hidden="true"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg></button></div><div class="text-2xl font-mono tracking-wider" style="opacity: 1; transform: none;">•••• •••• •••• 9010</div><div class="flex justify-between items-end"><div style="opacity: 1; transform: none;"><div class="text-xs opacity-70 mb-1">CARD HOLDER</div><div class="font-medium text-sm tracking-wide">ANKIT VERMA</div></div><div style="opacity: 1; transform: none;"><div class="text-xs opacity-70 mb-1">EXPIRES</div><div class="font-medium text-sm">••/••</div></div><div class="text-3xl font-bold italic" style="opacity: 1; transform: none;">VISA</div></div></div></div><div class="absolute inset-0 rounded-2xl shadow-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 backface-hidden" style="backface-visibility: hidden; transform: rotateY(180deg);"><div class="absolute top-8 left-0 right-0 h-12 bg-black/80"></div><div class="absolute top-24 left-6 right-6 bg-white/90 h-10 rounded flex items-center justify-end px-3"><div class="text-black font-mono font-bold" style="opacity: 1;">•••</div></div><div class="absolute bottom-8 left-8 right-8 text-white text-xs space-y-2 opacity-70"><p>This card is property of issuing bank</p><p>Customer Service: 1-800-VISA</p><p class="text-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Authorized signature required for all transactions.</p></div></div></div><div class="absolute -top-4 -right-4 w-20 h-20 bg-violet-400/30 dark:bg-violet-500/20 rounded-full blur-2xl" style="transform: scale(1.19442);"></div><div class="absolute -bottom-4 -left-4 w-24 h-24 bg-pink-400/30 dark:bg-pink-500/20 rounded-full blur-2xl" style="transform: scale(1.07195);"></div></div><div class="text-center text-gray-600 dark:text-gray-400 text-sm mt-8" style="opacity: 1; transform: none;"><p>Click to flip • 3D mouse effect • Eye reveals details</p></div></div></div></div></div></div>
```

## Reference source files

No reference source files were available.
