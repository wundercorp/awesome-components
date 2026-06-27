# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/feevercz/kinetic-shatter-box-section/default
- Registry URL: https://21st.dev/r/feevercz/kinetic-shatter-box-section
- Author: feevercz
- Component slug: kinetic-shatter-box-section
- Demo slug: default
- Title: kinetic-shatter-box-section
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/feevercz/kinetic-shatter-box-section with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/feevercz__kinetic-shatter-box-section__default.html
- Local screenshot file: generated-21st-prompts/screenshots/feevercz__kinetic-shatter-box-section__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative w-full min-h-screen bg-zinc-950 overflow-hidden font-sans flex items-center justify-center p-8"><div class="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style="background-image: radial-gradient(circle at 1px 1px, rgb(0, 0, 0) 1px, transparent 0px); background-size: 40px 40px;"></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl z-10"><div class="h-64 w-full"><div class="relative w-full h-full"><div class="absolute inset-0 bg-zinc-900 border-4 border-dashed border-zinc-700 flex flex-col items-center justify-center z-0"><span class="text-zinc-400 font-black text-2xl uppercase tracking-widest mb-2">Gone</span></div><div class="pointer-events-none absolute inset-0 z-50 overflow-visible" style="transform: translate(0px, 0px) rotate(0deg);"></div><div class="relative z-10 bg-white border-4 border-black p-6 shadow-neo cursor-grab active:cursor-grabbing select-none h-full flex flex-col justify-between overflow-hidden transition-[background-color] hover:animate-[hover-wiggle_0.8s_ease-in-out_infinite]" style="transform: translate(0px, 0px) rotate(0deg); transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1); opacity: 1; mask-image: none; mask-size: 100% 100%; mask-repeat: no-repeat;"><div><div class="flex justify-between items-start mb-4"><h3 class="font-black text-3xl uppercase tracking-tighter leading-none">About Me</h3><div class="w-8 h-8 bg-black rounded-full flex-shrink-0"></div></div><p class="font-bold text-lg leading-tight">Creative developer with a passion for interactive UI and physics-based web experiences.</p></div><div class="mt-8 border-t-2 border-black pt-2 flex justify-between text-xs font-mono uppercase"><span>Fig. 14</span><span class="">INTACT</span></div></div><svg width="0" height="0" class="absolute"><defs><mask id="mask-card-0uz0kyqxf" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox"><rect x="0" y="0" width="1" height="1" fill="white"></rect></mask></defs></svg></div></div><div class="h-64 w-full"><div class="relative w-full h-full"><div class="absolute inset-0 bg-zinc-900 border-4 border-dashed border-zinc-700 flex flex-col items-center justify-center z-0"><span class="text-zinc-400 font-black text-2xl uppercase tracking-widest mb-2">Gone</span></div><div class="pointer-events-none absolute inset-0 z-50 overflow-visible" style="transform: translate(0px, 0px) rotate(0deg);"></div><div class="relative z-10 bg-white border-4 border-black p-6 shadow-neo cursor-grab active:cursor-grabbing select-none h-full flex flex-col justify-between overflow-hidden transition-[background-color] hover:animate-[hover-wiggle_0.8s_ease-in-out_infinite]" style="transform: translate(0px, 0px) rotate(0deg); transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1); opacity: 1; mask-image: none; mask-size: 100% 100%; mask-repeat: no-repeat;"><div><div class="flex justify-between items-start mb-4"><h3 class="font-black text-3xl uppercase tracking-tighter leading-none">Projects</h3><div class="w-8 h-8 bg-black rounded-full flex-shrink-0"></div></div><p class="font-bold text-lg leading-tight">A collection of experiments, prototypes, and production-ready applications.</p></div><div class="mt-8 border-t-2 border-black pt-2 flex justify-between text-xs font-mono uppercase"><span>Fig. 06</span><span class="">INTACT</span></div></div><svg width="0" height="0" class="absolute"><defs><mask id="mask-card-3jzhvkxnn" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox"><rect x="0" y="0" width="1" height="1" fill="white"></rect></mask></defs></svg></div></div><div class="h-64 w-full"><div class="relative w-full h-full"><div class="absolute inset-0 bg-zinc-900 border-4 border-dashed border-zinc-700 flex flex-col items-center justify-center z-0"><span class="text-zinc-400 font-black text-2xl uppercase tracking-widest mb-2">Gone</span></div><div class="pointer-events-none absolute inset-0 z-50 overflow-visible" style="transform: translate(0px, 0px) rotate(0deg);"></div><div class="relative z-10 bg-white border-4 border-black p-6 shadow-neo cursor-grab active:cursor-grabbing select-none h-full flex flex-col justify-between overflow-hidden transition-[background-color] hover:animate-[hover-wiggle_0.8s_ease-in-out_infinite]" style="transform: translate(0px, 0px) rotate(0deg); transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1); opacity: 1; mask-image: none; mask-size: 100% 100%; mask-repeat: no-repeat;"><div><div class="flex justify-between items-start mb-4"><h3 class="font-black text-3xl uppercase tracking-tighter leading-none">Experience</h3><div class="w-8 h-8 bg-black rounded-full flex-shrink-0"></div></div><p class="font-bold text-lg leading-tight">Over 5 years of working with React, TypeScript, and modern frontend ecosystems.</p></div><div class="mt-8 border-t-2 border-black pt-2 flex justify-between text-xs font-mono uppercase"><span>Fig. 13</span><span class="">INTACT</span></div></div><svg width="0" height="0" class="absolute"><defs><mask id="mask-card-wbw9e1q2e" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox"><rect x="0" y="0" width="1" height="1" fill="white"></rect></mask></defs></svg></div></div><div class="h-64 w-full"><div class="relative w-full h-full"><div class="absolute inset-0 bg-zinc-900 border-4 border-dashed border-zinc-700 flex flex-col items-center justify-center z-0"><span class="text-zinc-400 font-black text-2xl uppercase tracking-widest mb-2">Gone</span></div><div class="pointer-events-none absolute inset-0 z-50 overflow-visible" style="transform: translate(0px, 0px) rotate(0deg);"></div><div class="relative z-10 bg-white border-4 border-black p-6 shadow-neo cursor-grab active:cursor-grabbing select-none h-full flex flex-col justify-between overflow-hidden transition-[background-color] hover:animate-[hover-wiggle_0.8s_ease-in-out_infinite]" style="transform: translate(0px, 0px) rotate(0deg); transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1); opacity: 1; mask-image: none; mask-size: 100% 100%; mask-repeat: no-repeat;"><div><div class="flex justify-between items-start mb-4"><h3 class="font-black text-3xl uppercase tracking-tighter leading-none">Contact</h3><div class="w-8 h-8 bg-black rounded-full flex-shrink-0"></div></div><p class="font-bold text-lg leading-tight">Get in touch for collaborations, freelance work, or just to say hello.</p></div><div class="mt-8 border-t-2 border-black pt-2 flex justify-between text-xs font-mono uppercase"><span>Fig. 13</span><span class="">INTACT</span></div></div><svg width="0" height="0" class="absolute"><defs><mask id="mask-card-nuucb3e1p" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox"><rect x="0" y="0" width="1" height="1" fill="white"></rect></mask></defs></svg></div></div></div><div class="absolute bottom-8 left-0 w-full text-center text-gray-400 font-mono text-xs uppercase tracking-widest pointer-events-none">Shake cards to break them free</div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.