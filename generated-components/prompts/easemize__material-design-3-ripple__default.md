# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/easemize/material-design-3-ripple/default
- Registry URL: https://21st.dev/r/easemize/material-design-3-ripple
- Author: easemize
- Component slug: material-design-3-ripple
- Demo slug: default
- Title: material-design-3-ripple
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/easemize/material-design-3-ripple with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/easemize__material-design-3-ripple__default.html
- Local screenshot file: generated-21st-prompts/screenshots/easemize__material-design-3-ripple__default.png

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
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><div class="relative min-h-[600px] h-screen w-full flex items-center justify-center bg-[#09090b] overflow-hidden font-sans selection:bg-indigo-500/30"><div class="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div><div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none"></div><div class="relative z-10 group"><div class="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[32px] blur opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div><div class="relative w-[340px] bg-zinc-950 rounded-[30px] border border-white/10 shadow-2xl flex flex-col overflow-hidden"><div class="relative overflow-hidden isolate z-0 rounded-[inherit] text-white cursor-pointer"><div class="relative z-10 pointer-events-none"><div class="h-full w-full p-8 flex flex-col justify-between relative z-20 pointer-events-none"><div class="flex justify-between items-start"><div class="space-y-1"><h3 class="text-zinc-400 text-xs font-medium uppercase tracking-[0.2em]">Security Level</h3><p class="text-white font-bold text-xl">Class A</p></div><div class="p-2 rounded-full border transition-colors duration-500 bg-rose-500/10 border-rose-500/20 text-rose-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock w-5 h-5" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div></div><div class="flex-1 flex items-center justify-center"><div class="relative"><div class="absolute inset-0 bg-indigo-500 blur-[40px] transition-opacity duration-700 opacity-0"></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-fingerprint w-24 h-24 transition-all duration-700 text-zinc-700 scale-100" aria-hidden="true"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M2 12a10 10 0 0 1 18-6"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path></svg></div></div><div class="space-y-6"><div class="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div><div class="flex items-center justify-between"><div><p class="text-zinc-500 text-xs">Biometric Scan</p><p class="text-zinc-300 text-sm font-medium mt-0.5">Touch to Authorize</p></div><div class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-white/10 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right w-5 h-5 text-zinc-400" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></div></div></div></div></div><div class="absolute inset-0 z-0 pointer-events-none" aria-hidden="true"><div class="absolute inset-0 bg-current transition-opacity duration-200 ease-linear opacity-0"></div><div class="absolute rounded-full opacity-0 bg-current" style="background: radial-gradient(closest-side, currentcolor max(100% - 70px, 65%), transparent 100%); transition: opacity 375ms linear; opacity: 0;"></div></div></div></div></div><div class="absolute bottom-12 text-zinc-500 text-xs font-mono tracking-widest opacity-60">INTERACTIVE SURFACE • CLICK ANYWHERE</div></div></div></div></div>
```

## Public registry source files

No public registry source files were available.