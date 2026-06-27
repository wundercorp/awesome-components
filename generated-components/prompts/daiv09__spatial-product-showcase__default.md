# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/daiv09/spatial-product-showcase/default
- Registry URL: https://21st.dev/r/daiv09/spatial-product-showcase
- Author: daiv09
- Component slug: spatial-product-showcase
- Demo slug: default
- Title: spatial-product-showcase
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/daiv09/spatial-product-showcase with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/daiv09__spatial-product-showcase__default.html
- Local screenshot file: generated-21st-prompts/screenshots/daiv09__spatial-product-showcase__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative min-h-screen w-full bg-black text-zinc-100 overflow-hidden selection:bg-zinc-800 flex flex-col items-center justify-center"><div class="fixed inset-0 pointer-events-none"><div class="absolute inset-0" style="background: radial-gradient(circle at 0% 50%, rgba(59, 130, 246, 0.15), transparent 50%);"></div></div><main class="relative z-10 w-full px-6 py-8 flex flex-col justify-center max-w-7xl mx-auto"><div class="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 lg:gap-48 w-full md:flex-row"><div class="relative group shrink-0"><div class="absolute inset-[-20%] rounded-full border border-dashed border-white/10 border-l-blue-500/50" style="transform: rotate(85.608deg);"></div><div class="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-indigo-900 blur-2xl opacity-40" style="transform: scale(1.01488);"></div><div class="relative h-80 w-80 md:h-[450px] md:w-[450px] rounded-full border border-white/5 shadow-2xl flex items-center justify-center overflow-hidden bg-black/20 backdrop-blur-sm"><div class="relative z-10 w-full h-full flex items-center justify-center" style="transform: translateY(-2.88539px);"><img alt="Spatial Anchor" class="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-4" draggable="false" src="https://ik.imagekit.io/kqmrslzuq/SOUND/left-earbud.png" style="opacity: 1; filter: blur(0px); transform: none;"></div></div><div class="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"><div class="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 bg-zinc-950/80 px-4 py-2 rounded-full border border-white/5 backdrop-blur"><span class="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></span>Connected</div></div></div><div class="w-full max-w-md"><div class="flex flex-col items-start text-left" style="opacity: 1;"><h2 class="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2" style="opacity: 1; filter: blur(0px); transform: none;">Left Earbud</h2><h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500" style="opacity: 1; filter: blur(0px); transform: none;">Spatial Anchor</h1><p class="text-zinc-400 mb-8 max-w-sm leading-relaxed mr-auto" style="opacity: 1; filter: blur(0px); transform: none;">The primary node for binaural synchronization. Handles low-latency transmission and anchors the spatial audio soundstage.</p><div class="w-full space-y-6 bg-zinc-900/40 p-6 rounded-2xl border border-white/5 backdrop-blur-sm" style="opacity: 1; filter: blur(0px); transform: none;"><div class="group"><div class="flex items-center justify-between mb-3 text-sm flex-row"><div class="flex items-center gap-2 text-zinc-400"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> <span>Latency</span></div><span class="font-mono text-xs text-zinc-500">12%</span></div><div class="relative h-2 w-full bg-zinc-800 rounded-full overflow-hidden"><div class="absolute top-0 bottom-0 left-0 bg-blue-500 opacity-80" style="width: 12%;"></div></div></div><div class="group"><div class="flex items-center justify-between mb-3 text-sm flex-row"><div class="flex items-center gap-2 text-zinc-200"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wifi" aria-hidden="true"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg> <span>Sync Rate</span></div><span class="font-mono text-xs text-zinc-500">98%</span></div><div class="relative h-2 w-full bg-zinc-800 rounded-full overflow-hidden"><div class="absolute top-0 bottom-0 left-0 bg-blue-500 opacity-80" style="width: 98%;"></div></div></div><div class="pt-4 flex justify-start"><button type="button" class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-white transition-colors group"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sliders-vertical" aria-hidden="true"><line x1="4" x2="4" y1="21" y2="14"></line><line x1="4" x2="4" y1="10" y2="3"></line><line x1="12" x2="12" y1="21" y2="12"></line><line x1="12" x2="12" y1="8" y2="3"></line><line x1="20" x2="20" y1="21" y2="16"></line><line x1="20" x2="20" y1="12" y2="3"></line><line x1="2" x2="6" y1="14" y2="14"></line><line x1="10" x2="14" y1="8" y2="8"></line><line x1="18" x2="22" y1="16" y2="16"></line></svg> View Specs<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right group-hover:translate-x-1 transition-transform" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button></div></div><div class="mt-6 flex items-center gap-3 text-zinc-500 flex-row" style="opacity: 1; filter: blur(0px); transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-battery" aria-hidden="true"><rect width="16" height="10" x="2" y="7" rx="2" ry="2"></rect><line x1="22" x2="22" y1="11" y2="13"></line></svg><span class="text-sm font-medium">82% Charge</span></div></div></div></div></main><div class="fixed bottom-12 inset-x-0 flex justify-center z-50 pointer-events-none"><div class="pointer-events-auto flex items-center gap-1 p-1.5 rounded-full bg-zinc-900/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] ring-1 ring-white/5"><button class="relative w-24 h-12 rounded-full flex items-center justify-center text-sm font-medium focus:outline-none" tabindex="0"><div class="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-white/5 shadow-inner" style="opacity: 1;"></div><span class="relative z-10 transition-colors duration-300 text-white">Left</span><span class="absolute -bottom-1 h-1 w-6 rounded-full bg-gradient-to-r from-transparent via-white/60 to-transparent" style="opacity: 1; transform: none;"></span></button><button class="relative w-24 h-12 rounded-full flex items-center justify-center text-sm font-medium focus:outline-none" tabindex="0"><span class="relative z-10 transition-colors duration-300 text-zinc-500 hover:text-zinc-300">Right</span></button></div></div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.